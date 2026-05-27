import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  breadcrumbSchema,
  webApplicationSchema,
  faqSchema,
} from "@/lib/jsonld";
import { jobs } from "@/content/jobs";
import { RepairCostEstimator } from "./Estimator";

export const metadata = buildMetadata({
  title: "Repair Cost Estimator — 2026 Home Repair Cost Ranges",
  description:
    "Free repair cost estimator. Pick a common home repair, see 2026 DIY and hired ranges, get a DIY-or-hire verdict, and know what drives the price.",
  path: "/tools/repair-cost-estimator",
});

const FAQ_ITEMS = [
  {
    question: "Where do these cost numbers come from?",
    answer:
      "Our cost database is reviewed quarterly against published cost-estimation services (HomeAdvisor, HomeGuide, Fixr), trade-publication price reports, and reader-submitted real quotes. We don't publish single-source numbers — every range you see has been cross-checked. The numbers are also dated: each repair shows the year of the last update.",
  },
  {
    question: "Why is the range so wide?",
    answer:
      "Real repair costs vary 30–50% based on metro, contractor, access, and condition behind the wall. A narrow range would be more satisfying to read but less honest. We err toward wider ranges that cover most real scenarios, then explain in the cost guide what pushes you to the high or low end.",
  },
  {
    question: "What if my repair isn't in the database?",
    answer:
      "We focus on the repairs homeowners ask about most often. Our database covers 10 of the most-googled repair types as of 2026. If yours isn't here, the closest match plus a 20–30% adjustment is usually a reasonable proxy. Tell us what you'd add at hello@fixitreal.com and we'll consider it for the next quarterly update.",
  },
  {
    question: "Should I trust the DIY-recommended verdict for my situation?",
    answer:
      "It's a starting point, not a permission slip. Our DIY verdicts assume average physical condition, average tool experience, and a non-complicated installation. If you have mobility limitations, no tool experience, or your specific situation has complications (corroded shutoff valve, rotted subfloor at the flange, behind-the-wall water damage), the right answer can flip to 'hire.' Use the verdict as one input — not the only input.",
  },
  {
    question: "How do I use these estimates against a contractor quote?",
    answer:
      "Run the contractor's quote through our Contractor Quote Checker first — that catches structural problems with the quote regardless of price. Then compare the contractor's price against our hired range. If the quote is within the range or moderately above (5–25% in a high-cost-of-living area), it's defensible. If it's 50%+ above the range with no specific complication mentioned in the scope, something's off — get a second bid.",
  },
];

export default function RepairCostEstimatorPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Repair Cost Estimator", href: "/tools/repair-cost-estimator" },
  ];

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={breadcrumbs} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Cost lookup
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Repair Cost Estimator
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            Pick a common home repair. See the{" "}
            <strong className="text-navy-900">2026 DIY and hired cost ranges</strong>,
            a DIY-or-hire verdict, and what affects the price before you spend money or
            call a contractor. {jobs.length} repair types in the database, reviewed
            quarterly.
          </p>
          <p className="mt-4 text-sm text-ink-600">
            Cost ranges are conservative national midpoints. Real quotes vary 30–50%
            by metro and contractor. Use as a planning number, not a bid.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <RepairCostEstimator jobs={jobs} />
      </Section>

      <Section padding="md" size="lg" className="bg-ink-50">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">
            How to use these estimates
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-ink-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="font-semibold text-navy-900">1.</span>
              <span>
                Identify the repair as closely as you can to one in the database. If
                yours is 80% the same, the estimate is a useful planning number.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-navy-900">2.</span>
              <span>
                Read the &ldquo;If you DIY&rdquo; and &ldquo;If you hire&rdquo; cards.
                Be honest about your tool experience and patience for the work.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-navy-900">3.</span>
              <span>
                If you&rsquo;re going to hire, get the contractor&rsquo;s quote and
                run it through our{" "}
                <Link
                  href="/tools/contractor-quote-checker"
                  className="text-navy-700 underline"
                >
                  Contractor Quote Checker
                </Link>{" "}
                before signing.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-navy-900">4.</span>
              <span>
                If the quote is more than 25% above our hired range with no specific
                complication mentioned, get a second bid before signing.
              </span>
            </li>
          </ol>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">Related tools</h2>
          <div className="mt-4 grid gap-3 text-sm text-ink-700">
            <Link
              href="/tools/contractor-quote-checker"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Contractor Quote Checker</p>
              <p className="mt-1">Already have a quote? Run it through the 11-question checker for red flags.</p>
            </Link>
            <Link
              href="/tools/diy-or-hire"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">DIY or Hire — full verdict database</p>
              <p className="mt-1">Long-form decision cards for every repair in this estimator, with reasoning.</p>
            </Link>
            <Link
              href="/costs"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Cost guides — full library</p>
              <p className="mt-1">Long-form cost guides with methodology, breakdowns, and 2026 dated ranges.</p>
            </Link>
            <Link
              href="/home-repair-cost-calendar"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Home Repair Cost Calendar</p>
              <p className="mt-1">Every month of the year with seasonal maintenance tasks and their 2026 cost ranges.</p>
            </Link>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg" className="bg-ink-50">
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

      <Section padding="md" size="lg">
        <NewsletterBlock />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema(breadcrumbs),
          webApplicationSchema({
            name: "Repair Cost Estimator",
            description:
              "Interactive home repair cost estimator. Pick a common home repair from a database of 10+ repair types and see 2026 DIY and hired cost ranges, DIY-or-hire verdict, time required, tools needed, and what affects the price.",
            url: "/tools/repair-cost-estimator",
            applicationCategory: "UtilityApplication",
          }),
          faqSchema(FAQ_ITEMS),
        ])}
      />
    </>
  );
}
