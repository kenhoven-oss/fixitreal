import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FairPriceChecker } from "@/components/content/FairPriceChecker";
import { ContractorRedFlagsBlock } from "@/components/content/ContractorRedFlagsBlock";
import { DiyAlternative } from "@/components/content/DiyAlternative";
import { LocalPriceMethodology } from "@/components/content/LocalPriceMethodology";
import { LocalLicensing } from "@/components/content/LocalLicensing";
import { getStateLicensing, tradeForGuide } from "@/content/state-licensing";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, articleSchema, faqSchema } from "@/lib/jsonld";
import { buildLocalCostModel } from "@/lib/local-cost-page";
import { DEFAULT_INCLUDED_MINUTES } from "@/lib/service-call-math";
import {
  STATES,
  STATE_COST_GUIDES,
  STATE_COST_UPDATED,
  getAllStateCostParams,
  getGuideBySlug,
  getStateByslug,
  LOCAL_COST_PAGES_INDEXABLE,
} from "@/content/state-cost-data";
import { kenHoven } from "@/content/authors/ken-hoven";

type Params = Promise<{ slug: string; state: string }>;

export function generateStaticParams() {
  return getAllStateCostParams();
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const REVIEWED_LABEL = new Date(STATE_COST_UPDATED).toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, state } = await params;
  const guide = getGuideBySlug(slug);
  const stateData = getStateByslug(state);
  if (!guide || !stateData) return buildMetadata({ title: "Not found", noIndex: true });

  const model = buildLocalCostModel(guide, {
    name: stateData.name,
    label: stateData.name,
    stateName: stateData.name,
    tier: stateData.tier,
    notes: stateData.notes,
    subdivision: "city",
  });

  return buildMetadata({
    title: capitalize(`${guide.shortName} cost in ${stateData.name}`),
    description: `${model.metaDescription} Reviewed ${REVIEWED_LABEL}.`,
    path: `/costs/${slug}/${state}`,
    type: "article",
    publishedAt: STATE_COST_UPDATED,
    updatedAt: STATE_COST_UPDATED,
    authorName: kenHoven.name,
    section: "State Cost Guide",
    noIndexFollow: !LOCAL_COST_PAGES_INDEXABLE,
  });
}

