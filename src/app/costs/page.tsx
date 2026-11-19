import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema, itemListSchema } from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";
import { QuoteRequestCTA } from "@/components/marketing/QuoteRequestCTA";
import { getIndexedMetroLinks } from "@/lib/indexed-metro-links";

export const metadata = buildMetadata({
  title: "Repair costs: what things actually cost in 2026",
  description:
    "Honest home repair costs with labor, materials, permits, and regional variation broken out. Real numbers. Sources shown. Updated quarterly.",
  path: "/costs",
});

export default async function CostsHub() {
  const articles = await loadArticlesByPillar("costs");
  const cityGuides = getIndexedMetroLinks();

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Repair Costs", href: "/costs" }]} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            What home repairs actually cost in 2026
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              Most &ldquo;cost guides&rdquo; on the internet are thin: a range
              that&apos;s so wide (&ldquo;$500 to $5,000&rdquo;) it tells you
              nothing, no source, no permit breakdown, no regional variation,
              no update date. We&apos;re doing this differently.
            </p>
            <p>
              Every cost page here shows the math: what the materials run, what
              the labor runs, whether a permit is required in your state, and
              how the price shifts region-to-region. We cite our sources. We
              date our numbers. We update them quarterly. And we flag the
              &ldquo;don&apos;t pay more than&rdquo; threshold so you can
              recognize a bad quote when you see one.
            </p>
            <p>
              Our methodology is public — see the{" "}
              <a href="/about/methodology" className="no-underline text-navy-700 hover:text-navy-900">
                methodology page
              </a>{" "}
              for where our numbers come from. And for how much your state
              changes the picture, see the{" "}
              <a
                href="/reports/2026-state-repair-cost-index"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                2026 State Repair Cost Index
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section padding="sm" size="lg">
        <QuoteRequestCTA placement="hub-costs" className="my-0" />
      </Section>

      <Section padding="sm" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">Estimate your own project</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            href="/tools/home-renovation-cost-estimator"
            eyebrow="Calculator"
            title="Home renovation cost estimator"
            description="Kitchen or bathroom remodel, room addition, basement finish, deck, paint or flooring. Enter the project, finish level, square footage and region to get the cost range a contractor should bid."
          />
          <Card
            href="/tools/repair-cost-estimator"
            eyebrow="Calculator"
            title="Repair cost estimator"
            description="Pick a common repair and get the 2026 DIY and hired cost range, a verdict, and what drives the price."
          />
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">All cost guides</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card
              key={a.frontmatter.slug}
              href={a.path}
              eyebrow="Cost guide"
              title={a.frontmatter.title}
              description={a.frontmatter.description}
              meta={
                <span>
                  {a.frontmatter.readingMinutes} min · Updated{" "}
                  {new Date(a.frontmatter.updatedAt ?? a.frontmatter.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </span>
              }
            />
          ))}
        </div>
      </Section>

      {cityGuides.length > 0 && (
        <Section padding="sm" size="lg">
          <h2 className="font-serif text-2xl text-navy-900">City cost guides with verified local details</h2>
          <p className="mt-2 max-w-3xl text-sm text-ink-600">
            One guide per city, each carrying sourced local permit, code or licensing details for that city.
          </p>
          <details className="mt-4 rounded-lg border border-ink-200 bg-white px-5 py-4">
            <summary className="cursor-pointer text-sm font-semibold text-navy-900">
              {`Browse all ${cityGuides.length} city guides, by state`}
            </summary>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {cityGuides.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="no-underline text-navy-700 hover:text-navy-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </Section>
      )}

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "Home repair costs: honest breakdowns",
            description:
              "Honest home repair costs with labor, materials, permits, and regional variation.",
            url: "/costs",
            hasPart: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: "FixItReal home repair cost guides",
            description:
              "Every FixItReal cost guide with current 2026 ranges, math, and sources.",
            url: "/costs",
            items: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
        ])}
      />
    </>
  );
}
