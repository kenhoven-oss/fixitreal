import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, itemListSchema, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { kenHoven } from "@/content/authors/ken-hoven";
import { AmazonDisclosure } from "@/components/tools/AmazonDisclosure";
import { RecommendedProductsSection } from "@/components/tools/RecommendedProductsSection";
import { BuyingGuideSections } from "@/components/tools/BuyingGuideSections";
import type { RecommendedProduct } from "@/components/tools/RecommendedProductCard";

const products: RecommendedProduct[] = [
  {
    name: "Inline water pressure gauge with hose thread (Watts or equivalent)",
    badge: "Best Overall",
    category: "Hose-thread gauge",
    bestFor: "Measuring household water pressure at any outdoor hose bib — the fastest diagnostic for low or high pressure.",
    whyItMadeTheList: "A hose-thread pressure gauge threads onto any outdoor spigot in seconds and gives an immediate PSI reading. At $10–$15, it's the correct first tool when diagnosing low water pressure complaints, checking whether a pressure-reducing valve (PRV) is set correctly, or verifying that street pressure is in the safe range for your plumbing.",
    keyBuyingNotes: "Normal residential pressure: 40–80 PSI. Above 80 PSI damages fixtures and appliances over time — a PRV is code-required. Below 40 PSI causes weak flow at multiple fixtures. Measure at different times of day; pressure varies with neighborhood demand.",
    avoidIf: "You need to measure pressure inside an in-line pipe location — that requires an in-line gauge with compression fittings.",
    typicalUse: "Diagnosing low pressure complaints; verifying PRV setting after adjustment; checking street pressure before installing appliances with pressure requirements.",
    skillLevel: "Beginner — thread on, read the dial.",
    riskLevel: "Low.",
    verdict: "The correct first diagnostic tool for any water pressure problem. Costs less than 10 minutes of a plumber's time.",
    affiliateUrl: "https://www.amazon.com/dp/B000YMU8JC?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Digital water pressure gauge with max/min memory",
    badge: "Best for Fluctuation Diagnosis",
    category: "Digital gauge with memory",
    bestFor: "Diagnosing pressure fluctuations — finding out if pressure spikes at night or drops during peak morning use.",
    whyItMadeTheList: "A digital gauge with max/min memory records the highest and lowest pressure seen during the measurement period. Leave it on overnight and you'll know if you have pressure spikes above 80 PSI while sleeping — a documented cause of pinhole leaks and fixture damage. More diagnostic than an analog gauge that only shows current pressure.",
    keyBuyingNotes: "Look for a glycerin-filled or digital unit rated to 200 PSI minimum. Max/min memory is the key feature — not all digital gauges have it. Thread on at the hose bib the same way as an analog gauge.",
    avoidIf: "You just need a one-time reading — the analog gauge is simpler and cheaper.",
    typicalUse: "Ongoing pressure monitoring; diagnosing unexplained pinhole leaks or banging pipes (water hammer from pressure spikes).",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "Worth the extra $10–$20 over analog if pressure fluctuations are the suspected issue.",
    affiliateUrl: "https://www.amazon.com/dp/B084ZV8VK3?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Pressure reducing valve (PRV) — Watts 25AUB or equivalent",
    badge: "The Fix for High Pressure",
    category: "Pressure reducing valve",
    bestFor: "Homes with street pressure over 80 PSI — required by code in most jurisdictions.",
    whyItMadeTheList: "If your gauge shows over 80 PSI, the fix is a PRV installed on the main supply line where it enters the house. A PRV reduces incoming pressure to a set output (typically 50–70 PSI) and holds it there regardless of street fluctuations. Protects fixtures, appliances, water heater, and irrigation systems from pressure damage. Installation is a plumber job — but buying the correct PRV first and having the plumber install it is the most cost-efficient approach.",
    keyBuyingNotes: "PRVs are sized by pipe diameter (3/4 inch is most common in residential). Watts, Zurn, and Caleffi are the established brands. Installation requires shutting off the main supply and soldering or using push-fit fittings — hire a licensed plumber.",
    avoidIf: "Your pressure is already under 80 PSI — a PRV will reduce it further and may cause weak flow.",
    typicalUse: "Main supply line installation when street pressure exceeds 80 PSI.",
    skillLevel: "Advanced (plumber install).",
    riskLevel: "Moderate — involves shutting off main supply and cutting into the supply line.",
    verdict: "The correct fix when pressure is high. A $60 part; $150–$350 installed. Worth every dollar in avoided fixture damage.",
    affiliateUrl: "https://www.amazon.com/dp/B004JJ5FYE?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-home-water-pressure-gauges";
const pageTitle = "Best home water pressure gauges";
const pageDescription = "A $12 gauge tells you whether your water pressure is causing your plumbing problems. Anything above 80 PSI damages fixtures. Here's what to buy and what to do with the reading.";
const publishedAt = "2026-09-11";
const updatedAt = "2026-09-11";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "What is normal water pressure for a house?", answer: "The accepted residential range is 40–80 PSI. Below 40 PSI and you'll notice weak flow at showers and multiple fixtures running simultaneously. Above 80 PSI and fixtures, appliances, and supply lines are under stress — accelerated wear, pinhole leaks, and water hammer are common results. Most codes require a PRV when street pressure exceeds 80 PSI." },
  { question: "Can high water pressure cause pinhole leaks in copper pipes?", answer: "Yes. Chronic high pressure (over 80 PSI) plus normal water velocity erosion is one of the primary causes of pinhole leaks in copper supply lines. The inside wall of the pipe corrodes faster under high pressure-driven flow. A PRV, installed and set to 50–70 PSI, is the correct preventive measure." },
  { question: "Why does my water pressure change throughout the day?", answer: "Municipal water pressure follows demand curves — lower when the whole neighborhood is running water in the morning, higher in the middle of the night. A max/min digital gauge left on overnight captures the actual range. Pressure regulators installed by utilities also fluctuate. Internally, a failing PRV can stick at different positions and produce variable pressure at the tap." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestWaterPressureGaugesPage() {
  return (
    <>
      <Section padding="md" size="md"><Breadcrumb items={breadcrumbItems} /></Section>
      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Buying guide</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">{pageTitle}</h1>
        <p className="mt-4 text-sm text-ink-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>By <Link href={kenHoven.url} className="no-underline hover:text-navy-900">{kenHoven.name}</Link></span>
          <span>Updated September 2026</span><span>4 min read</span>
        </p>
        <AmazonDisclosure products={products} />
        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>Water pressure is behind more unexplained plumbing problems than most homeowners realize — pinhole leaks, banging pipes, running toilets, appliance failures, and weak showers all trace back to pressure being too high, too low, or inconsistent. A $12 gauge gives you the actual number in 60 seconds.</p>
          <p>Below: the gauge to buy, what to do with the reading, and the fix when pressure is out of range.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>Three products: the gauge to take the reading, the digital version for fluctuation diagnosis, and the PRV that fixes high pressure permanently.</p>} products={products} />
        <BuyingGuideSections
          whoShouldBuy={["Anyone troubleshooting weak flow at multiple fixtures.", "Homeowners who've had multiple pinhole leaks — high pressure is often the cause.", "Anyone buying a house — check street pressure at the hose bib during the inspection.", "Anyone installing a water heater, irrigation system, or appliance with a max-pressure specification."]}
          whoShouldSkip={["Anyone in a rental — pressure is the landlord's infrastructure issue.", "Anyone who already has a calibrated and recently serviced PRV with no complaints."]}
          commonMistakes={["Measuring at only one time of day — pressure varies; measure morning, afternoon, and overnight if possible.", "Assuming low pressure at one fixture means low household pressure — it might be a single clogged aerator or shutoff valve.", "Ignoring high pressure because fixtures seem fine — the damage is cumulative and shows up as pinhole leaks years later."]}
          safety={<>High pressure itself isn&apos;t an immediate safety hazard, but a failing PRV that allows pressure spikes can stress water heater relief valves and cause them to discharge. If your pressure gauge reads over 100 PSI, have a plumber inspect the PRV promptly. See our <Link href="/advice/why-is-my-water-pressure-low">low water pressure guide</Link> for the diagnostic sequence when pressure is too low.</>}
        />
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">FAQ</h2>
          <dl className="mt-4 divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((f) => (<div key={f.question} className="py-5"><dt className="font-medium text-navy-900">{f.question}</dt><dd className="mt-2 text-ink-700 leading-relaxed">{f.answer}</dd></div>))}
          </dl>
        </div>
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related reading</h2>
          <ul className="mt-4 space-y-2 text-ink-700">
            <li>→ <Link href="/advice/why-is-my-water-pressure-low" className="no-underline text-navy-700 hover:text-navy-900">Why is my water pressure low?</Link></li>
            <li>→ <Link href="/tools/best-water-leak-detectors" className="no-underline text-navy-700 hover:text-navy-900">Best water leak detectors</Link></li>
            <li>→ <Link href="/costs/plumber-service-call" className="no-underline text-navy-700 hover:text-navy-900">Plumber service call cost</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide",   image: "/opengraph-image", }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
