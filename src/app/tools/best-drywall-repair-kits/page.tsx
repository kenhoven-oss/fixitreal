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
    name: "3M High Strength Small Hole Repair (or similar squeeze-tube filler)",
    badge: "Best for Small Holes",
    category: "Squeeze-tube filler",
    bestFor: "Nail holes, screw holes, small dings — anything under 1/2 inch diameter.",
    whyItMadeTheList:
      "For nail holes and screw holes, a squeeze-tube vinyl spackling compound is the right tool. Press in, let dry, sand lightly, paint. No mixing, no excess material, fast drying. 3M's formula sands smooth and paints without noticeable texture difference. One tube handles dozens of repairs.",
    keyBuyingNotes:
      "Shrinks slightly on drying — apply slightly proud of the wall surface and sand flush after drying. Lightweight formula dries faster than all-purpose joint compound and doesn't need priming for small holes before painting.",
    avoidIf: "Hole is larger than 3/4 inch — you need a mesh patch or backer for structural support.",
    typicalUse: "Picture-hook holes, screws removed from walls, doorknob dings.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "The right tool for the most common drywall repair. Every homeowner should have one tube.",
    affiliateUrl: "https://www.amazon.com/dp/B00CAOB8GY?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Self-adhesive mesh patch kit (3–6 inch)",
    badge: "Best for Medium Holes",
    category: "Mesh patch kit",
    bestFor: "Holes 1–6 inches — doorknob holes, outlet cutouts moved, cable holes.",
    whyItMadeTheList:
      "Self-adhesive fiberglass mesh patches provide the structural backing that makes joint compound hold over a hole. Press over the hole, skim two coats of joint compound over the mesh, sand and paint. No cutting backing boards, no drywall screws. The 6-inch size handles the most common homeowner damage scenario: doorknob-through-wall.",
    keyBuyingNotes:
      "Apply two thin coats of joint compound, feathering each coat wider than the last. Let each coat dry fully (overnight). Sand lightly with 120-grit, prime before painting. The mesh is visible through one coat — that's normal; the second coat covers it.",
    avoidIf: "Hole is larger than 6 inches or has damaged framing — see drywall sheet replacement.",
    typicalUse: "Doorknob holes, cable access holes, outlet box relocations.",
    skillLevel: "Beginner to intermediate.",
    riskLevel: "Low.",
    verdict: "Correct fix for the most-googled drywall repair scenario. Clean results with two coats.",
    affiliateUrl: "https://www.amazon.com/dp/B077972N5H?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "California Drywall Patch (or clip-based backing system)",
    badge: "Best for Large Holes",
    category: "Clip backer system",
    bestFor: "Holes 6–12 inches where adhesive mesh won't bridge the gap cleanly.",
    whyItMadeTheList:
      "For holes too large for mesh-and-compound, a clip backer system lets you cut a square opening, attach clips to the existing drywall edges, screw a drywall patch to the clips, then tape and mud normally. Produces a solid, paintable repair without cutting into studs or installing a wood backer. Cleaner result than mesh on large holes.",
    keyBuyingNotes:
      "Cut the damaged area into a clean square or rectangle before installing clips. Use standard 1/2-inch drywall for the patch. Apply paper tape (not mesh) at the seams for large patches — mesh tape over large spans tends to crack. Three coats of mud minimum; prime before painting.",
    avoidIf: "The damaged area includes damaged framing — structural damage is a contractor job.",
    typicalUse: "Water-damage cutouts, large punch-through holes, plumbing access holes patched after repair.",
    skillLevel: "Intermediate.",
    riskLevel: "Low — but matching texture before painting requires practice.",
    verdict: "The right system for large patches. Clip backers make the job manageable without a helper.",
    affiliateUrl: "https://www.amazon.com/dp/B002NGH8SQ?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Flexible joint compound (small tub, all-purpose)",
    badge: "Essential Supply",
    category: "Joint compound",
    bestFor: "The skim-coat material needed for any patch larger than a nail hole.",
    whyItMadeTheList:
      "No mesh or backer is complete without joint compound — the material that actually fills and surfaces the repair. A small 1-quart tub ($5–$8) is right for most homeowners. All-purpose joint compound works for every stage: filling, taping, and finishing. Avoid buying a 5-gallon bucket unless you have many repairs — it dries out before you use it.",
    keyBuyingNotes:
      "Thin with water to a peanut-butter consistency for the first coat; slightly thinner for the finish coat. Store with plastic wrap pressed directly on the surface of unused compound to prevent skinning.",
    avoidIf: "You only have nail holes — spackling compound (above) is easier for those.",
    typicalUse: "Any patch over a mesh or backer, skim coating, feathering patch edges.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "A required component for any patch larger than a nail hole. Buy the small tub.",
    affiliateUrl: "https://www.amazon.com/dp/B002YC3YLY?tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-drywall-repair-kits";
