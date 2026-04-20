import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  webApplicationSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "FixItReal tools",
  description:
    "Interactive tools for home repair decisions — starting with DIY or Hire, with cost estimator and quote scorecard on the way.",
  path: "/tools",
});

export default function ToolsHub() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }]} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Tools
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Interactive tools for home repair decisions
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            We&apos;re building a small set of tools that answer the three
            questions every homeowner asks before a repair: <em>can I do this
            myself, what should it cost, and is this quote a rip-off?</em> One
            at a time. No bloat. No gimmicks.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            href="/tools/diy-or-hire"
            eyebrow="Live"
            title="DIY or Hire"
            description="Pick a job. Get a verdict, a cost comparison, permit rules, and our reasoning. No quiz — just the answer."
          />
          <Card
            eyebrow="Coming soon"
            title="Cost estimator"
            description="ZIP-aware repair cost estimates across the trades — with labor/materials/permit breakdowns and source transparency."
          />
          <Card
            eyebrow="Coming later"
            title="Quote scorecard"
            description="Paste 3 contractor quotes. We score each against our cost data and flag the outliers."
          />
        </div>

        <p className="mt-10 text-sm">
          <Link href="/about/methodology" className="no-underline text-navy-700 hover:text-navy-900">
            How these tools work →
          </Link>
        </p>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
          ]),
          collectionPageSchema({
            name: "FixItReal tools",
            description:
              "Interactive tools for home repair decisions — DIY or Hire, cost estimator, and quote scorecard.",
            url: "/tools",
            hasPart: [
              { name: "DIY or Hire", url: "/tools/diy-or-hire" },
            ],
          }),
          webApplicationSchema({
            name: "DIY or Hire",
            description:
              "Pick a home repair job and get a verdict — DIY or hire a pro — with cost comparison, permit rules, and our reasoning.",
            url: "/tools/diy-or-hire",
            applicationCategory: "UtilityApplication",
          }),
        ])}
      />
    </>
  );
}
