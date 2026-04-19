import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema } from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";

export const metadata = buildMetadata({
  title: "DIY or Hire: honest home repair decisions",
  description:
    "Should you fix it yourself or call a pro? Real verdicts on real jobs — with cost comparisons, permit rules, and the safety trade-offs nobody else tells you.",
  path: "/diy-or-hire",
  noIndex: true,
});

export default async function DiyOrHireHub() {
  const articles = await loadArticlesByPillar("diy-or-hire");

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "DIY or Hire", href: "/diy-or-hire" }]} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            DIY or hire: honest home repair decisions
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              Most home repair content assumes one of two things: that you&apos;re a
              weekend warrior who should tackle everything yourself, or that
              you&apos;re a novice who should hire everything out. Both are wrong.
            </p>
            <p>
              The right answer depends on the specific job — its safety profile,
              whether a permit is required, the actual DIY-vs-pro cost difference,
              the skill threshold, and how much your weekend is worth. We publish
              our reasoning for every verdict, so you can decide whether you agree
              or adjust for your situation.
            </p>
            <p>
              Every article here answers one question: <em>should you fix this
              yourself, or call someone?</em> Want a quick answer for a specific
              job?{" "}
              <Link href="/tools/diy-or-hire" className="no-underline text-navy-700 hover:text-navy-900">
                Use the decision tool
              </Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">All decision guides</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Card
              key={a.frontmatter.slug}
              href={a.path}
              eyebrow="Decision guide"
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
            name: "DIY or Hire: honest home repair decisions",
            description:
              "Should you fix it yourself or call a pro? Real verdicts on real jobs.",
            url: "/diy-or-hire",
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
