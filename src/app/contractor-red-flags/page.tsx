import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  collectionPageSchema,
  itemListSchema,
  faqSchema,
} from "@/lib/jsonld";
import { loadArticlesByPillar } from "@/lib/articles-loader";
import { PrintReadyFormsCTA } from "@/components/marketing/PrintReadyFormsCTA";

export const metadata = buildMetadata({
  title: "Contractor Red Flags — Bad Quote, Bad Pro, Bad Job",
  description:
    "The specific signals that a contractor quote is overpriced, the licensing checks every homeowner should run, and the warning signs of work that won't last.",
  path: "/contractor-red-flags",
});

const redFlagsList = [
  {
    title: "Door-knocking after a storm",
    body:
      "Legitimate roofers don't drive neighborhoods looking for damage. Storm-chasing contractors collect insurance checks and disappear before warranty issues surface.",
  },
  {
    title: "Pressure to sign today",
    body:
      "Discounts that 'only apply if you sign now' are negotiation pressure, not real savings. Anything that won't be true next week is a problem.",
  },
  {
    title: "Cash-only, no contract, no permit",
    body:
      "Skipping permits and contracts isn't about saving you money — it's about leaving zero paper trail when things go wrong.",
  },
  {
    title: "Asking for >50% deposit",
    body:
      "Most pros front material costs from their working capital. A 10–33% deposit is normal. A 50%+ ask suggests the contractor is funding one job with the next homeowner's deposit.",
  },
  {
    title: "Vague line items on the quote",
    body:
      "'Labor and materials — $X' isn't a quote, it's a guess. Real quotes itemize parts, labor, permits, and disposal separately.",
  },
  {
    title: "No license number on the truck or quote",
    body:
      "In every state that licenses trades, the license number is required on advertising and quotes. No number = unlicensed work = no recourse when it fails.",
  },
  {
    title: "Quote is dramatically above or below the others",
    body:
      "The outlier on either end is the problem. A quote 40% under is usually missing scope; 40% over is usually padding because the contractor doesn't want the job.",
  },
  {
    title: "Bad-mouthing your existing contractor or last quote",
    body:
      "Pros let work speak for itself. A salesperson trashing the competition is selling, not diagnosing.",
  },
];

const hubFaq = [
  {
    question: "What's the single biggest contractor red flag?",
    answer:
      "Asking for more than 33% deposit on a residential job. Legitimate contractors don't fund their cash flow from your deposit — they front materials from their own working capital and bill progressively. A large up-front demand is the most common signal of a contractor who's about to take your money and disappear, or who's so undercapitalized they'll abandon the job mid-scope.",
  },
  {
    question: "How do I verify a contractor is actually licensed?",
    answer:
      "Every state licenses construction trades through a state board (the Contractors State License Board, Department of Consumer Affairs, or similar). Search the contractor's license number on the state board's lookup tool — it'll show their license status, classification, bond status, and complaint history. Don't trust what's printed on the truck; verify on the state site directly.",
  },
  {
    question: "Are three quotes enough?",
    answer:
      "Usually yes, when the three are from comparable contractors with similar scope. Three quotes give you a real price range, expose outliers in either direction, and let you compare scope-of-work language. Two quotes is too few — the second could be the outlier and you wouldn't know. More than four is usually wasted effort.",
  },
  {
    question: "What do I do if I think I've already been scammed?",
    answer:
      "File a complaint with your state contractor licensing board first — that's the strongest leverage. If the contractor is bonded, the bond can compensate you for incomplete work. If you paid by credit card, dispute the charge within the window. For larger amounts, small-claims court works up to your state's limit; above that, a real-estate attorney is worth the consultation fee.",
  },
];

const articleSlugs = [
  "signs-of-overpriced-quote",
  "three-contractor-quotes",
  "vetting-a-contractor",
  "hidden-fees",
  "home-warranties-bad-deal",
];

export default async function ContractorRedFlagsPage() {
  const advice = await loadArticlesByPillar("advice");
  const linkedArticles = articleSlugs
    .map((slug) => advice.find((a) => a.frontmatter.slug === slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Contractor red flags", href: "/contractor-red-flags" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Consumer protection
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Contractor red flags: how to spot a bad quote, a bad pro, a bad job
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              Most home-repair scams aren&apos;t elaborate cons. They&apos;re
              ordinary contractors with a thin license, a leveraged cash-flow,
              and a habit of disappearing once the deposit clears. The warning
              signs are visible long before the work starts — in how they
              quote, what they ask for up front, and what they put in writing.
            </p>
            <p>
              This page is the short list of red flags every homeowner should
              be able to recognize. Below it: the long-form articles that go
              deeper into each pattern, plus the FAQ on what to do when
              you&apos;ve already paid.
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl md:text-3xl text-navy-900">
          The eight red flags
        </h2>
        <ol className="mt-6 space-y-5">
          {redFlagsList.map((rf, i) => (
            <li
              key={rf.title}
              className="flex gap-4 border-l-2 border-amber-500 pl-4"
            >
              <span
                aria-hidden
                className="font-serif text-3xl text-amber-700 leading-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-serif text-lg text-navy-900">{rf.title}</p>
                <p className="mt-1 text-ink-700 leading-relaxed">{rf.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {linkedArticles.length > 0 && (
        <Section padding="md" size="lg">
          <h2 className="font-serif text-2xl text-navy-900">Go deeper</h2>
          <p className="mt-2 text-ink-700 max-w-2xl">
            Each of the patterns above has its own long-form article with the
            full reasoning, the math, and the consumer-protection citations.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {linkedArticles.map((a) => (
              <Card
                key={a.frontmatter.slug}
                href={a.path}
                eyebrow="Honest Advice"
                title={a.frontmatter.title}
                description={a.frontmatter.description}
              />
            ))}
          </div>
          <p className="mt-8 text-sm">
            <Link
              href="/advice"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              All consumer-advocate articles →
            </Link>
          </p>
        </Section>
      )}

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <PrintReadyFormsCTA
            contextLabel="Comparing contractor quotes?"
            title="Use a written estimate worksheet."
            description="A worksheet compares scope, price, exclusions, payment terms, and warranty side by side — the only way to spot the quote that looks low but skips materials, permits, or cleanup."
            buttonText="View contractor estimate forms"
            href="https://www.printreadyforms.com/product/contractor-estimate-quote-pack"
            utmCampaign="contractor_red_flags"
          />
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          Common questions about contractor red flags
        </h2>
        <dl className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
          {hubFaq.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-medium text-navy-900">{item.question}</dt>
              <dd className="mt-2 text-ink-700 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "Contractor red flags — how to spot a bad quote, a bad pro, a bad job",
            description:
              "Independent guidance on contractor licensing, pricing red flags, deposit norms, and consumer-protection steps when work goes wrong.",
            url: "/contractor-red-flags",
            hasPart: linkedArticles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: "The eight contractor red flags every homeowner should recognize",
            url: "/contractor-red-flags",
            items: redFlagsList.map((rf, i) => ({
              name: `${i + 1}. ${rf.title}`,
              url: `/contractor-red-flags#${rf.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`,
            })),
          }),
          faqSchema(hubFaq),
        ])}
      />
    </>
  );
}
