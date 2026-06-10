import { MapPin } from 'lucide-react';
import Link from 'next/link';

import { CHEVRON_STEP_STYLES } from '@/lib/chevron-colors';
import { SITE } from '@/lib/constants';
import { processSteps } from '@/lib/datenrettung-services';

const STEP_STYLES = CHEVRON_STEP_STYLES;

const CLIP_CLASSES = ['chevron-clip-first', 'chevron-clip-mid', 'chevron-clip-mid', 'chevron-clip-mid', 'chevron-clip-mid', 'chevron-clip-last'] as const;

const Z_INDEX_CLASSES = ['z-[6]', 'z-[5]', 'z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'] as const;

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.address.street} ${SITE.address.zip} ${SITE.address.city} Deutschland`,
)}`;

function StepLabelAbove({
  step,
  title,
  tickClass,
}: {
  step: number;
  title: string;
  tickClass: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold leading-none tabular-nums text-text">
        {step}
      </p>
      <p className="mt-1 max-w-[100px] text-center text-[11px] leading-tight text-text-muted">
        {title}
      </p>
      <div aria-hidden="true" className={`mt-2 h-[18px] w-px opacity-70 ${tickClass}`} />
    </div>
  );
}

function StepLabelBelow({
  step,
  title,
  tickClass,
}: {
  step: number;
  title: string;
  tickClass: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div aria-hidden="true" className={`h-[18px] w-px opacity-70 ${tickClass}`} />
      <p className="mt-1 text-[clamp(1rem,1.5vw,1.25rem)] font-semibold leading-none tabular-nums text-text">
        {step}
      </p>
      <p className="mt-1 max-w-[100px] text-center text-[11px] leading-tight text-text-muted">
        {title}
      </p>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <div className="overflow-visible">
      <div className="hidden overflow-visible md:block">
        <div className="flex overflow-visible">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex min-w-0 flex-1 flex-col items-center justify-end">
              {step.step % 2 !== 0 ? (
                <StepLabelAbove
                  step={step.step}
                  tickClass={STEP_STYLES[index].tick}
                  title={step.title}
                />
              ) : (
                <div aria-hidden="true" className="h-[72px]" />
              )}
            </div>
          ))}
        </div>

        <div
          aria-label="Prozess-Schritte"
          className="flex h-[60px] overflow-visible"
          role="list"
        >
          {processSteps.map((step, index) => {
            const styles = STEP_STYLES[index];
            const overlapClass = index === 0 ? '' : '-ml-[22px]';

            return (
              <div
                key={step.step}
                aria-label={`Schritt ${step.step}: ${step.title}`}
                className={[
                  'chevron-segment relative flex h-[60px] flex-1 items-center justify-center',
                  overlapClass,
                  CLIP_CLASSES[index],
                  Z_INDEX_CLASSES[index],
                  styles.bg,
                  styles.text,
                ].join(' ')}
                role="listitem"
              >
                <span className="select-none text-sm font-semibold">{step.step}</span>
              </div>
            );
          })}
        </div>

        <div className="flex overflow-visible">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex min-w-0 flex-1 flex-col items-center">
              {step.step % 2 === 0 ? (
                <StepLabelBelow
                  step={step.step}
                  tickClass={STEP_STYLES[index].tick}
                  title={step.title}
                />
              ) : (
                <div aria-hidden="true" className="h-[72px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <ol aria-label="Prozess-Schritte" className="flex flex-col gap-4 md:hidden">
        {processSteps.map((step, index) => {
          const styles = STEP_STYLES[index];

          return (
            <li key={step.step} className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className={[
                  'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
                  styles.bg,
                  styles.text,
                ].join(' ')}
              >
                {step.step}
              </div>
              <div>
                <p className="text-sm font-semibold text-text">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-10">
        <Link
          className="inline-flex items-center gap-2.5 text-base font-semibold text-text transition-opacity duration-150 hover:opacity-70"
          href={mapsUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MapPin aria-hidden="true" className="size-4" strokeWidth={2.25} />
          Unsere Abgabestellen in NRW auf Google Maps ansehen
        </Link>
      </div>
    </div>
  );
}
