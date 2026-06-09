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
  children: ReactNode;
}

export default function CalcOptionTile({
  infoLabel,
  infoContent,
  isSelected,
  onSelect,
  className,
  children,
}: CalcOptionTileProps) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-pressed={isSelected}
        className={[calcTileClasses(isSelected), 'w-full', className].filter(Boolean).join(' ')}
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
