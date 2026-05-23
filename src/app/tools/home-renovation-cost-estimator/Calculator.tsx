"use client";

import { useMemo, useState } from "react";
import {
  calculateContractorEstimate,
  type ContractorEstimateInput,
} from "@/lib/calculators/contractor-estimate";
import { formatUSD } from "@/lib/calculators/shared";

/**
 * Home Renovation Cost Estimator — homeowner-angled wrapper around the
 * contractor cost-plus estimating math from PrintReadyForms's shared
 * calculator library.
 *
 * Inputs are framed for homeowners (square footage, finish level) and mapped
 * internally to labor + materials + overhead + markup before calling the
 * pure-math calculator function. The output is what to expect a licensed
 * contractor to bid for the work.
 */

type ProjectType =
  | "kitchen-remodel"
  | "bathroom-remodel"
  | "room-addition"
  | "basement-finish"
  | "deck"
  | "interior-paint"
  | "flooring";

type FinishLevel = "basic" | "midrange" | "premium";

// Cost-per-sqft benchmarks. These are deliberately conservative national
// midpoints — actual costs vary 30%+ by metro and 50%+ by contractor.
// Sources: industry cost guides (Remodeling Magazine Cost vs. Value 2024,
// HomeAdvisor 2025, NAHB 2024) rounded to memorable numbers.
const PROJECT_BENCHMARKS: Record<
  ProjectType,
  { label: string; perSqft: Record<FinishLevel, number>; defaultSqft: number }
> = {
  "kitchen-remodel": {
    label: "Kitchen remodel",
    perSqft: { basic: 150, midrange: 300, premium: 600 },
    defaultSqft: 200,
  },
  "bathroom-remodel": {
    label: "Bathroom remodel",
    perSqft: { basic: 200, midrange: 400, premium: 800 },
    defaultSqft: 50,
  },
  "room-addition": {
    label: "Room addition",
    perSqft: { basic: 150, midrange: 250, premium: 400 },
    defaultSqft: 300,
  },
  "basement-finish": {
    label: "Basement finish",
    perSqft: { basic: 30, midrange: 60, premium: 100 },
    defaultSqft: 800,
  },
  deck: {
    label: "Deck (wood)",
    perSqft: { basic: 25, midrange: 45, premium: 80 },
    defaultSqft: 250,
  },
  "interior-paint": {
    label: "Interior paint (whole home)",
    perSqft: { basic: 2, midrange: 4, premium: 7 },
    defaultSqft: 1800,
  },
  flooring: {
    label: "Flooring (mid-grade install)",
    perSqft: { basic: 6, midrange: 12, premium: 22 },
    defaultSqft: 1000,
  },
};

const FINISH_LABELS: Record<FinishLevel, string> = {
  basic: "Basic / builder-grade",
  midrange: "Mid-range",
  premium: "Premium / high-end",
};

/**
 * Map (project type, finish level, sqft) to an opinionated cost-plus input
 * for the calculator. The mapping isn't precision engineering — it's a
 * defensible homeowner-side estimate built from national benchmark
 * cost-per-sqft data, split roughly 60% materials / 40% labor for finish
 * work, then run through standard contractor overhead and markup. The
 * output is a planning number, not a bid.
 */
function buildEstimateInput(
  type: ProjectType,
  finish: FinishLevel,
  sqft: number,
  zipMultiplier: number,
): ContractorEstimateInput {
  const baseTotal = PROJECT_BENCHMARKS[type].perSqft[finish] * sqft * zipMultiplier;

  // Materials and labor split varies by project type. Paint and flooring are
  // labor-heavy; remodels are materials-heavy. These are working defaults.
  const materialShare =
    type === "interior-paint" ? 0.3 : type === "flooring" ? 0.45 : type === "deck" ? 0.55 : 0.6;
  const laborShare = 1 - materialShare;

  // National benchmarks already include contractor overhead and markup.
  // We back those out so the calculator's overhead + markup re-applies them
  // cleanly — preserves the audit trail in the breakdown the user sees.
  // 12% overhead, 18% markup is a common residential mix.
  const overheadPct = 12;
  const markupPct = 18;
  const overheadAndMarkup = 1 + overheadPct / 100 + markupPct / 100 + (overheadPct * markupPct) / 10000;
  const directTotal = baseTotal / overheadAndMarkup;

  // Back-compute hours so the labor total lands at directTotal * laborShare.
  // Pick a representative loaded-labor rate for residential trades; the
  // calculator-side math is what matters, not the field semantics.
  const HOURLY_RATE = 65;
  const laborHours = (directTotal * laborShare) / HOURLY_RATE;

  return {
    labor: { hours: laborHours, hourlyRate: HOURLY_RATE },
    materials: [{ description: "Materials estimate", amount: directTotal * materialShare }],
    equipment: [],
    subcontractors: [],
    otherCosts: [],
    overheadPercent: overheadPct,
    markupPercent: markupPct,
    taxPercent: 0,
  };
}

