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
     3. Paste your Amazon SiteStripe short link into the `affiliateUrl`
        field (example format: "https://amzn.to/4tlV9dU").
     4. Leave `affiliateUrl: ""` to publish the card without a buy button
        (useful while drafting).

   The affiliate disclosure shows automatically whenever at least one
   product has a non-empty `affiliateUrl`.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "25-ft manual hand auger",
    badge: "Best Overall",
    category: "Manual drain snake",
    bestFor: "Everyday sink and tub clogs within the first 15–20 feet of pipe.",
    whyItMadeTheList:
      "A 25-foot manual hand auger hits the sweet spot for homeowner use — long enough to reach most kitchen and bathroom clogs, short enough to control without a mess. A rotating drum keeps the cable tidy and lets you feed it slowly without kinking.",
    keyBuyingNotes:
      "Look for a steel cable in the 1/4-inch range, a drum with a secure lid, and a rubber hand grip. A thumb lock on the drum is worth the upgrade if you can find one.",
    // PASTE AMAZON AFFILIATE LINK HERE
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Basic 15-ft zip-it style cable",
    badge: "Best Budget",
    category: "Hair/debris tool",
    bestFor: "Surface hair clogs in tubs, showers, and bathroom sinks.",
    whyItMadeTheList:
      "For a lot of bathroom clogs, the blockage is a wad of hair within six inches of the drain — not something a full auger can help with. A long plastic barbed strip pulls those out in seconds and costs very little.",
    keyBuyingNotes:
      "These are disposable by design. Buy a short multi-pack rather than one expensive unit; the tool takes the beating so your drain doesn't.",
    // PASTE AMAZON AFFILIATE LINK HERE
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Flat-tape tub drain snake",
    badge: "Best for Tubs",
    category: "Tub-specific snake",
    bestFor: "Tub and shower clogs where a round cable gets stuck on the trap lever.",
    whyItMadeTheList:
      "Bathtub drains have an unusual geometry — a trip-waste lever and a low P-trap. A flat-tape snake threads past both more reliably than a round cable, and it takes up almost no space in a utility closet.",
    keyBuyingNotes:
      "Check the total length; 20 feet handles almost any tub clog. A plastic guide sleeve at the tip prevents finish scratches on the overflow plate.",
    /*
      Draft behavior: this entry intentionally has no affiliate URL yet,
      so the card renders without a buy button. Paste a link later and
      the button appears automatically.
    */
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Powered drum auger (homeowner grade)",
    badge: "Best for Tougher Clogs",
    category: "Powered snake",
    bestFor: "Recurring main-line or laundry-stack clogs a manual cable can't clear.",
    whyItMadeTheList:
      "Once a clog is more than 20 feet in or involves roots and grease, a manual cable stops making progress. A compact powered drum auger gives homeowners a middle option between renting a sewer machine and calling a plumber every time.",
    keyBuyingNotes:
      "Match cable length to the run you're trying to reach. Look for variable speed, a foot pedal if possible, and a properly sized cutter head for the line diameter. If the clog is in the main sewer line, call a pro instead — a wrong move can damage the line.",
    // Another draft-mode product — no link yet.
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-drain-snakes-for-homeowners";
const pageTitle = "Best drain snakes for homeowners";
const pageDescription =
  "A homeowner-first guide to picking a drain snake — what each type actually handles, what to check before you buy, and when the clog is past the point of DIY.";

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
    question: "Do I need a powered snake, or is manual enough?",
    answer:
      "For most kitchen and bathroom clogs inside 20 feet of pipe, a manual hand auger is enough. A powered drum auger makes sense if you deal with recurring clogs farther down the line, such as a laundry stack or main-line grease buildup.",
  },
  {
    question: "Can a drain snake damage my pipes?",
    answer:
      "Used correctly, no. Problems come from forcing the cable when it stops, running a cutter head that's too large for the pipe, or using a powered snake on old, corroded cast-iron drains. If you hit hard resistance, stop and reassess instead of pushing.",
  },
  {
    question: "What about chemical drain cleaners?",
    answer:
      "We don't recommend them for most homeowners. They damage older pipes, create hazards if a pro later has to open the line, and often move the clog rather than clearing it. A snake and a plunger are safer tools.",
  },
  {
    question: "How far in can a homeowner safely snake?",
    answer:
      "Branch lines from a fixture to the nearest vent are fair game with a manual auger. Once you&apos;re past the P-trap and into a shared stack or the main sewer, call a plumber — a wrong cable pass can punch through a degraded joint.",
  },
  {
    question: "Is a drain snake worth owning if I only clog once a year?",
    answer:
      "Usually yes. A basic hand auger pays for itself the first time you avoid a service call. Store it in a bucket so the cable doesn't rust, and the tool lasts years.",
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

export default function BestDrainSnakesGuide() {
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

        {/* Auto-renders the Amazon Associates sentence when the page
            contains at least one affiliate link. Draft pages stay clean. */}
        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            A drain snake is the cheapest way to clear a clog without calling
            a plumber — if you buy the right one. This guide keeps things
            homeowner-scaled: the options below handle the clogs you actually
            face (sink, tub, shower, laundry stack), not sewer-line work that
            belongs with a licensed pro.
          </p>
          <p>
            We&apos;re going to cover what matters before the product list:
            which type of snake fits which clog, what specs are worth paying
            for, and when a clog is past the point of DIY. Then the
            recommendations.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Match the snake to the clog.</strong>{" "}
            Hair in a shower trap needs a disposable barbed strip, not a 25-ft
            auger. A kitchen-sink clog 8 feet in needs a hand auger, not a
            barbed strip. Buying one tool for every job wastes money and
            usually leaves you under-equipped for the job you actually have.
          </p>
          <p>
            <strong className="text-navy-900">Length and cable diameter matter more than brand.</strong>{" "}
            Homeowner clogs live in the first 15–25 feet of pipe. A 25-ft
            cable with a 1/4-inch diameter covers almost every sink and tub
            line. Longer cables in thinner diameters kink under torque;
            thicker cables don&apos;t bend into tight traps.
          </p>
          <p>
            <strong className="text-navy-900">A drum beats a loose coil.</strong>{" "}
            A drum keeps the cable contained, which keeps your bathroom floor
            clean and lets you feed the cable in controlled increments. Loose
            coils look cheaper but quickly get messy and unmanageable.
          </p>
          <p>
            <strong className="text-navy-900">Know when to stop.</strong>{" "}
            If a cable stops moving and you can&apos;t feel it turn into the
            clog, don&apos;t force it. Forcing a cable in old cast-iron or
            PVC can punch a hole in a degraded joint. If you&apos;ve tried
            twice and gotten nowhere, the clog is past where a homeowner
            snake is going to help.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four options that cover almost every homeowner drain job.
              Start at the top for general-purpose clogs; jump to the
              tub-specific or powered option if your situation matches.
            </p>
          }
          products={products}
          // Leave `comparison` undefined to show the placeholder for now.
          // When you're ready, pass a `comparison` object — see the type
          // definition in RecommendedProductsSection.tsx.
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When not to DIY
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            A drain snake is homeowner-appropriate for branch lines —
            everything from a fixture to where it joins a vent or stack. Once
            the clog is past that point, you&apos;re working on shared
            infrastructure and the consequences of a mistake go up fast.
          </p>
          <p>
            Call a plumber if you see any of these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Multiple fixtures backing up at the same time (a main-line clog,
              not a fixture clog).
            </li>
            <li>
              Sewage backing up in a floor drain or tub after a laundry run.
            </li>
            <li>
              A clog you can&apos;t reach from the nearest cleanout or
              fixture within 25 feet of cable.
            </li>
            <li>
              Old cast-iron drains where you can feel the cable catch at every
              joint — the pipe may be too degraded to snake safely.
            </li>
            <li>
              Anything that recurs within a few weeks of snaking. That&apos;s
              usually roots, belly, or scale, and it needs a camera and a
              real sewer machine.
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
              <Link href="/advice/sink-drain-leaking-under-kitchen-sink" className="no-underline text-navy-700 hover:text-navy-900">
                Sink drain leaking under the kitchen sink
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/water-under-the-bathroom-sink" className="no-underline text-navy-700 hover:text-navy-900">
                Water under the bathroom sink — find the source
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice" className="no-underline text-navy-700 hover:text-navy-900">
                All consumer-first home-repair advice
              </Link>
            </li>
          </ul>
        </div>

        {/* Schema — Article + FAQPage + BreadcrumbList. No Product schema
            because we don't publish verified prices/ratings here. */}
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
