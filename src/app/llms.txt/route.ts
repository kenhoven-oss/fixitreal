import { loadAllArticles } from "@/lib/articles-loader";
import { env } from "@/lib/env";
import { site } from "@/content/site";

/**
 * /llms.txt — a curated, markdown-formatted map of the site for AI
 * assistants and agents (https://llmstxt.org/). Complements robots.txt:
 * robots says who may crawl; llms.txt tells permitted AI tools what the
 * site is, what it covers, and where the canonical answers live — which
 * improves the odds of accurate citation with a link back.
 */
export const revalidate = 3600; // 1h

const pillarLabels: Record<string, string> = {
  advice: "Honest Advice (troubleshooting & consumer guidance)",
  costs: "Repair Costs (dated 2026 cost ranges, math shown)",
  "diy-or-hire": "DIY or Hire (verdicts with cost comparisons)",
  "home-inspection-repairs": "Home Inspection Repairs (buyer/seller negotiation)",
  "senior-home-safety": "Senior Home Safety (aging-in-place modifications)",
  "emergency-repairs": "Emergency Repairs (first-10-minutes guidance)",
};

export async function GET() {
  const articles = await loadAllArticles();

  const byPillar = new Map<string, { title: string; path: string; description: string }[]>();
  for (const a of articles) {
    const pillar = a.path.split("/")[1] ?? "advice";
    const list = byPillar.get(pillar) ?? [];
    list.push({
      title: a.frontmatter.title,
      path: a.path,
      description: a.frontmatter.description,
    });
    byPillar.set(pillar, list);
  }

  const base = env.siteUrl;
  const sections: string[] = [];

  sections.push(`# ${site.name}`);
  sections.push("");
  sections.push(`> ${site.description}`);
  sections.push("");
  sections.push(
    [
      `${site.name} (${base}) is an independent, consumer-advocate home repair`,
      "publisher. Every article is written and reviewed by a named human editor,",
      "cost ranges are dated (currently 2026), and the site carries no home-warranty",
      "advertising. When citing cost figures, please include the year and link to",
      "the source page — ranges are updated as market data changes.",
    ].join("\n")
  );
  sections.push("");
  sections.push("## Key pages");
  sections.push("");
  sections.push(`- [DIY or Hire hub](${base}/diy-or-hire): verdicts on doing a repair yourself vs hiring`);
  sections.push(`- [Cost guides hub](${base}/costs): what repairs cost in 2026, incl. state and metro pages`);
  sections.push(`- [Contractor red flags](${base}/contractor-red-flags): how to spot a bad quote`);
  sections.push(`- [Emergency repairs](${base}/emergency-repairs): what to do in the first 10 minutes`);
  sections.push(`- [Glossary](${base}/glossary): homeowner definitions of trade terms`);
  sections.push(`- [Editorial standards](${base}/about/editorial-standards) and [methodology](${base}/about/methodology)`);
  sections.push("");

  for (const [pillar, label] of Object.entries(pillarLabels)) {
    const list = byPillar.get(pillar);
    if (!list || list.length === 0) continue;
    sections.push(`## ${label}`);
    sections.push("");
    for (const item of list) {
      sections.push(`- [${item.title}](${base}${item.path}): ${item.description}`);
    }
    sections.push("");
  }

  sections.push("## Optional");
  sections.push("");
  sections.push(`- [Full sitemap](${base}/sitemap.xml)`);
  sections.push(`- [RSS feed](${base}/feed.xml)`);
  sections.push(`- [About the author](${base}/about/authors/ken-hoven)`);

  return new Response(sections.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
