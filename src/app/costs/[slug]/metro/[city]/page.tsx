import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FairPriceChecker } from "@/components/content/FairPriceChecker";
import { ContractorRedFlagsBlock } from "@/components/content/ContractorRedFlagsBlock";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  articleSchema,
  faqSchema,
} from "@/lib/jsonld";
import {
  STATE_COST_GUIDES,
  getGuideBySlug,
} from "@/content/state-cost-data";

const METRO_COST_UPDATED = "2026-06-14";
import {
  CITIES,
  TIER_MULTIPLIERS,
  adjustRange,
  getAllCityCostParams,
  getCityBySlug,
} from "@/content/city-cost-data";
import { kenHoven } from "@/content/authors/ken-hoven";

type Params = Promise<{ slug: string; city: string }>;

export function generateStaticParams() {
  return getAllCityCostParams();
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, city } = await params;
  const guide = getGuideBySlug(slug);
  const cityData = getCityBySlug(city);
  if (!guide || !cityData) return buildMetadata({ title: "Not found", noIndex: true });

  const tripRange = adjustRange(
    { low: guide.base.tripLow, high: guide.base.tripHigh },
    cityData.tier
  );
  const title = `${guide.shortName} cost in ${cityData.name}, ${cityData.stateAbbr}`;
  const updatedLabel = new Date(METRO_COST_UPDATED).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const description = `${cityData.name}, ${cityData.stateAbbr} ${guide.longName} typically runs $${tripRange.low}–$${tripRange.high} for the trip plus first hour, with metro licensing and permit notes. ${updatedLabel}.`;

  return buildMetadata({
    title: capitalize(title),
    description,
    path: `/costs/${slug}/metro/${city}`,
    type: "article",
    publishedAt: METRO_COST_UPDATED,
    updatedAt: METRO_COST_UPDATED,
    authorName: kenHoven.name,
    section: "Metro Cost Guide",
  });
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default async function MetroCostPage({ params }: { params: Params }) {
  const { slug, city } = await params;
  const guide = getGuideBySlug(slug);
  const cityData = getCityBySlug(city);
  if (!guide || !cityData) notFound();

  const tripRange = adjustRange(
    { low: guide.base.tripLow, high: guide.base.tripHigh },
    cityData.tier
  );
  const hourlyRange = adjustRange(
    { low: guide.hourly.low, high: guide.hourly.high },
    cityData.tier
  );
  const fairTrip = Math.round(((tripRange.low + tripRange.high) / 2) / 5) * 5;

  const path = `/costs/${slug}/metro/${city}`;
  const tierMult = TIER_MULTIPLIERS[cityData.tier];
  const pageTitle = `${capitalize(guide.shortName)} cost in ${cityData.name}, ${cityData.stateAbbr}`;
  const description = `${cityData.name}, ${cityData.stateAbbr} ${guide.longName} typically runs $${tripRange.low}–$${tripRange.high} for the trip plus first hour, $${hourlyRange.low}–$${hourlyRange.high}/hour after that. Metro-specific licensing and permit notes included.`;

  // Sibling metros in the same state, for cross-linking.
  const stateCitySiblings = CITIES.filter(
    (c) => c.stateAbbr === cityData.stateAbbr && c.slug !== cityData.slug
  ).slice(0, 4);

  const faqs = [
    {
      question: `How much does a ${guide.shortName} cost in ${cityData.name}?`,
      answer: `In ${cityData.name}, ${cityData.stateAbbr}, expect $${tripRange.low}–$${tripRange.high} for the trip plus the first ~30–60 minutes, then $${hourlyRange.low}–$${hourlyRange.high}/hour after that. For a ${guide.jobDescription}, total is usually within the trip-plus-first-hour bucket. Emergency / after-hours runs 1.5–2× these numbers.`,
    },
    {
      question: `What makes ${cityData.name} prices different from the national average?`,
      answer: `${cityData.name} pricing is in the "${tierMult.label}" tier — about ${Math.round((tierMult.low + tierMult.high) / 2 * 100)}% of the U.S. national service-call average. ${cityData.notes}`,
    },
    {
      question: `Should I get multiple quotes in ${cityData.name}?`,
      answer: `Yes, for any job above the basic trip-plus-first-hour range. ${cityData.name} licensed pros vary 30–40% in pricing for similar work; getting 2–3 written quotes is the cheapest way to find the fair price for your specific job. Always insist on written scope, not verbal estimates.`,
    },
    {
      question: `Are emergency rates much higher in ${cityData.name}?`,
      answer: `Yes. Evening, weekend, and overnight rates typically run 1.5×–2× the standard ${cityData.name} hourly rate. Overnight emergencies can push 2×–3×. Unless water is actively damaging your home or electrical is at risk, waiting until business hours saves $200–$500 on a typical visit.`,
    },
  ];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Repair Costs", href: "/costs" },
    { name: capitalize(guide.shortName), href: `/costs/${slug}` },
    { name: `${cityData.name}, ${cityData.stateAbbr}`, href: path },
  ];

  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb items={breadcrumbItems} />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Metro cost guide
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          {pageTitle}
        </h1>
        <p className="article-lede mt-5 text-lg text-ink-700 leading-relaxed max-w-3xl">
          {description}
        </p>
        <p className="mt-5 text-sm text-ink-500 flex flex-wrap gap-x-4 gap-y-1">
          <span>
            By{" "}
            <Link href={kenHoven.url} className="no-underline hover:text-navy-900">
              {kenHoven.name}
            </Link>
          </span>
          <span>Updated {new Date(METRO_COST_UPDATED).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
          <span>Tier: {tierMult.label}</span>
        </p>

        <FairPriceChecker
          job={`${capitalize(guide.shortName)} in ${cityData.name}, ${cityData.stateAbbr} (trip + first hour)`}
          low={tripRange.low}
          fair={fairTrip}
          high={tripRange.high}
          suspicious={Math.round((tripRange.high * 1.4) / 5) * 5}
          walkAway={Math.round((tripRange.high * 1.8) / 5) * 5}
          asOf="May 2026"
          notes={`${cityData.name} ${tierMult.label} tier. After the first hour, hourly rate runs $${hourlyRange.low}–$${hourlyRange.high}.`}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          What you&apos;re paying for in {cityData.name}
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Trip / dispatch fee.</strong>{" "}
            ${tripRange.low}–${tripRange.high} to send a licensed pro to your
            address. In {cityData.name}, the typical first 30–60 minutes is
            included in this base.
          </p>
          <p>
            <strong className="text-navy-900">Hourly rate after first hour.</strong>{" "}
            ${hourlyRange.low}–${hourlyRange.high}/hour, applied to diagnostic
            time, install time, and anything beyond the trip-included window.
          </p>
          <p>
            <strong className="text-navy-900">Parts and materials.</strong>{" "}
            Marked up 20–60% over retail at most shops. A $10 part can appear
            on your invoice at $15–$25.
          </p>
          <p>
            <strong className="text-navy-900">{cityData.name}-specific factors.</strong>{" "}
            {cityData.notes}
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          Common {cityData.name} job totals
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-300 text-left">
                <th className="py-2 pr-4 font-semibold text-navy-900">Job</th>
                <th className="py-2 pr-4 font-semibold text-navy-900">Time</th>
                <th className="py-2 font-semibold text-navy-900">Typical total</th>
              </tr>
            </thead>
            <tbody className="text-ink-700">
              <tr className="border-b border-ink-200">
                <td className="py-2 pr-4">{guide.jobDescription}</td>
                <td className="py-2 pr-4">30–60 min</td>
                <td className="py-2">
                  ${tripRange.low}–${tripRange.high}
                </td>
              </tr>
              <tr className="border-b border-ink-200">
                <td className="py-2 pr-4">2-item bundled visit</td>
                <td className="py-2 pr-4">60–120 min</td>
                <td className="py-2">
                  ${Math.round((tripRange.high + hourlyRange.high) / 5) * 5}–$
                  {Math.round((tripRange.high + hourlyRange.high * 2) / 5) * 5}
                </td>
              </tr>
              <tr className="border-b border-ink-200">
                <td className="py-2 pr-4">Emergency / after-hours single fix</td>
                <td className="py-2 pr-4">30–60 min</td>
                <td className="py-2">
                  ${Math.round((tripRange.low * 1.5) / 5) * 5}–$
                  {Math.round((tripRange.high * 2) / 5) * 5}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-600 leading-relaxed">
          Typical estimates based on tier-adjusted national service-call ranges.
          {cityData.name} pricing may vary by neighborhood, scope, and contractor.
        </p>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          How to keep the cost down in {cityData.name}
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
          <li>
            <strong>Bundle small jobs into one visit.</strong> One trip fee for
            three items beats three trip fees for one item each. The biggest
            single-action savings in any service-call budget.
          </li>
          <li>
            <strong>Schedule during weekday business hours.</strong> Friday
            afternoon, weekend, and after-hours rates run 1.5–2× in{" "}
            {cityData.name}.
          </li>
          <li>
            <strong>Describe the problem precisely on the booking call.</strong>{" "}
            Clear diagnostics shave 15–30 minutes of on-site time — real money
            at the metro hourly rate.
          </li>
          <li>
            <strong>Confirm flat-rate vs. hourly before work starts.</strong>{" "}
            Either is fine, but mixing them on the invoice is where padding
            happens.
          </li>
          <li>
            <strong>Get a second quote on anything over $500.</strong>{" "}
            {cityData.name} pricing varies 30–40% between licensed pros for
            comparable work.
          </li>
        </ul>

        <ContractorRedFlagsBlock
          redFlags={[
            <>
              Trip fee + diagnostic fee + first-hour labor all billed
              separately for one short visit.
            </>,
            <>
              Materials marked up more than 3× retail (a $5 part billed at
              $25+).
            </>,
            <>
              Quote that doesn&apos;t separate labor, parts, trip fee, and
              disposal.
            </>,
            <>
              Pressure to commit to additional repairs the same visit without
              a written estimate.
            </>,
            <>
              No published {cityData.stateName} license number on the truck,
              quote, or invoice.
            </>,
          ]}
          whatToAskInstead={
            <>
              Ask for an itemized written estimate before any work starts.
              Verify the {cityData.stateName} license number on the state
              board&apos;s public lookup tool.
            </>
          }
          whenToWalkAway={
            <>
              The contractor refuses to put scope and price in writing, or
              cannot produce a valid {cityData.stateName} license.
            </>
          }
        />

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">FAQ</h2>
          <dl className="mt-4 divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((f) => (
              <div key={f.question} className="py-5">
                <dt className="font-medium text-navy-900">{f.question}</dt>
                <dd className="mt-2 text-ink-700 leading-relaxed">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        {stateCitySiblings.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-navy-900">
              Other {cityData.stateName} metros
            </h2>
            <ul className="mt-4 space-y-2 text-ink-700">
              {stateCitySiblings.map((sib) => (
                <li key={sib.slug}>
                  →{" "}
                  <Link
                    href={`/costs/${slug}/metro/${sib.slug}`}
                    className="no-underline text-navy-700 hover:text-navy-900"
                  >
                    {capitalize(guide.shortName)} cost in {sib.name},{" "}
                    {sib.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                →{" "}
                <Link
                  href={`/costs/${slug}/${cityData.stateName.toLowerCase().replace(/\s+/g, "-")}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  Statewide {guide.shortName} cost for {cityData.stateName}
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related guides</h2>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li>
              →{" "}
              <Link
                href={`/costs/${slug}`}
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                {capitalize(guide.shortName)} cost — national breakdown
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/contractor-red-flags"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Contractor red flags
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/advice/signs-of-overpriced-quote"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Signs of an overpriced quote
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/advice/three-contractor-quotes"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Why three contractor quotes is the right number
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-xs text-ink-600 leading-relaxed">
          Metro cost ranges are estimates derived from tier-adjusted national
          service-call data. Real quotes from licensed pros in your specific
          neighborhood will vary by scope, access, demand, and individual
          contractor. Use these ranges to spot outliers, not as a fixed quote.
        </p>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          articleSchema({
            headline: pageTitle,
            description,
            url: path,
            datePublished: "2026-05-16",
            dateModified: "2026-05-16",
            authorUrl: kenHoven.url,
            authorName: kenHoven.name,
            articleSection: "Metro Cost Guide",
          }),
          faqSchema(faqs),
        ])}
      />
    </>
  );
}

/** Pre-build the full list of metro pages from the data file. */
export const dynamicParams = false;

// 180 metro-cost pages from this template:
// Pages = STATE_COST_GUIDES (5) × CITIES (36) — 180 indexable URLs total
const _metroPageCount = CITIES.length * STATE_COST_GUIDES.length;
void _metroPageCount;
