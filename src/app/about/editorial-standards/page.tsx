import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Editorial standards",
  description:
    "How FixItReal writes, reviews, updates, and corrects its content — plus our policies on AI, conflicts of interest, and sponsored placements.",
  path: "/about/editorial-standards",
});

export default function EditorialStandardsPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Editorial Standards", href: "/about/editorial-standards" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Editorial standards</h1>
        <p className="mt-2 text-sm text-ink-500">
          Last updated: April 2026
        </p>

        <div className="mt-8 space-y-6 text-ink-800 leading-relaxed">
          <p>
            FixItReal is a consumer-advocate publication. Our credibility is
            the entire business. This page commits to specific, measurable
            practices so readers can hold us accountable.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">How articles are written</h2>
          <p>
            Every article is written by a named author and published with a
            byline linking to a full author page. We do not publish anonymous
            content.
          </p>
          <p>
            Articles may be researched with AI assistance — pulling up industry
            reports, cross-checking prices, summarizing permit rules. AI is
            never used to generate finished copy that gets published without
            substantial human rewriting, fact-checking, and voice editing.
            &ldquo;Write an article about X&rdquo; prompts do not produce
            content that ships here.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Fact-checking and review</h2>
          <p>
            Every cost figure is sourced to a published industry report, a
            government dataset, manufacturer documentation, or a tracked
            contractor quote. Sources are cited inline with external links.
          </p>
          <p>
            For YMYL topics — articles covering electrical, gas, plumbing
            under pressure, or structural work where mistakes cause real harm —
            we apply stronger safety-forward language, always recommend
            permits and licensed inspections where applicable, and never
            describe procedures that would violate code without explicit
            warnings.
          </p>
          <p>
            We are not licensed tradespeople. We are homeowners who research,
            read code, and publish what we learn. Our content is not a
            substitute for a licensed electrician, plumber, or inspector on
            any job where code, life safety, or permit rules apply.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Update cadence</h2>
          <p>
            Cost guides are reviewed and materially updated every quarter. The
            update date is shown on every article next to the byline. We don&apos;t
            cosmetic-edit articles and bump the update date to game search
            rankings — if the update date changes, something meaningful
            changed.
          </p>
          <p>
            Decision guides and advice articles are reviewed at least annually,
            and whenever an industry event makes them stale (a major contractor
            marketplace gets acquired, a warranty company goes bankrupt, a
            code changes, etc.).
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Conflicts of interest</h2>
          <p>
            FixItReal earns money through three channels, in order of priority:
            (1) home-services lead-gen partnerships where we believe the
            service providers are legitimate, (2) display advertising, (3)
            affiliate links to products we&apos;ve used or thoroughly
            researched. We do not and will not accept advertising or affiliate
            partnerships from home warranty companies.
          </p>
          <p>
            When an article contains affiliate links, that is disclosed at the
            top of the article and on our{" "}
            <a href="/affiliate-disclosure" className="no-underline text-navy-700 hover:text-navy-900">
              affiliate disclosure page
            </a>
            .
          </p>
          <p>
            We do not accept free products in exchange for reviews. We do not
            publish sponsored content labeled as editorial. We do not allow
            advertisers to influence article angles or conclusions.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Corrections</h2>
          <p>
            When we get something wrong, we correct it visibly. Material
            corrections — factual errors, wrong price figures, misidentified
            products — are noted at the bottom of the affected article with the
            date and a summary of what changed. Minor typo fixes don&apos;t get
            a correction note.
          </p>
          <p>
            If you see an error, email{" "}
            <a href="mailto:hello@fixitreal.com" className="no-underline text-navy-700 hover:text-navy-900">
              hello@fixitreal.com
            </a>
            . We respond to every serious correction request.
          </p>
        </div>
      </Section>
    </>
  );
}
