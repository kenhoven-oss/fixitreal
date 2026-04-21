import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { env } from "@/lib/env";
import { getAllJobSlugs } from "@/content/jobs";
import { loadAllArticles } from "@/lib/articles-loader";

const now = new Date();

type Route = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const staticRoutes: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/diy-or-hire", priority: 0.9, changeFrequency: "weekly" },
  { path: "/costs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/advice", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tools/diy-or-hire", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about/editorial-standards", priority: 0.4, changeFrequency: "yearly" },
  { path: "/about/methodology", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/contact", priority: 0.3, changeFrequency: "yearly" },
  { path: "/about/authors/ken-hoven", priority: 0.4, changeFrequency: "yearly" },
  { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/home-repair-cost-calendar", priority: 0.7, changeFrequency: "monthly" },
];

/**
 * Discover every /tools/best-* buying-guide folder at build time so new
 * guides get picked up in the sitemap without touching this file.
 */
async function discoverBuyingGuideRoutes(): Promise<Route[]> {
  const toolsDir = path.join(process.cwd(), "src", "app", "tools");
  try {
    const entries = await readdir(toolsDir, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && e.name.startsWith("best-"))
      .map((e) => ({
        path: `/tools/${e.name}`,
        priority: 0.75,
        changeFrequency: "monthly" as const,
      }));
  } catch {
    return [];
  }
}

/**
 * Build a full sitemap URL using the same URL-constructor normalization that
 * `buildMetadata` uses for `alternates.canonical`. This guarantees the sitemap
 * entry and the page's declared canonical are byte-identical — including the
 * homepage, where string concatenation would otherwise drift if env.siteUrl
 * ever gained or lost a trailing slash.
 */
function fullUrl(path: string): string {
  return new URL(path, env.siteUrl).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const buyingGuides = await discoverBuyingGuideRoutes();
  const allStaticRoutes = [...staticRoutes, ...buyingGuides];

  const staticEntries: MetadataRoute.Sitemap = allStaticRoutes.map((r) => ({
    url: fullUrl(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const toolEntries: MetadataRoute.Sitemap = getAllJobSlugs().map((slug) => ({
    url: fullUrl(`/tools/diy-or-hire/${slug}`),
    lastModified: now,
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
  }));

  return [...staticEntries, ...toolEntries, ...articleEntries];
}
