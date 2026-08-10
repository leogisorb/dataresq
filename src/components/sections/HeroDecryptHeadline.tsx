'use client';

import { useEffect, useState, type ReactElement } from 'react';

const DEFAULT_LINES = ['Daten verloren.', 'Wir holen sie zurück.'] as const;

const GLYPHS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*+?/<>@';

const TICK_MS = 39;
const REVEAL_STEP = 0.03;

interface GlyphCell {
  char: string;
  resolved: boolean;
}

interface HeroDecryptHeadlineProps {
  lines?: readonly string[];
  className?: string;
  /** Classes for each resolved line (index-aligned) */
  resolvedLineClassNames?: readonly string[];
  scrambledClassName?: string;
}

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? '#';
}

function scrambleLine(target: string, revealedInLine: number): GlyphCell[] {
  return Array.from(target, (char, index) => {
    if (char === ' ' || char === '.') {
      return { char, resolved: true };
    }
    if (index < revealedInLine) {
      return { char, resolved: true };
    }
    return { char: randomGlyph(), resolved: false };
  });
}

function renderCells(
  cells: GlyphCell[],
  resolvedClassName: string,
  scrambledClassName: string,
): ReactElement[] {
  return cells.map((cell, index) => (
    <span
      key={index}
      className={cell.resolved ? resolvedClassName : scrambledClassName}
    >
      {cell.char}
    </span>
  ));
}

export default function HeroDecryptHeadline({
  lines = DEFAULT_LINES,
  className = 'mb-3 text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-text md:mb-6 md:text-6xl md:leading-[1.05] lg:text-7xl',
  resolvedLineClassNames,
  scrambledClassName = 'text-[#c7c7cc]',
}: HeroDecryptHeadlineProps): React.JSX.Element {
  const joined = lines.join('');
  const total = joined.length;
  /** SSR + first paint: full text (avoids scrambled H1 for crawlers) */
  const [revealed, setRevealed] = useState(total);
  const [done, setDone] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setRevealed(total);
      setDone(true);
      return;
    }

    let current = 0;
    let rafId = 0;
    let lastTick = 0;

    setRevealed(0);
    setDone(false);

    const frame = (now: number): void => {
      if (now - lastTick < TICK_MS) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      lastTick = now;
      current = Math.min(total, current + Math.max(1, Math.round(REVEAL_STEP * total)));
      setRevealed(current);

      if (current < total) {
        rafId = requestAnimationFrame(frame);
      } else {
        setDone(true);
      }
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [total]);

  let consumed = 0;

  return (
    <h1 aria-label={lines.join(' ')} className={className}>
      <span aria-hidden={!done} className="flex flex-col gap-0">
        {lines.map((line, lineIndex) => {
          const lineLen = line.length;
          const revealedInLine = Math.max(0, Math.min(lineLen, revealed - consumed));
          consumed += lineLen;
          const cells = scrambleLine(line, revealedInLine);
          const resolvedClass =
            resolvedLineClassNames?.[lineIndex] ?? 'text-text';

          return (
            <span key={`${lineIndex}-${line}`} className="block overflow-hidden whitespace-nowrap">
              {renderCells(cells, resolvedClass, scrambledClassName)}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
