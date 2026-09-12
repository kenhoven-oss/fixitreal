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
    name: "Moen Flo Smart Water Monitor and Shutoff",
    badge: "Best Overall",
    category: "Flow-sensing smart valve",
    bestFor: "Whole-house protection with leak detection, usage monitoring, and remote shutoff — the most complete system available.",
    whyItMadeTheList: "Flo installs inline on the main supply and learns the house's normal water use. It detects the continuous-flow signature of a burst pipe or running toilet, alerts your phone, and closes the valve automatically. It also runs a nightly pressure test that catches pinhole leaks long before they're visible. It's the system most insurers name specifically for discounts.",
    keyBuyingNotes: "Sized for 3/4\" and 1\" mains. Requires Wi-Fi and a nearby outlet. Professional installation ($200–$500) is recommended since it means cutting the main; some plumbers install it in an hour. Check your insurer's discount program before buying — the discount often covers the install.",
    avoidIf: "You rent, or you can't get power and Wi-Fi to the main line location.",
    typicalUse: "Whole-house, permanent.",
    skillLevel: "Advanced — plumber install.",
    riskLevel: "Low once installed.",
    verdict: "The complete solution. The insurance discount often pays for the install within a few years.",
    affiliateUrl: "https://www.amazon.com/s?k=moen+flo+smart+water+monitor+shutoff&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Phyn Plus Smart Water Assistant",
    badge: "Best for Pressure-Wave Leak Detection",
    category: "Flow-sensing smart valve",
    bestFor: "Homeowners who want the most sensitive leak detection available, especially for pinhole and slab leaks.",
    whyItMadeTheList: "Phyn measures pressure changes 240 times a second and identifies individual fixtures by their pressure signature — it can tell a running toilet from a shower. That sensitivity makes it particularly good at catching the small, slow leaks that flow-only systems miss. Automatic shutoff and phone alerts are standard.",
    keyBuyingNotes: "Same install requirements as Flo: inline on the main, power, Wi-Fi, professional install recommended. Compare current pricing and subscription terms — both brands have changed their models over time.",
    avoidIf: "You want the simplest possible system — Flo's setup is slightly more straightforward.",
    typicalUse: "Whole-house, permanent.",
    skillLevel: "Advanced — plumber install.",
    riskLevel: "Low.",
    verdict: "The most sensitive detection on the market. Worth considering if slow leaks are the concern.",
    affiliateUrl: "https://www.amazon.com/s?k=phyn+plus+smart+water+shutoff&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Sensor-triggered shutoff valve kit (water heater / washing machine)",
    badge: "Best Budget, No Main-Line Cut",
    category: "Sensor-triggered point shutoff",
    bestFor: "Protecting the two highest-risk appliances — water heater and washing machine — without touching the main supply.",
    whyItMadeTheList: "These kits put a motorized valve on the supply to a single appliance and a puddle sensor on the floor beneath it. Water on the floor closes the valve. It doesn't protect the whole house, but water heaters and washer hoses account for a large share of residential water claims, and this installs in 30 minutes with no plumber.",
    keyBuyingNotes: "Buy the kit matched to the connection: 3/4\" for water heaters, washing-machine hose fittings for the washer. Battery or plug-in — plug-in with battery backup is more reliable. Test the sensor after install.",
    avoidIf: "You want whole-house coverage — this only protects what it's attached to.",
    typicalUse: "Water heater and washer, permanent.",
    skillLevel: "Beginner to intermediate — threaded fittings, no cutting.",
    riskLevel: "Low.",
    verdict: "Targeted, cheap, and DIY. The right first step if a full smart valve isn't in the budget.",
    affiliateUrl: "https://www.amazon.com/s?k=automatic+water+shutoff+valve+leak+sensor+water+heater+kit&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Wi-Fi leak sensors (3-pack, for use with any smart valve)",
    badge: "Add-On for Any System",
    category: "Wi-Fi puddle sensor",
    bestFor: "Placing detection at every leak point — under sinks, behind the toilet, by the sump — to trigger a smart valve or just alert your phone.",
    whyItMadeTheList: "Flow-sensing valves catch big leaks fast; puddle sensors catch small ones where they start. Most smart valves accept third-party or brand-matched sensors and will shut off when any sensor gets wet. Even without a valve, a $20 sensor that texts you when the water heater pan has water in it is one of the cheapest forms of insurance in the house.",
    keyBuyingNotes: "Place under every sink, behind toilets, in the water heater pan, next to the washer, and at the sump. Check battery annually. Match the brand to your valve if you want automatic shutoff.",
    avoidIf: "You already have a full sensor set — most smart valve kits include a few.",
    typicalUse: "Every leak-prone location.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "Cheap detection at the source. Pairs with any of the valves above.",
    affiliateUrl: "https://www.amazon.com/s?k=wifi+water+leak+sensor+3+pack&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-automatic-water-shutoff-valves";
