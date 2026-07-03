import type { ReactElement } from 'react';

import type { MediumDetailContent } from '@/lib/datenrettung-medium-content';
import { SECTION_PADDING } from '@/lib/section-styles';

interface MediumDetailSectionsProps {
  title: string;
  content: MediumDetailContent;
}

export default function MediumDetailSections({
  title,
  content,
}: MediumDetailSectionsProps): ReactElement {
  return (
    <section className={`${SECTION_PADDING} bg-bg`}>
      <div className="site-container max-w-3xl">
        <p className="text-base leading-relaxed text-text-muted md:text-lg">{content.intro}</p>

        <h2 className="mt-10 text-xl font-semibold text-text md:text-2xl">
          Typische Symptome bei {title}
        </h2>
        <ul className="mt-4 space-y-2">
          {content.symptoms.map((symptom) => (
            <li key={symptom} className="flex items-start gap-3 text-sm leading-relaxed text-text-muted md:text-base">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              />
              {symptom}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-text md:text-2xl">Unser Vorgehen</h2>
        <ol className="mt-4 space-y-3">
          {content.approach.map((step, index) => (
            <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-text-muted md:text-base">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-subtle text-xs font-semibold text-text">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
