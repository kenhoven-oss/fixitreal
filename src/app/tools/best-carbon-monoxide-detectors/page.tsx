import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  itemListSchema,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/jsonld";
import { kenHoven } from "@/content/authors/ken-hoven";
import { AmazonDisclosure } from "@/components/tools/AmazonDisclosure";
import { RecommendedProductsSection } from "@/components/tools/RecommendedProductsSection";
import { BuyingGuideSections } from "@/components/tools/BuyingGuideSections";
import type { RecommendedProduct } from "@/components/tools/RecommendedProductCard";

const products: RecommendedProduct[] = [
  {
    name: "Plug-in CO detector with battery backup + digital display",
    badge: "Best Overall",
    category: "Plug-in with backup",
    bestFor:
      "Every required hallway location in a home with gas, oil, propane, or an attached garage.",
    whyItMadeTheList:
      "Plug-in models stay powered without battery dependence. The digital readout shows the actual ppm reading at any time — useful both for spotting a low-grade chronic leak (under the alarm threshold) and for confirming the sensor is working. Battery backup keeps it alive during power loss when CO risk often spikes (generator use, gas heat during outages).",
    keyBuyingNotes:
      "Look for UL 2034 listing. Sensor life is 7–10 years; the unit will signal end-of-life with a chirp pattern. Avoid units without a digital display — they leave you guessing whether 35 ppm or 250 ppm is causing the alarm.",
    avoidIf: "Your only available locations are battery-only (no outlet near required hallway spots).",
    typicalUse: "Permanent fixture in any hallway adjacent to sleeping areas in a fuel-burning home.",
    skillLevel: "Beginner",
    riskLevel: "Low for the device; the work it monitors is high-risk if the alarm sounds.",
    verdict: "The right default if you have a wall outlet at the required location. Digital readout matters.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "10-year sealed lithium CO + smoke combination alarm",
    badge: "Best Combo",
    category: "Battery, sealed, smoke + CO",
    bestFor:
      "Hallways outside bedrooms; replacing existing battery smoke alarms in homes with gas.",
    whyItMadeTheList:
      "Two life-safety devices in one ceiling penetration. The 10-year sealed lithium battery removes the disable-and-forget failure mode. Photoelectric smoke + electrochemical CO is the right sensor combo for the most-required residential location (hallway adjacent to sleeping areas).",
    keyBuyingNotes:
      "Verify both UL 217 (smoke) and UL 2034 (CO) listings — some 'combo' units only certify to one. The unit's life is limited by whichever sensor expires first — typically 7–10 years.",
    avoidIf: "You want the digital readout — combo units usually display alarm-state only, not real-time ppm.",
    typicalUse: "Hallway location outside bedrooms — the single most-required residential alarm spot.",
    skillLevel: "Beginner",
    riskLevel: "Low",
    verdict: "Two sensors, one penetration, one device to maintain. The right pick where outlets aren't available.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Low-level CO monitor (10 ppm sensitivity)",
    badge: "For Chronic Concerns",
    category: "Specialty / low-level",
    bestFor:
      "Homes with suspected ongoing low-grade CO exposure, occupants reporting headaches or fatigue with no other cause.",
    whyItMadeTheList:
      "Standard UL 2034 alarms don't trigger until 70 ppm (sustained 1–4 hours) or higher concentrations briefly. Below those thresholds, the alarm stays silent — but chronic exposure at 15–50 ppm can cause headaches, fatigue, and cognitive symptoms. Low-level monitors (NSI 3000, Defender models) sound at much lower thresholds.",
    keyBuyingNotes:
      "Not a replacement for a code-required UL 2034 alarm — it's a supplement. Pricier ($100–$200) and aimed at occupants who suspect a low-grade leak. Common scenarios: attached garages, older furnaces, fuel-burning fireplaces, basement apartments.",
    avoidIf: "Your home is electric-only with no attached garage and no chronic-exposure suspicion.",
    typicalUse: "As a supplement to a UL 2034 alarm — only if a leak is suspected.",
    skillLevel: "Beginner — plug-in operation; interpreting low-ppm readings is a separate skill.",
    riskLevel: "Low for the device; chronic CO exposure is a clinical concern — see a doctor if symptomatic.",
    verdict: "Not for everyone. Worth it if family is symptomatic and standard alarms are silent.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Hardwired interconnected CO detector (replacement for existing hardwired)",
    badge: "Like-for-Like Replacement",
    category: "Hardwired, interconnected",
    bestFor:
      "Homes already wired for hardwired interconnected detection — replacement only.",
    whyItMadeTheList:
      "If your existing detectors are hardwired and interconnected (one trips, all sound), a like-for-like replacement preserves that interconnection. The wiring harness varies by brand — match what you have.",
    keyBuyingNotes:
      "Match the brand of existing units (Kidde, First Alert, BRK). Different harnesses are not compatible without splicing inside the junction box. UL 2034 still required. See our [DIY smoke detector replacement guide](/diy-or-hire/smoke-detector) for the same approach with combination units.",
    avoidIf: "Your home doesn't already have hardwired interconnected detection. New circuits are electrician work.",
    typicalUse: "Like-for-like replacement only — same brand, same harness.",
    skillLevel: "Intermediate — circuit shut-off + harness matching required.",
    riskLevel: "Moderate — mismatched connector breaks the interconnect silently.",
    verdict: "Stay brand-for-brand or hire a licensed electrician. Don't improvise the harness.",
    affiliateUrl: "",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-carbon-monoxide-detectors";
const pageTitle = "Best carbon-monoxide detectors";
const pageDescription =
  "Plug-in CO detectors with battery backup and a digital display win for most homes. Here's why standard alarms miss chronic low-level exposure.";

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
    question: "Do I need a separate CO detector if my smoke alarm is a combo unit?",
    answer:
      "No — a UL 2034-listed combo smoke + CO alarm meets the code requirement for both. The question is location: combination alarms are usually mounted on the ceiling in hallways. A second plug-in CO detector at outlet level (1–5 feet off the floor) gives you broader coverage because CO mixes evenly throughout a room at any height. Many fire authorities suggest both ceiling and lower-level CO detection in homes with gas appliances.",
  },
  {
    question: "Where should CO detectors go?",
    answer:
      "Required: outside every sleeping area (hallway), at least one per level. Recommended additions: within 10 feet of any gas appliance, garage entry door, fuel-burning fireplace, and (in finished basements) near the furnace room door. Avoid placement directly above a gas range or directly next to a furnace, as those locations cause nuisance trips at normal cooking/startup ppm levels.",
  },
  {
    question: "Why does my CO detector beep occasionally without an alarm?",
    answer:
      "A single chirp every 30–60 seconds usually means low battery (in battery units) or end-of-life (in plug-in or sealed units approaching the 7–10 year sensor expiry). A pattern of 4 beeps then pause means active CO alarm — evacuate, ventilate, and don't return until the level reads zero. A pattern of 5 beeps then pause typically means sensor failure or end-of-life; replace the unit.",
  },
  {
    question: "What CO level is dangerous?",
    answer:
      "OSHA caps workplace exposure at 50 ppm averaged over 8 hours. EPA recommends indoor levels stay under 9 ppm averaged over 8 hours. UL 2034 alarms trigger at 70 ppm sustained for 1-4 hours, 150 ppm for 10-50 minutes, or 400 ppm immediately. Below 70 ppm, standard alarms stay silent — which is why low-level monitors exist for homes where chronic low-grade exposure is a concern.",
  },
  {
    question: "Are smart CO detectors worth it?",
    answer:
      "For most homes, no — the sensor is the same UL-listed sensor. Phone notification is useful for travelers or second-home owners. Watch for vendor lock-in: pick brands that integrate with Apple Home / Google Home / Alexa as well as their own app. The audible siren is the actual life-safety device; the app is a convenience.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestCarbonMonoxideDetectorsPage() {
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
            Carbon monoxide kills around 400 Americans a year and sends 50,000
            to emergency rooms. A $25 detector eliminates almost all of that
            risk. The decision isn&apos;t whether to install one — it&apos;s
            which type and where.
          </p>
          <p>
            Below: what spec actually matters, the four product categories
            that cover essentially every home, and why low-level monitors
            exist alongside the code-required alarms.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          What matters most
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">UL 2034 listing.</strong>{" "}
            The U.S. standard for residential CO alarms. Anything without
            this listing is unverified — skip it.
          </p>
          <p>
            <strong className="text-navy-900">Digital ppm display.</strong>{" "}
            A non-display unit beeps when CO exceeds the alarm threshold and
            tells you nothing else. A display lets you check the actual
            reading at any time — useful for spotting chronic low-grade
            exposure that&apos;s under the alarm threshold but still
            unhealthy.
          </p>
          <p>
            <strong className="text-navy-900">Sensor life: 7–10 years.</strong>{" "}
            Electrochemical CO sensors degrade over time and stop reading
            accurately after about a decade. Modern units signal end-of-life
            with a specific beep pattern — pay attention and replace
            promptly. Older units silently failed without warning, which is
            the most dangerous failure mode.
          </p>
          <p>
            <strong className="text-navy-900">Power source matches placement.</strong>{" "}
            Plug-in models with battery backup are ideal for outlet-level
            placement in hallways. Battery sealed lithium 10-year alarms
            work where there&apos;s no convenient outlet. Hardwired
            interconnected only when the home was wired for it.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four options covering essentially every CO-detection scenario in
              a residential home. Start with the plug-in for the primary
              outside-bedroom location; add the combo unit on a hallway
              ceiling; consider a low-level monitor only if you have a
              specific reason to suspect chronic exposure.
            </p>
          }
          products={products}
        />

        <BuyingGuideSections
          whoShouldBuy={[
            "Every home with gas appliances (range, water heater, dryer, furnace, fireplace) — code requires CO detection.",
            "Every home with an attached garage. Vehicle-exhaust CO infiltration is a documented cause of residential CO incidents.",
            "Anyone with an aging furnace, generator, or fuel-burning fireplace and chronic headache/fatigue concerns.",
          ]}
          whoShouldSkip={[
            "All-electric homes with no garage, no fireplace, and no fuel-burning equipment — code may not require detection.",
            "Renters in buildings with already-installed CO detection — that's the building's compliance burden.",
            "Anyone treating a low-level monitor as a replacement for a UL 2034 alarm. They're a supplement, not a substitute.",
          ]}
          commonMistakes={[
            "Buying a CO-only when a smoke + CO combo is the right pick for the same hallway location.",
            "Trusting an alarm older than 7 years. CO sensors degrade silently — replace on the manufacturer cycle.",
            "Placing CO detectors at ceiling height in homes with high ceilings (CO mixes — 4–5 ft is the standard).",
            "Confusing 'no alarm' with 'no CO.' Standard alarms trigger above 70 ppm; chronic 20–50 ppm exposure stays under threshold.",
          ]}
          safety={
            <>
              CO is invisible, odorless, and fatal at high concentrations.{" "}
              <strong>If an alarm sounds, get everyone outside and call 911
              from outside the building.</strong> Do not re-enter. Do not
              vent the house yourself — first responders carry calibrated
              meters and need the air-mass intact for the initial reading.
              After the incident, a licensed HVAC / gas-utility tech must
              identify the source before re-occupancy.
            </>
          }
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          The low-level CO problem
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            UL 2034 — the standard every code-required residential CO alarm
            meets — was designed to prevent acute poisoning. It triggers at
            70 ppm sustained for 1–4 hours, 150 ppm for 10–50 minutes, or
            400 ppm immediately. Below those thresholds, the alarm stays
            silent.
          </p>
          <p>
            EPA recommends indoor levels stay under 9 ppm over an 8-hour
            average. OSHA workplace limit is 50 ppm over 8 hours. There&apos;s
            a wide gap between &ldquo;EPA-healthy&rdquo; (under 9 ppm) and
            &ldquo;UL-alarm-triggers&rdquo; (70 ppm sustained). Chronic
            exposure in that range causes headaches, fatigue, cognitive
            symptoms, and worsens cardiovascular conditions — without ever
            setting off your alarm.
          </p>
          <p>
            Common chronic-exposure sources: poorly-maintained furnaces,
            attached garages with cars idling, fuel-burning fireplaces with
            inadequate draft, gas water heaters with backdrafting flues.
            Low-level monitors (the third option above) sound at 10–25 ppm,
            catching the levels standard alarms miss.
          </p>
          <p>
            Low-level monitors aren&apos;t replacements for UL 2034 alarms —
            they&apos;re supplements for occupants who suspect a low-grade
            issue or want extra margin.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When to call a pro
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>An alarm sounds with no obvious cause.</strong>{" "}
              Evacuate, ventilate, then call your gas utility&apos;s 24-hour
              line. They&apos;ll come for free to check appliances.
            </li>
            <li>
              <strong>Headaches or fatigue that improve when you leave
              home.</strong> A classic low-grade CO exposure pattern. Get a
              low-level monitor and an HVAC inspection.
            </li>
            <li>
              <strong>A furnace, water heater, or fireplace shows soot
              streaks above it.</strong> Soot indicates incomplete combustion
              and is a CO warning sign. Stop using the appliance and have it
              inspected.
            </li>
            <li>
              <strong>You&apos;re using a generator, charcoal grill, or
              kerosene heater indoors.</strong> Get everyone out
              immediately. These produce lethal CO levels in minutes.
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
                href="/tools/best-smoke-detectors-for-homeowners"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                Best smoke detectors for homeowners
              </Link>
            </li>
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
            itemListSchema({
              name: pageTitle,
              description: pageDescription,
              url: path,
              items: products.map((p) => ({
                name: p.name,
                url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
              })),
            }),
          ])}
        />
      </Section>
    </>
  );
}
