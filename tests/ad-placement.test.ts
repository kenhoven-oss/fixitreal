/**
 * In-article ad placement rules.
 *
 *   npm run test:unit
 *
 * The synthetic articles below mirror the real structures in
 * src/content/articles (KensTake props blocks, SafetyWarning, ProductPicks,
 * numbered steps, tables). The last test runs the planner over every real
 * article so a new piece of content can never produce a placement that
 * breaks the rules.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { insertArticleAdSlots, planArticleAdPlacements } from "../src/lib/ad-placement.ts";

const words = (n: number, w = "lorem") => Array.from({ length: n }, () => w).join(" ");

function article(sections: { heading: string; body: string }[], intro = words(250)) {
  return [intro, "", ...sections.flatMap((s) => [`## ${s.heading}`, "", s.body, ""])].join("\n");
}

test("maxPlacements 0 returns the source untouched", () => {
  const src = article([
    { heading: "One", body: words(300) },
    { heading: "Two", body: words(300) },
  ]);
  const r = insertArticleAdSlots(src, { maxPlacements: 0 });
  assert.equal(r.source, src);
  assert.equal(r.placements.length, 0);
});

test("two placements: after the intro, and farther down between sections", () => {
  const src = article([
    { heading: "One", body: words(300) },
    { heading: "Two", body: words(300) },
    { heading: "Three", body: words(300) },
    { heading: "Four", body: words(300) },
  ]);
  const r = insertArticleAdSlots(src, { maxPlacements: 2 });
  assert.equal(r.placements.length, 2);
  assert.equal(r.placements[0].heading, "One"); // 250 intro words above it
  assert.ok(r.placements[1].wordsBefore - r.placements[0].wordsBefore >= 350);
  assert.ok(r.totalWords - r.placements[1].wordsBefore >= 150);
  // Slots are their own paragraphs, directly above a heading.
  assert.match(r.source, /\n\n<AdSlot placement="in-article-1" \/>\n\n## One\n/);
  assert.match(r.source, /\n\n<AdSlot placement="in-article-2" \/>\n\n## /);
  // Nothing else changed.
  assert.equal(r.source.replace(/\n\n<AdSlot placement="in-article-\d" \/>\n/g, ""), src);
});

test("a thin intro pushes the first slot to a later section", () => {
  const src = article(
    [
      { heading: "One", body: words(300) },
      { heading: "Two", body: words(300) },
    ],
    words(40)
  );
  const r = planArticleAdPlacements(src, { maxPlacements: 2 });
  assert.equal(r.placements[0]?.heading, "Two");
});

test("short articles get at most one slot, and none above a stub closing section", () => {
  const src = article([
    { heading: "One", body: words(300) },
    { heading: "The one-line version", body: words(20) },
  ]);
  const r = planArticleAdPlacements(src, { maxPlacements: 2 });
  assert.deepEqual(
    r.placements.map((p) => p.heading),
    ["One"]
  );
});

test("never next to safety warnings, calculator output, verdicts or product picks", () => {
  const src = [
    words(250),
    "",
    "<SafetyWarning>",
    "Turn off the breaker first.",
    "</SafetyWarning>",
    "",
    "## After a warning", // prev block is SafetyWarning -> skipped
    "",
    words(400),
    "",
    "## Before a calculator", // next block is CostEstimateBox -> skipped
    "",
    '<CostEstimateBox low={100} high={200} />',
    "",
    words(400),
    "",
    "<ProductPicks id=\"x\" />",
    "",
    "## After product picks", // prev is ProductPicks -> skipped
    "",
    words(400),
    "",
    "## Clean boundary",
    "",
    words(400),
    "",
    "## Another clean boundary",
    "",
    words(400),
  ].join("\n");
  const r = planArticleAdPlacements(src, { maxPlacements: 2 });
  assert.deepEqual(
    r.placements.map((p) => p.heading),
    ["Clean boundary", "Another clean boundary"]
  );
});

test("urgent / safety headings are never used", () => {
  const src = article([
    { heading: "Shut off the gas first", body: words(400) },
    { heading: "If it's sparking right now", body: words(400) },
    { heading: "Fire extinguisher classes", body: words(400) },
    { heading: "What a fair quote looks like", body: words(400) },
    { heading: "Permit and insurance angle", body: words(400) },
  ]);
  const r = planArticleAdPlacements(src, { maxPlacements: 2 });
  assert.deepEqual(
    r.placements.map((p) => p.heading),
    ["What a fair quote looks like", "Permit and insurance angle"]
  );
});

test("headings inside components, code fences and tables are not boundaries", () => {
  const src = [
    words(250),
    "",
    "<KensTake",
    '  summary="x"',
    '  whatIWouldDo="y"',
    "/>",
    "",
    "<KeyTakeaway title=\"t\">",
    "## Not a real heading",
    words(300),
    "</KeyTakeaway>",
    "",
    "```",
    "## also not a heading",
    "```",
    "",
    "## Real heading",
    "",
    "| a | b |",
    "|---|---|",
    "| 1 | 2 |",
    "",
    words(300),
    "",
    "## Right after a table is fine when text follows",
    "",
    words(300),
  ].join("\n");
  const r = planArticleAdPlacements(src, { maxPlacements: 2 });
  for (const p of r.placements) {
    assert.ok(!/Not a real|also not/.test(p.heading), p.heading);
  }
  // "Real heading" is followed by a table, so it is skipped.
  assert.ok(!r.placements.some((p) => p.heading === "Real heading"));
});

test("every real article respects the rules", () => {
  const root = path.join(process.cwd(), "src/content/articles");
  const pillars = readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory());
  let articles = 0;
  let withTwo = 0;
  let withOne = 0;
  for (const pillar of pillars) {
    for (const file of readdirSync(path.join(root, pillar.name))) {
      if (!file.endsWith(".mdx")) continue;
      const { content } = matter(readFileSync(path.join(root, pillar.name, file), "utf8"));
      const r = insertArticleAdSlots(content, { maxPlacements: 2 });
      articles++;
      assert.ok(r.placements.length <= 2, `${pillar.name}/${file}: ${r.placements.length} placements`);
      if (r.placements.length === 2) withTwo++;
      if (r.placements.length === 1) withOne++;

      const lines = r.source.split("\n");
      lines.forEach((line, i) => {
        if (!line.startsWith("<AdSlot")) return;
        // Directly above a top-level H2 with blank lines around it.
        assert.equal(lines[i - 1], "", `${pillar.name}/${file}:${i} no blank line above slot`);
        assert.equal(lines[i + 1], "", `${pillar.name}/${file}:${i} no blank line below slot`);
        assert.match(lines[i + 2], /^## /, `${pillar.name}/${file}:${i} slot not above an H2`);
        // Not inside a fenced code block.
        const fences = lines.slice(0, i).filter((l) => /^(```|~~~)/.test(l.trim())).length;
        assert.equal(fences % 2, 0, `${pillar.name}/${file}:${i} slot inside a code fence`);
      });
      for (const p of r.placements) {
        assert.ok(p.wordsBefore >= 200, `${pillar.name}/${file}: slot with only ${p.wordsBefore} words above`);
        assert.ok(r.totalWords - p.wordsBefore >= 150, `${pillar.name}/${file}: slot above a stub section`);
      }
      // Slots are removable without changing anything else.
      assert.equal(r.source.replace(/\n\n<AdSlot placement="in-article-\d" \/>\n/g, ""), content.replace(/\r\n/g, "\n"));
    }
  }
  assert.ok(articles > 100, `expected the real corpus, saw ${articles}`);
  // Sanity: the rules should not be so strict that most articles get nothing.
  assert.ok(withTwo + withOne > articles * 0.7, `only ${withOne + withTwo}/${articles} articles got a slot`);
});
