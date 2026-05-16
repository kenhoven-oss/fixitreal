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
    name: "5-lb ABC dry chemical extinguisher (UL rated 3-A:40-B:C)",
    badge: "Best Overall",
    category: "Multi-purpose ABC dry chemical",
    bestFor:
      "General home use — one in the kitchen, one near bedrooms, one in the garage.",
    whyItMadeTheList:
      "ABC dry chemical handles all three home-fire classes: ordinary combustibles (wood, paper, fabric), flammable liquids (cooking oil, paint, gasoline), and energized electrical equipment. The 5-lb size is the practical sweet spot — large enough to actually fight a fire, small enough to lift and aim under stress. Look for UL ratings of at least 3-A:40-B:C.",
    keyBuyingNotes:
      "Buy units with a pressure gauge, metal valve assembly (not plastic), and a service tag for annual inspection. Avoid 'disposable' 2.5-lb units as primary extinguishers — they discharge in under 10 seconds and can't be refilled.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Kitchen-class K extinguisher (wet chemical)",
    badge: "Best for Cooking Fires",
    category: "Wet chemical, Class K",
    bestFor:
      "Mounted near (not above) the stove. Designed for grease and cooking-oil fires.",
    whyItMadeTheList:
      "ABC dry chemical works on cooking fires, but Class K wet chemical works better — it creates a foam that smothers oil and prevents reignition. For homes that cook frequently with deep oil (frying, wok cooking), this is the right primary extinguisher in the kitchen. Skip if you only cook lightly.",
    keyBuyingNotes:
      "Mount near the stove but not above it — you don't want to reach over flames to grab it. Class K is a supplement, not a replacement, for a general-purpose ABC unit. Wet chemical leaves residue requiring cleanup, so use is reserved for the actual emergency.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Fire blanket (wool/fiberglass)",
    badge: "Best for Small Cooking Fires",
    category: "Fire blanket",
    bestFor:
      "Stovetop grease fires and clothing fires. Mount near the kitchen exit.",
    whyItMadeTheList:
      "For a small stovetop fire (skillet, pot), a fire blanket smothers flames faster than an extinguisher and leaves no chemical residue on appliances or food prep surfaces. Faster to deploy than reading an extinguisher manual under stress. Effective on clothing fires.",
    keyBuyingNotes:
      "Look for tested compliance with BS EN 1869 (the standard for fire blankets). Sizes 39\"×39\" or 47\"×47\" are typical residential. Reusable models exist, but most are single-use after deployment. Mount in a quick-release pouch within 6 feet of the stove.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Compact 1.5-lb automotive/garage extinguisher",
    badge: "Best for Vehicle/Garage",
    category: "ABC, compact",
    bestFor:
      "Vehicles, workshop spaces, riding mowers, motorcycles.",
    whyItMadeTheList:
      "A 5-lb extinguisher is heavy and bulky for a vehicle. Compact 1.5-lb ABC units mount with a bracket, weigh under 3 pounds full, and discharge for ~8 seconds — long enough to fight a small vehicle or workshop fire while you back away to call 911. Not a primary home extinguisher; a supplement for the spaces a 5-lb doesn't fit.",
    keyBuyingNotes:
      "Look for SAE / DOT-listed automotive models for vehicle use. UL 1-A:10-B:C is a useful minimum rating. Replace after any partial discharge — the powder settles and pressure drops over time once disturbed.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-fire-extinguishers-for-home";
