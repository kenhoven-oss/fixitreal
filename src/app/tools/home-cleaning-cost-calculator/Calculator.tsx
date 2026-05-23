"use client";

import { useMemo, useState } from "react";
import {
  calculateCleaningQuote,
  type CleaningQuoteInput,
} from "@/lib/calculators/cleaning-quote";
import { formatUSD } from "@/lib/calculators/shared";

/**
 * Home Cleaning Cost Calculator — homeowner-side wrapper around the cleaning
 * quote math from PrintReadyForms's shared library.
 *
 * The business version (cleaning-quote-calculator on PRF) takes
 * labor/supplies/travel/add-ons/markup directly. For homeowners, we map
 * home size + service type + add-ons to those internal fields, then surface
 * the quote total + per-visit cost.
 */

type ServiceType =
  | "standard-recurring"
  | "deep-clean-onetime"
  | "move-in-move-out"
  | "post-construction";

type HomeSize = "studio" | "1br" | "2br" | "3br" | "4br" | "5br-plus";

const SIZE_SQFT: Record<HomeSize, number> = {
  studio: 500,
  "1br": 750,
  "2br": 1100,
  "3br": 1700,
  "4br": 2400,
  "5br-plus": 3500,
};

const SIZE_LABELS: Record<HomeSize, string> = {
  studio: "Studio (under 600 sq ft)",
  "1br": "1 bedroom (~750 sq ft)",
  "2br": "2 bedroom (~1100 sq ft)",
  "3br": "3 bedroom (~1700 sq ft)",
  "4br": "4 bedroom (~2400 sq ft)",
  "5br-plus": "5+ bedroom (3000+ sq ft)",
};

// Hours per service type per 1000 sq ft. Rough national averages from
// cleaning industry guides (ISSA, ARCSI, residential cleaning operator
// surveys 2024). Real cleaners adjust for clutter, finishes, frequency.
const HOURS_PER_1000SQFT: Record<ServiceType, number> = {
  "standard-recurring": 1.5,
  "deep-clean-onetime": 3.5,
  "move-in-move-out": 4.5,
  "post-construction": 6.0,
};

const SERVICE_LABELS: Record<ServiceType, string> = {
  "standard-recurring": "Standard recurring (weekly / biweekly)",
  "deep-clean-onetime": "One-time deep clean",
  "move-in-move-out": "Move-in or move-out clean",
  "post-construction": "Post-construction / renovation cleanup",
};

const ADDON_OPTIONS = [
  { key: "inside-oven", label: "Inside oven", amount: 35 },
  { key: "inside-fridge", label: "Inside refrigerator", amount: 30 },
  { key: "interior-windows", label: "Interior windows", amount: 60 },
  { key: "baseboards", label: "Detailed baseboards", amount: 25 },
  { key: "garage", label: "Garage sweep-out", amount: 50 },
  { key: "laundry", label: "Laundry (wash, dry, fold)", amount: 40 },
] as const;

type AddonKey = (typeof ADDON_OPTIONS)[number]["key"];

// National hourly rate for residential cleaners. Independent cleaners run
// lower; franchise / national chains run higher.
const DEFAULT_HOURLY_RATE = 45;
// Markup the cleaner applies. Industry midpoint for cleaning quotes.
const DEFAULT_MARKUP_PCT = 25;
// Supplies cost per visit — included by most cleaners.
const SUPPLIES_PER_VISIT = 12;

