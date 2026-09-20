/**
 * Jurisdiction-aware trade licensing data for the programmatic state pages.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The state cost pages used to carry one free-text `notes` string per state
 * that mixed pricing colour with licensing claims ("Ohio licenses plumbers
 * and electricians through the state Construction Industry Examining
 * Board"). Several of those claims were wrong or half-right: Ohio's OCILB
 * license covers COMMERCIAL work only — residential trade licensing there
 * is municipal; Missouri has no statewide plumbing license at all and its
 * statewide electrical license is optional; Illinois licenses plumbers at
 * the state level but electricians only locally; Tennessee's statewide
 * "limited" licenses only apply under a dollar threshold and where the
 * local government doesn't run its own program.
 *
 * Every entry below states, per trade:
 *   level      who licenses this trade for RESIDENTIAL work
 *   body       the licensing body's name
 *   sourceUrl  an official page a reader can verify against
 *   scope      what the rule covers
 *   verified   the date the entry was last checked (YYYY-MM-DD)
 *   note       the honest caveat, in plain English
 *
 * The page copy is generated from these fields by licensingSentence() so a
 * template can never again say "every state licenses…" — it can only say
 * what the entry says. When a state's rule genuinely varies locally, the
 * entry says so instead of inventing a statewide rule.
 *
 * Entries marked `verified` with today's date were checked against the
 * cited source on that date. Licensing law changes; re-verify annually.
 */

export type LicensingLevel =
  | "state" // one statewide license, required for residential work
  | "state-commercial-only" // state license exists but residential work is regulated locally
  | "state-optional" // a statewide license exists but local licenses are the norm
  | "state-threshold" // statewide license applies only under a dollar threshold / where no local program exists
  | "local" // licensed by city or county; no statewide license
  | "mixed"; // some cities/counties license, others don't

export type TradeLicensing = {
  level: LicensingLevel;
  body: string;
  sourceUrl: string;
  /** e.g. "residential and commercial", "commercial only", "under $25,000" */
  scope: string;
  verified: string;
  note?: string;
};

export type StateLicensing = {
  electrician: TradeLicensing;
  plumber: TradeLicensing;
  /** Optional statewide consumer-protection registration that applies to home-improvement contractors generally. */
  homeImprovement?: { body: string; sourceUrl: string; note: string; verified: string };
};

const V = "2026-09-20";

