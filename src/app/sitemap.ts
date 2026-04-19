import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { site } from "@/content/site";

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
  { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  void site;
  return staticRoutes.map((r) => ({
    url: `${env.siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
