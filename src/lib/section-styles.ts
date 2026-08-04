export const SECTION_PADDING = 'py-20 md:py-28';

/** Primary section title — homepage & content pages */
export const SECTION_HEADING =
  'text-2xl font-semibold tracking-tight text-text md:text-3xl';

/** Supporting line under a heading (sentence case, never uppercase) */
export const SECTION_SUBHEADING = 'mt-2 text-base text-text-muted';

/**
 * Optional label above a heading.
 * Sentence case only — do not use uppercase/Kapitälchen here
 * (uppercase is reserved for in-card labels like Expertise medium tags).
 */
export const SECTION_EYEBROW = 'text-sm text-text-muted';

/** Gap between SectionHeader and section body */
export const SECTION_CONTENT_MT = 'mt-10';

/** Matches PriceCalculator / FAQ column width on content pages */
export const SECTION_NARROW_WIDTH = 'mx-auto w-full max-w-3xl lg:max-w-4xl';

export const PAGE_HERO_HEADING =
  'text-3xl font-semibold tracking-tight text-text md:text-4xl lg:text-5xl';

/**
 * Canonical homepage section header pattern (use SectionHeader component):
 *   [SECTION_EYEBROW?] → SECTION_HEADING → [SECTION_SUBHEADING?] → SECTION_CONTENT_MT → body
 * Always centered. Exceptions: RebootHero, Features (no title).
 */
