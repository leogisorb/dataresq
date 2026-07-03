'use client';

import { useEffect, useRef, useState } from 'react';

import { CHEVRON_STEP_STYLES } from '@/lib/chevron-colors';
import { processSteps } from '@/lib/datenrettung-services';

const STEP_STYLES = CHEVRON_STEP_STYLES;

const MOBILE_STEP_DELAY_CLASSES = [
  'timeline-mobile-step-0',
  'timeline-mobile-step-1',
  'timeline-mobile-step-2',
  'timeline-mobile-step-3',
  'timeline-mobile-step-4',
  'timeline-mobile-step-5',
] as const;

export default function ProcessTimelineMobile() {
  const listRef = useRef<HTMLOListElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={listRef}
      aria-label="Prozess-Schritte"
      className={[
        'flex flex-col gap-4 md:hidden',
        inView ? 'timeline-mobile-in-view' : '',
      ].join(' ')}
    >
      {processSteps.map((step, index) => {
        const styles = STEP_STYLES[index];

        return (
          <li
            key={step.step}
            className={[
              'timeline-mobile-step flex items-start gap-4',
              MOBILE_STEP_DELAY_CLASSES[index],
            ].join(' ')}
          >
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
  );
}
