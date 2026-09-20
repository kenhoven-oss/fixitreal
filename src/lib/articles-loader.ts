import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { getJob } from "@/content/jobs";
import { existsSync } from "node:fs";
import matter from "gray-matter";
import {
  articleFrontmatterSchema,
  type ArticleFrontmatter,
  PILLARS,
  type Pillar,
} from "@/lib/articles";

const CONTENT_ROOT = path.join(process.cwd(), "src/content/articles");

export type LoadedArticle = {
  frontmatter: ArticleFrontmatter;
  content: string;
  path: string;
};

/** Load a single article by pillar + slug. Returns null if not found. */
export async function loadArticle(
  pillar: Pillar,
  slug: string
): Promise<LoadedArticle | null> {
  const filePath = path.join(CONTENT_ROOT, pillar, `${slug}.mdx`);
  try {
    const raw = await readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    const frontmatter = articleFrontmatterSchema.parse({
      ...data,
      slug,
      pillar,
    });
    // Cross-reference checks the schema can't express: every typed
    // shortcut must point at something that exists, or the page renders a
    // link to a 404 / a redirect. Fail the build instead.
    if (frontmatter.relatedJob && !getJob(frontmatter.relatedJob)) {
      throw new Error(
        `${pillar}/${slug}.mdx: relatedJob "${frontmatter.relatedJob}" is not a job slug in src/content/jobs.ts`
      );
    }
    for (const [key, targetPillar] of [
      ["relatedDecision", "diy-or-hire"],
      ["relatedCost", "costs"],
    ] as const) {
      const v = frontmatter[key];
      if (v && !existsSync(path.join(CONTENT_ROOT, targetPillar, `${v}.mdx`))) {
        throw new Error(`${pillar}/${slug}.mdx: ${key} "${v}" has no article at ${targetPillar}/${v}.mdx`);
      }
    }
    for (const a of frontmatter.relatedAdvice ?? []) {
      if (!existsSync(path.join(CONTENT_ROOT, "advice", `${a}.mdx`))) {
        throw new Error(`${pillar}/${slug}.mdx: relatedAdvice "${a}" has no article at advice/${a}.mdx`);
      }
    }
    return { frontmatter, content, path: `/${pillar}/${slug}` };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

/** List all article slugs for a pillar (for generateStaticParams). */
export async function listArticleSlugs(pillar: Pillar): Promise<string[]> {
  const dir = path.join(CONTENT_ROOT, pillar);
  try {
    const files = await readdir(dir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

/** Load all articles across all pillars; sorts by publishedAt desc. */
export async function loadAllArticles(): Promise<LoadedArticle[]> {
  const all: LoadedArticle[] = [];
  for (const pillar of PILLARS) {
    const slugs = await listArticleSlugs(pillar);
    for (const slug of slugs) {
      const a = await loadArticle(pillar, slug);
      if (a) all.push(a);
    }
  }
  return all.sort((a, b) =>
    b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt)
  );
}

/** Load only the title for a single article — fast, no content parsing. */
export async function loadArticleTitle(
  pillar: Pillar,
  slug: string
): Promise<string | null> {
  const article = await loadArticle(pillar, slug);
  return article?.frontmatter.title ?? null;
}

export async function loadArticlesByPillar(pillar: Pillar): Promise<LoadedArticle[]> {
  const slugs = await listArticleSlugs(pillar);
  const loaded = await Promise.all(slugs.map((s) => loadArticle(pillar, s)));
  return loaded
    .filter((a): a is LoadedArticle => a !== null)
    .sort((a, b) =>
      b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt)
    );
}
