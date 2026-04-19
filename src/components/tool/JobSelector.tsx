import Link from "next/link";
import type { Job } from "@/content/jobs";

type JobSelectorProps = {
  jobs: readonly Job[];
};

const verdictColor: Record<Job["verdict"], string> = {
  "diy-recommended": "text-green-700",
  "maybe-diy": "text-amber-700",
  "hire-a-pro": "text-red-700",
};

const verdictLabel: Record<Job["verdict"], string> = {
  "diy-recommended": "DIY",
  "maybe-diy": "Maybe DIY",
  "hire-a-pro": "Hire",
};

export function JobSelector({ jobs }: JobSelectorProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {jobs.map((j) => (
        <Link
          key={j.slug}
          href={`/tools/diy-or-hire/${j.slug}`}
          className="group block rounded-lg border border-ink-200 bg-white p-5 no-underline transition-colors hover:border-navy-300 hover:shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="font-serif text-lg text-navy-900 group-hover:text-navy-700">
              {j.shortTitle}
            </span>
            <span className={`text-xs font-semibold uppercase tracking-wider shrink-0 ${verdictColor[j.verdict]}`}>
              {verdictLabel[j.verdict]}
            </span>
          </div>
          <p className="mt-2 text-sm text-ink-600">
            DIY $
            {j.cost.diy.low.toLocaleString()}–${j.cost.diy.high.toLocaleString()}
            {" · "}Pro $
            {j.cost.pro.low.toLocaleString()}–${j.cost.pro.high.toLocaleString()}
          </p>
        </Link>
      ))}
    </div>
  );
}
