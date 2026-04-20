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
        (example format: "https://amzn.to/3Qvj5Np").
     4. Leave `affiliateUrl: ""` to publish the card without a buy button
        (useful while drafting).

   The affiliate disclosure shows automatically whenever at least one
   product has a non-empty `affiliateUrl`.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "Flange plunger (toilet)",
    badge: "Best for Toilets",
    category: "Toilet plunger",
    bestFor: "Standard toilet clogs where the bowl is still draining slowly.",
    whyItMadeTheList:
      "A flange plunger has a soft rubber sleeve that folds out of the cup and seats into the drain opening at the bottom of the bowl. That seal is what lets you actually push water — a flat cup just pushes air around the rim.",
    keyBuyingNotes:
      "Look for a one-piece rubber head (no glued-on flange) and a wooden or stout plastic handle long enough to keep your hand above the waterline. A drip tray or caddy is worth it just so the thing isn't sitting on the bathroom floor between uses.",
    affiliateUrl: "https://amzn.to/3Qvj5Np",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Cup plunger (sink/tub)",
    badge: "Best for Sinks & Tubs",
    category: "Standard cup plunger",
    bestFor: "Kitchen sinks, bathroom sinks, and tub drains with a flat drain surface.",
    whyItMadeTheList:
      "A simple flat-cup plunger seals against a flat drain opening better than a flange plunger, which is designed for a curved toilet outlet. Keeping a dedicated one under the kitchen sink means you're not dragging the bathroom plunger into the kitchen — which matters more than people like to think about.",
    keyBuyingNotes:
      "Smaller-diameter cups seal better on bathroom sinks; larger ones work for kitchen sinks and tubs. Before you plunge a double sink, block the other drain with a wet rag, or the pressure just vents out the other side.",
    affiliateUrl: "https://amzn.to/487GZVl",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Accordion-style high-pressure plunger",
    badge: "Best for Tough Clogs",
    category: "High-pressure plunger",
    bestFor: "Stubborn clogs that a standard plunger hasn't moved after a few rounds.",
    whyItMadeTheList:
      "An accordion plunger uses a bellows of hard plastic to generate much higher pressure per stroke than a soft rubber cup. It's a useful second tool, not a first tool — the hard plastic is awkward to seat and easy to splash with.",
    keyBuyingNotes:
      "Keep a towel handy; these launch water if the seal breaks mid-stroke. They scratch delicate finishes, so check the rim material before using on a new toilet or pedestal sink. Treat it as a last resort before reaching for an auger.",
    affiliateUrl: "https://amzn.to/48d9Vez",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-plungers-for-homeowners";
const pageTitle = "Best plungers for homeowners";
const pageDescription =
  "A practical guide to picking the right plunger — which cup shape fits which drain, why you want more than one, and when a clog has outgrown a plunger entirely.";

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
    question: "Can I use the same plunger on a toilet and a sink?",
    answer:
      "You can, but you shouldn't. A toilet plunger that's been in a toilet bowl doesn't belong anywhere near a kitchen sink, even after rinsing. Two plungers cost very little compared to the problem they solve.",
  },
  {
    question: "How many plunges should it take to clear a clog?",
    answer:
      "If a seated, well-sealed plunger hasn't moved the clog after ten or twelve firm strokes, more strokes usually won't help. Stop, let the water recede if it can, and either try again in a few minutes or move to an auger.",
  },
  {
    question: "Do I need water in the bowl for a plunger to work?",
    answer:
      "Yes. A plunger works by pushing water, not air, so the cup needs to be submerged. If the bowl is nearly empty, add a pitcher of water first so the head is fully covered when you press down.",
  },
  {
    question: "Will plunging ever make a clog worse?",
    answer:
      "Rarely, but it can push a soft clog farther down the line where it's harder to reach with an auger. If two or three attempts don't budge it, switch tools rather than keep driving it downstream.",
  },
  {
    question: "Why does my plunger keep losing its seal?",
    answer:
      "Usually the rim is dried out or deformed from being stored folded. Running the rubber under hot water for thirty seconds softens it and helps it seat. If the cup is cracked or stiff, replace it — they're cheap.",
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

export default function BestPlungersGuide() {
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
          <span>5 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            Almost nobody buys a plunger until they need one, which is the
            worst possible time to pick a good one. The short version: you
            want at least two, they should be shaped differently, and the
            nice one costs about the same as a bad one.
          </p>
          <p>
            This guide covers the three plungers that together handle every
            routine household clog, plus the line where plunging stops being
            the right answer.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">The cup has to match the drain opening.</strong>{" "}
            Toilet outlets are curved and recessed; sink and tub drains are
            flat. A flange plunger seats into the curved opening. A flat cup
            seals on a flat surface. Using either one on the wrong fixture
            wastes strokes because the cup never forms a real seal.
          </p>
          <p>
            <strong className="text-navy-900">Keep the toilet plunger and the sink plunger separate.</strong>{" "}
            Even after cleaning, nobody wants to argue about which plunger
            ended up on the kitchen counter. Buy two, store them in different
            rooms, and label the handle with a strip of tape if it's ambiguous.
          </p>
          <p>
            <strong className="text-navy-900">An accordion plunger is a backup, not a starter.</strong>{" "}
            The high-pressure style generates more force but is awkward to
            seat and prone to splash. It earns its spot as a second line of
            attack after a normal plunger, not a replacement for one.
          </p>
          <p>
            <strong className="text-navy-900">Technique beats brand.</strong>{" "}
            Warm the cup so it's pliable. Seat it straight down, not at an
            angle. Push first to expel trapped air, then pull hard — the pull
            stroke is what breaks most clogs, because it rocks the blockage
            back toward you before pressure drives it out.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Three plungers that cover the realistic range of household
              clogs. The first two belong in every house; the third is for
              stubborn situations that a standard plunger can't move.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When not to DIY
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            A plunger clears a single fixture that's blocked between the
            drain and the nearest vent or trap. Once the problem is farther
            downstream — or higher up in the vent system — plunging won't
            fix it, and in some cases can make the mess worse by pressurizing
            a line that's already struggling.
          </p>
          <p>
            Call a plumber if you see any of these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              More than one fixture backing up at once. If flushing a toilet
              makes the tub gurgle, the clog is in a shared line.
            </li>
            <li>
              Sewage or dark water coming up through a tub, floor drain, or
              shower. That points to a main-line or septic issue.
            </li>
            <li>
              A slow drain that recurs within days of every plunging. The
              clog is probably a partial blockage farther in the run.
            </li>
            <li>
              Gurgling drains paired with a sewer-like smell in the house.
              That usually means a vent problem, not a clog a plunger can
              reach.
            </li>
            <li>
              A septic system that's backed up across multiple fixtures —
              don&apos;t plunge into a full tank.
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
              <Link href="/advice/toilet-leaking-at-the-base" className="no-underline text-navy-700 hover:text-navy-900">
                Toilet leaking at the base — what it usually is
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/sink-drain-leaking-under-kitchen-sink" className="no-underline text-navy-700 hover:text-navy-900">
                Sink drain leaking under the kitchen sink
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
