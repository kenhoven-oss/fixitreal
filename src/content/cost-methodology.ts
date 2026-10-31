/**
 * Cost-methodology data, keyed by article slug.
 *
 * WHY A REGISTRY INSTEAD OF PROPS IN THE MDX
 * ------------------------------------------
 * `next-mdx-remote/rsc` does not reliably pass JSX *expression* attributes
 * through to components — the same failure the ProductPicks registry and the
 * FairPriceChecker header document. `materialFactors={[...]}` written in MDX
 * arrives as `undefined`, every section list came back empty, and
 * <CostMethodology> hit its `sections.length === 0` guard and rendered
 * NOTHING on all ten cost guides that used it. The methodology block and the
 * "Last reviewed" date were invisible to readers from the day it shipped.
 *
 * String attributes always survive, so MDX now writes
 * `<CostMethodology id="water-heater-replacement" />` and the data lives here.
 *
 * The side benefit is the same one ProductPicks gets: every cost assumption
 * on the site is in one auditable file that can be diffed and re-verified.
 *
 * RULES
 * -----
 * 1. `id` must match the article slug.
 * 2. `reviewedOn` is a verification claim. Only move it forward when the
 *    figures below have actually been re-checked against published sources.
 * 3. Keep figures consistent with the article body, jobs.ts and
 *    state-cost-data.ts — a methodology box that contradicts the page it
 *    sits on is worse than no methodology box.
 */

export type CostMethodologyEntry = {
  /** Month + year the figures below were last verified. */
  reviewedOn?: string;
  materialFactors?: string[];
  laborFactors?: string[];
  permitFactors?: string[];
  regionalFactors?: string[];
  complexityFactors?: string[];
};

