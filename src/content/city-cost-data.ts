/**
 * City-level cost adjusters for programmatic /costs/<slug>/metro/<city> pages.
 *
 * Architecture mirrors src/content/state-cost-data.ts: top US metros are
 * binned into the same four tiers (low / mid / high / premium) and we
 * reuse the same parent guides + multiplier bands. The metro-level page
 * exists because "plumber cost in austin tx" and similar long-tail
 * queries have meaningfully higher purchase intent than the state-level
 * variant and are less crowded with city-listing aggregators.
 *
 * Data sourcing is the same approach as the state file: BLS area-wage
 * data (occupational codes 47-2111 electricians, 47-2152 plumbers,
 * 49-9071 maintenance & repair workers) is binned to a tier, then the
 * notes field carries the genuinely-distinct metro context (licensing,
 * permit norms, climate, dominant repair seasons).
 *
 * Use a separate URL prefix (`/metro/`) so city slugs cannot collide
 * with state slugs in the [state] dynamic segment of the parallel
 * state route.
 */

import type { StateCostTier } from "@/content/state-cost-data";
import { STATE_COST_GUIDES, TIER_MULTIPLIERS, adjustRange } from "@/content/state-cost-data";

export type CityCostData = {
  /** URL slug — lowercase, hyphenated, includes state abbr for disambiguation. */
  slug: string;
  /** Display name, e.g. "Austin". */
  name: string;
  /** State name for breadcrumb + body copy, e.g. "Texas". */
  stateName: string;
  /** USPS 2-letter state abbreviation, e.g. "TX". */
  stateAbbr: string;
  /** Population tier, drives the multiplier. */
  tier: StateCostTier;
  /** City-specific permit, licensing, demand, or seasonal notes. 1–2 sentences. */
  notes: string;
};

/**
 * Top 36 US metros by population and home-services search volume. Selected
 * to balance national coverage with metros that draw heavy "[trade] cost
 * in [city]" search demand.
 */