export function HomeCleaningCostCalculator() {
  const [serviceType, setServiceType] =
    useState<ServiceType>("standard-recurring");
  const [homeSize, setHomeSize] = useState<HomeSize>("2br");
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [addOns, setAddOns] = useState<Set<AddonKey>>(new Set());

  const result = useMemo(() => {
    const sqft = SIZE_SQFT[homeSize];
    const hoursPer1000 = HOURS_PER_1000SQFT[serviceType];
    let hours = (sqft / 1000) * hoursPer1000;
    // Each additional bathroom over 2 adds ~15 min of cleaning time.
    if (bathrooms > 2) {
      hours += (bathrooms - 2) * 0.25;
    }

    const selectedAddOns = ADDON_OPTIONS.filter((o) => addOns.has(o.key)).map(
      (o) => ({ description: o.label, amount: o.amount }),
    );

    const input: CleaningQuoteInput = {
      labor: { hours, hourlyRate: DEFAULT_HOURLY_RATE },
      supplies: SUPPLIES_PER_VISIT,
      travel: { mode: "flat", flatFee: 0 },
      addOns: selectedAddOns,
      markupPercent: DEFAULT_MARKUP_PCT,
    };
    return { ...calculateCleaningQuote(input), hours, sqft };
  }, [serviceType, homeSize, bathrooms, addOns]);

  const low = result.quoteTotal * 0.85;
  const high = result.quoteTotal * 1.25;

  function toggleAddOn(key: AddonKey) {
    setAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="service-type"
            className="block text-sm font-semibold text-navy-900 mb-2"
          >
            Service type
          </label>
          <select
            id="service-type"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value as ServiceType)}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            {(Object.keys(SERVICE_LABELS) as ServiceType[]).map((key) => (
              <option key={key} value={key}>
                {SERVICE_LABELS[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="home-size"
            className="block text-sm font-semibold text-navy-900 mb-2"
          >
            Home size
          </label>
          <select
            id="home-size"
            value={homeSize}
            onChange={(e) => setHomeSize(e.target.value as HomeSize)}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            {(Object.keys(SIZE_LABELS) as HomeSize[]).map((key) => (
              <option key={key} value={key}>
                {SIZE_LABELS[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="bathrooms"
            className="block text-sm font-semibold text-navy-900 mb-2"
          >
            Bathrooms
          </label>
          <input
            id="bathrooms"
            type="number"
            min={0}
            step="0.5"
            value={bathrooms}
            onChange={(e) => setBathrooms(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
          <p className="mt-1 text-xs text-ink-500">
            Use 0.5 for a powder room (half bath).
          </p>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy-900 mb-2">
          Add-on services
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {ADDON_OPTIONS.map((opt) => (
            <label
              key={opt.key}
              className="flex items-center gap-2 rounded-md border border-ink-200 px-3 py-2 cursor-pointer hover:border-navy-300 transition-colors"
            >
              <input
                type="checkbox"
                checked={addOns.has(opt.key)}
                onChange={() => toggleAddOn(opt.key)}
                className="h-4 w-4 rounded border-ink-300 text-navy-700 focus:ring-amber-400"
              />
              <span className="flex-1 text-sm text-ink-700">{opt.label}</span>
              <span className="text-sm text-ink-500">+{formatUSD(opt.amount)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 rounded-md bg-navy-50 border border-navy-100 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-700">
          Estimated cost range (per visit)
        </p>
        <p className="mt-2 font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
          {formatUSD(low)} <span className="text-ink-500 text-xl">to</span>{" "}
          {formatUSD(high)}
        </p>
        <p className="mt-3 text-sm text-ink-700 leading-relaxed">
          Midpoint: <strong className="text-navy-900">{formatUSD(result.quoteTotal)}</strong>{" "}
          for an estimated <strong>{result.hours.toFixed(1)} hours</strong> of cleaning.
          Real quotes vary ±25% based on cleaner, market, and home condition. Get 2-3 quotes
          before committing.
        </p>
      </div>

      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm font-semibold text-navy-700 hover:text-navy-900">
          See cost breakdown
        </summary>
        <div className="mt-4 grid gap-2 text-sm text-ink-700">
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Labor ({result.hours.toFixed(1)}h × {formatUSD(DEFAULT_HOURLY_RATE)}/hr)</span>
            <span>{formatUSD(result.labor)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Supplies</span>
            <span>{formatUSD(result.supplies)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Add-ons</span>
            <span>{formatUSD(result.addOns)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>Subtotal direct cost</span>
            <span>{formatUSD(result.directCost)}</span>
          </div>
          <div className="flex justify-between border-b border-ink-100 pb-2">
            <span>+ Markup (25%)</span>
            <span>{formatUSD(result.markup)}</span>
          </div>
          <div className="flex justify-between font-semibold text-navy-900 pt-2">
            <span>Estimated quote</span>
            <span>{formatUSD(result.quoteTotal)}</span>
          </div>
        </div>
      </details>

      <p className="mt-5 text-xs text-ink-500 leading-relaxed">
        Default hourly rate ({formatUSD(DEFAULT_HOURLY_RATE)}/hr) reflects independent
        residential cleaners. Franchise services (Merry Maids, Molly Maid) typically run
        20–30% higher. Solo cleaners can run 20–30% lower. Adjust your expectations to
        the kind of service you&rsquo;re hiring.
      </p>
    </div>
  );
}
