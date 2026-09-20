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
    name: "Pipe repair clamp (stainless steel, 1/2–2 inch)",
    badge: "Best for Pinhole and Crack Leaks",
    category: "Stainless steel repair clamp",
    bestFor: "Pinhole leaks, hairline cracks, and small splits on copper, galvanized, or PVC supply lines.",
    whyItMadeTheList: "A proper stainless steel pipe repair clamp with a neoprene gasket applies even pressure around the damaged area and stops pinhole and hairline leaks reliably. It is the correct temporary fix — and with proper installation, holds for months to years while you schedule a permanent repair. Sizes from 1/2 inch (typical supply line) to 2 inch (drain or main line) cover most residential scenarios.",
    keyBuyingNotes: "Match the clamp to the outside diameter (OD) of the pipe, not the nominal pipe size. A 1/2-inch copper pipe has an OD of 5/8 inch. Clamp packages list OD ranges — verify before buying. Stainless band + neoprene gasket is the right combo; avoid cheap galvanized clamps that corrode.",
    avoidIf: "The pipe is corroded through, cracked along its length, or leaking at a joint — clamps don't work on joint leaks or extensively corroded pipe.",
    typicalUse: "Emergency containment of a pinhole or hairline crack while a permanent repair is scheduled.",
    skillLevel: "Beginner — tighten the clamp bolts evenly with a screwdriver.",
    riskLevel: "Low for the repair; the underlying leak is moderate if uncontrolled.",
    verdict: "The correct emergency fix for pinhole and crack leaks. Keep one in the house.",
    affiliateUrl: "https://www.amazon.com/dp/B0069QVSAA?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Self-fusing silicone repair tape (Rescue Tape or similar)",
    badge: "Best Temporary Wrap",
    category: "Self-fusing silicone tape",
    bestFor: "Emergency first response — buy time until a clamp or plumber arrives.",
    whyItMadeTheList: "Self-fusing silicone tape bonds to itself under tension, creating a watertight sleeve around a leak. It works on pipe materials that clamps don't grip cleanly — irregular shapes, valves, compression fittings. Holds against pressure while you shut off other zones or wait for a plumber. Not a long-term solution, but genuinely useful in the first 20 minutes of a pipe emergency.",
    keyBuyingNotes: "The tape must be stretched as it wraps — that tension is what activates the fusion. Dry the pipe surface first; it won't adhere to actively spraying water. Wrap 2 inches past the leak in each direction, overlapping 50%.",
    avoidIf: "You have time to install a proper clamp — tape is faster but less reliable long-term.",
    typicalUse: "First 20 minutes of a pipe emergency; irregular pipe shapes that clamps won't seat on.",
    skillLevel: "Beginner.",
    riskLevel: "Low — but don't leave as a permanent fix.",
    verdict: "Worth having in the emergency kit for the first-response window.",
    affiliateUrl: "https://www.amazon.com/dp/B07BLZ3812?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Fernco flexible rubber coupling",
    badge: "Best for Drain Line Repairs",
    category: "Flexible rubber coupling",
    bestFor: "Cracked or leaking PVC or ABS drain lines — permanent repair without solvent welding.",
    whyItMadeTheList: "Fernco couplings are the plumber's standard for connecting, repairing, or splicing drain and waste lines without gluing. Cut out the damaged section, slide Ferncos on each end of the existing pipe, insert the new section, tighten the clamps. Works on PVC, ABS, clay, and cast iron. More permanent than tape or clamps for drain lines.",
    keyBuyingNotes: "Match the coupling to the pipe OD. Fernco sizes by nominal pipe size (1-1/2\", 2\", 3\", 4\") — verify the OD matches the coupling's listed compatible range. Requires cutting out the damaged section with a PVC cutter or hacksaw.",
    avoidIf: "The leak is on a pressurized supply line — Ferncos are for drain (no-pressure) lines only.",
    typicalUse: "Cracked PVC drain line under a sink or in a crawl space; adding a cleanout to an existing drain run.",
    skillLevel: "Intermediate — requires cutting the pipe.",
    riskLevel: "Low.",
    verdict: "The correct permanent fix for drain line cracks and breaks.",
    affiliateUrl: "https://www.amazon.com/dp/B000BQQU52?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-pipe-repair-clamps";
