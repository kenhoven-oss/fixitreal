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
   PRODUCTS — drop Amazon SiteStripe short links into `affiliateUrl`.
   Leaving it blank just hides the buy button for that card.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "10-year sealed lithium photoelectric smoke alarm",
    badge: "Best Overall",
    category: "Battery, sealed",
    bestFor:
      "Every required location in a typical home — bedrooms, hallways, every level.",
    whyItMadeTheList:
      "Sealed 10-year lithium units remove the failure mode that kills users — homeowners pulling the battery on a chirping alarm and forgetting to replace it. Photoelectric sensors respond faster to smoldering fires (the type that kills at night) than ionization-only units.",
    keyBuyingNotes:
      "Check the manufacture date stamped on the back — shelf time counts against the 10-year clock. Look for UL 217 listing and a hush button that silences nuisance trips without disabling the alarm.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Combination smoke + carbon-monoxide alarm (battery 10-year)",
    badge: "Best Combo",
    category: "Smoke + CO, sealed battery",
    bestFor:
      "Homes with gas appliances, an attached garage, a fireplace, or oil/propane heat.",
    whyItMadeTheList:
      "Two life-safety detectors in one location means one ceiling penetration and one device to maintain. Especially valuable on hallways outside sleeping areas, where CO needs detection alongside smoke. Photoelectric smoke + electrochemical CO is the right sensor combo for most homes.",
    keyBuyingNotes:
      "Verify UL 217 (smoke) AND UL 2034 (CO) listings — some 'combo' units only meet one standard. CO sensors have a 7–10 year life; the combo unit's life is limited by whichever sensor expires first.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Hardwired interconnected photoelectric (with battery backup)",
    badge: "Best for New Construction",
    category: "Hardwired, interconnected",
    bestFor:
      "Homes already wired for hardwired smoke detection — replacement only.",
    whyItMadeTheList:
      "If your existing alarms are hardwired and interconnected (one trips, they all sound), a like-for-like hardwired replacement preserves that interconnection. Mixing hardwired with new battery-only units breaks the interconnect — when one alarm trips, the others don't sound.",
    keyBuyingNotes:
      "Match the brand of your existing units (Kidde, First Alert, BRK) — wiring harness connectors are not universal. Brand-mismatched hardwired alarms require splicing inside the junction box. See our [DIY smoke detector replacement guide](/diy-or-hire/smoke-detector).",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Smart smoke + CO alarm (Wi-Fi connected)",
    badge: "Optional Upgrade",
    category: "Smart, hardwired or battery",
    bestFor:
      "Owners who travel, second homes, or families with smartphone-monitored elderly parents.",
    whyItMadeTheList:
      "Smart alarms push a phone notification when they trip — useful if you're away from home or live alone. The added value is monitoring, not better fire detection (the sensor inside is the same UL-listed sensor). Worth the cost only if remote notification matters for your situation.",
    keyBuyingNotes:
      "Avoid models that rely on a single proprietary hub — those die when the company changes its app. Stick to brands that integrate with Apple Home, Google Home, or Alexa as well as their own app. UL 217 + UL 2034 listings still required.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-smoke-detectors-for-homeowners";
const pageTitle = "Best smoke detectors for homeowners";
const pageDescription =
  "Sealed 10-year lithium photoelectric units win for most homes. Here's what spec actually matters, what to avoid, and how many alarms a typical house needs.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  type: "article",
  publishedAt: "2026-05-16",
  updatedAt: "2026-05-16",
  authorName: kenHoven.name,
  section: "Buying guide",
});

