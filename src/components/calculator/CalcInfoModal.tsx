'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

import type { CalculatorInfoContent } from '@/lib/calculator-info';

interface CalcInfoModalProps {
  content: CalculatorInfoContent;
  isOpen: boolean;
  onClose: () => void;
}

export default function CalcInfoModal({ content, isOpen, onClose }: CalcInfoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      return;
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="calc-info-title"
      className="calc-info-dialog m-auto w-[calc(100%-32px)] max-w-lg rounded-2xl border border-border bg-bg-card p-0 text-text shadow-lg backdrop:bg-black/40 open:flex open:flex-col"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
    >
      <div className="flex items-start justify-between gap-4 px-6 py-5">
        <h2 className="text-lg font-semibold tracking-tight text-text" id="calc-info-title">
          {content.title}
        </h2>
        <button
          type="button"
          aria-label="Schließen"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-bg hover:text-text"
          onClick={onClose}
        >
          <X aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="max-h-[min(70vh,560px)] overflow-y-auto px-6 py-5">
        <p className="text-sm leading-relaxed text-text-muted">{content.intro}</p>

        <div className="mt-6 flex flex-col gap-5">
          {content.sections.map((section) => (
            <div key={section.label}>
              <h3 className="text-sm font-semibold text-text">{section.label}</h3>
              {section.text && (
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{section.text}</p>
              )}
              {section.items && (
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text-muted">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {content.warning && (
          <div className="mt-6 rounded-xl border border-border bg-bg px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-text">Wichtig</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{content.warning}</p>
          </div>
        )}

        {content.note && (
          <div className="mt-6 rounded-xl border border-border bg-bg px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-text">Hinweis</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{content.note}</p>
          </div>
        )}
      </div>
    </dialog>
  );
}
