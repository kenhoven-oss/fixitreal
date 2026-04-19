import Link from "next/link";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TrustBar } from "@/components/marketing/TrustBar";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { WhatWeDontDo } from "@/components/marketing/WhatWeDontDo";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  noIndex: true, // placeholder site — remove once content ships
});

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section padding="xl" size="lg" className="bg-white">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Consumer advocate · Home repair
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-navy-900 leading-[1.05]">
            {site.tagline}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-ink-700 max-w-2xl leading-relaxed">
            {site.explainer}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tools/diy-or-hire"
              className="inline-flex items-center rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-navy-800 transition-colors"
            >
              DIY or hire? Get the answer
            </Link>
            <Link
              href="/costs"
              className="inline-flex items-center rounded-md border border-ink-300 px-5 py-3 text-sm font-semibold text-navy-900 no-underline hover:border-navy-700 transition-colors"
            >
              Browse repair costs
            </Link>
          </div>
        </div>
      </Section>

      <TrustBar />

      {/* Pillars overview */}
      <Section padding="lg">
        <div className="grid gap-6 md:grid-cols-3">
          {site.pillars.map((p) => (
            <Card
              key={p.slug}
              href={p.href}
              eyebrow={p.slug === "diy-or-hire" ? "The wedge" : p.slug === "costs" ? "The money pages" : "The brand"}
              title={p.name}
              description={p.description}
            />
          ))}
        </div>
      </Section>

      {/* Featured costs placeholder */}
      <Section padding="lg" className="bg-ink-50">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-navy-900">What things actually cost in 2026</h2>
          <p className="mt-2 text-ink-700">
            Real numbers. Sources shown. No ranges wide enough to be useless.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            eyebrow="Coming soon"
            title="Water heater replacement"
            description="$1,350–$2,400 · 50-gal standard install · regional breakdown coming"
            meta={<span>Updated quarterly</span>}
          />
          <Card
            eyebrow="Coming soon"
            title="Toilet replacement"
            description="$220 DIY · $480 hired · when each makes sense"
            meta={<span>Updated quarterly</span>}
          />
          <Card
            eyebrow="Coming soon"
            title="Plumber hourly cost"
            description="$130–$180/hr typical · regional + call-out fee details"
            meta={<span>Updated quarterly</span>}
          />
        </div>
        <p className="mt-8 text-sm">
          <Link href="/costs" className="no-underline text-navy-700 hover:text-navy-900">
            See all cost guides →
          </Link>
        </p>
      </Section>

      {/* Featured advice placeholder */}
      <Section padding="lg">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-navy-900">
            The advice other sites can&apos;t publish
          </h2>
          <p className="mt-2 text-ink-700">
            We don&apos;t take money from home warranty companies. We name names.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            eyebrow="Coming soon"
            title="Why home warranties are a bad deal"
            description="The math, the companies to avoid, and what to do instead."
          />
          <Card
            eyebrow="Coming soon"
            title="How to vet a contractor"
            description="The 14-point checklist Angi won't publish."
          />
          <Card
            eyebrow="Coming soon"
            title="7 signs a repair quote is overpriced"
            description="What to question before signing."
          />
        </div>
        <p className="mt-8 text-sm">
          <Link href="/advice" className="no-underline text-navy-700 hover:text-navy-900">
            Read all advice →
          </Link>
        </p>
      </Section>

      {/* Trust block */}
      <Section padding="lg" className="bg-ink-50">
        <WhatWeDontDo />
      </Section>

      {/* Newsletter */}
      <Section padding="lg">
        <NewsletterBlock />
      </Section>
    </>
  );
}
