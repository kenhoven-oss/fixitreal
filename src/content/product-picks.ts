/**
 * Contextual Amazon product recommendations, keyed by block id.
 *
 * WHY A REGISTRY INSTEAD OF PROPS IN THE MDX
 * ------------------------------------------
 * `next-mdx-remote/rsc` does not reliably pass JSX *expression* attributes
 * through to components — the same failure the FairPriceChecker header
 * documents for `low={300}`. An array-of-objects prop written in MDX
 * arrives as `undefined`. String attributes always survive, so MDX writes
 * `<ProductPicks id="clean-dryer-vent-tools" />` and the data lives here.
 *
 * The side benefit is the one that matters more: every contextual affiliate
 * recommendation on the site is now in one file that can be counted,
 * audited and diffed. `npm run check-affiliate-tags` walks this registry.
 *
 * RULES FOR ADDING A BLOCK
 * ------------------------
 * 1. One to three picks. Four only on a genuinely multi-tool DIY job.
 * 2. `why` must answer "why does THIS paragraph need THIS item" — if it
 *    reads like generic product copy, the block does not belong there.
 * 3. Reuse an existing verified amzn.to link when FixItReal already
 *    recommends that product. Never invent an amzn.to code or an ASIN.
 * 4. No prices, no ratings, no Amazon images, no urgency language.
 * 5. Never recommend something the article advises against.
 */

import { amazonSearch } from "@/lib/amazon";

export type ProductPick = {
  /** What to buy, in FixItReal's words — never Amazon's product title. */
  name: string;
  /** One sentence: why this job needs this item. */
  why: string;
  /** Verified amzn.to SiteStripe link, or a tagged Amazon search link. */
  href: string;
  /** CTA label. Plain and descriptive; no superlatives or urgency. */
  label?: string;
};

export type ProductPickBlock = {
  title?: string;
  picks: ProductPick[];
  /** Internal buying guides kept alongside the affiliate links. */
  guides?: Array<{ href: string; label: string }>;
};

/* ------------------------------------------------------------------ *
 * Verified links already live on FixItReal. Reused by id so a link
 * fix lands everywhere at once.
 * ------------------------------------------------------------------ */
const LIVE = {
  shopVacMid: "https://amzn.to/3OBSCx3",
  shopVacLarge: "https://amzn.to/3QjvCU9",
  drainAuger25: "https://amzn.to/4tZgObP",
  cupPlunger: "https://amzn.to/487GZVl",
  moistureMeterPin: "https://amzn.to/48HfL88",
  leakPuck: "https://amzn.to/4hyvBHr",
  smokeHardwired: "https://amzn.to/4vOc6hG", // Siterlink GS562A — verified 2026-09-13
  ncvt: "https://amzn.to/4fWFw8o", // Klein NCVT3P — verified 2026-09-13
  // Two slots deliberately use amazonSearch() instead of a SiteStripe link:
  // the 10-year sealed photoelectric alarm (destination is a UL 217 smoke
  // alarm, but photoelectric + sealed could not be confirmed) and the GFCI
  // outlet (amzn.to/4sCNRRP returns HTTP 404). See
  // docs/affiliate-destination-audit.md.
  breakerFinder: "https://amzn.to/4czxXBY",
  gfciTester: "https://amzn.to/4vCRsC6",
  smokeCombo: "https://amzn.to/4wohlG1",
  waxRingKit: "https://amzn.to/4cBSy8L",
  closetBolts: "https://amzn.to/4tkELKB",
  braidedSupply: "https://amzn.to/4vXpTE3",
  plumbersPutty: "https://amzn.to/4mItUb5",
  disposalWrench: "https://amzn.to/4tVSLun",
  drywallPatchKit: "https://amzn.to/4dTF0rr",
  settingCompound: "https://amzn.to/4cTNn5d",
  pleatedFilters: "https://amzn.to/4cqI6AA",
  siliconeCaulk: "https://amzn.to/42hjzcB",
  caulkRemover: "https://amzn.to/3QOjrig",
  caulkGun: "https://amzn.to/3QiVH5Q",
} as const;

