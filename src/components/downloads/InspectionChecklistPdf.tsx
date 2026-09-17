import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

/**
 * Home Inspection Repair Negotiation Checklist — free PDF.
 *
 * WHY THIS EXISTS
 * ---------------
 * Three inspection articles carried a <ChecklistCTA> promising this exact
 * document and linking to nothing — the component was a placeholder that
 * was never wired up. A CTA that promises a checklist and delivers a dead
 * box is worse than no CTA. This makes the promise true.
 *
 * SOURCING RULE
 * -------------
 * Every list, threshold and table here is lifted from the published
 * articles under /home-inspection-repairs — nothing is invented for the
 * PDF. If an article changes, change this to match:
 *   - which-inspection-repairs-sellers-must-fix  (required / borderline / must-not-refuse)
 *   - buyer-repair-request-response              (four-bucket triage, written response)
 *   - repair-credit-vs-fix-before-closing        (credit sizing, concession caps)
 *   - seller-refuse-repair-requests              (the four response options)
 *
 * Styling mirrors CalendarPdf so the two downloads read as one set.
 */

const NAVY = "#182D4A";
const AMBER = "#D4A038";
const INK_800 = "#2c2b26";
const INK_600 = "#595751";
const INK_500 = "#78766f";
const INK_300 = "#d1d0ca";
const INK_100 = "#f4f4f2";

const s = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 9, color: INK_800, padding: 36, lineHeight: 1.38 },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 14 },
  brandDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: AMBER },
  brand: { fontSize: 9, letterSpacing: 2.5, fontWeight: 700, color: NAVY },
  brandRight: { marginLeft: "auto", fontSize: 8, color: INK_500 },
  title: { fontSize: 24, fontWeight: 700, color: NAVY, lineHeight: 1.1 },
  subtitle: { fontSize: 10.5, color: INK_600, marginTop: 6, lineHeight: 1.4 },
  accent: { width: 40, height: 3, backgroundColor: AMBER, marginTop: 10, marginBottom: 8 },
  h2: { fontSize: 13, fontWeight: 700, color: NAVY, marginTop: 10, marginBottom: 4 },
  h3: { fontSize: 9.5, fontWeight: 700, color: NAVY, marginTop: 6, marginBottom: 3 },
  eyebrow: { fontSize: 7.5, letterSpacing: 1.8, fontWeight: 700, color: AMBER, marginBottom: 3 },
  p: { marginBottom: 5 },
  muted: { color: INK_600 },
  small: { fontSize: 8, color: INK_500, lineHeight: 1.35 },
  // checkbox rows
  row: { flexDirection: "row", alignItems: "flex-start", marginBottom: 2.5 },
  box: { width: 9, height: 9, borderWidth: 1, borderColor: INK_500, marginRight: 6, marginTop: 1.5 },
  rowText: { flex: 1 },
  // two-column bucket grid
  grid: { flexDirection: "row", gap: 10, marginTop: 4 },
  col: { flex: 1 },
  card: { borderWidth: 1, borderColor: INK_300, padding: 7, marginBottom: 6, borderRadius: 3 },
  cardAmber: { borderWidth: 1, borderColor: AMBER, backgroundColor: "#fdf8ec", padding: 7, marginBottom: 6, borderRadius: 3 },
  // tables
  table: { borderWidth: 1, borderColor: INK_300, marginTop: 4, marginBottom: 6 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: INK_300 },
  trLast: { flexDirection: "row" },
  th: { backgroundColor: INK_100, fontWeight: 700, fontSize: 8.5, padding: 5, color: NAVY },
  td: { padding: 5, fontSize: 8.5 },
  wsRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: INK_300, minHeight: 22 },
  wsCell: { padding: 4, borderRightWidth: 1, borderRightColor: INK_300, fontSize: 8 },
  footer: { position: "absolute", bottom: 24, left: 36, right: 36, flexDirection: "row", justifyContent: "space-between", fontSize: 7.5, color: INK_500, borderTopWidth: 1, borderTopColor: INK_300, paddingTop: 6 },
});

const Check = ({ children }: { children: string }) => (
  <View style={s.row}>
    <View style={s.box} />
    <Text style={s.rowText}>{children}</Text>
  </View>
);

