export function TrustBar() {
  return (
    <div className="border-y border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-6xl px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-ink-600">
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
          No home warranty ads, ever
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
          Cost data tracked and dated
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
          Independently written, not AI-spun
        </span>
      </div>
    </div>
  );
}
