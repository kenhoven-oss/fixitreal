import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PrintReadyFormsCTA } from "@/components/marketing/PrintReadyFormsCTA";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  breadcrumbSchema,
  webApplicationSchema,
  faqSchema,
  howToSchema,
} from "@/lib/jsonld";
import { DiyProjectCostTrackerCalculator } from "./Calculator";

export const metadata = buildMetadata({
  title: "DIY Project Cost Tracker — DIY Cost vs Hiring Cost",
  description:
    "Free DIY project cost tracker. Log materials, tools, permits, and your time. Compare against a contractor quote to see real savings.",
  path: "/tools/diy-project-cost-tracker",
});

const FAQ_ITEMS = [
  {
    question: "Should I count my time as a cost?",
    answer:
      "Yes — but how much depends on your situation. If you're salaried and would be doing nothing else during those hours, $0/hr makes the comparison favor DIY hard. If you're a freelancer who could have billed clients during those hours, use your billable rate. Most homeowners pick something in the middle ($25–$50/hr) to keep the comparison honest. Either way, be consistent across projects so you can compare.",
  },
  {
    question: "Why did my DIY 'savings' come out negative?",
    answer:
      "Hiring beat DIY on cost. This is common when (1) you're slow because the project is new to you, (2) you bought expensive tools you'll only use once, or (3) the work requires permits, inspections, or specialty equipment that contractors already have. A negative result doesn't mean you wasted your time — you may have learned a skill, controlled the schedule, or gotten a better result. It just means money-only, hiring won.",
  },
  {
    question: "Should I include tools I'll use again?",
    answer:
      "Yes, but recognize the tool will pay you back across future projects. If you bought a $200 drill specifically for this $300 cabinet project, it looks like DIY barely beat hiring. But the drill will save you from buying or renting on 10 more projects. For honest tracking on a single project, include the full tool cost — but mentally amortize tools across their lifespan when deciding whether DIY makes sense going forward.",
  },
  {
    question: "What goes in 'other costs'?",
    answer:
      "Anything you paid that wasn't materials or tools. Common items: permits and inspection fees, dump trip fees, parking at a rental yard, delivery charges, expedited shipping for parts, paint disposal fees, masking/drop cloths beyond what's reasonable to count as supplies. The principle: if you spent money to get this project done, it belongs somewhere in the tracker.",
  },
  {
    question: "Can I export or save this?",
    answer:
      "Right now the tracker runs entirely in your browser — nothing is saved server-side and there's no export button. Take a screenshot or copy the breakdown to your own notes. We may add CSV export and project history later; let us know if that would be useful.",
  },
];

const HOWTO_STEPS = [
  {
    name: "Enter the project name",
    text: "A short label so you can keep multiple projects straight in your head. Doesn't affect the math.",
  },
  {
    name: "Log materials and parts",
    text: "Add a line for every materials purchase. Be granular if you want detail, or lump it ('Materials: $342') if you don't care. The total is what matters.",
  },
  {
    name: "Log tools rented or bought",
    text: "Tools you bought specifically for this project, or rental fees. If you used tools you already owned, leave them out (unless you want to amortize them).",
  },
  {
    name: "Add permits and fees",
    text: "Building permits, inspection fees, dump fees, delivery charges — anything you paid that isn't materials or tools.",
  },
  {
    name: "Log your hours and what your time is worth",
    text: "Be honest. Tracking hours teaches you which projects are realistically worth DIYing. Pick an hourly value once and stick with it across projects.",
  },
  {
    name: "Optionally enter the contractor quote",
    text: "If you got a bid (or know what hiring would cost) for the same work, enter it. The tracker computes your savings vs. hiring once your time is factored in.",
  },
];

export default function DiyProjectCostTrackerPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "DIY Project Cost Tracker", href: "/tools/diy-project-cost-tracker" },
  ];

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={breadcrumbs} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Cost tracker
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            DIY Project Cost Tracker
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            Log what you spent on materials, tools, permits, and your own time. Compare
            against what hiring a pro would have cost. Get an{" "}
            <strong className="text-navy-900">honest answer</strong> on whether the DIY
            was worth it — including the part where your weekend has a real value.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <DiyProjectCostTrackerCalculator />
      </Section>

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">How to use the tracker</h2>
          <ol className="mt-4 space-y-4 text-ink-700">
            {HOWTO_STEPS.map((step, idx) => (
              <li key={step.name} className="flex gap-4">
                <span className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
                  {idx + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{step.name}</p>
                  <p className="mt-1 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section padding="md" size="lg" className="bg-ink-50">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">
            What this tracker is actually for
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Most homeowners DIY without tracking, and end up with vague feelings about
            whether it was worth it. Two genuine uses for this tracker:
          </p>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li className="flex gap-2">
              <span className="text-amber-700">→</span>
              <span>
                <strong className="text-navy-900">Mid-project budgeting:</strong> log
                spending as you go. Knowing your real running total prevents the
                end-of-project surprise.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-700">→</span>
              <span>
                <strong className="text-navy-900">DIY-vs-hire honesty for next time:</strong>{" "}
                after the project, compare against a bid you got (or estimated). Over
                three or four projects you build a personal sense of which categories of
                work are worth DIYing vs. hiring out.
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <PrintReadyFormsCTA
          contextLabel="For contractors, not homeowners"
          title="Tracking job profitability as a contractor? Use the business version."
          description={
            <>
              The business-side Job Cost Calculator at PrintReadyForms tracks the same
              numbers but outputs gross profit and margin against your contract price —
              built for contractors evaluating job profitability, not homeowners
              evaluating DIY savings.
            </>
          }
          buttonText="See the job cost calculator"
          href="https://www.printreadyforms.com/tools/job-cost-calculator"
        />
      </Section>

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">FAQs</h2>
          <div className="mt-6 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="rounded-lg border border-ink-200 bg-white p-5 group"
              >
                <summary className="cursor-pointer font-semibold text-navy-900 group-open:text-navy-700">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg" className="bg-ink-50">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">Related tools</h2>
          <div className="mt-4 grid gap-3 text-sm text-ink-700">
            <Link
              href="/tools/home-renovation-cost-estimator"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Home Renovation Cost Estimator</p>
              <p className="mt-1">Get a planning cost range before you start, based on national benchmarks.</p>
            </Link>
            <Link
              href="/tools/diy-or-hire"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">DIY or Hire — verdict database</p>
              <p className="mt-1">Honest verdict on whether to DIY specific repair jobs.</p>
            </Link>
            <Link
              href="/home-repair-cost-calendar"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Home Repair Cost Calendar</p>
              <p className="mt-1">Every month with cost ranges for the maintenance tasks that come due.</p>
            </Link>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema(breadcrumbs),
          webApplicationSchema({
            name: "DIY Project Cost Tracker",
            description:
              "Free interactive cost tracker for DIY home repair and renovation projects. Logs materials, tools, permits, and the homeowner's time, with optional comparison against a contractor quote.",
            url: "/tools/diy-project-cost-tracker",
            applicationCategory: "UtilityApplication",
          }),
          faqSchema(FAQ_ITEMS),
          howToSchema({
            name: "How to track a DIY project cost",
            description:
              "Step-by-step process for tracking DIY home project costs and comparing against a contractor bid.",
            url: "/tools/diy-project-cost-tracker",
            totalMinutes: 3,
            steps: HOWTO_STEPS,
          }),
        ])}
      />
    </>
  );
}