/**
 * Static footer. The document is a fixed three pages, so the page number is
 * passed in rather than computed: react-pdf's `render` prop (the usual way
 * to get pageNumber) does not paint inside an absolutely-positioned fixed
 * element in this version, and a footer that silently vanishes is worse
 * than one that has to be updated by hand if a fourth page is ever added.
 */
const Footer = ({ n }: { n: number }) => (
  <View style={s.footer} fixed>
    <Text>FixItReal.com — Home Inspection Repair Negotiation Checklist</Text>
    <Text>General information, not legal advice. Contract and lender terms control. · Page {n} of 3</Text>
  </View>
);

const Brand = () => (
  <View style={s.brandRow}>
    <View style={s.brandDot} />
    <Text style={s.brand}>FIXITREAL</Text>
    <Text style={s.brandRight}>fixitreal.com/home-inspection-repairs</Text>
  </View>
);

export function InspectionChecklistPdf() {
  return (
    <Document
      title="Home Inspection Repair Negotiation Checklist"
      author="FixItReal"
      subject="Sort a buyer's repair request into four buckets, size a fair credit, and respond in writing."
    >
      {/* ---------------- Page 1: triage ---------------- */}
      <Page size="LETTER" style={s.page}>
        <Brand />
        <Text style={s.title}>Home Inspection Repair Negotiation Checklist</Text>
        <Text style={s.subtitle}>
          A typical inspection report has 30–80 line items. The repair request picks 5–15. Most are not
          legally required. This sheet sorts every item into one of four buckets, sizes a fair credit,
          and turns the result into a written response.
        </Text>
        <View style={s.accent} />

        <Text style={s.eyebrow}>STEP 1</Text>
        <Text style={s.h2}>Sort every line item into a bucket</Text>
        <Text style={[s.p, s.muted]}>
          Read the whole request first, then stop. Do not respond item by item as you read.
        </Text>

        <View style={s.grid}>
          <View style={s.col}>
            <View style={s.card}>
              <Text style={s.h3}>MUST DO — cannot refuse without killing the deal</Text>
              <Check>Anything the appraiser called out as a condition of value (FHA / VA / USDA especially)</Check>
              <Check>Active safety hazard: exposed live wiring, gas leak, missing handrail on a raised deck, structural</Check>
              <Check>Items that affect insurability (e.g. knob-and-tube wiring)</Check>
              <Check>Anything written into the signed purchase agreement</Check>
              <Check>State-mandated safety equipment at point of sale (smoke / CO alarms, straps — check your state)</Check>
              <Text style={[s.small, { marginTop: 4 }]}>
                Licensed pro does this work. Keep the invoice — it is the paper trail you want at closing.
              </Text>
            </View>
            <View style={s.card}>
              <Text style={s.h3}>WON&apos;T DO — refuse in writing, one sentence of reasoning each</Text>
              <Check>Cosmetic: paint, carpet, drywall scuffs, tile cracks, yellowed outlets</Check>
              <Check>Worn-but-working: old HVAC, old appliances — &quot;past useful life&quot; is not broken</Check>
              <Check>Grandfathered items: GFCI in a pre-1970s kitchen, older but functional panel</Check>
              <Check>&quot;Recommend further evaluation&quot; where the inspector saw nothing wrong</Check>
              <Check>Routine maintenance: tree trimming, gutter cleaning, insulation upgrades</Check>
              <Check>Anything already on the seller&apos;s disclosure, or conflicting with an as-is clause</Check>
            </View>
          </View>
          <View style={s.col}>
            <View style={s.card}>
              <Text style={s.h3}>CREDIT INSTEAD — not safety, not cheap, buyer will redo it anyway</Text>
              <Check>Re-glaze a tub — buyer picks color and product</Check>
              <Check>Replace a cracked vanity — buyer is remodeling the bathroom</Check>
              <Check>Replace deck boards — buyer wants composite, you would install pine</Check>
              <Check>Service the HVAC — buyer&apos;s own tech does it cleaner</Check>
              <Check>End-of-life-but-working water heater, older roof with no active leak</Check>
              <Text style={[s.small, { marginTop: 4 }]}>
                Cheaper than doing the work, no contractor juggling during a move, no walk-through workmanship dispute.
              </Text>
            </View>
            <View style={s.card}>
              <Text style={s.h3}>WILL DO — cheap goodwill, under an hour, under ~$50–$100</Text>
              <Check>Replace 1–3 missing smoke or CO detectors</Check>
              <Check>Re-caulk a tub or two</Check>
              <Check>Tighten a wobbly toilet</Check>
              <Check>Replace a torn window screen</Check>
              <Check>Clean a clogged dryer vent</Check>
              <Text style={[s.small, { marginTop: 4 }]}>
                Doing these voluntarily is what makes the buyer accept a &quot;won&apos;t do&quot; on bigger items.
              </Text>
            </View>
          </View>
        </View>

        <View style={s.cardAmber}>
          <Text style={s.h3}>MUST-NOT-REFUSE — not legally required, but refusing ends the deal or invites liability</Text>
          <View style={s.grid}>
            <View style={s.col}>
              <Check>Active water leaks, even small ones</Check>
              <Check>Gas leaks, small ones included</Check>
              <Check>Visible mold of any quantity — fix and disclose</Check>
            </View>
            <View style={s.col}>
              <Check>Exposed live wiring, or knob-and-tube touching insulation</Check>
              <Check>Anything the seller disclosed before the inspection</Check>
            </View>
          </View>
        </View>
        <Footer n={1} />
      </Page>

      {/* ---------------- Page 2: credit sizing ---------------- */}
      <Page size="LETTER" style={s.page}>
        <Brand />
        <Text style={s.eyebrow}>STEP 2</Text>
        <Text style={s.h2}>Size the credit</Text>
        <Text style={s.p}>
          A fair credit is the <Text style={{ fontWeight: 700 }}>buyer&apos;s</Text>{" "}contractor estimate plus a small
          contingency — not the seller&apos;s discount-contractor number. The buyer takes on the project-management
          risk and should be paid for it.
        </Text>
        <View style={s.card}>
          <Text style={s.h3}>The math</Text>
          <Check>Get one or two contractor quotes for the repair, from the buyer&apos;s side</Check>
          <Check>Add 10–20% for unknowns</Check>
          <Check>That total is the credit. If the seller cannot get comfortable with it, the seller does the work at their own price.</Check>
        </View>

        <Text style={s.h3}>Lender concession caps — the credit cannot exceed these</Text>
        <View style={s.table}>
          <View style={s.tr}>
            <Text style={[s.th, { flex: 2 }]}>Loan type</Text>
            <Text style={[s.th, { flex: 1 }]}>Seller concession limit</Text>
          </View>
          {[
            ["Conventional, under 10% down", "3%"],
            ["Conventional, 10–25% down", "6%"],
            ["Conventional, 25%+ down", "9%"],
            ["FHA", "6%"],
            ["VA", "No cap on amount; limits on what it can cover"],
            ["USDA", "6%"],
          ].map(([loan, cap], i, arr) => (
            <View key={loan} style={i === arr.length - 1 ? s.trLast : s.tr}>
              <Text style={[s.td, { flex: 2 }]}>{loan}</Text>
              <Text style={[s.td, { flex: 1 }]}>{cap}</Text>
            </View>
          ))}
        </View>
        <Text style={[s.small, s.p]}>
          The credit must also cover actual closing costs and prepaids — a buyer cannot pocket leftover credit.
          If the repair credit is bigger than the buyer&apos;s closing-cost capacity, the excess comes off the price instead.
        </Text>

        <View style={s.grid}>
          <View style={s.col}>
            <View style={s.card}>
              <Text style={s.h3}>When a price reduction beats a credit</Text>
              <Check>Buyer is at their cash limit — full down payment, no room to absorb a closing-cost credit</Check>
              <Text style={[s.small, { marginTop: 3 }]}>
                A price cut lowers the loan, the payment and total interest, and sidesteps the concession cap.
                A buyer with spare cash usually prefers the credit — it leaves liquid cash after closing.
              </Text>
            </View>
          </View>
          <View style={s.col}>
            <View style={s.cardAmber}>
              <Text style={s.h3}>When the seller must fix instead — no credit substitution</Text>
              <Check>FHA / VA / USDA loan with an appraisal-flagged safety or habitability item</Check>
              <Check>Active leak that will do progressive damage before closing</Check>
              <Check>Appraisal conditioned on the repair being complete — ask the lender first</Check>
              <Check>Buyer specifically refuses a cash credit (rare)</Check>
            </View>
          </View>
        </View>

        <Text style={s.h3}>The four response options</Text>
        <Text style={s.p}>
          <Text style={{ fontWeight: 700 }}>Accept</Text> all repairs as written ·{" "}
          <Text style={{ fontWeight: 700 }}>Counter with completed repairs</Text> on a subset ·{" "}
          <Text style={{ fontWeight: 700 }}>Counter with a credit</Text> at closing ·{" "}
          <Text style={{ fontWeight: 700 }}>Refuse</Text> — the price already reflects the condition.
          Experienced sellers mix them: accept the safety items, credit the maintenance items, refuse the cosmetics.
        </Text>
        <Footer n={2} />
      </Page>

      {/* ---------------- Page 3: worksheet ---------------- */}
      <Page size="LETTER" style={s.page}>
        <Brand />
        <Text style={s.eyebrow}>STEP 3</Text>
        <Text style={s.h2}>Respond in writing — one line per item</Text>
        <Text style={[s.p, s.muted]}>
          Verbal yeses are how deals fall apart at the closing table. Fill this in, then send it through your agent
          on the contract form. About four times in five, a structured response like this is accepted with one or
          two minor counters.
        </Text>

        <View style={s.table}>
          <View style={s.tr}>
            <Text style={[s.th, { flex: 0.5 }]}>#</Text>
            <Text style={[s.th, { flex: 2.2 }]}>Buyer&apos;s request</Text>
            <Text style={[s.th, { flex: 1.1 }]}>Bucket</Text>
            <Text style={[s.th, { flex: 2.4 }]}>Response (fix / credit $ / no action + reason)</Text>
            <Text style={[s.th, { flex: 0.9 }]}>Receipt at walk-through?</Text>
          </View>
          {Array.from({ length: 14 }).map((_, i) => (
            <View key={i} style={s.wsRow}>
              <Text style={[s.wsCell, { flex: 0.5 }]}>{i + 1}</Text>
              <Text style={[s.wsCell, { flex: 2.2 }]}> </Text>
              <Text style={[s.wsCell, { flex: 1.1 }]}> </Text>
              <Text style={[s.wsCell, { flex: 2.4 }]}> </Text>
              <Text style={[s.wsCell, { flex: 0.9, borderRightWidth: 0 }]}> </Text>
            </View>
          ))}
        </View>

        <Text style={s.h3}>What a clean response line looks like</Text>
        <View style={[s.card, { backgroundColor: INK_100 }]}>
          <Text style={{ fontSize: 8.5, marginBottom: 2 }}>Item 1 (HVAC service): <Text style={{ fontWeight: 700 }}>Credit $150 at closing.</Text></Text>
          <Text style={{ fontSize: 8.5, marginBottom: 2 }}>Item 2 (Smoke detectors, 3 missing): <Text style={{ fontWeight: 700 }}>Will replace before closing.</Text></Text>
          <Text style={{ fontSize: 8.5, marginBottom: 2 }}>Item 3 (GFCI in upstairs bathroom): <Text style={{ fontWeight: 700 }}>Will replace; receipts at walk-through.</Text></Text>
          <Text style={{ fontSize: 8.5, marginBottom: 2 }}>Item 4 (Driveway crack): <Text style={{ fontWeight: 700 }}>No action — disclosed on seller&apos;s disclosure.</Text></Text>
          <Text style={{ fontSize: 8.5 }}>Item 5 (Re-grade soil at south foundation): <Text style={{ fontWeight: 700 }}>No action — outside scope of inspection contingency.</Text></Text>
        </View>

        <Text style={s.h3}>Before anyone signs</Text>
        <View style={s.grid}>
          <View style={s.col}>
            <Check>Every line item addressed in writing, bucket named</Check>
            <Check>Licensed-contractor invoices for every MUST DO item</Check>
            <Check>Receipts for WILL DO items ready for the walk-through</Check>
          </View>
          <View style={s.col}>
            <Check>Total credit is under the lender&apos;s concession cap</Check>
            <Check>Lender has confirmed credit vs. repair is acceptable on flagged items</Check>
            <Check>Nothing refused is on the must-not-refuse list</Check>
          </View>
        </View>

        <Text style={[s.small, { marginTop: 10 }]}>
          Companion guides: fixitreal.com/home-inspection-repairs/which-inspection-repairs-sellers-must-fix ·
          /repair-credit-vs-fix-before-closing · /buyer-repair-request-response · /seller-refuse-repair-requests
        </Text>
        <Footer n={3} />
      </Page>
    </Document>
  );
}
