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
import { HomeRenovationCostEstimatorCalculator } from "./Calculator";

export const metadata = buildMetadata({
  title: "Home Renovation Cost Estimator — 2026 Project Cost",
  description:
    "Free home renovation cost estimator for homeowners. Pick project, finish level, square footage, region — get the cost range a contractor should bid. 2026 benchmarks.",
  path: "/tools/home-renovation-cost-estimator",
});

const FAQ_ITEMS = [
  {
    question: "How accurate is this estimator?",
    answer:
      "It returns a planning range (±20% around a national-benchmark midpoint), not a quote. Real contractor bids in your market will vary 30%+ based on access, contractor backlog, materials availability, and finish-level interpretation. Use this to set a realistic budget before you call contractors — then collect at least three actual bids before signing anything.",
  },
  {
    question: "Why is the kitchen remodel estimate so high?",
    answer:
      "Kitchens are the most expensive room to remodel per square foot because they pack high-cost finishes (cabinetry, countertops, appliances) into a small footprint. National midpoint for a midrange kitchen runs $300/sq ft; premium kitchens easily hit $600/sq ft. If your kitchen budget is below $30K, you are looking at refresh-level work (paint, hardware, lighting) — not a full remodel.",
  },
  {
    question: "Does this include permits and inspection fees?",
    answer:
      "Permits are NOT included in the per-sq-ft national benchmark. Budget separately: small projects (paint, flooring) typically need no permit; larger projects (kitchen with electrical/plumbing changes, additions, decks above 30 inches) require permits costing $200–$2,000+ depending on jurisdiction. Get your specific city's fee schedule before finalizing your budget.",
  },
  {
    question: "What's the difference between basic, midrange, and premium?",
    answer:
      "Basic = builder-grade finishes (laminate counters, builder-standard cabinets, base appliances). Midrange = quartz or mid-grade granite, semi-custom cabinets, mid-tier appliances. Premium = custom cabinetry, slab counters in higher-end materials, pro-grade appliances, specialty tile or hardwood. Premium can run 2-3× midrange for the same square footage.",
  },
  {
    question: "Should I get bids before or after I have a design?",
    answer:
      "Both, in sequence. Get rough scoping conversations with 2-3 contractors before design to understand feasibility and ballpark numbers. Then have a designer or architect produce drawings and specs. Then collect itemized bids against the drawings — apples to apples comparison only works once everyone is bidding on the same scope.",
  },
];

const HOWTO_STEPS = [
  {
    name: "Pick the project type",
    text: "Choose the renovation closest to your scope (kitchen, bath, addition, etc.). If your project spans multiple types — e.g., a master suite that combines bedroom addition and bathroom remodel — estimate each piece separately and add them together.",
  },
  {
    name: "Pick the finish level",
    text: "Basic is builder-grade. Midrange is what most homeowners actually do. Premium is pro-grade appliances, custom cabinetry, high-end materials. Don't pick premium unless you're prepared to spend it.",
  },
  {
    name: "Enter square footage",
    text: "Use the actual square footage of the area being renovated. For room additions, this is the new conditioned space. For finishing a basement, this is the finished area, not the whole basement footprint.",
  },
  {
    name: "Pick your region",
    text: "Coastal metros and high-cost-of-living areas run 20–40% above national averages. Rural and lower-COL areas run 10–15% below. The default 'national average' is the right pick if you don't know which bucket you fall in.",
  },
  {
    name: "Read the cost range as a planning number",
    text: "The output is a ±20% bracket around a benchmark midpoint. Use it to know whether your savings are in the ballpark of your project before you start collecting bids. Real bids will fall somewhere inside the range (usually) — but no estimator can replace three actual contractor walk-throughs.",
  },
];

export default function HomeRenovationCostEstimatorPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    {
      name: "Home Renovation Cost Estimator",
      href: "/tools/home-renovation-cost-estimator",
    },
  ];

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={breadcrumbs} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Cost calculator
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Home Renovation Cost Estimator
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            Pick the project, finish level, square footage, and region. Get the cost
            range a licensed contractor should bid for the work. The math is the same
            cost-plus formula contractors use — but the inputs are framed for{" "}
            <strong className="text-navy-900">homeowners planning a budget</strong>,
            not contractors writing a quote.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <HomeRenovationCostEstimatorCalculator />
      </Section>

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">How to use this estimator</h2>
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
            Where this estimator stops being useful
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            This is a <strong className="text-navy-900">budget-setting tool</strong>,
            not a bid. It tells you whether the project you have in mind is in your
            ballpark before you spend time talking to contractors. It does not
            replace:
          </p>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li className="flex gap-2">
              <span className="text-amber-700">→</span>
              <span>Three real contractor walk-throughs with itemized bids.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-700">→</span>
              <span>
                A designer or architect for any project changing structure, plumbing
                stack, or major electrical.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-700">→</span>
              <span>
                Your local permit office. Permits typically run $200–$2,000+ extra
                and aren&rsquo;t included in the per-square-foot benchmarks.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-700">→</span>
              <span>
                A 10–20% contingency budget for the surprises that always surface in
                renovation work (rot behind drywall, code-required upgrades, etc.).
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <PrintReadyFormsCTA
          contextLabel="For contractors, not homeowners"
          title="Bidding the project as a contractor? Use the business-side version."
          description={
            <>
              The business-side equivalent at PrintReadyForms lets you input real
              labor hours, materials cost, overhead percent, and markup percent —
              and produces a contractor-facing estimate document. Same math, framed
              for the person writing the bid.
            </>
          }
          buttonText="See the contractor estimate calculator"
          href="https://www.printreadyforms.com/tools/contractor-estimate-calculator"
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
              href="/tools/diy-project-cost-tracker"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">DIY Project Cost Tracker</p>
              <p className="mt-1">Track materials, tools, and time on a project you&rsquo;re doing yourself.</p>
            </Link>
            <Link
              href="/tools/home-cleaning-cost-calculator"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Home Cleaning Cost Calculator</p>
              <p className="mt-1">Budget a one-time deep clean or recurring service for your home.</p>
            </Link>
            <Link
              href="/tools/diy-or-hire"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">DIY or Hire — verdict database</p>
              <p className="mt-1">For specific repair jobs, the honest verdict on whether to do it yourself.</p>
            </Link>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema(breadcrumbs),
          webApplicationSchema({
            name: "Home Renovation Cost Estimator",
            description:
              "Free interactive home renovation cost estimator for homeowners. Returns a planning cost range based on project type, finish level, square footage, and region.",
            url: "/tools/home-renovation-cost-estimator",
            applicationCategory: "UtilityApplication",
          }),
          faqSchema(FAQ_ITEMS),
          howToSchema({
            name: "How to use the home renovation cost estimator",
            description:
              "Step-by-step process for estimating a home renovation project cost as a homeowner planning a budget.",
            url: "/tools/home-renovation-cost-estimator",
            totalMinutes: 2,
            steps: HOWTO_STEPS,
          }),
        ])}
      />
    </>
  );
}
