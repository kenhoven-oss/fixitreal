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
    name: "Magnetic stud finder (Studpop or CH Hanson)",
    badge: "Best for Most Homeowners",
    category: "Magnetic",
    bestFor: "Standard drywall over wood studs — hanging shelves, TVs, mirrors, curtain rods.",
    whyItMadeTheList:
      "Magnetic stud finders detect the drywall screws that anchor drywall to studs — fast, accurate, and no calibration required. No batteries, no false positives, no learning curve. The Studpop and CH Hanson hold to the wall magnetically so both hands stay free for marking. For wood-framed walls with standard drywall, this is the right tool 90% of the time.",
    keyBuyingNotes:
      "Works by finding the metal fasteners, not the stud itself — so it marks the edge of the stud (where screws are), not the center. Studs are typically 1.5 inches wide; mark both edges and split the difference. Less effective on plaster-over-lath walls (older homes) where there are no drywall screws.",
    avoidIf: "Your home has plaster-over-lath walls, or walls with metal studs (commercial construction).",
    typicalUse: "Hanging anything heavy enough to need a stud: shelves, TVs, towel bars, curtain rods.",
    skillLevel: "Beginner.",
    riskLevel: "Low.",
    verdict: "The right tool for standard modern drywall. Simpler and more reliable than electronic options.",
    affiliateUrl: "https://www.amazon.com/s?k=magnetic+stud+finder+studpop&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Franklin Sensors ProSensor 710+",
    badge: "Best Electronic",
    category: "Multi-sensor electronic",
    bestFor: "Plaster walls, thick drywall, or walls where magnetic method isn't finding anything.",
    whyItMadeTheList:
      "Multi-sensor electronic finders (Franklin's ProSensor line especially) are significantly more accurate than single-probe electronic finders. They show stud width across multiple sensors simultaneously — you see the whole stud, not just one edge. Where magnetic finders fail (plaster, tile backer, thick walls), a quality multi-sensor electronic fills the gap.",
    keyBuyingNotes:
      "Keep the tool flat against the wall and move slowly. Calibration happens automatically when you hold it against the wall before scanning. Avoid scanning near outlets, pipes, or the floor — electrical wiring and plumbing produce false positives.",
    avoidIf: "You have standard drywall over wood studs — the magnetic method is faster and equally accurate.",
    typicalUse: "Plaster-over-lath homes, thick 5/8-inch drywall, tile-backed walls.",
    skillLevel: "Beginner — though accuracy requires a slow, steady scan.",
    riskLevel: "Low.",
    verdict: "Best electronic option by a margin. Multiple sensors mean you see the stud, not guess at it.",
    affiliateUrl: "https://www.amazon.com/s?k=franklin+sensors+prosensor+710&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
  {
    name: "Zircon MultiScanner i520",
    badge: "Best for Electrical Detection",
    category: "Electronic with AC wire detection",
    bestFor: "Anyone who wants to know where live wires are before drilling, not just where studs are.",
    whyItMadeTheList:
      "The i520 adds live AC wire detection alongside stud finding. Before drilling into a wall where electrical routing is uncertain, knowing whether a live circuit runs through that stud bay is worth having. The AC detection isn't a substitute for a voltage tester, but it's an extra warning layer when the wiring layout isn't obvious from the panel.",
    keyBuyingNotes:
      "AC detection identifies energized wires through drywall — useful near outlets, switches, and junction boxes. Not a substitute for turning the circuit off before any actual drilling near electrical. Single-probe design means less accuracy than the Franklin multi-sensor for stud-center identification.",
    avoidIf: "You only need stud location and don't care about wire detection — the magnetic method is cheaper and simpler.",
    typicalUse: "TV mounting, shelf installation in kitchens and bathrooms where wiring routing is unclear.",
    skillLevel: "Beginner.",
    riskLevel: "Low — but always turn off circuits before drilling near electrical regardless of detector reading.",
    verdict: "Good choice when wire-path confidence matters. Accept a slight accuracy trade-off vs. the Franklin.",
    affiliateUrl: "https://www.amazon.com/s?k=zircon+multiscanner+i520+stud+finder&tag=fixitreal-20",
    buttonText: "Check price on Amazon",
  },
];

