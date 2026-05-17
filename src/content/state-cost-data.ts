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
      "Alabama licenses electricians and plumbers at the state level. Permit fees are typically modest ($25–$75 for residential work). Service-call rates trend below the U.S. average.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    tier: "mid",
    notes:
      "Arizona's Registrar of Contractors licenses both electrical and plumbing trades. Phoenix-area pricing runs above the state average; Tucson is closer to national. Summer-heat demand pushes HVAC-adjacent rates up June–September.",
  },
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    tier: "premium",
    notes:
      "California requires state-issued contractor licensing through the CSLB. Bay Area, LA, and San Diego carry the highest service rates in the U.S. Title 24 energy code adds compliance steps that often increase total project cost.",
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
      "Florida licenses contractors at the state level via DBPR. Service-call rates are near national average outside South Florida. Miami-Dade and Broward push toward high-tier pricing. Hurricane-season permit demand increases lead times May–November.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    tier: "mid",
    notes:
      "Georgia State Construction Industry Licensing Board licenses electricians and plumbers. Atlanta-metro rates run high-tier; rural Georgia is closer to low-tier. Most counties require permits for new circuits or fixture relocations.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    tier: "high",
    notes:
      "Chicago has its own electrical code (Chicago Electrical Code) and licensing on top of state rules — service calls in Cook County run premium-tier. Downstate Illinois is closer to mid-tier.",
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    tier: "low",
    notes:
      "Indiana licenses plumbers at the state level; electrical licensing is by city or county. Indianapolis pricing is near national average; smaller cities run below.",
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    tier: "low",
    notes:
      "Kentucky State Plumbing Code and Kentucky Board of Electrical Examiners govern licensing. Permit fees are usually under $50 for residential service work.",
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    abbr: "LA",
    tier: "low",
    notes:
      "Louisiana State Plumbing Board and the State Licensing Board for Contractors handle licensing. Post-hurricane periods (typically late summer) increase demand and waiting times.",
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    tier: "high",
    notes:
      "Maryland licenses both trades at the state level. DC-metro counties (Montgomery, Prince George's) push pricing toward premium-tier; Western Maryland is closer to mid-tier.",
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbr: "MA",
    tier: "premium",
    notes:
      "Massachusetts has some of the strictest state electrical and plumbing codes in the U.S. Boston-metro service rates lead the country. The state requires master-licensed plumbers and electricians for most non-trivial work.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    tier: "mid",
    notes:
      "Michigan licenses electricians and plumbers through LARA. Detroit-metro and Grand Rapids run high-tier; the U.P. is closer to low-tier.",
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    tier: "high",
    notes:
      "Minnesota Department of Labor and Industry licenses both trades. Twin Cities pricing runs high-tier. Cold-climate water heater and pipe-burst work peaks December–February.",
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    tier: "low",
    notes:
      "Missouri licenses plumbers at the state level; electrical licensing is largely municipal. St. Louis and Kansas City run mid-tier; outstate Missouri is below.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    tier: "high",
    notes:
      "Nevada State Contractors Board licenses both trades. Las Vegas-metro runs high-tier; rural Nevada is closer to mid. Strict permit enforcement on new construction.",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    tier: "premium",
    notes:
      "New Jersey requires state-issued master electrician and master plumber licenses. NYC-metro counties (Bergen, Hudson, Essex) run premium-tier. The state's per-permit fees and inspection cycles are among the country's stricter.",
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    tier: "premium",
    notes:
      "New York City runs the highest service rates in the country — boroughs require NYC-issued licenses on top of state ones. Upstate New York is closer to high-tier or mid-tier outside Buffalo and Albany.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    tier: "mid",
    notes:
      "North Carolina State Board of Examiners licenses both trades. Charlotte and Raleigh-Durham metros push toward high-tier; Eastern NC and the mountains are closer to low-tier.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    tier: "mid",
    notes:
      "Ohio licenses plumbers and electricians through the state Construction Industry Examining Board. Columbus, Cincinnati, and Cleveland metros run high-tier; rural Ohio is below.",
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    tier: "high",
    notes:
      "Oregon Building Codes Division licenses both trades. Portland-metro runs premium-tier; Southern Oregon and the Eastern half of the state are closer to mid-tier.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    tier: "mid",
    notes:
      "Pennsylvania has no statewide electrical licensing — it's municipal (Philadelphia, Pittsburgh have their own). Master-plumber licensing is also municipal. Major-metro pricing runs high-tier; rural is below.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    tier: "low",
    notes:
      "South Carolina Contractor's Licensing Board licenses both trades. Charleston and Greenville run mid-tier; the rest of the state is closer to low-tier.",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    tier: "low",
    notes:
      "Tennessee Department of Commerce and Insurance licenses contractors. Nashville-metro runs mid-tier and rising; Memphis, Knoxville, and rural Tennessee are closer to low-tier.",
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    tier: "mid",
    notes:
      "Texas Department of Licensing and Regulation handles electrical and plumbing licensing. Austin, Houston, and Dallas-Fort Worth metros run high-tier; West Texas and the Panhandle are below. No state income tax — labor markups can be slightly lower than mid-tier states for the same work.",
  },
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    tier: "mid",
    notes:
      "Utah Division of Professional Licensing handles both trades. Salt Lake City and Provo-Orem run mid-to-high tier; St. George (rapidly growing) is rising fast.",
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    tier: "high",
    notes:
      "Virginia DPOR licenses contractors. Northern Virginia (DC-metro) runs premium-tier; Hampton Roads is high-tier; Southwest Virginia is closer to low-tier.",
  },
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    tier: "premium",
    notes:
      "Washington Department of Labor and Industries licenses electricians and plumbers. Seattle-metro service rates are among the country's highest. State has unusually rigorous permit enforcement.",
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    tier: "mid",
    notes:
      "Wisconsin Department of Safety and Professional Services licenses both trades. Madison and Milwaukee metros run high-tier; rural Wisconsin is closer to low-tier. Winter pipe-burst work peaks January–February.",
  },
];

/**
 * The cost guides that get state-level expansion. Slug must match the
 * existing /costs/<slug> article so the parent canonical works.
 */
export type CostGuideForState = {
  slug: string;
  /** Used in titles ("Electrician service call cost in <State>"). */
  shortName: string;
  /** Used in body copy. */
  longName: string;
  /** Base trip/setup fee range (national). */
  base: { tripLow: number; tripHigh: number };
  /** Base hourly range (national). */
  hourly: { low: number; high: number };
  /** What the state-adjusted range applies to (job description). */
  jobDescription: string;
};

export const STATE_COST_GUIDES: CostGuideForState[] = [
  {
    slug: "electrician-service-call",
    shortName: "electrician service call",
    longName: "electrician service call",
    base: { tripLow: 80, tripHigh: 200 },
    hourly: { low: 75, high: 150 },
    jobDescription:
      "single small electrical fix — one outlet, one breaker, one fixture",
  },
  {
    slug: "plumber-service-call",
    shortName: "plumber service call",
    longName: "plumber service call",
    base: { tripLow: 75, tripHigh: 200 },
    hourly: { low: 85, high: 175 },
    jobDescription:
      "single small plumbing fix — leaky faucet, slow drain, stuck disposal",
  },
];

/** Apply a tier's multiplier band to a national base range. */
export function adjustRange(
  base: { low: number; high: number },
  tier: StateCostTier
): { low: number; high: number } {
  const mult = TIER_MULTIPLIERS[tier];
  return {
    low: Math.round((base.low * mult.low) / 5) * 5,
    high: Math.round((base.high * mult.high) / 5) * 5,
  };
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