const pageTitle = "Best fire extinguishers for home";
const pageDescription =
  "One 5-lb ABC extinguisher per floor, a Class K in the kitchen, a fire blanket near the stove. Here's what each does, where to mount it, and when to replace.";

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
    question: "How many fire extinguishers does a home need?",
    answer:
      "NFPA recommends at least one per level, one in the kitchen, one in the garage, and one in any workshop. A typical 3-bedroom two-story home needs 3–5 total. Mount each near an exit (not deep in the room) — you want to fight a fire on the way out, not move toward the fire to grab the extinguisher.",
  },
  {
    question: "ABC, BC, or Class K — which fire-extinguisher class do I need?",
    answer:
      "ABC for general home use — covers ordinary combustibles, flammable liquids, and electrical fires. BC is liquid + electrical only (no wood/paper); skip in favor of ABC. Class K is purpose-built for cooking oil fires and works better than ABC on grease fires; useful as a supplement in kitchens with heavy frying. Never use water on a grease or electrical fire.",
  },
  {
    question: "When should I replace a fire extinguisher?",
    answer:
      "Replace immediately after any discharge, even partial — the powder settles, the pressure drops, and reuse is unreliable. Otherwise: check the pressure gauge monthly (needle in the green band). Most home extinguishers have a 10–12 year service life from the manufacture date; refillable models can be professionally serviced every 6 years.",
  },
  {
    question: "How do I actually use a fire extinguisher?",
    answer:
      "Remember P.A.S.S.: Pull the pin, Aim at the base of the fire (not the flames), Squeeze the handle, Sweep side to side. Stand 6–8 feet away. A 5-lb extinguisher discharges for 13–15 seconds — practice the motion mentally before you ever need it. If the fire doesn't visibly diminish in the first few seconds, get out and call 911.",
  },
  {
    question: "What about a fire blanket vs. an extinguisher?",
    answer:
      "Use both. For a small stovetop fire (skillet, pot), a fire blanket smothers it instantly with no chemical mess. For a larger fire or any fire that's spread beyond the original surface, an extinguisher. The blanket is faster for kitchen-class events; the extinguisher has more range and tackles more scenarios.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestFireExtinguishersForHomePage() {
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
            Most home fires are small for the first 30 seconds. The right
            extinguisher, mounted in the right place, often ends them before
            the fire department&apos;s on the way. The wrong extinguisher —
            or one buried in a closet — usually doesn&apos;t.
          </p>
          <p>
            Below: what the letter classes mean, the practical mix for a
            typical home, and where to mount each unit so it&apos;s actually
            reachable in an emergency.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Match the class to the fuel.</strong>{" "}
            Class A is ordinary combustibles (wood, paper, fabric). Class B
            is flammable liquids (cooking oil, paint, gas). Class C is
            energized electrical. Class K is cooking grease. ABC handles all
            three of the first classes — the right primary choice for a home.
          </p>
          <p>
            <strong className="text-navy-900">5-lb is the practical home size.</strong>{" "}
            2.5-lb units discharge in 8–10 seconds and don&apos;t leave room
            for error. 10-lb units weigh 18+ pounds full and are hard to lift
            under stress, especially for older adults or smaller users. 5-lb
            is the sweet spot.
          </p>
          <p>
            <strong className="text-navy-900">UL rating of at least 3-A:40-B:C.</strong>{" "}
            The numbers indicate firefighting capacity for each class.
            Higher is better; 3-A:40-B:C is the floor for a primary home
            extinguisher. Cheaper 1-A:10-B:C units are fine as supplemental
            (garage, vehicle) but underweight for whole-house duty.
          </p>
          <p>
            <strong className="text-navy-900">Pressure gauge, metal valve, refillable.</strong>{" "}
            Pressure gauge lets you verify the unit is charged without
            discharging it. Metal valve assembly outlasts plastic. Refillable
            (after professional service) is better long-term than disposable.
          </p>
          <p>
            <strong className="text-navy-900">Mount near the exit, not deep in the room.</strong>{" "}
            The extinguisher is for fighting fire on the way out, not for
            moving toward fire to retrieve it. Brackets near every entry to
            a high-risk room work better than &ldquo;under the kitchen
            sink.&rdquo;
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four categories. The 5-lb ABC is the primary extinguisher
              every home should have. The Class K and fire blanket are
              kitchen-specific upgrades for homes that cook often. The
              compact 1.5-lb is for vehicles and workshop spaces where a
              5-lb won&apos;t fit.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          Where to mount each unit
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Kitchen:</strong> 5-lb ABC mounted near (not above) the
              stove, plus a fire blanket within 6 feet of the cooktop. Add a
              Class K if heavy frying is routine.
            </li>
            <li>
              <strong>Each level:</strong> One 5-lb ABC mounted near the main
              hallway / staircase, where everyone passes during evacuation.
            </li>
            <li>
              <strong>Garage and workshop:</strong> One 5-lb ABC near the
              door, plus a compact 1.5-lb on the riding mower or workshop
              workbench.
            </li>
            <li>
              <strong>Master bedroom or upstairs:</strong> Optional but
              recommended — second-floor escape paths benefit from an
              extinguisher you don&apos;t have to descend through smoke to
              retrieve.
            </li>
            <li>
              <strong>Vehicle:</strong> Compact 1.5-lb mounted with a bracket
              in the trunk or under-seat area.
            </li>
          </ul>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When NOT to use an extinguisher
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>Get out and call 911 if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The fire is larger than the size of a wastebasket.</li>
            <li>The fire is between you and the exit.</li>
            <li>You can&apos;t see well due to smoke.</li>
            <li>The fire is spreading rapidly.</li>
            <li>You don&apos;t know what&apos;s burning (mystery chemical fires).</li>
            <li>The room is filling with smoke faster than you can fight the fire.</li>
          </ul>
          <p>
            Civilian-discharge extinguishers buy a small amount of time on
            small fires. They are not firefighting equipment; their job is
            to slow a fire long enough for everyone to escape. Get out
            first, fight second.
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
                href="/tools/best-smoke-detectors-for-homeowners"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Best smoke detectors for homeowners
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/emergency-repairs/outlet-smoking"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Outlet is smoking: what to do first
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/senior-home-safety/home-safety-checklist-for-elderly-parents"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Home safety checklist for elderly parents
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