export const STATE_LICENSING: Record<string, StateLicensing> = {
  alabama: {
    electrician: { level: "state", body: "Alabama Board of Electrical Contractors", sourceUrl: "https://aecb.alabama.gov/", scope: "residential and commercial electrical contracting", verified: V },
    plumber: { level: "state", body: "Alabama Plumbers and Gas Fitters Examining Board", sourceUrl: "https://pgfb.alabama.gov/", scope: "residential and commercial plumbing and gas fitting", verified: V },
  },
  arizona: {
    electrician: { level: "state", body: "Arizona Registrar of Contractors (ROC)", sourceUrl: "https://roc.az.gov/", scope: "residential and commercial contracting; work under $1,000 with no permit is exempt", verified: V },
    plumber: { level: "state", body: "Arizona Registrar of Contractors (ROC)", sourceUrl: "https://roc.az.gov/", scope: "residential and commercial contracting; work under $1,000 with no permit is exempt", verified: V },
  },
  california: {
    electrician: { level: "state", body: "Contractors State License Board (CSLB), C-10", sourceUrl: "https://www.cslb.ca.gov/", scope: "any job of $500 or more, labor and materials", verified: V },
    plumber: { level: "state", body: "Contractors State License Board (CSLB), C-36", sourceUrl: "https://www.cslb.ca.gov/", scope: "any job of $500 or more, labor and materials", verified: V },
    homeImprovement: { body: "CSLB / Business & Professions Code §7159", sourceUrl: "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Contract_Requirements.aspx", note: "Home-improvement down payments are capped at 10% of the contract or $1,000, whichever is less.", verified: V },
  },
  colorado: {
    electrician: { level: "state", body: "Colorado State Electrical Board (DORA)", sourceUrl: "https://dpo.colorado.gov/Electrical", scope: "residential and commercial", verified: V },
    plumber: { level: "state", body: "Colorado State Plumbing Board (DORA)", sourceUrl: "https://dpo.colorado.gov/Plumbing", scope: "residential and commercial", verified: V },
  },
  florida: {
    electrician: { level: "state", body: "Florida DBPR, Electrical Contractors' Licensing Board", sourceUrl: "https://www.myfloridalicense.com/", scope: "statewide certified license; county-registered licenses also exist and are valid only in that county", verified: V, note: "A 'registered' contractor is licensed only in specific counties — check which." },
    plumber: { level: "state", body: "Florida DBPR, Construction Industry Licensing Board", sourceUrl: "https://www.myfloridalicense.com/", scope: "statewide certified license; county-registered licenses also exist", verified: V },
  },
  georgia: {
    electrician: { level: "state", body: "Georgia Construction Industry Licensing Board (Secretary of State)", sourceUrl: "https://sos.ga.gov/georgia-state-construction-industry-licensing-board", scope: "residential and commercial", verified: V },
    plumber: { level: "state", body: "Georgia Construction Industry Licensing Board (Secretary of State)", sourceUrl: "https://sos.ga.gov/georgia-state-construction-industry-licensing-board", scope: "residential and commercial", verified: V },
  },
  illinois: {
    electrician: { level: "local", body: "City or county building department (e.g. Chicago Department of Buildings)", sourceUrl: "https://www.chicago.gov/city/en/depts/bldgs.html", scope: "no statewide electrician license; each municipality sets its own", verified: V, note: "Chicago also enforces its own Chicago Electrical Code." },
    plumber: { level: "state", body: "Illinois Department of Public Health, Plumbing Program", sourceUrl: "https://dph.illinois.gov/topics-services/environmental-health-protection/plumbing.html", scope: "statewide plumber and plumbing-contractor licensing", verified: V },
  },
  indiana: {
    electrician: { level: "local", body: "City or county building department", sourceUrl: "https://www.in.gov/pla/", scope: "no statewide electrician license; licensing is municipal where it exists", verified: V },
    plumber: { level: "state", body: "Indiana Plumbing Commission (Professional Licensing Agency)", sourceUrl: "https://www.in.gov/pla/professions/plumbing-home/", scope: "statewide", verified: V },
  },
  kentucky: {
    electrician: { level: "state", body: "Kentucky Department of Housing, Buildings and Construction (DHBC), Electrical Division", sourceUrl: "https://dhbc.ky.gov/", scope: "statewide; required at every level", verified: V },
    plumber: { level: "state", body: "Kentucky DHBC, Division of Plumbing", sourceUrl: "https://dhbc.ky.gov/", scope: "statewide", verified: V },
  },
  louisiana: {
    electrician: { level: "mixed", body: "Louisiana State Licensing Board for Contractors (over $10,000) and local licensing below that", sourceUrl: "https://www.lslbc.louisiana.gov/", scope: "state license required for electrical work over $10,000; smaller jobs governed by parish/city rules", verified: V },
    plumber: { level: "state", body: "Louisiana State Plumbing Board", sourceUrl: "https://www.lsbp.state.la.us/", scope: "statewide", verified: V },
  },
  maryland: {
    electrician: { level: "state", body: "Maryland Board of Master Electricians (Dept. of Labor)", sourceUrl: "https://www.dllr.state.md.us/license/elec/", scope: "statewide since 2021; some counties still require a local registration on top", verified: V },
    plumber: { level: "state", body: "Maryland State Board of Plumbing", sourceUrl: "https://www.dllr.state.md.us/license/plum/", scope: "statewide", verified: V },
    homeImprovement: { body: "Maryland Home Improvement Commission (MHIC)", sourceUrl: "https://www.dllr.state.md.us/license/mhic/", note: "Home-improvement contractors must hold an MHIC license; deposits are capped at one-third of the contract price.", verified: V },
  },
  massachusetts: {
    electrician: { level: "state", body: "Board of State Examiners of Electricians", sourceUrl: "https://www.mass.gov/orgs/board-of-state-examiners-of-electricians", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Board of State Examiners of Plumbers and Gas Fitters", sourceUrl: "https://www.mass.gov/orgs/board-of-state-examiners-of-plumbers-and-gas-fitters", scope: "statewide", verified: V },
    homeImprovement: { body: "Office of Consumer Affairs, Home Improvement Contractor registration", sourceUrl: "https://www.mass.gov/home-improvement-contractor-hic-program", note: "Home-improvement contractors must be HIC-registered; deposits are capped at one-third of the contract (more only for special-order materials).", verified: V },
  },
  michigan: {
    electrician: { level: "state", body: "Michigan LARA, Bureau of Construction Codes, Electrical Division", sourceUrl: "https://www.michigan.gov/lara/bureau-list/bcc", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Michigan LARA, Bureau of Construction Codes, Plumbing Division", sourceUrl: "https://www.michigan.gov/lara/bureau-list/bcc", scope: "statewide", verified: V },
  },
  minnesota: {
    electrician: { level: "state", body: "Minnesota Department of Labor and Industry", sourceUrl: "https://www.dli.mn.gov/business/electrical-contractors", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Minnesota Department of Labor and Industry", sourceUrl: "https://www.dli.mn.gov/business/plumbing-contractors", scope: "statewide", verified: V },
  },
  missouri: {
    electrician: { level: "state-optional", body: "Missouri Division of Professional Registration, Office of Statewide Electrical Contractors — optional; otherwise city/county", sourceUrl: "https://pr.mo.gov/electrical-contractors.asp", scope: "a statewide electrical-contractor license exists but is voluntary; local jurisdictions must accept it but may add their own requirements", verified: V },
    plumber: { level: "local", body: "City or county (e.g. St. Louis County, Kansas City)", sourceUrl: "https://pr.mo.gov/", scope: "no statewide plumbing license; licensing is entirely local", verified: V },
  },
  nevada: {
    electrician: { level: "state", body: "Nevada State Contractors Board", sourceUrl: "https://www.nscb.nv.gov/", scope: "any work over $1,000 or requiring a permit", verified: V },
    plumber: { level: "state", body: "Nevada State Contractors Board", sourceUrl: "https://www.nscb.nv.gov/", scope: "any work over $1,000 or requiring a permit", verified: V },
  },
  "new-jersey": {
    electrician: { level: "state", body: "NJ Board of Examiners of Electrical Contractors", sourceUrl: "https://www.njconsumeraffairs.gov/elec/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "NJ State Board of Examiners of Master Plumbers", sourceUrl: "https://www.njconsumeraffairs.gov/plu/", scope: "statewide", verified: V },
    homeImprovement: { body: "NJ Division of Consumer Affairs, Home Improvement Contractor registration", sourceUrl: "https://www.njconsumeraffairs.gov/hic/", note: "Home-improvement contractors must be registered with the Division of Consumer Affairs.", verified: V },
  },
  "new-york": {
    electrician: { level: "local", body: "City or county (e.g. NYC Department of Buildings)", sourceUrl: "https://www.nyc.gov/site/buildings/industry/electrician-licensing.page", scope: "no statewide electrician license; NYC, Westchester, Suffolk, Nassau and many cities license locally", verified: V },
    plumber: { level: "local", body: "City or county (e.g. NYC Department of Buildings)", sourceUrl: "https://www.nyc.gov/site/buildings/industry/plumber-licensing.page", scope: "no statewide plumber license; licensing is local", verified: V },
  },
  "north-carolina": {
    electrician: { level: "state", body: "NC State Board of Examiners of Electrical Contractors", sourceUrl: "https://www.ncbeec.org/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "NC State Board of Examiners of Plumbing, Heating and Fire Sprinkler Contractors", sourceUrl: "https://www.nclicensing.org/", scope: "statewide", verified: V },
  },
  ohio: {
    electrician: { level: "state-commercial-only", body: "Ohio Construction Industry Licensing Board (commercial); city or county for residential", sourceUrl: "https://com.ohio.gov/divisions-and-programs/industrial-compliance/boards/ohio-construction-industry-licensing-board", scope: "OCILB license covers commercial work; residential electrical licensing is municipal (many cities register or license contractors)", verified: V },
    plumber: { level: "state-commercial-only", body: "Ohio Construction Industry Licensing Board (commercial); city or county for residential", sourceUrl: "https://com.ohio.gov/divisions-and-programs/industrial-compliance/boards/ohio-construction-industry-licensing-board", scope: "OCILB license covers commercial work; residential plumbing licensing is municipal", verified: V },
    homeImprovement: { body: "Ohio Attorney General, Home Construction Service Supplier registration", sourceUrl: "https://www.ohioattorneygeneral.gov/", note: "Residential construction contracts over $25,000 fall under the Home Construction Service Suppliers Act.", verified: V },
  },
  oregon: {
    electrician: { level: "state", body: "Oregon Building Codes Division (license) and Construction Contractors Board (business)", sourceUrl: "https://www.oregon.gov/bcd/licensing/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Oregon Building Codes Division (license) and Construction Contractors Board (business)", sourceUrl: "https://www.oregon.gov/bcd/licensing/", scope: "statewide", verified: V },
  },
  pennsylvania: {
    electrician: { level: "local", body: "City or county (e.g. Philadelphia L&I, Pittsburgh PLI)", sourceUrl: "https://www.attorneygeneral.gov/protect-yourself/home-improvement-consumer-information/", scope: "no statewide electrician license; licensing is municipal where it exists", verified: V },
    plumber: { level: "local", body: "City or county", sourceUrl: "https://www.attorneygeneral.gov/protect-yourself/home-improvement-consumer-information/", scope: "no statewide plumber license; licensing is municipal where it exists", verified: V },
    homeImprovement: { body: "PA Attorney General, Home Improvement Contractor registration (HICPA)", sourceUrl: "https://www.attorneygeneral.gov/protect-yourself/home-improvement-consumer-information/", note: "Contractors doing $5,000+ of home improvement per year must be registered with the Attorney General; deposits over $1,000 are capped at one-third of the contract plus special-order materials.", verified: V },
  },
  "south-carolina": {
    electrician: { level: "state", body: "SC LLR — Residential Builders Commission (residential specialty) / Contractor's Licensing Board (commercial)", sourceUrl: "https://llr.sc.gov/res/", scope: "residential electrical over $200 requires a residential specialty registration or license", verified: V },
    plumber: { level: "state", body: "SC LLR — Residential Builders Commission (residential specialty) / Contractor's Licensing Board (commercial)", sourceUrl: "https://llr.sc.gov/res/", scope: "residential plumbing over $200 requires a residential specialty registration or license", verified: V },
  },
  tennessee: {
    electrician: { level: "state-threshold", body: "TN Board for Licensing Contractors — Limited Licensed Electrician (under $25,000) where no local program exists; local licensing in many cities/counties", sourceUrl: "https://www.tn.gov/commerce/regboards/contractors.html", scope: "state LLE covers jobs under $25,000 in jurisdictions without their own program; larger jobs need a state contractor license", verified: V },
    plumber: { level: "state-threshold", body: "TN Board for Licensing Contractors — Limited Licensed Plumber (under $25,000) where no local program exists; local licensing in many cities/counties", sourceUrl: "https://www.tn.gov/commerce/regboards/contractors.html", scope: "state LLP covers jobs under $25,000 in jurisdictions without their own program", verified: V },
  },
  texas: {
    electrician: { level: "state", body: "Texas Department of Licensing and Regulation (TDLR)", sourceUrl: "https://www.tdlr.texas.gov/electricians/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Texas State Board of Plumbing Examiners", sourceUrl: "https://tsbpe.texas.gov/", scope: "statewide", verified: V },
  },
  utah: {
    electrician: { level: "state", body: "Utah DOPL", sourceUrl: "https://dopl.utah.gov/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Utah DOPL", sourceUrl: "https://dopl.utah.gov/", scope: "statewide", verified: V },
  },
  virginia: {
    electrician: { level: "state", body: "Virginia DPOR, Board for Contractors", sourceUrl: "https://www.dpor.virginia.gov/boards/contractors", scope: "statewide; contractor license classes by job value", verified: V },
    plumber: { level: "state", body: "Virginia DPOR, Board for Contractors", sourceUrl: "https://www.dpor.virginia.gov/boards/contractors", scope: "statewide; contractor license classes by job value", verified: V },
  },
  washington: {
    electrician: { level: "state", body: "Washington Department of Labor & Industries", sourceUrl: "https://lni.wa.gov/licensing-permits/electrical/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Washington Department of Labor & Industries", sourceUrl: "https://lni.wa.gov/licensing-permits/plumbing/", scope: "statewide", verified: V },
  },
  wisconsin: {
    electrician: { level: "state", body: "Wisconsin Department of Safety and Professional Services", sourceUrl: "https://dsps.wi.gov/", scope: "statewide", verified: V },
    plumber: { level: "state", body: "Wisconsin Department of Safety and Professional Services", sourceUrl: "https://dsps.wi.gov/", scope: "statewide", verified: V },
  },
};

/** Which trade a cost guide's work falls under. */
export type Trade = "electrician" | "plumber";

/**
 * One honest sentence about who licenses this trade in this state, built
 * only from the data above. Never says "every state"; says "varies" when
 * the level is local or mixed.
 */
export function licensingSentence(stateName: string, t: TradeLicensing, trade: Trade): string {
  const who = trade === "electrician" ? "electricians" : "plumbers";
  switch (t.level) {
    case "state":
      return `${stateName} licenses ${who} statewide through the ${t.body} (${t.scope}). Ask for the license number and check it on the board's public lookup.`;
    case "state-commercial-only":
      return `In ${stateName}, the state license (${t.body.split(" (")[0]}) covers commercial work; for residential jobs, licensing or registration is handled by your city or county, so check with your local building department rather than assuming a state license exists.`;
    case "state-optional":
      return `${stateName} has an optional statewide license for ${who} (${t.body.split(" —")[0]}), but most ${who} are licensed by their city or county. Ask which license they hold and verify it with that office.`;
    case "state-threshold":
      return `In ${stateName}, ${t.scope}. Ask whether the contractor holds the state license or a local one, and verify with that office.`;
    case "local":
      return `${stateName} has no statewide license for ${who}; ${t.scope.replace(/^no statewide [a-z]+ license; /, "")}. Ask which city or county licensed the contractor and verify there.`;
    case "mixed":
      return `In ${stateName}, ${t.scope}. Ask which license applies to your job size and verify with the issuing office.`;
  }
}

export function getStateLicensing(stateSlug: string): StateLicensing | undefined {
  return STATE_LICENSING[stateSlug];
}

/** Map a cost guide slug to the trade whose licensing rules apply. */
export function tradeForGuide(guideSlug: string): Trade {
  return /electric|ceiling-fan|smoke-detector|gfci|panel/.test(guideSlug) ? "electrician" : "plumber";
}