export default async function StateCostPage({ params }: { params: Params }) {
  const { slug, state } = await params;
  const guide = getGuideBySlug(slug);
  const stateData = getStateByslug(state);
  if (!guide || !stateData) notFound();

  const place = {
    name: stateData.name,
    label: stateData.name,
    stateName: stateData.name,
    tier: stateData.tier,
    notes: stateData.notes,
    subdivision: "city" as const,
  };
  const model = buildLocalCostModel(guide, place);

  const path = `/costs/${slug}/${state}`;
  const pageTitle = capitalize(`${guide.shortName} cost in ${stateData.name}`);
  const nationalLabel = capitalize(`${guide.shortName} cost — national guide`);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Repair Costs", href: "/costs" },
    { name: capitalize(guide.shortName), href: `/costs/${slug}` },
    { name: stateData.name, href: path },
  ];

  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb items={breadcrumbItems} />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          State cost guide
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          {pageTitle}
        </h1>
        <p className="article-lede mt-5 text-lg text-ink-700 leading-relaxed max-w-3xl">
          {model.lede}
        </p>
        <p className="mt-5 text-sm text-ink-500 flex flex-wrap gap-x-4 gap-y-1">
          <span>
            By{" "}
            <Link href={kenHoven.url} className="no-underline hover:text-navy-900">
              {kenHoven.name}
            </Link>
          </span>
          <span>{`Updated ${REVIEWED_LABEL}`}</span>
          <span>{`Tier: ${model.tierLabel}`}</span>
        </p>

        <FairPriceChecker
          job={
            model.isServiceCall
              ? capitalize(`${guide.shortName} in ${stateData.name} (trip + first hour)`)
              : capitalize(`${guide.shortName} in ${stateData.name} (installed)`)
          }
          low={model.baseRange.low}
          fair={model.fair}
          high={model.baseRange.high}
          suspicious={model.suspicious}
          walkAway={model.walkAway}
          asOf={REVIEWED_LABEL}
          notes={
            model.isServiceCall
              ? `${stateData.name} ${model.tierLabel} tier. After the first hour, the hourly rate runs ${model.hourlyRangeText}.`
              : `${stateData.name} ${model.tierLabel} tier. Installed price, parts and labor. Work beyond a like-for-like swap is billed at about ${model.hourlyRangeText}/hour.`
          }
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          {`What you're paying for in ${stateData.name}`}
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          {model.isServiceCall ? (
            <>
              <p>
                <strong className="text-navy-900">Trip / dispatch fee.</strong>{" "}
                {`${model.baseRangeText} to send a licensed pro to your address. In ${stateData.name}, the first 30–60 minutes on site is normally included in that base.`}
              </p>
              <p>
                <strong className="text-navy-900">
                  Hourly rate after the first hour.
                </strong>{" "}
                {`${model.hourlyRangeText}/hour, applied to diagnostic time, install time, and anything beyond the trip-included window.`}
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-navy-900">One installed price.</strong>{" "}
                {`${model.baseRangeText} covers the unit, the labor and haul-away of the old one. A planned replacement does not normally carry a separate trip or dispatch fee — shops fold the visit into the job price, so a trip fee itemized on top of a flat replacement quote is worth questioning.`}
              </p>
              <p>
                <strong className="text-navy-900">
                  Extra labor, when it applies.
                </strong>{" "}
                {`About ${model.hourlyRangeText}/hour for anything past a like-for-like swap — a different size, a different type, a new location, or repairing what turns up behind the old unit.`}
              </p>
            </>
          )}
          <p>
            <strong className="text-navy-900">Parts and materials.</strong>{" "}
            Marked up 20–60% over retail at most shops. A $10 part can appear
            on your invoice at $15–$25.
          </p>
          <p>
            <strong className="text-navy-900">
              {`${stateData.name}-specific factors.`}
            </strong>{" "}
            {stateData.notes}
          </p>
        </div>

        {(() => {
          const lic = getStateLicensing(state);
          return lic ? (
            <LocalLicensing stateName={stateData.name} licensing={lic} trade={tradeForGuide(slug)} />
          ) : null;
        })()}

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          {`Common ${stateData.name} job totals`}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-300 text-left">
                <th className="py-2 pr-4 font-semibold text-navy-900">Job</th>
                {model.isServiceCall && (
                  <th className="py-2 pr-4 font-semibold text-navy-900">Time</th>
                )}
                <th className="py-2 font-semibold text-navy-900">Typical total</th>
              </tr>
            </thead>
            <tbody className="text-ink-700">
              {model.rows.map((row) => (
                <tr key={row.job} className="border-b border-ink-200">
                  <td className="py-2 pr-4">{row.job}</td>
                  {model.isServiceCall && (
                    <td className="py-2 pr-4">{row.time}</td>
                  )}
                  <td className="py-2">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-600 leading-relaxed">
          {model.tableNote}
        </p>

        <LocalPriceMethodology
          place={stateData.name}
          nationalBasis={guide.nationalBasis}
          nationalHref={`/costs/${slug}`}
          nationalLabel={nationalLabel}
          tierLabel={model.tierLabel}
          tierPct={model.tierPct}
          localRange={model.baseRangeText}
          localRangeMeaning={model.baseMeaning}
          reviewedOn={REVIEWED_LABEL}
          jobTotalFormula={
            model.isServiceCall
              ? { includedMinutes: DEFAULT_INCLUDED_MINUTES, hourlyRange: model.hourlyRangeText }
              : undefined
          }
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          {`How to keep the cost down in ${stateData.name}`}
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
          {model.savingTips.map((tip) => (
            <li key={tip.title}>
              <strong>{tip.title}</strong> {tip.body}
            </li>
          ))}
        </ul>

        {model.diy && <DiyAlternative diy={model.diy} />}

        <ContractorRedFlagsBlock
          redFlags={[
            model.isServiceCall
              ? "Trip fee, diagnostic fee and first-hour labor all billed separately for one short visit."
              : "A trip or dispatch fee itemized on top of a flat-rate replacement quote.",
            "Materials marked up more than 3× retail (a $5 part billed at $25+).",
            "A quote that doesn't separate labor, parts, permit and disposal.",
            "Pressure to approve extra repairs on the same visit without a written estimate.",
            "Can't or won't give you a license (or local registration) number you can look up.",
          ]}
          whatToAskInstead={`Ask for an itemized written estimate before any work starts, and check the license number against whichever body licenses this trade in ${stateData.name} — a state board in most states, a city or county office in the rest.`}
          whenToWalkAway="The contractor won't put scope and price in writing, or can't give you a license number you can verify."
        />

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">FAQ</h2>
          <dl className="mt-4 divide-y divide-ink-200 border-y border-ink-200">
            {model.faqs.map((f) => (
              <div key={f.question} className="py-5">
                <dt className="font-medium text-navy-900">{f.question}</dt>
                <dd className="mt-2 text-ink-700 leading-relaxed">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related guides</h2>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li>
              →{" "}
              <Link
                href={`/costs/${slug}`}
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                {nationalLabel}
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
          {`These ${stateData.name} ranges are modeled from national figures and a regional band, not collected from ${stateData.name} contractors. Real quotes vary by scope, access, demand and individual contractor. Use the range to spot outliers, not as a quote.`}
        </p>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          articleSchema({
            headline: pageTitle,
            description: model.metaDescription,
            url: path,
            datePublished: STATE_COST_UPDATED,
            dateModified: STATE_COST_UPDATED,
            authorUrl: kenHoven.url,
            authorName: kenHoven.name,
            articleSection: "State Cost Guide",
          }),
          faqSchema(model.faqs),
        ])}
      />
    </>
  );
}

/** Pre-build the full list of state pages from the data file. */
export const dynamicParams = false;

// State-cost pages from this template:
// Pages = STATE_COST_GUIDES × STATES indexable URLs total.
const _statePageCount = STATES.length * STATE_COST_GUIDES.length;
void _statePageCount;
