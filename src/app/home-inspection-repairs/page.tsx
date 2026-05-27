import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { PrintReadyFormsCTA } from "@/components/marketing/PrintReadyFormsCTA";
import { ChecklistCTA } from "@/components/marketing/ChecklistCTA";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  collectionPageSchema,
  itemListSchema,
  faqSchema,
} from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";

export const metadata = buildMetadata({
  title: "Home Inspection Repairs — Sellers' Must-Fix vs Negotiable",
  description:
    "Honest, lender-aware guidance on inspection-report repairs: which fixes sellers must complete, which to push back on, and when a repair credit beats a contractor visit.",
  path: "/home-inspection-repairs",
});

const hubFaq = [
  {
    question: "Do sellers have to make all the repairs on the inspection report?",
    answer:
      "No. The inspection report is informational, not a contract. The repair request that follows it is negotiable — and sellers can refuse, counter, or offer a credit instead. The only repairs sellers are legally bound to make are the ones written into the signed purchase agreement and the items lenders require for closing (typically safety, structural, and a few FHA/VA-specific items).",
  },
  {
    question: "What inspection items will a lender actually block closing over?",
    answer:
      "Most conventional loans only require habitability and basic safety — no exposed wiring, working heat, functioning water heater, no active roof leaks, no major structural damage. FHA and VA loans go further: missing handrails, peeling paint on pre-1978 homes, missing smoke/CO detectors, and a few others. If a fix isn't lender-required, it's purely negotiable between buyer and seller.",
  },
  {
    question: "Is a repair credit better than fixing things before closing?",
    answer:
      "Usually yes — for both sides. A credit lets the buyer pick the contractor, control quality, and skip the seller's rushed bargain-fix. It lets the seller close on time without project-managing repairs in the middle of a move. The exception: lender-required items the buyer can't close without. Those have to happen pre-closing, paid by whichever side the contract assigns.",
  },
  {
    question: "Can a seller refuse buyer repair requests?",
    answer:
      "Yes, in nearly every contract. A seller can decline a repair request entirely — the buyer then has to decide whether to proceed at the original price, walk away (usually with earnest money intact if inside the inspection contingency period), or counter. Refusal usually only backfires when the requests are reasonable and another buyer would ask for the same things.",
  },
];

export default async function HomeInspectionRepairsHub() {
  const articles = await loadArticlesByPillar("home-inspection-repairs");

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Inspection Repairs", href: "/home-inspection-repairs" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Home inspection repairs: what sellers must fix, what&apos;s negotiable
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              An inspection report is not a to-do list. It&apos;s a survey of
              every cosmetic, functional, and safety issue the inspector could
              find in three hours — most of which are normal for a lived-in
              home. The fight over what to fix happens <em>after</em> the
              report, in the buyer&apos;s repair request and the seller&apos;s
              response.
            </p>
            <p>
              The plain truth: sellers don&apos;t have to fix everything.
              Buyers don&apos;t have to accept refusals. Lenders block closing
              for a much narrower list than most agents claim. Whether
              you&apos;re selling, buying, or stuck mid-negotiation, this hub
              tells you which fixes are required, which are leverage, and where
              a repair credit beats a rushed contractor visit.
            </p>
            <p>
              For specific cost ranges on inspection-triggered repairs, see our{" "}
              <Link
                href="/costs"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                cost guides
              </Link>
              . For DIY-vs-pro verdicts on individual items, see the{" "}
              <Link
                href="/diy-or-hire"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                decision guides
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          All inspection-repair guides
        </h2>
        {articles.length === 0 ? (
          <p className="mt-4 text-ink-600">More guides publishing soon.</p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Card
                key={a.frontmatter.slug}
                href={a.path}
                eyebrow="Inspection repairs"
                title={a.frontmatter.title}
                description={a.frontmatter.description}
                meta={
                  <span>
                    {a.frontmatter.readingMinutes} min · Updated{" "}
                    {new Date(
                      a.frontmatter.updatedAt ?? a.frontmatter.publishedAt
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                }
              />
            ))}
          </div>
        )}
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          Common questions about inspection-report repairs
        </h2>
        <dl className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
          {hubFaq.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-medium text-navy-900">{item.question}</dt>
              <dd className="mt-2 text-ink-700 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section padding="md" size="lg">
        <div className="grid gap-6 md:grid-cols-2">
          <ChecklistCTA
            title="Home Inspection Repair Negotiation Checklist"
            description="Separate safety issues, reasonable repairs, credits, and buyer overreach before responding to an inspection report. Free printable."
            ctaText="Get the inspection checklist →"
          />
          <PrintReadyFormsCTA
            contextLabel="Tracking inspection items?"
            title="Selling a house? Track repair requests carefully."
            description="Document each inspection item, buyer request, estimated cost, seller response, credit, and final agreement on one form — so nothing slips at closing."
            buttonText="View repair documentation forms"
            href="https://www.printreadyforms.com/category/construction-contractors"
            utmCampaign="home_inspection_repairs"
          />
        </div>
      </Section>

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "Home Inspection Repairs — what sellers must fix, what's negotiable",
            description:
              "Independent guidance on inspection-report repairs, repair credits, and post-inspection negotiations.",
            url: "/home-inspection-repairs",
            hasPart: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: "FixItReal inspection-repair guides",
            description:
              "Every FixItReal guide on home-inspection repairs, buyer repair requests, and seller obligations.",
            url: "/home-inspection-repairs",
            items: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          faqSchema(hubFaq),
        ])}
      />
    </>
  );
}
