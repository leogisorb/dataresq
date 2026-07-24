import {
  AlertTriangle,
  ArrowDown,
  CircuitBoard,
  Cpu,
  Droplets,
  HelpCircle,
  Lock,
  Monitor,
  Smartphone,
  Trash2,
  Wrench,
  Zap,
} from 'lucide-react';

import CalcOptionTile from '@/components/calculator/CalcOptionTile';
import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { calcTileIconClasses } from '@/components/calculator/calc-icon-colors';
import { getDamageOptionsForDevice } from '@/lib/calculator';
import { getDamageInfo } from '@/lib/calculator-info';
import type { DamageKey, DeviceKey } from '@/lib/constants';

const DEFAULT_DAMAGE_ICONS = {
  del: Trash2,
  mech: Wrench,
  water: Droplets,
  ctrl: Cpu,
  enc: Lock,
  crash: AlertTriangle,
  unknown: HelpCircle,
} as const;

const MOBILE_DAMAGE_ICONS = {
  del: Trash2,
  mech: ArrowDown,
  water: Droplets,
  ctrl: Zap,
  enc: Lock,
  crash: Smartphone,
  unknown: HelpCircle,
} as const;

const NOTEBOOK_DAMAGE_ICONS = {
  del: Trash2,
  mech: ArrowDown,
  water: Droplets,
  ctrl: CircuitBoard,
  enc: Lock,
  crash: Monitor,
  unknown: HelpCircle,
} as const;

function getDamageIcon(device: DeviceKey | null, key: DamageKey) {
  if (device === 'smartphone') return MOBILE_DAMAGE_ICONS[key];
  if (device === 'notebook') return NOTEBOOK_DAMAGE_ICONS[key];
  return DEFAULT_DAMAGE_ICONS[key];
}

interface CalcStepDamageProps {
  device: DeviceKey | null;
  selected: DamageKey | null;
  onSelect: (damage: DamageKey) => void;
}

export default function CalcStepDamage({ device, selected, onSelect }: CalcStepDamageProps) {
  const options = getDamageOptionsForDevice(device);

  return (
    <div role="group" aria-labelledby="calc-step-damage">
      <CalcStepHeading id="calc-step-damage">Was ist passiert?</CalcStepHeading>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
        {options.map((option) => {
          const Icon = getDamageIcon(device, option.key);
          const isSelected = selected === option.key;

          return (
            <CalcOptionTile
              key={option.key}
              className="flex flex-col gap-2 p-5 md:p-6"
              infoContent={getDamageInfo(device, option.key)}
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
