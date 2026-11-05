import { adsConfig } from "@/lib/ads";
import { AdUnit } from "@/components/ads/AdUnit";

type AdSlotProps = {
  /**
   * Stable name for the position ("in-article-1", "in-article-2"). Used
   * for the data-placement attribute so QA scripts and AdSense reports can
   * tell positions apart; it does not change which ad unit is requested.
   */
  placement: string;
  /** Which configured ad unit to request. Only in-article exists today. */
  unit?: keyof typeof adsConfig.slots;
};

/**
 * A reusable ad placement.
 *
 * Renders NOTHING — not even an empty wrapper — unless all of these hold:
 *   - NEXT_PUBLIC_ADS_ENABLED=true
 *   - NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is a valid ca-pub ID
 *   - the requested ad unit's slot ID is configured
 *
 * So pages built without configuration carry no ad markup, no reserved
 * space and no third-party script. When active, the wrapper reserves the
 * height of a standard 280px-tall responsive unit up front, so the ad
 * fills space that already exists instead of shifting content (CLS). The
 * label is "Advertisements", one of the only two wordings Google's ad
 * placement policy permits (the other is "Sponsored Links").
 */
export function AdSlot({ placement, unit = "inArticle" }: AdSlotProps) {
  if (!adsConfig.adsEnabled || !adsConfig.publisherId || !adsConfig.scriptSrc) return null;
  const slotId = adsConfig.slots[unit];
  if (!slotId) return null;

  return (
    <aside
      aria-label="Advertisements"
      data-ad-placement={placement}
      className="my-10 clear-both"
    >
      <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
        Advertisements
      </p>
      <div className="min-h-[280px] w-full overflow-hidden">
        <AdUnit
          publisherId={adsConfig.publisherId}
          slotId={slotId}
          scriptSrc={adsConfig.scriptSrc}
          placement={placement}
        />
      </div>
    </aside>
  );
}
