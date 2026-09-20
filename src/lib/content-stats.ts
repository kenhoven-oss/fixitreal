import { readdir } from "node:fs/promises";
import path from "node:path";
import { loadAllArticles } from "@/lib/articles-loader";
import { PILLARS, type Pillar } from "@/lib/articles";
import { jobs, jobHref } from "@/content/jobs";
import { glossary } from "@/content/glossary";
import { getAllStateCostParams } from "@/content/state-cost-data";
import { getAllCityCostParams } from "@/content/city-cost-data";

/**
 * Content counts, derived from the collections at build time.
 *
 * WHY
 * ---
 * The Tools hub said "10 DIY-or-hire verdicts" (jobs.length) while the
 * DIY-or-Hire hub listed 11 articles, because two different things were
 * being counted by hand in two places. Any number on the site that
 * describes how much content exists comes from here, so it cannot drift
 * from the content.
 *
 * Server-only: reads the filesystem. Call from server components/pages.
 */
export type ContentStats = {
  articles: number;
  byPillar: Record<Pillar, number>;
  /** Distinct DIY-or-hire decision pages: articles + job pages that don't redirect to one. */
  diyVerdicts: number;
  costGuides: number;
  buyingGuides: number;
  glossaryTerms: number;
  statePages: number;
  metroPages: number;
  /** Interactive tools under /tools that are not buying guides. */
  interactiveTools: number;
};

let cache: Promise<ContentStats> | null = null;

export function getContentStats(): Promise<ContentStats> {
  if (!cache) cache = compute();
  return cache;
}

async function compute(): Promise<ContentStats> {
  const articles = await loadAllArticles();
  const byPillar = Object.fromEntries(PILLARS.map((p) => [p, 0])) as Record<Pillar, number>;
  for (const a of articles) byPillar[a.frontmatter.pillar] += 1;

  // Decision pages: every /diy-or-hire article, plus every job whose page
  // is its own (not redirected onto an article). De-duplicated by href.
  const decisionHrefs = new Set<string>(articles.filter((a) => a.frontmatter.pillar === "diy-or-hire").map((a) => a.path));
  for (const j of jobs) decisionHrefs.add(jobHref(j.slug));

  const toolsDir = path.join(process.cwd(), "src", "app", "tools");
  let buyingGuides = 0;
  let interactiveTools = 0;
  try {
    for (const e of await readdir(toolsDir, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      if (e.name.startsWith("best-")) buyingGuides += 1;
      else interactiveTools += 1;
    }
  } catch {
    // leave zeros; the page will render without counts rather than wrong ones
  }

  return {
    articles: articles.length,
    byPillar,
    diyVerdicts: decisionHrefs.size,
    costGuides: byPillar.costs,
    buyingGuides,
    glossaryTerms: glossary.length,
    statePages: getAllStateCostParams().length,
    metroPages: getAllCityCostParams().length,
    interactiveTools,
  };
}