const GUIDES = {
  shopVac: { href: "/tools/best-shop-vacs-for-water-cleanup", label: "Shop vac buying guide" },
  drainSnake: { href: "/tools/best-drain-snakes-for-homeowners", label: "Drain snake buying guide" },
  plunger: { href: "/tools/best-plungers-for-homeowners", label: "Plunger buying guide" },
  voltageTester: { href: "/tools/best-voltage-testers-for-homeowners", label: "Voltage tester buying guide" },
  moistureMeter: { href: "/tools/best-moisture-meters-for-homeowners", label: "Moisture meter buying guide" },
  leakDetector: { href: "/tools/best-water-leak-detectors", label: "Leak detector buying guide" },
  smoke: { href: "/tools/best-smoke-detectors-for-homeowners", label: "Smoke alarm buying guide" },
  co: { href: "/tools/best-carbon-monoxide-detectors", label: "CO detector buying guide" },
  caulk: { href: "/tools/best-caulk-and-caulk-guns-for-bath-and-kitchen", label: "Caulk buying guide" },
  // Guides added on main; wired in here so the article layer feeds them.
  furnaceFilter: { href: "/tools/best-furnace-filters", label: "Furnace filter buying guide" },
  toiletParts: { href: "/tools/best-toilet-flappers-and-fill-valves", label: "Flapper & fill valve guide" },
  pressureGauge: { href: "/tools/best-home-water-pressure-gauges", label: "Water pressure gauge guide" },
  gfciOutlets: { href: "/tools/best-gfci-outlets-for-homeowners", label: "GFCI outlet buying guide" },
  pipeClamps: { href: "/tools/best-pipe-repair-clamps", label: "Pipe repair clamp guide" },
  drywallKits: { href: "/tools/best-drywall-repair-kits", label: "Drywall repair kit guide" },
  breakerFinders: { href: "/tools/best-circuit-breaker-finders", label: "Circuit breaker finder guide" },
  shutoffValves: { href: "/tools/best-automatic-water-shutoff-valves", label: "Automatic shutoff valve guide" },
} as const;

/**
 * Verified product ASINs, confirmed by fetching each listing and reading
 * its title (see docs/affiliate-destination-audit.md). Preferred over a
 * search link wherever one covers the same product: a reader who lands on
 * the exact item converts; one who lands on a search page often does not.
 */