// Cost-of-living-style ZIP/region multiplier. Very coarse — high-COL metros
// run 1.3–1.6× national; rural midwest runs 0.8–0.9×.
const REGION_MULTIPLIERS = {
  national: { label: "US national average (default)", multiplier: 1.0 },
  high: { label: "High-COL metro (NYC, SF, LA, Boston, DC)", multiplier: 1.4 },
  midhigh: { label: "Coastal / large metro (Seattle, Chicago, Miami, Denver)", multiplier: 1.2 },
  low: { label: "Rural / lower-COL region", multiplier: 0.85 },
} as const;

type RegionKey = keyof typeof REGION_MULTIPLIERS;

export function HomeRenovationCostEstimatorCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>("kitchen-remodel");
  const [finishLevel, setFinishLevel] = useState<FinishLevel>("midrange");
  const [sqft, setSqft] = useState<number>(
    PROJECT_BENCHMARKS["kitchen-remodel"].defaultSqft,
  );
  const [region, setRegion] = useState<RegionKey>("national");

  const result = useMemo(() => {
    const input = buildEstimateInput(
      projectType,
      finishLevel,
      sqft,
      REGION_MULTIPLIERS[region].multiplier,
    );
    return calculateContractorEstimate(input);
  }, [projectType, finishLevel, sqft, region]);

  // Render a ±20% range. Real bids cluster within that envelope for most
  // residential work; tighter ranges mislead, wider ranges are useless.
  const low = result.estimateTotal * 0.85;
  const high = result.estimateTotal * 1.2;

  function handleProjectTypeChange(next: ProjectType) {
    setProjectType(next);
    setSqft(PROJECT_BENCHMARKS[next].defaultSqft);
  }

  return (
    <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="project-type"
            className="block text-sm font-semibold text-navy-900 mb-2"
          >
            Project
          </label>
          <select
            id="project-type"
            value={projectType}
            onChange={(e) => handleProjectTypeChange(e.target.value as ProjectType)}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            {(Object.keys(PROJECT_BENCHMARKS) as ProjectType[]).map((key) => (
              <option key={key} value={key}>
                {PROJECT_BENCHMARKS[key].label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="finish-level"
            className="block text-sm font-semibold text-navy-900 mb-2"
          >
            Finish level
          </label>
          <select
            id="finish-level"
            value={finishLevel}
            onChange={(e) => setFinishLevel(e.target.value as FinishLevel)}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            {(Object.keys(FINISH_LABELS) as FinishLevel[]).map((key) => (
              <option key={key} value={key}>
                {FINISH_LABELS[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sqft" className="block text-sm font-semibold text-navy-900 mb-2">
            Square footage
          </label>
          <input
            id="sqft"
            type="number"
            min={0}
            value={sqft}
            onChange={(e) => setSqft(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
          <p className="mt-1 text-xs text-ink-500">
            Default: typical size for this project type. Adjust to match your space.
          </p>
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-semibold text-navy-900 mb-2">
            Region
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value as RegionKey)}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            {(Object.keys(REGION_MULTIPLIERS) as RegionKey[]).map((key) => (
              <option key={key} value={key}>
                {REGION_MULTIPLIERS[key].label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 rounded-md bg-navy-50 border border-navy-100 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-700">
          Estimated cost range
        </p>
        <p className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
          {formatUSD(low)} <span className="text-ink-500 text-xl">to</span>{" "}
          {formatUSD(high)}
        </p>
        <p className="mt-3 text-sm text-ink-700 leading-relaxed">
          Midpoint: <strong className="text-navy-900">{formatUSD(result.estimateTotal)}</strong>{" "}
          ({formatUSD(result.estimateTotal / Math.max(sqft, 1))}/sq ft). Real bids vary by 30%+ based
          on contractor, market, and access. Treat this as a planning number, not a quote.
        </p>
      </div>

      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm font-semibold text-navy-700 hover:text-navy-900">
          See cost breakdown
        </summary>
        <div className="mt-4 grid gap-2 text-sm text-ink-700">
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Labor (direct)</span>
            <span>{formatUSD(result.labor)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Materials</span>
            <span>{formatUSD(result.materials)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Subtotal direct cost</span>
            <span>{formatUSD(result.directCost)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>+ Contractor overhead (12%)</span>
            <span>{formatUSD(result.overhead)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>+ Contractor markup (18%)</span>
            <span>{formatUSD(result.markup)}</span>
          </div>
          <div className="flex justify-between font-semibold text-navy-900 pt-2">
            <span>Estimated bid midpoint</span>
            <span>{formatUSD(result.estimateTotal)}</span>
          </div>
        </div>
      </details>

      <p className="mt-5 text-xs text-ink-500 leading-relaxed">
        Math by the same cost-plus formula a licensed contractor uses. Materials/labor
        split, overhead, and markup are conservative national defaults. Verify with at
        least three real contractor bids before signing a contract.
      </p>
    </div>
  );
}
