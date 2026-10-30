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
import { AffiliateAnchor } from "@/components/ui/AffiliateAnchor";
import { amazonSearch } from "@/lib/amazon";

/* --------------------------------------------------------------------------
   PRODUCTS

   Every amzn.to link below is a verified SiteStripe link that already lives
   on this site (see docs/affiliate-destination-audit.md for what each one
   lands on). The smart-home ecosystem slot uses a tagged Amazon search link
   because FixItReal has no verified link for that category — never invent
   an ASIN or short link to fill it.
-------------------------------------------------------------------------- */

const products: RecommendedProduct[] = [
  {
    name: "Battery puck water sensor, multi-pack (siren only)",
    badge: "Best Standalone",
    category: "Standalone siren puck",
    bestFor:
      "Someone is usually home. Under every sink, behind the washer, in the water heater pan.",
    whyItMadeTheList:
      "Two metal contacts on the underside; when water bridges them a siren sounds. No Wi-Fi, no hub, no app, no account that can be discontinued. The multi-pack is the point — a home needs five to eight of these, and at this price there is no reason to leave a fixture uncovered.",
    keyBuyingNotes:
      "Look for a stated volume of 85 dB or more, a user-replaceable battery rather than a sealed one, and a low-battery chirp. Flat pucks slide under appliances; models with a probe on a lead reach into a drip pan you cannot see.",
    avoidIf:
      "The house is empty for 8+ hours most days, or you own a second home — a siren nobody hears is a wet floor.",
    typicalUse: "Permanent under every water-using appliance; battery every 1–2 years.",
    skillLevel: "Beginner — set it down and press test.",
    riskLevel: "Low. The leak it catches is the high-risk part.",
    verdict: "The cheapest useful protection in the house. Buy the multi-pack and cover everything.",
    affiliateUrl: "https://amzn.to/4hyvBHr",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Wi-Fi leak detector kit with gateway (phone alerts)",
    badge: "Best Wi-Fi",
    category: "Wi-Fi / app alert",
    bestFor:
      "Anyone away from home during the day, travellers, second homes, and basements you rarely visit.",
    whyItMadeTheList:
      "Pushes a phone, email, or text alert the moment water is detected, plus a loud local siren. The kit we link uses a small plug-in gateway on your 2.4 GHz Wi-Fi that talks to the sensors by long-range radio — so sensors in a detached garage or a deep basement still report, where a sensor that joins Wi-Fi directly often drops off.",
    keyBuyingNotes:
      "Gateway kits: check the sensor-to-gateway range (this one is rated around 1,900 ft open air) and how many sensors one gateway supports. Direct-Wi-Fi sensors: check 2.4 GHz support and whether the maker still ships firmware. Either way, buy enough sensors for every fixture — the alert is only as good as the coverage.",
    avoidIf:
      "You want Apple Home, SmartThings, or Home Assistant automations — this kit lives in its own app. See the smart-home pick below.",
    typicalUse: "Water heater, washer, sump pit, basement perimeter, under sinks.",
    skillLevel: "Beginner — plug in the gateway, pair in the app, place the sensors.",
    riskLevel: "Low for the device.",
    verdict: "The right default for most homeowners: you learn about the leak wherever you are.",
    affiliateUrl: "https://amzn.to/4bM1ngp",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Smart-home ecosystem sensor (Apple Home, SmartThings, Z-Wave, Zigbee)",
    badge: "Best for Smart Homes",
    category: "Smart-home sensor",
    bestFor:
      "Homes already running a hub or a HomeKit/Thread setup that want leak alerts in the same app as everything else.",
    whyItMadeTheList:
      "If you already get your door-lock and thermostat alerts in one place, a leak sensor that reports there too is the one you will actually act on. These sensors join the hub you have (Z-Wave, Zigbee, Thread, or Matter) rather than a brand's cloud, and they can trigger automations — turn on lights, close a smart valve, announce on a speaker.",
    keyBuyingNotes:
      "Match the radio to your hub before anything else: a Z-Wave sensor is useless on a Zigbee-only hub. HomeKit users should look for Thread or Matter. Check that the listing names your platform explicitly, not just 'works with smart home'. Local alarm volume and a replaceable battery still matter.",
    avoidIf:
      "You do not already own a hub. Buying a hub just for leak sensors costs more and adds a failure point; the Wi-Fi kit is simpler.",
    typicalUse: "Same locations as any sensor, plus wherever an automation (smart valve, siren) adds value.",
    skillLevel: "Intermediate — you need to know which radio your hub speaks.",
    riskLevel: "Low.",
    verdict: "Best only if the hub is already on the wall. Then it is the cleanest option.",
    affiliateUrl: amazonSearch("water leak sensor Z-Wave Zigbee HomeKit Matter"),
    buttonText: "Browse smart-home leak sensors on Amazon",
  },
  {
    name: "Cable-style water sensor, 24-ft sensing lead (perimeter alarm)",
    badge: "Best for Basements",
    category: "Cable / probe sensor",
    bestFor:
      "Basement perimeters, long appliance pans, the full base of a water heater, and spots you cannot reach.",
    whyItMadeTheList:
      "Instead of one contact point, the sensing lead detects water anywhere along its length, and the alarm body sits where you can hear it while the probe goes behind the heater or along a foundation wall. One unit covers what would take four to six pucks.",
    keyBuyingNotes:
      "Cable length is the spec: 6 ft covers an appliance pan, 20 ft or more runs a basement wall. The one we link is siren-only (85 dB, 9V battery); if you need phone alerts along a perimeter, some Wi-Fi kits sell an optional probe cable for their sensors.",
    avoidIf:
      "You only have single-point risks — one washer, one heater. A puck is cheaper and simpler.",
    typicalUse: "Around the water heater base, along a finished-basement wall, behind a long run of plumbing.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "The right pick when a leak could show up anywhere along a line rather than at one spot.",
    affiliateUrl: "https://amzn.to/3RS0qfT",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Whole-home smart shutoff valve (Moen Flo class)",
    badge: "Best Protection",
    category: "Automatic shutoff",
    bestFor:
      "Finished basements, multi-storey homes, second homes, and anyone who has already filed one water claim.",
    whyItMadeTheList:
      "Installed on the main line, this class of device measures flow, pressure, and temperature continuously and closes the valve itself when it sees a burst-pipe pattern or a small leak that never stops. It is the only product on this page that stops the water instead of telling you about it.",
    keyBuyingNotes:
      "Needs a licensed plumber to cut it into the main, a power outlet nearby, and Wi-Fi at the valve location. Check the pipe size (¾ in and 1 in bodies are sold) and whether your insurer offers a leak-protection discount — many do, and it changes the payback math. Pair it with pucks or a Wi-Fi kit for fixture-level warning.",
    avoidIf:
      "Renters, or anyone who cannot get a plumber to the main line. Spend the money on sensors instead.",
    typicalUse: "Permanent at the main; set-and-forget for years, with an app check-in.",
    skillLevel: "Licensed plumber for install; owner-operable after.",
    riskLevel: "Cutting into the water main is plumber work. Do not DIY.",
    verdict: "The move for finished basements or repeat-leak households. It is the one that ends the leak.",
    affiliateUrl: "https://amzn.to/4vWr2u9",
    buttonText: "Check price on Amazon",
  },
];

