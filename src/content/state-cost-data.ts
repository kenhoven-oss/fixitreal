/**
 * State-level cost adjusters for programmatic /costs/<slug>/<state> pages.
 *
 * Data sourcing approach:
 * - Base ranges are pulled from the parent article (e.g. electrician
 *   service call $80–$200 trip / $75–$150 hourly).
 * - State adjusters approximate Bureau of Labor Statistics regional wage
 *   data (occupational codes 47-2111 electricians, 47-2152 plumbers)
 *   converted to a tier system. High-cost metros within a state can
 *   exceed the upper bound; rural areas within a state can fall below it.
 * - These are estimates labeled as such on every page. Never claimed as
 *   exact national prices.
 *
 * Why this data shape:
 * - Each state object is a tier label + a multiplier band so the cost
 *   ranges feel real and homeowner-specific without inventing dollar-
 *   precision we can't defend.
 * - `notes` carries the genuinely-distinct regional context that makes
 *   the page worth indexing (license rules, permit norms, climate, code).
 *
 * Two different pricing models live in this file — see `PricingModel`.
 * Getting this wrong is how a $230-$500 *installed* garbage disposal ends
 * up rendered as a "trip / dispatch fee", so the discriminator is
 * mandatory on every guide and the templates branch on it.
 */

export type StateCostTier = "low" | "mid" | "high" | "premium";

export type StateCostData = {
  slug: string;
  /** Display name, e.g. "Texas". */
  name: string;
  /** USPS 2-letter abbreviation, e.g. "TX". */
  abbr: string;
  /** Cost tier — drives the multiplier band. */
  tier: StateCostTier;
  /** State-specific permit, licensing, or climate notes. 1–2 sentences. */
  notes: string;
};

/**
 * Multiplier bands for each tier. Applied to the base range from the
 * parent cost article to produce a state-adjusted range.
 *
 * - "low":     ~0.75× — rural / lower wage states
 * - "mid":     ~1.00× — national average
 * - "high":    ~1.20× — major metros, higher wage states
 * - "premium": ~1.45× — highest-cost coastal markets
 */
export const TIER_MULTIPLIERS: Record<
  StateCostTier,
  { low: number; high: number; label: string }
> = {
  low: { low: 0.7, high: 0.85, label: "Lower-wage rural" },
  mid: { low: 0.9, high: 1.1, label: "National average" },
  high: { low: 1.1, high: 1.3, label: "Major-metro / higher-wage" },
  premium: { low: 1.3, high: 1.6, label: "High-cost coastal" },
};

/**
 * 25 priority states. Selected by population (covering ~85% of U.S. homes)
 * and by SEO query volume for "[trade] cost in [state]" patterns.
 */
