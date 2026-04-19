import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema } from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";

export const metadata = buildMetadata({
  title: "Honest home repair advice",
  description:
    "Contractor vetting, pricing red flags, and consumer-first guidance the sites taking contractor ad money can't publish.",
  path: "/advice",
});

export default async function AdviceHub() {
  const articles = await loadArticlesByPillar("advice");

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Honest Advice", href: "/advice" }]} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            The advice other home sites can&apos;t publish
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              The big home-repair sites make their money from contractor lead-gen
              partners, home warranty affiliates, and advertising from the
              same companies they&apos;d need to criticize to tell you the truth.
              That&apos;s a structural problem. We don&apos;t have that problem.
            </p>
            <p>
              This is where we publish the consumer-advocate content: contractor
              vetting checklists that go deeper than &ldquo;ask for
              references,&rdquo; the specific home warranty companies to avoid
              (and why), the pricing red flags in a typical quote, and the
              questions that make scammy contractors leave you alone.
            </p>
            <p>
              We name names where it matters. We cite our sources. And we
              don&apos;t take money from any company we&apos;d tell you to
              skip — which is why home warranty affiliates will never appear on
              this site.
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">All advice</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card
              key={a.frontmatter.slug}
              href={a.path}
              eyebrow="Advice"
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

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionPageSchema({
            name: "Honest home repair advice",
            description:
              "Consumer-advocacy guidance on contractors, pricing, and home-repair scams.",
            url: "/advice",
            hasPart: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          })
        )}
      />
    </>
  );
}
