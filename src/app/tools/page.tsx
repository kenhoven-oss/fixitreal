import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/metadata";
import { jobs } from "@/content/jobs";
import {
  jsonLdScript,
  webApplicationSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from "@/lib/jsonld";

type BuyingGuide = { href: string; title: string; description: string };

const buyingGuides: BuyingGuide[] = [
  {
    href: "/tools/best-drain-snakes-for-homeowners",
    title: "Best drain snakes for homeowners",
    description:
      "Manual, hair-clog, tub-specific, and powered options — which to pick for which clog, and when the snake is past its limit.",
  },
  {
    href: "/tools/best-plungers-for-homeowners",
    title: "Best plungers for homeowners",
    description:
      "Why you need more than one, and how to match cup shape to the drain you're clearing.",
  },
  {
    href: "/tools/best-voltage-testers-for-homeowners",
    title: "Best voltage testers for homeowners",
    description:
      "What a tester can safely verify, what it can't, and the cheap set every homeowner with a fuse box should own.",
  },
  {
    href: "/tools/best-shop-vacs-for-water-cleanup",
    title: "Best shop vacs for water cleanup",
    description:
      "Sizing a wet/dry vac to the kind of leak you actually face — and the filter swap most homeowners forget.",
  },
  {
    href: "/tools/best-moisture-meters-for-homeowners",
    title: "Best moisture meters for homeowners",
    description:
      "Pin vs. pinless vs. dual-mode, and how to read a moisture reading without fooling yourself.",
  },
  {
    href: "/tools/best-caulk-and-caulk-guns-for-bath-and-kitchen",
    title: "Best caulk and caulk guns for bath and kitchen",
    description:
      "Silicone vs. siliconized-acrylic, plus the prep tools that separate a clean bead from a lumpy mess.",
  },
];

export const metadata = buildMetadata({
  title: "Home repair tools & buying guides",
  description:
    "Interactive tools for home-repair decisions plus homeowner-focused buying guides for the parts and tools you actually need.",
  path: "/tools",
});

export default function ToolsHub() {
  const verdictCount = jobs.length;
  const buyingGuideCount = buyingGuides.length;

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
            Tools and buying guides for real homeowners
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            <strong className="text-navy-900">{verdictCount} DIY-or-hire verdicts</strong>,{" "}
            <strong className="text-navy-900">{buyingGuideCount} homeowner-focused buying guides</strong>,
            and a dated 2026 cost calendar — all kept current. No bloat, no
            affiliate hype, no &quot;top 10&quot; lists padded with junk. Honest
            picks you&apos;d pass along to a neighbor.
          </p>
        </div>
      </Section>

      {/* Interactive decision tools */}
      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">Live tools</h2>
        <p className="mt-2 text-ink-700 max-w-3xl">
          The fastest way to settle a common repair question: should you do it
          yourself, or pay a pro? And the reference that prevents budget
          surprises across the whole year.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            href="/tools/diy-or-hire"
            eyebrow={`Decision database · ${verdictCount} jobs`}
            title="DIY or Hire"
            description="Pick a job. Get a verdict, a cost comparison, permit rules, and our reasoning. No quiz — just the answer."
          />
          <Card
            href="/home-repair-cost-calendar"
            eyebrow="Free PDF · Seasonal"
            title="Home Repair Cost Calendar"
            description="Every month of the year with real 2026 cost ranges for the maintenance tasks that come due. Prevents expensive surprises."
          />
        </div>
      </Section>

      {/* Buying guides */}
      <Section padding="md" size="lg" className="bg-ink-50">
        <h2 className="font-serif text-2xl text-navy-900">
          Buying guides · {buyingGuideCount} categories
        </h2>
        <p className="mt-2 text-ink-700 max-w-3xl">
          Category-level picks for the tools and parts a homeowner actually
          needs. Category descriptions are honest, not hype — we say when a
          category isn&apos;t worth owning, too.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {buyingGuides.map((g) => (
            <Card
              key={g.href}
              href={g.href}
              eyebrow="Buying guide"
              title={g.title}
              description={g.description}
            />
          ))}
        </div>

        <p className="mt-10 text-sm">
          <Link href="/about/methodology" className="no-underline text-navy-700 hover:text-navy-900">
            How we pick what we recommend →
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
              "Interactive decision tools and homeowner-focused buying guides for home-repair parts and gear.",
            url: "/tools",
            hasPart: [
              { name: "DIY or Hire", url: "/tools/diy-or-hire" },
              ...buyingGuides.map((g) => ({ name: g.title, url: g.href })),
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