const path = "/tools/best-stud-finders-for-homeowners";
const pageTitle = "Best stud finders for homeowners";
const pageDescription =
  "A magnetic stud finder beats most electronic options for standard drywall. Here's which type to use, why most homeowners overcomplicate this, and our top picks.";
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
    question: "Why don't cheap electronic stud finders work?",
    answer:
      "Budget single-probe electronic finders measure density changes in the wall. They're highly sensitive to the exact pressure you apply, the moisture content of the drywall, and whether they're calibrated over a stud or a gap. The result: inconsistent readings that require three passes from opposite directions and a lot of guessing. Magnetic finders and quality multi-sensor electronic finders solve this by detecting either metal fasteners directly (magnetic) or using enough sensors to show the full stud profile (Franklin ProSensor).",
  },
  {
    question: "How do I find a stud without a stud finder?",
    answer:
      "Measure 16 inches from a corner — most framing is 16-inch on-center. Then knock along the wall: hollow sounds between studs, solid or higher-pitched near a stud. Drive a small finish nail at an angle near the baseboard to confirm — if it hits solid wood, you're in a stud. Use a strong rare-earth magnet as a free magnetic stud finder by feeling for the drag where drywall screws are.",
  },
  {
    question: "Are studs always 16 inches apart?",
    answer:
      "In most residential framing, yes — 16-inch on-center (OC) is the standard. Exterior walls sometimes use 24-inch OC spacing. Older homes (pre-1950s) may have irregular spacing. Once you find one stud, measure 16 inches in each direction to find the next — then verify with a nail or magnet before drilling.",
  },
  {
    question: "How do I find studs behind tile?",
    answer:
      "Electronic stud finders often work through ceramic tile — hold firmly and scan slowly. Magnetic finders don't work well on tile because the tile screws aren't metal drywall screws. The most reliable method on tiled walls: find the studs on an adjacent untiled section of the same wall, then measure over.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: pageTitle, href: path },
];

export default function BestStudFindersPage() {
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
          <span>4 min read</span>
        </p>

        <AmazonDisclosure products={products} />

        <div className="mt-6 space-y-4 text-ink-800 leading-relaxed">
          <p>
            Most homeowners overcomplicate this. For a standard home built
            after 1980 with 1/2-inch drywall over wood studs, a $10–$15
            magnetic stud finder is faster and more accurate than a $30
            electronic one. Electronic finders earn their place in older
            plaster homes and thick-wall situations.
          </p>
          <p>
            Below: what actually works for each wall type, and three picks
            that cover every common scenario.
          </p>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-navy-900">
          Which type for your wall
        </h2>
        <div className="mt-3 space-y-4 text-ink-700 leading-relaxed">
          <p>
            <strong className="text-navy-900">Standard drywall (post-1980 home):</strong>{" "}
            Magnetic. Detects the drywall screws, no calibration, no false
            positives, faster than electronic.
          </p>
          <p>
            <strong className="text-navy-900">Plaster-over-lath (pre-1960 home):</strong>{" "}
            Multi-sensor electronic (Franklin ProSensor). Plaster has no
            drywall screws for magnets to find.
          </p>
          <p>
            <strong className="text-navy-900">Uncertain electrical routing:</strong>{" "}
            Electronic with AC detection (Zircon i520). Adds a warning layer
            before you drill near live circuits.
          </p>
        </div>

        <RecommendedProductsSection
          heading="Our picks"
          intro={
            <p>
              Three options that cover every residential wall type. Start with
              the magnetic finder for any home built after 1980 — it&apos;s
              genuinely the better tool for standard drywall.
            </p>
          }
          products={products}
        />

        <BuyingGuideSections
          whoShouldBuy={[
            "Anyone hanging anything heavy enough to need a stud: TVs, floating shelves, mirrors, curtain rods, grab bars.",
            "Homeowners who've been burned by cheap single-probe electronic finders and want something that actually works.",
            "Anyone doing their own drywall repair who needs to locate framing edges.",
          ]}
          whoShouldSkip={[
            "Anyone hanging something light enough for drywall anchors (under 20 lbs, single item) — skip the stud.",
            "Professional contractors who already have preferred tools.",
          ]}
          commonMistakes={[
            "Trusting a single-probe budget electronic finder — inconsistent and leads to extra holes in the wall.",
            "Confusing the stud edge (where the screw is) with the stud center — drive your screw into the center.",
            "Drilling without confirming — always verify with a small finish nail before the real screw.",
            "Not accounting for 24-inch spacing on exterior walls — not all framing is 16-inch OC.",
          ]}
          safety={
            <>
              Before drilling into any wall,{" "}
              <strong>know what&apos;s behind it.</strong> Electrical,
              plumbing, and gas lines run through wall cavities. In kitchens,
              bathrooms, and near any outlet or switch: use a stud finder
              with AC detection, turn off the circuit, and drill slowly —
              stop if you feel resistance before hitting wood. When in doubt,{" "}
              <Link href="/tools/best-voltage-testers-for-homeowners">
                test with a voltage tester
              </Link>{" "}
              before putting tools in the wall.
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
              <Link href="/tools/best-voltage-testers-for-homeowners" className="no-underline text-navy-700 hover:text-navy-900">
                Best voltage testers for homeowners
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/tools/best-drywall-repair-kits" className="no-underline text-navy-700 hover:text-navy-900">
                Best drywall repair kits
              </Link>
            </li>
            <li>
              →{" "}
              <Link href="/costs/drywall-repair" className="no-underline text-navy-700 hover:text-navy-900">
                Drywall repair cost
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
