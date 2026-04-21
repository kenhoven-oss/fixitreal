import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TrustBar } from "@/components/marketing/TrustBar";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { WhatWeDontDo } from "@/components/marketing/WhatWeDontDo";
import { SeasonalChecklist } from "@/components/marketing/SeasonalChecklist";
import { CategoryGrid } from "@/components/marketing/CategoryGrid";
import { buildMetadata } from "@/lib/metadata";
import { loadArticlesByPillar } from "@/lib/articles-loader";
import { kenHoven } from "@/content/authors/ken-hoven";

export const metadata = buildMetadata({});

/**
 * Manually curated order for the homepage "Featured decisions" grid.
 *
 * Ordered by homeowner-intent strength — the jobs readers arrive on the site
 * most often trying to decide on — not by publication date. Each slug must
 * correspond to an MDX article in src/content/articles/diy-or-hire/.
 * Missing articles are dropped silently so the section stays resilient as
 * content moves.
 */
const featuredDecisionSlugs = [
  "toilet",              // top plumbing search volume, concrete DIY savings
  "garbage-disposal",    // high volume, clear DIY-recommended verdict
  "ceiling-fan",         // seasonal spike + borderline YMYL electrical
  "garage-door-opener",  // YMYL safety guidance (torsion springs)
  "dishwasher",          // tied to appliance replacement events
] as const;

// Curated set of buying guides shown on the homepage.
const featuredGuides = [
  {
    href: "/tools/best-drain-snakes-for-homeowners",
    title: "Drain snakes",
    blurb: "Match the tool to the clog — manual, hair-clog, tub, powered.",
  },
  {
    href: "/tools/best-voltage-testers-for-homeowners",
    title: "Voltage testers",
    blurb: "What a tester can safely verify, and what still needs an electrician.",
  },
  {
    href: "/tools/best-moisture-meters-for-homeowners",
    title: "Moisture meters",
    blurb: "Find the source of a leak without guessing — pin vs. pinless.",
  },
  {
    href: "/tools/best-shop-vacs-for-water-cleanup",
    title: "Shop vacs for water",
    blurb: "Size a wet/dry vac to the kind of leak you actually face.",
  },
];

