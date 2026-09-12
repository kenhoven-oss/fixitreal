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
    name: "Klein Tools ET310 circuit breaker finder",
    badge: "Best Overall",
    category: "Plug-in transmitter + receiver",
    bestFor: "Identifying which breaker controls an unlabeled outlet or circuit — without flipping breakers one by one.",
    whyItMadeTheList: "Klein's ET310 is the homeowner-grade standard for circuit tracing. Plug the transmitter into the outlet, scan the panel with the receiver, and the correct breaker is identified by a beep and LED. Faster and more accurate than the trial-and-error method. Works through the panel door without opening the panel.",
    keyBuyingNotes: "Only works on live circuits — the outlet must have power. Doesn't work if the circuit is already tripped. Accuracy within 1–2 breakers in a standard residential panel.",
    avoidIf: "The circuit is already dead — you need a voltage tester to confirm, not a finder.",
    typicalUse: "Labeling an unlabeled panel; identifying which breaker to flip before electrical work.",
    skillLevel: "Beginner.",
    riskLevel: "Low — no panel opening required.",
    verdict: "The right tool for unlabeled panels. One-time purchase that pays for itself the first use.",
    affiliateUrl: "https://www.amazon.com/s?k=klein+tools+ET310+circuit+breaker+finder&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Sperry Instruments CS550A circuit tracer",
    badge: "Best Budget",
    category: "Basic circuit tracer",
    bestFor: "Occasional circuit identification at a lower price point.",
    whyItMadeTheList: "The Sperry CS550A does the same basic job as the Klein at a lower price. Transmitter plugs into the outlet; receiver finds the breaker. Slightly less sensitivity than the Klein in large panels, but adequate for standard residential panels where breakers are close together.",
    keyBuyingNotes: "Works best in panels under 200A with standard spacing. May require multiple scans in large or crowded panels.",
    avoidIf: "Your panel is large (200A+), a sub-panel, or you need to trace circuits through walls rather than just to the breaker.",
    typicalUse: "Labeling a residential panel on a budget.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "Adequate for a standard home. Save $15–$20 vs. the Klein if you'll use it only occasionally.",
    affiliateUrl: "https://www.amazon.com/s?k=sperry+instruments+circuit+breaker+finder+CS550A&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-circuit-breaker-finders";
const pageTitle = "Best circuit breaker finders";
const pageDescription = "A circuit breaker finder identifies which breaker controls any outlet in minutes — no trial and error. Here's which tool to buy and how it works.";
const publishedAt = "2026-09-11";
const updatedAt = "2026-09-11";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "How does a circuit breaker finder work?", answer: "A plug-in transmitter generates a signal on the circuit's wiring. A receiver wand held near each breaker in the panel detects the signal — the breaker carrying that circuit shows the strongest reading. The correct breaker is identified without opening the panel or flipping breakers." },
  { question: "Can I use a circuit breaker finder on a two-pole 240V circuit?", answer: "Basic homeowner finders are designed for standard 120V circuits (outlets, lights). 240V circuits (dryer, range, HVAC) require a different adapter or a professional-grade tracer. Check the product specs before using on 240V circuits." },
  { question: "Do I need to open the panel to use a circuit breaker finder?", answer: "No. All standard circuit breaker finders work through the closed panel door — the receiver reads the signal through the cover. Never open an electrical panel yourself unless you're qualified to do so." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestCircuitBreakerFindersPage() {
  return (
    <>
      <Section padding="md" size="md"><Breadcrumb items={breadcrumbItems} /></Section>
      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Buying guide</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">{pageTitle}</h1>
        <p className="mt-4 text-sm text-ink-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>By <Link href={kenHoven.url} className="no-underline hover:text-navy-900">{kenHoven.name}</Link></span>
          <span>Updated September 2026</span><span>3 min read</span>
        </p>
        <AmazonDisclosure products={products} />
        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>An unlabeled electrical panel is more than an annoyance — it means every small repair requires either guessing or flipping every breaker in the house. A circuit breaker finder solves this once, correctly, in an afternoon.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>Two options at different price points — both do the same job in a standard residential panel.</p>} products={products} />
        <BuyingGuideSections
          whoShouldBuy={["Anyone with an unlabeled or incorrectly labeled electrical panel.", "Anyone doing their own electrical work and needing to confirm which breaker to flip.", "Homeowners buying a house with an unlabeled panel — label it on move-in day."]}
          whoShouldSkip={["Anyone whose panel is already accurately labeled."]}
          commonMistakes={["Trying to use a circuit finder on a dead circuit — the transmitter needs live power to work.", "Not labeling the breakers immediately after finding them — the whole point is the label."]}
          safety={<>Always use a <Link href="/tools/best-voltage-testers-for-homeowners">voltage tester</Link> to confirm a circuit is de-energized before doing any electrical work — a circuit breaker finder tells you which breaker to flip, not whether it was successfully tripped. Never open an electrical panel yourself; the bus bars behind the breakers remain energized even with the main breaker off.</>}
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
            <li>→ <Link href="/tools/best-voltage-testers-for-homeowners" className="no-underline text-navy-700 hover:text-navy-900">Best voltage testers for homeowners</Link></li>
            <li>→ <Link href="/advice/breaker-keeps-tripping" className="no-underline text-navy-700 hover:text-navy-900">Breaker keeps tripping: DIY checks</Link></li>
            <li>→ <Link href="/costs/electrician-service-call" className="no-underline text-navy-700 hover:text-navy-900">Electrician service call cost</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide" }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