export const COST_METHODOLOGY: Record<string, CostMethodologyEntry> = {
  "ceiling-fan-installation": {
    reviewedOn: "October 2026",
    materialFactors: [
      "Basic ceiling fan (Hampton Bay, Home Decorators): $80–$150.",
      "Mid-range fan with LED light: $180–$320. Designer or smart fan: $400–$900.",
      "Fan-rated retrofit box (Saf-T-Brace, Madison brace): $18–$35.",
      "Down-rod (for high ceilings): $15–$35 depending on length.",
      "Remote-control receiver / wall control: included with most fans, occasionally $40–$80 extra.",
    ],
    laborFactors: [
      "Electrician service-call minimum: $145–$310 most US metros.",
      "Fan-for-fan replacement: 45–90 minutes of actual work.",
      "New install with retrofit fan box: 1.5–3 hours.",
      "New install requiring running new wire from a switch: 3–5 hours.",
      "Electrician-supplied fan typically adds a 25–40% markup over retail.",
    ],
    permitFactors: [
      "Like-for-like fan replacement: no permit in essentially every US jurisdiction.",
      "New installation with new wiring: electrical permit + inspection often required.",
      "Adding a fan-rated box where one didn't exist (no new wiring): jurisdiction-dependent.",
    ],
    regionalFactors: [
      "Northeast / West Coast metros: 20–35% above the typical hired-install range.",
      "Vaulted or high ceilings: 0–$150 surcharge for ladder/scaffolding work.",
      "Rural service-area surcharge: 1–2 hour drive time billed at the hourly rate.",
    ],
    complexityFactors: [
      "Vaulted ceiling (10ft+): $40–$200 added labor.",
      "Sloped ceiling adapter: $25–$60 in extra parts.",
      "Running new fan-circuit wire from the switch: $150–$400 in extra labor + parts; a brand-new fan location needing its own circuit runs $300–$1,200 all-in.",
      "Adding a separate switch for independent fan/light control: $80–$200.",
      "Smart fan requiring neutral wire at switch: $150–$400 if neutral has to be fished.",
    ],
  },
  "drywall-repair": {
    reviewedOn: "October 2026",
    materialFactors: [
      "Spackle / lightweight joint compound (small tub): $6–$12.",
      "Joint compound (5-gallon bucket): $18–$28.",
      "Drywall patch (self-stick mesh): $4–$10.",
      "Drywall sheet (1/2-inch, 4x8 ft): $14–$22.",
      "Joint tape (paper or mesh): $5–$10 per roll.",
      "Sandpaper, putty knife (3- or 6-inch), drywall saw: $25–$50 for a homeowner kit.",
      "Texture spray (knockdown, orange peel): $10–$18 per can.",
      "Primer + paint to match: $30–$80 per gallon.",
    ],
    laborFactors: [
      "Handyman hourly rate: $60–$120 most US metros.",
      "Drywall finisher hourly rate: $50–$95 (often as a sub of the handyman or via direct hire).",
      "Service-call minimum: $100–$200 (handyman), $150–$300 (drywall specialist).",
      "Small holes (under 3 inches): 15–30 min finish + 2-day cure cycle for full setup.",
      "Doorknob to 12 inches: 30–60 min finish over 2–3 visits.",
      "Large patch (12 inches to 4x4 ft): 1–3 hours over 3 visits for full cure cycles.",
    ],
    permitFactors: [
      "No permit required for non-structural drywall repair in essentially every US jurisdiction.",
      "Removing entire walls or sections that include structural framing: permit may be required.",
      "Hidden electrical or plumbing exposed during the repair: a permitted inspection may be required for the relevant trade.",
    ],
    regionalFactors: [
      "Northeast / West Coast metros: 20–35% above the typical hired-install range.",
      "Rural service-area surcharge: 1–2 hour drive time billed at the hourly rate.",
      "Specialty texture work (skip-trowel, knockdown): $20–$80 surcharge for setup.",
    ],
    complexityFactors: [
      "Texture matching beyond smooth/knockdown/orange-peel: $40–$200.",
      "Water damage repair requires drying first, possibly mold remediation: $200–$2,000+ separate scope.",
      "Repairs near plumbing or electrical that exposed the systems: the relevant trade rate applies for any fix work.",
      "Pre-1980s popcorn ceiling: asbestos testing first ($30–$60), abatement if positive ($1,500+).",
      "Full-wall repaint to blend the patch: $40–$200 in paint + labor.",
    ],
  },
  "electrician-service-call": {
    reviewedOn: "October 2026",
    materialFactors: [
      "Standard 15/20A duplex receptacle: $1–$5.",
      "GFCI / AFCI receptacle: $15–$35; dual-function: $35–$55.",
      "Standard 15/20A circuit breaker: $8–$45 (brand-specific).",
      "Standard ceiling-fan or light fixture install hardware: $5–$25.",
    ],
    laborFactors: [
      "Trip / dispatch fee: $80–$200.",
      "Standard hourly rate: $120–$220/hr (varies by metro and license level).",
      "Two-hour minimum standard in most US metros.",
      "Apprentice rate (some shops): 60–75% of journeyman rate.",
    ],
    permitFactors: [
      "Outlet / fixture / breaker swap: usually no permit.",
      "New circuit, sub-panel, service upgrade: permit + inspection required in nearly all US jurisdictions.",
      "Insurance carriers may decline claims on unpermitted electrical work.",
    ],
    regionalFactors: [
      "Coastal high-cost metros: typically $180–$280/hr.",
      "Sun Belt / Midwest: typically $120–$165/hr.",
      "Emergency / after-hours / holiday: 1.5–2× base rate.",
    ],
    complexityFactors: [
      "Aluminum-wire homes (1965–1973 era): COPALUM crimps required; +$80–$200 per device.",
      "Knob-and-tube splice points: not legally extendable in most jurisdictions; trigger full re-run.",
      "Attic / crawlspace fish runs: +0.5–2 hours per new circuit.",
    ],
  },
  "faucet-replacement": {
    reviewedOn: "October 2026",
    materialFactors: [
      "Basic bathroom faucet (Delta, Moen entry): $40–$100.",
      "Mid-range bathroom faucet: $120–$220. Designer / waterfall / wall-mount: $250–$700.",
      "Basic kitchen faucet (Glacier Bay, Delta entry): $75–$150.",
      "Mid-range pull-down kitchen faucet: $180–$300. Touchless or pro-style: $400–$900.",
      "Replacement angle stops (shutoff valves): $8–$15 each. Often replaced in pairs.",
      "New supply lines (braided stainless): $8–$15 each.",
    ],
    laborFactors: [
      "Plumber service-call minimum: $135–$285 most US metros (often a 2-hour minimum).",
      "Bathroom faucet swap: 45–60 minutes of actual work.",
      "Kitchen faucet swap: 60–90 minutes (tighter access, more lines).",
      "Plumber-supplied faucet typically adds a 20–35% markup over retail.",
    ],
    permitFactors: [
      "Like-for-like fixture swap: no permit in essentially every US jurisdiction.",
      "Rerouting supply lines, adding a new connection, or converting from countertop to wall-mount: permit + inspection may be required.",
    ],
    regionalFactors: [
      "Northeast / West Coast metros: 20–35% above the typical hired-install range.",
      "Rural service-area surcharge: 1–2 hour drive time billed at the hourly rate.",
      "Weekend or after-hours emergency rates: typically 1.5–2× standard.",
    ],
    complexityFactors: [
      "Corroded shutoff valves that won't close: $20–$60 parts + 30 extra minutes.",
      "Rotted countertop or undermount support: $100–$400 carpentry on top.",
      "Converting from 4-inch to 8-inch centerset (or vice versa): may require sink swap.",
      "Adding a water filter or air gap: $40–$120 parts + 20–40 minutes.",
    ],
  },
  "garbage-disposal-replacement": {
    reviewedOn: "October 2026",
    materialFactors: [
      "½ HP unit (InSinkErator Badger 1, Moen GX50C): $85–$130.",
      "¾ HP mid-range (Badger 5, Waste King L-8000): $130–$200.",
      "1 HP premium (Evolution Excel, stainless): $250–$400.",
      "Plumber's putty, supply gasket, splash guard: $5–$15.",
    ],
    laborFactors: [
      "Plumber service-call minimum: $135–$285 (2-hour minimum standard).",
      "Like-for-like disposal swap: 30–45 minutes of actual work.",
      "Hardwired-to-plug conversion: 15 extra minutes + $20–$40 plug-in kit.",
    ],
    permitFactors: [
      "Garbage disposal replacement: no permit in almost every US jurisdiction.",
      "Adding a disposal where none existed (new circuit, dishwasher tee): may require electrical + plumbing permits.",
    ],
    regionalFactors: [
      "High-cost metros: 20–35% above the typical hired-install range.",
      "After-hours / weekend rates: typically 1.5–2× standard.",
    ],
    complexityFactors: [
      "Corroded/seized old mount ring: +30 minutes of labor + putty cleanup.",
      "Replacing the trap arm and tailpiece because they leak after install: $20–$40 parts.",
      "Wiring upgrades for a heavier unit (1 HP draws ~9A): consult an electrician.",
    ],
  },
  "gutter-cleaning-cost": {
    reviewedOn: "September 2026",
    materialFactors: [
      "No materials for cleaning itself; contractor bags and sealant for minor repairs ($5–$20).",
      "Gutter guards, if you add them: $1–$3/ft for snap-in plastic, $5–$12/ft installed for micro-mesh.",
    ],
    laborFactors: [
      "One-story: 1–2 hours for one person.",
      "Two-story: 2–3 hours; many companies send two people for ladder safety.",
      "Trip minimum: $75–$125 is common even for a small job.",
    ],
    permitFactors: [
      "None. Gutter cleaning and minor gutter repair require no permit anywhere in the U.S.",
    ],
    regionalFactors: [
      "High-cost metros: 20–35% above the typical range.",
      "Peak season (October–November) books out 2–3 weeks; some companies add 10–20% for rush scheduling.",
    ],
    complexityFactors: [
      "Steep or tile roofs: crews can't walk them, so everything is done from ladders — add 30–50%.",
      "Gutters over landscaping, decks, or pools: ladder placement is slower and costs more.",
      "Gutters that haven't been cleaned in years: compacted, heavy debris can double the labor.",
    ],
  },
  "plumber-service-call": {
    reviewedOn: "October 2026",
    materialFactors: [
      "Standard service-call parts (washers, supply lines, wax rings, basic stops): $5–$40.",
      "Common replacement valves, traps, P-trap kits: $15–$80.",
      "Specialty parts (cartridges, motorized valves): $40–$200.",
    ],
    laborFactors: [
      "Trip / dispatch fee: $75–$200 (covers truck + first ~30–60 minutes on site).",
      "Standard hourly rate after dispatch: $115–$220/hr.",
      "Two-hour minimum is industry standard in most US metros.",
      "Apprentice rate (some shops): 60–75% of journeyman rate.",
    ],
    permitFactors: [
      "Most service calls (unclog, faucet swap, leak repair) require no permit.",
      "Re-piping, water-heater swap, or main-line replacement: permit + inspection required in most jurisdictions.",
    ],
    regionalFactors: [
      "Coastal high-cost metros (SF, NY, Boston, LA): typically $200–$300/hr.",
      "Sun Belt and Midwest metros: typically $115–$165/hr.",
      "Emergency / after-hours / holiday: 1.5–2× the base rate.",
    ],
    complexityFactors: [
      "Crawlspace or attic access: +0.5–1 hour billed.",
      "Old galvanized or cast-iron systems: parts harder to source; +30 minutes on most jobs.",
      "Hidden water damage discovered during the call: separate carpentry / drywall trade.",
    ],
  },
  "storm-damage-tree-removal-cost": {
    reviewedOn: "September 2026",
    materialFactors: [
      "There are no materials in a tree removal. Every dollar is labor, equipment time, and disposal.",
      "Crane rental: $1,500–$5,000 per day plus operator, when one is genuinely required.",
      "Disposal: a mature hardwood is several tons and 2–3 dump-trailer trips; tipping fees vary by county.",
    ],
    laborFactors: [
      "Ground removal of a mature tree, normal season: $1,000–$3,000 (published national surveys).",
      "Storm premium: +50% to +150% for overtime, equipment scarcity, and urgency.",
      "Rigging off a structure: a climber and 2–3 ground crew for most of a day.",
      "Author's own 2026 quotes — one tree on a garage roof, identical scope on every bid (remove from roof + haul debris) — ranged $4,000–$18,000 and inform the upper bands here.",
    ],
  },
  "toilet-replacement": {
    reviewedOn: "October 2026",
    materialFactors: [
      "Basic toilet (American Standard, Kohler entry, Glacier Bay) retail: $90–$200.",
      "Mid-range toilet: $250–$400. Premium / dual-flush / comfort-height: $500–$1,200.",
      "Wax ring + closet bolts + braided supply line: $15–$25 total.",
      "Optional shut-off valve replacement: $8–$25 part, 15 min labor.",
    ],
    laborFactors: [
      "Plumber service-call minimum: $135–$285 most US metros (often a 2-hour minimum).",
      "Toilet swap: 45–90 minutes of actual work.",
      "Plumber-supplied toilet typically adds a 20–40% markup over retail.",
    ],
    permitFactors: [
      "Like-for-like fixture swap: no permit in almost every US jurisdiction.",
      "Relocating the rough-in or replacing the closet flange in a remodel: permit + inspection may be required.",
    ],
    regionalFactors: [
      "Northeast / West Coast metros: 20–35% above the typical hired-install range.",
      "Rural service-area surcharge: 1–2 hour drive time billed at the hourly rate.",
      "Weekend or after-hours emergency rates: typically 1.5–2× standard.",
    ],
    complexityFactors: [
      "Rotted subfloor at the flange: $200–$800 carpentry on top.",
      "Closet flange replacement: $80–$220 parts + 1 extra hour.",
      "Rough-in conversion (10\\\" → 12\\\" or vice versa): may require a new toilet model.",
    ],
  },
  "water-heater-replacement": {
    reviewedOn: "October 2026",
    materialFactors: [
      "40–50 gal gas or electric tank: $550–$900 at big-box retail.",
      "Tankless unit (whole-house): $800–$2,000 — plus larger gas line and dedicated venting.",
      "Expansion tank: $75–$150 part (code-required where check valves or PRVs exist on the supply).",
      "Pan, sediment trap, T&P discharge line, drain pan: $40–$120 total.",
    ],
    laborFactors: [
      "Standard tank swap: 3–5 hours at $75–$150/hr typical plumber rate.",
      "Tankless install: 6–10 hours; often needs an electrician for a dedicated circuit on hybrid/electric tankless.",
      "BYO (you supply the tank): often billed at a higher labor rate or with a 'BYO surcharge.'",
    ],
    permitFactors: [
      "Water-heater swap permit: required in most US jurisdictions. Cost: $50–$200.",
      "Inspection verifies seismic straps (seismic zones), T&P discharge routing, expansion tank, sediment trap, and gas-line connections.",
      "Skipping the permit can give an insurer grounds to deny a water-damage claim if the tank later fails.",
    ],
    regionalFactors: [
      "CA / NY / MA metros: 25–40% above typical install range.",
      "Seismic zones (California, Pacific Northwest): strap kit + bracing adds $40–$120.",
      "Cold climates (MN, ME): code may require additional insulation or drain-pan heaters.",
    ],
    complexityFactors: [
      "Closet relocation or new gas line: +$400–$1,500.",
      "Service-panel upgrade for electric / hybrid: +$1,500–$4,000 (separate licensed electrician).",
      "Tankless conversion in a tank-only home: +$1,500–$2,800 for venting + gas line.",
    ],
  },
};
