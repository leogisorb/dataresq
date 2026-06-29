import { ArrowRight } from 'lucide-react';
import HashLink from '@/components/navigation/HashLink';

import { CALCULATOR_SECTION_ID } from '@/lib/calculator-section';
import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';
import { BTN_FEATURE_CTA_TILE } from '@/lib/button-styles';
import { RESCUED_DATASETS } from '@/lib/team';

const statHeadlineClass =
  'text-[clamp(2rem,4vw,2.75rem)] font-bold leading-none tracking-tight';

const statCards = [
  {
    value: '92%',
    caption: 'Erfolgsquote bei Datenrettung',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d3b5e 45%, #0a6b5e 100%)',
    glowColor: 'rgba(52,211,153,0.18)',
  },
  {
    value: `${RESCUED_DATASETS}+`,
    caption: 'Gerettete Datensätze',
    gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b6e 45%, #1a3a9e 100%)',
    glowColor: 'rgba(129,140,248,0.18)',
  },
  {
    value: DIAGNOSIS_FEE_FORMATTED,
    caption: 'Analysepauschale — bei Beauftragung verrechnet',
    gradient: 'linear-gradient(135deg, #0a1f12 0%, #0d4a2a 45%, #0a5540 100%)',
    glowColor: 'rgba(16,185,129,0.18)',
  },
] as const;

export default function Features() {
  return (
    <section className="bg-bg-subtle py-20 md:py-28">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {statCards.map((card) => (
            <div
              key={card.caption}
              className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-5 md:min-h-[200px] md:rounded-3xl md:p-6"
              style={{ background: card.gradient }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 size-32 rounded-full md:size-40"
                style={{
                  background: `radial-gradient(circle, ${card.glowColor} 0%, transparent 70%)`,
                }}
              />
              <p className={`relative ${statHeadlineClass} text-bg-card`}>{card.value}</p>
              <p className="relative max-w-[16ch] text-sm leading-snug text-bg-card/55">
                {card.caption}
              </p>
            </div>
          ))}

          <HashLink
            href={`/#${CALCULATOR_SECTION_ID}`}
            className={`${BTN_FEATURE_CTA_TILE} min-h-[180px] md:min-h-[200px]`}
          >
            <p className={`${statHeadlineClass} max-w-[12ch] text-text`}>Kosten berechnen</p>
            <ArrowRight
              aria-hidden="true"
              className="size-[30px] text-text transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </HashLink>
        </div>
      </div>
    </section>
  );
}
