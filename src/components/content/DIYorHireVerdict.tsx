import type { ReactNode } from "react";

type Verdict = "diy-recommended" | "maybe-diy" | "hire-a-pro";
type RiskLevel = "low" | "moderate" | "elevated" | "high";
type Difficulty = "beginner" | "intermediate" | "advanced";
type PermitConcern = "none" | "sometimes" | "usually" | "always";

type DIYorHireVerdictProps = {
  verdict: Verdict;
  difficulty: Difficulty;
  riskLevel: RiskLevel;
  /** Plain-English time estimate (e.g. "60-90 minutes"). */
  estimatedTime: string;
  /** Dollar savings if you DIY vs hire. Free-form (e.g. "$150-$300"). */
  potentialSavings: string;
  permitConcern: PermitConcern;
  /** Specific conditions under which Ken would push the user toward hiring. */
  whenToHire: ReactNode;
};

const VERDICT_COPY: Record<
  Verdict,
  { label: string; ring: string; bg: string; text: string }
> = {
  "diy-recommended": {
    label: "DIY Recommended",
    ring: "ring-emerald-200",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
  },
  "maybe-diy": {
    label: "Borderline — Maybe DIY",
    ring: "ring-amber-200",
    bg: "bg-amber-50",
    text: "text-amber-900",
  },
  "hire-a-pro": {
    label: "Hire a Pro",
    ring: "ring-red-200",
    bg: "bg-red-50",
    text: "text-red-900",
  },
};

const RISK_LABEL: Record<RiskLevel, string> = {
  low: "Low",
  moderate: "Moderate",
  elevated: "Elevated",
  high: "High",
};

const PERMIT_LABEL: Record<PermitConcern, string> = {
  none: "Not required",
  sometimes: "Sometimes required",
  usually: "Usually required",
  always: "Required",
};

/**
 * Structured DIY-or-Hire verdict block. Reinforces the decision quickly
 * and gives Google a parseable answer chunk for "should I [repair]
 * myself?" featured snippets.
 *
 * Usage in MDX:
 *   <DIYorHireVerdict
 *     verdict="diy-recommended"
 *     difficulty="beginner"
 *     riskLevel="low"
 *     estimatedTime="45-90 minutes"
 *     potentialSavings="$150-$300"
 *     permitConcern="none"
 *     whenToHire="If the flange is cracked, the floor under the toilet is soft, or the supply valve won't close."
 *   />
 */
export function DIYorHireVerdict({
  verdict,
  difficulty,
  riskLevel,
  estimatedTime,
  potentialSavings,
  permitConcern,
  whenToHire,
}: DIYorHireVerdictProps) {
  const v = VERDICT_COPY[verdict];
  return (
    <aside
      role="note"
      aria-label="DIY or hire verdict"
      className={`my-8 rounded-lg border border-ink-200 bg-white p-5 md:p-6 ring-1 ${v.ring}`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
            DIY or Hire verdict
          </p>
          <p
            className={`mt-2 inline-block rounded-md px-3 py-1 text-sm font-semibold ${v.bg} ${v.text}`}
          >
            {v.label}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:grid-cols-4 md:text-right">
          <div className="md:text-left">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
              Difficulty
            </dt>
            <dd className="text-navy-900 capitalize">{difficulty}</dd>
          </div>
          <div className="md:text-left">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
              Risk
            </dt>
            <dd className="text-navy-900">{RISK_LABEL[riskLevel]}</dd>
          </div>
          <div className="md:text-left">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
              Time
            </dt>
            <dd className="text-navy-900">{estimatedTime}</dd>
          </div>
          <div className="md:text-left">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
              DIY savings
            </dt>
            <dd className="text-navy-900">{potentialSavings}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-4 grid gap-4 text-sm text-ink-800 md:grid-cols-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
            Permit
          </p>
          <p className="mt-1">{PERMIT_LABEL[permitConcern]}</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
            When to hire instead
          </p>
          <div className="mt-1 leading-relaxed">{whenToHire}</div>
        </div>
      </div>
    </aside>
  );
}
