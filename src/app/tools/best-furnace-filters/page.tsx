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
    name: "MERV 8 pleated filter, 6-pack (16x25x1 or your size)",
    badge: "Best for Most Homes",
    category: "Standard pleated",
    bestFor: "Any home without allergy or pet-dander concerns — the right default.",
    whyItMadeTheList: "MERV 8 captures dust, pollen, and lint without restricting airflow on any residential furnace, new or old. Pleated construction holds more than a fiberglass panel filter, so it lasts the full 90 days. Buying a 6-pack means a year's supply on hand, which is the difference between actually changing it and meaning to.",
    keyBuyingNotes: "Measure the old filter's printed size (e.g., 16x25x1) — that's the nominal size; buy the same. Write the install date on the frame. Replace every 60–90 days in heating and cooling season.",
    avoidIf: "Someone in the house has allergies or asthma — go to MERV 11–13.",
    typicalUse: "Year-round, every 60–90 days.",
    skillLevel: "Beginner — slides in.",
    riskLevel: "Low.",
    verdict: "The right filter for most homes. Buy the multi-pack and set a calendar reminder.",
    affiliateUrl: "https://www.amazon.com/dp/B00CK01P2A?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "MERV 11 pleated filter, 4-pack",
    badge: "Best for Allergies and Pets",
    category: "High-efficiency pleated",
    bestFor: "Households with allergy or asthma sufferers, pets, or nearby wildfire smoke seasons.",
    whyItMadeTheList: "MERV 11 captures finer particles — pet dander, mold spores, fine dust — that MERV 8 passes. It's the highest rating most furnaces handle without airflow problems. If the house has anyone with respiratory issues, this is the sensible upgrade.",
    keyBuyingNotes: "Check the furnace manual for the maximum recommended MERV; many older units top out at 11. Change every 60 days — higher-efficiency filters load faster. If the furnace starts short-cycling after the upgrade, drop back to MERV 8.",
    avoidIf: "Your furnace is older and the manual specifies MERV 8 max, or airflow is already marginal.",
    typicalUse: "Allergy and pet households, every 60 days.",
    skillLevel: "Beginner.",
    riskLevel: "Low — watch for short-cycling.",
    verdict: "The right upgrade for allergy homes, within the limits of your furnace.",
    affiliateUrl: "https://www.amazon.com/dp/B00CJZA02W?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "MERV 13 pleated filter, 4-pack",
    badge: "For Wildfire Smoke and Medical Needs",
    category: "Highest residential rating",
    bestFor: "Homes in wildfire regions, immunocompromised occupants, or where a doctor has recommended maximum filtration.",
    whyItMadeTheList: "MERV 13 captures a meaningful share of smoke particles and some bacteria — the level the EPA references for improved indoor air quality. It's also the most restrictive filter a residential furnace can run, so it's only appropriate on systems designed for it or with a tech's sign-off.",
    keyBuyingNotes: "Confirm with your HVAC tech or the furnace manual before running MERV 13 — many systems need a thicker 4-inch filter housing to pull enough air through it. Replace every 30–60 days.",
    avoidIf: "Your furnace is older or has a 1-inch filter slot with no tech sign-off — the airflow restriction can damage the blower.",
    typicalUse: "Seasonal or medical-need use only.",
    skillLevel: "Beginner to install; check compatibility first.",
    riskLevel: "Moderate for the furnace if unsupported.",
    verdict: "Powerful, but only on systems that can handle it. Ask before you install.",
    affiliateUrl: "https://www.amazon.com/dp/B00CJZ77FK?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "4-inch media filter (MERV 11, for wide filter cabinets)",
    badge: "For 4-Inch Filter Slots",
    category: "Deep-pleat media",
    bestFor: "Furnaces with a 4- or 5-inch filter cabinet — these last 6–12 months and allow higher MERV without airflow loss.",
    whyItMadeTheList: "If your furnace has a wide filter cabinet, a deep media filter is the best option available: far more surface area, so it runs MERV 11 with less restriction than a 1-inch MERV 8 and only needs changing once or twice a year. If you have the slot, use it.",
    keyBuyingNotes: "Measure the cabinet: common sizes are 16x25x4, 20x25x4, 16x25x5. Change every 6–12 months; check at 6.",
    avoidIf: "You have a standard 1-inch filter slot — this won't fit.",
    typicalUse: "Twice a year in a 4-inch cabinet.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "If your furnace has the cabinet, this is the best filter you can buy for it.",
    affiliateUrl: "https://www.amazon.com/dp/B00CK03VQI?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-furnace-filters";
