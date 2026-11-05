/**
 * Decides where in-article ad slots go, and injects them into MDX source.
 *
 * Design goals, in priority order:
 *
 *   1. Never interrupt anything a reader is in the middle of. Slots are only
 *      ever inserted immediately BEFORE a top-level "## " heading, i.e. at a
 *      section boundary. That alone guarantees we never split a numbered
 *      list, a table, a code block, a <SafetyWarning>, a <KensTake>, or any
 *      other MDX component.
 *   2. Stay away from safety-critical and decision-critical blocks. A slot is
 *      skipped when the block right before it, or the block right after the
 *      heading, is a safety warning, calculator output, verdict box, product
 *      picks, or a table, and when the heading itself reads like an urgent
 *      instruction ("Shut off the gas", "If it's sparking right now").
 *   3. Be conservative. The first slot needs a real introduction above it;
 *      the second needs a meaningful gap after the first and real content
 *      below it, so no ad sits above a two-line closing section.
 *
 * The algorithm is pure (string in, string out) so it is unit-tested in
 * tests/ad-placement.test.ts against real heading structures.
 */

export type PlacementOptions = {
  /** Hard cap; 0 returns the source untouched. */
  maxPlacements: number;
  /** Words of content required above the first slot. */
  minIntroWords?: number;
  /** Words of content required between the first and second slot. */
  minGapWords?: number;
  /** Words of content required below any slot. */
  minTailWords?: number;
  /**
   * Fraction of the article's words that should precede the second slot
   * when possible (so it lands "farther down", not right after the first).
   */
  secondSlotTarget?: number;
};

export type Placement = {
  /** 0-based line index in the ORIGINAL source the slot was inserted before. */
  line: number;
  /** Heading text the slot sits above (for QA output). */
  heading: string;
  /** Placement name passed to <AdSlot placement="..."> */
  name: string;
  /** Words of content above this slot. */
  wordsBefore: number;
};

export type PlacementResult = {
  source: string;
  placements: Placement[];
  totalWords: number;
};

const DEFAULTS = {
  minIntroWords: 200,
  minGapWords: 350,
  minTailWords: 150,
  secondSlotTarget: 0.55,
} as const;

/**
 * MDX components a slot must not sit directly against. Calculator output,
 * verdicts and product recommendations are decision points; a display ad
 * touching them is exactly the "confusing adjacency" Google's placement
 * policy warns about. SafetyWarning is self-explanatory.
 */
const AVOID_ADJACENT = new Set([
  "SafetyWarning",
  "CostEstimateBox",
  "FairPriceChecker",
  "DIYorHireVerdict",
  "ProductPicks",
  "SmokeAlarmSaleByState",
  "ChecklistCTA",
  "PrintReadyFormsCTA",
  "NewsletterBlock",
  "StateCostLinks",
  "ContractorRedFlagsBlock",
]);

/** Headings that read as urgent / safety-critical instructions. */
const SAFETY_HEADING =
  /\b(shut|turn|switch)\s+(it\s+|the\s+\w+\s+)?off\b|\bemergency\b|\bgas\s+(leak|smell)|\bsmell\s+gas\b|\bfire\b|\bevacuat|\b911\b|\bright\s+now\b|\bdanger|\bsafe(ly|ty)\b|\bwarning\b|\bspark|\bsmok(e|ing)\s+(outlet|wire|breaker|panel)|\bflood|\bcarbon\s+monoxide\b|\bshock\b|\belectrocut|\bbefore\s+you\s+touch\b|\bstop\b.*\bimmediately\b/i;

type BlockKind =
  | { kind: "blank" }
  | { kind: "heading"; level: number; text: string }
  | { kind: "text" }
  | { kind: "table" }
  | { kind: "list"; ordered: boolean }
  | { kind: "fence" }
  | { kind: "component"; name: string; depth: number };

type Line = {
  raw: string;
  block: BlockKind;
  /** Nesting depth of MDX/HTML block components at this line. */
  depth: number;
  words: number;
};

const OPEN_TAG = /^<([A-Za-z][\w.]*)(\s|>|$)/;
const CLOSE_TAG = /^<\/([A-Za-z][\w.]*)\s*>/;

