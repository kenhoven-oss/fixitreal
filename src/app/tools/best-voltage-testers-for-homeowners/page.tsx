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
        (example format: "https://amzn.to/4cyACvH").
     4. Leave `affiliateUrl: ""` to publish the card without a buy button
        (useful while drafting).
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "Non-contact voltage tester pen",
    badge: "Best Overall",
    category: "Non-contact NCVT",
    bestFor: "Quickly confirming whether a wire, outlet slot, or fixture is live before you touch it.",
    whyItMadeTheList:
      "A non-contact tester is the first tool out of the bag for almost every electrical check in a house. Hold it near a hot conductor and it lights up and beeps; hold it on a dead one and it stays quiet. It doesn't replace a meter, but it tells you whether to keep working.",
    keyBuyingNotes:
      "Look for an adjustable-sensitivity model that covers roughly 12–1000 V AC. Test the tester on a known-live outlet before every use — dead batteries are the single most common way people get surprised. Treat a silent reading as provisional, not proof.",
    affiliateUrl: "https://amzn.to/4cyACvH",
    buttonText: "Check price on Amazon",
  },
  {
    name: "GFCI outlet tester",
    badge: "Best for Outlet Checks",
    category: "Outlet/GFCI tester",
    bestFor: "Checking wiring polarity and GFCI function on standard 120 V outlets.",
    whyItMadeTheList:
      "Plug it into an outlet and a three-light pattern tells you whether hot and neutral are correct, whether the ground is connected, and whether the GFCI trips when you press the button. That's a lot of useful information for almost no effort.",
    keyBuyingNotes:
      "These don't detect every wiring fault (notably a bootleg ground), so a clean reading isn't a guarantee the outlet is wired to code. Use the decoder on the case rather than memorizing light patterns; they vary by brand.",
    affiliateUrl: "https://amzn.to/4vCRsC6",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Digital multimeter (homeowner grade)",
    badge: "Best for Deeper Checks",
    category: "Multimeter",
    bestFor: "Measuring exact voltage, checking continuity, and diagnosing low-voltage systems like doorbells or thermostats.",
    whyItMadeTheList:
      "When a non-contact tester or a GFCI tester tells you something is off, a multimeter tells you how far off. Reading actual voltage is how you distinguish a loose neutral, a backfed circuit, or a tired transformer.",
    keyBuyingNotes:
      "A CAT III 600 V rated meter with fused leads is the floor for residential work — don't buy the cheapest unrated unit. Auto-ranging makes life easier. Stick to measuring circuits you've already isolated; reading inside a panel is a different risk category.",
    affiliateUrl: "https://amzn.to/4ttXQdK",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Circuit breaker finder",
    badge: "Best for Panel Work",
    category: "Breaker finder",
    bestFor: "Identifying which breaker controls a given outlet without flipping them one by one.",
    whyItMadeTheList:
      "Half the hassle of any electrical project is figuring out which breaker to shut off. A transmitter plugs into the outlet and a receiver scans the panel until it beeps over the matching breaker. What was a ten-minute guessing game becomes thirty seconds.",
    keyBuyingNotes:
      "Accuracy varies — always verify with a non-contact tester at the outlet after turning the breaker off. Shared neutrals in older panels can cause false positives, so scan with the outlet's lamp plugged in as a confirmation.",
    affiliateUrl: "https://amzn.to/4czxXBY",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-voltage-testers-for-homeowners";
const pageTitle = "Best voltage testers for homeowners";
const pageDescription =
  "Which electrical testers actually belong in a homeowner's kit, how to use them safely, and the hard line between DIY verification and licensed electrician work.";

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
    question: "Is a non-contact tester enough on its own?",
    answer:
      "For confirming a circuit is live, usually yes — as long as you test it on a known-live outlet right before and right after you use it. For measuring anything, diagnosing a problem, or working on low-voltage systems, you also need a multimeter.",
  },
  {
    question: "Why did my tester show nothing even though I got shocked?",
    answer:
      "Most often a dead battery, a grounding issue, or a tester held outside its sensing range. Non-contact testers can also miss voltage on shielded cables or behind some box covers. Always verify on a known-live source first, and if anything feels off, stop and assume the circuit is hot.",
  },
  {
    question: "Can I test the main electrical panel myself?",
    answer:
      "You can open the cover to look, but working on the bus, the lugs, or anything upstream of the main breaker is not homeowner territory. Those parts stay energized even with the main off, and arc-flash injuries in service panels are severe.",
  },
  {
    question: "What's the difference between a tester and a multimeter?",
    answer:
      "A tester gives a yes/no or a coarse reading. A multimeter gives an exact value in volts, amps, or ohms. Testers are fast; multimeters are informative. Most homeowners benefit from owning both.",
  },
  {
    question: "Do I need one of these to change a light fixture?",
    answer:
      "Yes — a non-contact tester at minimum. Turning off a breaker is not the same as verifying power is off, and switches are occasionally wired so the neutral stays hot. Verify every conductor before you touch it.",
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

export default function BestVoltageTestersGuide() {
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
          <span>7 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            Before anything else: a voltage tester tells you whether a
            circuit is live. It does not make the circuit safe to work on,
            and it does not qualify you to work inside a service panel. The
            tools on this page cover homeowner-appropriate verification —
            checking outlets, confirming a breaker is actually off,
            measuring low-voltage devices — not wiring or panel modifications.
          </p>
          <p>
            Anything inside the main panel beyond reading it with the cover
            on, anything with aluminum branch wiring, anything that smells
            like burnt plastic, anything that's been near water — that's a
            licensed electrician&apos;s call. Testers help you be smart about
            what you touch. They do not replace training.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Verify the tester before and after every use.</strong>{" "}
            Plug a lamp into a known-live outlet, or use a receptacle you
            trust, and confirm the tester reacts. Then do the same check
            after you&apos;re done. A dead battery that develops mid-project
            is how people convince themselves a live wire is safe.
          </p>
          <p>
            <strong className="text-navy-900">Safety ratings exist for a reason.</strong>{" "}
            For residential work inside the house, CAT III 600 V is the
            floor for a multimeter. The rating isn&apos;t about accuracy —
            it's about what happens to the meter (and your hand) in a fault
            condition. Buy fused leads, and inspect them for nicks before
            every use.
          </p>
          <p>
            <strong className="text-navy-900">Test what you can see.</strong>{" "}
            If you can't visually trace a circuit from breaker to work
            point, you don&apos;t fully know what's feeding it. Shared
            neutrals, multi-wire circuits, and old backfed subpanels all hide
            voltage even when a single breaker is off.
          </p>
          <p>
            <strong className="text-navy-900">Testers verify — electricians de-energize.</strong>{" "}
            Professional electricians use lockout/tagout procedures and
            rated PPE because a tester is a one-moment reading, not a
            guarantee the circuit stays off. For most homeowner jobs,
            shutting the breaker, verifying with a tester, and working
            quickly is enough. For everything more involved, the honest
            answer is to hire it out.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four testers that together cover the realistic range of
              homeowner electrical checks. Start with the first two; add the
              multimeter once you move past yes/no questions; the breaker
              finder is an optional convenience.
            </p>
          }
          products={products}
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When not to DIY
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            Electrical work carries two categories of risk that don&apos;t
            apply to most other home repairs: shock and arc-flash. Shock is
            the one everyone thinks of. Arc-flash — a short-circuit
            explosion — is the one that injures people inside service panels.
            Homeowner tools don&apos;t protect you from either.
          </p>
          <p>
            Stop and call a licensed electrician if you see any of these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Anything inside the main service panel beyond looking at it
              with the cover on — no tightening, no adding breakers, no
              swapping busbars.
            </li>
            <li>
              Aluminum branch wiring (common in homes built roughly 1965 to
              1973). It needs specific connectors and techniques, and a
              wrong splice is a fire risk.
            </li>
            <li>
              Burnt plastic smells, scorch marks on outlet faces, or warm
              switch plates. Shut the breaker and stop.
            </li>
            <li>
              Water that has contacted wiring — flooded basements, leaks
              through ceiling fixtures, a plugged-in appliance that took a
              spill. De-energize the circuit at the panel and call a pro
              before touching anything.
            </li>
            <li>
              Breakers that trip immediately when reset, or a panel that
              hums, buzzes, or feels warm. That&apos;s active failure, not
              diagnosis material.
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
              <Link href="/advice/breaker-keeps-tripping" className="no-underline text-navy-700 hover:text-navy-900">
                Breaker keeps tripping — how to narrow it down
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/gfci-outlet-keeps-tripping" className="no-underline text-navy-700 hover:text-navy-900">
                GFCI outlet keeps tripping — what it usually means
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
