import { MapPin } from 'lucide-react';
import Link from 'next/link';

import ProcessTimelineMobile from '@/components/sections/datenrettung/ProcessTimelineMobile';
import { CHEVRON_STEP_STYLES } from '@/lib/chevron-colors';
import { processSteps } from '@/lib/datenrettung-services';

const STEP_STYLES = CHEVRON_STEP_STYLES;

const CLIP_CLASSES = ['chevron-clip-first', 'chevron-clip-mid', 'chevron-clip-mid', 'chevron-clip-mid', 'chevron-clip-mid', 'chevron-clip-last'] as const;

const Z_INDEX_CLASSES = ['z-[6]', 'z-[5]', 'z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'] as const;

const WAVE_STEP_CLASSES = [
  'timeline-wave-step-0',
  'timeline-wave-step-1',
  'timeline-wave-step-2',
  'timeline-wave-step-3',
  'timeline-wave-step-4',
  'timeline-wave-step-5',
] as const;

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
          {processSteps.map((step, index) => {
            const waveClass =
              step.step % 2 !== 0
                ? ['timeline-wave-up', WAVE_STEP_CLASSES[index]].join(' ')
                : '';

            return (
              <div key={step.step} className="flex min-w-0 flex-1 flex-col items-center justify-end">
                {step.step % 2 !== 0 ? (
                  <div className={waveClass}>
                    <StepLabelAbove
                      step={step.step}
                      tickClass={STEP_STYLES[index].tick}
                      title={step.title}
                    />
                  </div>
                ) : (
                  <div aria-hidden="true" className="h-[72px]" />
                )}
              </div>
            );
          })}
        </div>

        <div
          aria-label="Prozess-Schritte"
          className="flex h-[60px] overflow-visible"
          role="list"
        >
          {processSteps.map((step, index) => {
            const styles = STEP_STYLES[index];
            const overlapClass = index === 0 ? '' : '-ml-[22px]';

            const waveClass = [
              step.step % 2 !== 0 ? 'timeline-wave-up' : 'timeline-wave-down',
              WAVE_STEP_CLASSES[index],
            ].join(' ');

            return (
              <div
                key={step.step}
                aria-label={`Schritt ${step.step}: ${step.title}`}
                className={['relative min-w-0 flex-1', overlapClass, waveClass].join(' ')}
                role="listitem"
              >
                <div
                  className={[
                    'chevron-segment relative flex h-[60px] items-center justify-center',
                    CLIP_CLASSES[index],
                    Z_INDEX_CLASSES[index],
                    styles.bg,
                    styles.text,
                  ].join(' ')}
                >
                  <span className="select-none text-sm font-semibold">{step.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex overflow-visible">
          {processSteps.map((step, index) => {
            const waveClass =
              step.step % 2 === 0
                ? ['timeline-wave-down', WAVE_STEP_CLASSES[index]].join(' ')
                : '';

            return (
              <div key={step.step} className="flex min-w-0 flex-1 flex-col items-center">
                {step.step % 2 === 0 ? (
                  <div className={waveClass}>
                    <StepLabelBelow
                      step={step.step}
                      tickClass={STEP_STYLES[index].tick}
                      title={step.title}
                    />
                  </div>
                ) : (
                  <div aria-hidden="true" className="h-[72px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ProcessTimelineMobile />

      <div className="mt-10">
        <Link
          className="inline-flex items-center gap-2.5 text-base font-semibold text-text transition-opacity duration-150 hover:opacity-70"
          href="/standort"
        >
          <MapPin aria-hidden="true" className="size-4" strokeWidth={2.25} />
          Abgabestelle finden
        </Link>
      </div>
    </div>
  );
}
