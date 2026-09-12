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
    name: "Self-regulating heat cable kit (with plug, 6–30 ft)",
    badge: "Best for Pipes That Have Frozen Before",
    category: "Self-regulating heat cable",
    bestFor: "Garage supply lines, crawl-space runs, mobile-home water lines, any pipe that has frozen at least once.",
    whyItMadeTheList: "Self-regulating cable increases its heat output as the temperature drops and throttles back when it's warm, so it can't overheat the way old constant-wattage tape could. Plug-in kits with a built-in thermostat plug turn on around 38°F. Run it along the pipe, cover it with foam sleeve, plug into a GFCI outlet, and the freeze problem is solved for that line.",
    keyBuyingNotes: "Buy the length that matches the pipe run plus a foot; don't overlap cable on itself unless the product is rated for it. Use only on a GFCI-protected outlet. Rated for metal and plastic pipe — check the label for PEX compatibility.",
    avoidIf: "The pipe is inside a heated space — insulation alone is enough, and cable is wasted electricity.",
    typicalUse: "Permanent installation on the one or two lines that are actually at risk.",
    skillLevel: "Beginner — zip ties, foam sleeve, and an outlet.",
    riskLevel: "Low when installed per instructions on GFCI; moderate if overlapped or damaged.",
    verdict: "The definitive fix for a line that freezes every winter. Cheaper than one plumber visit.",
    affiliateUrl: "https://www.amazon.com/s?k=self+regulating+heat+cable+pipe+freeze+protection+kit&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Split foam pipe insulation (6 ft lengths, 1/2\" and 3/4\")",
    badge: "Best Overall Insulation",
    category: "Foam pipe sleeve",
    bestFor: "Every exposed pipe run in basements, crawl spaces, garages, and attics — hot and cold.",
    whyItMadeTheList: "Pre-slit polyethylene foam slides over the pipe and seals with the built-in adhesive strip or tape. It's the cheapest insulation per foot, easy to cut around fittings, and doubles as energy savings on hot-water lines year round. Match the sleeve's inside diameter to the pipe's outside diameter — 1/2\" copper needs a 5/8\" ID sleeve.",
    keyBuyingNotes: "Buy the wall thickness rated for your climate: 3/8\" is fine for mild zones; 1/2\" or thicker for the northern half of the U.S. Tape every seam and every joint — gaps are where freezing starts.",
    avoidIf: "The pipe is in an unheated space during multi-day deep freezes — insulation alone won't hold; add heat cable.",
    typicalUse: "Every exposed run, hot and cold.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "The right first step on every exposed pipe. Cheap, fast, and it pays for itself on hot-water lines.",
    affiliateUrl: "https://www.amazon.com/s?k=foam+pipe+insulation+split+self+sealing+6ft&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Outdoor faucet covers (foam, pack of 2–4)",
    badge: "Essential, $3 Each",
    category: "Hose bib cover",
    bestFor: "Every outdoor spigot — the most common frozen-pipe failure point in the house.",
    whyItMadeTheList: "A foam dome that straps over the hose bib and traps a pocket of warmer air around the spigot and the pipe behind it. Combined with disconnecting the hose, it eliminates the single most frequent winter plumbing claim: a split pipe inside the wall behind a spigot that had a hose left on it.",
    keyBuyingNotes: "Disconnect and drain the hose first — a cover over a connected hose does nothing. Frost-free spigots still need the hose off. Buy the hard-shell version if you're in a windy location; the soft foam ones blow off.",
    avoidIf: "You live somewhere it never freezes.",
    typicalUse: "Every outdoor spigot, every winter.",
    skillLevel: "Beginner — 30 seconds each.",
    riskLevel: "Low.",
    verdict: "The cheapest prevention on the whole list, and it addresses the most common failure.",
    affiliateUrl: "https://www.amazon.com/s?k=outdoor+faucet+cover+winter+freeze+protection&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Pipe-wrap fiberglass insulation with foil facing",
    badge: "Best for Odd Shapes and Fittings",
    category: "Wrap insulation",
    bestFor: "Valves, unions, meters, and short runs with too many fittings for foam sleeves to fit cleanly.",
    whyItMadeTheList: "Foam sleeves are great on straight runs and terrible around valves and meter assemblies. Fiberglass or foam wrap with a foil facing wraps any shape, overlaps itself, and tapes down. It's what plumbers use on water meters and around the shutoff valve where the main enters the house.",
    keyBuyingNotes: "Overlap each wrap by half its width. Wear gloves with fiberglass. Foil-faced wrap can go over heat cable when the cable is rated for covering.",
    avoidIf: "Long straight runs — foam sleeves are faster and cheaper there.",
    typicalUse: "Meters, valves, fittings, and the first few feet where the main enters.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "Fills the gaps foam sleeves leave. Buy one roll.",
    affiliateUrl: "https://www.amazon.com/s?k=foil+faced+pipe+wrap+insulation+roll&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-pipe-insulation-and-heat-cable";
