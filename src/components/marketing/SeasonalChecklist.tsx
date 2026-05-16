import Link from "next/link";

type ChecklistItem = {
  title: string;
  description: string;
  timeEstimate: string;
  href?: string;
  icon: React.ReactNode;
};

/**
 * Seasonal maintenance focus, rotated by month/season. Current pass:
 * May / early-summer — the small things that prevent the much-bigger
 * problems summer surfaces (AC failure, hidden moisture, fire risk,
 * drainage damage).
 */
const items: ChecklistItem[] = [
  {
    title: "Test the AC before the first heat wave",
    description:
      "Run the system through one full cool cycle now. A failed start in May is a $300 service call; the same failure in July is a $400 emergency call.",
    timeEstimate: "15 min",
    href: "/advice/ac-not-cooling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Clean or check the dryer vent",
    description:
      "Lint buildup is a top home-fire cause. 45 minutes with a brush kit clears most homeowner setups and shaves drying time.",
    timeEstimate: "30–60 min",
    href: "/diy-or-hire/clean-dryer-vent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Bath fans should vent outside — verify",
    description:
      "A fan that vents into the attic or under a porch roof grows mold in the cavity. Confirm each fan terminates at a proper wall or roof cap.",
    timeEstimate: "10 min",
    href: "/home-inspection-repairs/bathroom-exhaust-fan-vent-under-porch",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 5c3 2 3 5 0 7-3 2-3 5 0 7" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Inspect gutters + downspouts after spring storms",
    description:
      "Spring debris clogs downspouts and pushes water back at the foundation. Clear them now before the summer thunderstorm pattern starts.",
    timeEstimate: "45–60 min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M3 10l9-6 9 6v10H3V10z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M8 15h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Walk the exterior for caulk gaps",
    description:
      "Look around windows, doors, hose bibs, and every wall penetration. A 30-minute re-caulk in May beats a $4,000 water-damage claim in July.",
    timeEstimate: "30–60 min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Replace chirping or expired smoke alarms",
    description:
      "Check the manufacture date on the back of every alarm — anything 8+ years old gets swapped now. Combo smoke+CO if you have gas.",
    timeEstimate: "30–60 min",
    href: "/diy-or-hire/smoke-detector",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
];

export function SeasonalChecklist() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Seasonal focus · May
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
            May homeowner maintenance — fix small problems before summer costs get bigger
          </h2>
          <p className="mt-3 text-ink-700 leading-relaxed">
            The six items below are cheap in May and expensive in July. Most
            are 15–60 minute jobs that head off the failures HVAC techs and
            plumbers charge emergency rates for in the heat.
          </p>
        </div>
        <Link
          href="/home-repair-cost-calendar"
          className="shrink-0 text-sm font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
        >
          Full year-round checklist (free PDF) →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
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
                    <span aria-hidden className="mx-2 text-ink-400">·</span>
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
