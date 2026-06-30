/** Unified brand button — neon green default, darker neon on hover. Overrides HeroUI variants. */
export const BTN_BRAND = 'btn-brand rounded-full px-5 text-sm font-semibold sm:px-6 sm:text-base';

/** Apple-like responsive scale: 44px → 48px → 52px with matching type. */
export const BTN_BRAND_LG =
  'btn-brand min-h-11 rounded-full px-6 text-sm font-semibold leading-none sm:min-h-12 sm:px-7 sm:text-[15px] md:min-h-[52px] md:px-8 md:text-base';

export const BTN_BRAND_SM =
  'btn-brand min-h-9 rounded-full px-4 text-xs font-semibold leading-none sm:min-h-10 sm:px-5 sm:text-sm';

/** Header CTA — 25% shorter than BTN_BRAND_SM; header bar height unchanged. */
export const BTN_BRAND_HEADER =
  'btn-brand min-h-[27px] rounded-full px-3.5 text-xs font-semibold leading-none sm:min-h-[30px] sm:px-4';

export const BTN_BRAND_RECT =
  'btn-brand rounded-xl px-6 py-4 text-base font-medium transition-opacity hover:opacity-90';

/** Large tile-style CTA (Features grid). */
export const BTN_FEATURE_CTA_TILE =
  'group flex flex-col justify-between rounded-2xl border border-border bg-transparent p-5 transition-colors hover:border-neon hover:bg-neon/10 md:rounded-3xl md:p-6';

/** Interactive tile/card hover border — matches CTA neon green. */
export const TILE_HOVER_BORDER =
  'transition-colors active:border-neon md:hover:border-neon';

export const TILE_CARD =
  'rounded-xl border border-black/5 bg-bg-card transition-colors active:border-neon md:hover:border-neon';

export const TILE_CARD_LINK = `${TILE_CARD} rounded-lg p-6`;
