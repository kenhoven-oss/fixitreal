/**
 * Home-repair glossary. Each entry is a single homeowner-facing term with
 * a short definition, a longer "what to know" body, and optional links to
 * relevant FixItReal articles.
 *
 * Why: long-tail factual queries ("what is a P-trap", "what is GFCI",
 * "what is a wax ring") have huge aggregate volume and low competition.
 * Each entry is its own indexable page with breadcrumbs + Article schema.
 * Plus the glossary becomes a network of internal-link targets for the
 * rest of the site.
 */

export type GlossaryEntry = {
  slug: string;
  /** Display term, e.g. "GFCI outlet". */
  term: string;
  /** What it is, in 1 sentence (used for meta description + lede). */
  short: string;
  /** What homeowners need to know, in paragraphs. */
  body: string[];
  /** Optional aliases the term is also known as. */
  alsoCalled?: string[];
  /** Optional related links into the rest of the site. */
  related?: Array<{ path: string; label: string }>;
};

export const glossary: GlossaryEntry[] = [
  {
    slug: "p-trap",
    term: "P-trap",
    alsoCalled: ["J-bend", "J-trap", "sink trap"],
    short:
      "The U-shaped pipe under every sink that holds a small reservoir of water to block sewer gas.",
    body: [
      "A P-trap is the curved section of drain pipe directly under any sink, tub, or shower. Every fixture in a code-compliant home has one (toilets have a built-in version inside the bowl).",
      "The bottom of the curve always holds an inch or two of water. That water seal is the only thing keeping sewer gas — hydrogen sulfide, methane, ammonia — from rising up through the drain and into your home. Lose the seal (a rarely-used sink, a leak, a missing trap) and you'll smell it within hours.",
      "P-traps are slip-nut assemblies: hand-tight connections compressed against a plastic washer. They're meant to come apart cleanly for cleaning. If yours leaks at a connection, it's almost always a worn washer, not a structural failure — a $10 replacement kit and 20 minutes fixes it.",
    ],
    related: [
      { path: "/what-is-this/pipe-under-sink", label: "What is this pipe under my sink?" },
      { path: "/advice/sink-drain-leaking-under-kitchen-sink", label: "Sink drain leaking under kitchen sink" },
    ],
  },
  {
    slug: "gfci",
    term: "GFCI (Ground Fault Circuit Interrupter)",
    alsoCalled: ["GFI", "ground-fault interrupter"],
    short:
      "A safety outlet that shuts off power within 1/40th of a second when current leaks to ground — fast enough to prevent a fatal shock.",
    body: [
      "A GFCI outlet (you can spot one by the TEST and RESET buttons in the middle) monitors the electrical current flowing in versus flowing out. If the two don't match — meaning current is leaking somewhere, often through a person — it trips off in milliseconds.",
      "National Electrical Code requires GFCI protection in bathrooms, kitchens, garages, laundry rooms, basements, outdoor outlets, and within 6 feet of every sink. Older homes are often grandfathered with non-GFCI outlets in these spots; upgrading is a straightforward fix.",
      "Press TEST monthly to verify the outlet still works. A surprising fraction of older GFCIs eventually fail in a 'stays on but no protection' state — the most dangerous failure mode.",
    ],
    related: [
      { path: "/what-is-this/outlet-with-buttons", label: "What is this outlet with buttons?" },
      { path: "/diy-or-hire/gfci-outlet", label: "Should I replace a GFCI outlet myself?" },
      { path: "/advice/gfci-outlet-keeps-tripping", label: "GFCI keeps tripping" },
    ],
  },
  {
    slug: "wax-ring",
    term: "Wax ring",
    alsoCalled: ["toilet wax seal", "wax gasket"],
    short:
      "The doughnut-shaped wax seal between a toilet and the floor drain (closet flange) that prevents leaks and sewer gas escape.",
    body: [
      "Every toilet sits on top of a wax ring that compresses when the toilet is bolted down. The wax fills the gap between the toilet's outlet horn and the closet flange (the pipe fitting bolted to the floor), creating a watertight, gas-tight seal.",
      "Wax rings fail in two patterns: (1) the toilet wasn't bolted down evenly during install, so the ring compressed unevenly and started leaking water at the base, or (2) the toilet rocked over time from a loose flange or soft floor, breaking the seal. Both cases require pulling the toilet, scraping off the old wax, and installing a new ring.",
      "Modern wax-free rubber rings ($12–$18) are easier to install — they don't need a perfect first-press and are more forgiving on uneven flanges. Traditional wax ($3–$8) is what most plumbers still use; cheaper and proven across decades.",
    ],
    related: [
      { path: "/advice/toilet-leaking-at-the-base", label: "Toilet leaking at the base when flushed" },
      { path: "/diy-or-hire/toilet", label: "Should I fix a leaking toilet myself?" },
    ],
  },
  {
    slug: "closet-flange",
    term: "Closet flange",
    alsoCalled: ["toilet flange"],
    short:
      "The round metal or plastic fitting bolted to the floor where a toilet sits, connecting the toilet to the drain pipe below.",
    body: [
      "The closet flange (the 'closet' refers to 'water closet,' an old name for toilet) is the structural anchor for a toilet. The toilet's two bolts thread up through the flange's slots, and the toilet sits on top of a wax ring that seals against the flange's top surface.",
      "A cracked, rotted, or out-of-position flange is the most common cause of repeat toilet leaks. Symptoms include a toilet that rocks, water around the base, or a wax ring that 'won't stay sealed' no matter how many times it's replaced — that almost always means the flange itself is the problem.",
      "Flange repair rings ($8–$15) fix minor damage like a broken bolt slot. Full flange replacement involves pulling the toilet, cutting out and replacing the flange, and re-installing — solidly in the DIY-with-effort or call-a-plumber range depending on whether the subfloor is intact.",
    ],
    related: [
      { path: "/advice/toilet-leaking-at-the-base", label: "Toilet leaking at the base" },
      { path: "/diy-or-hire/toilet", label: "Should I fix a leaking toilet myself?" },
    ],
  },
  {
    slug: "t-and-p-valve",
    term: "T&P valve (temperature & pressure relief valve)",
    alsoCalled: ["TPR valve", "relief valve"],
    short:
      "The safety valve on a water heater that opens automatically if tank temperature or pressure exceeds safe limits.",
    body: [
      "Every water heater has a T&P valve mounted on the top or upper side, with a copper or plastic discharge pipe running down toward the floor. The valve is spring-loaded; it opens automatically if tank temperature exceeds about 210°F or pressure exceeds 150 psi.",
      "Without a T&P valve, an over-pressurized tank can rupture explosively. This is the single most critical safety device on the entire water heater.",
      "A T&P valve that drips occasionally during a heating cycle is sometimes normal. Continuous dripping or steady flow means the valve has failed, the tank is over-pressurizing, or the home is missing an expansion tank that should be there. Never cap or plug the discharge pipe — that defeats the safety function and risks tank explosion.",
    ],
    related: [
      { path: "/what-is-this/valve-near-water-heater", label: "What is this valve near my water heater?" },
      { path: "/diy-or-hire/water-heater", label: "Should I replace my own water heater?" },
      { path: "/advice/water-heater-leaking", label: "Water heater is leaking" },
    ],
  },
  {
    slug: "load-bearing-wall",
    term: "Load-bearing wall",
    alsoCalled: ["bearing wall", "structural wall"],
    short:
      "An interior wall that carries the weight of the structure above it — a roof, floor, or ceiling — and cannot be removed without engineered support.",
    body: [
      "Most homes have a mix of load-bearing and non-load-bearing (partition) walls. Removing a load-bearing wall without an engineered beam to replace its support causes sagging floors, cracking drywall, or in worst cases structural collapse.",
      "Indicators that a wall is load-bearing: it runs perpendicular to the floor joists above, it sits directly over a foundation wall or beam, it sits in line with a wall on the floor above, or it's near the center of the home along its long axis. An engineer or experienced contractor can confirm.",
      "A homeowner walking through a remodel never removes a wall before a structural assessment. The cost of a 15-minute engineer visit is trivial compared to the cost of replacing a structural element after the fact.",
    ],
    related: [
      { path: "/contractor-red-flags", label: "Contractor red flags" },
    ],
  },
  {
    slug: "code-and-permit",
    term: "Building permit",
    alsoCalled: ["permit", "code permit"],
    short:
      "Local-government authorization for a construction or repair project, typically required for electrical, plumbing, structural, or HVAC work above a defined scope.",
    body: [
      "A building permit isn't a tax — it's an inspection contract. The homeowner (or contractor) submits a scope, pays a fee, and the local building department sends an inspector at key milestones to verify the work meets code.",
      "Skipping a required permit creates two long-term problems: the work is technically illegal, and at resale, an unpermitted addition or remodel can complicate the sale, lower the appraisal, or trigger costly retroactive permitting.",
      "Permits are typically required for: new electrical circuits, panel upgrades, new plumbing runs (not fixture swaps), water-heater replacement in some jurisdictions, HVAC system swaps, structural changes, additions, and decks above a certain height. Like-for-like fixture or appliance swaps usually don't require one. Your local building department's website lists what triggers a permit in your jurisdiction.",
    ],
    related: [
      { path: "/contractor-red-flags", label: "Contractor red flags" },
      { path: "/home-inspection-repairs", label: "Home inspection repairs" },
    ],
  },
  {
    slug: "ymyl",
    term: "YMYL (Your Money or Your Life)",
    alsoCalled: ["YMYL content"],
    short:
      "Content categories where bad information could harm a reader's safety or finances — used as a quality-and-trust standard by both Google and editorial publishers.",
    body: [
      "Google explicitly evaluates content in 'Your Money or Your Life' categories — health, finance, safety, legal, medical — against a higher trust bar than other content. Pages that deal with electrical work, gas appliances, fire safety, structural issues, or expensive repair decisions fall into this category.",
      "On FixItReal, every YMYL article carries a frontmatter flag (`ymyl: true`) that triggers a visible 'safety-sensitive topic — consult a licensed pro' note at the top of the article. The site's editorial standards explicitly call out where to stop a DIY job and hire a professional.",
      "If you're reading an electrical, gas, or structural repair guide that doesn't mention safety thresholds and when to hire — it isn't a serious source. Walk away.",
    ],
    related: [
      { path: "/about/editorial-standards", label: "Editorial standards" },
    ],
  },
  {
    slug: "ufer-ground",
    term: "Ufer ground (concrete-encased electrode)",
    alsoCalled: ["concrete-encased grounding electrode"],
    short:
      "A grounding system that uses the rebar in the home's foundation as the primary path to earth — required in most new construction since 2008.",
    body: [
      "The National Electrical Code requires a concrete-encased grounding electrode (commonly called a 'Ufer ground' after the engineer who developed it) in any home with a poured concrete foundation, as the primary grounding system.",
      "If you see a copper wire emerging from your foundation near the electrical panel — that's the Ufer connection. It's not a ground rod (those are required as a supplement); it's the rebar inside the foundation acting as a much larger, much more conductive ground path.",
      "If you're upgrading a panel or having electrical work done, make sure the contractor uses the existing Ufer ground rather than just installing new rods. Disconnecting the Ufer ground is a code violation that can fail an inspection.",
    ],
  },
  {
    slug: "knob-and-tube",
    term: "Knob and tube wiring",
    alsoCalled: ["K&T", "K&T wiring"],
    short:
      "Pre-1950s electrical wiring that runs hot and neutral wires separately through ceramic insulators and tubes — functional but limited in capacity and now a problem with modern loads.",
    body: [
      "Knob and tube wiring was the standard residential electrical method from roughly 1880 to 1940. Hot and neutral wires run separately, supported by ceramic 'knobs' on framing and routed through ceramic 'tubes' where they pass through wood.",
      "K&T isn't inherently dangerous when intact — what makes it a problem today is age, modification, and insulation. Original K&T relied on air for cooling; newer attic insulation packed around it traps heat and is a fire risk. Many K&T circuits have been modified over decades, often poorly, creating splice failures and overloads.",
      "Insurance companies often refuse to insure homes with active K&T, or charge a substantial premium. If you're buying a home with K&T, get a quote for full replacement ($8,000–$25,000 depending on home size and access) before closing, and use it in price negotiation.",
    ],
    related: [
      { path: "/home-inspection-repairs", label: "Home inspection repairs" },
    ],
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossary.find((e) => e.slug === slug);
}

export function getAllGlossarySlugs(): string[] {
  return glossary.map((e) => e.slug);
}
