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
  {
    slug: "afci",
    term: "AFCI (Arc Fault Circuit Interrupter)",
    alsoCalled: ["arc-fault breaker", "AFCI breaker"],
    short:
      "A circuit breaker that trips when it detects the electrical signature of an arc — preventing fires from damaged or loose wiring.",
    body: [
      "Where a regular breaker trips on overload and a GFCI trips on ground-fault current, an AFCI trips on the high-frequency electrical noise pattern produced by an arcing wire. Arcs are how aging or damaged wiring starts most residential electrical fires.",
      "National Electrical Code now requires AFCI protection on most residential circuits — bedrooms first (since 1999), then living areas, then kitchens. Older homes are grandfathered, but adding AFCI breakers during a panel upgrade is one of the highest-value safety upgrades.",
      "AFCI breakers cost more than standard ($35–$60 each vs. $5–$15), and they can be sensitive to certain motor loads (especially refrigerator compressors), so nuisance trips are common after install. The trade-off: meaningfully lower fire risk for a meaningfully higher device price.",
    ],
  },
  {
    slug: "ahj",
    term: "AHJ (Authority Having Jurisdiction)",
    alsoCalled: ["building department", "code authority"],
    short:
      "The local government body — usually the building department — that enforces building codes and issues permits in your specific city or county.",
    body: [
      "The same job that's a routine 1-day permit in one city can require a 3-week review and structural drawings in another. The AHJ is the office that decides which.",
      "Contractor questions often have only one correct answer: 'check with your AHJ.' Permit fees, inspection schedules, allowed materials, who can perform what work — all set by the local AHJ, not by national code books. National codes (IRC, NEC, IPC) are model codes; each AHJ adopts a version and amends it.",
      "Find yours by searching '[your city/county] building department.' Most have a public-facing FAQ and a phone number that answers permit questions for free.",
    ],
  },
  {
    slug: "load-calculation",
    term: "Load calculation",
    alsoCalled: ["panel load calc", "service load calculation"],
    short:
      "A formal estimate of how much electrical power a home actually draws, used to verify the main electrical service can handle current and added loads.",
    body: [
      "Before any major electrical upgrade — adding a hot tub, EV charger, sub-panel, kitchen remodel — a licensed electrician runs a load calculation per NEC Article 220. The math factors in square footage, appliances, heating, cooling, and the new load.",
      "If the calculation shows the existing 100-amp or 200-amp panel can't handle the new load, the project requires a service upgrade — typically $2,500–$6,000 for residential — before anything else gets installed. Contractors who skip this step can leave you with an overloaded panel that trips constantly.",
      "Ask any electrician quoting major work: 'What did the load calculation show?' If they didn't run one, they're not doing the job right.",
    ],
  },
  {
    slug: "main-disconnect",
    term: "Main disconnect",
    alsoCalled: ["main breaker", "service disconnect"],
    short:
      "The single switch or breaker that shuts off all electricity entering the house — found at the top of the main panel or in a separate outdoor box.",
    body: [
      "In a residential setting, the main disconnect is typically a 100-amp, 150-amp, or 200-amp double-pole breaker at the top of the electrical panel. Flipping it cuts all power downstream — every circuit, every outlet, every light.",
      "Knowing where yours is and being able to operate it under stress is essential. During a flood, fire, or electrical-fault emergency, killing the main disconnect protects you before first responders arrive.",
      "Some homes have a separate exterior service disconnect mounted on the wall near the meter — that's even safer to operate in an emergency because you can reach it without going inside.",
    ],
  },
  {
    slug: "expansion-tank",
    term: "Expansion tank",
    alsoCalled: ["thermal expansion tank", "water heater expansion tank"],
    short:
      "A small (typically 2-gallon) bladder tank mounted on the cold-water inlet of a water heater that absorbs the thermal expansion of heated water.",
    body: [
      "When water heats up, it expands roughly 4% by volume. In a 'closed' plumbing system — one with a backflow preventer, pressure regulator, or check valve at the meter — that expanding water has nowhere to go and forces the water heater's T&P relief valve to drip.",
      "An expansion tank gives the water a small space to push into, preserving safe pressure and saving the T&P valve from constant cycling. Required by most modern plumbing codes in any home with a closed system.",
      "Costs $150–$300 installed. If your water heater's T&P valve drips repeatedly, missing or failed expansion tank is the first thing a plumber should check. Tanks last 5–10 years; tap the side annually — solid sound throughout means the bladder failed.",
    ],
    related: [
      { path: "/what-is-this/valve-near-water-heater", label: "What is this valve near my water heater?" },
    ],
  },
  {
    slug: "anode-rod",
    term: "Anode rod",
    alsoCalled: ["sacrificial anode", "tank anode"],
    short:
      "A magnesium or aluminum rod inside a water heater tank that corrodes preferentially, preventing the steel tank from rusting through.",
    body: [
      "Every traditional tank water heater contains an anode rod — a long metal rod threaded into the top of the tank. The rod is more reactive than the tank's steel lining, so corrosion attacks the rod instead of the tank wall.",
      "Anode rods sacrifice themselves over 3–7 years. Once depleted, the tank itself starts rusting and a leak is months to years away. Replacing the anode rod ($30–$80 in parts, 30 minutes if accessible) every 5 years can roughly double a tank's lifespan.",
      "Tanks with depleted anode rods often start producing smelly hot water (rotten-egg sulfur smell) — that's a sign to check. The job is moderate DIY: drain the tank a few inches, unscrew the old rod, install the new one with thread sealant. If your tank's anode is in a tight space or seized, a plumber visit is cheaper than a wrecked tank.",
    ],
    related: [
      { path: "/diy-or-hire/water-heater", label: "Should I replace my own water heater?" },
    ],
  },
  {
    slug: "shut-off-valve",
    term: "Shut-off valve",
    alsoCalled: ["shutoff", "stop valve", "fixture valve"],
    short:
      "A valve that stops water flow to a specific fixture or to the whole house — used for repairs, emergencies, and isolating leaks.",
    body: [
      "Every house has multiple shut-off valves layered in priority: a main shut-off where water enters the building, secondary shut-offs at the water heater, and individual fixture shut-offs at every sink, toilet, and water-using appliance.",
      "Two common types: ball valves (quarter-turn lever; reliable, common in modern homes) and gate valves (multi-turn wheel; older, prone to seizing and leaking after years of disuse). Gate valves that won't move are a real emergency hazard — replace them proactively, not when you actually need them.",
      "Test every shut-off in your house once a year by turning each on and off briefly. A valve that has seized open is useless when a pipe bursts and you can't stop the flow.",
    ],
    related: [
      { path: "/emergency-repairs/pipe-burst-first-10-minutes", label: "Pipe burst: first 10 minutes" },
    ],
  },
  {
    slug: "pex-vs-copper",
    term: "PEX vs copper plumbing",
    short:
      "PEX is flexible plastic plumbing pipe used in most new residential construction since 2010; copper is the older rigid metal standard. Both are code-approved.",
    body: [
      "PEX (cross-linked polyethylene) costs 30–60% less to install than copper, doesn't corrode, doesn't burst as easily on freezing, and can be run through walls in long single pieces with fewer joints. It's now the dominant residential standard.",
      "Copper still has advantages: longer expected lifespan (50+ years vs. 25–50 for PEX), better resistance to UV (so it works outdoors), accepted by every jurisdiction without question, and many plumbers prefer working with it. PEX is more sensitive to UV degradation and certain chlorine concentrations.",
      "If you're remodeling, PEX is usually the right choice unless you have an existing all-copper system and a specific reason to match. Mixing PEX and copper inline works fine with the right transition fittings.",
    ],
  },
  {
    slug: "drain-vent",
    term: "Drain vent (plumbing vent)",
    alsoCalled: ["vent stack", "plumbing vent", "soil stack"],
    short:
      "The pipes — usually exiting through the roof — that admit air into the drain system so water can flow freely and trap seals stay intact.",
    body: [
      "Every drain in a code-compliant house ties into a vent system. Vents do two jobs: let air in so water can flow (a sealed drain glugs and drains slowly, like a soda bottle) and let sewer gas escape outside instead of accumulating in the trap.",
      "A drain that gurgles, drains slowly even when not clogged, or smells of sewer gas in a fixture you use regularly often points to a blocked vent — birds, leaves, ice, or a fallen ball can plug a roof vent. A plumber with a small camera can confirm.",
      "Vent issues are easy to misdiagnose as drain clogs. If your drain still misbehaves after snaking the line, the vent is the next suspect.",
    ],
  },
  {
    slug: "joist-vs-beam",
    term: "Joist vs beam",
    short:
      "Joists are the horizontal framing members that support floors and ceilings; beams are larger structural members that carry joist loads across longer spans.",
    body: [
      "When a homeowner says 'I want to remove this wall to open the kitchen,' the first question is whether that wall sits on top of joists (probably not load-bearing) or perpendicular to joists (likely load-bearing and would need a beam to replace).",
      "Beams come in three forms: dimensional lumber (e.g., a triple 2×12), engineered lumber (LVL or glulam), or steel. Engineered or steel beams are required for longer spans and bigger loads. The size is calculated by an engineer based on load and span — never guessed.",
      "Drilling or notching joists carelessly weakens them. Most codes allow a hole up to 1/3 the joist depth in the middle 1/3 of the span — outside that envelope, you're compromising structure. Beams should never be notched or drilled without engineering sign-off.",
    ],
    related: [
      { path: "/glossary/load-bearing-wall", label: "Load-bearing wall" },
    ],
  },
  {
    slug: "weep-hole",
    term: "Weep hole",
    alsoCalled: ["weep gap"],
    short:
      "Small openings in masonry, brick veneer, window frames, or other building components designed to let water that gets behind them drain out.",
    body: [
      "Brick veneer walls have weep holes at the bottom of each brick run — small gaps every few feet at the base of the wall. They look like cosmetic flaws but are critical: rainwater that gets behind the brick (it always does eventually) has to drain back out, or it rots the framing behind.",
      "Windows have weep holes at the bottom of the frame's exterior face. Painting them shut, plugging them with debris, or sealing them with caulk traps water inside the frame — leading to rotted sills and interior water damage.",
      "If your home's weep holes are blocked, clear them with a thin tool (a clothes hanger works). Never seal them, no matter how 'wrong' they look.",
    ],
  },
  {
    slug: "soft-water-vs-hard-water",
    term: "Soft water vs hard water",
    short:
      "Hard water contains dissolved minerals (calcium, magnesium); soft water doesn't. Hardness affects plumbing wear, appliance lifespan, soap effectiveness, and skin/hair.",
    body: [
      "Hard water leaves white mineral deposits on faucets, dishes, and shower walls; reduces soap and detergent effectiveness; shortens the lifespan of water heaters and dishwashers; and can clog tankless heaters within a few years if not addressed.",
      "Soft water — produced by a water softener that swaps the minerals out for sodium or potassium — solves all of those problems but adds a small amount of sodium to drinking water (mild concern for low-sodium diets, easily addressed by routing a separate hard-water line to the kitchen tap).",
      "Test strips at any hardware store ($5) tell you what you have. If your hardness is over 7 grains per gallon, a softener pays back in equipment longevity within 5 years.",
    ],
  },
  {
    slug: "egress-window",
    term: "Egress window",
    short:
      "A bedroom window large enough for a person to escape through during a fire — required by code in every bedroom in modern construction.",
    body: [
      "Bedroom egress windows must meet specific dimensions: minimum 5.7 square feet of clear opening, minimum 24 inches in height and 20 inches in width, with the sill no more than 44 inches off the floor. Basement bedrooms often need an egress well (a sunken pit outside the window).",
      "Adding a bedroom to a basement or attic without proper egress isn't just a code violation — it can void homeowners insurance and complicate resale. Egress window installation in an existing basement runs $2,500–$6,000 depending on whether excavation is needed.",
      "If you're buying a house with a 'bonus bedroom' that lacks egress, it isn't a legal bedroom for resale — the price should reflect that.",
    ],
  },
  {
    slug: "vapor-barrier",
    term: "Vapor barrier",
    alsoCalled: ["vapor retarder"],
    short:
      "A plastic sheet or coated material installed in walls, floors, or crawl spaces to slow water vapor from passing through the building envelope.",
    body: [
      "Vapor barriers serve different purposes in different climates: in cold climates, they sit on the warm (interior) side of insulation to prevent indoor humidity from condensing inside cold walls; in hot climates, they often go on the exterior side to keep outdoor humidity from soaking insulation.",
      "Crawl spaces in humid climates benefit dramatically from a thick (10+ mil) vapor barrier on the dirt floor, with edges sealed and seams overlapped. The reduction in moisture under the home protects subfloor, joists, and indoor air quality.",
      "Wrong-side vapor barriers (installed on the wrong face of insulation for the climate) create moisture traps and cause hidden rot. Climate-appropriate placement matters more than barrier presence.",
    ],
  },
  {
    slug: "settling-vs-foundation-problem",
    term: "Settling vs. foundation problem",
    short:
      "Normal settling produces small, even, hairline cracks; foundation problems show as wider cracks, uneven floors, sticking doors, and cracks that grow over time.",
    body: [
      "Every house settles. New construction settles in the first 5–10 years; older homes continue to shift slightly with seasonal moisture cycles. Settling cracks are typically thin (under 1/8 inch), short, and stop growing once the home stabilizes.",
      "Foundation problems look different: cracks wider than 1/4 inch, cracks that step diagonally through brick courses, doors and windows that no longer close squarely, floors that slope noticeably, gaps between the wall and the floor or between trim and the wall.",
      "A licensed structural engineer's evaluation ($300–$600) is the right first step if you suspect foundation issues. Don't accept a foundation contractor's free 'inspection' as the diagnosis — they sell the repair. Pay the engineer for an independent opinion, then take that to the foundation contractors.",
    ],
  },
  {
    slug: "load-bearing-vs-partition-wall",
    term: "Partition wall",
    alsoCalled: ["non-load-bearing wall"],
    short:
      "An interior wall that doesn't carry any structural weight from the floor or roof above — safe to remove without engineering replacement.",
    body: [
      "Partition walls divide rooms but don't support anything above them. They typically run parallel to floor joists (not perpendicular), aren't directly above another wall on the floor below, and aren't near the center of the structure.",
      "Removing a partition wall is straightforward — much less invasive than a load-bearing wall removal. Cost is usually $500–$1,500 including drywall repair, depending on electrical and plumbing that may be in the wall.",
      "Confirm with an engineer or contractor before swinging a hammer. The cost of an engineer's 15-minute site visit is tiny compared to the cost of cutting through structure by accident.",
    ],
    related: [
      { path: "/glossary/load-bearing-wall", label: "Load-bearing wall" },
    ],
  },
  {
    slug: "rough-in-vs-finish-plumbing",
    term: "Rough-in vs finish plumbing",
    short:
      "Rough-in is the in-wall pipe work done before drywall; finish is the visible fixtures and trim installed at the end of the project.",
    body: [
      "A new bathroom or kitchen project has two distinct plumbing phases. Rough-in: running supply lines, drain pipes, and vents through framing before walls close up. Finish: installing the toilet, sink, faucet, shower trim, and connecting everything.",
      "On a remodel, the rough-in inspection happens before drywall closes — a critical milestone because errors caught here are cheap; errors caught after drywall and tile go up are 5–10× more expensive to fix.",
      "Most quotes split labor by phase. A 'plumbing rough-in' line on a bathroom remodel should be itemized separately from 'fixture installation.' Lump-sum quotes that don't separate them are the easiest to over-charge on.",
    ],
  },
  {
    slug: "watt-vs-amp-vs-volt",
    term: "Watts vs amps vs volts",
    short:
      "Volts measure electrical pressure; amps measure flow; watts measure power. Power (watts) = voltage × current — the formula behind every appliance rating.",
    body: [
      "U.S. residential power comes in two flavors: 120V circuits for most outlets and lights, and 240V circuits for high-draw appliances like dryers, ovens, water heaters, and EV chargers. The voltage tells you which receptacle and breaker type the appliance needs.",
      "Amps measure how much current flows through a wire. A 15-amp circuit can carry up to 15 amps of current at 120 volts — that's 1,800 watts. A 20-amp circuit handles 2,400 watts. Going over the amperage rating trips the breaker.",
      "When buying an appliance, check the watts (or amps × volts) it draws. A 1,500-watt space heater on a 15-amp circuit (1,800W max) leaves only 300W for anything else — which is why running a heater plus a microwave on the same circuit trips constantly.",
    ],
    related: [
      { path: "/advice/breaker-keeps-tripping", label: "Breaker keeps tripping" },
    ],
  },
  {
    slug: "subfloor-vs-flooring",
    term: "Subfloor vs flooring",
    short:
      "The subfloor is the structural plywood or OSB layer attached to joists; flooring (hardwood, tile, vinyl, carpet) is the visible surface above it.",
    body: [
      "Subfloor failures show up as soft spots, bouncing floors, or popped nails — usually caused by water damage to the plywood. Replacing damaged subfloor sections is part of any major water-damage remediation.",
      "Many homes have an additional 'underlayment' layer (thin plywood, foam, or cement board) between subfloor and finish flooring, especially under tile. Tile installations on inadequate subfloor crack within months; pay attention to the underlayment spec on any tile job.",
      "When buying a home, walk slowly across every floor with your full weight. Soft spots, especially near bathrooms, kitchens, or exterior doors, often indicate subfloor damage that costs $1,500–$4,000+ to remediate.",
    ],
    related: [
      { path: "/advice/soft-spot-in-laminate-or-wood-floor", label: "Soft spot in laminate or wood floor" },
    ],
  },
  {
    slug: "btu",
    term: "BTU (British Thermal Unit)",
    short:
      "The standard unit of heating and cooling capacity — how the size of a furnace, AC, water heater, or stove is measured.",
    body: [
      "One BTU is the energy needed to raise one pound of water by one degree Fahrenheit. Bigger numbers = more heating or cooling power.",
      "Residential equipment ratings homeowners encounter: gas water heater (30,000–40,000 BTU), tankless water heater (140,000–200,000 BTU), gas furnace (60,000–120,000 BTU for typical homes), central AC (24,000–60,000 BTU = 2–5 'tons'), gas range burners (5,000–18,000 BTU per burner).",
      "Bigger isn't better — oversized HVAC equipment short-cycles, runs less efficiently, and shortens its own lifespan. Proper Manual J load calculations are how an installer matches equipment to your home's actual heating/cooling needs.",
    ],
  },
  {
    slug: "seer-rating",
    term: "SEER rating",
    alsoCalled: ["SEER2", "Seasonal Energy Efficiency Ratio"],
    short:
      "An AC and heat pump efficiency rating — total cooling output over a season divided by total electrical energy used. Higher is better.",
    body: [
      "U.S. minimum SEER for new central AC is 14 in northern states, 15 in southern states (SEER2 ratings effective 2023). Premium units reach SEER 20+. Each step up costs more upfront but uses less electricity over the unit's 15–20 year life.",
      "The payback math: going from SEER 14 to SEER 18 typically saves 20–25% on cooling electricity. In a hot climate where AC runs 6+ months, that often pays back the higher upfront cost in 4–7 years. In cooler climates, the math is less favorable.",
      "Federal tax credits and utility rebates often apply to higher-SEER units — check before buying. The total installed cost difference is often smaller than the equipment-price difference after incentives.",
    ],
  },
  {
    slug: "wye-vs-tee",
    term: "Wye vs tee (plumbing fittings)",
    short:
      "Wye and tee are drain-pipe fittings shaped like a Y and a T respectively — used to merge drain lines. They're not interchangeable in code-compliant plumbing.",
    body: [
      "Tees are 90° fittings — appropriate for vent piping where airflow direction doesn't matter. Wyes have a sweeping 45° branch — required for horizontal drain lines because the gentler angle keeps waste flowing instead of pooling in the corner.",
      "Many DIY plumbing mistakes come from using a tee where a wye is required. The result is a slow drain or recurring clog at the junction. If you're working on horizontal drain lines, wye-with-eighth-bend is the right pattern.",
      "When a plumber's quote shows 'reset drain stack with proper wye fittings,' they're often correcting an earlier DIY installation. The reset is worth it; ongoing clogs are not.",
    ],
  },
  {
    slug: "r-value",
    term: "R-value",
    short:
      "A measure of insulation's resistance to heat transfer. Higher R-value = better insulation. Used to spec attic, wall, and floor insulation.",
    body: [
      "U.S. Department of Energy recommends attic insulation in the R-49 to R-60 range for most climate zones. Walls are typically R-13 to R-21. Crawl space and basement walls vary by climate zone.",
      "R-value-per-inch varies by material: fiberglass batt (~R-3.2/inch), blown-in cellulose (~R-3.5/inch), spray foam closed-cell (~R-7/inch), rigid foam board (~R-5/inch). The right material depends on the space and budget, not just R-value alone.",
      "Adding insulation has diminishing returns. Going from R-13 to R-30 in a wall returns much more energy savings than going from R-30 to R-50. Spend the first dollars on the lowest-R area in your home.",
    ],
  },
  {
    slug: "footing-vs-foundation",
    term: "Footing vs foundation",
    short:
      "The footing is the wide concrete base buried below grade; the foundation wall is the vertical structure that sits on the footing and supports the house above.",
    body: [
      "Footings spread the house's weight over a wider area, preventing the foundation from settling into soft soil. They're typically 16–24 inches wide and 8–12 inches deep, sitting below the frost line (typically 36–48 inches in cold climates).",
      "Foundation walls (often poured concrete or concrete block) rise from the footing to support the house. Most homes have either a basement foundation (8+ ft walls), a crawl-space foundation (4-ft walls), or a slab (no walls, just thickened-edge slab).",
      "Cracks in foundation walls are common and usually cosmetic. Cracks in footings are rare but serious — they indicate soil failure or major structural settlement. An engineer's evaluation is mandatory if footings are cracked.",
    ],
    related: [
      { path: "/glossary/settling-vs-foundation-problem", label: "Settling vs foundation problem" },
    ],
  },
  {
    slug: "sweating-vs-leaking-pipe",
    term: "Sweating vs leaking pipe",
    short:
      "Sweating is condensation on a cold pipe in humid air; leaking is water escaping from a damaged or failed joint. They look similar but require different fixes.",
    body: [
      "Cold water pipes in unconditioned spaces (basements, crawl spaces) develop condensation when the pipe's surface temperature is below the dew point of surrounding air. The water drips down and looks exactly like a slow leak — but the source is the air, not the pipe.",
      "Diagnostic test: dry the pipe thoroughly, wrap a paper towel around it for an hour. If the towel gets wet from outside-in, it's sweating; if the wetness shows at a specific joint, it's leaking.",
      "Fix for sweating: foam pipe insulation ($5–$15 for a standard run) and improved ventilation in the space. Fix for leaking: depends on whether the joint is soldered (resolder), threaded (re-tape and tighten), or compression (replace washer or compression ring).",
    ],
  },
  {
    slug: "kilowatt-hour",
    term: "Kilowatt-hour (kWh)",
    alsoCalled: ["kWh"],
    short:
      "The unit utility companies use to bill electricity — using 1,000 watts (1 kW) for one hour equals one kWh.",
    body: [
      "Average U.S. residential rate is 15-18¢ per kWh, with big variation: Hawaii and parts of New England exceed 35¢; Washington and Idaho run under 12¢. Knowing your local rate lets you do real energy-cost math on appliances.",
      "Example: a 1,500-watt space heater run for 8 hours = 12 kWh = $1.80–$2.16 per day at average rates. A 4,000-watt water heater running 3 hours/day = 12 kWh = same cost. Standby loads (TVs, game consoles, chargers) typically add up to ~10% of a home's total bill.",
      "Smart meters now report by hour or day. Look at your utility's online portal for usage breakdowns — most homeowners find one or two appliances they didn't realize were big draws.",
    ],
  },
  {
    slug: "code-cycle",
    term: "Code cycle",
    short:
      "The 3-year update cycle for U.S. model building codes (IRC, IPC, NEC). Different states adopt different versions of the same model code.",
    body: [
      "The International Code Council updates the IRC every 3 years (2018, 2021, 2024, etc.). States and cities pick which version to adopt, when, and with what local amendments. As a result, two homes a state border apart can be built to different code editions.",
      "What this means for homeowners: 'the code' isn't one document. When a contractor says 'that's not to code,' the right follow-up is 'which code edition?' and 'is that the version our AHJ enforces?'",
      "Older homes are typically grandfathered to the code edition in effect when built. Renovations and additions usually trigger current code on the new work, not on the existing structure. This is why you can't always 'just match' what's already there.",
    ],
    related: [
      { path: "/glossary/ahj", label: "AHJ (Authority Having Jurisdiction)" },
    ],
  },
  {
    slug: "p-vs-s-trap",
    term: "P-trap vs S-trap",
    short:
      "Both hold water to block sewer gas, but P-traps vent properly while S-traps siphon themselves dry — S-traps are a code violation in most modern plumbing codes.",
    body: [
      "An S-trap (curves down then back up, like an S) can siphon itself empty when water drains through it. Once empty, sewer gas comes back up the drain into your home. P-traps (curve down then sideways with a vent) don't have this problem.",
      "S-traps are common in older homes — many were installed before plumbing codes required venting. Most jurisdictions still allow them as grandfathered installations, but any drain modification triggers a code-required upgrade to a P-trap with proper venting.",
      "If you smell sewer gas at a particular fixture and you can see the trap is S-shaped, that's almost certainly the cause. The fix involves rerouting and adding a vent — usually a plumber's job, not DIY.",
    ],
    related: [
      { path: "/glossary/p-trap", label: "P-trap" },
      { path: "/glossary/drain-vent", label: "Drain vent" },
    ],
  },
  {
    slug: "service-panel",
    term: "Service panel",
    alsoCalled: ["breaker box", "main panel", "load center"],
    short:
      "The metal box where utility power enters the home and gets divided into individual breakered circuits that feed everything inside.",
    body: [
      "Inside the service panel: the main disconnect breaker at the top (typically 100-amp, 150-amp, or 200-amp), and a column of individual breakers below that each serve one or more circuits. Larger homes may have a subpanel — a smaller panel fed from the main, used to serve a distant area like a detached garage.",
      "Panel age and brand matter. Federal Pacific (FPE) and Zinsco panels installed in the 1960s–1980s have well-documented failure modes (breakers don't trip during faults) and many insurers require them to be replaced. Modern Square D, Eaton, GE, and Siemens panels are all reliable.",
      "Panel upgrades are major work — $2,500–$6,000 typical. Reasons to upgrade: insufficient amperage for modern loads (older 60-amp or 100-amp panels can't handle EV chargers, heat pumps, induction stoves), a problematic brand, or rusted/corroded equipment.",
    ],
    related: [
      { path: "/glossary/main-disconnect", label: "Main disconnect" },
    ],
  },
  {
    slug: "house-trap",
    term: "House trap",
    alsoCalled: ["building trap"],
    short:
      "An older sewer-line component installed at the main drain exit, designed to block sewer gas from entering the home. Replaced by individual fixture P-traps in modern plumbing.",
    body: [
      "Houses built before the 1980s often have a house trap — a U-shaped fitting in the main sewer line near where it leaves the building. The trap holds water that blocks sewer gas entering through the main line.",
      "Modern plumbing codes generally don't require house traps because individual P-traps at every fixture already handle the job, and house traps become clog points and inspection-access challenges. Many cities have outlawed them entirely.",
      "If your home has a house trap and the main sewer keeps clogging, removal might be advised. This is non-trivial work — usually requires breaking concrete or excavating, $1,500–$5,000 depending on accessibility.",
    ],
  },
  {
    slug: "snake-vs-auger",
    term: "Snake vs auger",
    short:
      "Both clear drain clogs. A 'snake' usually means a small hand-cranked tool; an 'auger' usually means a larger motorized version used by plumbers for main lines.",
    body: [
      "Homeowners can clear most fixture clogs with a basic hand snake (drum auger) for $15–$50. These reach 15–25 feet into a drain — far enough for almost any sink, tub, or bathroom-fixture clog.",
      "Toilet augers are a specific subtype with a protective rubber sleeve to avoid scratching porcelain — they're shorter (3–6 feet) but designed to navigate the toilet's curve. Standard drain snakes can damage toilet bowls; use the right tool.",
      "Power augers (electric or gas drum machines) are for mainline work — sewer line clogs, deep blockages 50+ feet from the house. Renting one from a hardware store is $50–$100/day; hiring a plumber is usually the better call for mainline issues because the diagnosis matters as much as the clearing.",
    ],
    related: [
      { path: "/tools/best-drain-snakes-for-homeowners", label: "Best drain snakes for homeowners" },
    ],
  },
  {
    slug: "tankless-water-heater",
    term: "Tankless water heater",
    alsoCalled: ["on-demand water heater", "instant water heater"],
    short:
      "A water heater that heats water as it flows through a heat exchanger, instead of storing hot water in a tank. Higher efficiency, higher upfront cost.",
    body: [
      "Tankless units only run when hot water is being drawn — eliminating the 'standby losses' of keeping a 50-gallon tank hot 24/7. Typical energy savings: 8–34% per year depending on usage patterns.",
      "Downsides: higher upfront cost ($1,200–$3,500 installed vs. $800–$2,000 for a tank), required gas line upgrade in some retrofits (the high BTU output exceeds older 1/2-inch gas line capacity), and limited simultaneous use (one shower + dishwasher works; two showers + a tub fill may overwhelm a single unit).",
      "Best fit: homes with infrequent peak demand (couples, small families) or homes that need hot water at remote points (a tankless dedicated to a master bath suite). Worse fit: homes with simultaneous-use patterns and no plans to add capacity.",
    ],
    related: [
      { path: "/diy-or-hire/water-heater", label: "Should I replace my own water heater?" },
    ],
  },
  {
    slug: "lvl-beam",
    term: "LVL beam",
    alsoCalled: ["laminated veneer lumber", "engineered beam"],
    short:
      "Engineered structural lumber made by laminating thin wood veneers together. Stronger than dimensional lumber for the same size — used to span openings created by removing load-bearing walls.",
    body: [
      "When you remove a load-bearing wall, the load above needs a new beam. For most residential spans (8–14 feet), an engineered LVL is the cheaper, simpler answer compared to steel. A typical LVL beam to replace an 8-foot wall costs $200–$500 in materials.",
      "LVLs come in standard widths (1.75 inches, 3.5 inches) and depths (5.5 inches to 16 inches). The engineer specs the size based on load + span. Don't substitute a smaller size to save money — undersized beams sag.",
      "LVLs need to bear on solid posts at each end, transferred down to the foundation. The new post locations matter: 'where the beam ends' often means cutting into walls or floors to add posts. Plan the post path with the engineer.",
    ],
    related: [
      { path: "/glossary/joist-vs-beam", label: "Joist vs beam" },
    ],
  },
  {
    slug: "manual-j",
    term: "Manual J",
    short:
      "The ACCA-published heat-load calculation method used to properly size HVAC equipment for a specific home — required by code in many jurisdictions.",
    body: [
      "Manual J calculates how much heating and cooling capacity a home actually needs, based on square footage, insulation, window area, climate zone, sun exposure, and dozens of other variables. A real Manual J calculation takes 2–4 hours and produces a multi-page report.",
      "Why this matters: HVAC equipment that's too big short-cycles (turns on/off rapidly), wears out faster, uses more electricity, and produces poor humidity control. Equipment that's too small can't keep up on extreme days.",
      "Most rule-of-thumb sizing ('500 square feet per ton') produces oversized systems. If your contractor is sizing without a Manual J, they're guessing. Ask for the calculation report before you sign — it's free with any major HVAC quote.",
    ],
  },
  {
    slug: "duct-static-pressure",
    term: "Duct static pressure",
    short:
      "A measure of the resistance your HVAC system's blower has to overcome to push air through the ductwork. High static pressure means restricted airflow.",
    body: [
      "Manufacturer specs typically call for total external static pressure of 0.5 inches of water column for residential HVAC. Many real-world systems run at 0.8–1.2 — meaning the blower works much harder than designed, uses more electricity, and dies sooner.",
      "Causes of high static pressure: dirty filter, undersized return-air ducts (very common), too many tight bends in the supply ducts, closed registers in unused rooms, or oversized blower motors. A technician with a manometer can measure yours in 10 minutes.",
      "If your HVAC is loud, blows hard out of some vents and weakly out of others, or burns through blower motors faster than expected, static pressure is the likely culprit. Fixing it usually means adding return-air capacity — sometimes a single new return-air grille in a central hallway dramatically improves the whole system.",
    ],
  },
  {
    slug: "shrubs-vs-trees-near-foundation",
    term: "Shrubs and trees near foundation",
    short:
      "Plantings within 18 inches of the foundation hold moisture against the wall, attract pests, and (with large trees) push or crack the foundation with root growth.",
    body: [
      "Best practice: keep all plantings at least 18 inches from the foundation wall, and large trees (mature trunk diameter 12+ inches) at least 15–25 feet away depending on species. Maples, oaks, and willows are the most foundation-damaging; ornamental shrubs are mostly cosmetic risk.",
      "Existing close plantings don't have to be removed — but the soil right against the foundation should slope away (1 inch per foot for at least 6 feet), and mulch beds should be thin (2 inches max) to avoid trapping moisture.",
      "When you see efflorescence (white mineral residue) on the inside basement wall behind a planted exterior, the planting is part of the cause. Pruning back is the cheapest first move; full removal only when efflorescence keeps progressing or cracks appear.",
    ],
  },
  {
    slug: "grading-vs-drainage",
    term: "Grading vs drainage",
    short:
      "Grading is the slope of the soil around the foundation (should slope away from the house); drainage is how water moves through and off the property (gutters, downspouts, French drains, dry wells).",
    body: [
      "Most homeowner basement-leak issues trace to one of these two. Grading: soil should drop at least 6 inches over the first 10 feet from the foundation. Anything flat or sloping toward the house pushes rainwater right against the foundation.",
      "Drainage: gutters and downspouts move roof water away from the house. Downspouts should extend 4–6 feet from the foundation before discharging — even better with a buried pipe to a dry well or daylighted outlet further from the house.",
      "Fixing grading is relatively cheap ($200–$800 for a typical yard, $2,000–$5,000 if extensive earthwork is needed). Fixing drainage is also cheap if it's just downspout extensions ($30–$80 each). Foundation waterproofing — the much more expensive fix — is rarely necessary if grading and drainage are correct.",
    ],
  },
  {
    slug: "efflorescence",
    term: "Efflorescence",
    short:
      "White, powdery mineral residue on the inside of a basement wall or concrete. Indicates that water is moving through the wall and depositing minerals as it dries.",
    body: [
      "Efflorescence is the visible signature of past water intrusion. It's not active damage on its own, but it tells you water has been there. Persistent or progressing efflorescence means active water issues.",
      "Causes (in order of frequency): poor grading sending rainwater at the foundation, downspouts discharging too close, missing or failed perimeter drains, cracks in the foundation wall. The fix is always at the source, not at the wall — sealing efflorescence with paint just hides it.",
      "If you're buying a home with efflorescence in the basement, get a quote for grading + drainage work and factor it into the price negotiation. The damage isn't structural yet, but ignoring it leads to mold, finishing damage, and sometimes structural concerns over years.",
    ],
  },
  {
    slug: "wattage-budget",
    term: "Circuit wattage budget",
    short:
      "The maximum power a single electrical circuit can handle before its breaker trips. 15-amp circuits hold ~1,800 watts; 20-amp circuits hold ~2,400 watts.",
    body: [
      "Power (watts) = voltage (120V residential) × amps. So a 15-amp breaker = 120 × 15 = 1,800 watts maximum. Code says you shouldn't run a circuit at more than 80% of that for continuous loads (loads running 3+ hours), so 1,440 watts is the practical safe ceiling.",
      "Why this matters: a 1,500-watt space heater + a 1,200-watt microwave on the same circuit = 2,700 watts = breaker trips. Knowing which outlets are on which circuit helps you spread big loads across multiple circuits.",
      "A clamp meter or a circuit-mapper tool ($30–$80) lets you test which outlets are on which breaker. Worth doing once and documenting in your panel — saves time every future repair.",
    ],
    related: [
      { path: "/glossary/watt-vs-amp-vs-volt", label: "Watts vs amps vs volts" },
      { path: "/advice/breaker-keeps-tripping", label: "Breaker keeps tripping" },
    ],
  },
  {
    slug: "concrete-curing",
    term: "Concrete curing",
    short:
      "The chemical process where freshly poured concrete gains strength over time. Concrete reaches ~70% strength in 7 days and ~95% in 28 days.",
    body: [
      "Concrete doesn't 'dry' — it cures via a chemical reaction between cement and water. Drying too fast (high heat, low humidity, direct sun) weakens the final concrete. Curing too cold (below ~40°F) stops the reaction entirely and ruins the pour.",
      "What this means for homeowners: don't drive on a new driveway for 7 days, don't park heavy vehicles for 28 days. Foundation work scheduled in extreme weather may need to be delayed or use specialty cold-weather or hot-weather mixes.",
      "Cracking in the first year is normal — concrete shrinks slightly as it cures. Control joints (the cuts you see in driveways and slabs) are placed deliberately to give the cracking a place to happen. Cracks outside control joints, wider than 1/8 inch, or growing over time may indicate other issues.",
    ],
  },
  {
    slug: "sister-joist",
    term: "Sister joist",
    short:
      "A new joist installed alongside a damaged or undersized existing joist, bolted or nailed to it for additional strength.",
    body: [
      "Sistering is the standard fix for joists that are cracked, sagging, or undersized. The new joist runs the full length (or at least the damaged portion plus several feet on each side) and gets fastened along the existing joist with structural fasteners spaced per code.",
      "Cost: $400–$1,200 for a single sistered joist depending on access. The job involves shoring (temporarily supporting the floor above), cutting the new joist to fit through tight crawl spaces or basements, fastening, then removing the shoring.",
      "Sistering is also used to add structural capacity for a new load (a tile floor over wood, a heavy bath fixture, a hot tub on a deck). When a contractor quotes 'we'll sister the joists in that area,' verify the engineer specified the lumber size and fastening pattern — undersized sister-joists don't fix the problem.",
    ],
  },
  {
    slug: "ice-dam",
    term: "Ice dam",
    short:
      "A ridge of ice that forms at the edge of a roof in winter when snow on the upper roof melts and refreezes at the colder eave — backing water up under the shingles.",
    body: [
      "Ice dams form when warm air leaking from the house heats the upper roof above 32°F, melting snow that runs down to the cold eave (overhang) and refreezes. The refrozen ice creates a dam; subsequent snowmelt pools behind it and works under shingles into the attic.",
      "The root cause is almost always inadequate attic insulation or air sealing — the house is heating the roof from below. Long-term fixes: add attic insulation, seal air leaks from living spaces to the attic, ensure ridge and soffit vents are clear.",
      "Short-term fixes during a freeze: have a roofer remove snow from the lower 3–4 feet of roof with a roof rake before refreeze, install heat-trace cable along eaves (an electric defrost wire, $400–$1,000 installed). Avoid hammering or chipping at ice dams — that damages shingles.",
    ],
  },
  {
    slug: "service-line",
    term: "Water service line",
    short:
      "The pipe that carries water from the municipal main (under the street) into your home. Homeowner-responsible from the property line to the house.",
    body: [
      "Two parts: the city's responsibility from the main to the curb/property line, and the homeowner's responsibility from the property line to the house. A broken service line means a homeowner-paid repair, often $2,000–$8,000 depending on length and access.",
      "Older homes (built before 1986) often have lead service lines. EPA's 2024 lead and copper rule requires utilities to identify and replace all lead service lines within 10 years; many cities are accelerating that. Free water testing kits are available from most municipalities — request one if your home is pre-1986.",
      "When you suspect a leak in the service line (low pressure, soggy spot in the yard, water-bill spike), don't dig. Call the utility for a free locate first, and get a quote from a licensed plumber for the dig + replace. PEX or HDPE service lines have largely replaced copper and galvanized for new installs.",
    ],
  },
  {
    slug: "main-water-shutoff",
    term: "Main water shutoff",
    short:
      "The valve that stops all water entering the house. Usually inside the home near where the service line enters, or outside in a curbside meter box.",
    body: [
      "Every homeowner should be able to find and operate the main water shutoff in under 60 seconds. In an emergency (burst pipe, failed water heater, overflowing fixture), every minute of unchecked flow is gallons of damage.",
      "Inside main: typically in the basement, crawl space, or utility room, near where the service line enters the foundation. Two valve types: gate valve (multi-turn wheel — older, prone to seizing) or ball valve (quarter-turn lever — newer, reliable). Test yours once a year by turning it off briefly to verify it still works.",
      "Outside main: the meter shutoff at the curb (usually in a concrete box). This needs a special water key, sometimes a long screwdriver works. The utility owns this; you can use it in emergencies but they may relock it.",
    ],
    related: [
      { path: "/glossary/shut-off-valve", label: "Shut-off valve" },
      { path: "/emergency-repairs/pipe-burst-first-10-minutes", label: "Pipe burst: first 10 minutes" },
    ],
  },
  {
    slug: "vent-stack",
    term: "Vent stack",
    short:
      "The vertical drain pipe that extends from the lowest drain up through the roof. Vents the drain system to the atmosphere and lets water flow properly.",
    body: [
      "Every plumbing drain system needs vents. The main vent stack typically rises from the lowest drain (often the basement utility sink or floor drain) straight up through the roof. Smaller branch vents tie individual fixtures into the system.",
      "On the roof you'll see one or two 2- to 4-inch pipes sticking up — those are vent stack terminations. They shouldn't be capped (the cap blocks the vent and causes slow drains). Birds, ice, leaves, and tennis balls occasionally block them.",
      "Symptoms of a blocked vent stack: drains that gurgle when they empty, slow drainage that improves after standing for a while, sewer gas smell from one or more fixtures. A plumber with a small camera and a long auger can diagnose and clear in one visit.",
    ],
    related: [
      { path: "/glossary/drain-vent", label: "Drain vent" },
    ],
  },
  {
    slug: "deflection",
    term: "Floor deflection",
    short:
      "How much a floor flexes under load. Code limits are tight (L/360 — 1 inch of flex per 30 feet of span for residential floors).",
    body: [
      "A floor that visibly bounces, that feels 'spongy' as you walk across it, or where furniture vibrates as you move is exhibiting deflection beyond residential code limits. Causes include undersized joists, joists at the maximum allowed span, water-damaged subfloor, or excessive load.",
      "Fixes range from cheap to expensive depending on cause. Adding a single new mid-span beam can stiffen a long-span floor for $1,500–$4,000. Sistering joists for the full length is $800–$3,000 depending on number of joists. Replacing damaged subfloor: $1,500–$4,000+ for a large area.",
      "Tile floors are especially sensitive to deflection — tile cracks at deflection limits stricter than wood floors tolerate. If you're planning to install tile, an engineer's assessment of floor stiffness is cheaper than a cracked-tile redo.",
    ],
  },
  {
    slug: "knockout",
    term: "Knockout",
    short:
      "A pre-cut circular section of metal in an electrical box, panel, or appliance designed to be removed (knocked out) when you need to feed a cable or conduit through.",
    body: [
      "Every electrical box and appliance with hard-wired connections has knockouts — little circular tabs that pop out with a screwdriver and hammer. Each knockout corresponds to a standard cable connector size.",
      "Common homeowner mistake: removing the wrong knockout (one you don't need a cable through) and leaving the hole open. NEC requires every open knockout to be sealed with a metal knockout cover ($2–$5 at any hardware store) to maintain the box's enclosure.",
      "When connecting a dishwasher or garbage disposal: the knockout on the wiring side typically needs to be knocked out for the cable connector. The knockout on the dishwasher drain (inside the disposal) does too — but only for the dishwasher side. Not knowing which is a common cause of leaks and back-flow.",
    ],
  },
  {
    slug: "shutoff-vs-isolation-valve",
    term: "Shutoff valve vs isolation valve",
    short:
      "Functionally similar — both stop water flow to a specific area. 'Isolation valve' is more common in commercial/industrial contexts; residential plumbing almost always says 'shutoff.'",
    body: [
      "In residential plumbing, 'shutoff valve' is the standard term. You may see 'isolation valve' on appliance install instructions or in technical documents — they mean the same thing.",
      "Residential code requires accessible shutoff valves at: every fixture (sink, toilet, dishwasher, washing machine, ice maker), the water heater (cold inlet), each branch line if a house has multiple zones. Newer construction sometimes adds a manifold near the main shutoff with individual valves for each line.",
      "A house without functional shutoffs at every fixture forces the entire house to be shut off for any repair — annoying for the user, expensive when the plumber has to drain and refill the whole system.",
    ],
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossary.find((e) => e.slug === slug);
}

export function getAllGlossarySlugs(): string[] {
  return glossary.map((e) => e.slug);
}
