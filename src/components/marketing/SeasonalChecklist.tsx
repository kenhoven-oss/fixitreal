import Link from "next/link";

type ChecklistItem = {
  title: string;
  description: string;
  timeEstimate: string;
  href?: string;
  icon: React.ReactNode;
};

type SeasonSet = {
  /** Eyebrow shown above the headline, e.g. "Seasonal focus · May". */
  eyebrow: string;
  /** Section H2. */
  title: string;
  /** Short intro paragraph below the H2. */
  intro: string;
  /** Cards rendered as the checklist. */
  items: ChecklistItem[];
};

/* ============================================================================
   Reusable card icons. Kept inline (not extracted) so each season's items
   array reads as a single self-contained block.
   ========================================================================== */

const Icon = {
  ac: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  dryer: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </svg>
  ),
  bathFan: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 5c3 2 3 5 0 7-3 2-3 5 0 7" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  gutter: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M3 10l9-6 9 6v10H3V10z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M8 15h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  caulk: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  alarm: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  furnace: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 9c2 0 2 3 0 3M14 13c2 0 2 3 0 3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  ),
  pipe: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 8h12a4 4 0 014 4v4M4 16h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3c4 5 7 8 7 12a7 7 0 11-14 0c0-4 3-7 7-12z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M5 19c4-2 9-6 12-12-1 7-5 12-12 12z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M5 19l7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
};

/* ============================================================================
   Seasonal content sets. The component picks one based on the current month,
   so the homepage stays fresh year-round without manual edits.

   Mar / Apr / May  → SPRING (pre-summer prep)
   Jun / Jul / Aug  → SUMMER (heat + storm response)
   Sep / Oct / Nov  → FALL   (pre-winter weatherization)
   Dec / Jan / Feb  → WINTER (freeze + fire risk + indoor air)
   ========================================================================== */

const SPRING: SeasonSet = {
  eyebrow: "Seasonal focus · Spring",
  title:
    "May homeowner maintenance — fix small problems before summer costs get bigger",
  intro:
    "Before summer heat and storm season turn small issues into expensive repairs, check these items now.",
  items: [
    {
      title: "Test the AC before the first heat wave",
      description:
        "Run the system through one full cool cycle now. A failed start in May is a $300 service call; the same failure in July is a $400 emergency call.",
      timeEstimate: "15 min",
      href: "/advice/ac-not-cooling",
      icon: Icon.ac,
    },
    {
      title: "Clean or check the dryer vent",
      description:
        "Lint buildup is a top home-fire cause. 45 minutes with a brush kit clears most homeowner setups and shaves drying time.",
      timeEstimate: "30–60 min",
      href: "/diy-or-hire/clean-dryer-vent",
      icon: Icon.dryer,
    },
    {
      title: "Bath fans should vent outside — verify",
      description:
        "A fan that vents into the attic or under a porch roof grows mold in the cavity. Confirm each fan terminates at a proper wall or roof cap.",
      timeEstimate: "10 min",
      href: "/home-inspection-repairs/bathroom-exhaust-fan-vent-under-porch",
      icon: Icon.bathFan,
    },
    {
      title: "Inspect gutters + downspouts after spring storms",
      description:
        "Spring debris clogs downspouts and pushes water back at the foundation. Clear them now before the summer thunderstorm pattern starts.",
      timeEstimate: "45–60 min",
      icon: Icon.gutter,
    },
    {
      title: "Walk the exterior for caulk gaps",
      description:
        "Look around windows, doors, hose bibs, and every wall penetration. A 30-minute re-caulk in May beats a $4,000 water-damage claim in July.",
      timeEstimate: "30–60 min",
      icon: Icon.caulk,
    },
    {
      title: "Replace chirping or expired smoke alarms",
      description:
        "Check the manufacture date on the back of every alarm — anything 8+ years old gets swapped now. Combo smoke+CO if you have gas.",
      timeEstimate: "30–60 min",
      href: "/diy-or-hire/smoke-detector",
      icon: Icon.alarm,
    },
  ],
};

