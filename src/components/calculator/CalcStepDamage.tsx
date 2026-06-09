import { AlertTriangle, Cpu, Droplets, Lock, Trash2, Wrench } from 'lucide-react';

import CalcOptionTile from '@/components/calculator/CalcOptionTile';
import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { calcTileIconClasses } from '@/components/calculator/calc-icon-colors';
import { DAMAGE_OPTIONS } from '@/lib/calculator';
import { DAMAGE_INFO } from '@/lib/calculator-info';
import type { DamageKey } from '@/lib/constants';

const DAMAGE_ICONS = {
  del: Trash2,
  mech: Wrench,
  water: Droplets,
  ctrl: Cpu,
  enc: Lock,
  crash: AlertTriangle,
} as const;

interface CalcStepDamageProps {
  selected: DamageKey | null;
  onSelect: (damage: DamageKey) => void;
}

export default function CalcStepDamage({ selected, onSelect }: CalcStepDamageProps) {
  return (
    <div role="group" aria-labelledby="calc-step-damage">
      <CalcStepHeading id="calc-step-damage">Was ist passiert?</CalcStepHeading>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
        {DAMAGE_OPTIONS.map((option) => {
          const Icon = DAMAGE_ICONS[option.key];
          const isSelected = selected === option.key;

          return (
            <CalcOptionTile
              key={option.key}
              className="flex flex-col gap-2 p-5 md:p-6"
              infoContent={DAMAGE_INFO[option.key]}
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
