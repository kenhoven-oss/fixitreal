import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  collectionPageSchema,
  itemListSchema,
  faqSchema,
} from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";

export const metadata = buildMetadata({
  title: "What is this thing in my house? — homeowner identifier guides",
  description:
    "Identifying the unfamiliar switches, pipes, valves, vents, and small doors that come with every house — with the safe and unsafe ways to handle each.",
  path: "/what-is-this",
});

const hubFaq = [
  {
    question: "Is it safe to touch something in my house if I don't know what it is?",
    answer:
      "Look first, touch second. Photograph it, search for it (these guides exist for that reason), and only handle it once you know what it is. Specifically dangerous categories: live electrical (any exposed wiring, anything labeled high voltage), gas-line components (yellow or black pipes near the furnace or water heater), and asbestos-wrapped pipes in older homes. When in doubt, hire it out — a 15-minute electrician or plumber visit is cheaper than the consequences of guessing wrong.",
  },
  {
    question: "Should I have unfamiliar things checked during a home inspection?",
    answer:
      "Yes — a home inspector's job is partly to identify the things you'd otherwise wonder about. Walk the inspector through any specific items you're curious about. They'll either explain what it is or flag it for a specialist (electrician, plumber, HVAC tech) to evaluate.",
  },
  {
    question: "What's the most common thing homeowners can't identify?",
    answer:
      "Old utility shut-offs that have been buried by paint, drywall, or remodels. Every house has main shut-offs for water, gas, and electricity, plus dozens of fixture-level shut-offs. Finding and labeling these once is one of the highest-value 30-minute projects a new homeowner can do — when an emergency happens, you'll have already mapped the controls.",
  },
];

export default async function WhatIsThisHub() {
  const articles = await loadArticlesByPillar("what-is-this");

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "What Is This?", href: "/what-is-this" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            What is this thing in my house?
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              Every house comes with mysterious switches, pipes, valves, vents,
              and small doors that don&apos;t come with a manual. These guides
              identify the most-common unknowns — what they do, whether they
              need attention, and whether touching them is safe.
            </p>
            <p>
              For each item: what it&apos;s called, what it does, when to
              worry, and when to leave it alone.
            </p>
            <p>
              For active problems, see the{" "}
              <Link
                href="/emergency-repairs"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                emergency repairs hub
              </Link>
              . For diagnosis of specific symptoms, see the{" "}
              <Link
                href="/advice"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                advice hub
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          All identifier guides
        </h2>
        {articles.length === 0 ? (
          <p className="mt-4 text-ink-600">More identifier guides publishing soon.</p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Card
                key={a.frontmatter.slug}
                href={a.path}
                eyebrow="What is this?"
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
          Common questions about unfamiliar home parts
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "What is this thing in my house?",
            description:
              "Identifying the unfamiliar switches, pipes, valves, vents, and small doors in a home.",
            url: "/what-is-this",
            hasPart: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: "FixItReal homeowner identifier guides",
            url: "/what-is-this",
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
