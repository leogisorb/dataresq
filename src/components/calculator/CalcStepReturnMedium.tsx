import { Download, HardDrive, Layers } from 'lucide-react';

import CalcOptionTile from '@/components/calculator/CalcOptionTile';
import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { calcTileIconClasses } from '@/components/calculator/calc-icon-colors';
import { RETURN_MEDIUM_OPTIONS } from '@/lib/calculator';
import type { ReturnMediumKey } from '@/lib/constants';

const RETURN_MEDIUM_ICONS = {
  new: HardDrive,
  download: Download,
  both: Layers,
} as const;

interface CalcStepReturnMediumProps {
  selected: ReturnMediumKey | null;
  onSelect: (returnMedium: ReturnMediumKey) => void;
}

export default function CalcStepReturnMedium({
  selected,
  onSelect,
}: CalcStepReturnMediumProps) {
  return (
    <div role="group" aria-labelledby="calc-step-return-medium">
      <CalcStepHeading id="calc-step-return-medium">
        Wie möchten Sie Ihre Daten erhalten?
      </CalcStepHeading>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {RETURN_MEDIUM_OPTIONS.map((option) => {
          const Icon = RETURN_MEDIUM_ICONS[option.key];
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
              <span className="text-sm text-text-dim">{option.hint}</span>
            </CalcOptionTile>
          );
        })}
      </div>
    </div>
  );
}