const pageTitle = "Best drywall repair kits";
const pageDescription =
  "The right drywall repair depends on hole size. Small holes need a $4 tube of spackling. Medium holes need a mesh patch. Here are the right tools for each scenario.";
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
    question: "Do I need to prime before painting a drywall patch?",
    answer:
      "Yes, for anything larger than a nail hole. Joint compound and spackling are porous and absorb paint differently than the surrounding painted wall — skipping primer results in a shiny or flat spot called 'flashing' that shows through the paint. One coat of drywall primer (PVA primer) before painting eliminates this.",
  },
  {
    question: "How do I match the existing wall texture?",
    answer:
      "For smooth walls, feather the final mud coat thin enough that it blends imperceptibly — this takes practice. For textured walls (orange peel, knockdown): apply compound, let set to damp, then replicate the texture with a sponge, spray, or stomp brush. Orange peel texture spray cans ($8–$15) work well for small areas. Test on cardboard first to match the pattern.",
  },
  {
    question: "How long does joint compound take to dry?",
    answer:
      "Lightweight joint compound dries to touch in 1–2 hours in normal conditions; ready to sand in 4–8 hours. Apply the next coat after the previous coat is fully white (no dark spots). Rushing between coats leads to cracking. Humidity slows drying significantly — in bathrooms, use a fan.",
  },
  {
    question: "When should I call a professional for drywall repair?",
    answer:
      "When the damage includes wet or mold-contaminated drywall (cut it all out, find the source, then repair), when structural framing is damaged, when the damaged area is large enough to require significant texture matching on a visible wall, or when the repair needs to be invisible (paint-grade finish). A professional drywall finisher produces a better level-5 finish than most homeowners on critical walls.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestDrywallRepairKitsPage() {
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
            Most drywall repairs are a size problem: different holes need
            different approaches. A nail hole needs a $4 tube of spackling.
            A doorknob hole needs a mesh patch and two coats of compound. A
            large water-damage cutout needs a clip backer and drywall
            replacement.
          </p>
          <p>
            Below: one pick per hole size, what makes each one the right
            call, and the one step everyone skips that makes paint look bad.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          Match the tool to the hole size
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p><strong className="text-navy-900">Under 1/2 inch (nail, screw, small ding):</strong> Squeeze-tube spackling. No mesh needed.</p>
          <p><strong className="text-navy-900">1/2 inch to 6 inches (doorknob, cable hole):</strong> Self-adhesive mesh patch + joint compound.</p>
          <p><strong className="text-navy-900">6–12 inches (large punch-through, plumbing access):</strong> Clip backer system + drywall patch + joint compound.</p>
          <p><strong className="text-navy-900">Over 12 inches or wet/moldy:</strong> Cut to studs and replace the drywall panel. Contractor territory if you want an invisible finish.</p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Four products that cover every residential drywall repair scenario.
              Pick based on hole size — don&apos;t buy a kit with a mesh patch
              for nail holes, or spackling for a 4-inch hole.
            </p>
          }
          products={products}
        />

        <BuyingGuideSections
          whoShouldBuy={[
            "Homeowners filling nail holes before repainting.",
            "Anyone repairing doorknob dents, cable access holes, or outlet box cutouts.",
            "Landlords preparing a unit between tenants.",
            "Anyone who just had a plumber or electrician open the wall and wants to close it up.",
          ]}
          whoShouldSkip={[
            "Repairs with wet, mold-contaminated, or structurally damaged drywall — find the source first, then repair.",
            "Anyone who needs a perfect, inspector-grade finish on a high-visibility wall — hire a professional finisher.",
          ]}
          commonMistakes={[
            "Applying one thick coat instead of two thin ones — thick coats crack as they dry.",
            "Skipping primer before painting — the patch flashes (shines or flattens differently than surroundings).",
            "Using mesh tape for large patch seams — mesh cracks over large spans; use paper tape for seams over 6 inches.",
            "Not feathering the compound edges — abrupt edges show under paint. Feather out 6–8 inches from the patch edge.",
          ]}
          safety={
            <>
              Before cutting into any wall to access damage, know what&apos;s
              behind it.{" "}
              <strong>Turn off circuits</strong> in the area and use a stud
              finder with AC detection before cutting. If the drywall is wet or
              shows black spotting, that&apos;s mold — wear a respirator,
              remove all affected material, and find the water source before
              patching.{" "}
              <Link href="/advice/drywall-damage-after-a-leak">
                Drywall damage after a water leak
              </Link>{" "}
              covers the full sequence.
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
              <Link href="/costs/drywall-repair" className="no-underline text-navy-700 hover:text-navy-900">
                Drywall repair cost: what a pro charges
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/diy-or-hire/repair-drywall" className="no-underline text-navy-700 hover:text-navy-900">
                Should I repair my own drywall?
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/advice/drywall-damage-after-a-leak" className="no-underline text-navy-700 hover:text-navy-900">
                Drywall damage after a water leak
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/tools/best-stud-finders-for-homeowners" className="no-underline text-navy-700 hover:text-navy-900">
                Best stud finders for homeowners
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