export default async function Home() {
  const [costs, advice, decisions] = await Promise.all([
    loadArticlesByPillar("costs"),
    loadArticlesByPillar("advice"),
    loadArticlesByPillar("diy-or-hire"),
  ]);

  const featuredCosts = costs.slice(0, 3);
  const featuredAdvice = advice.slice(0, 3);

  // Resolve curated slugs to loaded articles, preserving our manual order and
  // dropping any slug that no longer has a matching MDX file.
  const decisionsBySlug = new Map(
    decisions.map((a) => [a.frontmatter.slug, a])
  );
  const featuredDecisions = featuredDecisionSlugs
    .map((slug) => decisionsBySlug.get(slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <>
      {/* ==============================================================
           HERO — light Stitch-style treatment. Off-white surface with
           the interior photo at reduced opacity; editorial dark-navy
           headline; soft gradient fades the image to the left so the
           type always has a clean surface to sit on.
           ============================================================== */}
      <section className="relative overflow-hidden bg-ink-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9RTcaIeoOAX2M-bOjGivO-dKoTSqllzy0H-FWsqkAV0Fh2qMjW7aRGD-TgHwkRghHfCY3LVMm-AlIflitzleMJt7s5LXKe5w7bzHdcIgzaOfLqXBYRooMlRiFyDev9Wk1e9wPoNEf0UFoZTPnQRZktouO3qsebFROudnTjWcTLRFOQxeh8Y5q159OwD17xaAUaavXUkOtPWXTRaqw1jKU_UOObdzwKoIPm2Cd3FlkZ8gqGfn_B7jkQXX4cuaYLYiDgtjnbOME8Q"
            alt=""
            fill
            sizes="100vw"
            priority
            unoptimized
            className="object-cover object-right opacity-75"
          />
          {/* Soft left-to-right wash: near-opaque cream on the left
              keeps the headline on a clean surface, transparent on
              the right so the plant + shadows read at full fidelity. */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-50 via-ink-50/85 md:via-ink-50/70 to-ink-50/0" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Consumer advocate · Home repair
            </p>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.04] tracking-tight text-navy-900">
              Trusted home repair guidance{" "}
              <span className="text-amber-700">for real homeowners</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-700 max-w-2xl leading-relaxed">
              Step-by-step repair guides, seasonal maintenance tips, and
              practical advice to help you care for your home with confidence —
              written by an independent advocate, not a contractor.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/tools/diy-or-hire"
                className="inline-flex items-center rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white visited:text-white no-underline hover:bg-navy-800 transition-colors"
              >
                DIY or hire? Get the verdict
              </Link>
              <Link
                href="/advice"
                className="inline-flex items-center rounded-md border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 visited:text-navy-900 no-underline hover:border-navy-700 transition-colors"
              >
                Browse repair guides
              </Link>
            </div>
            {/* Popular article shortcuts — give a visitor with a specific
                repair in mind a direct path to the exact article without
                scrolling past the hero. Kept subtle so the hero stays clean. */}
            <p className="mt-7 text-sm text-ink-700 max-w-2xl leading-relaxed">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 mr-2">
                Popular:
              </span>
              <Link
                href="/diy-or-hire/toilet"
                className="text-navy-700 underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:text-navy-900"
              >
                Toilet replacement
              </Link>
              {" · "}
              <Link
                href="/diy-or-hire/garbage-disposal"
                className="text-navy-700 underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:text-navy-900"
              >
                Garbage disposal
              </Link>
              {" · "}
              <Link
                href="/diy-or-hire/ceiling-fan"
                className="text-navy-700 underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:text-navy-900"
              >
                Ceiling fan
              </Link>
              {" · "}
              <Link
                href="/diy-or-hire/garage-door-opener"
                className="text-navy-700 underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:text-navy-900"
              >
                Garage door opener
              </Link>
              {" · "}
              <Link
                href="/diy-or-hire/dishwasher"
                className="text-navy-700 underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:text-navy-900"
              >
                Dishwasher
              </Link>
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ==============================================================
           POPULAR REPAIR DECISIONS — the primary findability section.
           Placed immediately after the TrustBar so a visitor arriving
           with a specific problem in mind sees direct article links
           before any category browsing. Manually curated order (see
           featuredDecisionSlugs above) emphasizes highest-intent jobs.
           ============================================================== */}
      {featuredDecisions.length > 0 && (
        <Section padding="xl" className="bg-white">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Popular repair decisions
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
                Find your answer in one click.
              </h2>
              <p className="mt-3 text-ink-700 leading-relaxed">
                Direct pathways to the repair questions homeowners actually
                ask — not just category pages. Pick the job you&apos;re facing
                and go straight to the verdict, with a DIY-vs-pro cost
                comparison and safety notes.
              </p>
            </div>
            <Link
              href="/diy-or-hire"
              className="shrink-0 text-sm font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
            >
              All decision guides →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredDecisions.map((a) => (
              <Card
                key={a.frontmatter.slug}
                href={a.path}
                eyebrow="Decision guide"
                title={a.frontmatter.title}
                description={a.frontmatter.description}
              />
            ))}
          </div>
        </Section>
      )}

      {/* ==============================================================
           PILLARS — three entry points for category browsing, for visitors
           whose specific article wasn't in the Popular decisions above.
           Border-t creates a soft divider between the two bg-white sections.
           ============================================================== */}
      <Section padding="xl" className="bg-white border-t border-ink-100">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Or browse by category
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
            Three questions every homeowner asks. Three places to find the
            answer.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.pillars.map((p) => (
            <Card
              key={p.slug}
              href={p.href}
              eyebrow={
                p.slug === "diy-or-hire"
                  ? "Decide"
                  : p.slug === "costs"
                    ? "Budget"
                    : "Vet"
              }
              title={p.name}
              description={p.description}
            />
          ))}
        </div>
      </Section>

      {/* ==============================================================
           SEASONAL MAINTENANCE — actionable, ties into calendar lead magnet.
           ============================================================== */}
      <Section padding="xl" className="bg-ink-50">
        <SeasonalChecklist />
      </Section>

      {/* ==============================================================
           CATEGORY BENTO — visual browse by home system.
           ============================================================== */}
      <Section padding="xl" className="bg-white">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Browse by system
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
              Diagnose the problem. Start with the right guide.
            </h2>
          </div>
          <Link
            href="/advice"
            className="shrink-0 text-sm font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
          >
            See all repair guides →
          </Link>
        </div>
        <CategoryGrid />
      </Section>

      {/* ==============================================================
           BUYING GUIDES — surface the 6 Tools pages.
           ============================================================== */}
      <Section padding="xl" className="bg-ink-50">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Buying guides
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
            The tools worth owning — and the ones to skip
          </h2>
          <p className="mt-3 text-ink-700 leading-relaxed">
            Category-level picks for the gear that actually earns a spot in a
            homeowner&apos;s toolbox. Honest notes on what to look for and
            what isn&apos;t worth buying.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group block rounded-lg bg-white p-6 no-underline transition-shadow hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Buying guide
              </p>
              <h3 className="mt-2 font-serif text-lg text-navy-900 leading-snug">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {g.blurb}
              </p>
              <span className="mt-4 inline-block text-xs font-semibold text-navy-700 group-hover:text-navy-900">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <Link href="/tools" className="no-underline text-navy-700 hover:text-navy-900">
            See every buying guide →
          </Link>
        </p>
      </Section>

      {/* ==============================================================
           FEATURED ADVICE — deep-dive reading on costs + advice.
           ============================================================== */}
      <Section padding="xl" className="bg-white">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              What things cost
            </p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl text-navy-900 leading-tight">
              Real 2026 cost ranges, with the math shown
            </h2>
            <div className="mt-6 space-y-4">
              {featuredCosts.map((a) => (
                <Link
                  key={a.frontmatter.slug}
                  href={a.path}
                  className="block rounded-md p-4 -mx-4 no-underline transition-colors hover:bg-ink-50"
                >
                  <p className="font-serif text-lg text-navy-900 leading-snug">
                    {a.frontmatter.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed line-clamp-2">
                    {a.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm">
              <Link href="/costs" className="no-underline text-navy-700 hover:text-navy-900">
                All cost guides →
              </Link>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Consumer advocacy
            </p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl text-navy-900 leading-tight">
              The advice other sites can&apos;t publish
            </h2>
            <div className="mt-6 space-y-4">
              {featuredAdvice.map((a) => (
                <Link
                  key={a.frontmatter.slug}
                  href={a.path}
                  className="block rounded-md p-4 -mx-4 no-underline transition-colors hover:bg-ink-50"
                >
                  <p className="font-serif text-lg text-navy-900 leading-snug">
                    {a.frontmatter.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-700 leading-relaxed line-clamp-2">
                    {a.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm">
              <Link href="/advice" className="no-underline text-navy-700 hover:text-navy-900">
                All advice →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* ==============================================================
           TRUST / ABOUT — honest independence claim, real author.
           Replaces the fake-testimonial section from the Stitch design.
           ============================================================== */}
      <Section padding="xl" className="bg-ink-50">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <WhatWeDontDo />
          <div className="rounded-lg bg-white p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden ring-1 ring-ink-300">
                <Image
                  src={kenHoven.photo}
                  alt={kenHoven.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Written by
                </p>
                <p className="mt-0.5 font-serif text-xl text-navy-900">
                  {kenHoven.name}
                </p>
                <p className="text-sm text-ink-600">{kenHoven.role}</p>
              </div>
            </div>
            <p className="mt-6 text-ink-800 leading-relaxed">
              FixItReal is an independent publisher, not a contractor directory
              or an affiliate farm. Every article is researched and written
              before any product link is considered. Cost ranges are dated.
              Safety framing is honest, not performative.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href={kenHoven.url}
                className="font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
              >
                Meet the author →
              </Link>
              <Link
                href="/about/editorial-standards"
                className="font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
              >
                Editorial standards →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ==============================================================
           NEWSLETTER / CALENDAR — lead magnet.
           ============================================================== */}
      <Section padding="xl" className="bg-white">
        <NewsletterBlock />
      </Section>
    </>
  );
}
