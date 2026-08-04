'use client';

import type { ReactNode } from 'react';

import CalcInfoButton from '@/components/calculator/CalcInfoButton';
import { calcTileClasses } from '@/components/calculator/calc-tile-styles';
import type { CalculatorInfoContent } from '@/lib/calculator-info';

interface CalcOptionTileProps {
  infoLabel: string;
  infoContent?: CalculatorInfoContent;
  isSelected: boolean;
  onSelect: () => void;
  className?: string;
  role?: 'radio' | undefined;
  children: ReactNode;
}

export default function CalcOptionTile({
  infoLabel,
  infoContent,
  isSelected,
  onSelect,
  className,
  role,
  children,
}: CalcOptionTileProps): React.JSX.Element {
  return (
    <div className="relative h-full">
      <button
        type="button"
        aria-checked={role === 'radio' ? isSelected : undefined}
        aria-pressed={role === 'radio' ? undefined : isSelected}
        className={[calcTileClasses(isSelected), 'h-full w-full', className].filter(Boolean).join(' ')}
        role={role}
        onClick={onSelect}
      >
        {children}
      </button>
      {infoContent && (
        <CalcInfoButton
          className="absolute top-2.5 right-2.5 z-10"
          content={infoContent}
          label={infoLabel}
        />
      )}
    </div>
  );
}
