/**
 * Shared derivation for the programmatic local cost pages.
 *
 * WHY THIS EXISTS
 * ---------------
 * /costs/<slug>/<state> and /costs/<slug>/metro/<city> were two ~420-line
 * route files holding two copies of the same arithmetic and the same prose.
 * Every bug found in the audit existed twice: the missing space after
 * "…service-call ranges.", the "<State>license" concatenation, "a
 * electrician service call", the trip-fee framing applied to fixed-price
 * replacements, and the "2-item bundled visit" row that multiplied a whole
 * installed water heater by two.
 *
 * Everything that produces a number or a sentence containing a number now
 * lives here, so a fix lands on all ~655 pages at once and the two routes
 * can only differ in the things that genuinely differ (place name, sibling
 * links, breadcrumbs).
 *
 * HONESTY RULES ENCODED HERE
 * --------------------------
 * 1. No number is published that cannot be derived from a figure on the
 *    parent national guide plus the tier band in state-cost-data.ts.
 * 2. Fixed-price replacement jobs never render trip/dispatch language.
 * 3. Ranges round to a step that matches their magnitude (see adjustRange).
 * 4. Copy says "modeled", not "measured" — we hold no local quote sample.
 */

import {
  TIER_MULTIPLIERS,
  adjustRange,
  tierPercentBand,
  withIndefiniteArticle,
  type CostGuideForState,
  type StateCostTier,
} from "@/content/state-cost-data";

export type LocalCostPlace = {
  /** "Ohio" or "Austin" — used inside sentences. */
  name: string;
  /** "Ohio" or "Austin, TX" — used in titles and labels. */
  label: string;
  /** The state whose licensing rules apply. */
  stateName: string;
  /** Cost tier for this place. */
  tier: StateCostTier;
  /** The genuinely local paragraph: licensing, permits, climate, demand. */
  notes: string;
  /** "city" for state pages, "neighborhood" for metro pages. */
  subdivision: "city" | "neighborhood";
};

export type LocalCostRow = { job: string; time?: string; total: string };

/** Sentence-case a row label built from a lowercase job description. */
const sentenceCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export type LocalCostModel = ReturnType<typeof buildLocalCostModel>;

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const usdRange = (r: { low: number; high: number }) =>
  `${usd(r.low)}–${usd(r.high)}`;

/** Round a derived threshold the same way the base ranges are rounded. */
function step(value: number): number {
  const s = value >= 1000 ? 50 : 5;
  return Math.round(value / s) * s;
}

