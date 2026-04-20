import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/jsonld";
import { kenHoven } from "@/content/authors/ken-hoven";
import { AmazonDisclosure } from "@/components/tools/AmazonDisclosure";
import { RecommendedProductsSection } from "@/components/tools/RecommendedProductsSection";
import type { RecommendedProduct } from "@/components/tools/RecommendedProductCard";

/* --------------------------------------------------------------------------
   PRODUCTS
   ------------------------------------------------------------------------

   To add or edit a product:
     1. Open this file.
     2. Add an entry to the `products` array below, or edit an existing one.
     3. Paste your affiliate short link into the `affiliateUrl` field
        (example format: "https://amzn.to/3OBSCx3").
     4. Leave `affiliateUrl: ""` to publish the card without a buy button.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "Mid-size wet/dry shop vac (6–9 gal)",
    badge: "Best Overall",
    category: "Wet/dry vacuum",
    bestFor: "A first-response vac for under-sink leaks, overflowed tubs, and minor basement water.",
    whyItMadeTheList:
      "Six to nine gallons is the size most people actually have room to store and can still carry up a flight of stairs when full. It handles the vast majority of household water events without forcing you to empty it every two minutes.",
    keyBuyingNotes:
      "Check the weight with a full tank — a 9-gallon tank of water is over 70 pounds. Look for a proper foam filter included for wet pickup; running a paper cartridge filter on water ruins it. A drain port on the tank lets you dump without tipping.",
    affiliateUrl: "https://amzn.to/3OBSCx3",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Compact wet/dry vac (2–3 gal)",
    badge: "Best Compact",
    category: "Wet/dry vacuum",
    bestFor: "Small, frequent jobs — a toilet overflow, a dishwasher puddle, a planter spill.",
    whyItMadeTheList:
      "A small wet/dry vac earns its keep by being nearby. The tank fills fast, but for the three-gallon incidents that make up most household water events, it's out of the closet and running in the time a bigger vac takes to wheel in.",
    keyBuyingNotes:
      "Short hoses are the compromise on most compact units; the vac itself is light enough to just carry instead. Confirm the motor is rated for wet pickup — some small shop-style vacs are dry-only.",
    affiliateUrl: "https://amzn.to/41NOXzk",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Large wet/dry shop vac (12+ gal)",
    badge: "Best for Flooded Areas",
    category: "Wet/dry vacuum",
    bestFor: "Finished-basement water, water-heater failures, sump-pump outages on clean water only.",
    whyItMadeTheList:
      "Once you're past a few gallons of water, the bottleneck is how often you have to stop and dump. A large tank with a built-in pump-out port lets the vac drain to a floor drain or outside while it works, turning an all-day job into a manageable one.",
    keyBuyingNotes:
      "The pump-out feature is what you're paying for — without it, the big tank is just a heavier version of the mid-size. Check the discharge port thread size against a standard garden hose. These are loud; ear protection isn't optional.",
    affiliateUrl: "https://amzn.to/3QjvCU9",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-shop-vacs-for-water-cleanup";
const pageTitle = "Best shop vacs for water cleanup";
const pageDescription =
  "Which wet/dry vacuum actually fits a homeowner — capacity, filter type, pump-out ports, and the kinds of water cleanup that should go straight to a restoration company instead.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
});

/* --------------------------------------------------------------------------
   FAQs
-------------------------------------------------------------------------- */

const faqs = [
  {
    question: "Do I need a separate filter for wet pickup?",
    answer:
      "Yes. Most shop vacs ship with a paper cartridge filter for dry pickup and a separate foam sleeve for wet. Running water through the paper filter ruins it and can let water reach the motor. Check the manual before the first wet job.",
  },
  {
    question: "Can I leave water in the tank overnight?",
    answer:
      "Don't. The tank will develop mildew and metal parts rust quickly. Drain the tank, rinse it, and leave the lid off for a few hours so the foam filter dries. A smelly shop vac is almost always one that got stored wet.",
  },
  {
    question: "Is a shop vac safe on carpeted floors with water?",
    answer:
      "A wet/dry vac will pull most surface water out of carpet, but the pad underneath holds significantly more. If the carpet stays damp after you've vacuumed it, you need airflow from fans plus a dehumidifier, or the pad starts growing mold within a couple of days.",
  },
  {
    question: "What size should I buy if I can only own one?",
    answer:
      "A mid-size 6–9 gallon unit is the honest answer for most homes. It's big enough to handle real leaks and small enough to keep somewhere accessible. A compact vac that lives in the kitchen closet is also excellent, but it's a second tool, not a first.",
  },
  {
    question: "Should I plug a shop vac into a GFCI outlet?",
    answer:
      "Yes — any time you're sucking water, the outlet powering the vac should be GFCI protected. If the area doesn't have GFCI outlets, use a portable GFCI adapter. It's cheap insurance against a compromised cord.",
  },
];