/* --------------------------------------------------------------------------
   PAGE METADATA
-------------------------------------------------------------------------- */

const path = "/tools/best-water-leak-detectors";
const pageTitle = "Best water leak detectors 2026: Wi-Fi vs smart-home vs standalone";
const pageDescription =
  "Which leak detector is best for the water heater, basement, washing machine, and under sinks — Wi-Fi, smart-home, standalone pucks, and shutoff valves compared.";

// Single source of truth for this page's dates: OG metadata, the visible
// byline, the Article JSON-LD and the sitemap all read from these two
// constants so they can never drift apart.
const publishedAt = "2026-05-16";
const updatedAt = "2026-10-30";
const updatedLabel = new Date(updatedAt).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  type: "article",
  publishedAt,
  updatedAt,
  authorName: kenHoven.name,
  section: "Buying guide",
});

/* --------------------------------------------------------------------------
   COMPARISON DATA
-------------------------------------------------------------------------- */

const typeRows = [
  {
    type: "Standalone puck",
    alerts: "Local siren only",
    hub: "None",
    away: "No — someone must hear it",
    setup: "Place it and press test",
    cost: "Lowest per sensor",
    best: "Homes with someone usually in; renters; covering every fixture cheaply",
  },
  {
    type: "Wi-Fi kit (gateway + sensors)",
    alerts: "Phone / email / text + siren",
    hub: "Small plug-in gateway, included",
    away: "Yes",
    setup: "Plug in gateway, pair in app",
    cost: "Low–mid per sensor",
    best: "Most homeowners; basements and outbuildings beyond Wi-Fi reach",
  },
  {
    type: "Direct-Wi-Fi sensor",
    alerts: "Phone + siren",
    hub: "None (joins 2.4 GHz Wi-Fi itself)",
    away: "Yes",
    setup: "Pair each sensor to Wi-Fi",
    cost: "Low–mid per sensor",
    best: "One or two critical spots with strong Wi-Fi; apartments",
  },
  {
    type: "Smart-home sensor (Z-Wave / Zigbee / Thread)",
    alerts: "Via your hub's app + automations",
    hub: "Your existing hub",
    away: "Yes",
    setup: "Pair to hub; build automations",
    cost: "Mid per sensor",
    best: "Homes already running a hub; triggering a smart valve or lights",
  },
  {
    type: "Cable / probe sensor",
    alerts: "Siren (some pair to a hub)",
    hub: "Usually none",
    away: "Only hub-paired models",
    setup: "Route the lead; mount the body",
    cost: "Low–mid per unit",
    best: "Basement perimeters, long pans, behind the water heater",
  },
  {
    type: "Whole-home shutoff valve",
    alerts: "Phone + closes the water itself",
    hub: "Wi-Fi + power at the main",
    away: "Yes — and it acts",
    setup: "Licensed plumber",
    cost: "Highest (device + install)",
    best: "Finished basements, second homes, prior claims, insurance discount",
  },
];