const DP = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=fixitreal-20`;

export const PRODUCT_PICKS: Record<string, ProductPickBlock> = {
  /* ---------------- Dryer vent ---------------- */
  "dryer-vent-tools": {
    picks: [
      {
        name: "Dryer vent cleaning brush kit with extendable rods",
        why: "The one tool here you cannot improvise. Rods that couple together reach the full run from the wall opening to the exterior cap, and a drill-driven kit turns the lint out instead of packing it tighter.",
        href: amazonSearch("dryer vent cleaning brush kit extendable rods"),
        label: "Shop dryer vent brush kits on Amazon",
      },
      {
        name: "Mid-size wet/dry shop vac (6–9 gal)",
        why: "A household vacuum chokes on lint and blows it back into the room. The shop vac with a narrow hose attachment is what actually clears the wall opening in step 7.",
        href: LIVE.shopVacMid,
        label: "See the mid-size shop vac we recommend",
      },
      {
        name: "Semi-rigid aluminum dryer duct",
        why: "Only if step 5 shows the duct crushed, torn, or the white plastic slinky type. Semi-rigid aluminum is the safe replacement — never vinyl.",
        href: amazonSearch("semi rigid aluminum dryer duct"),
        label: "Shop semi-rigid aluminum duct on Amazon",
      },
    ],
    guides: [GUIDES.shopVac],
  },

  /* ---------------- Drains ---------------- */
  "drain-clog-kit": {
    title: "The drain-clog kit, in three items",
    picks: [
      {
        name: "25-ft hand-crank drum auger",
        why: "The tool this whole guide is built around. A quarter-inch steel cable on a hand drum reaches past the trap on every fixture in the house, for less than a tenth of one plumber visit.",
        href: LIVE.drainAuger25,
        label: "See the 25-ft auger we recommend",
      },
      {
        name: "Flat-cup sink plunger — plus a separate flanged one for the toilet",
        why: "A flat rim seals a sink or tub opening properly, which a toilet plunger cannot. Keeping the two separate is a hygiene rule, not a preference.",
        href: LIVE.cupPlunger,
        label: "See the cup plunger we recommend",
      },
      {
        name: "Channel-lock (tongue-and-groove) pliers",
        why: "For the P-trap slip nuts. Hand-tight often will not break a twenty-year-old joint, and the wrong tool rounds off a plastic nut.",
        href: amazonSearch("tongue and groove channel lock pliers"),
        label: "Shop channel-lock pliers on Amazon",
      },
    ],
    guides: [GUIDES.drainSnake, GUIDES.plunger],
  },

  /* ---------------- Garbage disposal ---------------- */
  "disposal-jam-wrench": {
    title: "If the hex key is long gone",
    picks: [
      {
        name: "Garbage disposal jam wrench (¼-in hex)",
        why: "The offset wrench that fits the hex recess under almost every disposal. If the one taped to the unit disappeared years ago, this is the entire five-minute fix in one tool.",
        href: LIVE.disposalWrench,
      },
    ],
  },
  "disposal-replacement-units": {
    title: "The two models this guide actually recommends",
    picks: [
      {
        name: "InSinkErator Badger 5 (½ HP)",
        why: "The baseline unit above: right for one or two people with light use, and the model most kitchens already have, so the mount usually matches.",
        href: amazonSearch("InSinkErator Badger 5 garbage disposal"),
        label: "See current Badger 5 options on Amazon",
      },
      {
        name: "InSinkErator Evolution Compact (¾ HP)",
        why: "Our best-value pick for family cooking — quieter, grinds finer, and fits the same under-sink space as a ½ HP unit.",
        href: amazonSearch("InSinkErator Evolution Compact garbage disposal"),
        label: "See current Evolution Compact options on Amazon",
      },
      {
        name: "Plumber's putty",
        why: "For the sink flange when you set the new mounting assembly. A few dollars, and the usual reason a fresh install drips on day one.",
        href: LIVE.plumbersPutty,
      },
    ],
  },

  /* ---------------- Smoke alarms ---------------- */
  "smoke-alarm-swap": {
    title: "What to buy for the swap",
    picks: [
      {
        name: "10-year sealed lithium photoelectric alarm",
        why: "For battery locations. Photoelectric sensing responds faster to the smouldering fires that are the common residential case, and a sealed battery ends the 3 a.m. chirp for a decade.",
        href: amazonSearch("10 year sealed battery photoelectric smoke alarm UL 217"),
        label: "See the sealed photoelectric alarm we recommend",
      },
      {
        name: "Hardwired interconnected photoelectric alarm with battery backup",
        why: "For the hardwired job above. Match the existing harness connector — the same brand as the installed units is the safe bet — and keep battery backup, which is code in most jurisdictions.",
        href: LIVE.smokeHardwired,
        label: "See the hardwired alarm we recommend",
      },
      {
        name: "Combination smoke + carbon-monoxide alarm",
        why: "Worth it on the level with gas appliances or an attached garage. Check it is listed to both UL 217 and UL 2034 — plenty of combo units certify to only one.",
        href: LIVE.smokeCombo,
        label: "See the combination alarm we recommend",
      },
    ],
    guides: [GUIDES.smoke, GUIDES.co],
  },

  /* ---------------- Toilets ---------------- */
  "toilet-swap-parts": {
    title: "The three parts that decide whether this leaks",
    picks: [
      {
        name: "Toilet wax ring kit with reinforced flange horn",
        why: "Step 7. Get one with a horn — a plain wax ring squishes too thin on a flange that sits slightly low, which is the usual cause of a slow base leak six months later. A wax-free seal is the alternative if you expect to re-seat the bowl.",
        href: LIVE.waxRingKit,
      },
      {
        name: "Stainless closet bolt kit",
        why: "Step 9. Old bolts come out corroded and rounded; new ones cost a few dollars and tighten evenly, which is what keeps you from cracking the porcelain.",
        href: LIVE.closetBolts,
      },
      {
        name: "Braided stainless supply line",
        why: "Step 11 says never reuse the old one, and that is the single most common source of a post-install leak. Buy the new line with the toilet, not after the flood.",
        href: LIVE.braidedSupply,
      },
    ],
  },
  "toilet-cost-diy-parts": {
    title: "What the DIY route actually costs in parts",
    picks: [
      {
        name: "Wax-free toilet seal",
        why: "A rubber or foam seal instead of wax. Costs a little more, but it can be re-seated if the bowl shifts, which matters if you are doing this yourself for the first time.",
        href: amazonSearch("wax free toilet seal flange"),
        label: "See current options on Amazon",
      },
      {
        name: "Braided stainless supply line",
        why: "Always new on a replacement. Reused supply lines are the most common cause of a leak in the first week after a DIY swap.",
        href: LIVE.braidedSupply,
      },
    ],
  },

  /* ---------------- Drywall ---------------- */
  "drywall-small-patch-kit": {
    title: "What a small patch actually takes",
    picks: [
      {
        name: "Drywall repair patch kit (mesh patch + compound + knife)",
        why: "Covers steps 2 and 3 in one box. For a hole under four inches this is the whole job — the mesh backing is what stops the compound from sinking into the cavity.",
        href: LIVE.drywallPatchKit,
      },
      {
        name: "Setting-type joint compound (20-minute)",
        why: "For the medium patch below. It cures chemically instead of drying, so it is stronger over a backed hole and lets you recoat the same afternoon rather than waiting overnight.",
        href: LIVE.settingCompound,
      },
      {
        name: "Taping knife set and sanding sponges",
        why: "Steps 3–4. A 6-inch and a 10-inch knife let you feather each coat wider than the last, and a sanding sponge knocks down high spots without scuffing through the paper the way sandpaper on a block does.",
        href: amazonSearch("drywall taping knife set sanding sponge"),
        label: "Shop taping knives and sanding sponges on Amazon",
      },
    ],
    guides: [GUIDES.drywallKits],
  },
  "drywall-patch-cost-diy": {
    title: "If you are doing the small ones yourself",
    picks: [
      {
        name: "Drywall repair patch kit (mesh patch + compound + knife)",
        why: "This is the $10–$15 kit referenced above. One kit covers several small patches, which is exactly the bundling that makes the DIY route worth it.",
        href: LIVE.drywallPatchKit,
      },
    ],
    guides: [],
  },

  /* ---------------- Dishwasher ---------------- */
  "dishwasher-install-kit": {
    title: "The three parts that are not in the dishwasher box",
    picks: [
      {
        name: "Dishwasher installation kit (supply line, fittings, tape)",
        why: "Step 3. Most dishwashers ship without the supply line or the 90-degree brass elbow that fits the inlet valve, and discovering that mid-install means a second trip to the store.",
        href: amazonSearch("dishwasher installation kit water supply line"),
        label: "Shop dishwasher install kits on Amazon",
      },
      {
        name: "Braided stainless dishwasher supply line",
        why: "If you are buying the line on its own. Braided stainless survives being flexed into position behind the unit; the old copper tube usually does not.",
        href: amazonSearch("braided stainless dishwasher supply line"),
        label: "See current options on Amazon",
      },
      {
        name: "Dishwasher power cord kit (90-degree plug)",
        why: "Step 3 again, for a plug-in install. A right-angle plug is what lets the unit sit flush against the back of the cabinet instead of standing proud by an inch.",
        href: amazonSearch("dishwasher power cord kit 90 degree plug"),
        label: "Shop dishwasher power cord kits on Amazon",
      },
    ],
  },

  /* ---------------- Electrical ---------------- */
  "gfci-swap-parts": {
    title: "What the swap needs",
    picks: [
      {
        name: "Self-testing GFCI outlet (match 15A or 20A to the circuit)",
        why: "Self-test models check their own sensing circuit and are now the standard. Match the amperage to the existing device — a 20A receptacle on a 15A circuit is the wrong direction to guess.",
        href: DP("B019YJPKWU"),
        label: "Check on Amazon",
      },
      {
        name: "Non-contact voltage tester",
        why: "Step 2 does not work without one. This is the tool that confirms the box is actually dead before your hands go in, and it is the cheapest item on this page.",
        href: LIVE.ncvt,
        label: "See the voltage tester we recommend",
      },
      {
        name: "Wire strippers",
        why: "Only if the existing conductor ends are nicked or too short to re-land cleanly. A proper stripper sizes to the gauge instead of scoring the copper the way a knife does.",
        href: amazonSearch("wire strippers 10-22 awg electrician"),
        label: "Shop wire strippers on Amazon",
      },
    ],
    guides: [GUIDES.voltageTester, GUIDES.gfciOutlets],
  },
  "ceiling-fan-install-parts": {
    title: "The two parts people discover they need halfway up the ladder",
    picks: [
      {
        name: "Non-contact voltage tester",
        why: "Step 2. A fan is on a lighting circuit shared with outlets in adjacent rooms, which is why killing the wrong breaker is such a common way to get shocked on this job.",
        href: LIVE.ncvt,
        label: "See the voltage tester we recommend",
      },
      {
        name: "Fan-rated ceiling box or brace",
        why: "Step 5 assumes the existing box is fan-rated. A standard lighting box is not — it is rated for a few pounds, not a 35 lb fixture that vibrates. If yours is not marked for fan support, this is not optional.",
        href: amazonSearch("fan rated ceiling box brace"),
        label: "Shop fan-rated boxes and braces on Amazon",
      },
      {
        name: "Fan blade balancing kit",
        why: "For the wobble check below, if the kit in the fan box is missing or you have run out of clips. A few dollars, and it is the difference between a quiet fan and one you notice every evening.",
        href: amazonSearch("ceiling fan blade balancing kit"),
        label: "Shop balancing kits on Amazon",
      },
    ],
    guides: [GUIDES.voltageTester],
  },
  "ceiling-fan-cost-diy": {
    title: "The one tool the DIY budget above assumes",
    picks: [
      {
        name: "Non-contact voltage tester",
        why: "The $25 of basic tools in the paragraph above is mostly this. Verifying the box is dead is what separates a DIY-friendly fan swap from a genuinely dangerous one.",
        href: LIVE.ncvt,
        label: "See the voltage tester we recommend",
      },
    ],
    guides: [GUIDES.voltageTester],
  },

  /* ---------------- HVAC filters ---------------- */
  "furnace-filter-merv": {
    title: "The two MERV grades this guide recommends",
    picks: [
      {
        name: "MERV 11 pleated filters (multipack)",
        why: "The default above: real filtration without straining a typical residential blower. Buy the multipack — the reason filters go unchanged is that the right one is not in the house.",
        href: DP("B00CJZA02W"),
        label: "Shop MERV 11 filters on Amazon",
      },
      {
        name: "MERV 8 pleated filters (multipack)",
        why: "The right choice if the system is over fifteen years old or the blower sounds strained. Less restriction, and a clean MERV 8 outperforms a loaded MERV 11 every time.",
        href: DP("B00CK01P2A"),
        label: "Shop MERV 8 filters on Amazon",
      },
    ],
    guides: [GUIDES.furnaceFilter],
  },
  "furnace-ignition-filter": {
    title: "If the filter is the problem",
    picks: [
      {
        name: "Pleated furnace filters (multipack)",
        why: "Check 2 above. Match the size printed on the old filter's frame, and keep a spare in the house — a clogged-filter lockout is the cheapest furnace failure there is, and the most common.",
        href: LIVE.pleatedFilters,
      },
    ],
    guides: [GUIDES.furnaceFilter],
  },

  /* ---------------- Caulk ---------------- */
  "shower-caulk-supplies": {
    title: "The three things that make this job look professional",
    picks: [
      {
        name: "100% silicone kitchen and bath caulk, mildew-resistant",
        why: "The decade-lasting option from the section above. Not paintable and harder to tool, which is exactly why the tape and smoothing steps matter.",
        href: LIVE.siliconeCaulk,
      },
      {
        name: "Caulk removal tool",
        why: "Step 1 is the step people short-cut. A plastic blade pulls the old bead out of the joint without scoring the tub finish the way a utility knife does.",
        href: LIVE.caulkRemover,
      },
      {
        name: "Dripless caulk gun with a smooth pressure rod",
        why: "Step 5 asks for one continuous bead. A cheap ratcheting gun skips, and every skip is a visible flat spot you cannot tool out.",
        href: LIVE.caulkGun,
      },
    ],
    guides: [GUIDES.caulk],
  },

  /* ---------------- Running toilet ---------------- */
  "running-toilet-parts": {
    title: "The two parts that fix almost every running toilet",
    picks: [
      {
        name: "Universal toilet flapper",
        why: "Fix #1. Take the old one to match if you can — universal flappers fit most toilets but not all, and a flapper that nearly seals wastes more water than a visible drip.",
        href: DP("B00E5ICW0E"),
        label: "Check on Amazon",
      },
      {
        name: "Fluidmaster-style universal fill valve",
        why: "Fix #3, for a valve that will not shut off or hisses. The universal anti-siphon design is the standard replacement and adjusts to tank height out of the box.",
        href: DP("B00002ND6R"),
        label: "Check on Amazon",
      },
    ],
    guides: [GUIDES.toiletParts],
  },

  /* ---------------- Water pressure ---------------- */
  "water-pressure-gauge": {
    title: "Measure before you spend anything",
    picks: [
      {
        name: "Hose-bib water pressure gauge",
        why: "Screws onto an outside spigot or the laundry tap and tells you in ten seconds whether the problem is the house supply or one fixture. Every fix further down this page depends on knowing that number.",
        href: DP("B000YMU8JC"),
        label: "Shop water pressure gauges on Amazon",
      },
    ],
    guides: [GUIDES.pressureGauge],
  },

  /* ---------------- Leak detection ---------------- */
  "leak-sensor-stack": {
    title: "The first two layers, without the install cost",
    picks: [
      {
        name: "Battery puck water sensors (multipack)",
        why: "Layer 1 above. One under each water-using fixture is the cheapest useful protection in the house, and a multipack is what makes covering five to eight spots realistic.",
        href: LIVE.leakPuck,
        label: "See the puck sensors we recommend",
      },
      {
        name: "Wi-Fi leak sensor with phone alerts",
        why: "Layer 2, for the two or three highest-risk spots. Check whether it needs a proprietary hub before buying — a sensor that only sirens in an empty basement is barely useful.",
        href: DP("B0BDF94TMV"),
        label: "Shop Wi-Fi leak sensors on Amazon",
      },
    ],
    guides: [GUIDES.leakDetector, GUIDES.shutoffValves],
  },
  "ceiling-stain-diagnosis": {
    title: "Two tools that answer \"is it still wet?\"",
    picks: [
      {
        name: "Pin-type moisture meter",
        why: "The only reliable way to tell an active leak from an old stain without opening the ceiling. Read the stain, then read known-dry drywall two feet away and compare.",
        href: LIVE.moistureMeterPin,
        label: "See the moisture meter we recommend",
      },
      {
        name: "Battery puck water sensors (multipack)",
        why: "Once you suspect the fixture above, put one under it. If the ceiling stain grows again you will know which fixture did it, instead of guessing a second time.",
        href: LIVE.leakPuck,
        label: "See the puck sensors we recommend",
      },
    ],
    guides: [GUIDES.moistureMeter],
  },

  /* ---------------- Emergencies (after the shutoff steps, never before) -- */
  "storm-tarp-stabilize": {
    title: "For the tarp-and-stabilize step — the one thing worth buying tonight",
    picks: [
      {
        name: "Heavy-duty poly tarp (12 mil or thicker, sized 4 ft past the damage on every side)",
        why: "The blue 5-mil tarps at the register shred in the first night of wind. A 12-mil or heavier tarp lasts the week or two until the roofer gets there, and a claim adjuster will reimburse it as mitigation. Buy it bigger than you think — it has to run over the ridge and be fastened on the far side, not at the damage.",
        href: amazonSearch("heavy duty tarp 12 mil waterproof 20x30"),
        label: "Shop heavy-duty tarps on Amazon",
      },
      {
        name: "Cap nails or 1x3 furring strips + roofing screws",
        why: "A tarp held down with bricks is a sail. Screw 1x3 strips through the tarp into the roof deck along every edge, or use cap nails every 12 inches — the holes are small and the roofer patches them with the rest. This is what keeps the tarp on through the second storm.",
        href: amazonSearch("plastic cap roofing nails 1 inch"),
        label: "Shop cap nails on Amazon",
      },
    ],
  },
  "pipe-burst-aftermath": {
    title: "After the water is off — what helps next",
    picks: [
      {
        name: "Stainless pipe repair clamp",
        why: "A temporary hold on a split or pinholed copper or PEX run so you can turn the main back on while you wait for the plumber. It is a stopgap, not a repair — the section still gets replaced.",
        href: DP("B0069QVSAA"),
        label: "Shop pipe repair clamps on Amazon",
      },
      {
        name: "Large wet/dry shop vac (12+ gal)",
        why: "Standing water is what turns a plumbing bill into a restoration bill. Getting it up in the first hour is the difference between drying a floor and replacing it.",
        href: LIVE.shopVacLarge,
        label: "See the large shop vac we recommend",
      },
      {
        name: "Battery puck water sensors (multipack)",
        why: "For afterwards. A burst pipe usually means the rest of the plumbing is the same age — a sensor at each fixture buys you the ten minutes this page is built around.",
        href: LIVE.leakPuck,
        label: "See the puck sensors we recommend",
      },
    ],
    guides: [GUIDES.shopVac, GUIDES.leakDetector, GUIDES.pipeClamps],
  },
  "ceiling-leak-aftermath": {
    title: "After the calls — drying out",
    picks: [
      {
        name: "Large wet/dry shop vac (12+ gal)",
        why: "For the water on the floor below. Mitigation companies charge by the day; the water you remove in the first hour is the drying time you do not pay for.",
        href: LIVE.shopVacLarge,
        label: "See the large shop vac we recommend",
      },
      {
        name: "Pin-type moisture meter",
        why: "Tells you when the ceiling and the floor above are actually dry, which is when it is safe to close up and paint. Guessing at this is how people paint over a stain that comes back.",
        href: LIVE.moistureMeterPin,
        label: "See the moisture meter we recommend",
      },
    ],
    guides: [GUIDES.shopVac, GUIDES.moistureMeter],
  },

  /* ---------------- Electrical diagnosis ---------------- */
  "breaker-diagnosis-tools": {
    title: "Two tools for the safe checks above",
    picks: [
      {
        name: "Circuit breaker finder",
        why: "A transmitter in the outlet and a receiver at the panel tells you which breaker feeds what, which is the first step in counting the load on a circuit. It replaces the flip-and-shout method entirely.",
        href: LIVE.breakerFinder,
        label: "See the breaker finder we recommend",
      },
      {
        name: "Plug-in GFCI outlet tester",
        why: "Plugs into each outlet on the circuit and shows open grounds, reversed wiring and a failing GFCI in a three-light code. It stays outside the panel, which is where this page tells you to stay.",
        href: LIVE.gfciTester,
        label: "See the outlet tester we recommend",
      },
    ],
    guides: [GUIDES.voltageTester, GUIDES.breakerFinders],
  },

  /* ---------------- Disposal jam ---------------- */
  "disposal-hum-wrench": {
    title: "If the hex wrench is missing",
    picks: [
      {
        name: "Garbage disposal jam wrench (¼-in hex)",
        why: "Step 2. Any ¼-inch hex wrench works, but the offset disposal version has the leverage to rock a stubborn flywheel without barking your knuckles on the cabinet floor.",
        href: LIVE.disposalWrench,
      },
    ],
  },

  /* ---------------- Grab bars ---------------- */
  "grab-bar-categories": {
    title: "Shopping the three categories above",
    picks: [
      {
        name: "Concealed-screw stainless steel grab bar",
        why: "The cleaner-looking option above. Whatever you pick, the listing must publish a load rating — that spec is the whole difference between a grab bar and a towel bar.",
        href: amazonSearch("concealed screw stainless steel grab bar ADA"),
        label: "Shop concealed-screw grab bars on Amazon",
      },
      {
        name: "ADA exposed-screw safety grab bar",
        why: "The utility version: cheapest, most widely stocked, and the easiest to confirm a published load rating on.",
        href: amazonSearch("ADA grab bar 250 lb rated stainless"),
        label: "Shop ADA grab bars on Amazon",
      },
      {
        name: "Grab-bar-rated toggle anchors",
        why: "Only for a tiled wall with no stud where you need the bar. Ordinary plastic drywall anchors are not rated for fall loads — this is the anchor class the section below names.",
        href: amazonSearch("grab bar toggle anchor WingIts drywall rated"),
        label: "Shop grab-bar anchors on Amazon",
      },
    ],
  },
};