const pageTitle = "Best pipe repair clamps for emergency leaks";
const pageDescription = "A stainless pipe repair clamp stops a pinhole or crack leak while you schedule a permanent fix. Here's which repair product to use for each type of pipe leak.";
const publishedAt = "2026-09-11";
const updatedAt = "2026-09-11";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "Is a pipe repair clamp a permanent fix?", answer: "It can last years when installed correctly on a sound pipe, but it is not a permanent fix in the code sense — the underlying cause of the failure (corrosion, freeze damage, age) is still there. Treat a clamp as a reliable temporary measure and schedule a proper repair within weeks to months." },
  { question: "Can I use repair tape on a pressurized line?", answer: "Self-fusing silicone tape can temporarily hold against typical household water pressure (40–80 PSI) but should not be left as a permanent solution on pressurized lines. It's a first-response tool while you install a clamp or call a plumber." },
  { question: "When should I just call a plumber instead?", answer: "When the leak is at a joint (clamps don't work there), the pipe is extensively corroded, the leak is on the main supply line entering the house, you can't find or operate the shutoff valve, or the repair requires opening a wall. Pinhole leaks mid-pipe on an accessible run are the ideal DIY scenario." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestPipeRepairClampsPage() {
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
          <p>A pinhole leak in a copper supply line or a hairline crack in a PVC drain line is a &quot;stop the bleeding&quot; situation. The right emergency repair buys you days to weeks while you schedule a permanent fix — or confirms the pipe is too far gone to clamp and a plumber is the next call.</p>
          <p>Below: three products covering pressurized supply lines, drain lines, and the first 20 minutes of any pipe emergency.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>Three products that cover every common residential pipe leak scenario. Start with the stainless clamp for accessible mid-pipe leaks on supply lines; Fernco for drain lines; silicone tape for anything awkward or as a first-response measure.</p>} products={products} evidence={{ basis: "editorial-research", lastChecked: updatedAt, sources: ["Manufacturer specifications and instruction sheets", "Verified owner reports on retailer and manufacturer sites", "The author's own repair experience"] }} />
        <BuyingGuideSections
          whoShouldBuy={["Homeowners who want an emergency pipe repair kit before a leak happens — the time to buy these is not while water is running.", "Anyone who just found a slow drip on an accessible pipe and wants to contain it before calling a plumber.", "DIYers confident replacing a section of drain pipe."]}
          whoShouldSkip={["Joint leaks — no clamp product seals a leaking threaded fitting, solder joint, or compression fitting reliably.", "Heavily corroded pipe — if the clamp tightening crushes the pipe wall, the pipe needs replacement, not repair.", "Main line or difficult-access leaks — call a plumber."]}
          commonMistakes={["Applying repair tape to a wet, actively spraying pipe — the tape won't fuse.", "Using a drain-line coupling (Fernco) on a pressurized supply line.", "Not matching the clamp to the pipe's outside diameter — the wrong size won't seal.", "Treating the clamp as a final fix and ignoring the underlying corrosion."]}
          safety={<>Before any pipe repair, <strong>shut off the water supply</strong> — the zone shutoff or the main if needed. Know where your main shutoff is before a leak happens: it&apos;s usually near the water meter or where the supply line enters the house. See our <Link href="/emergency-repairs/pipe-burst-first-10-minutes">burst pipe emergency guide</Link> for the full sequence.</>}
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
            <li>→ <Link href="/emergency-repairs/pipe-burst-first-10-minutes" className="no-underline text-navy-700 hover:text-navy-900">Pipe burst: the first 10 minutes</Link></li>
            <li>→ <Link href="/costs/plumber-hourly" className="no-underline text-navy-700 hover:text-navy-900">Plumber hourly rate</Link></li>
            <li>→ <Link href="/tools/best-water-leak-detectors" className="no-underline text-navy-700 hover:text-navy-900">Best water leak detectors</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide",   image: "/opengraph-image", }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
