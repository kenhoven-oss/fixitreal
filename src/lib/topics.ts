import { loadAllArticles, type LoadedArticle } from "@/lib/articles-loader";

/**
 * Topic = a normalized keyword cluster mined from every article's `keywords`
 * frontmatter array. Topic pages exist to target long-tail searches that
 * span multiple pillars (e.g. "garbage disposal" matches both a DIY-or-hire
 * article and a cost guide).
 *
 * Why hand-rolled rather than tag system in a CMS:
 * - Content already lives in MDX frontmatter — single source of truth.
 * - No editor UI needed; new topics surface automatically when a new
 *   article ships with shared keywords.
 * - The cluster has SEO value precisely because Google can match a
 *   long-tail query to a page that aggregates multiple relevant articles.
 *
 * Threshold: a topic must group ≥ 2 articles to merit its own page.
 * One-article "topics" would be thin and risk being marked low-quality.
 */

export type Topic = {
  slug: string;
  label: string;
  articles: LoadedArticle[];
};

function topicSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Title-case a topic label, preserving common short words lowercase. */
function topicLabel(keyword: string): string {
  const lower = new Set(["a", "an", "and", "or", "the", "of", "for", "to", "in", "vs", "with"]);
  return keyword
    .split(/\s+/)
    .map((w, i) => {
      const lw = w.toLowerCase();
      if (i > 0 && lower.has(lw)) return lw;
      return lw.charAt(0).toUpperCase() + lw.slice(1);
    })
    .join(" ");
}

const MIN_ARTICLES_PER_TOPIC = 2;

export async function getAllTopics(): Promise<Topic[]> {
  const articles = await loadAllArticles();
  const bySlug = new Map<string, { label: string; articles: LoadedArticle[] }>();

  for (const a of articles) {
    for (const kw of a.frontmatter.keywords) {
      const slug = topicSlug(kw);
      if (!slug) continue;
      const entry = bySlug.get(slug) ?? { label: topicLabel(kw), articles: [] };
      // Deduplicate — the same article can list a keyword once; the same
      // topic can have several spellings (`toilet replacement` vs
      // `Toilet replacement`) which would collide on slug.
      if (!entry.articles.some((x) => x.path === a.path)) {
        entry.articles.push(a);
      }
      bySlug.set(slug, entry);
    }
  }

  const topics: Topic[] = [];
  for (const [slug, { label, articles }] of bySlug.entries()) {
    if (articles.length < MIN_ARTICLES_PER_TOPIC) continue;
    topics.push({
      slug,
      label,
      articles: articles.sort((a, b) =>
        b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt)
      ),
    });
  }

  return topics.sort((a, b) => b.articles.length - a.articles.length);
}

export async function getTopic(slug: string): Promise<Topic | null> {
  const topics = await getAllTopics();
  return topics.find((t) => t.slug === slug) ?? null;
}