const pageTitle = "Best pipe insulation and heat cable for winter";
const pageDescription = "Foam sleeves slow heat loss; self-regulating heat cable adds it. Which one your pipes need, what each costs, and the fire-safety rule for old heat tape.";
const publishedAt = "2026-09-12";
const updatedAt = "2026-09-12";

export const metadata = buildMetadata({ title: pageTitle, description: pageDescription, path, type: "article", publishedAt, updatedAt, authorName: kenHoven.name, section: "Buying guide" });

const faqs = [
  { question: "Is heat cable expensive to run?", answer: "Self-regulating cable draws roughly 3–8 watts per foot only when it's cold, and much less as the pipe warms. A 20-foot run on a garage line typically costs a few dollars a month in the coldest weeks. A burst pipe costs several thousand dollars. Leave it plugged in from November through March." },
  { question: "Can I put heat cable on PEX or PVC?", answer: "Most self-regulating cable is rated for plastic pipe — check the package. Constant-wattage tape generally is not; it can overheat plastic. Never use heat cable on a gas line or on a pipe carrying anything other than water." },
  { question: "How thick should pipe insulation be?", answer: "3/8-inch wall is adequate for mild climates and for hot-water energy savings. In the northern U.S., use 1/2-inch or thicker on cold-water lines in unheated spaces. Thicker only buys more time; it never makes a pipe freeze-proof on its own in an unheated space." },
];

const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }, { name: pageTitle, href: path }];

export default function BestPipeInsulationPage() {
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
          <p>Insulation and heat cable solve two different problems. Foam sleeves slow heat loss and buy hours during a cold snap. Heat cable adds heat and keeps a pipe in an unheated space from freezing at all. Most homes need the first on every exposed run and the second on exactly one or two lines.</p>
          <p>Below: the four products that cover it, and how to decide which pipe gets which.</p>
        </div>
        <RecommendedProductsSection heading="Our picks" intro={<p>Start with hose bib covers and foam sleeves on every exposed run. Add self-regulating heat cable only on lines in unheated spaces or lines that have frozen before.</p>} products={products} />
        <BuyingGuideSections
          whoShouldBuy={["Anyone with plumbing in a garage, crawl space, attic, or on an exterior wall.", "Anyone who has had a frozen pipe before \u2014 that line needs heat cable, not just foam.", "Homeowners leaving a house empty for stretches in winter.", "Anyone with outdoor spigots \u2014 which is everyone."]}
          whoShouldSkip={["Homes in climates that never see sustained temperatures below freezing.", "Pipes entirely inside conditioned space \u2014 they don't freeze."]}
          commonMistakes={["Insulating only, on a pipe in an unheated space that has frozen before \u2014 insulation slows loss, it doesn't add heat.", "Leaving a hose attached to a covered spigot.", "Overlapping heat cable on itself, or using old constant-wattage heat tape.", "Leaving gaps at fittings and joints \u2014 that's exactly where the ice starts."]}
          safety={<>Old flat "heat tape" that is more than 10 years old, frayed, or overlapped on itself is a documented fire cause — replace it with self-regulating cable. Always plug heat cable into a GFCI outlet, never cover it with insulation unless the product says so, and never try to thaw a frozen pipe with an open flame. If a pipe has already split, shut off the main before it thaws — see the <Link href="/emergency-repairs/pipe-burst-first-10-minutes">burst pipe guide</Link>.</>}
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
            <li>→ <Link href="/advice/how-to-keep-pipes-from-freezing" className="no-underline text-navy-700 hover:text-navy-900">How to keep pipes from freezing</Link></li>
            <li>→ <Link href="/emergency-repairs/pipe-burst-first-10-minutes" className="no-underline text-navy-700 hover:text-navy-900">Pipe burst: the first 10 minutes</Link></li>
            <li>→ <Link href="/tools/best-pipe-repair-clamps" className="no-underline text-navy-700 hover:text-navy-900">Best pipe repair clamps</Link></li>
            <li>→ <Link href="/tools/best-water-leak-detectors" className="no-underline text-navy-700 hover:text-navy-900">Best water leak detectors</Link></li>
          </ul>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbSchema(breadcrumbItems), articleSchema({ headline: pageTitle, description: pageDescription, url: path, datePublished: publishedAt, dateModified: updatedAt, authorUrl: kenHoven.url, authorName: kenHoven.name, articleSection: "Buying guide" }), faqSchema(faqs), itemListSchema({ name: pageTitle, description: pageDescription, url: path, items: products.map((p) => ({ name: p.name, url: `${path}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` })) })])} />
      </Section>
    </>
  );
}
