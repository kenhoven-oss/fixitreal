import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SearchClient, type SearchItem } from "@/components/search/SearchClient";
import { buildMetadata } from "@/lib/metadata";
import { loadAllArticles } from "@/lib/articles-loader";
import { jobs } from "@/content/jobs";

export const metadata = buildMetadata({
  title: "Search",
  description:
    "Search every FixItReal article, cost guide, and DIY-or-hire verdict.",
  path: "/search",
  // We don't want the /search page itself appearing in Google results.
  // The underlying articles do all the ranking; this is just a UX tool.
  noIndex: true,
});

/**
 * Labels are the same strings a user sees on pillar landing pages, so the
 * eyebrow on each search result reads naturally.
 */
const pillarLabels: Record<string, string> = {
  costs: "Cost guide",
  advice: "Advice",
  "diy-or-hire": "DIY or Hire",
};

export default async function SearchPage() {
  const articles = await loadAllArticles();

  // All indexable, canonical, publicly-reachable pages on the site.
  const articleItems: SearchItem[] = articles.map((a) => ({
    title: a.frontmatter.title,
    description: a.frontmatter.description,
    path: a.path,
    pillarLabel: pillarLabels[a.frontmatter.pillar] ?? a.frontmatter.pillar,
    keywords: a.frontmatter.keywords ?? [],
  }));

  const jobItems: SearchItem[] = jobs.map((j) => ({
    title: j.longTitle,
    description: j.reasoning,
    path: `/tools/diy-or-hire/${j.slug}`,
    pillarLabel: "Decision tool",
    // Derive searchable keywords from trade, verdict, and slug tokens.
    keywords: [
      j.trade,
      j.verdict.replace(/-/g, " "),
      ...j.slug.split("-"),
      ...j.shortTitle.toLowerCase().split(/\s+/),
    ],
  }));

  const index: SearchItem[] = [...articleItems, ...jobItems];

  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Search", href: "/search" },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Search
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Find the exact page you need.
          </h1>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Searches across every cost guide, advice article, DIY-or-hire
            verdict, and decision tool on the site.
          </p>
        </div>

        <div className="mt-10">
          <SearchClient index={index} />
        </div>
      </Section>
    </>
  );
}