export const CITIES: CityCostData[] = [
  {
    slug: "new-york-ny",
    name: "New York",
    stateName: "New York",
    stateAbbr: "NY",
    tier: "premium",
    notes:
      "New York City requires NYC Department of Buildings licensing for both electrical and plumbing trades, separate from NY State licensing. Manhattan and Brooklyn rates run at the top of the U.S. range; outer boroughs are slightly lower. Most multi-unit work requires a filed permit and a master plumber/electrician of record.",
  },
  {
    slug: "los-angeles-ca",
    name: "Los Angeles",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "Los Angeles requires CSLB-licensed contractors for jobs over $500. LADBS permits add 1–3 weeks of lead time on most plumbing and electrical work. Seismic retrofitting and Title 24 energy code add real cost above the national baseline.",
  },
  {
    slug: "chicago-il",
    name: "Chicago",
    stateName: "Illinois",
    stateAbbr: "IL",
    tier: "high",
    notes:
      "Chicago requires city-issued contractor licensing in addition to Illinois state plumbing and electrical licensing. Winter freeze-thaw drives a heavy emergency-call season December through March. Bonded plumber rules add a small premium versus suburbs.",
  },
  {
    slug: "houston-tx",
    name: "Houston",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "Houston operates under Texas state licensing (TDLR plumbing, TDLR electrical). The city permits separately; permits typically take 5–10 business days. Hurricane and flood-season emergency demand pushes rates higher June through October.",
  },
  {
    slug: "phoenix-az",
    name: "Phoenix",
    stateName: "Arizona",
    stateAbbr: "AZ",
    tier: "mid",
    notes:
      "Phoenix licenses through the Arizona Registrar of Contractors. Summer-heat months (June–September) push HVAC-adjacent service rates up; expect winter rates to dip 10–15% from peak. Water-softener and pool-equipment service is unusually common here.",
  },
  {
    slug: "philadelphia-pa",
    name: "Philadelphia",
    stateName: "Pennsylvania",
    stateAbbr: "PA",
    tier: "high",
    notes:
      "Philadelphia requires city licensing in addition to PA state plumbing and electrical certs. Older row-home stock means real-world job complexity often exceeds the quoted scope — confirm hourly-after-first-hour rates in writing. L&I permits add 1–2 weeks on most service work.",
  },
  {
    slug: "san-antonio-tx",
    name: "San Antonio",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "San Antonio follows Texas state licensing. Rates trend below Austin and Dallas but slightly above the national average. Permit fees are modest ($35–$120 typical residential). Hard water is universal — water heater and softener replacement is unusually common.",
  },
  {
    slug: "san-diego-ca",
    name: "San Diego",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "San Diego requires CSLB-licensed contractors over $500. Coastal-corrosion-driven copper pipe failures are unusually common; many older neighborhoods are on aging galvanized supply. Title 24 energy code and seismic strapping apply.",
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "high",
    notes:
      "Dallas service-call rates trend above the Texas state average and slightly below Austin. TDLR licensing applies; the city issues permits separately. Slab-foundation prevalence means slab-leak detection is a routine plumbing service in the region.",
  },
  {
    slug: "austin-tx",
    name: "Austin",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "high",
    notes:
      "Austin runs at the top of Texas pricing — tech-industry pay scales filter into the trades. TDLR licensing required; Austin Energy issues electrical permits separately for jobs touching the panel. Solar and EV-charger install demand has pushed electrician rates up faster than national averages.",
  },
  {
    slug: "jacksonville-fl",
    name: "Jacksonville",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Jacksonville follows Florida DBPR contractor licensing. Rates trend slightly below Miami/Tampa. Hurricane permit-and-inspection demand spikes May through November. Older homes near downtown often require updated grounding and panel work to pass inspection.",
  },
  {
    slug: "san-jose-ca",
    name: "San Jose",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "San Jose and the broader South Bay run at the absolute top of U.S. service rates, driven by Silicon Valley labor markets. CSLB licensing required. Permit volume and inspection lead time often double standard timelines.",
  },
  {
    slug: "fort-worth-tx",
    name: "Fort Worth",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "Fort Worth runs slightly below Dallas in service-call pricing. TDLR licensing applies. Suburban sprawl means longer trip distances; some shops charge a mileage surcharge beyond 15 miles.",
  },
  {
    slug: "charlotte-nc",
    name: "Charlotte",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "mid",
    notes:
      "Charlotte follows North Carolina state board of electrical and plumbing licensing. Rates trend slightly above the state average due to metro growth. Permits issued through Mecklenburg County add 3–7 days on most residential work.",
  },
  {
    slug: "indianapolis-in",
    name: "Indianapolis",
    stateName: "Indiana",
    stateAbbr: "IN",
    tier: "low",
    notes:
      "Indianapolis service rates run at the lower end of major-metro pricing. Indiana plumbing licensing is state-issued. Winter heating-system emergency demand drives a real January spike. Older homes commonly have aging galvanized supply lines flagged at inspection.",
  },
  {
    slug: "columbus-oh",
    name: "Columbus",
    stateName: "Ohio",
    stateAbbr: "OH",
    tier: "low",
    notes:
      "Columbus follows Ohio state licensing for electrical and plumbing trades. Rates trend slightly above Cincinnati and Cleveland due to faster metro growth. Permits are typically issued within 5–10 business days.",
  },
  {
    slug: "seattle-wa",
    name: "Seattle",
    stateName: "Washington",
    stateAbbr: "WA",
    tier: "premium",
    notes:
      "Seattle requires state-issued LNI electrical and plumbing certifications. Service rates are among the highest in the country, especially for code-compliance work in older Capitol Hill and Ballard housing stock. Winter water-heater failures during cold snaps create extended wait times January through February.",
  },
  {
    slug: "denver-co",
    name: "Denver",
    stateName: "Colorado",
    stateAbbr: "CO",
    tier: "high",
    notes:
      "Denver runs at the upper end of Colorado pricing. State-issued electrical and plumbing licenses are required. Altitude-related water heater venting code is uncommon outside the region — confirm the installer knows it. Mountain-adjacent metros add a $50–$150 travel surcharge in winter storms.",
  },
  {
    slug: "boston-ma",
    name: "Boston",
    stateName: "Massachusetts",
    stateAbbr: "MA",
    tier: "premium",
    notes:
      "Boston runs at the top of New England pricing. Massachusetts plumbing and electrical licensing is strict; rates reflect a tight licensed-tradesperson supply. Older triple-decker and brownstone stock means real-world job scope often exceeds quoted hours.",
  },
  {
    slug: "nashville-tn",
    name: "Nashville",
    stateName: "Tennessee",
    stateAbbr: "TN",
    tier: "mid",
    notes:
      "Nashville service rates have climbed faster than the Tennessee state average due to metro growth. State board licensing applies. Davidson County permits typically issue within 3–7 business days. Hot-water tank and HVAC replacement dominate spring service demand.",
  },
  {
    slug: "atlanta-ga",
    name: "Atlanta",
    stateName: "Georgia",
    stateAbbr: "GA",
    tier: "mid",
    notes:
      "Atlanta service rates run slightly above the Georgia state average. State-issued electrical and plumbing licensing required. Older intown housing stock (Grant Park, Inman Park) commonly needs updated grounding and main-panel work. Permits add 5–10 business days.",
  },
  {
    slug: "las-vegas-nv",
    name: "Las Vegas",
    stateName: "Nevada",
    stateAbbr: "NV",
    tier: "mid",
    notes:
      "Las Vegas requires Nevada State Contractors Board licensing. Extreme summer heat drives unusually high HVAC and water-heater replacement volume June through September; expect longer lead times in summer. Hard-water-driven appliance failures are universal.",
  },
  {
    slug: "detroit-mi",
    name: "Detroit",
    stateName: "Michigan",
    stateAbbr: "MI",
    tier: "low",
    notes:
      "Detroit service rates run at the lower end of the major-metro range. Michigan LARA issues state plumbing and electrical licenses. Winter freeze-thaw and aging service-line infrastructure create heavy emergency demand December through March. Older housing stock often has galvanized supply needing attention.",
  },
  {
    slug: "portland-or",
    name: "Portland",
    stateName: "Oregon",
    stateAbbr: "OR",
    tier: "high",
    notes:
      "Portland service rates run above the Oregon state average. CCB-licensed contractors required for jobs over $1,000. Older PDX homes commonly have outdated subpanels and aluminum branch wiring flagged at inspection. Winter rain doesn't drive emergency demand the way cold-state metros see.",
  },
  {
    slug: "miami-fl",
    name: "Miami",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "high",
    notes:
      "Miami runs at the top of Florida pricing. Florida DBPR licensing required. Hurricane prep season drives a heavy May–November permit and inspection backlog. Saltwater corrosion shortens copper-pipe service life — slab-leak detection is a routine plumbing service.",
  },
  {
    slug: "tampa-fl",
    name: "Tampa",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Tampa service rates trend slightly below Miami and slightly above Jacksonville. Florida DBPR licensing applies. Hurricane season permit demand spikes May–November. Older bungalow housing stock often needs updated grounding and panel work.",
  },
  {
    slug: "orlando-fl",
    name: "Orlando",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Orlando follows Florida DBPR licensing. Service rates align with Tampa and slightly below Miami. High vacation-rental density creates an emergency-call market with premium pricing on after-hours work. Summer storm season drives surge demand.",
  },
  {
    slug: "raleigh-nc",
    name: "Raleigh",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "mid",
    notes:
      "Raleigh service rates trend slightly above Charlotte and well above smaller NC metros. State board licensing required. Wake County permits issue quickly (3–5 business days typical) for residential service work.",
  },
  {
    slug: "sacramento-ca",
    name: "Sacramento",
    stateName: "California",
    stateAbbr: "CA",
    tier: "high",
    notes:
      "Sacramento runs below Bay Area pricing but above most non-California metros. CSLB licensing applies. Title 24 energy code adds compliance steps. Summer heat drives heavy AC and water-heater service demand June–August.",
  },
  {
    slug: "minneapolis-mn",
    name: "Minneapolis",
    stateName: "Minnesota",
    stateAbbr: "MN",
    tier: "high",
    notes:
      "Minneapolis runs at the upper end of Midwest pricing. Minnesota Department of Labor and Industry licenses both trades. Winter frozen-pipe season creates extreme emergency demand January through February — rates can run 2–3× standard during cold snaps.",
  },
  {
    slug: "kansas-city-mo",
    name: "Kansas City",
    stateName: "Missouri",
    stateAbbr: "MO",
    tier: "mid",
    notes:
      "Kansas City service rates trend at or slightly above the Missouri state average. Missouri state licensing for plumbing; electrical is city-issued. Spring tornado-season storm damage drives emergency permit volume April–June.",
  },
  {
    slug: "san-francisco-ca",
    name: "San Francisco",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "San Francisco runs at the absolute top of U.S. service rates. CSLB licensing required; SF DBI permits often add multi-week lead times. Older Victorian housing stock has unusually complex plumbing reroutes; quoted hours commonly run 30–50% over scope.",
  },
  {
    slug: "tucson-az",
    name: "Tucson",
    stateName: "Arizona",
    stateAbbr: "AZ",
    tier: "mid",
    notes:
      "Tucson service rates trend slightly below Phoenix. Arizona ROC licensing applies. Hard water and high mineral content shorten water-heater life noticeably — anode-rod replacement at 3-year intervals is the norm. Summer-heat demand mirrors Phoenix.",
  },
  {
    slug: "milwaukee-wi",
    name: "Milwaukee",
    stateName: "Wisconsin",
    stateAbbr: "WI",
    tier: "mid",
    notes:
      "Milwaukee follows Wisconsin DSPS licensing. Service rates align with Chicago suburbs and trend below Minneapolis. Winter frozen-pipe season drives extreme January–February emergency demand. Older brick homes commonly need updated electrical service entry work.",
  },
  {
    slug: "baltimore-md",
    name: "Baltimore",
    stateName: "Maryland",
    stateAbbr: "MD",
    tier: "high",
    notes:
      "Baltimore service rates run high for the region due to old row-home stock and complex retrofits. Maryland state licensing applies. City permits typically take 7–14 business days. Crawl-space and basement moisture is a routine concern flagged at inspection.",
  },
  {
    slug: "salt-lake-city-ut",
    name: "Salt Lake City",
    stateName: "Utah",
    stateAbbr: "UT",
    tier: "mid",
    notes:
      "Salt Lake City service rates trend slightly above the Utah state average. State DOPL licensing required. Cold snaps drive winter frozen-pipe demand. Hard-water-driven appliance failures are routine; whole-home water softener install demand is high.",
  },
];

/** All (slug, city) combinations for generateStaticParams. */
export function getAllCityCostParams(): Array<{ slug: string; city: string }> {
  const out: Array<{ slug: string; city: string }> = [];
  for (const guide of STATE_COST_GUIDES) {
    for (const city of CITIES) {
      out.push({ slug: guide.slug, city: city.slug });
    }
  }
  return out;
}

export function getCityBySlug(slug: string): CityCostData | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** Re-export the adjustRange helper so the route file only needs one import. */
export { adjustRange, TIER_MULTIPLIERS };
