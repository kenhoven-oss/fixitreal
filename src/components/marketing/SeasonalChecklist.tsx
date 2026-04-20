import Link from "next/link";

type ChecklistItem = {
  title: string;
  description: string;
  timeEstimate: string;
  icon: React.ReactNode;
};

const items: ChecklistItem[] = [
  {
    title: "Gutter & downspout clean",
    description:
      "Clear debris before the first freeze. Blocked gutters force water behind fascia and into ceilings.",
    timeEstimate: "45–60 min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M3 10l9-6 9 6v10H3V10z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M8 15h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "HVAC filter + tune-up",
    description:
      "Replace the filter, schedule a furnace check. A pro visit now is a fraction of a failed-system emergency call.",
    timeEstimate: "20 min + pro visit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 9h10M7 13h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Exterior weather seal check",
    description:
      "Walk the perimeter. Re-caulk at window frames, inspect door sweeps, seal any new gaps around penetrations.",
    timeEstimate: "60–90 min",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="1.75" />
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
            Seasonal focus
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
            Fall maintenance — the three tasks that prevent winter damage
          </h2>
          <p className="mt-3 text-ink-700 leading-relaxed">
            A handful of hours in fall keeps small problems from becoming
            insurance claims. Do these three, then grab the full 12-month
            cost calendar.
          </p>
        </div>
        <Link
          href="/home-repair-cost-calendar"
          className="shrink-0 text-sm font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
        >
          Full year-round checklist (free PDF) →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg bg-white p-6 md:p-7 transition-shadow hover:shadow-sm"
          >
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
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
