import type { MetadataRoute } from "next";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { env } from "@/lib/env";
import { getAllJobSlugs } from "@/content/jobs";
import { loadAllArticles } from "@/lib/articles-loader";
import { getAllTopics } from "@/lib/topics";

const now = new Date();

/**
 * `lastmod` has to be TRUE, not merely present.
 *
 * Google's documented position is that it uses lastmod only while a site
 * proves the value is reliable, and starts ignoring it site-wide once it is
 * demonstrably not. Stamping `new Date()` on a URL whose content did not
 * change means every unrelated rebuild claims ~700 pages were updated. That
 * doesn't make Google recrawl them faster — it teaches Google to distrust the
 * signal, which then also devalues the ~106 article URLs where our lastmod
 * genuinely is accurate.
 *
 * So: `now` is used ONLY for hub/index pages, whose content really is derived
 * from the full article set and really does change whenever anything ships.
 * Everything else reads a real content date.
 */

/**
 * Last substantive review of the programmatic cost datasets (state, metro)
 * and the reference content built from them (glossary, topics).
 *
 * BUMP THIS when the underlying rate tables are refreshed — not on every
 * deploy. It is deliberately a hand-maintained constant rather than a file
 * mtime: Vercel does a fresh clone on every build, so mtimes there are just
 * the checkout time, which would silently reintroduce the exact problem this
 * constant exists to solve.
 */
const CONTENT_DATA_REVIEWED = new Date("2026-05-16T00:00:00.000Z");

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** Real content date. Falls back to `now` only for true hub pages. */
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

  const staticEntries: MetadataRoute.Sitemap = allStaticRoutes.map((r) => ({
    url: fullUrl(r.path),
    // Hub/index pages genuinely re-render from the whole article set, so a
    // build-time lastmod is honest for them. Buying guides supply their own.
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Exclude job slugs that 301 redirect to /diy-or-hire/<article> per
  // next.config.ts. Sitemaps should list canonical URLs only; including a
  // redirect source wastes Google's crawl budget and can suppress the
  // canonical destination in mixed-signal cases.
  const redirectedJobSlugs = new Set([
    "replace-toilet",
    "replace-garbage-disposal",
    "install-ceiling-fan",
    "install-dishwasher",
    "install-garage-door-opener",
    "replace-water-heater",
    "unclog-drain",
    "replace-outlet-gfci",
  ]);
  const toolEntries: MetadataRoute.Sitemap = getAllJobSlugs()
    .filter((slug) => !redirectedJobSlugs.has(slug))
    .map((slug) => ({
      url: fullUrl(`/tools/diy-or-hire/${slug}`),
      lastModified: CONTENT_DATA_REVIEWED,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  const articles = await loadAllArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: fullUrl(a.path),
    lastModified: new Date(
      a.frontmatter.updatedAt ?? a.frontmatter.publishedAt
    ),
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
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Glossary entries: each is a small Article page targeting a single
  // long-tail "what is a <term>" query.
  const { getAllGlossarySlugs } = await import("@/content/glossary");
  const glossaryEntries: MetadataRoute.Sitemap = getAllGlossarySlugs().map(
    (slug) => ({
      url: fullUrl(`/glossary/${slug}`),
      lastModified: CONTENT_DATA_REVIEWED,
      changeFrequency: "yearly" as const,
      priority: 0.55,
    })
  );

  // State-level cost pages: programmatic at /costs/<slug>/<state> for the
  // 25 priority states × 2 cost guides = 50 indexable URLs targeting
  // "[trade] cost in [state]" long-tail queries.
  const { getAllStateCostParams } = await import("@/content/state-cost-data");
  const stateCostEntries: MetadataRoute.Sitemap = getAllStateCostParams().map(
    ({ slug, state }) => ({
      url: fullUrl(`/costs/${slug}/${state}`),
      lastModified: CONTENT_DATA_REVIEWED,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })
  );

  // Metro-level cost pages: programmatic at /costs/<slug>/metro/<city> for
  // top-36 US metros × 5 cost guides = 180 indexable URLs targeting
  // "[trade] cost in [city]" long-tail queries. Higher purchase intent than
  // the state-level variant; less crowded with aggregator listings.
  const { getAllCityCostParams } = await import("@/content/city-cost-data");
  const metroCostEntries: MetadataRoute.Sitemap = getAllCityCostParams().map(
    ({ slug, city }) => ({
      url: fullUrl(`/costs/${slug}/metro/${city}`),
      lastModified: CONTENT_DATA_REVIEWED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [
    ...staticEntries,
    ...toolEntries,
    ...articleEntries,
    ...topicEntries,
    ...glossaryEntries,
    ...stateCostEntries,
    ...metroCostEntries,
  ];
}