export const STATES: StateCostData[] = [
  {
    slug: "alabama",
    name: "Alabama",
    abbr: "AL",
    tier: "low",
    notes:
      "Permit fees are typically modest ($25–$75 for residential work). Service-call rates trend below the U.S. average.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    tier: "mid",
    notes:
      "Phoenix-area pricing runs above the state average; Tucson is closer to national. Summer-heat demand pushes HVAC-adjacent rates up June–September.",
  },
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    tier: "premium",
    notes:
      "Bay Area, LA, and San Diego carry the highest service rates in the U.S. Title 24 energy code adds compliance steps that often increase total project cost.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    tier: "high",
    notes:
      "Denver / Boulder metros run high-tier; the Western Slope is closer to national average. Mountain-town service calls can carry travel surcharges of $50–$150 above quoted minimums.",
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    tier: "mid",
    notes:
      "Service-call rates are near national average outside South Florida. Miami-Dade and Broward push toward high-tier pricing. Hurricane-season permit demand increases lead times May–November.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    tier: "mid",
    notes:
      "Atlanta-metro rates run high-tier; rural Georgia is closer to low-tier. Most counties require permits for new circuits or fixture relocations.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    tier: "high",
    notes:
      "Chicago enforces its own Chicago Electrical Code, and service calls in Cook County run premium-tier. Downstate Illinois is closer to mid-tier.",
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    tier: "low",
    notes:
      "Indianapolis pricing is near national average; smaller cities run below.",
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    tier: "low",
    notes:
      "Permit fees are usually under $50 for residential service work.",
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    abbr: "LA",
    tier: "low",
    notes:
      "Post-hurricane periods (typically late summer) increase demand and waiting times.",
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    tier: "high",
    notes:
      "DC-metro counties (Montgomery, Prince George's) push pricing toward premium-tier; Western Maryland is closer to mid-tier.",
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbr: "MA",
    tier: "premium",
    notes:
      "Massachusetts has some of the strictest state electrical and plumbing codes in the U.S. Boston-metro service rates lead the country.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    tier: "mid",
    notes:
      "Detroit-metro and Grand Rapids run high-tier; the U.P. is closer to low-tier.",
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    tier: "high",
    notes:
      "Twin Cities pricing runs high-tier. Cold-climate water heater and pipe-burst work peaks December–February.",
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    tier: "low",
    notes:
      "St. Louis and Kansas City run mid-tier; outstate Missouri is below.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    tier: "high",
    notes:
      "Las Vegas-metro runs high-tier; rural Nevada is closer to mid. Strict permit enforcement on new construction.",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    tier: "premium",
    notes:
      "NYC-metro counties (Bergen, Hudson, Essex) run premium-tier. The state's per-permit fees and inspection cycles are among the country's stricter.",
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    tier: "premium",
    notes:
      "New York City runs the highest service rates in the country; upstate is closer to high- or mid-tier outside Buffalo and Rochester. Upstate New York is closer to high-tier or mid-tier outside Buffalo and Albany.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    tier: "mid",
    notes:
      "Charlotte and Raleigh-Durham metros push toward high-tier; Eastern NC and the mountains are closer to low-tier.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    tier: "mid",
    notes:
      "Columbus, Cincinnati, and Cleveland metros run high-tier; rural Ohio is below.",
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    tier: "high",
    notes:
      "Portland-metro runs premium-tier; Southern Oregon and the Eastern half of the state are closer to mid-tier.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    tier: "mid",
    notes:
      "Major-metro pricing runs high-tier; rural is below.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    tier: "low",
    notes:
      "Charleston and Greenville run mid-tier; the rest of the state is closer to low-tier.",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    tier: "low",
    notes:
      "Nashville-metro runs mid-tier and rising; Memphis, Knoxville, and rural Tennessee are closer to low-tier.",
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    tier: "mid",
    notes:
      "Austin, Houston, and Dallas-Fort Worth metros run high-tier; West Texas and the Panhandle are below. No state income tax — labor markups can be slightly lower than mid-tier states for the same work.",
  },
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    tier: "mid",
    notes:
      "Salt Lake City and Provo-Orem run mid-to-high tier; St. George (rapidly growing) is rising fast.",
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    tier: "high",
    notes:
      "Northern Virginia (DC-metro) runs premium-tier; Hampton Roads is high-tier; Southwest Virginia is closer to low-tier.",
  },
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    tier: "premium",
    notes:
      "Seattle-metro service rates are among the country's highest. State has unusually rigorous permit enforcement.",
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    tier: "mid",
    notes:
      "Madison and Milwaukee metros run high-tier; rural Wisconsin is closer to low-tier. Winter pipe-burst work peaks January–February.",
  },
];

/**
 * ISO date the state pages were last materially reviewed.
 *
 * Single source of truth: page metadata, the visible "Updated" line, the
 * Article JSON-LD and the fair-price band all read this. Bump it when the
 * rate tables or the page copy change materially — not on every deploy.
 */
export const STATE_COST_UPDATED = "2026-09-13";

