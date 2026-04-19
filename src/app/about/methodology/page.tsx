import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cost data methodology",
  description:
    "How FixItReal sources, validates, and updates the cost figures we publish — with our data sources, sample sizes, and refresh cadence.",
  path: "/about/methodology",
});

export default function MethodologyPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Methodology", href: "/about/methodology" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Cost data methodology</h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-6 text-ink-800 leading-relaxed">
          <p>
            Every cost number on FixItReal has a source and a date. This page
            explains where the numbers come from, how we validate them, and how
            often we refresh them.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">At launch: published industry sources</h2>
          <p>
            For our initial cost guides, we seed figures from published industry
            sources and cross-reference across at least three of them per data
            point. Current primary sources:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>HomeGuide</strong> and <strong>Fixr</strong> — for
              contractor-quoted price ranges (both sites track quotes across
              their networks).
            </li>
            <li>
              <strong>This Old House</strong> and <strong>Bob Vila</strong> —
              cross-reference for reasonableness.
            </li>
            <li>
              <strong>RSMeans</strong> (where accessible) — for labor-rate
              benchmarking.
            </li>
            <li>
              <strong>U.S. Bureau of Labor Statistics</strong> — for
              occupational wage data (plumbers, electricians, HVAC).
            </li>
            <li>
              <strong>Manufacturer price data</strong> for fixtures and parts —
              Moen, Kohler, Delta, etc. — via retailer listings (Home Depot,
              Lowe&apos;s, Supply.com).
            </li>
            <li>
              <strong>ICC / IRC code references</strong> for permit and code
              requirements, state-specific where available.
            </li>
          </ul>
          <p>
            When figures diverge materially between sources, we investigate the
            divergence, cite both, and either show a wider range or explain
            which source we believe is more reliable and why.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Growing: primary contractor quotes</h2>
          <p>
            Starting in our second quarter, we&apos;re paying licensed
            contractors for anonymized recent quotes on common residential
            jobs — across at least 10 metropolitan markets — to build a
            proprietary dataset. As this dataset grows, our cost guides will
            progressively replace published-source figures with this primary
            data and disclose the shift per article.
          </p>
          <p>
            The long-term goal is to publish quarterly updates backed by
            contractor-verified quotes with metropolitan granularity and
            confidence intervals. Every cost page will eventually show the
            sample size behind the range it quotes.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">What every cost guide discloses</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The date the figures were last updated.</li>
            <li>The source category (published industry data / contractor-tracked / manufacturer).</li>
            <li>Materials, labor, and permit costs broken out separately when the data supports it.</li>
            <li>Regional variation when regional data exists.</li>
            <li>Our opinion on what you <em>shouldn&apos;t</em> pay more than — stated explicitly.</li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">What we won&apos;t do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Fabricate precise-looking numbers ($1,347 when the real range is
              $1,100–$1,600). False precision misleads readers.
            </li>
            <li>
              Publish one-size-fits-all national &ldquo;averages&rdquo; without
              regional or permit context.
            </li>
            <li>
              Take money from cost-data providers in exchange for displaying
              their figures favorably.
            </li>
            <li>
              Game search rankings by cosmetic-editing articles and bumping the
              update date.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Spot a bad number?</h2>
          <p>
            If you see a cost figure on FixItReal that doesn&apos;t match your
            market — especially if you just paid a contractor for that job and
            the real number differs meaningfully — email{" "}
            <a href="mailto:hello@fixitreal.com" className="no-underline text-navy-700 hover:text-navy-900">
              hello@fixitreal.com
            </a>{" "}
            with the metro, date, and quote details. We update our data on real
            feedback.
          </p>
        </div>
      </Section>
    </>
  );
}
