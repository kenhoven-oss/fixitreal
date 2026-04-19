import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { costCalendar } from "@/content/cost-calendar";

// Uses @react-pdf's built-in Helvetica (no network font fetch). Keeps build
// deterministic and the PDF free of external dependencies.

const NAVY = "#182D4A";
const AMBER = "#D4A038";
const INK_800 = "#2c2b26";
const INK_600 = "#595751";
const INK_500 = "#78766f";
const INK_300 = "#d1d0ca";
const INK_100 = "#f4f4f2";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: INK_800,
    padding: 40,
    lineHeight: 1.5,
  },
  coverPage: {
    fontFamily: "Helvetica",
    color: INK_800,
    padding: 60,
    justifyContent: "space-between",
  },
  coverAccentLine: {
    width: 48,
    height: 3,
    backgroundColor: AMBER,
  },
  coverBrandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  coverBrandDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: AMBER,
  },
  coverBrandText: {
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: 600,
    color: NAVY,
  },
  coverTitle: {
    fontSize: 48,
    fontWeight: 700,
    color: NAVY,
    lineHeight: 1.05,
    marginTop: 24,
  },
  coverSubtitle: {
    fontSize: 16,
    color: INK_600,
    marginTop: 12,
    lineHeight: 1.4,
  },
  coverSectionBlock: {
    marginTop: 30,
  },
  coverSectionLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: AMBER,
    fontWeight: 600,
    marginBottom: 6,
  },
  coverBullet: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
    fontSize: 11,
    color: INK_800,
  },
  coverDot: {
    fontSize: 11,
    color: AMBER,
  },
  coverFooter: {
    borderTopWidth: 1,
    borderTopColor: INK_300,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    color: INK_500,
  },
  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: INK_300,
  },
  pageHeaderBrand: {
    fontSize: 9,
    letterSpacing: 2,
    fontWeight: 600,
    color: NAVY,
  },
  pageHeaderRight: {
    fontSize: 9,
    color: INK_500,
  },
  monthCard: {
    marginBottom: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: INK_300,
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  monthHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  monthName: {
    fontSize: 16,
    fontWeight: 700,
    color: NAVY,
  },
  monthTheme: {
    fontSize: 8,
    letterSpacing: 1,
    color: AMBER,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  monthSubtitle: {
    fontSize: 9,
    color: INK_600,
    marginTop: 2,
    marginBottom: 8,
  },
  taskBlock: {
    marginTop: 6,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: AMBER,
  },
  taskTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 6,
  },
  taskTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: NAVY,
    flex: 1,
  },
  taskCost: {
    fontSize: 8,
    color: INK_600,
    fontFamily: "Courier",
  },
  taskWhy: {
    fontSize: 9,
    color: INK_800,
    marginTop: 2,
    lineHeight: 1.45,
  },
  pageFooter: {
    position: "absolute",
    bottom: 24,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: INK_500,
    borderTopWidth: 1,
    borderTopColor: INK_300,
    paddingTop: 6,
  },
  aboutSection: {
    marginTop: 20,
    padding: 14,
    backgroundColor: INK_100,
    borderRadius: 4,
  },
  aboutHeading: {
    fontSize: 12,
    fontWeight: 700,
    color: NAVY,
    marginBottom: 6,
  },
  aboutBody: {
    fontSize: 9,
    color: INK_800,
    lineHeight: 1.5,
    marginTop: 3,
  },
});

// Split 12 months across 3 pages of content (4 months per page) — clean, predictable pagination.
const pages: (typeof costCalendar)[number][][] = [
  costCalendar.slice(0, 4),
  costCalendar.slice(4, 8),
  costCalendar.slice(8, 12),
];

