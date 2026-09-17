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
    name: "Universal flapper (Korky or Fluidmaster)",
    badge: "Best Overall",
    category: "Universal flapper",
    bestFor: "Most standard 2-inch flush valve seats — fixes the running toilet in 10 minutes flat.",
    whyItMadeTheList:
      "Universal flappers from Korky and Fluidmaster fit the vast majority of 2-inch flush valves (the standard in nearly every toilet made after 1994). Chloramine-resistant rubber lasts 3–5× longer than cheap OEM replacements. At $3–$8, it's the first fix to try on any running toilet — cheaper than one hour of wasted water.",
    keyBuyingNotes:
      "Check your flush valve seat diameter before buying: 2-inch is nearly universal; 3-inch seats (common on Kohler one-piece toilets) need a 3-inch flapper specifically. Bring the old flapper to the hardware store if unsure.",
    avoidIf: "Your toilet has a tower-style (canister) flush valve — those need a canister seal, not a flapper.",
    typicalUse: "Running or ghost-flushing toilet repair.",
    skillLevel: "Beginner — no tools, 10 minutes.",
    riskLevel: "Low.",
    verdict: "Start here. Fixes 80% of running toilets for under $8.",
    affiliateUrl: "https://www.amazon.com/dp/B00E5ICW0E?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Fluidmaster 400A fill valve (universal)",
    badge: "Best Fill Valve",
    category: "Universal fill valve",
    bestFor: "Toilet that runs continuously or refills slowly — fill valve replacement.",
    whyItMadeTheList:
      "The Fluidmaster 400A is the industry standard fill valve. It fits virtually every toilet with a standard 7/8-inch tank hole, adjusts from 9–14 inches for tank depth, and has an anti-siphon design that meets all US plumbing codes. Plumbers install this daily. At $10–$15, it's the correct fix when a flapper swap doesn't stop the running.",
    keyBuyingNotes:
      "Turn off the supply shutoff and flush before removing the old valve. The 400A includes all needed hardware. Adjustment is a twist of the top — set the water level 1 inch below the top of the overflow tube.",
    avoidIf: "Your toilet is a pressure-assist flush model — those need a pressure-assist-specific repair kit.",
    typicalUse: "Running toilet where flapper swap didn't fix it; slow refill after flushing.",
    skillLevel: "Beginner — wrench + 15 minutes.",
    riskLevel: "Low — shut off supply first.",
    verdict: "The standard fix. If the flapper didn't stop the running, this will.",
    affiliateUrl: "https://www.amazon.com/dp/B00002ND6R?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Fluidmaster 400CRP14 complete repair kit",
    badge: "Best Kit",
    category: "Complete repair kit",
    bestFor: "Toilet running and you're not sure if it's the flapper, fill valve, or both.",
    whyItMadeTheList:
      "Replaces the flapper, fill valve, and flush handle all at once for $20–$25 — less than a plumber's trip charge minimum. When a toilet is running and you don't know which part is failing, replacing all three is faster and cheaper than diagnosing each one individually.",
    keyBuyingNotes:
      "This kit works on two-piece standard toilets. One-piece and wall-hung toilets are different. Check that your overflow tube is a standard 7/8-inch threaded type.",
    avoidIf: "You know exactly which part failed — buy that part individually instead.",
    typicalUse: "Toilet > 10 years old that has started running — replace the internals as a set.",
    skillLevel: "Beginner — complete instructions included.",
    riskLevel: "Low.",
    verdict: "Best value when the toilet is old enough that all three parts are near end-of-life.",
    affiliateUrl: "https://www.amazon.com/dp/B007TUHQWY?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "3-inch flapper (Korky 3060BP or equivalent)",
    badge: "For Kohler & 3-inch Valves",
    category: "3-inch flapper",
    bestFor: "Kohler one-piece toilets and other toilets with a 3-inch flush valve seat.",
    whyItMadeTheList:
      "Many Kohler one-piece toilets and some American Standard models use a 3-inch flush valve — a standard 2-inch flapper creates a leak immediately. Korky's 3-inch flappers are the most reliable OEM-match. Check the bottom of your tank: if the flush valve opening looks much larger than a golf ball, you need 3-inch.",
    keyBuyingNotes:
      "Measure the flush valve opening or check your toilet model number before ordering. Common Kohler models that use 3-inch: Cimarron, Santa Rosa, Archer. List is on Korky's website.",
    avoidIf: "Your toilet has a standard 2-inch flush valve — see the universal flapper above.",
    typicalUse: "Running Kohler or other large-valve toilet.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "Essential if you have a Kohler one-piece — a 2-inch flapper will not seal it.",
    affiliateUrl: "https://www.amazon.com/dp/B0034LX2BG?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-toilet-flappers-and-fill-valves";
const pageTitle = "Best toilet flappers and fill valves";
const pageDescription =
  "A running toilet wastes 200 gallons a day. A $5 flapper or $12 fill valve fixes 95% of cases. Here's which part you need and how to tell.";
