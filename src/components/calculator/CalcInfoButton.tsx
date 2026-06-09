'use client';

import { useState, type MouseEvent } from 'react';
import { Info } from 'lucide-react';

import CalcInfoModal from '@/components/calculator/CalcInfoModal';
import type { CalculatorInfoContent } from '@/lib/calculator-info';

interface CalcInfoButtonProps {
  label: string;
  content: CalculatorInfoContent;
  className?: string;
}

export default function CalcInfoButton({ label, content, className }: CalcInfoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`Informationen: ${label}`}
        className={[
          'inline-flex size-7 shrink-0 items-center justify-center rounded-full text-[#c8c0b8] transition-colors hover:bg-bg hover:text-text-muted',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={handleOpen}
      >
        <Info aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
      </button>

      <CalcInfoModal content={content} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