const SUMMER: SeasonSet = {
  eyebrow: "Seasonal focus · Summer",
  title:
    "Summer homeowner maintenance — keep small problems from spiraling in the heat",
  intro:
    "Peak HVAC season, peak thunderstorm season, peak emergency-call season. These items now save the $400+ rush visits.",
  items: [
    {
      title: "Check the AC condensate drain line",
      description:
        "Clogs back water up into the air handler, then onto the ceiling below. Pour a cup of bleach into the drain access twice a year.",
      timeEstimate: "10 min",
      href: "/advice/clogged-ac-condensate-drain-line",
      icon: Icon.water,
    },
    {
      title: "Change the HVAC filter monthly during peak use",
      description:
        "A dirty filter starves the AC, freezes the coil, and can short the compressor. The cheapest $20 a homeowner spends.",
      timeEstimate: "5 min",
      href: "/advice/ac-not-cooling",
      icon: Icon.furnace,
    },
    {
      title: "Test sump pump before the next storm",
      description:
        "Pour a 5-gallon bucket into the sump pit. It should kick on and clear it. A failed sump during a power outage is a flooded basement.",
      timeEstimate: "10 min",
      href: "/advice/sump-pump-not-working",
      icon: Icon.water,
    },
    {
      title: "Walk the grading after heavy rain",
      description:
        "Watch where water flows during a storm. Pooling against the foundation is the lead cause of basement leaks.",
      timeEstimate: "15 min",
      icon: Icon.gutter,
    },
    {
      title: "Check the dryer vent termination outside",
      description:
        "Hot summer + lint inside the vent + flammable yard debris near the exterior cap is how dryer fires start. Clear it.",
      timeEstimate: "20 min",
      href: "/diy-or-hire/clean-dryer-vent",
      icon: Icon.dryer,
    },
    {
      title: "Test smoke + CO alarms",
      description:
        "Press TEST on every unit. Replace any older than 8 years (manufacture date is on the back).",
      timeEstimate: "15 min",
      href: "/diy-or-hire/smoke-detector",
      icon: Icon.alarm,
    },
  ],
};

const FALL: SeasonSet = {
  eyebrow: "Seasonal focus · Fall",
  title: "Fall maintenance — three categories that prevent winter damage",
  intro:
    "Before the first freeze, before heating-system overuse, before holiday cooking volume: walk through these items.",
  items: [
    {
      title: "Disconnect and drain garden hoses",
      description:
        "Hose left connected over winter freezes water back at the hose bib, splits the pipe inside the wall, and you find it next May. 5-minute job.",
      timeEstimate: "5 min",
      icon: Icon.pipe,
    },
    {
      title: "HVAC filter + furnace tune-up",
      description:
        "Replace the filter, schedule a furnace check. A pro visit now is a fraction of a failed-system emergency call in January.",
      timeEstimate: "20 min + pro visit",
      icon: Icon.furnace,
    },
    {
      title: "Gutter + downspout clean",
      description:
        "Clear leaves before the first freeze. Blocked gutters force water behind fascia and into ceilings.",
      timeEstimate: "45–60 min",
      icon: Icon.gutter,
    },
    {
      title: "Walk the exterior weather seal",
      description:
        "Re-caulk window frames, inspect door sweeps, seal new gaps around penetrations. Cheap energy savings and water defense.",
      timeEstimate: "60–90 min",
      icon: Icon.caulk,
    },
    {
      title: "Clean the dryer vent before holiday laundry volume",
      description:
        "Houseguests = more dryer runs = peak vent-fire season. Clear the vent before Thanksgiving, not after.",
      timeEstimate: "30–60 min",
      href: "/diy-or-hire/clean-dryer-vent",
      icon: Icon.dryer,
    },
    {
      title: "Test smoke + CO alarms",
      description:
        "Daylight savings is the classic test reminder. Any unit 8+ years old gets replaced now.",
      timeEstimate: "15 min",
      href: "/diy-or-hire/smoke-detector",
      icon: Icon.alarm,
    },
  ],
};

