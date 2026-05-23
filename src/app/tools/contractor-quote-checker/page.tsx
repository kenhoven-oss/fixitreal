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
  howToSchema,
} from "@/lib/jsonld";
import { ContractorQuoteChecker } from "./Checker";

export const metadata = buildMetadata({
  title: "Contractor Quote Checker — spot the 11 red flags before you sign",
  description:
    "Free 11-question checker for residential contractor quotes. Spots missing license, vague scope, oversized deposits, cash-only requests. Outputs risk level and clarifying questions.",
  path: "/tools/contractor-quote-checker",
});

const FAQ_ITEMS = [
  {
    question: "What's a normal deposit for a contractor?",
    answer:
      "For most residential work, a deposit of 10–33% of the contract is standard. Some states cap deposits by law — California limits home-improvement deposits to 10% or $1,000 (whichever is less). Anything above one-third is unusual and worth asking about. A reputable contractor explains why they need a larger deposit (typically: ordering custom or specialty materials before work starts).",
  },
  {
    question: "How do I verify a contractor's license?",
    answer:
      "Every US state with contractor licensing has a public lookup tool — search '[your state] contractor license lookup' to find it. You'll see active/inactive status, license class, any complaints, and the bond amount. Cross-reference the license number on the quote against the lookup. If the number doesn't match the business name or the license is inactive, walk away.",
  },
  {
    question: "Is cash-only really a deal-breaker?",
    answer:
      "For licensed contractor work, effectively yes. Cash leaves no paper trail, which means: no chargeback rights if work is unfinished or defective, no record for IRS capital-improvement basis when you sell the home, no protection against the contractor claiming you paid less than you did. Legitimate contractors accept checks, ACH, or credit cards. Very small handyman jobs (under a few hundred dollars) are sometimes cash-only and that can be acceptable; for a $5,000+ contract, never.",
  },
  {
    question: "What's the difference between a quote and a contract?",
    answer:
      "A quote is a price offer. A contract is the signed legal agreement. Many homeowners sign the quote thinking it's just an estimate — it's not. Once both parties sign, it's binding. Before you sign anything, treat every line as a contract term: every detail you'd want enforced must be in writing.",
  },
  {
    question: "What if the contractor refuses to add the clarifying language?",
    answer:
      "That's information. A contractor who won't add a change-order clause, a written warranty, or specific scope language is telling you who they are. Walk away and bid the job out to two other contractors. The 5–10 hours you'll spend getting alternate bids saves multiples of that in dispute resolution later. Most reputable contractors will agree to the additions because they want your business and have nothing to hide.",
  },
  {
    question: "Should I get more than one bid?",
    answer:
      "Yes, on any project over a few thousand dollars. Three bids is the standard advice — but two is genuinely enough for most homeowners' purposes. The point isn't just price comparison; it's seeing how different contractors approach the scope. Often a second bid reveals issues the first contractor missed or scope items the first contractor overpriced.",
  },
];

const HOWTO_STEPS = [
  {
    name: "Have the quote in front of you",
    text: "Print it out or open it on a second screen. You'll be checking specific items against the checklist. Quotes that are emailed as a single sentence ('I can do your bathroom for $12,000') already fail several checks — those quotes need to be rewritten as a real proposal before you can evaluate them.",
  },
  {
    name: "Walk through each question",
    text: "For each red-flag question, check 'Yes' if the issue applies to your quote, 'No / N/A' if it doesn't. Don't guess — if you're not sure whether the contractor included a warranty, the answer is 'Yes, missing.' The point is to surface unanswered questions.",
  },
  {
    name: "Read the risk level and clarifying questions",
    text: "The tool returns Low / Watch / High / Stop based on how many and which red flags you found. For every flagged item, you'll get a specific question to ask the contractor — designed to get the missing information in writing.",
  },
  {
    name: "Email the contractor before signing",
    text: "Copy the clarifying questions into an email to the contractor. Ask for written answers. Save the email. If the contractor refuses to put answers in writing, that's your answer.",
  },
  {
    name: "Get one more bid if the risk is High or Stop",
    text: "Two more bids, ideally. A high-risk quote often becomes a low-risk one once you have alternatives — either because this contractor sharpens up to match, or because you find a better contractor who's transparent from the start.",
  },
];

export default function ContractorQuoteCheckerPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Contractor Quote Checker", href: "/tools/contractor-quote-checker" },
  ];

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={breadcrumbs} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Decision tool
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Contractor Quote Checker
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            Before you sign a residential contractor&rsquo;s quote, walk it through this
            checklist. The tool flags{" "}
            <strong className="text-navy-900">11 known red flags</strong> —
            missing license info, deposit-too-large, vague scope, no change-order
            language, cash-only requests, and more — and gives you specific{" "}
            <strong className="text-navy-900">questions to bring back to the contractor</strong>{" "}
            in writing before you commit.
          </p>
          <p className="mt-4 text-sm text-ink-600">
            Educational only — not legal advice. State and local consumer-protection
            laws on contractor work vary. Use this to spot problems; consult a
            real-estate attorney for high-value contracts or disputes.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <ContractorQuoteChecker />
      </Section>

      <Section padding="md" size="lg" className="bg-ink-50">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">How to use the checker</h2>
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

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">Related reading</h2>
          <div className="mt-4 grid gap-3 text-sm text-ink-700">
            <Link
              href="/contractor-red-flags"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Contractor red flags — the full guide</p>
              <p className="mt-1">Long-form context on every red flag in this checker, plus the patterns we&rsquo;ve seen on real complaints.</p>
            </Link>
            <Link
              href="/tools/repair-cost-estimator"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Repair Cost Estimator</p>
              <p className="mt-1">Pick a repair type, see the 2026 cost range. Use this to sanity-check the price on a contractor quote.</p>
            </Link>
            <Link
              href="/home-inspection-repairs"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">Home inspection repair guides</p>
              <p className="mt-1">If you&rsquo;re getting quotes off an inspection report, the line-by-line guides explain which items actually need a contractor.</p>
            </Link>
            <Link
              href="/tools/diy-or-hire"
              className="no-underline rounded-md border border-ink-200 bg-white p-4 hover:border-navy-300 transition-colors"
            >
              <p className="font-semibold text-navy-900">DIY or Hire — verdict database</p>
              <p className="mt-1">Some quotes are for jobs you could do yourself. Check the DIY verdict before signing.</p>
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
            name: "Contractor Quote Checker",
            description:
              "Interactive checker for residential contractor quotes. Identifies common red flags (deposit-too-large, missing license, vague scope, cash-only, etc.) and outputs risk level plus clarifying questions for the homeowner to bring back to the contractor before signing.",
            url: "/tools/contractor-quote-checker",
            applicationCategory: "UtilityApplication",
          }),
          faqSchema(FAQ_ITEMS),
          howToSchema({
            name: "How to vet a contractor quote before signing",
            description:
              "Step-by-step process for spotting red flags in a residential contractor's quote and getting clarifying answers in writing before committing.",
            url: "/tools/contractor-quote-checker",
            totalMinutes: 10,
            steps: HOWTO_STEPS,
          }),
        ])}
      />
    </>
  );
}
