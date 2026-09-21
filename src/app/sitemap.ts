import type { MetadataRoute } from "next";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { env } from "@/lib/env";
import { getRenderedJobSlugs, getJob, jobs } from "@/content/jobs";
import { STATE_COST_UPDATED } from "@/content/state-cost-data";
import { loadAllArticles } from "@/lib/articles-loader";
import { getAllTopics } from "@/lib/topics";

/**
 * `lastmod` has to be TRUE, not merely present.
 *
 * Google uses lastmod only while a site proves the value is reliable and
 * ignores it site-wide once it is demonstrably not. Stamping `new Date()` on
 * a URL whose content did not change claims hundreds of pages changed on
 * every deploy and teaches Google to distrust the field — which also
 * devalues the article URLs where our lastmod is accurate.
 *
 * So there is no build-time date anywhere in this file:
 *   - articles         → frontmatter updatedAt ?? publishedAt
 *   - buying guides    → the guide's own `const updatedAt`
 *   - job pages        → the job's lastReviewed
 *   - hub pages        → the newest date among the pages they list
 *   - other static     → STATIC_LASTMOD (last commit that changed the copy)
 *
 * Vercel does a fresh clone on every build, so file mtimes are checkout
 * times and must not be used.
 */

const d = (iso: string) => new Date(`${iso}T00:00:00.000Z`);

/**
 * Last content change for pages that don't list articles (so "newest
 * article" would be a lie). Each date is the last commit that changed the
 * page's copy. Update the date when you edit the page — same contract as
 * `updatedAt` in an article's frontmatter.
 */
const STATIC_LASTMOD: Record<string, Date> = {
  "/about": d("2026-05-15"),
  "/about/editorial-standards": d("2026-04-19"),
  "/about/methodology": d("2026-04-19"),
  "/about/contact": d("2026-04-19"),
  "/affiliate-disclosure": d("2026-05-16"),
  "/corrections": d("2026-05-16"),
  "/privacy": d("2026-04-20"),
  "/terms": d("2026-04-20"),
  "/disclaimer": d("2026-05-27"),
  "/contractor-red-flags": d("2026-09-20"),
  "/home-repair-cost-calendar": d("2026-04-19"),
  "/tools/contractor-quote-checker": d("2026-09-20"),
  "/tools/repair-cost-estimator": d("2026-09-20"),
  "/tools/home-renovation-cost-estimator": d("2026-05-27"),
  "/tools/diy-project-cost-tracker": d("2026-05-27"),
  "/tools/home-cleaning-cost-calculator": d("2026-05-27"),
};

/** Glossary entries carry no per-entry date; this is the glossary file's last content change. */
const GLOSSARY_UPDATED = d("2026-09-20");

/**
 * URLs that are live but noindexed (robots {index:false, follow:true}) and
 * therefore must never appear in the sitemap: the programmatic state and
 * metro cost pages, and the auto-generated keyword topic pages. Applied to
 * the final list as a hard filter so no future entry can slip through.
 */
const SITEMAP_EXCLUDE = [/^\/costs\/[^/]+\/.+/, /^\/topics\//];

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** Real content date. Hubs without one get the newest date among what they list. */
  lastModified?: Date;
};