const pageTitle = "Best furnace filters: which MERV rating you actually need";
const pageDescription = "MERV 8 is right for most homes. MERV 11–13 helps allergies but can starve an older furnace. What the ratings mean, and the sizes that fit.";
const publishedAt = "2026-09-12";
const updatedAt = "2026-09-12";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "How often should I change my furnace filter?", answer: "Every 60–90 days for a 1-inch filter in normal use; every 30–60 days with pets, allergies, or during heavy use; every 6–12 months for a 4-inch media filter. If you can't see light through the filter, it's overdue regardless of the calendar." },
  { question: "What does MERV stand for?", answer: "Minimum Efficiency Reporting Value — a 1 to 16 scale of how small a particle the filter captures. MERV 8 stops dust and pollen; 11 adds pet dander and mold spores; 13 adds smoke and some bacteria. Higher ratings restrict airflow more, which is why the furnace's limits matter." },
  { question: "Are expensive filters worth it?", answer: "A $25 MERV 11 filter isn't 'better' than a $6 MERV 8 for a healthy household with no pets — it just restricts more airflow and loads faster. Spend more only when there's a reason: allergies, pets, smoke, or a medical recommendation. What always pays is changing the filter on schedule." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestFurnaceFiltersPage() {
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
          <p>The furnace filter is the cheapest part of the HVAC system and the one most likely to cause an expensive service call when ignored. A clogged filter overheats the furnace, trips the limit switch, and shortens the life of the blower motor — all for want of a $10 part every 60–90 days.</p>
          <p>Below: what the MERV number means in plain terms, why higher isn't automatically better, and the picks for standard, allergy, and pet households.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>Match the MERV rating to the household, not the highest number on the shelf. Check the arrow on the frame points toward the furnace.</p>} products={products} />
        <BuyingGuideSections
          whoShouldBuy={["Every homeowner with a forced-air furnace or heat pump \u2014 this is a recurring purchase, not a one-time one.", "Anyone whose furnace has started short-cycling, smells like burning, or blows weakly \u2014 the filter is the first suspect.", "Allergy, asthma, and pet households."]}
          whoShouldSkip={["Homes with boilers or radiant heat and no forced-air system.", "Furnaces with a whole-house electronic air cleaner in place of a media filter."]}
          commonMistakes={["Installing the filter backwards \u2014 the arrow on the frame points toward the furnace, in the direction of airflow.", "Jumping to MERV 13 on an older furnace and starving it of air.", "Buying one filter at a time, then forgetting to replace it for a year.", "Buying the wrong size \u2014 measure the printed size on the old filter, not the slot."]}
          safety={<>A severely clogged filter can overheat the furnace enough to trip its high-limit switch repeatedly, and in the worst cases scorch components. If the furnace <Link href="/advice/furnace-smells-like-burning">smells like burning</Link> after the first cycles of the season, check the filter before anything else. Never run the furnace with no filter at all — dust on the blower and heat exchanger is a fire and efficiency problem.</>}
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
            <li>→ <Link href="/advice/how-often-to-change-air-filter" className="no-underline text-navy-700 hover:text-navy-900">How often to change your air filter</Link></li>
            <li>→ <Link href="/advice/furnace-smells-like-burning" className="no-underline text-navy-700 hover:text-navy-900">Furnace smells like burning: normal or not?</Link></li>
            <li>→ <Link href="/advice/furnace-not-igniting" className="no-underline text-navy-700 hover:text-navy-900">Furnace not igniting</Link></li>
            <li>→ <Link href="/costs/hvac-service-call-cost" className="no-underline text-navy-700 hover:text-navy-900">HVAC service call cost</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide",   image: "/opengraph-image", }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