export function CalendarPdf() {
  return (
    <Document
      title="The Home Repair Cost Calendar"
      author="Lee Hoven · FixItReal"
      subject="Monthly homeowner maintenance calendar with cost ranges"
      creator="FixItReal.com"
    >
      {/* --- Cover --- */}
      <Page size="LETTER" style={styles.coverPage}>
        <View>
          <View style={styles.coverBrandRow}>
            <View style={styles.coverBrandDot} />
            <Text style={styles.coverBrandText}>FIXITREAL</Text>
          </View>
          <View style={styles.coverAccentLine} />
        </View>

        <View>
          <Text style={styles.coverTitle}>The Home Repair{"\n"}Cost Calendar</Text>
          <Text style={styles.coverSubtitle}>
            One task list for every month of the year. What to check, what it
            should cost, and why it matters — so nothing breaks without warning.
          </Text>

          <View style={styles.coverSectionBlock}>
            <Text style={styles.coverSectionLabel}>WHAT YOU&apos;LL GET</Text>
            <View style={styles.coverBullet}>
              <Text style={styles.coverDot}>•</Text>
              <Text>12 months of practical maintenance tasks</Text>
            </View>
            <View style={styles.coverBullet}>
              <Text style={styles.coverDot}>•</Text>
              <Text>Current 2026 US cost ranges — DIY and pro</Text>
            </View>
            <View style={styles.coverBullet}>
              <Text style={styles.coverDot}>•</Text>
              <Text>Plain-English reasoning on why each task matters</Text>
            </View>
            <View style={styles.coverBullet}>
              <Text style={styles.coverDot}>•</Text>
              <Text>No fluff, no filler, no affiliate upsells</Text>
            </View>
          </View>
        </View>

        <View style={styles.coverFooter}>
          <Text>fixitreal.com</Text>
          <Text>Fix it right, not twice.</Text>
        </View>
      </Page>

      {/* --- Month pages --- */}
      {pages.map((pageMonths, pageIdx) => (
        <Page key={pageIdx} size="LETTER" style={styles.page}>
          <View style={styles.pageHeader}>
            <Text style={styles.pageHeaderBrand}>
              FIXITREAL  ·  COST CALENDAR 2026
            </Text>
            <Text style={styles.pageHeaderRight}>
              Page {pageIdx + 2} of {pages.length + 2}
            </Text>
          </View>

          {pageMonths.map((m) => (
            <View key={m.month} style={styles.monthCard} wrap={false}>
              <View style={styles.monthHeaderRow}>
                <Text style={styles.monthName}>{m.month}</Text>
                <Text style={styles.monthTheme}>{m.theme}</Text>
              </View>
              <Text style={styles.monthSubtitle}>{m.subtitle}</Text>
              {m.tasks.map((t, idx) => (
                <View key={idx} style={styles.taskBlock}>
                  <View style={styles.taskTitleRow}>
                    <Text style={styles.taskTitle}>{t.title}</Text>
                    <Text style={styles.taskCost}>{t.cost}</Text>
                  </View>
                  <Text style={styles.taskWhy}>{t.why}</Text>
                </View>
              ))}
            </View>
          ))}

          <View style={styles.pageFooter}>
            <Text>fixitreal.com</Text>
            <Text>© 2026 FixItReal — Fix it right, not twice.</Text>
          </View>
        </Page>
      ))}

      {/* --- About page --- */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderBrand}>
            FIXITREAL  ·  COST CALENDAR 2026
          </Text>
          <Text style={styles.pageHeaderRight}>
            Page {pages.length + 2} of {pages.length + 2}
          </Text>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.aboutHeading}>About this calendar</Text>
          <Text style={styles.aboutBody}>
            Compiled from published homeowner maintenance guidance (NFPA dryer
            vent and smoke-alarm standards; U.S. Department of Energy on water
            heater and HVAC best practices), cost data from our public cost
            guides at fixitreal.com/costs, and our own opinion on what actually
            matters versus what sounds good but isn&apos;t worth your weekend.
          </Text>
          <Text style={styles.aboutBody}>
            Costs shown are 2026 US national ranges. Regional variation can be
            significant — see the methodology page at
            fixitreal.com/about/methodology.
          </Text>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.aboutHeading}>How we make money</Text>
          <Text style={styles.aboutBody}>
            FixItReal is independent. We earn through home-services lead-gen
            partnerships where we believe the service providers are legitimate,
            affiliate links to tools and parts on pages that warrant them, and
            display advertising.
          </Text>
          <Text style={styles.aboutBody}>
            We do not take home warranty company affiliate payouts — ever. See
            fixitreal.com/affiliate-disclosure for full details.
          </Text>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.aboutHeading}>Want seasonal reminders?</Text>
          <Text style={styles.aboutBody}>
            Our weekly newsletter includes the month&apos;s task list with a
            link to the relevant cost guide, plus one contractor-vetting tip.
            One email a week. Unsubscribe anytime.
          </Text>
          <Text style={styles.aboutBody}>
            Subscribe at fixitreal.beehiiv.com or on the homepage.
          </Text>
        </View>

        <View style={styles.pageFooter}>
          <Text>fixitreal.com</Text>
          <Text>© 2026 FixItReal — Fix it right, not twice.</Text>
        </View>
      </Page>
    </Document>
  );
}
