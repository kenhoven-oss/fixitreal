import type { MetadataRoute } from "next";
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
  { path: "/home-repair-cost-calendar", priority: 0.7, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${env.siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const toolEntries: MetadataRoute.Sitemap = getAllJobSlugs().map((slug) => ({
    url: `${env.siteUrl}/tools/diy-or-hire/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const articles = await loadAllArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${env.siteUrl}${a.path}`,
    lastModified: new Date(
      a.frontmatter.updatedAt ?? a.frontmatter.publishedAt
    ),
    changeFrequency: a.frontmatter.pillar === "costs" ? "monthly" : "yearly",
    priority: 0.8,
  }));

  return [...staticEntries, ...toolEntries, ...articleEntries];
}
