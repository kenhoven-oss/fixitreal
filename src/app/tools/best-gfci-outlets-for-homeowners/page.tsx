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
    name: "20A self-testing GFCI outlet (Leviton or Eaton)",
    badge: "Best Overall",
    category: "Self-testing GFCI, 20A",
    bestFor: "Kitchen counters, bathrooms, garages, and any 20-amp circuit — the modern default.",
    whyItMadeTheList: "Self-testing GFCIs run an internal check every few seconds and indicate a failed sensor with a light, which solves the real-world problem: nobody presses the Test button monthly. The 20A version with tamper-resistant shutters meets current code in every location and fits either a 15A or 20A circuit. Leviton and Eaton are the two brands electricians install by default.",
    keyBuyingNotes: "Confirm the circuit breaker amperage: a 20A outlet is fine on a 20A circuit; on a 15A circuit a 15A GFCI is technically correct, though a 20A receptacle is permitted on a 15A circuit in most codes. Wire LINE and LOAD terminals correctly — reversing them leaves downstream outlets unprotected.",
    avoidIf: "The location is outdoors or in a damp area — use the weather-resistant version below.",
    typicalUse: "Every code-required indoor location.",
    skillLevel: "Intermediate — turn off the breaker and verify with a tester.",
    riskLevel: "Moderate — wrong LINE/LOAD wiring disables protection silently.",
    verdict: "The right outlet for most replacements. Self-test is the feature that matters.",
    affiliateUrl: "https://www.amazon.com/dp/B013OVCMMA?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "15A self-testing GFCI outlet, multi-pack",
    badge: "Best Value for Whole-House Updates",
    category: "Self-testing GFCI, 15A",
    bestFor: "Replacing several old non-self-testing GFCIs at once on 15-amp bathroom and bedroom circuits.",
    whyItMadeTheList: "Older GFCIs (pre-2015) don't self-test, and a failed one looks identical to a working one. If the house has five or six of them, a multi-pack of 15A self-testing units is the economical way to bring every wet location up to current standard on a 15A circuit.",
    keyBuyingNotes: "Only for 15A circuits — check the breaker. Replace every GFCI in the house older than 10 years; the internal sensor has a finite life.",
    avoidIf: "The circuit is 20A — use the 20A version.",
    typicalUse: "Bathrooms and bedrooms on 15A circuits.",
    skillLevel: "Intermediate.",
    riskLevel: "Moderate.",
    verdict: "The economical option for a house full of old GFCIs on 15A circuits.",
    affiliateUrl: "https://www.amazon.com/dp/B019YJPKWU?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Weather-resistant (WR) GFCI outlet with in-use cover",
    badge: "Best for Outdoors and Garages",
    category: "WR-rated GFCI + bubble cover",
    bestFor: "Exterior outlets, damp garages, covered patios, pool and spa areas.",
    whyItMadeTheList: "Outdoor GFCIs need two things standard ones lack: a weather-resistant (WR) rating on the receptacle itself, and an 'in-use' bubble cover that keeps rain out while something is plugged in. Both are code requirements outdoors, and the combination is what keeps the GFCI from nuisance-tripping every time it rains.",
    keyBuyingNotes: "Look for 'WR' stamped on the face. Buy the cover sized for the box (single-gang is standard). Replace the gasket if the old cover's is cracked.",
    avoidIf: "The outlet is indoors — a standard GFCI is fine and cheaper.",
    typicalUse: "Every exterior outlet, garage outlets near the door.",
    skillLevel: "Intermediate.",
    riskLevel: "Moderate — outdoor boxes are frequently corroded; inspect before rewiring.",
    verdict: "Required outdoors. The WR rating and the in-use cover together are what make it work.",
    affiliateUrl: "https://www.amazon.com/dp/B0G3P42YYW?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-gfci-outlets-for-homeowners";
const pageTitle = "Best GFCI outlets for kitchens, bathrooms, and garages";
const pageDescription = "Self-testing 20A GFCI outlets are the right default. Which amperage you need, the weather-resistant version for outdoors, and when to get an electrician.";
const publishedAt = "2026-09-12";
const updatedAt = "2026-09-12";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "Why does my GFCI keep tripping?", answer: "Either it's doing its job — a real ground fault from a wet or failing appliance — or the GFCI itself is failing, or moisture is in the box. Unplug everything on the circuit; if it holds, plug items back one at a time. If it trips with nothing plugged in, the outlet or the wiring has a problem. See our GFCI keeps tripping guide." },
  { question: "Do I need a GFCI at every outlet in the kitchen?", answer: "No — one GFCI at the first outlet on the circuit protects every outlet wired downstream from its LOAD terminals. Wire it correctly and one unit covers the run. This is why LINE/LOAD matters." },
  { question: "15A or 20A GFCI?", answer: "Match the breaker. A 20A GFCI on a 20A circuit; a 15A GFCI on a 15A circuit. Most kitchens and bathrooms built after the 1990s are on 20A circuits; older bedrooms and baths are often 15A." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestGfciOutletsPage() {
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
          <p>GFCI outlets shut power off in milliseconds when they sense current leaking to ground — which is what happens when electricity finds a path through a person. Code requires them in every wet location: kitchen counters, bathrooms, garages, outdoors, laundry, and unfinished basements.</p>
          <p>Below: the three GFCI types that cover every residential location, and the two questions that decide which one you need.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>Match amperage to the circuit breaker (15A or 20A) and location to the outlet type. Self-testing models are worth the extra $5 in every case.</p>} products={products} />
        <BuyingGuideSections
          whoShouldBuy={["Anyone with a GFCI that trips constantly, won't reset, or fails the Test button \u2014 it's failed and needs replacing.", "Anyone with GFCIs older than 10 years \u2014 the sensors wear out.", "Homeowners bringing kitchens, baths, garages, or outdoor outlets up to code."]}
          whoShouldSkip={["Any outlet fed by aluminum wiring or with signs of scorching \u2014 electrician territory.", "Anyone not comfortable confirming the circuit is dead with a tester before touching wires."]}
          commonMistakes={["Swapping LINE and LOAD wires \u2014 the outlet works but downstream protection is gone.", "Installing a standard GFCI outdoors without the WR rating and in-use cover.", "Not testing after install \u2014 press Test, confirm power drops, press Reset.", "Chaining a GFCI downstream of another GFCI \u2014 causes nuisance trips."]}
          safety={<>Turn off the breaker and confirm the outlet is dead with a <Link href="/tools/best-voltage-testers-for-homeowners">voltage tester</Link> before touching any wire — outlets can be fed from more than one circuit. If you find aluminum wiring, backstabbed connections, or scorching in the box, stop and call an electrician. See <Link href="/diy-or-hire/gfci-outlet">should I replace my own GFCI</Link> for the full DIY-or-hire call.</>}
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
            <li>→ <Link href="/diy-or-hire/gfci-outlet" className="no-underline text-navy-700 hover:text-navy-900">Should I replace my own GFCI outlet?</Link></li>
            <li>→ <Link href="/advice/gfci-outlet-keeps-tripping" className="no-underline text-navy-700 hover:text-navy-900">GFCI outlet keeps tripping</Link></li>
            <li>→ <Link href="/tools/best-voltage-testers-for-homeowners" className="no-underline text-navy-700 hover:text-navy-900">Best voltage testers</Link></li>
            <li>→ <Link href="/costs/electrician-service-call" className="no-underline text-navy-700 hover:text-navy-900">Electrician service call cost</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide",   image: "/opengraph-image", }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
