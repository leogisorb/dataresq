import {
  SECTION_EYEBROW,
  SECTION_HEADING,
  SECTION_SUBHEADING,
} from '@/lib/section-styles';

interface SectionHeaderProps {
  title: string;
  titleId?: string;
  /** Optional label above the title — sentence case, never uppercase */
  eyebrow?: string;
  /** Accent color on eyebrow (e.g. Promises) */
  eyebrowAccent?: boolean;
  /** Optional supporting line under the title */
  subline?: string;
  className?: string;
}

/**
 * Canonical homepage / marketing section header.
 * Pattern: optional eyebrow → h2 (SECTION_HEADING) → optional subline (SECTION_SUBHEADING).
 * Always centered. Body content should follow with SECTION_CONTENT_MT.
 */
export default function SectionHeader({
  title,
  titleId,
  eyebrow,
  eyebrowAccent = false,
  subline,
  className,
}: SectionHeaderProps): React.JSX.Element {
  return (
    <div
      className={['mx-auto max-w-3xl text-center', className].filter(Boolean).join(' ')}
    >
      {eyebrow ? (
        <p
          className={[SECTION_EYEBROW, eyebrowAccent ? 'text-accent' : null]
            .filter(Boolean)
            .join(' ')}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[eyebrow ? 'mt-2' : null, SECTION_HEADING].filter(Boolean).join(' ')}
        id={titleId}
      >
        {title}
      </h2>
      {subline ? (
        <p className={`${SECTION_SUBHEADING} mx-auto max-w-2xl`}>{subline}</p>
      ) : null}
    </div>
  );
}
