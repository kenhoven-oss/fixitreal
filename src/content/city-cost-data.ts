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

/**
 * ISO date the metro pages were last materially reviewed.
 *
 * Lives beside the data it describes rather than inside the route file, so
 * page metadata, the visible "Updated" line and the Article JSON-LD cannot
 * drift apart the way they previously did (metadata said June, JSON-LD
 * said May).
 */
export const METRO_COST_UPDATED = "2026-09-13";

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
      "Manhattan and Brooklyn rates run at the top of the U.S. range; outer boroughs are slightly lower.",
  },
  {
    slug: "los-angeles-ca",
    name: "Los Angeles",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "LADBS permits add 1–3 weeks of lead time on most plumbing and electrical work. Seismic retrofitting and Title 24 energy code add real cost above the national baseline.",
  },
  {
    slug: "chicago-il",
    name: "Chicago",
    stateName: "Illinois",
    stateAbbr: "IL",
    tier: "high",
    notes:
      "Winter freeze-thaw drives a heavy emergency-call season December through March. Bonded plumber rules add a small premium versus suburbs.",
  },
  {
    slug: "houston-tx",
    name: "Houston",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "The city permits separately; permits typically take 5–10 business days. Hurricane and flood-season emergency demand pushes rates higher June through October.",
  },
  {
    slug: "phoenix-az",
    name: "Phoenix",
    stateName: "Arizona",
    stateAbbr: "AZ",
    tier: "mid",
    notes:
      "Summer-heat months (June–September) push HVAC-adjacent service rates up; expect winter rates to dip 10–15% from peak. Water-softener and pool-equipment service is unusually common here.",
  },
  {
    slug: "philadelphia-pa",
    name: "Philadelphia",
    stateName: "Pennsylvania",
    stateAbbr: "PA",
    tier: "high",
    notes:
      "Older row-home stock means real-world job complexity often exceeds the quoted scope — confirm hourly-after-first-hour rates in writing. L&I permits add 1–2 weeks on most service work.",
  },
  {
    slug: "san-antonio-tx",
    name: "San Antonio",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "Rates trend below Austin and Dallas but slightly above the national average. Permit fees are modest ($35–$120 typical residential). Hard water is universal — water heater and softener replacement is unusually common.",
  },
  {
    slug: "san-diego-ca",
    name: "San Diego",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "Coastal-corrosion-driven copper pipe failures are unusually common; many older neighborhoods are on aging galvanized supply. Title 24 energy code and seismic strapping apply.",
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "high",
    notes:
      "Dallas service-call rates trend above the Texas state average and slightly below Austin. Slab-foundation prevalence means slab-leak detection is a routine plumbing service in the region.",
  },
  {
    slug: "austin-tx",
    name: "Austin",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "high",
    notes:
      "Austin runs at the top of Texas pricing — tech-industry pay scales filter into the trades. Solar and EV-charger install demand has pushed electrician rates up faster than national averages.",
  },
  {
    slug: "jacksonville-fl",
    name: "Jacksonville",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Rates trend slightly below Miami/Tampa. Hurricane permit-and-inspection demand spikes May through November. Older homes near downtown often require updated grounding and panel work to pass inspection.",
  },
  {
    slug: "san-jose-ca",
    name: "San Jose",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "San Jose and the broader South Bay run at the absolute top of U.S. service rates, driven by Silicon Valley labor markets. Permit volume and inspection lead time often double standard timelines.",
  },
  {
    slug: "fort-worth-tx",
    name: "Fort Worth",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "Fort Worth runs slightly below Dallas in service-call pricing. Suburban sprawl means longer trip distances; some shops charge a mileage surcharge beyond 15 miles.",
  },
  {
    slug: "charlotte-nc",
    name: "Charlotte",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "mid",
    notes:
      "Rates trend slightly above the state average due to metro growth. Permits issued through Mecklenburg County add 3–7 days on most residential work.",
  },
  {
    slug: "indianapolis-in",
    name: "Indianapolis",
    stateName: "Indiana",
    stateAbbr: "IN",
    tier: "low",
    notes:
      "Indianapolis service rates run at the lower end of major-metro pricing. Winter heating-system emergency demand drives a real January spike. Older homes commonly have aging galvanized supply lines flagged at inspection.",
  },
  {
    slug: "columbus-oh",
    name: "Columbus",
    stateName: "Ohio",
    stateAbbr: "OH",
    tier: "low",
    notes:
      "Rates trend slightly above Cincinnati and Cleveland due to faster metro growth. Permits are typically issued within 5–10 business days.",
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
      "Denver runs at the upper end of Colorado pricing. Altitude-related water heater venting code is uncommon outside the region — confirm the installer knows it. Mountain-adjacent metros add a $50–$150 travel surcharge in winter storms.",
  },
  {
    slug: "boston-ma",
    name: "Boston",
    stateName: "Massachusetts",
    stateAbbr: "MA",
    tier: "premium",
    notes:
      "Boston runs at the top of New England pricing. Older triple-decker and brownstone stock means real-world job scope often exceeds quoted hours.",
  },
  {
    slug: "nashville-tn",
    name: "Nashville",
    stateName: "Tennessee",
    stateAbbr: "TN",
    tier: "mid",
    notes:
      "Nashville service rates have climbed faster than the Tennessee state average due to metro growth. Davidson County permits typically issue within 3–7 business days. Hot-water tank and HVAC replacement dominate spring service demand.",
  },
  {
    slug: "atlanta-ga",
    name: "Atlanta",
    stateName: "Georgia",
    stateAbbr: "GA",
    tier: "mid",
    notes:
      "Atlanta service rates run slightly above the Georgia state average. Older intown housing stock (Grant Park, Inman Park) commonly needs updated grounding and main-panel work. Permits add 5–10 business days.",
  },
  {
    slug: "las-vegas-nv",
    name: "Las Vegas",
    stateName: "Nevada",
    stateAbbr: "NV",
    tier: "mid",
    notes:
      "Extreme summer heat drives unusually high HVAC and water-heater replacement volume June through September; expect longer lead times in summer. Hard-water-driven appliance failures are universal.",
  },
  {
    slug: "detroit-mi",
    name: "Detroit",
    stateName: "Michigan",
    stateAbbr: "MI",
    tier: "low",
    notes:
      "Detroit service rates run at the lower end of the major-metro range. Winter freeze-thaw and aging service-line infrastructure create heavy emergency demand December through March. Older housing stock often has galvanized supply needing attention.",
  },
  {
    slug: "portland-or",
    name: "Portland",
    stateName: "Oregon",
    stateAbbr: "OR",
    tier: "high",
    notes:
      "Portland service rates run above the Oregon state average. Older PDX homes commonly have outdated subpanels and aluminum branch wiring flagged at inspection. Winter rain doesn't drive emergency demand the way cold-state metros see.",
  },
  {
    slug: "miami-fl",
    name: "Miami",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "high",
    notes:
      "Miami runs at the top of Florida pricing. Hurricane prep season drives a heavy May–November permit and inspection backlog. Saltwater corrosion shortens copper-pipe service life — slab-leak detection is a routine plumbing service.",
  },
  {
    slug: "tampa-fl",
    name: "Tampa",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Tampa service rates trend slightly below Miami and slightly above Jacksonville. Hurricane season permit demand spikes May–November. Older bungalow housing stock often needs updated grounding and panel work.",
  },
  {
    slug: "orlando-fl",
    name: "Orlando",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Service rates align with Tampa and slightly below Miami. High vacation-rental density creates an emergency-call market with premium pricing on after-hours work. Summer storm season drives surge demand.",
  },
  {
    slug: "raleigh-nc",
    name: "Raleigh",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "mid",
    notes:
      "Raleigh service rates trend slightly above Charlotte and well above smaller NC metros. Wake County permits issue quickly (3–5 business days typical) for residential service work.",
  },
  {
    slug: "sacramento-ca",
    name: "Sacramento",
    stateName: "California",
    stateAbbr: "CA",
    tier: "high",
    notes:
      "Sacramento runs below Bay Area pricing but above most non-California metros. Title 24 energy code adds compliance steps. Summer heat drives heavy AC and water-heater service demand June–August.",
  },
  {
    slug: "minneapolis-mn",
    name: "Minneapolis",
    stateName: "Minnesota",
    stateAbbr: "MN",
    tier: "high",
    notes:
      "Minneapolis runs at the upper end of Midwest pricing. Winter frozen-pipe season creates extreme emergency demand January through February — rates can run 2–3× standard during cold snaps.",
  },
  {
    slug: "kansas-city-mo",
    name: "Kansas City",
    stateName: "Missouri",
    stateAbbr: "MO",
    tier: "mid",
    notes:
      "Kansas City service rates trend at or slightly above the Missouri state average. Spring tornado-season storm damage drives emergency permit volume April–June.",
  },
  {
    slug: "san-francisco-ca",
    name: "San Francisco",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "San Francisco runs at the absolute top of U.S. service rates. Older Victorian housing stock has unusually complex plumbing reroutes; quoted hours commonly run 30–50% over scope.",
  },
  {
    slug: "tucson-az",
    name: "Tucson",
    stateName: "Arizona",
    stateAbbr: "AZ",
    tier: "mid",
    notes:
      "Tucson service rates trend slightly below Phoenix. Hard water and high mineral content shorten water-heater life noticeably — anode-rod replacement at 3-year intervals is the norm. Summer-heat demand mirrors Phoenix.",
  },
  {
    slug: "milwaukee-wi",
    name: "Milwaukee",
    stateName: "Wisconsin",
    stateAbbr: "WI",
    tier: "mid",
    notes:
      "Service rates align with Chicago suburbs and trend below Minneapolis. Winter frozen-pipe season drives extreme January–February emergency demand. Older brick homes commonly need updated electrical service entry work.",
  },
  {
    slug: "baltimore-md",
    name: "Baltimore",
    stateName: "Maryland",
    stateAbbr: "MD",
    tier: "high",
    notes:
      "Baltimore service rates run high for the region due to old row-home stock and complex retrofits. City permits typically take 7–14 business days. Crawl-space and basement moisture is a routine concern flagged at inspection.",
  },
  {
    slug: "salt-lake-city-ut",
    name: "Salt Lake City",
    stateName: "Utah",
    stateAbbr: "UT",
    tier: "mid",
    notes:
      "Salt Lake City service rates trend slightly above the Utah state average. Cold snaps drive winter frozen-pipe demand. Hard-water-driven appliance failures are routine; whole-home water softener install demand is high.",
  },
  {
    slug: "el-paso-tx",
    name: "El Paso",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "low",
    notes:
      "El Paso service rates run at the lower end of Texas pricing. Border-city plumbing supply is well-stocked; parts availability is rarely an issue. Hot-summer water heater demand peaks June–August.",
  },
  {
    slug: "oklahoma-city-ok",
    name: "Oklahoma City",
    stateName: "Oklahoma",
    stateAbbr: "OK",
    tier: "low",
    notes:
      "Oklahoma City service rates run below the national average. Spring tornado season drives a real April–June emergency demand spike. Older homes near downtown often need updated panels and service entrance work.",
  },
  {
    slug: "albuquerque-nm",
    name: "Albuquerque",
    stateName: "New Mexico",
    stateAbbr: "NM",
    tier: "mid",
    notes:
      "Service rates trend slightly above Texas border metros. Altitude-related water heater venting code applies. Hard water shortens fixture and tank life — softener install is common.",
  },
  {
    slug: "memphis-tn",
    name: "Memphis",
    stateName: "Tennessee",
    stateAbbr: "TN",
    tier: "low",
    notes:
      "Memphis service rates run at the lower end of Tennessee metro pricing. Mississippi-River-area humidity drives heavy moisture and HVAC-adjacent service demand. Older shotgun-style housing stock often has aging galvanized supply lines.",
  },
  {
    slug: "louisville-ky",
    name: "Louisville",
    stateName: "Kentucky",
    stateAbbr: "KY",
    tier: "low",
    notes:
      "Service rates run at the lower end of metro ranges. Winter freeze-thaw drives emergency-call season December–February. Older homes near downtown often need updated panels.",
  },
  {
    slug: "cleveland-oh",
    name: "Cleveland",
    stateName: "Ohio",
    stateAbbr: "OH",
    tier: "low",
    notes:
      "Cleveland service rates run at the lower end of Midwest pricing. Lake-effect winter weather drives heavy emergency-call demand January–February. Older housing stock commonly needs aluminum-branch-wiring remediation.",
  },
  {
    slug: "cincinnati-oh",
    name: "Cincinnati",
    stateName: "Ohio",
    stateAbbr: "OH",
    tier: "low",
    notes:
      "Service rates trend slightly above Cleveland and below Columbus. Hilly topography makes some service-line repairs unusually complex. Older masonry homes commonly require updated electrical service entry work.",
  },
  {
    slug: "pittsburgh-pa",
    name: "Pittsburgh",
    stateName: "Pennsylvania",
    stateAbbr: "PA",
    tier: "mid",
    notes:
      "Pittsburgh service rates trend above Cleveland and below Philadelphia. Allegheny County permits add 5–10 business days. Older row-home and triplex stock means real-world job scope often exceeds quoted hours.",
  },
  {
    slug: "st-louis-mo",
    name: "St. Louis",
    stateName: "Missouri",
    stateAbbr: "MO",
    tier: "mid",
    notes:
      "St. Louis service rates run at the Missouri state average. Older brick housing stock often needs updated grounding and main-panel work flagged at inspection.",
  },
  {
    slug: "buffalo-ny",
    name: "Buffalo",
    stateName: "New York",
    stateAbbr: "NY",
    tier: "mid",
    notes:
      "Buffalo service rates run well below NYC and Long Island. Lake-effect winter drives extreme frozen-pipe emergency demand January–February. Older housing stock commonly needs panel and service-line updates.",
  },
  {
    slug: "providence-ri",
    name: "Providence",
    stateName: "Rhode Island",
    stateAbbr: "RI",
    tier: "high",
    notes:
      "Providence service rates run at the upper end of New England pricing. Older triple-decker stock complicates many job scopes. Winter coastal storms drive winter emergency demand.",
  },
  {
    slug: "richmond-va",
    name: "Richmond",
    stateName: "Virginia",
    stateAbbr: "VA",
    tier: "mid",
    notes:
      "Richmond service rates run at the Virginia state average. Older Fan-District housing stock often needs updated grounding and panel work. Spring storm season drives April–June permit demand.",
  },
  {
    slug: "virginia-beach-va",
    name: "Virginia Beach",
    stateName: "Virginia",
    stateAbbr: "VA",
    tier: "mid",
    notes:
      "Virginia Beach service rates trend slightly above Richmond. Coastal humidity shortens copper-pipe life — slab-leak detection is a common plumbing service. Hurricane-season permit demand spikes August–October.",
  },
  {
    slug: "hartford-ct",
    name: "Hartford",
    stateName: "Connecticut",
    stateAbbr: "CT",
    tier: "high",
    notes:
      "Hartford service rates run at the upper end of New England pricing. Older Victorian and colonial housing stock means real-world job scope often exceeds quoted hours.",
  },
  {
    slug: "new-orleans-la",
    name: "New Orleans",
    stateName: "Louisiana",
    stateAbbr: "LA",
    tier: "mid",
    notes:
      "New Orleans service rates trend slightly above the Louisiana state average. Below-sea-level housing stock has unusually complex plumbing reroutes. Hurricane-season permit demand spikes August–October.",
  },
  {
    slug: "birmingham-al",
    name: "Birmingham",
    stateName: "Alabama",
    stateAbbr: "AL",
    tier: "low",
    notes:
      "Birmingham service rates run at the Alabama state average. Older Southside housing stock commonly needs grounding and panel updates. Spring storm-season permit demand spikes April–June.",
  },
  {
    slug: "tulsa-ok",
    name: "Tulsa",
    stateName: "Oklahoma",
    stateAbbr: "OK",
    tier: "low",
    notes:
      "Tulsa service rates trend slightly below Oklahoma City. Spring tornado season drives April–June emergency-permit demand. Older housing stock commonly needs panel updates.",
  },
  {
    slug: "omaha-ne",
    name: "Omaha",
    stateName: "Nebraska",
    stateAbbr: "NE",
    tier: "low",
    notes:
      "Omaha service rates run at the lower end of Midwest pricing. Winter frozen-pipe demand spikes January–February. Spring storm-permit demand pushes April–June.",
  },
  {
    slug: "des-moines-ia",
    name: "Des Moines",
    stateName: "Iowa",
    stateAbbr: "IA",
    tier: "low",
    notes:
      "Des Moines service rates run below the national average. Winter frozen-pipe and frozen-meter demand peaks January–February. Spring storm-permit demand follows.",
  },
  {
    slug: "boise-id",
    name: "Boise",
    stateName: "Idaho",
    stateAbbr: "ID",
    tier: "mid",
    notes:
      "Boise service rates have climbed faster than the Idaho state average due to recent metro growth. Hard water drives unusually high water-heater and softener service demand.",
  },
  {
    slug: "spokane-wa",
    name: "Spokane",
    stateName: "Washington",
    stateAbbr: "WA",
    tier: "mid",
    notes:
      "Spokane service rates run well below Seattle. Winter freeze-thaw drives January–February emergency demand. Older homes commonly need panel and service-entry updates.",
  },
  {
    slug: "honolulu-hi",
    name: "Honolulu",
    stateName: "Hawaii",
    stateAbbr: "HI",
    tier: "premium",
    notes:
      "Honolulu service rates run at the top of U.S. pricing. Saltwater corrosion shortens copper pipe and electrical service-entry life. Materials and parts shipping costs add 10–20% to all repairs.",
  },
  {
    slug: "lexington-ky",
    name: "Lexington",
    stateName: "Kentucky",
    stateAbbr: "KY",
    tier: "low",
    notes:
      "Lexington service rates trend slightly below Louisville. Older homes commonly need updated grounding and panel work. Winter freeze-thaw drives a real January–February emergency-call season.",
  },
  {
    slug: "madison-wi",
    name: "Madison",
    stateName: "Wisconsin",
    stateAbbr: "WI",
    tier: "mid",
    notes:
      "Madison service rates run at the Wisconsin state average. Winter frozen-pipe season drives extreme January–February emergency demand. University-area rental stock has heavy summer-turnover service-call volume.",
  },
  {
    slug: "grand-rapids-mi",
    name: "Grand Rapids",
    stateName: "Michigan",
    stateAbbr: "MI",
    tier: "low",
    notes:
      "Grand Rapids service rates run below Detroit. Winter freeze-thaw drives heavy December–March emergency demand. Older housing stock commonly needs updated grounding and panel work.",
  },
  {
    slug: "anaheim-ca",
    name: "Anaheim",
    stateName: "California",
    stateAbbr: "CA",
    tier: "premium",
    notes:
      "Anaheim service rates run at LA-area levels. Title 24 energy code adds compliance steps. Older Orange County housing stock commonly has aging galvanized supply.",
  },
  {
    slug: "bakersfield-ca",
    name: "Bakersfield",
    stateName: "California",
    stateAbbr: "CA",
    tier: "high",
    notes:
      "Bakersfield service rates run below most California metros but above non-CA national averages. Extreme summer heat drives heavy June–September HVAC and water-heater service demand. Hard-water service is routine.",
  },
  {
    slug: "fresno-ca",
    name: "Fresno",
    stateName: "California",
    stateAbbr: "CA",
    tier: "high",
    notes:
      "Fresno service rates run below the Bay Area and LA but above most non-CA metros. Summer heat drives heavy HVAC demand. Older Central Valley housing stock commonly needs panel updates.",
  },
  {
    slug: "stockton-ca",
    name: "Stockton",
    stateName: "California",
    stateAbbr: "CA",
    tier: "high",
    notes:
      "Stockton service rates run below the Bay Area metros but above most non-CA cities. Title 24 energy code adds compliance steps to most major work.",
  },
  {
    slug: "riverside-ca",
    name: "Riverside",
    stateName: "California",
    stateAbbr: "CA",
    tier: "high",
    notes:
      "Riverside service rates run below LA proper but above most non-California metros. Inland-Empire summer heat drives heavy HVAC and water-heater demand June–September.",
  },
  {
    slug: "colorado-springs-co",
    name: "Colorado Springs",
    stateName: "Colorado",
    stateAbbr: "CO",
    tier: "mid",
    notes:
      "Colorado Springs service rates trend slightly below Denver. Altitude-related water-heater venting code applies. Winter cold snaps drive frozen-pipe emergency demand.",
  },
  {
    slug: "henderson-nv",
    name: "Henderson",
    stateName: "Nevada",
    stateAbbr: "NV",
    tier: "mid",
    notes:
      "Henderson service rates run at Las Vegas-area levels. Extreme summer heat drives unusually high HVAC and water-heater demand. Hard water shortens fixture life noticeably.",
  },
  {
    slug: "reno-nv",
    name: "Reno",
    stateName: "Nevada",
    stateAbbr: "NV",
    tier: "high",
    notes:
      "Reno service rates run above Las Vegas due to faster recent metro growth. Winter cold snaps drive frozen-pipe emergency demand. Hard-water service is routine.",
  },
  {
    slug: "norfolk-va",
    name: "Norfolk",
    stateName: "Virginia",
    stateAbbr: "VA",
    tier: "mid",
    notes:
      "Norfolk service rates align with Virginia Beach. Coastal humidity and saltwater shorten copper and electrical service-entry life. Hurricane-season permit demand peaks August–October.",
  },
  {
    slug: "arlington-va",
    name: "Arlington",
    stateName: "Virginia",
    stateAbbr: "VA",
    tier: "high",
    notes:
      "Arlington service rates run at the upper end of Virginia pricing — DC-metro labor markets filter in. Older mid-century housing stock often needs panel and service-entry updates.",
  },
  {
    slug: "greensboro-nc",
    name: "Greensboro",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "low",
    notes:
      "Greensboro service rates run below Raleigh and Charlotte. Older Piedmont housing stock often needs updated grounding and panel work.",
  },
  {
    slug: "durham-nc",
    name: "Durham",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "mid",
    notes:
      "Durham service rates trend slightly below Raleigh and above Greensboro. Research Triangle demand has pushed metro rates above the state average.",
  },
  {
    slug: "knoxville-tn",
    name: "Knoxville",
    stateName: "Tennessee",
    stateAbbr: "TN",
    tier: "low",
    notes:
      "Knoxville service rates run below Nashville and at the lower end of TN metro pricing. Mountain-adjacent service areas add travel surcharges in winter.",
  },
  {
    slug: "chattanooga-tn",
    name: "Chattanooga",
    stateName: "Tennessee",
    stateAbbr: "TN",
    tier: "low",
    notes:
      "Chattanooga service rates run below Nashville. Hilly topography makes some service-line repairs unusually complex. Older housing stock often needs updated panels.",
  },
  {
    slug: "mobile-al",
    name: "Mobile",
    stateName: "Alabama",
    stateAbbr: "AL",
    tier: "low",
    notes:
      "Mobile service rates run at the Alabama state average. Gulf-Coast humidity and hurricane-season demand drive heavy May–October emergency calls.",
  },
  {
    slug: "huntsville-al",
    name: "Huntsville",
    stateName: "Alabama",
    stateAbbr: "AL",
    tier: "low",
    notes:
      "Huntsville service rates trend slightly above Birmingham due to NASA-area tech-industry pay scales. Newer housing stock means fewer aged-infrastructure issues than older AL metros.",
  },
  {
    slug: "baton-rouge-la",
    name: "Baton Rouge",
    stateName: "Louisiana",
    stateAbbr: "LA",
    tier: "low",
    notes:
      "Baton Rouge service rates trend slightly below New Orleans. Subtropical humidity shortens many materials' service life. Hurricane-season permit demand spikes August–October.",
  },
  {
    slug: "lubbock-tx",
    name: "Lubbock",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "low",
    notes:
      "Lubbock service rates run well below the major Texas metros. Hard water drives unusually high water-heater anode-replacement demand. Spring storm-permit demand peaks April–June.",
  },
  {
    slug: "plano-tx",
    name: "Plano",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "high",
    notes:
      "Plano service rates run at the upper end of Texas pricing — DFW-suburb tech-industry pay scales filter in. Newer housing stock means service issues lean toward HVAC and water heaters rather than electrical.",
  },
  {
    slug: "arlington-tx",
    name: "Arlington",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "mid",
    notes:
      "Arlington service rates trend between Dallas and Fort Worth. DFW-metro permit lead times average 5–10 business days for residential service.",
  },
  {
    slug: "corpus-christi-tx",
    name: "Corpus Christi",
    stateName: "Texas",
    stateAbbr: "TX",
    tier: "low",
    notes:
      "Corpus Christi service rates run at the lower end of Texas metro pricing. Gulf-Coast saltwater shortens copper and service-entry life. Hurricane-season demand peaks August–October.",
  },
  {
    slug: "toledo-oh",
    name: "Toledo",
    stateName: "Ohio",
    stateAbbr: "OH",
    tier: "low",
    notes:
      "Toledo service rates run at the lower end of Ohio metro pricing. Lake-effect winter drives heavy January–February emergency demand. Older housing stock commonly needs panel updates.",
  },
  {
    slug: "newark-nj",
    name: "Newark",
    stateName: "New Jersey",
    stateAbbr: "NJ",
    tier: "high",
    notes:
      "Newark service rates run at the upper end of NJ pricing. NYC-metro labor markets pull rates up. Older brick housing stock often has complex retrofit requirements.",
  },
  {
    slug: "jersey-city-nj",
    name: "Jersey City",
    stateName: "New Jersey",
    stateAbbr: "NJ",
    tier: "premium",
    notes:
      "Jersey City service rates run at NYC-adjacent levels. High-rise and condo service work follows NYC-metro pricing patterns. Older brownstone stock means complex retrofit projects are common.",
  },
  {
    slug: "st-paul-mn",
    name: "St. Paul",
    stateName: "Minnesota",
    stateAbbr: "MN",
    tier: "high",
    notes:
      "St. Paul service rates align with Minneapolis. Winter frozen-pipe season drives extreme January–February emergency demand — rates can run 2–3× standard during cold snaps.",
  },
  {
    slug: "lincoln-ne",
    name: "Lincoln",
    stateName: "Nebraska",
    stateAbbr: "NE",
    tier: "low",
    notes:
      "Lincoln service rates trend slightly below Omaha. Winter freeze and spring storm seasons drive most emergency demand. Older university-area housing stock often needs panel updates.",
  },
  {
    slug: "fort-wayne-in",
    name: "Fort Wayne",
    stateName: "Indiana",
    stateAbbr: "IN",
    tier: "low",
    notes:
      "Fort Wayne service rates run below Indianapolis. Winter frozen-pipe demand peaks January–February. Older housing stock commonly needs grounding and panel updates.",
  },
  {
    slug: "rochester-ny",
    name: "Rochester",
    stateName: "New York",
    stateAbbr: "NY",
    tier: "mid",
    notes:
      "Rochester service rates run below NYC and Long Island. Lake-effect winter drives extreme frozen-pipe demand January–February. Older industrial-era housing stock often needs panel and service-entry updates.",
  },
  {
    slug: "syracuse-ny",
    name: "Syracuse",
    stateName: "New York",
    stateAbbr: "NY",
    tier: "mid",
    notes:
      "Syracuse service rates align with Rochester. Lake-effect winter drives extreme cold-snap emergency demand. Snow-load roof damage drives a real spring repair season.",
  },
  {
    slug: "anchorage-ak",
    name: "Anchorage",
    stateName: "Alaska",
    stateAbbr: "AK",
    tier: "premium",
    notes:
      "Anchorage service rates run at the top of U.S. pricing due to logistics and limited contractor supply. Extreme cold drives heavy October–April frozen-pipe emergency demand. Parts shipping costs add 15–25% to material lines.",
  },
  {
    slug: "wichita-ks",
    name: "Wichita",
    stateName: "Kansas",
    stateAbbr: "KS",
    tier: "low",
    notes:
      "Wichita service rates run well below the national average. Spring tornado season drives April–June emergency-permit demand. Older housing stock commonly needs panel updates.",
  },
  {
    slug: "little-rock-ar",
    name: "Little Rock",
    stateName: "Arkansas",
    stateAbbr: "AR",
    tier: "low",
    notes:
      "Little Rock service rates run below the national average. Spring storm-permit demand spikes April–June. Older central-Arkansas housing stock commonly needs panel updates.",
  },
  {
    slug: "jackson-ms",
    name: "Jackson",
    stateName: "Mississippi",
    stateAbbr: "MS",
    tier: "low",
    notes:
      "Jackson service rates run at the lower end of U.S. pricing. Subtropical humidity shortens material life. Spring storm-permit demand spikes April–June.",
  },
  {
    slug: "shreveport-la",
    name: "Shreveport",
    stateName: "Louisiana",
    stateAbbr: "LA",
    tier: "low",
    notes:
      "Shreveport service rates run below New Orleans and Baton Rouge. Older housing stock often needs panel updates. Spring storm-permit demand spikes April–June.",
  },
  {
    slug: "vancouver-wa",
    name: "Vancouver",
    stateName: "Washington",
    stateAbbr: "WA",
    tier: "high",
    notes:
      "Vancouver, WA service rates align with Portland, OR across the Columbia River. Newer housing stock leans toward HVAC and water-heater service rather than electrical updates.",
  },
  {
    slug: "scottsdale-az",
    name: "Scottsdale",
    stateName: "Arizona",
    stateAbbr: "AZ",
    tier: "high",
    notes:
      "Scottsdale service rates run at the upper end of Arizona pricing — affluent housing stock and demand for premium service support higher rates. Summer-heat demand drives heavy HVAC and water-heater service June–September.",
  },
  {
    slug: "gilbert-az",
    name: "Gilbert",
    stateName: "Arizona",
    stateAbbr: "AZ",
    tier: "mid",
    notes:
      "Gilbert service rates align with Phoenix-area pricing. Newer housing stock leans toward HVAC and water-heater service. Hard-water service is routine.",
  },
  {
    slug: "cape-coral-fl",
    name: "Cape Coral",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "Cape Coral service rates align with Tampa-area pricing. Saltwater coastal exposure shortens copper-pipe life. Hurricane-season permit demand spikes May–November.",
  },
  {
    slug: "fort-lauderdale-fl",
    name: "Fort Lauderdale",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "high",
    notes:
      "Fort Lauderdale service rates run at South Florida levels — slightly below Miami. Coastal corrosion and hurricane-season demand drive heavy material-replacement service.",
  },
  {
    slug: "st-petersburg-fl",
    name: "St. Petersburg",
    stateName: "Florida",
    stateAbbr: "FL",
    tier: "mid",
    notes:
      "St. Petersburg service rates align with Tampa pricing. Coastal humidity shortens copper-pipe service life. Hurricane-season permit demand spikes May–November.",
  },
  {
    slug: "winston-salem-nc",
    name: "Winston-Salem",
    stateName: "North Carolina",
    stateAbbr: "NC",
    tier: "low",
    notes:
      "Winston-Salem service rates align with Greensboro. Older Piedmont housing stock commonly needs updated grounding and panel work.",
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
