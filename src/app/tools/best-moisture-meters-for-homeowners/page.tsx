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
        (example format: "https://amzn.to/48HfL88").
     4. Leave `affiliateUrl: ""` to publish the card without a buy button.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "Pin-type moisture meter",
    badge: "Best Overall",
    category: "Moisture meter",
    bestFor: "Reading actual moisture content in wood, drywall, and trim through small pin holes.",
    whyItMadeTheList:
      "A pin meter drives two short probes into the material and measures electrical resistance between them. It gives you a direct reading on the material you're actually testing, which is what most homeowners need when they're trying to answer the simple question of whether something is wet.",
    keyBuyingNotes:
      "The pin holes are small but real — don't use one on a finished surface you care about. Look for a unit with separate scales for wood and drywall, and replacement pins available, because pins bend.",
    affiliateUrl: "https://amzn.to/48HfL88",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Pinless moisture meter",
    badge: "Best Non-Invasive",
    category: "Moisture meter",
    bestFor: "Scanning large areas of wall, ceiling, or floor without leaving marks.",
    whyItMadeTheList:
      "A pinless meter uses a sensor pad and reads roughly the top inch of material. It's faster than pin testing, leaves no holes, and is how you sweep a whole wall to find where the wet spot actually peaks before confirming with pins if you need to.",
    keyBuyingNotes:
      "Readings are relative, not absolute — always take a baseline on a known-dry area in the same material and compare. Metal behind drywall (studs, fasteners, foil insulation) will throw readings off, so expect some false highs.",
    affiliateUrl: "https://amzn.to/4vC70Gk",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Dual-mode (pin + pinless) moisture meter",
    badge: "Best Versatile",
    category: "Moisture meter",
    bestFor: "One tool that can both scan broadly and confirm spot readings.",
    whyItMadeTheList:
      "A combined meter saves you owning two tools and lets you use the right mode for the situation — pinless to find the spot, pins to verify. For most homeowners who expect to use the tool a handful of times a year, this is the right answer.",
    keyBuyingNotes:
      "Combined units are usually larger and a bit more expensive, but if you're only going to buy one meter, this is it. Check that both modes have their own calibrated scales and that the pinless depth is at least 3/4 inch.",
    affiliateUrl: "https://amzn.to/4mC7I2e",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-moisture-meters-for-homeowners";
const pageTitle = "Best moisture meters for homeowners";
const pageDescription =
  "How to pick a moisture meter that actually helps you diagnose a wet wall or floor, how to read the numbers honestly, and when a meter tells you it's time to bring in a pro.";

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
    question: "What moisture reading counts as wet?",
    answer:
      "For wood, above roughly 16% is elevated and above 20% is wet. For drywall, most meters use a relative 0–100 scale; anything more than about 30% above the dry baseline in the same wall is a problem. Always compare to a dry spot in the same material rather than trusting a single number.",
  },
  {
    question: "Pin or pinless — which should I buy?",
    answer:
      "If you only want to answer yes/no questions on a few trim boards a year, pin. If you're trying to trace a leak across a whole wall, pinless. A dual-mode meter splits the difference and is the honest answer for most one-meter homeowners.",
  },
  {
    question: "Why is my meter giving wildly different readings an inch apart?",
    answer:
      "Probably a stud, a fastener, or foil-faced insulation behind the drywall. Pinless meters especially pick up anything conductive. Move a few inches off the high reading and see if it settles; a real wet patch is usually broad, not a single hot dot.",
  },
  {
    question: "Do I need to calibrate it?",
    answer:
      "Most consumer meters aren't field-calibratable — they rely on factory calibration. Test the meter on a known-dry piece of drywall or framing before every use to confirm it reads roughly zero. A meter that reads high on obviously dry material is telling you the batteries are low or the unit has drifted.",
  },
  {
    question: "How long does drywall need to read dry before I can paint?",
    answer:
      "Most refinishers wait until readings are within a few points of the surrounding dry area and stable for at least 24 hours. Sealing paint over still-damp drywall traps moisture and sets up for a mold problem later, so patience pays.",
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

export default function BestMoistureMetersGuide() {
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
            Water stains lie about scale. A tea-colored ring on the ceiling
            could be a tablespoon of old condensation or a wet cavity above
            you right now. A moisture meter is the cheapest way to tell the
            difference, and it turns an anxious guess into a measurement you
            can track over a few days.
          </p>
          <p>
            The catch is that meters only help if you read them correctly.
            This guide covers the two sensor types, what the numbers mean,
            and the situations where the meter&apos;s job ends and a
            remediation specialist&apos;s begins.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Understand what the reading actually is.</strong>{" "}
            Pin meters measure electrical resistance and report a percent
            moisture content — that&apos;s an absolute number for wood. Pinless
            meters measure dielectric response and report a relative number
            that only means something in comparison to a dry area of the same
            material. A single high reading on its own tells you almost nothing.
          </p>
          <p>
            <strong className="text-navy-900">Always take a baseline.</strong>{" "}
            Before you chase the stain, read three or four spots in the same
            wall or floor that you know are dry. That&apos;s your zero. Now
            the wet area has context: five points above baseline is noise,
            thirty points above baseline is a real wet spot.
          </p>
          <p>
            <strong className="text-navy-900">Different materials, different scales.</strong>{" "}
            Most consumer meters have selectable modes for wood, drywall,
            and masonry, because the same electrical reading means different
            things in each. Using the wood scale on drywall will give you
            numbers that look alarming and don&apos;t mean what you think.
          </p>
          <p>
            <strong className="text-navy-900">Plot it over time, not once.</strong>{" "}
            The most useful thing a meter does is confirm drying. Read the
            same spots daily for three or four days. If the numbers drop,
            the wall is drying. If they hold steady or climb, water is still
            getting in somewhere.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Three meters covering the realistic homeowner range —
              invasive, non-invasive, and a combination unit for people
              who&apos;d rather not decide.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When a meter isn&apos;t enough
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            A moisture meter measures surface and near-surface moisture.
            It&apos;s blind to what&apos;s behind a vapor barrier, inside
            insulation, or across a wall cavity. For bigger or older water
            events, the meter&apos;s job is to flag the problem — not
            solve it.
          </p>
          <p>
            Call a restoration or remediation specialist if you see any of
            these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A visible stain that keeps growing after the apparent source
              has been fixed. That points to a second leak or a wall cavity
              holding water the meter can&apos;t see.
            </li>
            <li>
              A musty smell without a visible stain. Hidden mold needs
              thermal imaging or invasive inspection — a surface meter
              won&apos;t find it.
            </li>
            <li>
              Readings that stay elevated for more than a few days despite
              airflow and dehumidification. Something is still feeding the
              wall.
            </li>
            <li>
              Any suspicion of category-2 or category-3 water (greywater
              from appliances, sewage, or flood water). Those require
              trained removal, not just drying.
            </li>
            <li>
              Soft spots in flooring or sagging drywall. By the time the
              material feels soft, the structural layer underneath has
              absorbed more than a meter alone can characterize.
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
              <Link href="/advice/ceiling-water-stain" className="no-underline text-navy-700 hover:text-navy-900">
                Ceiling water stain — what it tells you
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/soft-spot-in-laminate-or-wood-floor" className="no-underline text-navy-700 hover:text-navy-900">
                Soft spot in a laminate or wood floor
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
