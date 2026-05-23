"use client";

import { useMemo, useState } from "react";

/**
 * Contractor Quote Checker — interactive red-flag scoring tool.
 *
 * Homeowner reviews a contractor quote against a checklist of 10 known
 * red-flag categories. The output is a risk level (Low / Watch / High /
 * Stop), the specific issues found, and a list of clarifying questions to
 * bring back to the contractor before signing.
 *
 * Math is intentionally simple: each "yes there is a red flag" answer adds
 * a weighted point. Total points map to a risk tier. The tool is editorial,
 * not a credit score — it doesn't pretend at precision the data doesn't
 * support.
 */

type Severity = "watch" | "high" | "stop";

interface CheckItem {
  id: string;
  question: string;
  detail: string;
  severity: Severity;
  /** Shown when the user marks this item as a red flag (i.e. "yes this is missing/wrong"). */
  clarifyingQuestion: string;
  /** Optional related FixItReal article slug for context. */
  relatedLink?: { label: string; href: string };
}

const CHECKLIST: CheckItem[] = [
  {
    id: "deposit",
    question: "Does the contractor want more than one-third (33%) of the total upfront?",
    detail:
      "Most reputable residential contractors take 10–33% as a deposit, with the balance billed against progress milestones. Some states cap residential deposits by law (California: 10% or $1,000 — whichever is less for home improvement).",
    severity: "high",
    clarifyingQuestion:
      "Can we structure the payments as a progress draw — 25% deposit, 25% at material delivery, 25% at substantial completion, 25% on final punch-list?",
    relatedLink: {
      label: "Contractor red flags",
      href: "/contractor-red-flags",
    },
  },
  {
    id: "license",
    question: "Is the contractor's license number missing from the quote?",
    detail:
      "Licensed contractor states (most US states for residential work over a threshold) require the license number on written contracts and advertising. Missing the number is a violation in many jurisdictions and a sign the contractor may not be licensed for the work.",
    severity: "stop",
    clarifyingQuestion:
      "What's your contractor license number and class? Can I look it up on the state licensing board's website?",
    relatedLink: {
      label: "How to verify a contractor",
      href: "/contractor-red-flags",
    },
  },
  {
    id: "insurance",
    question: "Is there no proof of insurance (general liability + workers' comp)?",
    detail:
      "A working contractor should be able to provide a Certificate of Insurance (COI) showing both general liability and workers' compensation coverage. If a worker is injured on your property without workers' comp, your homeowners insurance can be pulled into the claim.",
    severity: "stop",
    clarifyingQuestion:
      "Can you have your insurance carrier email me a Certificate of Insurance showing GL and workers' comp coverage with my address listed as the certificate holder?",
  },
  {
    id: "vague-scope",
    question: "Is the scope of work vague (one-line description, no specifics)?",
    detail:
      "A defensible quote describes WHAT will be done with enough specificity that two parties would interpret it the same way. \"Bathroom remodel\" is not a scope. \"Replace tub with 60\" Kohler 4-piece surround, remove and replace 80 sq ft of tile to subfloor, replace vanity with Wayfair SKU XYZ\" is a scope.",
    severity: "high",
    clarifyingQuestion:
      "Can you provide a detailed line-item scope of work that lists specific products, brands, model numbers (or 'allowance for'), and quantities? I want to be sure we have the same understanding.",
  },
  {
    id: "no-breakdown",
    question: "Is there no material/labor breakdown — just one lump-sum total?",
    detail:
      "Lump-sum quotes hide the math. Without a labor vs. materials breakdown, you can't compare bids apples-to-apples, can't reasonably negotiate scope changes, and can't tell if the contractor is overcharging for materials they're buying at trade pricing.",
    severity: "watch",
    clarifyingQuestion:
      "Can the quote show a line-item breakdown of materials, labor, and any other costs? I'm comparing it to other bids and need to match the categories.",
  },
  {
    id: "no-change-order",
    question: "Is there no language about how change orders will be handled?",
    detail:
      "Mid-project changes are normal. The problem is what happens to the bill. A defensible quote says: changes require written change orders, signed by both parties, with cost stated before work begins. Without this language, you're at the contractor's mercy when scope grows.",
    severity: "high",
    clarifyingQuestion:
      "Can we add a clause requiring all changes to scope, materials, or schedule to be documented in a written change order, signed by both parties, with cost stated before the change is performed?",
  },
  {
    id: "pressure",
    question:
      "Is the contractor pressuring you to decide today (limited-time discount, materials going up, schedule filling)?",
    detail:
      "Manufactured urgency is a red flag across every consumer category and it's a particularly common contractor tactic. A reputable contractor's schedule fills up because they're good, but their quote price doesn't expire if you take 48 hours to think.",
    severity: "high",
    clarifyingQuestion:
      "I need 48–72 hours to review this and get one other bid for comparison. Will the quote still be valid then? If not, I'll have to pass.",
  },
  {
    id: "permits",
    question: "Is there no language about who pulls permits (or does the contractor say no permits are needed)?",
    detail:
      "Permit responsibility belongs in the contract. A common scam: contractor avoids permits to save time and money, leaves you exposed at sale-of-home (unpermitted work is a disclosure liability) and at insurance claim time (unpermitted work can void coverage). Many jurisdictions require permits for electrical, plumbing, structural, and HVAC work — even on small projects.",
    severity: "high",
    clarifyingQuestion:
      "Will permits be required for this work? If yes, who pulls them — you or me? Can the contract explicitly state that permits are the contractor's responsibility and that work will be inspected?",
    relatedLink: {
      label: "Home inspection repairs",
      href: "/home-inspection-repairs",
    },
  },
  {
    id: "warranty",
    question: "Is there no written warranty on labor and materials?",
    detail:
      "Reputable contractors warranty their labor for 1–2 years (sometimes longer) and pass through manufacturer warranties on materials. \"I stand behind my work\" verbal warranties are worth nothing once a problem appears.",
    severity: "watch",
    clarifyingQuestion:
      "Can you add a written warranty clause — typically 1 year on labor and pass-through of manufacturer warranties on materials? What's your standard warranty term?",
  },
  {
    id: "cash-only",
    question: "Is the contractor insisting on cash-only payment?",
    detail:
      "Cash-only is sometimes legitimate (very small handyman jobs), but for licensed contracting work it usually signals tax avoidance, lack of business banking, or worse. Paying by check, ACH, or credit card creates a paper trail and gives you chargeback rights for unfinished work.",
    severity: "stop",
    clarifyingQuestion:
      "Can we pay by check or ACH instead of cash? I need a paper trail for tax purposes (capital improvement records) and for my homeowner records.",
  },
  {
    id: "timeline",
    question: "Is there no clear start and completion date in the quote?",
    detail:
      "Open-ended timelines mean the contractor can shelve your job whenever a higher-paying one comes in. A defensible contract states: start date, target completion date, and what counts as substantial completion. Some contracts include per-day liquidated damages for delays beyond the target.",
    severity: "watch",
    clarifyingQuestion:
      "Can the contract state a target start date and a substantial-completion date? I understand weather and material delays happen, but I need a baseline to plan around.",
  },
];