const locationRows = [
  {
    location: "Water heater",
    pick: "Puck or probe sensor in the drip pan, plus a Wi-Fi sensor if the heater is out of earshot",
    why: "Tanks weep for weeks before they fail; the pan is where the first water shows. A sensor with a probe on a lead reaches the pan behind a tight installation.",
    link: { href: "/advice/water-heater-leaking", label: "Water heater leaking: where it's coming from" },
  },
  {
    location: "Basement and sump pit",
    pick: "Cable sensor along the lowest wall or floor line; Wi-Fi sensor at the sump pit",
    why: "Water can arrive anywhere along a foundation wall, not at one point. The sump pump is the single most common basement flood source when it stalls.",
    link: { href: "/advice/sump-pump-not-working", label: "Sump pump not working" },
  },
  {
    location: "Washing machine",
    pick: "Puck in the washer pan (or on the floor behind it), Wi-Fi if the laundry is upstairs",
    why: "A failed rubber supply hose releases full house pressure. An upstairs laundry over a finished ceiling is the costliest version of this leak, so you want the alert on your phone.",
    link: { href: "/emergency-repairs/pipe-burst-first-10-minutes", label: "Pipe burst: the first 10 minutes" },
  },
  {
    location: "Under sinks",
    pick: "Flat puck at the back of the cabinet, under the P-trap and supply valves",
    why: "Slow drips under a sink rot the cabinet floor before you see them. A siren puck is usually enough here because you are in the kitchen daily.",
    link: { href: "/what-is-this/water-under-bathroom-sink", label: "Water under the bathroom sink: find the source" },
  },
  {
    location: "Dishwasher and refrigerator",
    pick: "Puck under the dishwasher toe-kick; puck behind the fridge for the ice-maker line",
    why: "Both leak slowly onto subfloor you cannot see. Catch it in weeks, not the months it takes to warp the floor.",
    link: { href: "/advice/why-does-my-refrigerator-leak-water", label: "Why does my refrigerator leak water?" },
  },
  {
    location: "Whole house",
    pick: "Smart shutoff valve at the main, with sensors at the fixtures above",
    why: "Sensors tell you; the valve acts. For a house that is empty all day, this is the only combination that stops a burst pipe before you get home.",
    link: { href: "/tools/best-automatic-water-shutoff-valves", label: "Automatic water shutoff valves compared" },
  },
];

