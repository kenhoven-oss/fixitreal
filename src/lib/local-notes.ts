import type { Trade } from "@/content/state-licensing";

/**
 * Filter a place's free-text local notes down to the sentences that are
 * relevant to the trade a cost page is about.
 *
 * WHY
 * ---
 * Each state and metro has one `notes` string shared by every cost guide.
 * Cleveland's includes "Older housing stock commonly needs aluminum-branch-
 * wiring remediation" — useful on the electrician page, noise on the water
 * heater, garbage disposal and plumber pages, where it was rendering under
 * "Cleveland-specific factors". Likewise frozen-pipe and hard-water notes
 * on the electrician and smoke-detector pages.
 *
 * Rule: a sentence is shown when it is tagged with the page's trade, or
 * carries no trade tag at all (pricing, weather, permit lead times). A
 * sentence tagged only with other trades — including HVAC and roofing,
 * which no current cost guide covers — is dropped.
 */
const TAGS: Record<"electrician" | "plumber" | "other", RegExp> = {
  electrician:
    /\b(electric\w*|wiring|panels?|subpanels?|grounding|service[- ]entry|circuits?|breakers?|EV-charger|solar|fixture relocations?)\b/i,
  plumber:
    /\b(plumb\w*|pipes?|pipe-burst|frozen-pipe|frozen-meter|galvanized|copper|water[- ]heaters?|water-heater|hot-water|tanks?|softeners?|water-softener|hard[- ]water|hard-water|slab[- ]leak|slab-leak|anode|service[- ]lines?|sewer|drains?|reroutes?|mineral|pool-equipment|fixture life)\b/i,
  other: /\b(HVAC|AC|heating-system|roof)\b/,
};

/** Sentence split that does not break on "U.S.", "St.", "U.P.", "Ft.", "Mt.". */
export function splitSentences(text: string): string[] {
  const raw = text.split(/(?<=[.!?])\s+(?=[A-Z0-9])/);
  const out: string[] = [];
  for (const part of raw) {
    const prev = out[out.length - 1];
    if (prev && /\b(U\.S|U\.P|St|Ft|Mt|Dr|No)\.$/.test(prev)) out[out.length - 1] = `${prev} ${part}`;
    else out.push(part);
  }
  return out.map((s) => s.trim()).filter(Boolean);
}

export function tagsFor(sentence: string): Set<"electrician" | "plumber" | "other"> {
  const t = new Set<"electrician" | "plumber" | "other">();
  for (const [k, re] of Object.entries(TAGS) as ["electrician" | "plumber" | "other", RegExp][]) {
    if (re.test(sentence)) t.add(k);
  }
  return t;
}

export function notesForTrade(notes: string, trade: Trade): string {
  return splitSentences(notes)
    .filter((s) => {
      const tags = tagsFor(s);
      if (tags.size === 0) return true;
      return tags.has(trade);
    })
    .join(" ");
}
