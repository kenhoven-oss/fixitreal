import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  collectionPageSchema,
  itemListSchema,
  faqSchema,
} from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";

export const metadata = buildMetadata({
  title: "Senior Home Safety — practical aging-in-place modifications",
  description:
    "Practical, contractor-aware home modifications that may reduce fall risk and make a home easier to navigate as parents age — without overpromising or selling fear.",
  path: "/senior-home-safety",
});

const hubFaq = [
  {
    question: "What's the single best first upgrade for an aging parent's home?",
    answer:
      "Grab bars in the bathroom — both the shower and beside the toilet. Bathrooms are where the largest share of falls happen for older adults, and properly anchored grab bars are inexpensive, unobtrusive, and well-evidenced as a fall-prevention measure. If you only have a budget for one upgrade, this is it. Always anchor into studs or with proper hollow-wall toggle anchors rated for grab-bar loads.",
  },
  {
    question: "Are these modifications covered by Medicare or insurance?",
    answer:
      "Original Medicare generally doesn't pay for home modifications like grab bars or ramps. Medicare Advantage plans sometimes include limited home-modification benefits — check the plan summary. Some state Medicaid waivers cover modifications for qualifying participants. Veterans may qualify for the VA's Home Improvements and Structural Alterations (HISA) grant or the Specially Adapted Housing grants. Talk to a benefits counselor or local Area Agency on Aging for specifics in your state.",
  },
  {
    question: "Should I hire a Certified Aging-in-Place Specialist (CAPS) contractor?",
    answer:
      "For larger modifications — walk-in showers, bathroom remodels, doorway widening, stair lifts — yes, a CAPS-credentialed contractor is worth the search. They've taken specialty training on universal-design principles and common aging-in-place modifications. For smaller jobs (a single grab bar, a raised toilet seat), any reasonably skilled handyman will do, and many seniors successfully DIY them with the right anchors.",
  },
  {
    question: "How do I bring this up with a parent who refuses help?",
    answer:
      "Frame modifications as making the home easier and more comfortable, not as a response to decline. Many older adults resist anything that signals frailty. Practical wedges that work for many families: bring in a respected outsider (their physician, an occupational therapist) to recommend specific changes; tie modifications to a recent event ('after Dad's surgery'); start with universally appealing upgrades (better lighting, lever door handles) that don't read as 'safety equipment.' This is a conversation, not a decision you make for them.",
  },
];

export default async function SeniorHomeSafetyHub() {
  const articles = await loadArticlesByPillar("senior-home-safety");

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Senior Home Safety", href: "/senior-home-safety" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Senior home safety: practical aging-in-place guidance
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              Most senior-safety content online sits in one of two camps —
              either fear-selling (&ldquo;your parent will fall and you&apos;ll
              never forgive yourself&rdquo;) or vague platitudes
              (&ldquo;consider safety modifications&rdquo;). Both miss the
              actual job: practical, contractor-aware decisions about which
              home modifications matter, which ones don&apos;t, and what they
              should cost.
            </p>
            <p>
              These guides are written for the adult-child caregiver and the
              aging-in-place homeowner. They focus on bathroom safety, stair
              safety, lighting, and product picks that may reduce fall risk
              and make a home easier to navigate. They&apos;re not medical
              advice — for personalized mobility needs, talk to an
              occupational therapist or your parent&apos;s physician.
            </p>
            <p>
              For cost ranges, see our{" "}
              <Link
                href="/costs"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                repair costs
              </Link>{" "}
              hub. For contractor vetting before any larger modification, see{" "}
              <Link
                href="/contractor-red-flags"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                contractor red flags
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          All senior home safety guides
        </h2>
        {articles.length === 0 ? (
          <p className="mt-4 text-ink-600">More guides publishing soon.</p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Card
                key={a.frontmatter.slug}
                href={a.path}
                eyebrow="Senior home safety"
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
          Common questions about senior home safety
        </h2>
        <dl className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
          {hubFaq.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-medium text-navy-900">{item.question}</dt>
              <dd className="mt-2 text-ink-700 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-xs text-ink-600 leading-relaxed">
          <strong className="font-semibold text-ink-800">Safety note:</strong>{" "}
          These guides cover home modifications, not medical advice. For
          personalized mobility, balance, or fall-risk concerns, consult an
          occupational therapist or your parent&apos;s physician.
        </p>
      </Section>

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "Senior Home Safety — practical aging-in-place modifications",
            description:
              "Practical, contractor-aware home modifications that may reduce fall risk and make a home easier to navigate as parents age.",
            url: "/senior-home-safety",
            hasPart: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: "FixItReal senior home safety guides",
            url: "/senior-home-safety",
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
