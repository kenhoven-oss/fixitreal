export type Trade =
  | "plumbing"
  | "electrical"
  | "hvac"
  | "appliance"
  | "cosmetic"
  | "mechanical";

export type RiskLevel = "low" | "moderate" | "high" | "extreme";
export type Verdict = "diy-recommended" | "maybe-diy" | "hire-a-pro";

export type Job = {
  slug: string;
  name: string;
  shortTitle: string;
  longTitle: string;
  trade: Trade;
  ymyl: boolean;
  difficulty: 1 | 2 | 3 | 4 | 5;
  risk: RiskLevel;
  permit: { commonlyRequired: boolean; notes: string };
  time: { diyMinutes: number; proMinutes: number };
  cost: {
    diy: { low: number; high: number; notes?: string };
    pro: { low: number; high: number; notes?: string };
  };
  toolsNeeded: string[];
  partsNeeded: string[];
  verdict: Verdict;
  reasoning: string;
  rationale: string;
  ifYouDiy: string;
  ifYouHire: string;
  safetyNote?: string;
  faq: Array<{ question: string; answer: string }>;
  relatedArticles: {
    decision?: string;
    cost?: string;
    advice?: string[];
  };
  lastReviewed: string;
};

export const jobs: readonly Job[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "replace-toilet",
    name: "Replace a toilet",
    shortTitle: "Replace toilet",
    longTitle: "Should you replace your own toilet?",
    trade: "plumbing",
    ymyl: false,
    difficulty: 2,
    risk: "low",
    permit: { commonlyRequired: false, notes: "Not typically required for like-for-like toilet replacement." },
    time: { diyMinutes: 90, proMinutes: 60 },
    cost: {
      diy: { low: 140, high: 400, notes: "Toilet + wax ring + supply line + shims" },
      pro: { low: 300, high: 600, notes: "Typically includes removal and disposal of the old unit" },
    },
    toolsNeeded: ["adjustable wrench", "putty knife", "bucket", "utility knife", "level"],
    partsNeeded: ["toilet", "wax ring", "supply line", "closet bolts", "shims"],
    verdict: "diy-recommended",
    reasoning: "Mechanical, low-risk, well-documented. Typical DIY savings: $150–$300.",
    rationale:
      "Replacing a toilet is the kind of repair homeowners consistently overpay for. The connection points are simple — a water supply line and two bolts anchoring the toilet to a flange — and the consequence of a small leak is a noticeable puddle, not a flooded home. The hardest part is usually carrying the toilet, not installing it. If the flange and the floor around it are in good shape, this is a 90-minute DIY job with a $30 trip to the hardware store. The cases where you should hire a pro: the flange is rotted, the floor is soft, or you're moving the drain location.",
    ifYouDiy:
      "Pick up a toilet (most basic models are $120–$200), a wax ring, a new supply line, and a small bucket to catch residual water in the tank. Turn off the supply valve, flush to empty, disconnect the supply line, remove the tank, and unbolt the base. The wax ring will likely be stuck — a putty knife scrapes it off. Set the new wax ring on the flange, lower the new toilet straight down, tighten the bolts evenly (snug, not Hulk-tight — you can crack porcelain), reconnect the supply line, turn the water back on, and check for leaks.",
    ifYouHire:
      "A plumber quote in the $300–$600 range is fair for like-for-like replacement. If the quote goes over $700 without a specific reason (rotted flange, subfloor damage), get another quote. Don't pay extra for a 'haul-away fee' on a standard toilet — most plumbers include it or charge nominal ($25–$50). If the plumber recommends replacing the shutoff valve and it's more than 10 years old, that's reasonable — add $40–$80.",
    faq: [
      {
        question: "Do I need to replace the wax ring?",
        answer: "Yes, always. Wax rings are single-use — once compressed they won't reseal. A new one costs $3–$8.",
      },
      {
        question: "Can I reuse the toilet flange?",
        answer: "If it's not cracked and sits at the right height (level with or slightly above the finished floor), yes. If it's rotted plastic or the bolts are stripped, replace the flange — that's a bigger job.",
      },
      {
        question: "Does the new toilet need to be the same rough-in?",
        answer: "Yes — measure from the finished wall to the center of the closet bolts. Most homes are 12 inches; 10 and 14 exist in older homes. Buying the wrong rough-in is the most common DIY mistake on this job.",
      },
      {
        question: "How do I know if the floor is damaged?",
        answer: "Push gently on the floor around the base. Spongy or flexing = subfloor damage from a prior leak. That's a stop-and-call-a-pro moment.",
      },
    ],
    relatedArticles: {
      decision: "toilet",
      cost: "toilet-replacement",
      advice: ["signs-of-overpriced-quote"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "replace-garbage-disposal",
    name: "Replace a garbage disposal",
    shortTitle: "Replace garbage disposal",
    longTitle: "Should you replace your own garbage disposal?",
    trade: "plumbing",
    ymyl: false,
    difficulty: 2,
    risk: "low",
    permit: { commonlyRequired: false, notes: "Not typically required." },
    time: { diyMinutes: 75, proMinutes: 45 },
    cost: {
      diy: { low: 85, high: 265, notes: "Unit cost dominates — ½ HP is $100, ¾ HP is $180, 1 HP is $250" },
      pro: { low: 230, high: 500, notes: "Labor typically $120–$220 on top of unit cost" },
    },
    toolsNeeded: ["screwdriver", "channel-lock pliers", "putty knife", "bucket", "flashlight"],
    partsNeeded: ["new disposal unit", "plumber's putty or silicone", "possibly a new mounting ring"],
    verdict: "diy-recommended",
    reasoning: "Mounting hardware is standardized across brands. Savings: $150–$235.",
    rationale:
      "Garbage disposals sound intimidating because they're electrical and plumbed and under the sink — but the connection is simpler than a toilet. Most units share a standard InSinkErator-compatible mount, so if you have a disposal now, replacing it is usually a matter of twisting the old one off, twisting the new one on, and reconnecting the drain and power. The main complications are (1) the existing mount is a different brand — requires a new mounting ring — and (2) the power is hardwired instead of plugged in, which just means a few extra wire-nut connections. This is one of the highest-savings DIYs in the kitchen.",
    ifYouDiy:
      "Buy a unit matched to your household (½ HP for 1–2 people, ¾ HP for a family, 1 HP if you run it hard). Turn off the circuit breaker. Disconnect the drain line and dishwasher hose. Support the old unit with one hand and twist the mounting ring counterclockwise to release — it's heavy, don't drop it on your face. Transfer the mounting ring to the new unit if compatible, or install the new mount if not. Connect the drain line and dishwasher hose, attach wiring (black to black, white to white, green to ground) if hardwired, twist the unit into the mount. Run water and test.",
    ifYouHire:
      "A plumber or handyman quote of $230–$500 total (including a mid-range disposal) is fair. If the quote is $600+ without specific justification (e.g., they're rerouting plumbing or converting from hardwired to plug), you're being overcharged. Don't pay for 'disposal specialty tools' or separate 'electrical fees' for what is a 10-minute wire connection.",
    faq: [
      {
        question: "Do I need to match the brand?",
        answer: "No — most disposals use a standard InSinkErator-style mount. If yours doesn't, the new unit may include a new mounting ring.",
      },
      {
        question: "What HP do I need?",
        answer: "½ HP for small households with light use, ¾ HP for average family cooking, 1 HP if you cook a lot of fibrous vegetables or have a septic system. Don't oversize — more HP = louder, not better.",
      },
      {
        question: "Is it safe to cut the old one off if the wiring is stuck?",
        answer: "Don't cut through wiring. Turn off the breaker, then cut wire nuts off and replace them on reassembly. Verify power is off with a non-contact tester before touching wires.",
      },
    ],
    relatedArticles: {
      decision: "garbage-disposal",
      cost: "garbage-disposal-replacement",
      advice: ["signs-of-overpriced-quote"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "install-ceiling-fan",
    name: "Install a ceiling fan",
    shortTitle: "Install ceiling fan",
    longTitle: "Should you install your own ceiling fan?",
    trade: "electrical",
    ymyl: true,
    difficulty: 3,
    risk: "moderate",
    permit: { commonlyRequired: false, notes: "Usually not required if replacing an existing fixture; new circuits or new boxes may require a permit — check locally." },
    time: { diyMinutes: 120, proMinutes: 75 },
    cost: {
      diy: { low: 65, high: 250, notes: "Fan unit + fan-rated box if needed" },
      pro: { low: 200, high: 600, notes: "Electrician labor $150–$400 plus unit cost" },
    },
    toolsNeeded: ["screwdriver", "wire stripper", "non-contact voltage tester", "ladder", "drill (possibly)"],
    partsNeeded: ["ceiling fan", "fan-rated electrical box (if existing box isn't rated)", "wire nuts"],
    verdict: "maybe-diy",
    reasoning: "Wiring is straightforward if the existing box is fan-rated. If not, you're adding structural and electrical work.",
    rationale:
      "Ceiling fan installation is the middle case of DIY electrical. The wiring is basic — black to black, white to white, ground to ground, with an optional separate wire for a pull-chain or wall-switched light kit. The catch is the box: a standard light-fixture box is not rated to hold the 15–25 pounds of a spinning fan, and a fan installed on an un-rated box will eventually fall. If your existing fixture is a fan, the box is already fan-rated. If it's a light, you need to pull the old box out, fit a fan-rated box (often a saddle-brace between joists), and reinstall. That's the threshold. Below it, DIY is fine. Above it, you're cutting drywall — hire a pro.",
    ifYouDiy:
      "Turn off the circuit at the panel and verify with a non-contact tester. Remove the existing fixture. Check the box: if it has 'fan-rated' stamped on it or is a clearly-braced metal box bolted between joists, continue. If it's a thin blue plastic box on a single nail, stop and replace with a fan-rated saddle-brace box before going further. Assemble the fan on the floor per instructions (blades usually go on last). Hang the motor from the ceiling hook if provided. Connect: hot-to-hot, neutral-to-neutral, ground-to-ground. If the fan has a light kit, there's a separate blue or red wire. Install the canopy, attach blades, restore power, test.",
    ifYouHire:
      "An electrician quote of $200–$400 labor for a straightforward fan swap is fair. Expect $400–$600 total if a fan-rated box needs to be installed (involves drywall work). Don't pay extra for 'balancing' — fans come with balancing kits. If the electrician recommends a separate switch or adding a wall dimmer, that's a reasonable addition ($80–$200 depending on wiring run).",
    safetyNote:
      "Electrical work can cause injury or fire. Never work on a circuit without verifying power is off at the breaker AND testing with a non-contact voltage tester. If you're unsure about any step — especially whether a box is fan-rated — hire a licensed electrician. This guide is not a substitute for a licensed electrician on work that may be subject to local permit requirements.",
    faq: [
      {
        question: "How do I know if my box is fan-rated?",
        answer: "It should be stamped 'fan-rated' or 'suitable for fan support' on the box itself. Standard plastic boxes on a single nail are not rated. If in doubt, replace the box.",
      },
      {
        question: "Does the fan need its own circuit?",
        answer: "No — it can share a circuit with lights. Most fans pull under 1 amp even with a light kit.",
      },
      {
        question: "Do I need a permit?",
        answer: "Usually not for replacing an existing fixture, but yes if you're adding a new circuit or new box location. Rules vary by jurisdiction — your city's building department website is the authoritative answer.",
      },
      {
        question: "Is aluminum wiring a red flag?",
        answer: "Yes. If your home was built 1965–1975 and has aluminum branch wiring, do not DIY any electrical. Aluminum connections require specific techniques and torque ratings — get a licensed electrician.",
      },
    ],
    relatedArticles: {
      decision: "ceiling-fan",
      advice: ["vetting-a-contractor", "signs-of-overpriced-quote"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "install-dishwasher",
    name: "Install a dishwasher",
    shortTitle: "Install dishwasher",
    longTitle: "Should you install your own dishwasher?",
    trade: "appliance",
    ymyl: false,
    difficulty: 3,
    risk: "low",
    permit: { commonlyRequired: false, notes: "Typically not required for like-for-like replacement." },
    time: { diyMinutes: 150, proMinutes: 90 },
    cost: {
      diy: { low: 400, high: 900, notes: "Unit cost $350–$800 + hookup supplies $30–$80" },
      pro: { low: 700, high: 1400, notes: "Includes install labor $150–$400 and haul-away of old unit" },
    },
    toolsNeeded: ["adjustable wrench", "screwdriver", "level", "pliers", "flashlight", "bucket"],
    partsNeeded: ["dishwasher", "supply line (braided steel)", "drain hose (if not included)", "possibly an airgap fitting"],
    verdict: "maybe-diy",
    reasoning: "Mechanical work is easy. The plumbing and electrical connections are more involved than average.",
    rationale:
      "A dishwasher install is fundamentally three connections: hot water supply, a drain hose looped up to the sink, and a power connection (either plug-in or hardwired). Each is simple in isolation. The work is fiddly mostly because it happens in a cabinet-sized space, lying on your back, with 40 lbs of appliance you're trying not to scratch. If you're comfortable with the three jobs individually — tightening a supply line, looping a drain hose, making a wire nut connection — it's a reasonable DIY. If you've never done any of them, it's a long afternoon of YouTube and three trips to Home Depot. The big gotcha is local code on the air gap: some municipalities require it, others don't. Check before you buy.",
    ifYouDiy:
      "Turn off the circuit and the hot-water supply under the sink. Disconnect the old unit's water, drain, and power, then slide it out (it'll drip — have a bucket). Slide the new unit in partway. Connect the hot-water supply to the inlet valve (a braided steel line with a 90° elbow is standard), run the drain hose up to the sink with a high loop or air-gap fitting per local code, and make the power connection. Level the unit — this matters a lot for door alignment and drainage. Push it fully into the cabinet, secure it to the underside of the counter, restore power and water, run a test cycle.",
    ifYouHire:
      "A plumber or appliance installer quote of $150–$400 for the install itself (not including the unit) is fair. $500+ needs justification. Ask specifically whether they'll include an air gap if required, and whether haul-away of the old unit is included. Both should be yes without extra charge.",
    faq: [
      {
        question: "Do I need an air gap?",
        answer: "Required in California and some other jurisdictions. Elsewhere a high drain loop is often acceptable. Your local plumbing code is the authoritative source.",
      },
      {
        question: "Can I convert from hardwired to plug-in?",
        answer: "Yes — most dishwashers come with a plug-in kit, or you can buy one. But the outlet has to be a dedicated circuit and accessible.",
      },
      {
        question: "What if there's no existing dishwasher and I'm adding one?",
        answer: "Then it's a much bigger job — you may need a new branch circuit, supply line tee, and drain connection. Hire a pro.",
      },
      {
        question: "How do I level it?",
        answer: "Adjustable feet at the base. Level front-to-back and side-to-side. If the kitchen floor slopes, level the unit itself — not relative to the floor.",
      },
    ],
    relatedArticles: {
      decision: "dishwasher",
      advice: ["vetting-a-contractor"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "replace-water-heater",
    name: "Replace a water heater",
    shortTitle: "Replace water heater",
    longTitle: "Should you replace your own water heater?",
    trade: "plumbing",
    ymyl: true,
    difficulty: 5,
    risk: "high",
    permit: {
      commonlyRequired: true,
      notes: "Permits are required in most jurisdictions. Gas connections and code-mandated items (expansion tank, drip pan, seismic straps, pan drain, T&P valve routing) are inspected.",
    },
    time: { diyMinutes: 300, proMinutes: 180 },
    cost: {
      diy: { low: 550, high: 1100, notes: "Tank + fittings + permit + code items" },
      pro: { low: 1350, high: 2400, notes: "Includes tank, labor, permit, haul-away, code upgrades" },
    },
    toolsNeeded: ["pipe wrench", "tubing cutter", "torch (if sweat fittings)", "voltage tester", "garden hose", "helper"],
    partsNeeded: ["new water heater", "supply lines / flex connectors", "T&P valve discharge pipe", "expansion tank", "seismic straps (West Coast)", "drip pan with drain"],
    verdict: "hire-a-pro",
    reasoning: "Gas connections, permits, expansion tanks, and code-mandated items. The cost difference doesn't justify the risk.",
    rationale:
      "Water heater replacement is the job where the homeowner overconfidence trap catches the most people. The plumbing connections are not hard. But the peripheral requirements — a properly sized expansion tank matched to your municipal pressure, a drip pan with an active drain or alarm, T&P valve discharge routed to a safe location, seismic strapping (West Coast), a proper sediment trap on gas lines, and code-compliant venting for gas units — turn a simple swap into a system. Local inspectors fail DIY water-heater installs constantly, usually not because the homeowner couldn't connect the pipes but because they skipped one or two of the code items. The permit requirement alone makes this a 'hire it' job in most jurisdictions: skipping the permit voids homeowners insurance coverage for water damage if the tank fails.",
    ifYouDiy:
      "Don't, unless you've done it before and have a licensed plumber review your work. If you insist: pull the permit first. Study the code items required for your jurisdiction. Budget for the expansion tank, drip pan, and T&P discharge routing on top of the unit cost. Verify gas connections with a licensed plumber before lighting; a leak tester is not optional. After install, call for inspection before drywalling in or hiding any connections. Realistically, you're saving $600–$1,200 compared to hiring — at the cost of an entire weekend, a permit fee, inspection coordination, and personal exposure to a fail/leak/fire scenario if something's wrong.",
    ifYouHire:
      "A $1,350–$2,400 quote for a standard 50-gallon replacement is fair. Verify it includes: the permit, haul-away of the old unit, the expansion tank, any code-required upgrades (drip pan, straps), and labor to route the T&P discharge. $2,500–$3,500 is reasonable for tankless conversions or complex installs (moving location, upsizing, gas line work). Anything over $4,000 on a simple swap without clear justification is overpriced — get another quote. Ask for the permit number before you pay.",
    safetyNote:
      "Water heaters involve natural gas or 240V electric, pressurized water, and carbon-monoxide-producing combustion (gas units). Mistakes cause flooding, explosions, carbon monoxide poisoning, or fire. This is a licensed-plumber-and-permit job in almost every US jurisdiction. If you proceed without professional help and a permit, you may void homeowners insurance coverage for any resulting damage.",
    faq: [
      {
        question: "Why do I need a permit for a like-for-like replacement?",
        answer: "Because code requirements have likely changed since your original install — expansion tanks, drip pans, seismic strapping, and TP discharge rules are updated frequently. The inspection protects the next buyer (and you) from hidden problems.",
      },
      {
        question: "Gas vs electric — does it matter for this decision?",
        answer: "Both are YMYL. Gas has added combustion and CO risk. Electric has 240V risk. Neither is DIY-friendly for a non-professional.",
      },
      {
        question: "How much can I realistically save by DIY-ing?",
        answer: "$500–$1,000 if everything goes right. Much less once you account for permit fees, the expansion tank you'd buy anyway, and the risk-adjusted cost of potential failure.",
      },
      {
        question: "What about tankless?",
        answer: "Tankless installation is dramatically harder than tank replacement — larger gas lines, dedicated combustion venting, often new electrical. This is a specialty pro job.",
      },
    ],
    relatedArticles: {
      cost: "water-heater-replacement",
      advice: ["vetting-a-contractor", "signs-of-overpriced-quote", "hidden-fees"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "install-garage-door-opener",
    name: "Install a garage door opener",
    shortTitle: "Install garage door opener",
    longTitle: "Should you install your own garage door opener?",
    trade: "mechanical",
    ymyl: true,
    difficulty: 4,
    risk: "high",
    permit: { commonlyRequired: false, notes: "Typically not required for the opener itself, but any changes to the door or spring system may require one." },
    time: { diyMinutes: 240, proMinutes: 120 },
    cost: {
      diy: { low: 200, high: 400, notes: "Opener unit + mounting hardware" },
      pro: { low: 400, high: 700, notes: "Labor $200–$350 plus unit" },
    },
    toolsNeeded: ["socket set", "drill", "ladder", "level", "wire stripper", "stud finder"],
    partsNeeded: ["garage door opener", "mounting brackets", "sensor wiring", "possibly a new header bracket"],
    verdict: "hire-a-pro",
    reasoning: "The opener itself is DIY-able. But if the existing torsion springs are old, touching them while working overhead can kill or maim.",
    rationale:
      "The opener motor, rail, and sensors are mechanical installation — bolts, brackets, low-voltage wiring. If your existing garage door is properly balanced and the torsion springs are in good shape, it's a long afternoon of DIY. The problem is you often don't know the spring condition until you're halfway through the install. A torsion spring under tension — the ones at the top of most residential garage doors — stores enough energy to break bones or kill you if it snaps. Replacing or adjusting springs is the 'never DIY' part of garage doors, and installing a new opener often reveals spring problems. Factor in the injury rate (~30,000 ER visits per year from garage doors) and the cost-delta ($200–$300 saved) doesn't justify the risk for most homeowners.",
    ifYouDiy:
      "Verify your existing door is properly balanced — open it halfway, let go, and it should stay. If it drops or springs up, your springs are off and you should stop and call a pro. If balanced, disconnect any existing opener. Assemble the rail per the opener manual, mount the header bracket, hang the motor, connect the trolley to the door. Install photo-eye safety sensors near the floor on each side. Low-voltage wiring for sensors and wall console is polarity-insensitive. Program the remotes. Test the auto-reverse safety by blocking the sensors and placing a 2x4 flat under the door (the door should reverse on contact).",
    ifYouHire:
      "$400–$700 is the fair range for a standard residential opener install. $800+ should include upgrades like a belt-drive unit, MyQ compatibility, or battery backup. Ask explicitly whether the installer will inspect the spring system at no charge and call out anything that needs service — a responsible installer will do this.",
    safetyNote:
      "Garage door torsion springs are under extreme tension and cause serious injuries, including fatalities, every year. Never attempt to adjust, loosen, or remove torsion springs without professional training and the correct winding bars. The auto-reverse safety on a garage door must be tested after any install — a door that doesn't auto-reverse has killed children.",
    faq: [
      {
        question: "What if my old opener still works?",
        answer: "Ask why you're replacing it. If it's 15+ years old, pre-photo-eye (no safety sensors), or uses DIP-switch codes (security risk), replacement is warranted. If it works and has photo-eyes, consider leaving it.",
      },
      {
        question: "Chain drive vs belt drive?",
        answer: "Belt is quieter; chain is cheaper and more durable. For attached garages where noise matters, belt. For detached or low-use, chain is fine.",
      },
      {
        question: "Do I need a licensed pro?",
        answer: "Not for the opener. But if any spring work is needed (and it often is), absolutely yes.",
      },
      {
        question: "How do I test auto-reverse?",
        answer: "Place a 2x4 flat on the ground under the door; the door should reverse on contact. Separately, break the photo-eye beam while the door is closing — it should reverse. Both tests should pass every time.",
      },
    ],
    relatedArticles: {
      decision: "garage-door-opener",
      advice: ["vetting-a-contractor"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "replace-faucet",
    name: "Replace a faucet",
    shortTitle: "Replace faucet",
    longTitle: "Should you replace your own faucet?",
    trade: "plumbing",
    ymyl: false,
    difficulty: 2,
    risk: "low",
    permit: { commonlyRequired: false, notes: "Not required." },
    time: { diyMinutes: 75, proMinutes: 45 },
    cost: {
      diy: { low: 80, high: 300, notes: "Faucet $60–$250 + supply lines" },
      pro: { low: 200, high: 500, notes: "Labor $130–$250 plus faucet" },
    },
    toolsNeeded: ["basin wrench", "adjustable wrench", "bucket", "towel", "flashlight"],
    partsNeeded: ["faucet", "supply lines (braided stainless)", "plumber's tape"],
    verdict: "diy-recommended",
    reasoning: "One of the highest DIY savings in plumbing. Most of the job is working upside-down in a cabinet.",
    rationale:
      "Faucet replacement is the platonic DIY-plumbing task. The connections are standardized, the consequences of a small mistake are visible (a slow drip under the sink), and no specialized tools are needed beyond a basin wrench. The hardest part is the physical position — you're on your back in a cramped cabinet with a flashlight balanced on your chest, reaching up to connect supply lines you can barely see. Budget 45 minutes if you've done it before, 90 minutes the first time. Most homeowner horror stories involve not shutting off the supply valves completely — if yours are old quarter-turn valves, test them before starting.",
    ifYouDiy:
      "Shut off both supply valves under the sink. Test that water stops by turning the faucet on. Disconnect the supply lines (bucket under the connections). From above, remove any decorative caps and unscrew the faucet handles. From below, use a basin wrench to reach the mounting nuts. Lift the old faucet out. Clean the sink surface. Install the new faucet per instructions — typically one or three holes, with a deck plate if downsizing. Connect new braided-stainless supply lines (always use new lines, never reuse). Turn water on slowly and check for leaks. Tighten anything that drips.",
    ifYouHire:
      "A plumber or handyman quote of $200–$400 for the install (faucet supplied by you) is fair. If a trip charge + minimum visit adds up to $250 for a 30-minute job, that's normal. If it's over $500 with no specific reason, get another quote.",
    faq: [
      {
        question: "Do I need to replace the supply lines?",
        answer: "Yes — always use new braided-stainless lines. Reusing old lines is the source of most post-install leaks.",
      },
      {
        question: "Three-hole vs one-hole?",
        answer: "Measure the existing holes. One-hole faucets can usually cover three with a deck plate; three-hole faucets don't fit in one-hole sinks without drilling.",
      },
      {
        question: "What if the shutoff valve is leaking or won't close?",
        answer: "Stop and replace the shutoff valve first. This is still DIY-able but turns a 1-hour job into a 2-hour job and requires shutting off the main water supply.",
      },
    ],
    relatedArticles: {
      cost: "toilet-replacement",
      advice: ["signs-of-overpriced-quote"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "unclog-drain",
    name: "Unclog a drain",
    shortTitle: "Unclog drain",
    longTitle: "Should you unclog your own drain?",
    trade: "plumbing",
    ymyl: false,
    difficulty: 1,
    risk: "low",
    permit: { commonlyRequired: false, notes: "Not required." },
    time: { diyMinutes: 30, proMinutes: 60 },
    cost: {
      diy: { low: 5, high: 50, notes: "Plunger + drain snake + patience" },
      pro: { low: 150, high: 450, notes: "Plumber call-out fee + minimum labor" },
    },
    toolsNeeded: ["plunger", "drain snake (25-foot)", "bucket", "gloves"],
    partsNeeded: ["drain snake", "optional: enzyme drain cleaner"],
    verdict: "diy-recommended",
    reasoning: "The default answer. A $20 drain snake handles 90% of residential clogs without chemicals.",
    rationale:
      "This is the most overcharged routine repair in home plumbing. A plumber will charge you $150–$400 to do a 10-minute job with a tool you can own for $20. For anything except main sewer-line backups (water coming up from multiple drains at once, sewage in the tub, etc.), a manual drain snake clears the clog. Chemical drain cleaners — especially Drano and Liquid-Plumr — are corrosive to older pipes and do not work on hair/grease clogs as well as a snake does. Skip them. For kitchen drains: hot water plus dish soap plus a plunger handles many clogs. For bathroom drains: remove the stopper, snake the trap, done. Call a pro only when multiple drains are slow simultaneously (suggests the main line) or when water is backing up into other fixtures.",
    ifYouDiy:
      "For a sink: run hot water, add a squeeze of dish soap, let it sit for 5 minutes, then plunge. If that doesn't clear it, put a bucket under the trap and unscrew the trap (the curved section under the sink) — most clogs are right there. For a tub: remove the stopper (it unscrews or lifts out), insert a drain snake, crank it slowly into the drain until you feel resistance, then pull back — the hair ball will come with it.",
    ifYouHire:
      "Only when: multiple drains are slow simultaneously (possible main line), sewage is backing up, or a snake can't clear the blockage after 15 minutes of effort. Fair price for a single drain: $150–$300. Main-line clearing (with a power auger or hydro-jet): $300–$600. If the plumber recommends a camera inspection, that's a real diagnostic tool for recurring clogs — $200–$400 is fair.",
    faq: [
      {
        question: "What about Drano?",
        answer: "Avoid it. It's corrosive to older pipes, ineffective on most real clogs, and dangerous if it splashes. Mechanical clearing (snake, plunger) is strictly better.",
      },
      {
        question: "How do I tell if it's a main-line issue?",
        answer: "Multiple drains slow at the same time. Flushing the toilet causes the tub to bubble. Sewage smell from drains. All signal a main-line issue — call a pro.",
      },
      {
        question: "Is hydro-jetting worth it?",
        answer: "For a recurring clog or a line with grease buildup, yes. For a one-time clog, overkill — snake first.",
      },
    ],
    relatedArticles: {
      advice: ["signs-of-overpriced-quote", "hidden-fees"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "replace-outlet-gfci",
    name: "Replace an outlet or GFCI",
    shortTitle: "Replace outlet / GFCI",
    longTitle: "Should you replace your own outlet or GFCI?",
    trade: "electrical",
    ymyl: true,
    difficulty: 3,
    risk: "high",
    permit: { commonlyRequired: false, notes: "Like-for-like outlet replacement typically does not require a permit. Circuit changes, new locations, or service upgrades do." },
    time: { diyMinutes: 30, proMinutes: 30 },
    cost: {
      diy: { low: 15, high: 40, notes: "Outlet or GFCI itself" },
      pro: { low: 150, high: 300, notes: "Electrician call-out fee + minimum labor" },
    },
    toolsNeeded: ["voltage tester (non-contact + circuit tester)", "screwdriver", "wire stripper (sometimes)"],
    partsNeeded: ["new outlet or GFCI"],
    verdict: "maybe-diy",
    reasoning: "Technically simple. But it's electrical, and mis-wired GFCIs cause the exact fires they're designed to prevent.",
    rationale:
      "Outlet replacement is borderline. The mechanical act is three screws and two wires, and for someone familiar with electrical work it's a 20-minute job. But the failure modes are serious: reversing hot and neutral wires can cause appliances to fault. A GFCI wired with line and load swapped won't trip when it should. A loose ground wire can make a metal appliance case live. Homeowners who are comfortable with the concept of turning off a breaker, using a voltage tester correctly, and identifying hot/neutral/ground by color can do this job safely. Homeowners who are uncertain about any of those three things should hire an electrician — a $200 call-out beats an electrical fire or electrocution.",
    ifYouDiy:
      "Turn off the breaker that controls the outlet. Verify with a non-contact voltage tester at the outlet — touch one lead to each slot plus the faceplate screw. Remove the faceplate and unscrew the outlet from the box. Before disconnecting any wires, note the orientation: hot (black) to brass-colored screws, neutral (white) to silver screws, ground (bare copper or green) to the green screw. On GFCIs, 'LINE' and 'LOAD' terminals are labeled and are not interchangeable — the supply wire from the breaker goes to LINE. Transfer one wire at a time to the new outlet to avoid confusion. Reinstall, restore power, test with a plug-in circuit tester.",
    ifYouHire:
      "An electrician will charge $150–$250 for a single outlet replacement (mostly the trip charge and minimum time). That's fair — they aren't gouging, it's the minimum viable commercial visit. If you need multiple outlets done at once, the price per outlet drops significantly — ask for a bulk rate. A full kitchen GFCI code-compliance update ($250–$600) is reasonable for an older home.",
    safetyNote:
      "Electrical work can cause injury, electrocution, or fire. Always verify power is off at the breaker AND at the outlet with a voltage tester before touching wires. If you see aluminum wiring (silver, dull), knob-and-tube, or any wire nuts melted or burned, stop and call a licensed electrician. GFCI outlets wired incorrectly may look fine but fail to protect you — test with a GFCI tester after installation.",
    faq: [
      {
        question: "How do I test a GFCI after install?",
        answer: "Plug in a $10 GFCI tester from a hardware store. Press the 'test' button on the tester. The GFCI should trip. Press reset on the GFCI. If it doesn't trip, it's wired incorrectly — stop using it and either redo the wiring or call an electrician.",
      },
      {
        question: "Line vs load terminals?",
        answer: "On a GFCI: LINE is the supply wire from the breaker, LOAD is for outlets downstream that you want protected by this GFCI. Swapping them means the GFCI doesn't protect anything.",
      },
      {
        question: "What if there are more than 2 wires per screw?",
        answer: "Use the 'pigtail' method — connect all hot wires together with a wire nut along with a short piece of wire that goes to the outlet. Do not stuff multiple wires under one screw.",
      },
      {
        question: "Aluminum wiring?",
        answer: "Hard stop. Aluminum requires CO/ALR-rated outlets, specific torque settings, and anti-oxidant paste. This is a licensed-electrician job, not a DIY.",
      },
    ],
    relatedArticles: {
      advice: ["vetting-a-contractor", "signs-of-overpriced-quote"],
    },
    lastReviewed: "2026-04-19",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "replace-panel",
    name: "Replace an electrical panel",
    shortTitle: "Replace electrical panel",
    longTitle: "Should you replace your own electrical panel?",
    trade: "electrical",
    ymyl: true,
    difficulty: 5,
    risk: "extreme",
    permit: {
      commonlyRequired: true,
      notes: "Permit required in every US jurisdiction. Utility coordination needed to de-energize the service drop. Inspection mandatory.",
    },
    time: { diyMinutes: 0, proMinutes: 480 },
    cost: {
      diy: { low: 0, high: 0, notes: "Not recommended" },
      pro: { low: 1500, high: 4500, notes: "Includes panel, breakers, permit, utility coordination, labor, inspection" },
    },
    toolsNeeded: [],
    partsNeeded: [],
    verdict: "hire-a-pro",
    reasoning: "Life safety. Permit required. Utility coordination required. This is the one where DIY injures and kills homeowners every year.",
    rationale:
      "Panel replacement is the job we unambiguously recommend hiring. The service-entrance conductors coming into a residential panel are typically 200-amp at 240 volts — enough to electrocute instantly, vaporize tools, and start fires. The utility must de-energize the service drop, which requires coordination and a permit. The work must be inspected. Mis-wired panels cause house fires months later. This is not a cost-savings opportunity for DIY — it's the category of work that every electrical safety authority and every insurance policy draws a line at. If anyone tells you they've DIY'd a panel swap, what they mean is they committed a code violation, and the next homeowner (or fire inspector) will eventually discover it.",
    ifYouDiy:
      "Don't. Unlike most hire-a-pro jobs on this site, there is no responsible DIY path for a main panel swap — not even with permits and an inspector's blessing. The service-entrance conductors are live at 240V and 100–200 amps from the utility, cannot be safely de-energized without their coordination, and can electrocute instantly or arc-flash hot enough to vaporize tools. Mis-torqued lugs, misidentified neutrals, and un-bonded grounds cause fires weeks or months after the work looks fine. If the $1,500–$4,500 hiring range feels steep, get a second licensed quote — not a tutorial.",
    ifYouHire:
      "A panel replacement quote in the $1,500–$4,500 range is normal, varying based on amp service (100 vs 200), panel brand (basic Square D vs premium Siemens/Eaton), any wiring remediation, and whether the meter and service drop need upgrades. Over $5,000 on a standard residential 200-amp swap without clear justification (buried service, ground-mount enclosure, service upgrade from 100 to 200 amp) warrants a second quote. Verify the permit number is pulled before work starts, and hold final payment until the inspection passes.",
    safetyNote:
      "Electrical panel work involves live 240V service conductors that can kill instantly. No DIY homeowner should perform this work. Every US jurisdiction requires a permit and licensed electrician for panel replacement. Insurance policies generally void coverage for damage resulting from unpermitted electrical work.",
    faq: [
      {
        question: "Can I at least replace breakers myself?",
        answer: "Individual breakers in an already-installed panel — cautiously, yes, if you're comfortable with the protocol: turn off main breaker, verify panel is dead with a voltage tester, swap the breaker. But touching the bus bars or service conductors is never DIY.",
      },
      {
        question: "Why is it so expensive?",
        answer: "Permit fees ($150–$500), utility coordination ($200–$500 sometimes), the panel itself ($200–$600), 8–15 hours of skilled labor at $100–$200/hr, and inspection fees. The price reflects real cost.",
      },
      {
        question: "Do I need to upgrade if I have a Federal Pacific, Zinsco, or Pushmatic panel?",
        answer: "Yes, strongly. These panels have well-documented failure modes (breakers that don't trip) and are frequently flagged by home inspectors and insurance companies. Budget for replacement.",
      },
      {
        question: "How long does it take?",
        answer: "A licensed electrician needs 6–10 hours on a standard swap. The utility may be scheduled for 1–2 hours of that window to de-energize the service.",
      },
    ],
    relatedArticles: {
      advice: ["vetting-a-contractor", "signs-of-overpriced-quote"],
    },
    lastReviewed: "2026-04-19",
  },
] as const;

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((j) => j.slug);
}

export function getJobsByVerdict(verdict: Verdict): Job[] {
  return jobs.filter((j) => j.verdict === verdict);
}