type Answers = Record<string, boolean>;

const SEVERITY_WEIGHT: Record<Severity, number> = {
  watch: 1,
  high: 2,
  stop: 4,
};

function calculateRisk(answers: Answers): {
  level: "Low" | "Watch" | "High" | "Stop";
  score: number;
  flagged: CheckItem[];
} {
  const flagged = CHECKLIST.filter((item) => answers[item.id]);
  const score = flagged.reduce(
    (sum, item) => sum + SEVERITY_WEIGHT[item.severity],
    0,
  );

  // Any "stop" severity flag = Stop tier regardless of count
  if (flagged.some((f) => f.severity === "stop")) {
    return { level: "Stop", score, flagged };
  }
  if (score >= 5) return { level: "High", score, flagged };
  if (score >= 2) return { level: "Watch", score, flagged };
  return { level: "Low", score, flagged };
}

const RISK_DESCRIPTIONS: Record<
  "Low" | "Watch" | "High" | "Stop",
  { label: string; color: string; explanation: string }
> = {
  Low: {
    label: "Low risk",
    color: "bg-emerald-50 border-emerald-200 text-emerald-900",
    explanation:
      "No major red flags detected. This doesn't mean the price is right — get at least one other bid for comparison — but the quote structure itself looks professional.",
  },
  Watch: {
    label: "Watch — clarify before signing",
    color: "bg-amber-50 border-amber-200 text-amber-900",
    explanation:
      "Minor issues found. Ask the clarifying questions below and have the contractor add the missing items in writing before you sign. Most reputable contractors will agree.",
  },
  High: {
    label: "High risk — significant gaps",
    color: "bg-orange-50 border-orange-200 text-orange-900",
    explanation:
      "Several material issues with this quote. Do not sign as-is. Either get the contractor to fix every flagged issue in writing, or get bids from two other contractors and compare.",
  },
  Stop: {
    label: "Stop — do not sign",
    color: "bg-rose-50 border-rose-300 text-rose-900",
    explanation:
      "At least one critical red flag (missing license number, missing insurance, or cash-only). These are deal-breakers in residential contracting. Get bids from properly-licensed and insured contractors instead.",
  },
};