const faqs = [
  {
    question: "Photoelectric or ionization — which type of smoke alarm is better?",
    answer:
      "Photoelectric for most homes. Ionization alarms respond faster to flaming fires (paper, kitchen flame); photoelectric responds faster to smoldering fires (electrical, upholstery, mattress) — and smoldering fires are what kill people at night. NFPA, USFA, and most fire departments now recommend either photoelectric OR dual-sensor for residential use. Pure ionization-only is the lowest-rated option for life safety.",
  },
  {
    question: "How many smoke alarms does my house need?",
    answer:
      "Every bedroom, the hallway outside every sleeping area, at least one per level (including basement and habitable attic), and (in newer codes) within 10 feet of the kitchen. A typical 3-bedroom single-story home needs 4–5 alarms; a 4-bedroom two-story needs 6–8. State codes vary — check yours.",
  },
  {
    question: "Are 10-year sealed lithium alarms worth the extra cost?",
    answer:
      "Yes, almost universally. The $10–$15 premium over a battery-replaceable unit saves a decade of nuisance battery changes and — more importantly — removes the most common failure mode: homeowners disabling a chirping alarm and forgetting to put the battery back. Eight states (CA, NY, MA, MD, OR, IA, VT, and a growing list) now require sealed 10-year units by state law.",
  },
  {
    question: "Do smoke alarms expire?",
    answer:
      "Yes — replace every 10 years from the manufacture date stamped on the back of the unit, even if it still chirps when tested. The sensor degrades over time and stops reliably detecting smoke at the concentrations it was designed for. The 10-year clock starts at manufacture, not at install, so a unit that's sat on a hardware-store shelf for 2 years is already 20% through its useful life.",
  },
  {
    question: "Are smart smoke alarms worth it?",
    answer:
      "For most homes, no — the sensor inside is the same as a regular UL-listed alarm; you're paying for the Wi-Fi notification. Useful for second homes, frequent travelers, or family members monitoring elderly parents remotely. Not useful if you'll be in the house anyway. Watch for vendor lock-in: pick brands that integrate with mainstream smart-home platforms, not proprietary apps that die when the company pivots.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestSmokeDetectorsForHomeownersPage() {
  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb items={breadcrumbItems} />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Buying guide
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          {pageTitle}
        </h1>
        <p className="mt-4 text-sm text-ink-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>
            By{" "}
            <Link href={kenHoven.url} className="no-underline hover:text-navy-900">
              {kenHoven.name}
            </Link>
          </span>
          <span>Updated May 16, 2026</span>
          <span>5 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            A smoke detector is a $20 device that decides whether everyone gets
            out of a fire. The good news: this category is one of the easiest
            in the home to get right. The wrong answer (an ionization-only,
            user-replaceable-battery alarm) costs the same as the right answer
            (a 10-year sealed lithium photoelectric).
          </p>
          <p>
            This guide skips brand worship and focuses on the specs that
            actually matter: sensor type, sealed vs. user-replaceable battery,
            UL listing, and where to put each alarm.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Photoelectric, not ionization.</strong>{" "}
            Photoelectric sensors respond faster to the smoldering fires that
            kill people at night. Ionization-only sensors are the cheapest
            option for a reason — they&apos;re the worst at the failure mode
            that matters. Dual-sensor units are fine; pure photoelectric is
            fine; pure ionization is not.
          </p>
          <p>
            <strong className="text-navy-900">Sealed lithium 10-year battery.</strong>{" "}
            The most common cause of smoke-alarm failure is a user who
            disabled the alarm during a nuisance trip and forgot to restore
            it. Sealed units can&apos;t be disabled — pull the unit off the
            ceiling and the alarm sounds for a full minute. Annoying once;
            life-saving the night a real fire happens.
          </p>
          <p>
            <strong className="text-navy-900">UL 217 listing.</strong>{" "}
            The standard residential smoke-alarm certification. Any unit
            without it is unverified. UL 2034 is the matching CO standard for
            combination units.
          </p>
          <p>
            <strong className="text-navy-900">Manufacture date, not install date.</strong>{" "}
            The 10-year life starts when the unit was made. A unit that&apos;s
            been on the shelf for 3 years is already 30% spent. Check the
            stamp on the back before buying — most retailers won&apos;t price-
            discount old stock, so older inventory is the worst value.
          </p>
          <p>
            <strong className="text-navy-900">Combination smoke + CO if you have gas.</strong>{" "}
            Any home with gas appliances, oil heat, propane, an attached
            garage, or a wood/gas fireplace should have CO detection
            alongside smoke. A combo unit at each required hallway location
            is one device instead of two.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four options that cover essentially every homeowner. Start with
              the photoelectric battery 10-year for a fully battery-only home;
              jump to the combo if you have gas or an attached garage; the
              hardwired option is for like-for-like replacement only.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          Where to place each alarm
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            U.S. building codes (and most state fire codes) require alarms in
            these locations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Every bedroom.</strong> One alarm in each room used for
              sleeping.
            </li>
            <li>
              <strong>Hallway outside sleeping areas.</strong> One alarm in the
              hallway adjacent to bedrooms.
            </li>
            <li>
              <strong>One per level.</strong> Including basement (mounted at
              the top of the basement stairs is acceptable) and habitable
              attic.
            </li>
            <li>
              <strong>Within 10 feet of the kitchen</strong> (newer codes; check
              your state).
            </li>
          </ul>
          <p>
            Avoid placing alarms within 3 feet of bathroom doors, kitchen
            cooktops, ceiling fans, or HVAC supply registers — all of those
            cause nuisance trips.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          What to avoid
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Ionization-only alarms.</strong> Cheapest at retail,
              worst for the smoldering fires that kill at night.
            </li>
            <li>
              <strong>User-replaceable 9V battery models</strong> as primary
              alarms. Acceptable as a temporary fix; the 10-year sealed
              units cost the same and remove the disable-and-forget failure.
            </li>
            <li>
              <strong>Used or open-box units.</strong> The sensor degrades
              from the date of manufacture. You can&apos;t tell remaining
              life from looking at a used unit.
            </li>
            <li>
              <strong>Pure smart-only alarms with no audible siren.</strong>{" "}
              The phone notification is a feature; the siren is the actual
              life-safety device. If the siren isn&apos;t loud enough to wake
              a sleeping family, it&apos;s not enough.
            </li>
          </ul>
        </div>

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

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related reading</h2>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li>
              →{" "}
              <Link
                href="/diy-or-hire/smoke-detector"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Should I replace my own smoke detector?
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/costs/smoke-detector-replacement"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Smoke detector replacement cost
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/home-inspection-repairs/sellers-replace-smoke-detectors-before-closing"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Do sellers have to replace smoke detectors before closing?
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/tools/best-carbon-monoxide-detectors"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Best carbon-monoxide detectors
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
              datePublished: "2026-05-16",
              dateModified: "2026-05-16",
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
