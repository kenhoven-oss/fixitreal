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
        (example format: "https://amzn.to/3QiVH5Q").
     4. Leave `affiliateUrl: ""` to publish the card without a buy button.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "Dripless caulk gun",
    badge: "Best Overall",
    category: "Caulk gun",
    bestFor: "Controlled bead work around tubs, counters, and trim without the mess.",
    whyItMadeTheList:
      "A dripless gun pulls pressure off the tube the moment you release the trigger, which is the difference between a clean finish and a long smear down the tub. The improvement over a basic ratchet gun is immediate, even for someone who has never caulked anything.",
    keyBuyingNotes:
      "Look for a smooth-rod (not ratchet) frame with a 10:1 thrust ratio for most household sealants. A built-in seal punch and nozzle cutter save time at the start of every tube. Metal frames last longer than plastic.",
    affiliateUrl: "https://amzn.to/3QiVH5Q",
    buttonText: "Check price on Amazon",
  },
  {
    name: "100% silicone kitchen & bath caulk",
    badge: "Best for Wet Areas",
    category: "Sealant",
    bestFor: "Tub surrounds, shower corners, sink backsplashes, and anywhere water sits.",
    whyItMadeTheList:
      "Pure silicone stays flexible through years of thermal and moisture cycling. Siliconized-acrylic caulks look similar on the shelf and are easier to tool, but they fail faster in wet joints — which is where caulk mostly lives.",
    keyBuyingNotes:
      "Read the tube: you want a product labeled 100% silicone, not siliconized. Pick a mildew-resistant formulation for bathrooms. Plan on a full cure time of 24 hours before the joint gets wet; faster formulations exist if you need to shower the same day.",
    affiliateUrl: "https://amzn.to/42hjzcB",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Caulk removal tool",
    badge: "Best Prep Tool",
    category: "Removal tool",
    bestFor: "Stripping failed caulk cleanly so the new bead adheres instead of peeling.",
    whyItMadeTheList:
      "The hardest part of a recaulking job is removing the old bead without gouging the tub or countertop. A dedicated removal tool has angled blades that hook under the caulk and ride along the substrate, which a utility knife can't do safely on acrylic or cultured marble.",
    keyBuyingNotes:
      "Plastic-bladed versions are safest on soft surfaces; metal blades cut faster but leave marks if you're heavy-handed. After mechanical removal, follow with mineral spirits or a dedicated silicone remover to clean residue — new silicone won't bond over old.",
    affiliateUrl: "https://amzn.to/3QOjrig",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Smoothing/finishing kit",
    badge: "Best for Clean Lines",
    category: "Finishing kit",
    bestFor: "Even, repeatable bead profiles in inside corners.",
    whyItMadeTheList:
      "A finishing kit with shaped silicone tips pulls a bead at a consistent radius that a fingertip never quite manages. For the long runs behind a tub or along a counter, the difference between an amateur result and a clean one is almost entirely the finishing pass.",
    keyBuyingNotes:
      "Different tips match different bead sizes; pick one that matches the joint width you have. Keep a cup of soapy water on hand — dipping the tip before each pull prevents silicone from dragging.",
    affiliateUrl: "https://amzn.to/42hjBkJ",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-caulk-and-caulk-guns-for-bath-and-kitchen";
const pageTitle = "Best caulk and caulk guns for bath and kitchen";
const pageDescription =
  "A practical pick-list for recaulking a tub, shower, or sink — the right sealant for wet areas, the right gun for clean beads, and the prep that keeps the new bead from peeling.";

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
    question: "Silicone or siliconized-acrylic — does it really matter?",
    answer:
      "For wet areas, yes. Pure silicone stays flexible and water-resistant for years; siliconized-acrylic is easier to tool and paint but fails faster around tubs and showers. Use silicone where water sits, and save the acrylic blends for interior trim and dry joints.",
  },
  {
    question: "How long should I wait before showering after recaulking?",
    answer:
      "Twenty-four hours is the safe default for most silicone caulks; some fast-cure formulations allow 3 to 6 hours. Showering before the bead has skinned over and cured traps moisture inside the joint and leaves you recaulking again in a few months.",
  },
  {
    question: "Why does caulk keep peeling off my tub?",
    answer:
      "Usually one of three reasons: the substrate wasn't clean and dry, there's still old silicone residue, or the tub flexes under weight and cracks the bead. Fill the tub with water before caulking — the weight settles it into its loaded position so the bead cures at the right profile.",
  },
  {
    question: "Can I caulk over old caulk?",
    answer:
      "Not reliably. Silicone doesn't bond to silicone in the chemical sense — a fresh bead over an old one is held on by surface friction, and it lifts within weeks. Remove the old bead mechanically and clean the joint before applying new caulk.",
  },
  {
    question: "What bead size should I use?",
    answer:
      "Cut the nozzle to match the joint. For a typical tub-to-tile corner, a 1/8 to 3/16 inch opening is about right. Larger openings look thick and sag; smaller openings don't deliver enough material to seal a moving joint.",
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

export default function BestCaulkGuide() {
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
            Recaulking a tub is one of those jobs where the result depends
            almost entirely on the hour of prep before you squeeze the
            trigger. The bead itself takes fifteen minutes. Cleaning the old
            joint correctly and choosing the right sealant for a wet area
            is what makes the new bead last five years instead of five months.
          </p>
          <p>
            This guide walks through the four items that cover a competent
            recaulk — gun, sealant, removal, and finishing — plus the
            conditions that mean the joint isn&apos;t the real problem.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Pure silicone for wet joints.</strong>{" "}
            Kitchen backsplashes, tub surrounds, shower corners, and sink
            perimeters see standing water or sustained humidity. Pure
            silicone handles both. Siliconized-acrylic is a fine general
            interior sealant but it lifts around water within a year or two.
          </p>
          <p>
            <strong className="text-navy-900">Remove old caulk completely.</strong>{" "}
            New silicone won&apos;t bond to old silicone. A removal tool
            strips the bulk; mineral spirits or a dedicated silicone
            remover cleans the residue you can&apos;t see. Wipe the joint
            with isopropyl alcohol last so nothing oily remains.
          </p>
          <p>
            <strong className="text-navy-900">Let it cure before exposing it to water.</strong>{" "}
            The tube lists a cure time for a reason. A bead that looks
            skinned-over on the outside is still curing underneath. Water
            during cure drives through the fresh material and weakens the
            bond. Twenty-four hours is the default; plan the project
            accordingly.
          </p>
          <p>
            <strong className="text-navy-900">Bead size and tooling.</strong>{" "}
            Cut the nozzle at an angle to match the joint width, not as
            wide as the tube will let you. Lay a single continuous bead
            with no stops, then tool it once with a shaped tip or a wet
            finger. Two passes make smears; one confident pass makes a
            clean line.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four items that make the difference between a recaulk that
              lasts and one you redo next year: a good gun, the right
              sealant, a proper removal tool, and a finishing aid for
              clean lines.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When not to DIY
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            Caulk is the wrong answer when the failure is structural or
            biological. Recaulking a joint that&apos;s moving, rotted, or
            growing mold beyond the surface hides the real problem and
            resets the clock on the damage underneath.
          </p>
          <p>
            Stop and look closer if you see any of these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Soft or spongy substrate behind or below the caulk. That&apos;s
              rotted wood or saturated drywall, and a new bead seals
              moisture in rather than out.
            </li>
            <li>
              Mold that returns through new caulk within a few months.
              Surface mildew is one thing; mold growing in the material
              behind the joint means the drywall or cement board needs
              to come out.
            </li>
            <li>
              Cracks that reopen in the same spot no matter how carefully
              you caulk. A moving joint usually needs a backer rod, a
              different sealant, or structural attention — not more silicone.
            </li>
            <li>
              Grout failure alongside caulk failure. When the grout in a
              tile field is also cracking or dropping out, the substrate
              under the tile is the problem, not the bead at the edge.
            </li>
            <li>
              A persistent leak you&apos;re trying to fix from the outside
              with caulk. Water almost always finds a different path back
              in — chase the source before sealing over it.
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
              <Link href="/advice/shower-caulk-failing" className="no-underline text-navy-700 hover:text-navy-900">
                Shower caulk failing — recaulk or replace
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
