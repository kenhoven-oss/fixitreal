"use client";

import { useMemo, useState } from "react";
import {
  calculateJobCost,
  type JobCostInput,
} from "@/lib/calculators/job-cost";
import { formatUSD } from "@/lib/calculators/shared";

/**
 * DIY Project Cost Tracker — homeowner-side wrapper around the job-cost math
 * from PrintReadyForms's shared calculator library.
 *
 * The contractor version tracks labor + materials + equipment + subs + other
 * costs against a contract price to compute profit margin. For DIY, the
 * homeowner is the labor (zero or low loaded cost), so this reframes the
 * fields to track materials, tools, rentals, permits, and "what would this
 * have cost if I hired it" — producing a savings-vs-hire comparison instead
 * of a profit margin.
 */

type LineItem = { id: string; description: string; amount: number };

function emptyLine(id: string): LineItem {
  return { id, description: "", amount: 0 };
}

let _nextId = 0;
function nextId() {
  _nextId += 1;
  return `id-${_nextId}`;
}

export function DiyProjectCostTrackerCalculator() {
  const [projectName, setProjectName] = useState("Bathroom faucet replacement");
  const [materials, setMaterials] = useState<LineItem[]>([
    { id: nextId(), description: "Materials and parts", amount: 0 },
  ]);
  const [toolsRented, setToolsRented] = useState<LineItem[]>([
    { id: nextId(), description: "Tools (rented or bought)", amount: 0 },
  ]);
  const [permits, setPermits] = useState<number>(0);
  const [other] = useState<LineItem[]>([]);
  const [yourHours, setYourHours] = useState<number>(0);
  const [yourTimeValue, setYourTimeValue] = useState<number>(30);
  const [hireQuote, setHireQuote] = useState<number>(0);

  const result = useMemo(() => {
    const input: JobCostInput = {
      labor: { hours: 0, hourlyRate: 0 },
      materials: materials.map((l) => ({ description: l.description, amount: l.amount })),
      equipment: toolsRented.map((l) => ({ description: l.description, amount: l.amount })),
      subcontractors: [],
      otherCosts: [
        ...(permits > 0 ? [{ description: "Permits & fees", amount: permits }] : []),
        ...other.map((l) => ({ description: l.description, amount: l.amount })),
      ],
      contractPrice: hireQuote,
    };
    return calculateJobCost(input);
  }, [materials, toolsRented, permits, other, hireQuote]);

  const yourTimeCost = yourHours * yourTimeValue;
  const fullCostIncludingTime = result.totalJobCost + yourTimeCost;
  const savings = hireQuote > 0 ? hireQuote - fullCostIncludingTime : 0;
  const savingsPercent = hireQuote > 0 ? (savings / hireQuote) * 100 : 0;

  function updateLine(
    list: LineItem[],
    setList: (next: LineItem[]) => void,
    id: string,
    patch: Partial<LineItem>,
  ) {
    setList(list.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  }

  function addLine(list: LineItem[], setList: (next: LineItem[]) => void) {
    setList([...list, emptyLine(nextId())]);
  }

  function removeLine(list: LineItem[], setList: (next: LineItem[]) => void, id: string) {
    setList(list.filter((l) => l.id !== id));
  }

  function renderLineEditor(
    list: LineItem[],
    setList: (next: LineItem[]) => void,
    placeholder: string,
  ) {
    return (
      <>
        {list.map((line) => (
          <div key={line.id} className="grid grid-cols-[1fr_120px_auto] gap-2 items-start">
            <input
              type="text"
              value={line.description}
              onChange={(e) =>
                updateLine(list, setList, line.id, { description: e.target.value })
              }
              placeholder={placeholder}
              className="rounded-md border border-ink-300 bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
            <input
              type="number"
              min={0}
              step="0.01"
              value={line.amount || ""}
              onChange={(e) =>
                updateLine(list, setList, line.id, {
                  amount: Math.max(0, Number(e.target.value) || 0),
                })
              }
              placeholder="$0.00"
              className="rounded-md border border-ink-300 bg-white px-3 py-2 text-sm text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
            <button
              type="button"
              onClick={() => removeLine(list, setList, line.id)}
              className="rounded-md px-2 py-2 text-sm text-ink-500 hover:text-amber-700 hover:bg-amber-50"
              aria-label="Remove line"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addLine(list, setList)}
          className="text-sm font-semibold text-navy-700 hover:text-navy-900"
        >
          + Add line
        </button>
      </>
    );
  }

  return (
    <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="grid gap-6">
        <div>
          <label
            htmlFor="project-name"
            className="block text-sm font-semibold text-navy-900 mb-2"
          >
            Project name
          </label>
          <input
            id="project-name"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-navy-900">
            Materials & parts
          </legend>
          {renderLineEditor(materials, setMaterials, "Materials description")}
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-navy-900">
            Tools (rented or bought for this job)
          </legend>
          {renderLineEditor(toolsRented, setToolsRented, "Tool or rental description")}
        </fieldset>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="permits"
              className="block text-sm font-semibold text-navy-900 mb-2"
            >
              Permits, inspection & disposal fees
            </label>
            <input
              id="permits"
              type="number"
              min={0}
              step="0.01"
              value={permits || ""}
              onChange={(e) => setPermits(Math.max(0, Number(e.target.value) || 0))}
              placeholder="$0.00"
              className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>

          <div>
            <label
              htmlFor="hire-quote"
              className="block text-sm font-semibold text-navy-900 mb-2"
            >
              Contractor quote for the same work (optional)
            </label>
            <input
              id="hire-quote"
              type="number"
              min={0}
              step="0.01"
              value={hireQuote || ""}
              onChange={(e) => setHireQuote(Math.max(0, Number(e.target.value) || 0))}
              placeholder="$0.00"
              className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
            <p className="mt-1 text-xs text-ink-500">
              Enter the bid you got (or estimated) to see your savings vs. hiring.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 rounded-md bg-ink-50 border border-ink-100 p-4">
          <div>
            <label
              htmlFor="your-hours"
              className="block text-sm font-semibold text-navy-900 mb-2"
            >
              Hours you spent on the project
            </label>
            <input
              id="your-hours"
              type="number"
              min={0}
              step="0.5"
              value={yourHours || ""}
              onChange={(e) => setYourHours(Math.max(0, Number(e.target.value) || 0))}
              placeholder="0"
              className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
          <div>
            <label
              htmlFor="time-value"
              className="block text-sm font-semibold text-navy-900 mb-2"
            >
              What&rsquo;s your time worth ($/hr)?
            </label>
            <input
              id="time-value"
              type="number"
              min={0}
              step="1"
              value={yourTimeValue || ""}
              onChange={(e) => setYourTimeValue(Math.max(0, Number(e.target.value) || 0))}
              placeholder="30"
              className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
            <p className="mt-1 text-xs text-ink-500">
              Conservative: minimum wage. Honest: what you actually earn. Either is fine
              for tracking — just be consistent.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-md bg-navy-50 border border-navy-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-700">
            Out-of-pocket cost
          </p>
          <p className="mt-2 font-serif text-3xl text-navy-900">
            {formatUSD(result.totalJobCost)}
          </p>
          <p className="mt-2 text-xs text-ink-600">
            Materials + tools + fees you actually paid.
          </p>
        </div>

        <div className="rounded-md bg-navy-50 border border-navy-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-700">
            Total cost including your time
          </p>
          <p className="mt-2 font-serif text-3xl text-navy-900">
            {formatUSD(fullCostIncludingTime)}
          </p>
          <p className="mt-2 text-xs text-ink-600">
            Out-of-pocket + ({yourHours}h × {formatUSD(yourTimeValue)}/hr).
          </p>
        </div>
      </div>

      {hireQuote > 0 && (
        <div
          className={`mt-4 rounded-md border p-5 ${
            savings > 0
              ? "bg-emerald-50 border-emerald-100"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-[0.15em] ${
              savings > 0 ? "text-emerald-800" : "text-amber-800"
            }`}
          >
            {savings > 0
              ? `DIY saved you ${formatUSD(savings)} vs. hiring`
              : `Hiring would have saved you ${formatUSD(Math.abs(savings))}`}
          </p>
          <p className="mt-2 text-sm text-ink-700">
            {savings > 0 ? (
              <>
                Hiring quote was {formatUSD(hireQuote)}; your full DIY cost (including{" "}
                {yourHours} hours of your time at {formatUSD(yourTimeValue)}/hr) was{" "}
                {formatUSD(fullCostIncludingTime)}. Savings:{" "}
                <strong>{savingsPercent.toFixed(0)}%</strong>.
              </>
            ) : (
              <>
                Once you factor in {yourHours} hours of your own time at{" "}
                {formatUSD(yourTimeValue)}/hr, the DIY cost ({formatUSD(fullCostIncludingTime)})
                actually exceeded the {formatUSD(hireQuote)} contractor quote. This is
                common for high-skill or specialized work — your time is genuinely worth more
                than the savings.
              </>
            )}
          </p>
        </div>
      )}

      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm font-semibold text-navy-700 hover:text-navy-900">
          See full breakdown
        </summary>
        <div className="mt-4 grid gap-2 text-sm text-ink-700">
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Materials</span>
            <span>{formatUSD(result.materials)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Tools / equipment</span>
            <span>{formatUSD(result.equipment)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Permits & other costs</span>
            <span>{formatUSD(result.otherCosts)}</span>
          </div>
          <div className="flex justify-between font-semibold text-navy-900 border-b border-ink-200 pb-2">
            <span>Out-of-pocket total</span>
            <span>{formatUSD(result.totalJobCost)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Your time ({yourHours}h × {formatUSD(yourTimeValue)}/hr)</span>
            <span>{formatUSD(yourTimeCost)}</span>
          </div>
          <div className="flex justify-between font-semibold text-navy-900 pt-2">
            <span>Full DIY cost</span>
            <span>{formatUSD(fullCostIncludingTime)}</span>
          </div>
        </div>
      </details>
    </div>
  );
}
