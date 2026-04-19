import Link from "next/link";

const items = [
  "No home warranty affiliates, ever",
  "No product reviews of tools we haven't used",
  "No AI-written content without human review",
  "No lead-gen partner we wouldn't personally call",
  "No sponsored posts disguised as editorial",
];

export function WhatWeDontDo() {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-8 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
        Why trust FixItReal
      </p>
      <h2 className="mt-2 font-serif text-2xl md:text-3xl text-navy-900">
        What you won&apos;t find here
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((text) => (
          <li key={text} className="flex items-start gap-3 text-ink-800">
            <span
              aria-hidden
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
            />
            <span className="leading-relaxed">{text}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">
        <Link href="/about/methodology" className="no-underline text-navy-700 hover:text-navy-900">
          Read our full methodology →
        </Link>
      </p>
    </div>
  );
}