/* --------------------------------------------------------------------------
   FAQs
-------------------------------------------------------------------------- */

const faqs = [
  {
    question: "What is the best water leak sensor for most homes?",
    answer:
      "A Wi-Fi kit with a plug-in gateway and five or more sensors. It sends a phone alert wherever you are, the gateway's long-range radio reaches basements and garages where direct-Wi-Fi sensors drop out, and the per-sensor cost is low enough to cover every fixture. If someone is home nearly all the time, a multi-pack of standalone siren pucks does the same job for less. If you already run a smart-home hub, buy sensors on that hub's radio instead so the alerts land in the app you already watch.",
  },
  {
    question: "Wi-Fi vs smart-home vs standalone — which type of leak detector should I buy?",
    answer:
      "Standalone (siren only) if the house is rarely empty and you want the cheapest coverage. Wi-Fi if you want a phone alert and do not own a hub — the gateway kits are the easiest to set up and have the best range. Smart-home (Z-Wave, Zigbee, Thread/Matter) only if you already have a hub, because then the sensor can trigger automations such as closing a smart valve. Many homes end up with two of the three: pucks everywhere and Wi-Fi sensors at the water heater, washer, and sump.",
  },
  {
    question: "What is the best water leak detector for a water heater?",
    answer:
      "A sensor that sits in the drip pan under the tank, because that is where the first water appears when a tank starts to fail. If the pan is hard to reach behind the heater, a model with a probe on a lead lets the alarm body sit where you can see it. If the heater is in a garage or basement you rarely visit, make it a Wi-Fi sensor so the alert reaches your phone. Pair it with a drain pan plumbed to a drain if the heater sits on a finished floor.",
  },
  {
    question: "What is the best leak detector for a basement?",
    answer:
      "A cable-style sensor laid along the lowest wall or floor line, plus a Wi-Fi point sensor at the sump pit and another at the water heater. Basement water can arrive anywhere along a foundation wall, so a single puck misses most of it; the cable detects along its whole length. If the basement is finished, this is also the house where a whole-home shutoff valve pays for itself fastest.",
  },
  {
    question: "Where should I put water leak detectors?",
    answer:
      "Under or behind every appliance that uses water: washing machine, dishwasher, refrigerator ice-maker line, water heater, sump pump, every toilet, every sink, the AC condensate pan, and a water-softener brine tank if you have one. A typical home needs five to eight sensors. Put the sensor where water would collect first — the drip pan, the lowest point of the cabinet floor — not where it is convenient to see.",
  },
  {
    question: "Do water leak detectors work with Alexa, Google Home, or Apple Home?",
    answer:
      "Some do, and the listing has to say which. Many Wi-Fi kits support Alexa and Google announcements through their own app but not Apple Home. Apple Home users should look for sensors that list HomeKit, Thread, or Matter support. Hub-based sensors (Z-Wave, Zigbee) work with whichever platform your hub does. A sensor that only works in its maker's app still sends phone alerts — it just cannot trigger your other devices.",
  },
  {
    question: "Do I need a hub or gateway for a Wi-Fi leak detector?",
    answer:
      "Depends on the design. Gateway kits ship with a small plug-in base that joins your Wi-Fi and talks to the sensors by long-range radio; the gateway must stay plugged in, and in exchange you get multi-year sensor batteries and range that reaches a detached garage. Direct-Wi-Fi sensors join your 2.4 GHz network themselves with nothing else to buy, but each one needs a usable Wi-Fi signal where it sits and battery life is shorter. Neither is better — match it to where the sensors are going.",
  },
  {
    question: "Are Wi-Fi water sensors worth the extra cost?",
    answer:
      "Yes if you travel, own a second home, or are out of the house for a working day. A siren puck in an empty house can scream for eight hours while a hose dumps water. Wi-Fi sensors push the alert to your phone within seconds. For a primary residence with someone home most of the day, siren pucks at every fixture are usually enough, with Wi-Fi reserved for the water heater and washer.",
  },
  {
    question: "Do whole-home shutoff valves really work?",
    answer:
      "Yes — they are the only product in this category that stops water rather than reporting it. The valve monitors flow, pressure, and temperature and closes automatically when it sees a burst-pipe pattern or a small continuous leak, and you can close it from the app. The cost is the plumber's install on the main line on top of the device, and it needs power and Wi-Fi at the valve. Many insurers discount the premium for having one; ask before buying.",
  },
  {
    question: "Can leak detectors prevent all water damage?",
    answer:
      "No. Sensors detect water that has already escaped — a tank leak in the pan, a failed hose behind the washer. They do not see a leak inside a wall or under a slab; that takes a moisture meter and a plumber. Think of sensors as early warning, the shutoff valve as the response, and both as no substitute for replacing a 15-year-old water heater or rubber supply hoses before they fail.",
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

const wifiPick = products[1];
const puckPick = products[0];

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
          <span>Updated {updatedLabel}</span>
          <span>8 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            Water damage is one of the most common homeowners-insurance
            claims, and almost every one of them started as a small leak
            nobody saw for days. A leak detector is the cheapest fix for that
            blind spot — but the right one depends on a question most guides
            skip: <strong>who is home when it leaks?</strong>
          </p>
          <p>
            This guide compares the three ways a detector can alert you
            (standalone siren, Wi-Fi to your phone, or through your
            smart-home hub), which one belongs at the water heater, in the
            basement, behind the washing machine, and under the sinks, and
            when it is worth stepping up to a valve that shuts the water off
            by itself.
          </p>
        </div>

        <aside
          aria-label="Quick answer"
          className="mt-6 rounded-lg border border-amber-200 border-l-4 border-l-amber-500 bg-amber-50/70 p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-800">
            Quick answer
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-navy-900 leading-relaxed">
            <li>
              <strong>Someone is usually home:</strong> a multi-pack of
              standalone siren pucks, one under every fixture.
            </li>
            <li>
              <strong>House is empty during the day, or you travel:</strong> a
              Wi-Fi gateway kit with five or more sensors — phone alerts plus
              a siren.
            </li>
            <li>
              <strong>You already run a smart-home hub:</strong> sensors on
              your hub&apos;s radio (Z-Wave, Zigbee, Thread) so alerts and
              automations live in one app.
            </li>
            <li>
              <strong>Finished basement or a prior claim:</strong> add a
              whole-home shutoff valve at the main.
            </li>
          </ul>
          <p className="mt-3 text-sm">
            {wifiPick.affiliateUrl && (
              <AffiliateAnchor
                href={wifiPick.affiliateUrl}
                productName={wifiPick.name}
                placement="buying-guide-quick-pick"
                className="inline-flex items-center gap-1 font-semibold text-navy-700 no-underline border-b border-amber-500 pb-0.5 hover:text-navy-900"
              >
                See the Wi-Fi kit we recommend <span aria-hidden>↗</span>
              </AffiliateAnchor>
            )}
            {puckPick.affiliateUrl && (
              <>
                <span className="text-ink-600"> · </span>
                <AffiliateAnchor
                  href={puckPick.affiliateUrl}
                  productName={puckPick.name}
                  placement="buying-guide-quick-pick"
                  className="inline-flex items-center gap-1 font-semibold text-navy-700 no-underline border-b border-amber-500 pb-0.5 hover:text-navy-900"
                >
                  See the siren puck multi-pack <span aria-hidden>↗</span>
                </AffiliateAnchor>
              </>
            )}
            <span className="text-ink-600">
              {" "}· or{" "}
              <a
                href="#our-picks"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-ink-300"
              >
                compare all five
              </a>
            </span>
          </p>
        </aside>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          Wi-Fi vs smart-home vs standalone: the six types compared
        </h2>
        <p className="mt-3 text-ink-700 leading-relaxed">
          Every leak detector does the same thing — two contacts close when
          water touches them. What you are choosing is how the alert reaches
          you and what, if anything, happens next.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-ink-200">
          <table className="min-w-full text-sm">
            <caption className="sr-only">
              Water leak detector types compared by alert method, hub
              requirement, usefulness when away, setup, cost tier, and best use
            </caption>
            <thead className="bg-ink-50 text-left">
              <tr>
                {["Type", "How it alerts", "Hub needed", "Works when you're away", "Setup", "Cost tier", "Best for"].map((h) => (
                  <th key={h} scope="col" className="px-3 py-3 font-semibold text-navy-900 align-bottom">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {typeRows.map((r) => (
                <tr key={r.type} className="align-top">
                  <th scope="row" className="px-3 py-3 font-semibold text-navy-900 whitespace-nowrap">
                    {r.type}
                  </th>
                  <td className="px-3 py-3 text-ink-700">{r.alerts}</td>
                  <td className="px-3 py-3 text-ink-700">{r.hub}</td>
                  <td className="px-3 py-3 text-ink-700">{r.away}</td>
                  <td className="px-3 py-3 text-ink-700">{r.setup}</td>
                  <td className="px-3 py-3 text-ink-700">{r.cost}</td>
                  <td className="px-3 py-3 text-ink-700">{r.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Standalone pucks</strong> are
            the baseline. They fail in exactly one way — nobody hears them —
            so they belong in a house that is rarely empty, or at fixtures you
            walk past daily.
          </p>
          <p>
            <strong className="text-navy-900">Wi-Fi detectors</strong> come in
            two designs. Gateway kits put one plug-in base on your network and
            run the sensors on a long-range radio, which is why they reach a
            detached garage or a basement corner where phones lose signal.
            Direct-Wi-Fi sensors join the 2.4 GHz network themselves; simpler,
            but each one needs a real signal where it sits.
          </p>
          <p>
            <strong className="text-navy-900">Smart-home sensors</strong> skip
            the maker&apos;s cloud and talk to the hub you already own. The
            payoff is automation — a leak at the washer can close a smart
            valve, flash the lights, and announce on a speaker — but only if
            the hub is already there.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          Best leak detector by location
        </h2>
        <p className="mt-3 text-ink-700 leading-relaxed">
          The water heater, the basement, the washing machine, and the sinks
          leak differently, and the right sensor for each is not the same.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-ink-200">
          <table className="min-w-full text-sm">
            <caption className="sr-only">
              Recommended leak detector type by location in the home
            </caption>
            <thead className="bg-ink-50 text-left">
              <tr>
                <th scope="col" className="px-3 py-3 font-semibold text-navy-900">Location</th>
                <th scope="col" className="px-3 py-3 font-semibold text-navy-900">What to put there</th>
                <th scope="col" className="px-3 py-3 font-semibold text-navy-900">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {locationRows.map((r) => (
                <tr key={r.location} className="align-top">
                  <th scope="row" className="px-3 py-3 font-semibold text-navy-900 whitespace-nowrap">
                    {r.location}
                  </th>
                  <td className="px-3 py-3 text-ink-700">{r.pick}</td>
                  <td className="px-3 py-3 text-ink-700">
                    {r.why}{" "}
                    <Link href={r.link.href} className="no-underline text-navy-700 hover:text-navy-900 border-b border-ink-300">
                      {r.link.label}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          What matters most when you compare models
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Alert method matches your absence.</strong>{" "}
            Siren-only works when someone is home. Wi-Fi works when no one
            is. Decide this first; everything else is detail.
          </p>
          <p>
            <strong className="text-navy-900">Detection shape matches the location.</strong>{" "}
            Point sensors catch water exactly where you set them. Cable or
            probe sensors catch water anywhere along the lead — the right
            shape for a perimeter, a long pan, or a drip pan you cannot see
            into.
          </p>
          <p>
            <strong className="text-navy-900">Range and radio.</strong>{" "}
            For gateway kits, the number that matters is sensor-to-gateway
            range (the kit we link is rated around 1,900 ft in open air; walls
            and floors cut that down) and how many sensors one gateway can
            carry. For direct-Wi-Fi sensors, it is whether the 2.4 GHz signal
            actually reaches the sump pit.
          </p>
          <p>
            <strong className="text-navy-900">Battery type and life.</strong>{" "}
            A replaceable AAA or CR123A cell is a feature, not a flaw;
            sealed-battery sensors are landfill in a few years. Gateway-kit
            sensors typically run multiple years on a set because the radio
            is low-power; direct-Wi-Fi sensors run shorter. Insist on a
            low-battery warning in the app or a chirp.
          </p>
          <p>
            <strong className="text-navy-900">Volume.</strong>{" "}
            85 dB at one metre is the floor for a siren you will hear from
            another room; several current kits rate 100 dB with an adjustable
            level. A sensor that beeps quietly in the basement while you are
            upstairs is decoration.
          </p>
          <p>
            <strong className="text-navy-900">Water resistance.</strong>{" "}
            The sensor is going to get wet — that is the job. Look for an IP66
            or IP67 rating so one real leak does not finish the sensor.
          </p>
          <p>
            <strong className="text-navy-900">Ecosystem and longevity.</strong>{" "}
            A Wi-Fi sensor only matters if the maker is still running the
            cloud service in five years. Established brands with a current
            product line are a safer bet than a no-name listing with a
            proprietary app, and hub-based sensors sidestep the problem
            entirely.
          </p>
        </div>

        <RecommendedProductsSection
          id="our-picks"
          heading="Our picks"
          intro={
            <p>
              Five categories, one pick each. Start with pucks across every
              fixture for cheap broad coverage, add the Wi-Fi kit at the
              water heater, washer, and basement if the house is empty during
              the day, use the smart-home sensor only if you already own a
              hub, and consider the shutoff valve if you have a finished
              basement or have already had a claim. We link product
              categories we have verified, not units we have run leaks under;
              specs and availability change, so check the listing.
            </p>
          }
          products={products}
          evidence={{
            basis: "editorial-research",
            lastChecked: updatedAt,
            sources: [
              "Manufacturer specifications, manuals, and setup guides",
              "Independent product-safety and IP-rating listings where available",
              "Verified owner reports on retailer and manufacturer sites",
              "The author's own repair experience",
            ],
          }}
        />

        <BuyingGuideSections
          whoShouldBuy={[
            "Owners of finished basements, multi-storey homes, or any home over 20 years old (ageing supply lines and water heater).",
            "Anyone out of the house for a working day, travellers, and second-home owners — Wi-Fi sensors or a smart shutoff with phone alerts.",
            "Anyone whose homeowners insurance offers a leak-protection discount — it usually pays back the sensors in the first year.",
          ]}
          whoShouldSkip={[
            "Renters whose appliances and supply lines are the landlord's responsibility (though a puck under your own sink is still cheap insurance).",
            "Anyone treating a sensor as a leak STOPPER — only a shutoff valve closes the water.",
            "Anyone planning to DIY a whole-home shutoff valve install. That is licensed-plumber work.",
          ]}
          commonMistakes={[
            "Placing a puck where condensation drips (next to an AC line, under a sweating cold pipe) — false alarms get the unit ignored.",
            "Buying a smart-home sensor on the wrong radio for your hub. Z-Wave, Zigbee, and Thread are not interchangeable.",
            "Buying one sensor and assuming it covers the house. Each fixture needs its own.",
            "Letting the gateway get unplugged. A Wi-Fi kit whose base is off is a box of silent pucks.",
            "Treating a smart shutoff as a substitute for replacing a 15-year-old water heater or rubber washer hoses.",
          ]}
          safety={
            <>
              Leak detectors <em>alert</em> — they do not stop the leak.
              Until a smart shutoff valve closes flow, every leak still needs
              you to close the main supply or the fixture stop, which is hard
              at 2 a.m. For water behind a wall, under a slab, or anywhere
              structural damage is suspected, call a licensed plumber and (if
              soaked more than 24 hours) a water-damage remediation
              contractor. Outlets and panels touched by water are an
              electrocution risk until inspected.
            </>
          }
        />

        <h2 className="mt-12 font-serif text-2xl text-navy-900">
          When to step up to a whole-home shutoff valve
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>The economics tilt toward installing one when:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have a finished basement that would be expensive to dry out.</li>
            <li>You travel frequently or own a second home.</li>
            <li>You have already had one major water-damage claim.</li>
            <li>Your insurer offers a premium discount for a monitored shutoff — many do; ask for the figure in writing.</li>
            <li>You have older galvanized or polybutylene plumbing prone to surprise failures.</li>
          </ul>
          <p>
            The device is the smaller part of the bill; the plumber&apos;s
            install on the main line, a nearby outlet, and sometimes a permit
            are the rest. Set against a typical water-damage claim, the
            payback is usually inside a couple of years for the households
            above. The{" "}
            <Link href="/tools/best-automatic-water-shutoff-valves" className="no-underline text-navy-700 hover:text-navy-900 border-b border-ink-300">
              automatic shutoff valve guide
            </Link>{" "}
            compares the valve options in detail.
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
            {[
              { href: "/advice/water-heater-leaking", label: "Water heater leaking: where it's coming from and what it means" },
              { href: "/advice/water-leak-detection", label: "Water leak detection: how to find a hidden leak" },
              { href: "/advice/smart-water-leak-detectors", label: "Smart water leak detectors: when Wi-Fi is worth it" },
              { href: "/tools/best-automatic-water-shutoff-valves", label: "Best automatic water shutoff valves" },
              { href: "/advice/sump-pump-not-working", label: "Sump pump not working: checks before you call" },
              { href: "/advice/slab-leak-warning-signs", label: "Slab leak warning signs" },
              { href: "/emergency-repairs/water-leaking-from-ceiling", label: "Water leaking from ceiling: what to do first" },
              { href: "/emergency-repairs/pipe-burst-first-10-minutes", label: "Pipe burst: the first 10 minutes" },
              { href: "/tools/best-moisture-meters-for-homeowners", label: "Moisture meters — find the source of a leak" },
              { href: "/tools/best-shop-vacs-for-water-cleanup", label: "Shop vacs for water cleanup" },
            ].map((l) => (
              <li key={l.href}>
                →{" "}
                <Link href={l.href} className="no-underline text-navy-700 hover:text-navy-900">
                  {l.label}
                </Link>
              </li>
            ))}
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
              datePublished: publishedAt,
              dateModified: updatedAt,
              authorUrl: kenHoven.url,
              authorName: kenHoven.name,
              articleSection: "Buying guide",
              image: "/opengraph-image",
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