/**
 * Whether the programmatic state and metro cost pages are submitted to
 * search engines (sitemap + index directive). One switch controls both so
 * the sitemap can never advertise a noindexed URL.
 *
 * Currently TRUE. 30 days of analytics (to 2026-09-20) showed these ~678
 * pages produced 3 search visits, and a uniqueness inventory is being
 * produced (docs/programmatic-page-inventory.md). Do not flip this to false
 * until that inventory has been reviewed and the impact signed off —
 * flipping it sets index:false, follow:true on every state/metro page and
 * removes them from the sitemap.
 */
export const LOCAL_COST_PAGES_INDEXABLE = true;

/**
 * Which cost model a guide follows. The two behave nothing alike and must
 * not share body copy.
 *
 * - "service-call": you are buying a pro's time. The headline number is a
 *   trip / dispatch fee that includes the first 30-60 minutes, and an
 *   hourly rate applies after that. Bundling extra items onto one visit is
 *   genuinely the biggest lever the homeowner has.
 * - "fixed-job": you are buying a completed replacement. The headline
 *   number is an all-in installed price (equipment + labor + haul-away)
 *   that already absorbs the trip. There is no separate dispatch fee to
 *   quote, and "bundle two of them into one visit" is not a real scenario.
 */
export type PricingModel = "service-call" | "fixed-job";

export type CostGuideForState = {
  slug: string;
  /** Used in titles ("Electrician service call cost in <State>"). */
  shortName: string;
  /** Used in body copy. */
  longName: string;
  /** Which cost model the page renders. See PricingModel. */
  model: PricingModel;
  /**
   * The national range this page scales from.
   *
   * - service-call: trip / dispatch fee including the first 30-60 minutes.
   * - fixed-job: all-in installed total, parts and labor.
   *
   * MUST reconcile with the published figure on the parent /costs/<slug>
   * article. `nationalBasis` records the parent's wording so a drift is
   * visible in review.
   */
  base: { low: number; high: number };
  /** Base hourly range (national) for time beyond the base scope. */
  hourly: { low: number; high: number };
  /** What the adjusted range applies to (job description). */
  jobDescription: string;
  /**
   * Optional DIY alternative, only for jobs the site's own /diy-or-hire
   * verdict rates as DIY-recommended. Parts are national retail and do not
   * scale with the tier; the local saving is the local installed range minus
   * these parts. Absent on service-call guides and on hire-a-pro jobs
   * (water heater), where suggesting DIY would contradict the site.
   */
  diy?: {
    /** National retail parts range for the like-for-like job. */
    parts: { low: number; high: number };
    /** Realistic hands-on time for a first-timer. */
    time: string;
    /** One sentence on what makes it DIY-able (or the one catch). */
    note: string;
    /** The long-form DIY-or-hire verdict article. */
    decisionPath: string;
    /** Optional buying guide for the parts. */
    guidePath?: string;
  };
  /** The parent guide's published figure, verbatim, for the methodology box. */
  nationalBasis: string;
};

