"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Job, Verdict } from "@/content/jobs";

/**
 * Repair Cost Estimator — pick a repair type, see what it should cost and
 * whether to DIY.
 *
 * Sourced entirely from the existing `jobs` data in src/content/jobs.ts —
 * no invented numbers. Each card surfaces:
 *   - 2026 cost range (DIY low/high, hired low/high)
 *   - DIY-or-hire verdict
 *   - Why it costs what it costs
 *   - What affects the price
 *   - Related cost guide + DIY-or-hire decision article
 *   - Permit note where relevant
 */

function formatRange(low: number, high: number) {
  if (low === 0 && high === 0) return "Varies";
  if (low === high) return `$${low}`;
  return `$${low}–$${high}`;
}

const VERDICT_META: Record<
  Verdict,
  { label: string; badge: string; description: string }
> = {
  "diy-recommended": {
    label: "DIY recommended",
    badge: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description:
      "Most homeowners with basic tools and patience can do this themselves. Hiring is usually paying for convenience, not skill.",
  },
  "maybe-diy": {
    label: "Maybe DIY",
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    description:
      "Possible to DIY but requires real skill, specific tools, or risk tolerance. Hire if you're not comfortable — the savings often aren't worth the trouble.",
  },
  "hire-a-pro": {
    label: "Hire a pro",
    badge: "bg-rose-100 text-rose-900 border-rose-200",
    description:
      "Hire it out. Either the risk (electrical, structural, gas), the permit requirements, or the specialty equipment make DIY a bad call for most homeowners.",
  },
};

const TRADE_LABELS: Record<Job["trade"], string> = {
  plumbing: "Plumbing",
  electrical: "Electrical",
  hvac: "HVAC",
  appliance: "Appliance",
  cosmetic: "Cosmetic / finish",
  mechanical: "Mechanical",
};

interface EstimatorProps {
  jobs: readonly Job[];
}

export function RepairCostEstimator({ jobs }: EstimatorProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(jobs[0]?.slug ?? "");

  const selected = useMemo(
    () => jobs.find((j) => j.slug === selectedSlug),
    [jobs, selectedSlug],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
        <label
          htmlFor="repair-type"
          className="block text-sm font-semibold text-navy-900 mb-2"
        >
          What repair are you pricing out?
        </label>
        <select
          id="repair-type"
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          className="w-full rounded-md border border-ink-300 bg-white px-3 py-2 text-base text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
        >
          {jobs.map((job) => (
            <option key={job.slug} value={job.slug}>
              {job.name} — {TRADE_LABELS[job.trade]}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-ink-500">
          {jobs.length} repair types in the database. More added regularly.
        </p>
      </div>

      {selected && <JobCard job={selected} />}
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const verdict = VERDICT_META[job.verdict];

  return (
    <article className="space-y-4">
      {/* Verdict + cost summary */}
      <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
              {TRADE_LABELS[job.trade]}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-navy-900">{job.name}</h2>
          </div>
          <span
            className={`inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold ${verdict.badge}`}
          >
            {verdict.label}
          </span>
        </div>

        <p className="mt-4 text-sm text-ink-700 leading-relaxed">{job.reasoning}</p>
        <p className="mt-3 text-xs text-ink-500">{verdict.description}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-md bg-emerald-50 border border-emerald-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-800">
              DIY cost
            </p>
            <p className="mt-1 font-serif text-2xl text-navy-900">
              {formatRange(job.cost.diy.low, job.cost.diy.high)}
            </p>
            <p className="mt-1 text-xs text-ink-600">
              About {Math.round(job.time.diyMinutes / 60 * 10) / 10}h of your time
            </p>
            {job.cost.diy.notes && (
              <p className="mt-2 text-xs text-ink-700">{job.cost.diy.notes}</p>
            )}
          </div>

          <div className="rounded-md bg-navy-50 border border-navy-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-navy-800">
              Hired cost
            </p>
            <p className="mt-1 font-serif text-2xl text-navy-900">
              {formatRange(job.cost.pro.low, job.cost.pro.high)}
            </p>
            <p className="mt-1 text-xs text-ink-600">
              About {Math.round(job.time.proMinutes / 60 * 10) / 10}h of contractor time
            </p>
            {job.cost.pro.notes && (
              <p className="mt-2 text-xs text-ink-700">{job.cost.pro.notes}</p>
            )}
          </div>
        </div>

        {job.permit.commonlyRequired && (
          <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">
              Permit
            </p>
            <p className="mt-1 text-sm text-ink-800">{job.permit.notes}</p>
          </div>
        )}

        {job.safetyNote && (
          <div className="mt-4 rounded-md border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-800">
              Safety
            </p>
            <p className="mt-1 text-sm text-ink-800">{job.safetyNote}</p>
          </div>
        )}
      </div>

      {/* What affects price + decision context */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-ink-200 bg-white p-5">
          <h3 className="font-serif text-lg text-navy-900">
            If you DIY this
          </h3>
          <p className="mt-2 text-sm text-ink-700 leading-relaxed">{job.ifYouDiy}</p>
        </div>
        <div className="rounded-lg border border-ink-200 bg-white p-5">
          <h3 className="font-serif text-lg text-navy-900">If you hire it out</h3>
          <p className="mt-2 text-sm text-ink-700 leading-relaxed">{job.ifYouHire}</p>
        </div>
      </div>

      {/* Tools/parts needed */}
      {(job.toolsNeeded.length > 0 || job.partsNeeded.length > 0) && (
        <div className="rounded-lg border border-ink-200 bg-white p-5">
          <div className="grid gap-6 md:grid-cols-2">
            {job.toolsNeeded.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Tools needed
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-ink-700">
                  {job.toolsNeeded.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-amber-700">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.partsNeeded.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Parts needed
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-ink-700">
                  {job.partsNeeded.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-amber-700">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Related links */}
      {(job.relatedArticles.cost ||
        job.relatedArticles.decision ||
        (job.relatedArticles.advice && job.relatedArticles.advice.length > 0)) && (
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
            Read more
          </p>
          <div className="mt-3 grid gap-3 text-sm">
            {job.relatedArticles.cost && (
              <Link
                href={`/costs/${job.relatedArticles.cost}`}
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                → Full cost guide: {job.relatedArticles.cost.replace(/-/g, " ")}
              </Link>
            )}
            {job.relatedArticles.decision && (
              <Link
                href={`/diy-or-hire/${job.relatedArticles.decision}`}
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                → DIY-or-hire deep dive: {job.relatedArticles.decision.replace(/-/g, " ")}
              </Link>
            )}
            <Link
              href={`/tools/diy-or-hire/${job.slug}`}
              className="no-underline text-navy-700 hover:text-navy-900"
            >
              → Full decision card with reasoning
            </Link>
            <Link
              href="/tools/contractor-quote-checker"
              className="no-underline text-navy-700 hover:text-navy-900"
            >
              → Got a quote? Run it through the Contractor Quote Checker
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