export function ContractorQuoteChecker() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const risk = useMemo(() => calculateRisk(answers), [answers]);

  const totalQuestions = CHECKLIST.length;
  const answeredCount = Object.keys(answers).length;

  function setAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleReset() {
    setAnswers({});
    setShowResults(false);
  }

  function handleShowResults() {
    setShowResults(true);
    // Scroll the results into view on mobile.
    if (typeof window !== "undefined") {
      setTimeout(() => {
        document.getElementById("quote-check-results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
          Step 1
        </p>
        <h2 className="mt-1 font-serif text-2xl text-navy-900">
          Answer each question about the quote in front of you
        </h2>
        <p className="mt-2 text-sm text-ink-700">
          Check &ldquo;Yes&rdquo; if the red flag applies to your quote. Leave it
          unchecked if it doesn&rsquo;t.
        </p>

        <div className="mt-6 space-y-4">
          {CHECKLIST.map((item, idx) => (
            <fieldset
              key={item.id}
              className="rounded-md border border-ink-200 p-4 hover:border-navy-200 transition-colors"
            >
              <legend className="px-2 text-xs font-semibold text-ink-500">
                {idx + 1} of {CHECKLIST.length}
              </legend>
              <p className="font-semibold text-navy-900">{item.question}</p>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">{item.detail}</p>
              <div className="mt-3 flex gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={item.id}
                    checked={answers[item.id] === true}
                    onChange={() => setAnswer(item.id, true)}
                    className="h-4 w-4 border-ink-300 text-rose-700 focus:ring-amber-400"
                  />
                  <span className="text-sm font-medium text-rose-800">
                    Yes — this is a problem
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={item.id}
                    checked={answers[item.id] === false}
                    onChange={() => setAnswer(item.id, false)}
                    className="h-4 w-4 border-ink-300 text-emerald-700 focus:ring-amber-400"
                  />
                  <span className="text-sm font-medium text-emerald-800">No / N/A</span>
                </label>
              </div>
            </fieldset>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 justify-between">
          <p className="text-sm text-ink-600">
            {answeredCount} of {totalQuestions} answered
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-md px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50 transition-colors"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleShowResults}
              disabled={answeredCount === 0}
              className="rounded-md bg-navy-900 px-5 py-2 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              See risk assessment →
            </button>
          </div>
        </div>
      </div>

      {showResults && (
        <div id="quote-check-results" className="space-y-6">
          <div
            className={`rounded-lg border-2 p-6 md:p-8 ${RISK_DESCRIPTIONS[risk.level].color}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em]">
              Step 2 — Assessment
            </p>
            <h2 className="mt-1 font-serif text-3xl">
              {RISK_DESCRIPTIONS[risk.level].label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              {RISK_DESCRIPTIONS[risk.level].explanation}
            </p>
            <p className="mt-3 text-xs">
              {risk.flagged.length} red flag{risk.flagged.length === 1 ? "" : "s"} found
              · weighted score {risk.score}.
            </p>
          </div>

          {risk.flagged.length > 0 ? (
            <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
                Step 3 — Questions to ask before you sign
              </p>
              <h2 className="mt-1 font-serif text-2xl text-navy-900">
                Bring these questions back to the contractor
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                Email or text these to the contractor. Get the answers in writing —
                an updated quote, a contract amendment, or at minimum a return email
                you can save. Verbal answers don&rsquo;t hold up later.
              </p>
              <ol className="mt-5 space-y-4">
                {risk.flagged.map((item, idx) => (
                  <li
                    key={item.id}
                    className="border-l-4 border-amber-400 bg-amber-50/50 pl-4 py-2"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-800">
                      Question {idx + 1} ·{" "}
                      {item.severity === "stop"
                        ? "Deal-breaker"
                        : item.severity === "high"
                          ? "High priority"
                          : "Clarify"}
                    </p>
                    <p className="mt-2 text-sm font-medium text-navy-900 leading-relaxed">
                      &ldquo;{item.clarifyingQuestion}&rdquo;
                    </p>
                    {item.relatedLink && (
                      <p className="mt-2 text-xs">
                        <a
                          href={item.relatedLink.href}
                          className="text-navy-700 hover:text-navy-900 underline"
                        >
                          More: {item.relatedLink.label} →
                        </a>
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-sm text-emerald-900">
                No clarifying questions needed based on this checklist. Still: get
                one or two more bids for comparison before signing. Even a clean
                quote can be the wrong price.
              </p>
            </div>
          )}

          <div className="rounded-lg border border-ink-200 bg-ink-50 p-5 text-xs text-ink-700 leading-relaxed">
            <strong className="text-navy-900">Disclaimer:</strong> This tool is
            informational, not legal advice. State laws on contractor licensing,
            deposit caps, and consumer protection vary. Verify license status with
            your state licensing board, and consult a real-estate attorney for
            high-value contracts or disputes. Results are based on national
            best-practice norms; your contract may have additional context this
            tool can&rsquo;t see.
          </div>
        </div>
      )}
    </div>
  );
}