export const STATE_COST_GUIDES: CostGuideForState[] = [
  {
    slug: "electrician-service-call",
    shortName: "electrician service call",
    longName: "electrician service call",
    model: "service-call",
    base: { low: 80, high: 200 },
    hourly: { low: 75, high: 150 },
    jobDescription:
      "single small electrical fix — one outlet, one breaker, one fixture",
    nationalBasis:
      "$80–$200 for the trip plus the first hour, then $75–$150/hour",
  },
  {
    slug: "plumber-service-call",
    shortName: "plumber service call",
    longName: "plumber service call",
    model: "service-call",
    base: { low: 75, high: 200 },
    hourly: { low: 85, high: 175 },
    jobDescription:
      "single small plumbing fix — leaky faucet, slow drain, stuck disposal",
    nationalBasis:
      "$75–$200 for the trip plus the first hour, then $85–$175/hour",
  },
  {
    slug: "smoke-detector-replacement",
    shortName: "smoke detector replacement",
    longName: "smoke detector replacement",
    model: "fixed-job",
    base: { low: 105, high: 210 },
    hourly: { low: 80, high: 150 },
    jobDescription:
      "single hardwired smoke alarm swap, brand-match, no new wiring",
    nationalBasis: "$105–$210 per hardwired location, installed",
    diy: {
      parts: { low: 15, high: 60 },
      time: "15–30 minutes per alarm",
      note: "A like-for-like swap plugs into the existing harness; the breaker goes off first and the brand should match so the alarms stay interconnected.",
      decisionPath: "/diy-or-hire/smoke-detector",
      guidePath: "/tools/best-smoke-detectors-for-homeowners",
    },
  },
  {
    slug: "garbage-disposal-replacement",
    shortName: "garbage disposal replacement",
    longName: "garbage disposal replacement",
    model: "fixed-job",
    base: { low: 230, high: 500 },
    hourly: { low: 85, high: 175 },
    jobDescription:
      "like-for-like ¾ HP disposal swap — unit, labor and haul-away",
    nationalBasis: "$230–$500 hired, including a mid-range ¾ HP unit",
    diy: {
      parts: { low: 85, high: 150 },
      time: "about an hour",
      note: "Mounting rings are standardized across brands and the wiring is a plug or three wires; the one catch is a corroded old mounting flange that will not budge.",
      decisionPath: "/diy-or-hire/garbage-disposal",
    },
  },
  {
    slug: "water-heater-replacement",
    shortName: "water heater replacement",
    longName: "water heater replacement",
    model: "fixed-job",
    // Was 900–1800, which reconciled with nothing. The parent guide
    // publishes $1,350–$2,400 installed; that is the only defensible base.
    base: { low: 1350, high: 2400 },
    hourly: { low: 85, high: 175 },
    jobDescription:
      "like-for-like 40–50 gallon tank swap — unit, labor, permit and haul-away",
    nationalBasis: "$1,350–$2,400 installed for a standard 50-gallon swap",
  },
];

/**
 * Round to a step that matches the magnitude of the number.
 *
 * Publishing "$3,847" implies a precision this model does not have. Small
 * numbers round to $5, four-figure numbers to $50.
 */
function roundToStep(value: number): number {
  const step = value >= 1000 ? 50 : 5;
  return Math.round(value / step) * step;
}

/**
 * Apply a tier's multiplier band to a national base range.
 *
 * The low end of the national range is scaled by the low end of the tier
 * band and the high end by the high end, so the published local range is
 * deliberately wider than the national one. That is stated on the page in
 * the "How we calculated this local price" block — it is a modeled range,
 * not a survey of local quotes.
 */
export function adjustRange(
  base: { low: number; high: number },
  tier: StateCostTier
): { low: number; high: number } {
  const mult = TIER_MULTIPLIERS[tier];
  return {
    low: roundToStep(base.low * mult.low),
    high: roundToStep(base.high * mult.high),
  };
}

/** Percentage band a tier represents, for honest "x%-y% of national" copy. */
export function tierPercentBand(tier: StateCostTier): { low: number; high: number } {
  const mult = TIER_MULTIPLIERS[tier];
  return { low: Math.round(mult.low * 100), high: Math.round(mult.high * 100) };
}

/**
 * "a" vs "an" for a dynamically inserted noun phrase.
 *
 * Exists because the FAQ headings are built from `guide.shortName`, and
 * "How much does a electrician service call cost" shipped to ~655 pages
 * and into FAQPage structured data before anyone noticed.
 */
export function withIndefiniteArticle(phrase: string): string {
  const first = phrase.trim().charAt(0).toLowerCase();
  return `${"aeiou".includes(first) ? "an" : "a"} ${phrase}`;
}

/** All (slug, state) combinations for generateStaticParams. */
export function getAllStateCostParams(): Array<{ slug: string; state: string }> {
  const out: Array<{ slug: string; state: string }> = [];
  for (const guide of STATE_COST_GUIDES) {
    for (const state of STATES) {
      out.push({ slug: guide.slug, state: state.slug });
    }
  }
  return out;
}

export function getStateByslug(slug: string): StateCostData | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getGuideBySlug(slug: string): CostGuideForState | undefined {
  return STATE_COST_GUIDES.find((g) => g.slug === slug);
}
