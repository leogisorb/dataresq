import { Clock, Siren } from 'lucide-react';

import CalcOptionTile from '@/components/calculator/CalcOptionTile';
import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { calcTileIconClasses } from '@/components/calculator/calc-icon-colors';
import { URGENCY_OPTIONS } from '@/lib/calculator';
import type { UrgencyKey } from '@/lib/constants';

const URGENCY_ICONS = {
  std: Clock,
  now: Siren,
} as const;

interface CalcStepUrgencyProps {
  selected: UrgencyKey | null;
  onSelect: (urgency: UrgencyKey) => void;
}

export default function CalcStepUrgency({ selected, onSelect }: CalcStepUrgencyProps) {
  return (
    <div role="group" aria-labelledby="calc-step-urgency">
      <CalcStepHeading id="calc-step-urgency">Wie dringend ist Ihr Fall?</CalcStepHeading>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
        {URGENCY_OPTIONS.map((option) => {
          const Icon = URGENCY_ICONS[option.key];
          const isSelected = selected === option.key;

          return (
            <CalcOptionTile
              key={option.key}
              className="flex flex-col gap-2 p-5 md:p-6"
              infoLabel={option.label}
              isSelected={isSelected}
              onSelect={() => onSelect(option.key)}
            >
              <Icon
                aria-hidden="true"
                className={['size-5', calcTileIconClasses(isSelected, option.key)].join(' ')}
                strokeWidth={1.5}
              />
              <span className="pr-6 text-base font-medium">{option.label}</span>
              <span className="text-sm text-text-dim">{option.duration}</span>
            </CalcOptionTile>
          );
        })}
      </div>
    </div>
  );
}
