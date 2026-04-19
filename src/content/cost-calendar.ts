export type CalendarTask = {
  title: string;
  cost: string;
  why: string;
};

export type CalendarMonth = {
  month: string;
  theme: string;
  subtitle: string;
  tasks: CalendarTask[];
};

export const costCalendar: readonly CalendarMonth[] = [
  {
    month: "January",
    theme: "Post-holiday system audit",
    subtitle:
      "Heating has run constantly for weeks. Now's when quiet problems show up.",
    tasks: [
      {
        title: "Replace HVAC filter",
        cost: "$10–$25",
        why: "If you ran heat daily since October, the filter is loaded. A dirty filter raises heating costs ~5% and strains the blower motor.",
      },
      {
        title: "Inspect caulking at windows and doors",
        cost: "$6–$15 caulk · $40–$80/window if hired",
        why: "Cold snaps open up failed caulk lines. Fix before the next cold week, not after.",
      },
      {
        title: "Book a spring HVAC tune-up",
        cost: "$150–$250 pro visit",
        why: "Spring schedules fill by March. Book now for $20–$40 off off-peak pricing.",
      },
    ],
  },
  {
    month: "February",
    theme: "Winter damage inventory",
    subtitle: "Before the snow melts, document what the winter has done.",
    tasks: [
      {
        title: "Inspect attic for ice-dam damage",
        cost: "Free DIY · $200–$400 pro inspection",
        why: "Ice dams push water under shingles. Stains on attic sheathing are the early warning.",
      },
      {
        title: "Ground-level roof inspection",
        cost: "Free with binoculars · $200–$400 roofer inspection",
        why: "Missing or lifted shingles are cheapest to replace before spring storms.",
      },
      {
        title: "Check gutters for ice-damage separation",
        cost: "$20–$60 hardware · $150–$400 for gutter rehang",
        why: "Frozen gutters pull away from fascia. Small gaps now become rotted fascia by summer.",
      },
    ],
  },
  {
    month: "March",
    theme: "Pre-spring maintenance",
    subtitle: "The cheapest month for almost every service — contractors have open schedules.",
    tasks: [
      {
        title: "Replace smoke + CO detector batteries",
        cost: "$10–$20 batteries · $25–$60 per new detector",
        why: "Daylight Savings is the national reminder. If a detector is >10 years old, replace the whole unit.",
      },
      {
        title: "Clean the dryer vent duct",
        cost: "DIY $15 brush kit · $100–$200 pro cleaning",
        why: "Clogged dryer vents cause ~2,900 house fires per year (NFPA). A clear vent also cuts drying time 20–40%.",
      },
      {
        title: "Check exterior paint and caulk",
        cost: "$15–$40 paint/caulk · $300–$800 for touch-up work",
        why: "Winter lifts paint at joints. Fresh caulk and spot paint prevents wood rot.",
      },
    ],
  },
  {
    month: "April",
    theme: "System turnover",
    subtitle: "Switching seasons. Three systems need waking up, one needs watching.",
    tasks: [
      {
        title: "HVAC cooling-side tune-up",
        cost: "$150–$250 pro visit",
        why: "A tech catches low refrigerant, a failing capacitor, or a dirty condenser — all cheap now, expensive in July.",
      },
      {
        title: "Activate the sprinkler system",
        cost: "DIY free · $50–$150 pro startup",
        why: "Broken heads from frost are easier to find and fix when the system first charges.",
      },
      {
        title: "Test the sump pump with a bucket of water",
        cost: "Free · $250–$600 if a new pump is needed",
        why: "Heavy spring rain is coming. A sump pump that fails at 3am costs $3,000 in finished-basement damage.",
      },
    ],
  },
  {
    month: "May",
    theme: "Pre-summer heavy use",
    subtitle: "Before you entertain on the deck, make sure the deck is safe.",
    tasks: [
      {
        title: "Check outdoor faucets for frost damage",
        cost: "$80–$200 for faucet replacement",
        why: "Frost-split fittings only leak when water runs. You want to find them in May, not during a July party.",
      },
      {
        title: "Inspect the deck: boards, railings, stairs",
        cost: "$3–$8 per board · $15–$40 per railing bracket",
        why: "Deck collapses cause thousands of ER visits per year. A railing that flexes is the first flag.",
      },
      {
        title: "Vacuum refrigerator coils",
        cost: "Free DIY · 15 minutes",
        why: "Clogged coils make the compressor work harder and cut fridge life. One of the best free-DIY wins of the year.",
      },
    ],
  },
  {
    month: "June",
    theme: "Full-summer readiness",
    subtitle: "Before you run the AC daily, check the systems it depends on.",
    tasks: [
      {
        title: "Replace weatherstripping at exterior doors",
        cost: "$8–$25 per door DIY · $80–$150 per door hired",
        why: "Cool-air loss from a bad door seal can add $15–$30/month to cooling bills.",
      },
      {
        title: "Attic inspection for roof leaks",
        cost: "Free DIY · $200–$400 pro if issues found",
        why: "Late-spring rain reveals winter damage. Catching a pinhole leak now costs 1/20 of the later ceiling repair.",
      },
      {
        title: "Clean kitchen exhaust fan and range hood filter",
        cost: "Free DIY · $15 replacement filter",
        why: "Grease buildup is a fire risk. A clean filter also moves 2x the air.",
      },
    ],
  },
  {
    month: "July",
    theme: "Mid-year deep maintenance",
    subtitle: "Three tasks that extend the life of major appliances.",
    tasks: [
      {
        title: "Flush the water heater",
        cost: "Free DIY supplies · $150–$300 pro",
        why: "Annual flushing doubles tank life — from ~8 years to 15+. One of the most overlooked high-ROI tasks.",
      },
      {
        title: "Clean the dishwasher filter and sprayer arms",
        cost: "Free · 20 minutes",
        why: "Most modern dishwashers have a removable filter at the bottom. Cleaning it fixes 80% of 'my dishwasher isn't working' calls.",
      },
      {
        title: "Test garage door balance and auto-reverse",
        cost: "Free test · $100–$200 pro tune-up",
        why: "A door that drops when disengaged has failing springs — dangerous. Auto-reverse failure has killed children.",
      },
    ],
  },
  {
    month: "August",
    theme: "Pre-fall prep",
    subtitle: "Quiet month. Use it to get ahead of fall leaf-drop and shorter days.",
    tasks: [
      {
        title: "Baseline gutter clean (pre-leaf-drop)",
        cost: "DIY free · $150–$400 pro",
        why: "Clearing summer debris now makes the fall leaf cleaning easier and catches roof-slope problems.",
      },
      {
        title: "Test outdoor lighting and timers",
        cost: "$5–$15 per bulb · $80–$200 for smart switches",
        why: "Daylight drops fast from September. Test motion sensors and timers before you need them.",
      },
      {
        title: "Touch-up exterior paint",
        cost: "$10–$50 paint supplies",
        why: "Last good painting weather before humidity and cooler nights. Small touch-ups prevent big restoration.",
      },
    ],
  },
  {
    month: "September",
    theme: "Heating system prep",
    subtitle: "Before the first cold snap, verify three safety systems.",
    tasks: [
      {
        title: "HVAC heating-side tune-up",
        cost: "$150–$250 pro visit",
        why: "A technician verifies the heat exchanger (CO safety) and gas pressure. Do this before heat is urgent.",
      },
      {
        title: "Chimney / fireplace inspection",
        cost: "$100–$300 inspection · $200–$500 sweep if needed",
        why: "Creosote buildup is the leading cause of chimney fires. Annual Level-1 inspection is the standard.",
      },
      {
        title: "Door sweeps and weatherstripping audit",
        cost: "$12–$30 per door",
        why: "You'll feel the drafts by November. Cheaper to fix now than after the bills arrive.",
      },
    ],
  },
  {
    month: "October",
    theme: "Pre-winter sealing",
    subtitle: "Last month to do outside work without freezing temperatures fighting you.",
    tasks: [
      {
        title: "Seal exterior gaps with caulk and foam",
        cost: "$10–$40 materials · $200–$400 pro air-sealing",
        why: "Pest entry, heat loss, and water infiltration all happen at the same gaps. One afternoon of sealing.",
      },
      {
        title: "Check attic insulation depth",
        cost: "Free measure · $500–$2,000 to top up",
        why: "R-49 is the standard in cold climates, R-38 in mild. Less = higher bills. A tape measure tells you.",
      },
      {
        title: "Gutter clean after leaf-drop",
        cost: "DIY free · $150–$400 pro",
        why: "Ice dams form in clogged gutters. This is the maintenance that prevents the February emergency.",
      },
    ],
  },
  {
    month: "November",
    theme: "Freeze prep",
    subtitle: "Three tasks that save thousands if a hard freeze arrives.",
    tasks: [
      {
        title: "Drain and cover outdoor faucets",
        cost: "$3–$10 per cover",
        why: "A frozen hose bib can split the indoor supply pipe. Replacement after a burst costs $500–$1,500 plus drywall.",
      },
      {
        title: "Blow out sprinkler lines",
        cost: "DIY with borrowed compressor · $75–$150 pro",
        why: "Frozen sprinkler lines crack underground. Irrigation repair is $200+ per head and requires trenching.",
      },
      {
        title: "Sump pump + battery-backup check",
        cost: "Free test · $200–$400 battery · $250–$600 new pump",
        why: "Winter power outages are when sump pumps matter most. A dead backup battery is a flooded basement.",
      },
    ],
  },
  {
    month: "December",
    theme: "Winter operating audit",
    subtitle: "Check that the systems working hardest right now are actually working right.",
    tasks: [
      {
        title: "Test every smoke and CO detector",
        cost: "$25–$60 per new detector",
        why: "Heating season is peak CO incident season. Pressing the test button isn't enough — use a can of CO simulator or aerosol tester ($15).",
      },
      {
        title: "Mid-season HVAC filter change",
        cost: "$10–$25",
        why: "A second filter replacement keeps the blower motor healthy through the coldest months.",
      },
      {
        title: "Monitor for ice dams and gutter overflow",
        cost: "$40–$100 per ice-dam heater cable if needed",
        why: "Early ice-dam signs: icicles >6 inches, water stains on interior ceilings, ice sheets on eaves. Caught early = cheap.",
      },
    ],
  },
] as const;