const staticRoutes: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/diy-or-hire", priority: 0.9, changeFrequency: "weekly" },
  { path: "/costs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/advice", priority: 0.9, changeFrequency: "weekly" },
  { path: "/home-inspection-repairs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contractor-red-flags", priority: 0.85, changeFrequency: "monthly" },
  { path: "/senior-home-safety", priority: 0.9, changeFrequency: "weekly" },
  { path: "/emergency-repairs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/what-is-this", priority: 0.85, changeFrequency: "weekly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/tools", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tools/diy-or-hire", priority: 0.85, changeFrequency: "monthly" },
  { path: "/tools/contractor-quote-checker", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tools/repair-cost-estimator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tools/home-renovation-cost-estimator", priority: 0.85, changeFrequency: "monthly" },
  { path: "/tools/diy-project-cost-tracker", priority: 0.85, changeFrequency: "monthly" },
  { path: "/tools/home-cleaning-cost-calculator", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about/editorial-standards", priority: 0.4, changeFrequency: "yearly" },
  { path: "/about/methodology", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/contact", priority: 0.3, changeFrequency: "yearly" },
  { path: "/about/authors/ken-hoven", priority: 0.4, changeFrequency: "yearly" },
  { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "yearly" },
  { path: "/corrections", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/home-repair-cost-calendar", priority: 0.7, changeFrequency: "monthly" },
  { path: "/reports/2026-state-repair-cost-index", priority: 0.8, changeFrequency: "monthly" },
  { path: "/topics", priority: 0.7, changeFrequency: "weekly" },
  { path: "/glossary", priority: 0.7, changeFrequency: "monthly" },
];

/**
 * Discover every /tools/best-* buying-guide folder at build time so new
 * guides get picked up in the sitemap without touching this file.
 *
 * Each guide declares `const updatedAt = "YYYY-MM-DD"` as the single source of
 * truth for its dates (OG metadata, visible byline, Article JSON-LD). We read
 * that same constant here so the sitemap agrees with the page instead of
 * claiming a build-time edit that never happened.
 */
async function discoverBuyingGuideRoutes(): Promise<Route[]> {
  const toolsDir = path.join(process.cwd(), "src", "app", "tools");
  try {
    const entries = await readdir(toolsDir, { withFileTypes: true });
    const guides = entries.filter(
      (e) => e.isDirectory() && e.name.startsWith("best-")
    );

    return await Promise.all(
      guides.map(async (e) => {
        let lastModified: Date | undefined;
        try {
          const source = await readFile(
            path.join(toolsDir, e.name, "page.tsx"),
            "utf8"
          );
          const match = /const updatedAt = "([\d-]{10})"/.exec(source);
          if (match) lastModified = new Date(`${match[1]}T00:00:00.000Z`);
        } catch {
          // Fall through to the hub-page default below.
        }

        return {
          path: `/tools/${e.name}`,
          priority: 0.75,
          changeFrequency: "monthly" as const,
          lastModified,
        };
      })
    );
  } catch {
    return [];
  }
}

/**
 * Build a full sitemap URL that matches the page's rendered `alternates.canonical`
 * byte-for-byte. We use the URL constructor for robust path resolution, then
 * strip a trailing slash on the root URL because Next.js's metadata API emits
 * the homepage canonical without one. Keeping them identical prevents Search
 * Console "URL is not on Google" warnings from minor-format mismatch.
 */
function fullUrl(path: string): string {
  const u = new URL(path, env.siteUrl).toString();
  // Strip the trailing slash ONLY on a bare root URL (e.g. https://host/).
  // Non-root paths already have no trailing slash. This matches Next's
  // canonical normalization, which emits the homepage canonical as
  // https://www.fixitreal.com (no slash).
  return u.replace(/^(https?:\/\/[^/]+)\/$/, "$1");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const buyingGuides = await discoverBuyingGuideRoutes();
  const allStaticRoutes = [...staticRoutes, ...buyingGuides];
  const articlesForHubs = await loadAllArticles();

  /**
   * lastmod for a hub is the newest updatedAt/publishedAt among the
   * articles it lists — not the build time. A build-time stamp says
   * "changed every deploy", which is false and teaches crawlers to ignore
   * the field. Hubs whose pillar has no articles (about, legal, tools)
   * fall back to the newest article on the site, which is the last time
   * their listings could have changed.
   */
  const newest = (list: typeof articlesForHubs) =>
    list.reduce<Date | undefined>((acc, a) => {
      const d = new Date(`${a.frontmatter.updatedAt ?? a.frontmatter.publishedAt}T00:00:00.000Z`);
      return !acc || d > acc ? d : acc;
    }, undefined);
  const siteNewest = newest(articlesForHubs) ?? d("2026-04-19");
  const newestGuide = buyingGuides.reduce<Date | undefined>(
    (acc, g) => (g.lastModified && (!acc || g.lastModified > acc) ? g.lastModified : acc),
    undefined
  );
  const newestJob = jobs.reduce<Date | undefined>((acc, j) => {
    const x = d(j.lastReviewed);
    return !acc || x > acc ? x : acc;
  }, undefined);
  const hubLastmod = (path: string): Date => {
    if (STATIC_LASTMOD[path]) return STATIC_LASTMOD[path];
    if (path === "/tools") return newestGuide ?? siteNewest;
    if (path === "/tools/diy-or-hire") return newestJob ?? siteNewest;
    if (path === "/glossary") return GLOSSARY_UPDATED;
    if (path.startsWith("/reports/")) return d(STATE_COST_UPDATED);
    const pillar = path.replace(/^\//, "");
    const inPillar = articlesForHubs.filter((a) => a.frontmatter.pillar === pillar);
    // Pillar hubs list their pillar; "/", "/topics" and the author page list
    // articles from across the site.
    return inPillar.length ? (newest(inPillar) ?? siteNewest) : siteNewest;
  };

  const staticEntries: MetadataRoute.Sitemap = allStaticRoutes.map((r) => ({
    url: fullUrl(r.path),
    lastModified: r.lastModified ?? hubLastmod(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Exclude job slugs that 301 redirect to /diy-or-hire/<article> per
  // next.config.ts. Sitemaps should list canonical URLs only; including a
  // redirect source wastes Google's crawl budget and can suppress the
  // canonical destination in mixed-signal cases.
  const toolEntries: MetadataRoute.Sitemap = getRenderedJobSlugs()
    .map((slug) => ({
      url: fullUrl(`/tools/diy-or-hire/${slug}`),
      lastModified: d(getJob(slug)!.lastReviewed),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  const articles = await loadAllArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: fullUrl(a.path),
    lastModified: d(a.frontmatter.updatedAt ?? a.frontmatter.publishedAt),
    changeFrequency: a.frontmatter.pillar === "costs" ? "monthly" : "yearly",
    priority: 0.8,
    // Image sitemap entry: every article has a route-prerendered OG image at
    // /<pillar>/<slug>/opengraph-image. Including it gives Google a strong
    // image-pair signal for Image Search and discovery.
    images: [fullUrl(`${a.path}/opengraph-image`)],
  }));

  const topics = await getAllTopics();
  const topicEntries: MetadataRoute.Sitemap = topics.map((t) => ({
    url: fullUrl(`/topics/${t.slug}`),
    lastModified: newest(t.articles) ?? siteNewest,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Glossary entries: each is a small Article page targeting a single
  // long-tail "what is a <term>" query.
  const { getAllGlossarySlugs } = await import("@/content/glossary");
  const glossaryEntries: MetadataRoute.Sitemap = getAllGlossarySlugs().map(
    (slug) => ({
      url: fullUrl(`/glossary/${slug}`),
      lastModified: GLOSSARY_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.55,
    })
  );

  // State-level cost pages: programmatic at /costs/<slug>/<state>, one per
  // (cost guide × priority state), targeting "[trade] cost in [state]"
  // long-tail queries. Count comes from the data files, not this comment.
  const { getAllStateCostParams, LOCAL_COST_PAGES_INDEXABLE } = await import("@/content/state-cost-data");
  // Noindexed pages must not be in the sitemap — Google treats that as a
  // contradiction and it wastes crawl budget on a young domain.
  const stateCostEntries: MetadataRoute.Sitemap = (LOCAL_COST_PAGES_INDEXABLE ? getAllStateCostParams() : []).map(
    ({ slug, state }) => ({
      url: fullUrl(`/costs/${slug}/${state}`),
      lastModified: d(STATE_COST_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })
  );

  // Metro-level cost pages: programmatic at /costs/<slug>/metro/<city>, one
  // per (cost guide × metro), targeting
  // "[trade] cost in [city]" long-tail queries. Higher purchase intent than
  // the state-level variant; less crowded with aggregator listings.
  const { getAllCityCostParams } = await import("@/content/city-cost-data");
  const metroCostEntries: MetadataRoute.Sitemap = (LOCAL_COST_PAGES_INDEXABLE ? getAllCityCostParams() : []).map(
    ({ slug, city }) => ({
      url: fullUrl(`/costs/${slug}/metro/${city}`),
      lastModified: d(STATE_COST_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const all: MetadataRoute.Sitemap = [
    ...staticEntries,
    ...toolEntries,
    ...articleEntries,
    ...topicEntries,
    ...glossaryEntries,
    ...stateCostEntries,
    ...metroCostEntries,
  ];
  return all.filter((e) => !SITEMAP_EXCLUDE.some((re) => re.test(new URL(e.url).pathname)));
}