/* --------------------------------------------------------------------------
   PAGE
-------------------------------------------------------------------------- */

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestShopVacsGuide() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={breadcrumbItems} />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Buying guide
        </p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          {pageTitle}
        </h1>
        <p className="mt-4 text-sm text-ink-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>
            By{" "}
            <Link href={kenHoven.url} className="no-underline hover:text-navy-900">
              {kenHoven.name}
            </Link>
          </span>
          <span>Updated April 20, 2026</span>
          <span>6 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            Shop vacs live in the garage until one day a supply line fails
            at three in the morning and suddenly the vac is the most
            important tool in the house. The difference between a useful
            response and a ruined evening usually comes down to two
            decisions: the tank size and whether it has a foam wet-pickup
            filter installed.
          </p>
          <p>
            This guide walks through the three sizes most homeowners
            actually need, the features worth paying for, and the kinds of
            water that should never go through a vac in the first place.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Capacity vs. where you store it.</strong>{" "}
            The biggest vac isn&apos;t automatically the best one. A vac
            that lives in the basement because it doesn&apos;t fit in the
            closet is a vac you won&apos;t grab for the kitchen sink
            overflow. Pick the biggest tank you&apos;ll actually keep
            somewhere accessible.
          </p>
          <p>
            <strong className="text-navy-900">Filter type is not optional.</strong>{" "}
            Dry filters — paper or pleated cartridges — get destroyed by
            water. Every wet/dry vac needs a foam sleeve installed for wet
            pickup. Check the accessories before you start a cleanup, not
            after.
          </p>
          <p>
            <strong className="text-navy-900">Pump-out ports change how big jobs feel.</strong>{" "}
            For small spills, the drain port on the tank is fine. For
            larger water events, a built-in pump lets the vac discharge
            continuously to a floor drain or outside, so you&apos;re not
            stopping every two minutes to empty.
          </p>
          <p>
            <strong className="text-navy-900">Power the vac off a GFCI outlet when possible.</strong>{" "}
            You&apos;re running a corded motor next to standing water. A
            GFCI is the cheapest insurance policy in the house. If the
            nearest outlet isn&apos;t protected, a portable GFCI adapter
            plugs in between the cord and the outlet.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Three sizes that cover most homeowner water events. Start
              with the mid-size if you&apos;re buying one; add the compact
              for convenience; consider the large tank only if basement or
              whole-floor events are a real risk.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When not to DIY
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            A shop vac handles clean water — supply-line leaks, tub
            overflows, rainwater intrusion — as long as you get to it
            quickly. Once water has been standing, mixed with sewage, or
            sitting in a building material long enough to soak deep, the
            job changes from cleanup to remediation.
          </p>
          <p>
            Call a water-damage restoration company if you see any of
            these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Any sign of sewage — a backed-up floor drain, a toilet
              overflow beyond the bowl, a sewer smell. That&apos;s
              category 3 water and it&apos;s a biohazard, not a shop-vac
              job.
            </li>
            <li>
              Standing water that&apos;s been there more than 48 hours.
              Mold growth starts fast, and drying the surface doesn&apos;t
              solve the problem behind the drywall.
            </li>
            <li>
              Water that has saturated structural materials — subfloor,
              framing, insulation. Surface vacuuming won&apos;t dry them,
              and covering them with finish materials traps the moisture.
            </li>
            <li>
              Flood water from outside. It&apos;s category 3 by default
              and carries contaminants a household vac can&apos;t contain
              safely.
            </li>
            <li>
              Anything involving a crawlspace, attic, or sealed wall cavity
              where you can&apos;t see how far the water spread.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">FAQ</h2>
          <dl className="mt-4 divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((f) => (
              <div key={f.question} className="py-5">
                <dt className="font-medium text-navy-900">{f.question}</dt>
                <dd className="mt-2 text-ink-700 leading-relaxed">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Related reading */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related reading</h2>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li>
              →{" "}
              <Link href="/advice/water-under-the-bathroom-sink" className="no-underline text-navy-700 hover:text-navy-900">
                Water under the bathroom sink — find the source
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/sump-pump-not-working" className="no-underline text-navy-700 hover:text-navy-900">
                Sump pump not working — what to check first
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/drywall-damage-after-a-leak" className="no-underline text-navy-700 hover:text-navy-900">
                Drywall damage after a leak — repair or replace
              </Link>
            </li>
          </ul>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript([
            breadcrumbSchema(breadcrumbItems),
            articleSchema({
              headline: pageTitle,
              description: pageDescription,
              url: path,
              datePublished: "2026-04-20",
              dateModified: "2026-04-20",
              authorUrl: kenHoven.url,
              authorName: kenHoven.name,
              articleSection: "Buying guide",
            }),
            faqSchema(faqs),
          ])}
        />
      </Section>
    </>
  );
}
