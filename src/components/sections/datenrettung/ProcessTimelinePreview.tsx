import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { CHEVRON_STEP_STYLES } from '@/lib/chevron-colors';
import { processSteps } from '@/lib/datenrettung-services';

const CLIP_CLASSES = [
  'chevron-clip-first',
  'chevron-clip-mid',
  'chevron-clip-mid',
  'chevron-clip-mid',
  'chevron-clip-mid',
  'chevron-clip-last',
] as const;

const Z_INDEX_CLASSES = ['z-[6]', 'z-[5]', 'z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'] as const;

export default function ProcessTimelinePreview() {
  return (
    <div className="overflow-visible">
      <div className="hidden overflow-visible md:block">
        <div
          aria-label="Prozess-Schritte Kurzüberblick"
          className="flex h-[44px] overflow-visible opacity-80"
          role="list"
        >
          {processSteps.map((step, index) => {
            const styles = CHEVRON_STEP_STYLES[index];
            const overlapClass = index === 0 ? '' : '-ml-[18px]';

            return (
              <div
                key={step.step}
                aria-label={`Schritt ${step.step}: ${step.title}`}
                className={[
                  'chevron-segment relative flex h-[44px] flex-1 items-center justify-center',
                  overlapClass,
                  CLIP_CLASSES[index],
                  Z_INDEX_CLASSES[index],
                  styles.bg,
                  styles.text,
                ].join(' ')}
                role="listitem"
              >
                <span className="select-none text-xs font-semibold">{step.step}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-6 gap-2">
          {processSteps.map((step) => (
            <p
              key={step.step}
              className="text-center text-[10px] leading-tight text-text-muted lg:text-[11px]"
            >
              {step.title}
            </p>
          ))}
        </div>
      </div>

      <ol
        aria-label="Prozess-Schritte Kurzüberblick"
        className="flex flex-col gap-3 md:hidden"
      >
        {processSteps.map((step, index) => {
          const styles = CHEVRON_STEP_STYLES[index];

          return (
            <li key={step.step} className="flex items-start gap-3">
              <div
                aria-hidden="true"
                className={[
                  'flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold opacity-80',
                  styles.bg,
                  styles.text,
                ].join(' ')}
              >
                {step.step}
              </div>
              <p className="text-sm leading-snug text-text-muted">{step.title}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-8">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-neon transition-opacity hover:opacity-80"
          href="/datenrettung"
        >
          So funktioniert es im Detail
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
