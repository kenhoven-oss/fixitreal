import type { Verdict, RiskLevel } from "@/content/jobs";

type VerdictBannerProps = {
  verdict: Verdict;
  reasoning: string;
  risk: RiskLevel;
  permitRequired: boolean;
  timeMinutes: number;
  costDiyLow: number;
  costProLow: number;
};

const verdictConfig: Record<
  Verdict,
  { label: string; tone: string; bg: string; dot: string }
> = {
  "diy-recommended": {
    label: "DIY recommended",
    tone: "text-green-900",
    bg: "bg-green-50 border-green-200",
    dot: "bg-green-500",
  },
  "maybe-diy": {
    label: "Maybe DIY",
    tone: "text-amber-900",
    bg: "bg-amber-50 border-amber-200",
    dot: "bg-amber-500",
  },
  "hire-a-pro": {
    label: "Hire a pro",
    tone: "text-red-900",
    bg: "bg-red-50 border-red-200",
    dot: "bg-red-500",
  },
};

const riskLabel: Record<RiskLevel, string> = {
  low: "Low risk",
  moderate: "Moderate risk",
  high: "High risk",
  extreme: "Extreme risk",
};

export function VerdictBanner({
  verdict,
  reasoning,
  risk,
  permitRequired,
  timeMinutes,
  costDiyLow,
  costProLow,
}: VerdictBannerProps) {
  const cfg = verdictConfig[verdict];
  const hoursText =
    timeMinutes >= 60 ? `${Math.round(timeMinutes / 60)} hr` : `${timeMinutes} min`;
  const savings = costProLow - costDiyLow;

  return (
    <div className={`rounded-lg border p-6 md:p-8 ${cfg.bg}`}>
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={`mt-1 inline-block h-3 w-3 rounded-full ${cfg.dot}`}
        />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider ${cfg.tone}`}>
            Our verdict
          </p>
          <p className={`mt-1 font-serif text-2xl md:text-3xl ${cfg.tone}`}>
            {cfg.label}
          </p>
          <p className="mt-3 text-ink-800 leading-relaxed">{reasoning}</p>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-500">Risk</dt>
          <dd className="mt-0.5 font-medium text-ink-800">{riskLabel[risk]}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-500">Permit</dt>
          <dd className="mt-0.5 font-medium text-ink-800">
            {permitRequired ? "Typically required" : "Usually not required"}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-500">Time</dt>
          <dd className="mt-0.5 font-medium text-ink-800">{hoursText} (DIY)</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-500">Savings</dt>
          <dd className="mt-0.5 font-medium text-ink-800">
            {savings > 0 ? `~$${savings.toLocaleString()}` : "—"}
          </dd>
        </div>
      </dl>
    </div>
  );
}
