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
  title: "Emergency Home Repair: what to do first",
  description:
    "Step-by-step actions for water leaks, electrical issues, sewer backups, and gas smells — the first 10 minutes that prevent the disaster from getting worse.",
  path: "/emergency-repairs",
});

const hubFaq = [
  {
    question: "What should I do first if water is leaking from the ceiling?",
    answer:
      "Shut off the water main if water is flowing actively. Move valuables away from the drip zone. Place a bucket. Then poke a small hole at the lowest point of the bulge — drywall holding standing water will eventually collapse, and a controlled drain is much less destructive than a ceiling falling on furniture. Call a plumber once the active flow is stopped.",
  },
  {
    question: "When should I call the fire department vs. a contractor?",
    answer:
      "Fire department for active fire, gas smell that doesn't go away after opening windows, or carbon-monoxide alarm activation. 911 for medical emergencies. Power company for downed wires or burning-smell from the panel. Plumber for active water leaks that aren't gas-line related. Electrician for sparks, smoke from outlets, or any panel issue without active fire.",
  },
  {
    question: "Should I shut off the main breaker during a water leak?",
    answer:
      "Yes, if water is reaching outlets, light fixtures, or the electrical panel itself — shut off the main breaker before touching anything wet. Water + live circuits is the highest-injury combo in a home emergency. If water is contained to a bathroom or kitchen and the panel is dry, leave the power on and just kill the affected circuit if you can identify it.",
  },
  {
    question: "What's the most expensive mistake during a home emergency?",
    answer:
      "Waiting to call insurance. Most homeowners insurance policies have notification windows (often 72 hours) for water damage claims, and active damage spreads fast. The other major mistake: amateur cleanup that destroys evidence the insurance adjuster needs (don't throw away wet drywall before photos; document moisture readings; keep contractor receipts).",
  },
];

export default async function EmergencyRepairsHub() {
  const articles = await loadArticlesByPillar("emergency-repairs");

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Emergency Repairs", href: "/emergency-repairs" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Emergency home repair: what to do first
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              The first 10 minutes of a home emergency decide whether
              you&apos;re writing a $300 plumber check or a $30,000 insurance
              claim. These guides walk you through the immediate actions —
              shut off this valve, kill this breaker, document this scene —
              before the pro arrives.
            </p>
            <p>
              <strong className="text-navy-900">Call 911 first</strong> for
              fire, gas smells that don&apos;t clear with ventilation,
              carbon-monoxide alarms, or medical emergencies. These guides
              cover what to do <em>after</em> 911 (or when the situation
              doesn&apos;t require them) to keep damage contained.
            </p>
            <p>
              For non-emergency advice, see the{" "}
              <Link
                href="/advice"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                advice hub
              </Link>
              . For pricing on the eventual repair, see the{" "}
              <Link
                href="/costs"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                cost guides
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          All emergency repair guides
        </h2>
        {articles.length === 0 ? (
          <p className="mt-4 text-ink-600">More guides publishing soon.</p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Card
                key={a.frontmatter.slug}
                href={a.path}
                eyebrow="Emergency"
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
          Common questions about home emergencies
        </h2>
        <dl className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
          {hubFaq.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-medium text-navy-900">{item.question}</dt>
              <dd className="mt-2 text-ink-700 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <aside
          role="note"
          className="mt-8 rounded-md border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-ink-800 leading-relaxed"
        >
          <strong className="font-semibold text-navy-900">
            Safety note:
          </strong>{" "}
          These guides cover immediate first-actions, not professional repair.
          For fire, gas, downed wires, or any medical emergency, call 911 (US)
          first. For non-emergency utility issues, your gas / power / water
          utility has a 24-hour line.
        </aside>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "Emergency Home Repair: what to do first",
            description:
              "Step-by-step first-action guides for water, electrical, and plumbing home emergencies.",
            url: "/emergency-repairs",
            hasPart: articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: "FixItReal emergency home repair guides",
            url: "/emergency-repairs",
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
