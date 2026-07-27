import type { Location } from '@/lib/locations';

import StandortLocationCard from '@/components/standort/StandortLocationCard';

interface StandortStackProps {
  locations: Location[];
  className?: string;
}

/**
 * Sticky deck offsets — each next card sticks slightly lower so previous
 * tops stay visible. All cards end up in one stacked block.
 */
const STACK_TOP = [
  'top-[calc(var(--site-header-height)+1rem)]',
  'top-[calc(var(--site-header-height)+1rem+3rem)]',
  'top-[calc(var(--site-header-height)+1rem+6rem)]',
  'top-[calc(var(--site-header-height)+1rem+9rem)]',
  'top-[calc(var(--site-header-height)+1rem+12rem)]',
] as const;

const STACK_Z = ['z-10', 'z-20', 'z-30', 'z-40', 'z-50'] as const;

export default function StandortStack({
  locations,
  className,
}: StandortStackProps): React.JSX.Element {
  return (
    <div
      className={[
        /* Tall enough for every card to scroll into the shared sticky deck */
        'relative isolate',
        className ?? '',
      ].join(' ')}
    >
      {locations.map((location, index) => {
        const topClass = STACK_TOP[Math.min(index, STACK_TOP.length - 1)] ?? STACK_TOP[0];
        const zClass = STACK_Z[Math.min(index, STACK_Z.length - 1)] ?? STACK_Z[0];

        return (
          <StandortLocationCard
            key={location.slug}
            className={[
              'sticky mb-16 last:mb-0 md:mb-24',
              /* Shared deck height — later cards cover earlier ones, leaving peek strips */
              'h-[min(72dvh,38rem)]',
              topClass,
              zClass,
            ].join(' ')}
            index={index}
            location={location}
            total={locations.length}
          />
        );
      })}
    </div>
  );
}