const pageTitle = "Best automatic water shutoff valves for homeowners";
const pageDescription = "A smart shutoff closes the main when it detects a burst pipe — even when nobody's home. Which systems work, what they cost, and the insurance discount most people miss.";
const publishedAt = "2026-09-12";
const updatedAt = "2026-09-12";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "Do automatic shutoff valves really work?", answer: "Yes. Flow-sensing valves close within seconds to a minute of detecting continuous abnormal flow; sensor-triggered kits close the moment the puddle sensor gets wet. The failure modes are power and Wi-Fi outages — which is why models with battery backup and local (non-cloud) shutoff logic are worth the premium." },
  { question: "Will my insurance company give me a discount?", answer: "Many do, typically 5–15% off the homeowner's premium, and some offer rebates on specific devices. Call and ask before buying; the answer often decides which brand to get. Keep the installation receipt." },
  { question: "Can I install a smart shutoff valve myself?", answer: "The sensor-triggered appliance kits, yes. The inline main-supply valves (Flo, Phyn) require cutting the main and sweating or push-fitting new connections — most homeowners should hire a plumber for that hour of work. Expect $200–$500 for the install." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestAutomaticShutoffPage() {
  return (
    <>
      <Section padding="md" size="md"><Breadcrumb items={breadcrumbItems} /></Section>
      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Buying guide</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">{pageTitle}</h1>
        <p className="mt-4 text-sm text-ink-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>By <Link href={kenHoven.url} className="no-underline hover:text-navy-900">{kenHoven.name}</Link></span>
          <span>Updated September 2026</span><span>5 min read</span>
        </p>
        <AmazonDisclosure products={products} />
        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>A burst pipe running for eight hours does more damage than a house fire, on average, and it usually happens when nobody is home. An automatic shutoff valve on the main line detects the flow pattern of a leak and closes the water in seconds. Insurers know this: many offer 5–15% premium discounts for an installed system.</p>
          <p>Below: the two categories that work — flow-sensing smart valves and sensor-triggered shutoffs — and how to pick between them.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>For a whole-house solution, a flow-sensing smart valve (Moen Flo, Phyn) is the most complete option. For a lower-cost targeted approach, a sensor-triggered shutoff covers the water heater and washer without cutting into the main.</p>} products={products} />
        <BuyingGuideSections
          whoShouldBuy={["Anyone who travels, owns a second home, or leaves the house empty for stretches \u2014 this is when unattended leaks do the most damage.", "Homeowners with finished basements, hardwood floors, or anything expensive below plumbing.", "Anyone whose insurer offers a smart-shutoff discount \u2014 ask; many do.", "Homes with aging copper or a history of pinhole leaks."]}
          whoShouldSkip={["Renters \u2014 talk to the landlord; the sensor-only option still works for alerts.", "Homes with a well and pressure tank \u2014 some flow-sensing valves need tuning for well systems; confirm compatibility."]}
          commonMistakes={["Buying a flow-sensing valve and not connecting it to Wi-Fi or an app \u2014 the shutoff still works, but you lose the alerts and the pinhole detection.", "Skipping the insurer call \u2014 the discount often exceeds the install cost over a few years.", "Installing the sensor kit and never testing the sensor.", "Relying on sensors alone in an empty house \u2014 a sensor tells you about the leak; only a valve stops it."]}
          safety={<>Cutting into the main supply line is plumber work in most homes — a mistake there floods the house you were trying to protect. The sensor-triggered kits and Wi-Fi sensors are fully DIY. Whichever system you install, know where the manual main shutoff is and test it twice a year; the smart valve is a backup to that valve, not a replacement for knowing how to use it. See the <Link href="/emergency-repairs/pipe-burst-first-10-minutes">burst pipe guide</Link> for the manual sequence.</>}
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
            <li>→ <Link href="/tools/best-water-leak-detectors" className="no-underline text-navy-700 hover:text-navy-900">Best water leak detectors</Link></li>
            <li>→ <Link href="/advice/smart-water-leak-detectors" className="no-underline text-navy-700 hover:text-navy-900">Are smart water leak detectors worth it?</Link></li>
            <li>→ <Link href="/emergency-repairs/pipe-burst-first-10-minutes" className="no-underline text-navy-700 hover:text-navy-900">Pipe burst: the first 10 minutes</Link></li>
            <li>→ <Link href="/advice/how-to-keep-pipes-from-freezing" className="no-underline text-navy-700 hover:text-navy-900">How to keep pipes from freezing</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide",   image: "/opengraph-image", }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
