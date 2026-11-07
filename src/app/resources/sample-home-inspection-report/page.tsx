import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/jsonld";
import { kenHoven } from "@/content/authors/ken-hoven";

const PUBLISHED = "2026-11-07";
const UPDATED = "2026-11-07";

export const metadata = buildMetadata({
  title:
    "Sample Home Inspection Report: Full Walkthrough with Annotated Deficiencies",
  description:
    "A real, anonymized 56-page home inspection report — plus a plain-English walkthrough of every one of its 38 flagged deficiencies, with repair costs and DIY-or-hire verdicts.",
  path: "/resources/sample-home-inspection-report",
  type: "article",
  publishedAt: PUBLISHED,
  updatedAt: UPDATED,
  authorName: kenHoven.name,
  section: "Resources",
});

type Deficiency = {
  n: number;
  title: string;
  finding: string;
  plain: string;
  cost: string;
  verdict: "DIY" | "DIY or hire" | "Hire a pro" | "Pro — safety";
  link?: { href: string; label: string };
};

type ReportSection = {
  id: string;
  name: string;
  items: Deficiency[];
};

const REPORT: ReportSection[] = [
  {
    id: "exterior",
    name: "Exterior",
    items: [
      {
        n: 1,
        title: "Sunken driveway at the addition",
        finding:
          "Driveway has a sunken area at the connection point for the addition. This is a safety concern. Recommend further inspection, evaluation, and repairs be completed by a licensed contractor.",
        plain:
          "The concrete slab has settled where the original driveway meets a newer addition. It creates a trip edge at an entrance and a water-drainage pocket.",
        cost: "$300–$1,200 for mud-jacking / polyurethane slab lift; $2,000–$6,000+ for replacement if the sub-base has failed.",
        verdict: "Hire a pro",
      },
      {
        n: 2,
        title: "Rotted garage side-door jamb",
        finding:
          "Side door entering the east side of the garage shows signs of deferred maintenance. Lower left side of jam has damaged/missing wood and also areas of missing paint is visible.",
        plain:
          "Cheap, obvious deferred maintenance — a bottom-of-jamb rot spot and peeling paint. The kind of item that reads to a buyer as general neglect.",
        cost: "$50–$150 DIY in materials; $250–$600 for a handyman visit.",
        verdict: "DIY",
      },
      {
        n: 3,
        title: "Cracked brick veneer at crawl-space corner",
        finding:
          "Cracking is present in the brick veneer skirt located on the back south east corner of the residence. Unable to determine the cause of cracking at this level of inspection.",
        plain:
          "A vertical crack through the brick skin at a crawl-space vent. Usually cosmetic settlement, occasionally a foundation signal — read the pattern before assuming either.",
        cost: "$15 DIY caulk seal to $5,000+ mason repair; foundation work if indicated runs $3,000–$15,000+.",
        verdict: "DIY or hire",
        link: {
          href: "/advice/cracked-brick-veneer",
          label: "Full guide: cracked brick veneer",
        },
      },
      {
        n: 4,
        title: "Improperly attached vinyl siding (top section)",
        finding:
          "Top section of vinyl siding located on the back south east corner of the residence is improperly attached. This can allow water to enter the wall area.",
        plain:
          "A section of vinyl siding is not locked into its course. Water can wick behind and rot the sheathing over time.",
        cost: "Under $50 DIY if you have a zip tool; $150–$400 for a siding contractor.",
        verdict: "DIY or hire",
      },
      {
        n: 5,
        title: "Loose/cracked vinyl siding sections",
        finding:
          "Several sections of vinyl siding are loose/improperly installed, located on the back south corner of the residence. Also a section of vinyl siding in that area has several cracks present.",
        plain:
          "Multiple panels loose or cracked. Cracked panels need replacement, not just reseating — UV damage weakens vinyl permanently.",
        cost: "$8–$15 per replacement panel plus labor; $200–$600 total for a siding contractor visit.",
        verdict: "Hire a pro",
      },
      {
        n: 6,
        title: "Condensation drain line exits uphill",
        finding:
          "Condensation drain line located on the back south side of the residence has an excessively long drain pipe attached. This drain line is exiting uphill. This makes it impossible for the device to drain properly.",
        plain:
          "Someone extended the HVAC condensate line past a vertical rise. The line can't drain, so the catch pan fills and either overflows or triggers a safety shut-off.",
        cost: "$150–$350 for an HVAC service call to re-route the line properly.",
        verdict: "Hire a pro",
      },
    ],
  },
  {
    id: "roofing",
    name: "Roofing",
    items: [
      {
        n: 7,
        title: "Missing kick-out flashing (roof-wall intersections)",
        finding:
          "No kick out flashing is installed on the lower front roof section and the back side of the garage roof. This can provide water direct access into the wall area.",
        plain:
          "At two spots where the roof terminates against a wall, the small diverter piece that keeps water out of the wall cavity is missing. Classic hidden-water-damage item.",
        cost: "$150–$400 per kick-out retrofit; add $500–$3,000+ if wall sheathing is already rotted.",
        verdict: "Hire a pro",
        link: {
          href: "/advice/missing-kick-out-flashing",
          label: "Full guide: missing kick-out flashing",
        },
      },
      {
        n: 8,
        title: "Shingle granule loss",
        finding:
          "Large amount of granular covering are missing from the roof shingles. This granular covering is the protection for the inner fiberglass membrane of the shingle.",
        plain:
          "The shingles are visibly worn. Granule loss accelerates UV damage and signals the roof is in the last third of its life.",
        cost:
          "No immediate repair; roof replacement budget $8,000–$25,000+ depending on size and material.",
        verdict: "Hire a pro",
      },
      {
        n: 9,
        title: "Exposed fasteners at vent flashings and attic box vents",
        finding:
          "Both plumbing vent flange and all attic box vents have exposed fasteners and several are damaged. Recommend further inspection, evaluation, and repairs be completed by a licensed contractor.",
        plain:
          "Nails or screws exposed to weather. Each is a small leak path. Cheap to seal.",
        cost: "$20 of roof sealant and ten minutes per fastener; $150 for a roofer's visit.",
        verdict: "DIY or hire",
      },
      {
        n: 10,
        title: "Damaged ridge caps with exposed fasteners",
        finding:
          "Both final ridge caps have exposed fasteners. Also, several ridge caps have damaged areas present.",
        plain:
          "Ridge caps are the last line against wind-driven rain at the peak. Damaged ones leak.",
        cost: "$200–$600 for a roofer to reset or replace ridge caps.",
        verdict: "Hire a pro",
      },
      {
        n: 11,
        title: "Gutter clogged with fungal/moss growth",
        finding:
          "Front lower section of the residence roof gutter material has large amounts of fungal growth present. This prevents the gutter from draining properly and can cause water to back up into the roof system.",
        plain:
          "Gutters have moss growing in them. Clogged gutters overflow and push water behind fascia and under the roof edge.",
        cost: "$150–$300 for a gutter cleaning visit.",
        verdict: "DIY or hire",
        link: { href: "/costs/gutter-cleaning-cost", label: "Gutter cleaning cost" },
      },
    ],
  },
  {
    id: "structure",
    name: "Structure / Crawl Space",
    items: [
      {
        n: 12,
        title: "High moisture content in subfloor",
        finding:
          "Moisture content of the subfloor is high. This greatly affects the life expectancy of the subfloor system.",
        plain:
          "Wet subfloor framing. Drives rot, mold, and insulation failure. A real item, not a cosmetic one.",
        cost:
          "$500–$3,000+ for crawl-space remediation (vapor barrier, dehumidifier, ventilation fixes); more if wood is already compromised.",
        verdict: "Pro — safety",
      },
      {
        n: 13,
        title: "Mildew/fungal growth on subfloor",
        finding:
          "A mildew/fungal type growth is visible in some areas on the subfloor system.",
        plain:
          "Visible growth on the framing underside. Related to item 12 — the moisture caused it.",
        cost: "$400–$2,000 for mold treatment plus the moisture fix driving it.",
        verdict: "Pro — safety",
      },
      {
        n: 14,
        title: "Displaced subfloor insulation",
        finding:
          "Many sections of insulation are out of place in the subfloor area. This greatly affects the insulation integrity of the subfloor.",
        plain:
          "Insulation batts drooping out of the floor joist bays. Energy loss, condensation risk.",
        cost: "$200–$600 for a handyman to re-seat and secure batts.",
        verdict: "DIY or hire",
      },
      {
        n: 15,
        title: "Incomplete crawl-space vapor barrier",
        finding:
          "Vapor barrier does not cover 100% of the crawlspace floor. This can allow moisture to enter the subfloor area.",
        plain:
          "Gaps in the ground sheeting let soil moisture evaporate up into the floor system. Adds to the moisture problem.",
        cost: "$200–$800 for a proper 6-mil plastic install, DIY or pro.",
        verdict: "DIY or hire",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    items: [
      {
        n: 16,
        title: "Tankless water heater powered by extension cord",
        finding:
          "A drop cord is providing power to the unit. This drop cord is not rated for exterior weather exposure.",
        plain:
          "An extension cord is powering an exterior tankless water heater. Fire and shock hazard. Permanent wiring required.",
        cost: "$200–$500 for an electrician to install a weatherproof dedicated circuit.",
        verdict: "Pro — safety",
      },
      {
        n: 17,
        title: "AFCI breaker won't test",
        finding:
          "Circuit breaker 17 labeled nook is a AFCI type breaker. This breaker does not test by normal means. This is a safety hazard.",
        plain:
          "An arc-fault breaker protecting a living-area circuit fails its self-test. Must be replaced.",
        cost: "$150–$350 for an electrician to replace the breaker.",
        verdict: "Pro — safety",
      },
      {
        n: 18,
        title: "Three outlets reading 'open hot'",
        finding:
          "Three receptacles located in the dinning room area indicate open 'Hot'. This is a faulty indication.",
        plain:
          "Multiple outlets on one circuit testing a fault. Usually a loose connection at the first outlet in the chain, affecting everything downstream. Fire risk.",
        cost: "$150–$350 for an electrician service call.",
        verdict: "Pro — safety",
        link: { href: "/advice/open-hot-outlet", label: "Full guide: open hot outlet" },
      },
      {
        n: 19,
        title: "Hall bath vent fan doesn't operate",
        finding:
          "Hall bathroom vent fan does not operate by normal means.",
        plain:
          "Switch is wired and present, fan is dead. Either a bad fan motor or a wiring/switch issue.",
        cost: "$150–$450 for replacement including labor.",
        verdict: "Hire a pro",
      },
    ],
  },
  {
    id: "cooling",
    name: "Cooling / HVAC",
    items: [
      {
        n: 21,
        title: "Rosebush growing into HVAC compressor",
        finding:
          "HVAC compressor located on the west side of the residence has a large rosebush growing directly beside it. This can greatly affect the operating efficiency of the unit.",
        plain:
          "Plants restricting airflow to the condenser coils. Reduces capacity and shortens compressor life.",
        cost: "$0–$100 DIY (prune or remove the bush).",
        verdict: "DIY",
      },
      {
        n: 22,
        title: "Grass and debris blocking HVAC coils",
        finding:
          "HVAC compressor located on the west side of the residence has a large amount of grass and debris blocking the cooling coils.",
        plain:
          "Same compressor with clogged fins. Needs coil cleaning and clearance.",
        cost: "$0 DIY to rinse; $100–$250 for an HVAC coil cleaning.",
        verdict: "DIY or hire",
      },
      {
        n: 24,
        title: "Dead foliage covering mini-split condenser",
        finding:
          "Mitsubishi Minisplit located on the east side of the residence, has large foliage growing in direct contact with the unit. This greatly affects the operating efficiency of the system and makes it difficult to inspect.",
        plain:
          "A mini-split buried in dried corn stalks or similar. Clear it.",
        cost: "Free — DIY, five minutes.",
        verdict: "DIY",
      },
      {
        n: 25,
        title: "Mini-split head won't operate",
        finding:
          "Unable to operate the Minisplit system located in the finished room above the garage by normal means.",
        plain:
          "Indoor head in the bonus room is non-functional. Could be a remote/battery issue, a disconnect, or a dead unit.",
        cost: "$150–$500 for an HVAC diagnostic; replacement if needed runs $2,500–$5,000+.",
        verdict: "Hire a pro",
      },
      {
        n: 27,
        title: "Corroded air-handler overflow pan",
        finding:
          "HVAC air handler overflow catch pan located below the air handler in the attic area is severely corroded. This catch pan is the last line of defense. Should the air handler start to leak.",
        plain:
          "The emergency overflow pan under the attic air handler is rusted through. When the primary drain plugs, the backup won't work either — direct path to a ceiling leak.",
        cost: "$150–$400 for pan replacement plus HVAC service call.",
        verdict: "Hire a pro",
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    items: [
      {
        n: 28,
        title: "Tankless water heater access door won't seal",
        finding:
          "Resident water heater located on the back north east side of the residence has an improper fastener securing the access door to the unit. Also, the door does not seal properly.",
        plain:
          "Access panel on exterior tankless unit uses the wrong screw and doesn't seat. Water intrusion and pest entry.",
        cost: "$5–$20 for the proper fastener; $150–$300 if a plumber replaces it.",
        verdict: "DIY",
      },
      {
        n: 29,
        title: "Blocked water-heater service access",
        finding:
          "Unable to access the service area for the water heater located on the back south west corner of the residence due to material being installed in that area. This material appears to have melted together.",
        plain:
          "Melted / fused material blocking service access to a second water heater. Unusual — needs plumber evaluation.",
        cost: "$200–$600 for a plumber diagnostic; repair depends on what they find.",
        verdict: "Hire a pro",
      },
      {
        n: 31,
        title: "Garden hose corroded to frost-proof faucet",
        finding:
          "Frostproof faucet located on the back south side of the residence has a garden hose that is corroded in place.",
        plain:
          "Hose left attached over winters is now seized. Classic small deferred-maintenance item.",
        cost: "$10–$50 DIY (penetrating oil, replace the faucet bib if needed).",
        verdict: "DIY",
      },
      {
        n: 32,
        title: "Kitchen sink drain trap leaking",
        finding:
          "Left kitchen sink drain trap assembly shows signs of leaking. Unable to determine if a leak is present at this time.",
        plain:
          "Visible water staining or corrosion at the P-trap. Could be an active slow leak or a resolved past one.",
        cost: "$10–$20 DIY trap replacement; $150–$300 for a plumber.",
        verdict: "DIY or hire",
        link: {
          href: "/advice/sink-drain-leaking-under-kitchen-sink",
          label: "Advice: leaking kitchen sink drain",
        },
      },
      {
        n: 33,
        title: "Primary bath sink stopper broken",
        finding:
          "Primary bedroom, en suite left vanity sink drain stopper does not operate by normal means.",
        plain:
          "Pop-up stopper mechanism is broken or disconnected. Cheap part, easy fix.",
        cost: "$10–$25 DIY; $100–$200 for a plumber.",
        verdict: "DIY",
      },
      {
        n: 34,
        title: "Primary bath tub stopper missing",
        finding:
          "Primary bedroom en suite tub/shower drain assembly missing stopper. This prevents the homeowner from being able to hold water in the tub assembly.",
        plain:
          "Tub drain won't hold water. Universal replacement stoppers are at any hardware store.",
        cost: "$10–$30 DIY.",
        verdict: "DIY",
      },
    ],
  },
  {
    id: "interior",
    name: "Interior",
    items: [
      {
        n: 35,
        title: "Window screens torn",
        finding:
          "Window screen located on the back south corner of the residence has several holes in the assembly. This prevents the homeowner from raising their window without allowing unwanted pests to enter the area.",
        plain:
          "Standard screen replacement. Torn screens let bugs in but are not a structural item.",
        cost: "$10–$25 DIY per screen; $20–$40 at a hardware-store re-screening counter.",
        verdict: "DIY",
      },
      {
        n: 36,
        title: "Finished room above garage not inspected",
        finding:
          "Unable to inspect the finished room above the garage due to large amounts of the owners personal effects being stored in the area.",
        plain:
          "Not a defect — an access limitation. A seller who clears the space before the inspection removes this entire item from the report.",
        cost: "Free.",
        verdict: "DIY",
      },
      {
        n: 38,
        title: "Crack from closet door frame",
        finding:
          "A crack is radiating from the upper left corner closet door of the first bedroom, located on the right side of the hall. Unable to determine the cause of cracking at this level of inspection.",
        plain:
          "Drywall crack from a door opening — usually settlement or seasonal movement. Rarely structural on its own, but worth watching with other settlement signs.",
        cost: "$10 DIY drywall patch + paint; $150–$400 for a drywall contractor.",
        verdict: "DIY or hire",
      },
    ],
  },
];

const FAQ = [
  {
    question: "Can I share this inspection report publicly?",
    answer:
      "Yes. This copy has been anonymized — all owner, address, inspector, and company identifiers have been removed. It is published as an educational sample for buyers, sellers, and new inspectors who want to see what a real residential inspection report looks like in practice.",
  },
  {
    question: "Is this a typical home inspection report?",
    answer:
      "Yes, in length and structure. 56 pages and 38 flagged items is common for an occupied single-family home in average condition. A newer home might flag 10-15 items; a neglected older home routinely runs 50+. The sections — Exterior, Garage, Roofing, Structure, Electrical, Heating, Cooling, Plumbing, Appliances, Interior — follow the InterNACHI and ASHI standards of practice.",
  },
  {
    question: "What software produced this report?",
    answer:
      "Most modern home inspectors use one of a handful of mobile reporting apps (HomeGauge, Spectora, Horizon, iPad-based tools). This report uses a common layout: a summary section, photos inline, and findings tagged as either Information or Deficiency.",
  },
  {
    question: "How many of these items would stop a sale?",
    answer:
      "In this sample, roughly 5-7 items are the kind buyers and lenders will press on: non-functioning AFCI breaker, the extension-cord-powered water heater, the crawl-space moisture and mildew, missing kick-out flashings, and multiple outlets reading an electrical fault. The other ~30 items are a mix of negotiation leverage and informational noise.",
  },
];

export default function SampleHomeInspectionReportPage() {
  const totalItems = REPORT.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources/sample-home-inspection-report" },
            {
              name: "Sample inspection report",
              href: "/resources/sample-home-inspection-report",
            },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Resource · FixItReal
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Sample Home Inspection Report: Full Walkthrough with Annotated Deficiencies
          </h1>
          <p className="article-lede mt-6 text-lg text-ink-700 leading-relaxed">
            A real, anonymized 56-page residential inspection report — plus a
            plain-English walkthrough of all {totalItems} flagged deficiencies.
            For each finding: the inspector&apos;s verbatim note, what it
            actually means, typical repair costs, and whether it&apos;s a DIY
            or a pro job.
          </p>
          <p className="mt-4 text-sm text-ink-600 italic">
            Shared as an educational sample. All identifying information for
            the home, owner, inspector and inspection company has been removed.
          </p>
        </div>
      </Section>

      <Section padding="sm" size="lg">
        <div className="rounded-md border border-ink-200 bg-paper-50 p-5 max-w-3xl">
          <h2 className="font-serif text-xl text-navy-900">How to use this page</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-ink-700">
            <li>
              <strong>Buyers:</strong> read the inspector&apos;s finding, then
              the plain-English translation, then decide whether to request a
              repair, a credit, or let it go. Our{" "}
              <Link
                href="/advice/home-inspection-what-must-be-fixed"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                triage guide
              </Link>{" "}
              covers the full framework.
            </li>
            <li>
              <strong>Sellers:</strong> use it as a pre-listing walkthrough.
              At least half the items in this report could have been fixed in
              one weekend. See the{" "}
              <Link
                href="/advice/pre-inspection-checklist-for-sellers"
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
              >
                seller pre-inspection checklist
              </Link>
              .
            </li>
            <li>
              <strong>New inspectors:</strong> see a modern report&apos;s
              structure, deficiency wording, and what gets flagged in average
              US residential stock.
            </li>
          </ul>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">The full report</h2>
        <p className="mt-2 text-ink-700">
          Embedded below. Also{" "}
          <a
            href="/sample-home-inspection-report.pdf"
            className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
          >
            downloadable as a PDF
          </a>
          .
        </p>
        <div className="mt-4 overflow-hidden rounded-md border border-ink-200 bg-ink-50">
          <object
            data="/sample-home-inspection-report.pdf"
            type="application/pdf"
            className="h-[75vh] w-full"
            aria-label="Sample Home Inspection Report PDF (anonymized)"
          >
            <iframe
              src="/sample-home-inspection-report.pdf"
              title="Sample Home Inspection Report PDF (anonymized)"
              className="h-[75vh] w-full"
            />
            <p className="p-4 text-ink-700">
              Your browser cannot display the embedded PDF.{" "}
              <a
                href="/sample-home-inspection-report.pdf"
                className="text-navy-700 underline"
              >
                Download it here
              </a>
              .
            </p>
          </object>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          Walkthrough: every deficiency, in plain English
        </h2>
        <p className="mt-2 text-ink-700">
          Grouped by inspection section. Comment numbers match the PDF.
          Verdicts and cost ranges are FixItReal&apos;s own.
        </p>

        <nav className="mt-6 flex flex-wrap gap-2 text-sm">
          {REPORT.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="no-underline rounded-full border border-ink-300 px-3 py-1 text-navy-800 hover:bg-navy-900 hover:text-paper-50"
            >
              {s.name}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-10">
          {REPORT.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h3 className="font-serif text-xl text-navy-900 border-b border-ink-200 pb-2">
                {section.name}
              </h3>
              <div className="mt-4 space-y-6">
                {section.items.map((d) => (
                  <article
                    key={d.n}
                    className="rounded-md border border-ink-200 bg-paper-50 p-5"
                  >
                    <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                        Comment {d.n}
                      </span>
                      <h4 className="font-serif text-lg text-navy-900">
                        {d.title}
                      </h4>
                      <span className="ml-auto text-xs uppercase tracking-wider text-ink-600 border border-ink-300 px-2 py-0.5 rounded">
                        {d.verdict}
                      </span>
                    </header>
                    <blockquote className="mt-3 border-l-2 border-amber-500 pl-4 text-ink-700 italic">
                      &ldquo;{d.finding}&rdquo;
                    </blockquote>
                    <p className="mt-3 text-ink-800">
                      <strong>Plain English:</strong> {d.plain}
                    </p>
                    <p className="mt-2 text-ink-800">
                      <strong>Typical cost:</strong> {d.cost}
                    </p>
                    {d.link && (
                      <p className="mt-2">
                        <Link
                          href={d.link.href}
                          className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
                        >
                          {d.link.label} →
                        </Link>
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          Related reading
        </h2>
        <ul className="mt-4 space-y-3 text-ink-700">
          <li>
            <Link
              href="/advice/home-inspection-what-must-be-fixed"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              What must be fixed after a home inspection? A triage guide
            </Link>{" "}
            — how to sort any report into safety, negotiate, and noise.
          </li>
          <li>
            <Link
              href="/advice/pre-inspection-checklist-for-sellers"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              Pre-inspection checklist for sellers
            </Link>{" "}
            — the weekend before you list.
          </li>
          <li>
            <Link
              href="/advice/cracked-brick-veneer"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              Cracked brick veneer: cosmetic, settling, or structural?
            </Link>
          </li>
          <li>
            <Link
              href="/advice/missing-kick-out-flashing"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              Missing kick-out flashing: why inspectors flag it
            </Link>
          </li>
          <li>
            <Link
              href="/advice/open-hot-outlet"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              Open hot outlet on a home inspection
            </Link>
          </li>
          <li>
            <Link
              href="/home-inspection-repairs"
              className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
            >
              Home inspection repairs — pillar hub
            </Link>
          </li>
        </ul>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          Common questions about this sample report
        </h2>
        <dl className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
          {FAQ.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-medium text-navy-900">{item.question}</dt>
              <dd className="mt-2 text-ink-700 leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources/sample-home-inspection-report" },
            {
              name: "Sample inspection report",
              href: "/resources/sample-home-inspection-report",
            },
          ]),
          articleSchema({
            headline:
              "Sample Home Inspection Report: Full Walkthrough with Annotated Deficiencies",
            description:
              "A real, anonymized 56-page home inspection report with a plain-English walkthrough of every one of its 38 flagged deficiencies.",
            url: "/resources/sample-home-inspection-report",
            datePublished: PUBLISHED,
            dateModified: UPDATED,
            authorName: kenHoven.name,
            authorUrl: kenHoven.url,
            authorJobTitle: kenHoven.role,
            authorDescription: kenHoven.shortBio,
            articleSection: "Home Inspection",
          }),
          faqSchema(FAQ),
        ])}
      />
    </>
  );
}