const publishedAt = "2026-09-11";
const updatedAt = "2026-09-11";

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

const faqs = [
  {
    question: "How do I know if it's the flapper or the fill valve?",
    answer:
      "Put a few drops of food coloring in the tank (not the bowl) and wait 15 minutes without flushing. If color appears in the bowl, the flapper is leaking. If the toilet keeps running after the tank fills — the fill valve keeps cycling — the fill valve is the problem. If both, replace both.",
  },
  {
    question: "How much water does a running toilet waste?",
    answer:
      "A slow leak (barely audible hissing) wastes 20–30 gallons per day. A fast leak (clearly audible running) wastes 200+ gallons per day — about $15–$30 per month at average US water rates. A $5 flapper has a payback of days.",
  },
  {
    question: "Can I replace a toilet flapper myself?",
    answer:
      "Yes — no tools needed. Turn off the supply shutoff (valve behind the toilet), flush to empty the tank, unhook the old flapper from the overflow tube pegs and the chain from the handle arm, snap the new one on, reconnect the chain (leave 1/2 inch of slack), turn the water back on. Total time: 10 minutes.",
  },
  {
    question: "What is ghost flushing?",
    answer:
      "Ghost flushing — where the toilet briefly runs every 20–30 minutes without anyone using it — is almost always a flapper leak. Water silently leaks from tank to bowl until the water level drops enough to trigger the fill valve. Fix: dye test to confirm, then replace the flapper.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestToiletFlappersPage() {
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
          <span>Updated September 2026</span>
          <span>5 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            A running toilet wastes 200 gallons a day and adds $15–$30 to your
            monthly water bill. The fix is almost always a $5–$12 part.
            The only question is which part — and that&apos;s a 2-minute
            diagnosis with food coloring.
          </p>
          <p>
            Below: how to tell flapper from fill valve, the four products that
            cover every standard-toilet scenario, and a 10-minute repair
            walkthrough.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          Diagnose first — 2 minutes, food coloring
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Flapper leak:</strong> Put food
            coloring in the tank. Wait 15 minutes without flushing. Color in
            the bowl = flapper not sealing. Cost: $3–$8 flapper.
          </p>
          <p>
            <strong className="text-navy-900">Fill valve failure:</strong> If
            the toilet runs after the tank fills — the water level reaches the
            overflow tube and the valve keeps cycling — the fill valve is
            the problem. Cost: $10–$15 fill valve.
          </p>
          <p>
            <strong className="text-navy-900">Both:</strong> Toilet is
            10+ years old and has started running — replace everything for $20
            with a kit. Trip charge for a plumber starts at $75–$150.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four options covering every standard-toilet scenario. Start with
              the universal flapper — it fixes most running toilets for under
              $8. Move to the fill valve if a flapper swap doesn&apos;t stop it.
            </p>
          }
          products={products}
        />

        <BuyingGuideSections
          whoShouldBuy={[
            "Any homeowner with a running, ghost-flushing, or slow-refilling toilet.",
            "Anyone replacing toilet internals proactively after 10+ years — flappers and fill valves degrade with age.",
            "Anyone who got a high water bill with no obvious cause — check the toilet first.",
          ]}
          whoShouldSkip={[
            "Pressure-assist toilets (commercial-style tank with a pressure vessel inside) — these need pressure-assist specific parts.",
            "Wall-hung toilets — the flush valve is in-wall and typically requires the tank carrier to be accessed.",
            "Toilets with a crack in the tank or bowl — no flapper or fill valve fixes structural damage.",
          ]}
          commonMistakes={[
            "Buying a 2-inch flapper for a 3-inch flush valve (Kohler one-piece) — it won't seal.",
            "Leaving too much chain slack — the flapper doesn't lift fully and the toilet won't flush completely.",
            "Not turning off the supply shutoff before pulling the fill valve — wet floor guaranteed.",
            "Replacing only the flapper when the fill valve is also worn — toilet keeps running, mystery seems unsolved.",
          ]}
          safety={
            <>
              Turn off the supply shutoff valve (behind and below the toilet)
              before doing any tank work.{" "}
              <strong>
                If the shutoff valve is stuck or leaking, stop and call a
                plumber
              </strong>{" "}
              — a seized shutoff that breaks during repair turns a $10 job into
              an emergency. See our{" "}
              <Link href="/advice/toilet-leaking-at-the-base">
                toilet leaking guide
              </Link>{" "}
              for base-level leaks, which are a different repair entirely.
            </>
          }
        />

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
              <Link href="/diy-or-hire/toilet" className="no-underline text-navy-700 hover:text-navy-900">
                Should I replace my own toilet?
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/why-does-my-toilet-keep-running" className="no-underline text-navy-700 hover:text-navy-900">
                Why does my toilet keep running?
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/costs/toilet-replacement" className="no-underline text-navy-700 hover:text-navy-900">
                Toilet replacement cost
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
