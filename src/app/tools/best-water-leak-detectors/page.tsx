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

const products: RecommendedProduct[] = [
  {
    name: "Battery puck water sensor (siren only)",
    badge: "Best Budget",
    category: "Local-siren puck",
    bestFor:
      "Renters, single-fixture monitoring, anyone home most of the time.",
    whyItMadeTheList:
      "A small puck with two contacts on the bottom. When water bridges the contacts, an 85+ dB siren sounds. No Wi-Fi, no hub, no app — just a loud noise. Set one under the water heater, behind the washing machine, under the kitchen sink, and you'll know about a leak before the floor warps.",
    keyBuyingNotes:
      "Look for at least 85 dB volume, replaceable battery (not sealed), and a low-battery indicator. Multi-pack value is real — buy enough for every fixture you care about (typically 5–8 per home).",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Wi-Fi connected leak detector (phone alerts)",
    badge: "Best Connected",
    category: "Wi-Fi sensor",
    bestFor:
      "Travelers, second-home owners, anyone away from home regularly.",
    whyItMadeTheList:
      "Pushes a phone notification the instant water is detected — not 'next time I'm home.' For an unattended house, this is the difference between a wet rug and a destroyed subfloor. Most models work over standard Wi-Fi without a separate hub.",
    keyBuyingNotes:
      "Verify the brand still updates firmware (some Wi-Fi sensors lose support when the company pivots). Pick brands integrated with Apple Home, Google Home, or Alexa — not proprietary apps. Battery life of 1+ year is typical; some models have a USB-power option for permanent install.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Whole-home smart shutoff valve (Flo / Phyn / Moen)",
    badge: "Best Protection",
    category: "Automatic shutoff",
    bestFor:
      "Owners with finished basements, multi-story homes, or homes that have already had one major leak.",
    whyItMadeTheList:
      "Installed at the water main, this category of device monitors flow and automatically shuts off the entire house when it detects abnormal use (a burst pipe, an overflowing fixture). Saves homes from catastrophic damage when no one is there to respond.",
    keyBuyingNotes:
      "Professional install required ($400-$900 depending on plumbing access). Device itself runs $400-$700. Some insurance companies offer 5-15% premium discounts for installing one — ask before buying. Pair with Wi-Fi puck sensors for fixture-level early warning.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Cable-style water sensor (perimeter alarm)",
    badge: "Best for Wide Coverage",
    category: "Cable / rope sensor",
    bestFor:
      "Long appliance pans, around water heaters, perimeter of finished-basement walls.",
    whyItMadeTheList:
      "Instead of a single contact point, this uses a sensing cable that detects water anywhere along its length. Useful for places where a leak could appear in any of several spots — under a long row of plumbing, around the full base of a water heater, or along a basement wall. One sensor covers what would otherwise need 4–6 pucks.",
    keyBuyingNotes:
      "Standalone units have a siren only; some models pair with a Wi-Fi hub for phone alerts. Cable length matters — 6-foot is standard, 12+ foot is available for wider perimeter. Replacement cable is sometimes sold separately.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-water-leak-detectors";
const pageTitle = "Best water leak detectors";
const pageDescription =
  "A $15 puck sensor catches most leaks before they ruin floors. Wi-Fi adds remote alerts. A whole-home shutoff valve stops disasters cold. Here's what fits each home.";

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
    question: "Where should I put water leak detectors?",
    answer:
      "Under or behind every appliance that uses water: washing machine, dishwasher, refrigerator (ice-maker line), water heater, sump pump, every toilet, every sink, AC condensate pan, water-softener brine tank. A typical home benefits from 5–8 sensors. Cost per sensor ($10–$20) is trivial compared to one prevented water-damage claim.",
  },
  {
    question: "Are Wi-Fi water sensors worth the extra cost?",
    answer:
      "Yes if you travel, own a second home, or care about leaks while you're at work. The basic puck sirens are useless if no one is home to hear them — a leak can run for 8 hours before you walk in. Wi-Fi sensors push phone notifications instantly. For a primary residence with someone home most of the day, basic siren pucks may be enough.",
  },
  {
    question: "Do whole-home shutoff valves work?",
    answer:
      "Yes — they're the strongest protection against catastrophic leak damage. The devices monitor water flow and shut off the main automatically when they detect a pattern indicating a burst pipe (continuous high flow, water running for hours when the house is empty). Install requires a plumber and costs $400-$900 on top of the $400-$700 device. Many insurance companies offer premium discounts (5–15%) for installation; ask before buying.",
  },
  {
    question: "Can leak detectors prevent all water damage?",
    answer:
      "No — they detect water that's already escaped containment. A sensor under the water heater catches a tank leak; a sensor behind the washing machine catches a failed hose. They won't catch a hidden leak inside a wall (you'd need moisture meters and visual inspection for that). They're an early-warning system, not a leak-prevention system.",
  },
  {
    question: "Do I need a smart-home hub for Wi-Fi sensors?",
    answer:
      "Depends on the brand. Most modern Wi-Fi leak sensors connect directly to your home Wi-Fi without a separate hub. Some older models (and some smart-home ecosystem products) require a hub. Read the listing carefully before buying. Hub-required sensors aren't worse — they often have longer battery life — but they're tied to a single ecosystem.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestWaterLeakDetectorsPage() {
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
            Water damage is the most common homeowners insurance claim — about
            one in 50 insured homes files one per year, with an average claim
            cost north of $12,000. A $15 puck sensor sitting under a water
            heater for five years pays for itself the first time it catches a
            leak before it reaches the floor.
          </p>
          <p>
            Below: four product categories that cover different homeowner
            situations, what to watch for in each, and when a whole-home
            shutoff valve becomes worth the install cost.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Detection method matches the location.</strong>{" "}
            Point sensors (pucks) catch water exactly where you place them.
            Cable sensors catch water anywhere along the cable&apos;s length —
            useful for long fixtures or full perimeters. Match the sensor
            type to the leak geometry you&apos;re worried about.
          </p>
          <p>
            <strong className="text-navy-900">Alert method matches your absence.</strong>{" "}
            Siren-only sensors work when someone is home. Wi-Fi sensors work
            when no one is. Pick based on how often the house is empty for
            8+ hours.
          </p>
          <p>
            <strong className="text-navy-900">Battery life and battery type.</strong>{" "}
            Replaceable batteries are a feature, not a flaw — sealed-battery
            sensors that die in 2–3 years are landfill products. Most pucks
            run on AA or CR123A; look for 12+ month life expectancy and a
            low-battery indicator.
          </p>
          <p>
            <strong className="text-navy-900">Volume.</strong>{" "}
            85+ dB at one meter is the floor. Lower volumes are inaudible
            from elsewhere in the house. A sensor that beeps quietly in the
            basement while you&apos;re upstairs is barely useful.
          </p>
          <p>
            <strong className="text-navy-900">Ecosystem and longevity.</strong>{" "}
            For Wi-Fi sensors, pick brands that integrate with mainstream
            smart-home platforms (Apple Home, Google Home, Alexa) — not just
            proprietary apps. A leak sensor only matters if it&apos;s still
            getting firmware updates 5 years from now.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four categories. Start with battery pucks across every fixture
              for the cheap broad coverage. Add Wi-Fi sensors at the most
              critical locations if you travel. Consider the whole-home
              shutoff valve if you have a finished basement or have already
              had a major leak.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          Where to put each sensor
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>The 8 highest-value locations for any home:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Under or behind the water heater</strong> — single biggest catastrophic-leak source.</li>
            <li><strong>Behind the washing machine</strong> — failed supply hose is one of the most common burst events.</li>
            <li><strong>Under the dishwasher</strong> — slow leaks here destroy adjacent cabinetry quietly over months.</li>
            <li><strong>Under the kitchen sink</strong> — supply lines, P-trap, disposal connections.</li>
            <li><strong>Under every bathroom sink.</strong></li>
            <li><strong>Behind every toilet</strong> — supply line + wax ring + tank failures.</li>
            <li><strong>Refrigerator ice-maker line</strong> — usually behind or under the fridge.</li>
            <li><strong>AC condensate pan</strong> — clogged drain backups are a frequent cause of ceiling damage.</li>
          </ul>
          <p>
            For finished basements: a cable sensor along the perimeter of any
            below-grade wall, plus point sensors at the sump pump and water
            heater.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When to step up to a whole-home shutoff valve
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>The economics tilt toward installing one when:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have a finished basement that would be expensive to dry out.</li>
            <li>You travel frequently or own a second home.</li>
            <li>You&apos;ve already had one major water-damage claim.</li>
            <li>Your insurance company offers a premium discount for installation (often 5–15%).</li>
            <li>You have older galvanized or polybutylene plumbing prone to surprise failures.</li>
          </ul>
          <p>
            The total install (device $400-$700, plumber labor $400-$900,
            permit $50-$150) is $850-$1,750. Set against a typical water-
            damage claim of $12,000+, the math usually works in the device&apos;s
            favor before the second year.
          </p>
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
                href="/emergency-repairs/water-leaking-from-ceiling"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Water leaking from ceiling: what to do first
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/emergency-repairs/pipe-burst-first-10-minutes"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Pipe burst: the first 10 minutes
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/tools/best-moisture-meters-for-homeowners"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Moisture meters — find the source of a leak
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/tools/best-shop-vacs-for-water-cleanup"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Shop vacs for water cleanup
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