function countWords(s: string): number {
  const stripped = s
    .replace(/<[^>]+>/g, " ") // tags and attributes
    .replace(/[#*_`>|\-]+/g, " ")
    .trim();
  return stripped ? stripped.split(/\s+/).length : 0;
}

/** Tokenise the MDX into lines annotated with block type and nesting. */
function analyse(src: string): Line[] {
  const rawLines = src.split(/\r?\n/);
  const out: Line[] = [];
  let inFence = false;
  const stack: string[] = [];
  let pendingOpen: string | null = null; // multi-line opening tag (<KensTake\n  summary=...\n/>)

  for (const raw of rawLines) {
    const t = raw.trim();
    const depth = stack.length;

    if (pendingOpen) {
      // Still inside a multi-line opening tag; wait for its closing ">".
      if (/>$/.test(t)) {
        const selfClosed = /\/>$/.test(t);
        const name = pendingOpen;
        pendingOpen = null;
        if (!selfClosed) stack.push(name);
        out.push({ raw, block: { kind: "component", name, depth }, depth, words: countWords(t) });
      } else {
        out.push({ raw, block: { kind: "component", name: pendingOpen, depth }, depth, words: countWords(t) });
      }
      continue;
    }

    if (/^(```|~~~)/.test(t)) {
      inFence = !inFence;
      out.push({ raw, block: { kind: "fence" }, depth, words: 0 });
      continue;
    }
    if (inFence) {
      out.push({ raw, block: { kind: "fence" }, depth, words: 0 });
      continue;
    }

    const close = CLOSE_TAG.exec(t);
    if (close) {
      const name = close[1];
      const idx = stack.lastIndexOf(name);
      if (idx !== -1) stack.splice(idx);
      out.push({ raw, block: { kind: "component", name, depth: stack.length }, depth: stack.length, words: 0 });
      continue;
    }

    const open = OPEN_TAG.exec(t);
    if (open && !/^<(a|br|img|em|strong|span|code|sup|sub)\b/i.test(t)) {
      const name = open[1];
      const closesOnLine =
        /\/>$/.test(t) || new RegExp(`</${name.replace(".", "\\.")}>\\s*$`).test(t);
      if (!/>$/.test(t)) {
        pendingOpen = name;
      } else if (!closesOnLine) {
        stack.push(name);
      }
      out.push({ raw, block: { kind: "component", name, depth }, depth, words: countWords(t) });
      continue;
    }

    if (t === "") {
      out.push({ raw, block: { kind: "blank" }, depth, words: 0 });
      continue;
    }
    const h = /^(#{1,6})\s+(.*)$/.exec(t);
    if (h) {
      out.push({
        raw,
        block: { kind: "heading", level: h[1].length, text: h[2].replace(/\s+#+$/, "").trim() },
        depth,
        words: 0,
      });
      continue;
    }
    if (/^\|/.test(t)) {
      out.push({ raw, block: { kind: "table" }, depth, words: countWords(t) });
      continue;
    }
    const ordered = /^\d+[.)]\s/.test(t);
    if (ordered || /^[-*+]\s/.test(t)) {
      out.push({ raw, block: { kind: "list", ordered }, depth, words: countWords(t) });
      continue;
    }
    out.push({ raw, block: { kind: "text" }, depth, words: countWords(t) });
  }
  return out;
}

function neighbour(lines: Line[], from: number, step: -1 | 1): Line | null {
  for (let i = from + step; i >= 0 && i < lines.length; i += step) {
    if (lines[i].block.kind !== "blank") return lines[i];
  }
  return null;
}

function blockedBy(line: Line | null): boolean {
  if (!line) return false;
  const b = line.block;
  if (b.kind === "table") return true;
  if (b.kind === "component" && AVOID_ADJACENT.has(b.name)) return true;
  return false;
}

/**
 * Compute where slots would go without modifying the source.
 */
export function planArticleAdPlacements(
  src: string,
  options: PlacementOptions
): { placements: Placement[]; totalWords: number } {
  const o = { ...DEFAULTS, ...options };
  if (o.maxPlacements <= 0) return { placements: [], totalWords: countWords(src) };

  const lines = analyse(src);
  const totalWords = lines.reduce((n, l) => n + l.words, 0);

  // Cumulative words before each line.
  const before: number[] = new Array(lines.length);
  let acc = 0;
  for (let i = 0; i < lines.length; i++) {
    before[i] = acc;
    acc += lines[i].words;
  }

  type Candidate = { line: number; heading: string; wordsBefore: number };
  const candidates: Candidate[] = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.block.kind !== "heading" || l.block.level !== 2 || l.depth !== 0) continue;
    if (SAFETY_HEADING.test(l.block.text)) continue;
    const prev = neighbour(lines, i, -1);
    const next = neighbour(lines, i, 1);
    if (blockedBy(prev) || blockedBy(next)) continue;
    // Never above a heading that is itself immediately followed by another
    // heading (an empty section) — the slot would sit between two titles.
    if (next && next.block.kind === "heading") continue;
    candidates.push({ line: i, heading: l.block.text, wordsBefore: before[i] });
  }

  const placements: Placement[] = [];
  const tailOk = (c: Candidate) => totalWords - c.wordsBefore >= o.minTailWords;

  const first = candidates.find((c) => c.wordsBefore >= o.minIntroWords && tailOk(c));
  if (!first) return { placements, totalWords };
  placements.push({ ...first, name: "in-article-1" });

  if (o.maxPlacements >= 2) {
    const minWords = Math.max(first.wordsBefore + o.minGapWords, totalWords * o.secondSlotTarget);
    const later = candidates.filter(
      (c) => c.line > first.line && c.wordsBefore >= first.wordsBefore + o.minGapWords && tailOk(c)
    );
    // Prefer the first candidate past the target depth; otherwise the deepest
    // candidate that still respects the gap and tail rules.
    const second = later.find((c) => c.wordsBefore >= minWords) ?? later[later.length - 1];
    if (second) placements.push({ ...second, name: "in-article-2" });
  }

  return { placements, totalWords };
}

/**
 * Inject `<AdSlot placement="..." />` lines into the MDX source at the
 * planned positions. Returns the original source untouched when nothing
 * qualifies, so callers can pass the result straight to the MDX compiler.
 */
export function insertArticleAdSlots(src: string, options: PlacementOptions): PlacementResult {
  const { placements, totalWords } = planArticleAdPlacements(src, options);
  if (placements.length === 0) return { source: src, placements, totalWords };

  const lines = src.split(/\r?\n/);
  // Insert from the bottom up so earlier indexes stay valid.
  for (const p of [...placements].sort((a, b) => b.line - a.line)) {
    lines.splice(p.line, 0, "", `<AdSlot placement="${p.name}" />`, "");
  }
  return { source: lines.join("\n"), placements, totalWords };
}