export function buildLocalCostModel(
  guide: CostGuideForState,
  place: LocalCostPlace
) {
  const isServiceCall = guide.model === "service-call";

  /** service-call: trip + first hour. fixed-job: all-in installed total. */
  const baseRange = adjustRange(guide.base, place.tier);
  const hourlyRange = adjustRange(guide.hourly, place.tier);
  const tier = TIER_MULTIPLIERS[place.tier];
  const pct = tierPercentBand(place.tier);

  const fair = step((baseRange.low + baseRange.high) / 2);
  const suspicious = step(baseRange.high * 1.4);
  const walkAway = step(baseRange.high * 1.8);

  /**
   * One-line description of what `baseRange` actually measures. This is the
   * sentence that used to say "for the trip plus first hour" on a garbage
   * disposal replacement.
   */
  const baseMeaning = isServiceCall
    ? "for the trip plus the first hour"
    : "installed, parts and labor together";

  const lede = isServiceCall
    ? `${place.label} ${guide.longName} pricing typically runs ${usdRange(baseRange)} for the trip plus the first hour, then ${usdRange(hourlyRange)}/hour. Local licensing and permit notes below, plus how we arrived at the range.`
    : `A ${guide.longName} in ${place.label} typically runs ${usdRange(baseRange)} installed — equipment and labor together, with no separate trip fee on a planned job. Local licensing and permit notes below, plus how we arrived at the range.`;

  const metaDescription = isServiceCall
    ? `${place.label} ${guide.longName}: ${usdRange(baseRange)} for the trip plus the first hour, then ${usdRange(hourlyRange)}/hour. Modeled from the national range with local licensing notes.`
    : `${place.label} ${guide.longName}: ${usdRange(baseRange)} installed, parts and labor. Modeled from the national range with local licensing and permit notes.`;

  /**
   * Job-totals table.
   *
   * service-call: a second small item adds roughly an hour of labor to the
   * same visit, so the honest range is (low base + low hourly) to (high
   * base + high hourly). The old formula started at the HIGH base, which
   * made the "bundled" low end higher than a single full-price visit.
   *
   * fixed-job: there is no bundling scenario. The only real variable is
   * extra labor hours when the swap is not like-for-like, so that is what
   * the second row shows — as an hourly add-on, not as a second total.
   */
  const rows: LocalCostRow[] = isServiceCall
    ? [
        {
          job: sentenceCase(guide.jobDescription),
          time: "30–60 min",
          total: usdRange(baseRange),
        },
        {
          job: "Two small items handled on the same visit",
          time: "60–120 min",
          total: usdRange({
            low: step(baseRange.low + hourlyRange.low),
            high: step(baseRange.high + hourlyRange.high),
          }),
        },
        {
          job: "Emergency / after-hours single fix",
          time: "30–60 min",
          total: usdRange({
            low: step(baseRange.low * 1.5),
            high: step(baseRange.high * 2),
          }),
        },
      ]
    : [
        {
          job: `${sentenceCase(guide.jobDescription)} — business hours`,
          total: usdRange(baseRange),
        },
        {
          job: "Each extra hour when the swap is not like-for-like",
          total: `${usdRange(hourlyRange)}/hour`,
        },
      ];

  const tableNote = isServiceCall
    ? `Modeled from the national service-call range for this trade, scaled to the ${place.label} tier. Pricing varies by ${place.subdivision}, scope and contractor.`
    : `Modeled from the national installed price for this job, scaled to the ${place.label} tier. After-hours and weekend bookings raise the labor portion — typically 1.5–2× — but not the equipment cost. Pricing varies by ${place.subdivision}, scope and contractor.`;

  /**
   * FAQ. Deliberately free of invented local statistics: the old copy
   * asserted "licensed pros vary 30–40% in pricing" and "about 145% of the
   * national average" on every page, neither of which came from data.
   */
  const faqs = [
    {
      question: `How much does ${withIndefiniteArticle(guide.shortName)} cost in ${place.label}?`,
      answer: isServiceCall
        ? `In ${place.label}, expect ${usdRange(baseRange)} for the trip plus the first 30–60 minutes, then ${usdRange(hourlyRange)}/hour after that. That first window normally covers the whole job on a ${guide.jobDescription}. Evening, weekend and overnight calls typically run 1.5–2× these numbers.`
        : `In ${place.label}, expect ${usdRange(baseRange)} installed for a ${guide.jobDescription}. A planned replacement does not usually carry a separate trip or dispatch fee; work that goes beyond a like-for-like swap is billed at roughly ${usdRange(hourlyRange)}/hour on top.`,
    },
    {
      question: `Why is this range different from the national figure?`,
      answer: `The national guide publishes ${guide.nationalBasis}. We place ${place.label} in the "${tier.label}" band, which scales that figure to roughly ${pct.low}–${pct.high}% of the national number, and round the result. It is a modeled range, not a survey of ${place.label} quotes. ${place.notes}`,
    },
    {
      question: `Should I get more than one quote in ${place.label}?`,
      answer: `Yes, for anything beyond the basic scope above. Quotes for the same written scope routinely differ by hundreds of dollars between licensed shops in the same market, and we do not publish a local quote sample — two or three written quotes is the cheapest way to find your actual ${place.label} price. Insist on written scope, not a verbal estimate.`,
    },
    {
      question: `Are emergency and after-hours rates higher in ${place.label}?`,
      answer: isServiceCall
        ? `Yes. Evening, weekend and overnight rates typically run 1.5–2× the standard ${place.label} rate, and overnight can reach 2–3×. Unless water is actively damaging the house or there is a live electrical hazard, waiting for business hours is usually the single biggest saving available.`
        : `The labor portion goes up — typically 1.5–2× for evenings and weekends — but the equipment does not, so an after-hours ${guide.longName} rises by less than a same-day service call would. A failed unit that is contained and not flooding can almost always wait for business hours.`,
    },
  ];

  const savingTips: Array<{ title: string; body: string }> = isServiceCall
    ? [
        {
          title: "Bundle small jobs into one visit.",
          body: "One trip fee covering three items beats three trip fees for one item each. On a service call this is the largest single lever you have.",
        },
        {
          title: "Book weekday business hours.",
          body: `Friday afternoon, weekend and after-hours rates run 1.5–2× in ${place.label}.`,
        },
        {
          title: "Describe the fault precisely when you book.",
          body: "A clear description shaves diagnostic time off the visit, which is billed at the hourly rate above.",
        },
        {
          title: "Settle flat-rate vs. hourly before work starts.",
          body: "Either is fine. Mixing the two on one invoice is where padding hides.",
        },
        {
          title: "Get a second quote on anything above the range here.",
          body: `Prices for identical scope vary widely between licensed pros in ${place.label}; a second written quote is the only reliable check.`,
        },
      ]
    : [
        {
          title: "Price the unit separately from the labor.",
          body: `Ask what the equipment costs and what the install costs. In ${place.label} the equipment is close to national retail — the local variation is almost entirely labor.`,
        },
        {
          title: "Keep it like-for-like.",
          body: "Same size, same fuel, same location. Changing any of the three turns a fixed-price swap into an hourly job and can add permits.",
        },
        {
          title: "Confirm haul-away and disposal are included.",
          body: "They usually are. A disposal fee appearing after the quote is a nuisance charge worth pushing back on.",
        },
        {
          title: "Don't book it as an emergency if it can wait.",
          body: "The labor portion runs 1.5–2× after hours. A contained failure can normally wait for a business-day slot.",
        },
        {
          title: "Get a second quote above the top of this range.",
          body: `Prices for identical scope vary widely between licensed shops in ${place.label}; a second written quote is the only reliable check.`,
        },
      ];

  /**
   * DIY alternative — only when the guide declares one (i.e. the site's own
   * /diy-or-hire verdict is DIY-recommended). Parts are national retail and
   * don't scale with tier; the saving is what the local labor would have
   * cost. Rendered as a pointer to the site's DIY verdict and buying guide,
   * never as a product listing — these are cost pages, not affiliate pages.
   */
  const diy = guide.diy
    ? (() => {
        const savingLow = Math.max(0, step(baseRange.low - guide.diy.parts.high));
        const savingHigh = Math.max(0, step(baseRange.high - guide.diy.parts.low));
        return {
          partsText: usdRange(guide.diy.parts),
          time: guide.diy.time,
          note: guide.diy.note,
          savingText: usdRange({ low: savingLow, high: savingHigh }),
          decisionPath: guide.diy.decisionPath,
          guidePath: guide.diy.guidePath,
          heading: `Doing it yourself in ${place.label}`,
          body: `The parts for a like-for-like ${guide.longName} are ${usdRange(guide.diy.parts)} at national retail and don't change by state — what you save by doing it yourself is the ${place.label} labor, roughly ${usdRange({ low: savingLow, high: savingHigh })} against the installed range above. ${guide.diy.note} Plan on ${guide.diy.time}.`,
        };
      })()
    : null;

  return {
    isServiceCall,
    diy,
    baseRange,
    hourlyRange,
    baseRangeText: usdRange(baseRange),
    hourlyRangeText: usdRange(hourlyRange),
    baseMeaning,
    fair,
    suspicious,
    walkAway,
    tierLabel: tier.label,
    tierPct: pct,
    lede,
    metaDescription,
    rows,
    tableNote,
    faqs,
    savingTips,
  };
}

export { usd, usdRange };
