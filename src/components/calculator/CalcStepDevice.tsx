import { CircuitBoard, HardDrive, Server, Usb } from 'lucide-react';

import CalcOptionTile from '@/components/calculator/CalcOptionTile';
import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { calcTileIconClasses } from '@/components/calculator/calc-icon-colors';
import { DEVICE_OPTIONS } from '@/lib/calculator';
import { DEVICE_INFO } from '@/lib/calculator-info';
import type { DeviceKey } from '@/lib/constants';

const DEVICE_ICONS = {
  hdd: HardDrive,
  ssd: CircuitBoard,
  raid: Server,
  usb: Usb,
} as const;

interface CalcStepDeviceProps {
  selected: DeviceKey | null;
  onSelect: (device: DeviceKey) => void;
}

export default function CalcStepDevice({ selected, onSelect }: CalcStepDeviceProps) {
  return (
    <div role="group" aria-labelledby="calc-step-device">
      <CalcStepHeading id="calc-step-device">Welches Medium ist betroffen?</CalcStepHeading>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
        {DEVICE_OPTIONS.map((option) => {
          const Icon = DEVICE_ICONS[option.key];
          const isSelected = selected === option.key;

          return (
            <CalcOptionTile
              key={option.key}
              className="flex flex-col gap-3 p-5 md:p-6"
              infoContent={DEVICE_INFO[option.key]}
              infoLabel={option.label}
              isSelected={isSelected}
              onSelect={() => onSelect(option.key)}
            >
              <Icon
                aria-hidden="true"
                className={['size-6', calcTileIconClasses(isSelected, option.key)].join(' ')}
                strokeWidth={1.5}
              />
              <span className="pr-6 text-base font-medium">{option.label}</span>
            </CalcOptionTile>
          );
        })}
      </div>
    </div>
  );
}
