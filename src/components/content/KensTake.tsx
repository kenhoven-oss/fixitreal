import Image from "next/image";
import type { ReactNode } from "react";
import { kenHoven } from "@/content/authors/ken-hoven";

type KensTakeProps = {
  /** One-sentence summary of the recommendation. */
  summary: ReactNode;
  /** What Ken would actually do in this situation. */
  whatIWouldDo: ReactNode;
  /** A common homeowner mistake to avoid. */
  commonMistake?: ReactNode;
  /** A red flag to watch for (in a quote, a contractor, or the work itself). */
  redFlag?: ReactNode;
};

/**
 * "Ken's Take" — author voice block.
 *
 * Why it matters for SEO: visible personal voice on articles is the most
 * direct E-E-A-T signal Google reads. Helpful-Content guidance explicitly
 * calls out "first-hand expertise" — a clearly-attributed author block with
 * specific practical advice is one of the cleanest ways to express that
 * without faking testing claims.
 *
 * Usage in MDX:
 *   <KensTake
 *     summary="For most homeowners this is a clear DIY in under an hour."
 *     whatIWouldDo="Buy the parts at the closest hardware store; skip the upsell."
 *     commonMistake="Over-tightening the supply line and stripping the threads."
 *     redFlag="A plumber suggesting the whole valve assembly needs replacement when only the cartridge failed."
 *   />
 */
export function KensTake({
  summary,
  whatIWouldDo,
  commonMistake,
  redFlag,
}: KensTakeProps) {
  return (
    <aside
      role="note"
      aria-label="Ken's Take"
      className="my-8 rounded-lg border border-navy-200 bg-white p-5 md:p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden ring-1 ring-ink-300">
          <Image
            src={kenHoven.photo}
            alt=""
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
            Ken&apos;s Take
          </p>
          <p className="mt-1 font-serif text-lg text-navy-900 leading-snug">
            {summary}
          </p>

          <dl className="mt-4 space-y-3 text-sm text-ink-800 leading-relaxed">
            <div>
              <dt className="font-semibold text-navy-900">What I&apos;d do</dt>
              <dd className="mt-1">{whatIWouldDo}</dd>
            </div>
            {commonMistake && (
              <div>
                <dt className="font-semibold text-navy-900">Common mistake</dt>
                <dd className="mt-1">{commonMistake}</dd>
              </div>
            )}
            {redFlag && (
              <div>
                <dt className="font-semibold text-red-800">Red flag</dt>
                <dd className="mt-1">{redFlag}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </aside>
  );
}