const WINTER: SeasonSet = {
  eyebrow: "Seasonal focus · Winter",
  title: "Winter maintenance — freeze, fire, and indoor-air checks",
  intro:
    "Cold months bring frozen pipes, dryer-vent fires, and CO risk from heating equipment. These items run defense.",
  items: [
    {
      title: "Insulate exterior-wall pipes before deep freezes",
      description:
        "Foam sleeves on any pipe in an unheated space — basement, crawl, exterior walls. A frozen burst is the #1 winter home-insurance claim.",
      timeEstimate: "30–60 min",
      href: "/emergency-repairs/pipe-burst-first-10-minutes",
      icon: Icon.pipe,
    },
    {
      title: "Know where the water main shut-off is",
      description:
        "Open it once, close it once, confirm it still moves freely. Five minutes now beats a flooded basement at 2 AM with a stuck valve.",
      timeEstimate: "5 min",
      href: "/emergency-repairs/pipe-burst-first-10-minutes",
      icon: Icon.water,
    },
    {
      title: "Verify carbon-monoxide alarms in every required location",
      description:
        "Heating systems and gas appliances run heaviest in winter. CO alarms on every level + outside every sleeping area.",
      timeEstimate: "15 min",
      href: "/tools/best-carbon-monoxide-detectors",
      icon: Icon.alarm,
    },
    {
      title: "Check the dryer vent termination",
      description:
        "Snow piles on roof caps and wraps around wall caps. Lint backup + restricted airflow is the textbook setup for a dryer-vent fire.",
      timeEstimate: "20 min",
      href: "/diy-or-hire/clean-dryer-vent",
      icon: Icon.dryer,
    },
    {
      title: "HVAC filter swap on the heat side",
      description:
        "Furnace runs constantly in winter. A dirty filter strains the blower and can shut the system down on the coldest night of the year.",
      timeEstimate: "5 min",
      icon: Icon.furnace,
    },
    {
      title: "Clear ice and debris from gutters",
      description:
        "Ice dams force snowmelt up under the shingle line and into the attic. Keep gutters clear and downspouts flowing.",
      timeEstimate: "30–60 min",
      icon: Icon.leaf,
    },
  ],
};

/**
 * Returns the right seasonal set for the current month. Exposed for testing
 * and for components that want to know the active season name. Picks
 * based on real time, not on build time, so the same deploy stays fresh
 * across season changes.
 */
export function getCurrentSeasonSet(now: Date = new Date()): SeasonSet {
  const m = now.getMonth(); // 0 = Jan
  if (m >= 2 && m <= 4) return SPRING; // Mar–May
  if (m >= 5 && m <= 7) return SUMMER; // Jun–Aug
  if (m >= 8 && m <= 10) return FALL; // Sep–Nov
  return WINTER; // Dec–Feb
}

export function SeasonalChecklist() {
  const set = getCurrentSeasonSet();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {set.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
            {set.title}
          </h2>
          <p className="mt-3 text-ink-700 leading-relaxed">{set.intro}</p>
        </div>
        <Link
          href="/home-repair-cost-calendar"
          className="shrink-0 text-sm font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
        >
          Full year-round checklist (free PDF) →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {set.items.map((item) => {
          const cardBody = (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                {item.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl text-navy-900 leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {item.description}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-600">
                {item.timeEstimate}
                {item.href && (
                  <>
                    <span aria-hidden className="mx-2 text-ink-400">
                      ·
                    </span>
                    <span className="text-navy-700">Read the guide →</span>
                  </>
                )}
              </p>
            </>
          );

          return item.href ? (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-lg bg-white p-6 md:p-7 no-underline transition-shadow hover:shadow-sm"
            >
              {cardBody}
            </Link>
          ) : (
            <div
              key={item.title}
              className="rounded-lg bg-white p-6 md:p-7 transition-shadow"
            >
              {cardBody}
            </div>
          );
        })}
      </div>
    </div>
  );
}
