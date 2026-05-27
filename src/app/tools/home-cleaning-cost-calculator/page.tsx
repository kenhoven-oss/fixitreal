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
import { HomeCleaningCostCalculator } from "./Calculator";

export const metadata = buildMetadata({
  title: "Home Cleaning Cost Calculator — 2026 Fair Quote",
  description:
    "Free home cleaning cost calculator. Pick home size, service type, and add-ons; see what a fair 2026 quote should be for residential cleaning service.",
  path: "/tools/home-cleaning-cost-calculator",
});

const FAQ_ITEMS = [
  {
    question: "Why is a deep clean so much more expensive than recurring service?",
    answer:
      "A deep clean takes roughly 2.5–3× the time of a standard recurring clean because the cleaner is addressing everything that's been skipped between visits: inside the oven, behind appliances, baseboards, light fixtures, blinds, vents. Recurring cleans assume someone has already done the deep clean — they're maintaining a baseline, not establishing one. Most cleaning services require a deep clean (or 'initial' clean) as the first visit before you sign up for recurring service.",
  },
  {
    question: "Should I tip the cleaner?",
    answer:
      "Common (not universal): 15–20% per visit for solo cleaners, $5–$15 per cleaner for crews. Tip is generally appropriate for individual cleaners or small teams, less expected for large franchise services where the cleaner is paid above minimum wage by the company. If you're going to skip the tip, do it consistently — alternating between tipping and not tipping is the worst signal.",
  },
  {
    question: "Are franchise services (Merry Maids, Molly Maid) worth the premium?",
    answer:
      "Sometimes. Franchise services typically run 20–30% above independent cleaners. You're paying for: background-checked staff, insurance and bonding, scheduled-time reliability (replacement cleaner if yours is sick), and a manager to call if something breaks. Independent cleaners can be cheaper and often do equally good work, but the no-show or breakage scenarios are on you to resolve. For a home with high-value items or strict scheduling, franchise is usually worth it.",
  },
  {
    question: "Will the cleaner bring supplies?",
    answer:
      "Most include basic supplies (cleaning chemicals, microfiber cloths, vacuum) in the quoted price. Some let you provide your own preferred products (Method, Mrs. Meyer's, fragrance-free for chemical sensitivities) at no discount. Confirm in advance. For floor finishes (especially hardwood), insist they use what the floor manufacturer recommends — wrong cleaners can damage wood finishes.",
  },
  {
    question: "What's NOT typically included in a standard cleaning?",
    answer:
      "Inside oven, inside refrigerator, inside cabinets, interior windows, garage, basement, walls (beyond spot-cleaning), laundry, dishes (beyond loading a dishwasher), pet messes beyond normal cleaning, decluttering (cleaners clean what's accessible — they don't move your stuff). Most of these can be added as one-time add-ons.",
  },
];

export default function HomeCleaningCostCalculatorPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    {
      name: "Home Cleaning Cost Calculator",
      href: "/tools/home-cleaning-cost-calculator",
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
            Service quote
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Home Cleaning Cost Calculator
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            Pick your home size, service type, and add-ons. See what a fair{" "}
            <strong className="text-navy-900">2026 residential cleaning quote</strong>{" "}
            should be before you call a service. Defaults reflect independent
            cleaners; franchise services typically run 20–30% higher.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <HomeCleaningCostCalculator />
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
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">Related tools</h2>
          <div className="mt-4 grid gap-3 text-sm text-ink-700">
            <Link
              href="/tools/repair-cost-estimator"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Repair Cost Estimator</p>
              <p className="mt-1">2026 cost ranges for common home repairs with DIY-or-hire verdicts.</p>
            </Link>
            <Link
              href="/tools/contractor-quote-checker"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Contractor Quote Checker</p>
              <p className="mt-1">For larger contractor work — run the quote through the red-flag checklist.</p>
            </Link>
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
            name: "Home Cleaning Cost Calculator",
            description:
              "Interactive home cleaning cost calculator. Pick home size, service type, and add-ons; see a fair 2026 residential cleaning service quote.",
            url: "/tools/home-cleaning-cost-calculator",
            applicationCategory: "UtilityApplication",
          }),
          faqSchema(FAQ_ITEMS),
        ])}
      />
    </>
  );
}
