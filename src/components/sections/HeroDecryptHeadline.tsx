'use client';

import { useEffect, useState, type ReactElement } from 'react';

const HERO_LINES = ['Daten verloren.', 'Wir holen sie zurück.'] as const;
const HERO_LINE = HERO_LINES.join('\n');

const GLYPHS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*+?/<>@';

const TICK_MS = 39;
const REVEAL_STEP = 0.03;
const INITIAL_REVEALED = 0;

interface GlyphCell {
  char: string;
  resolved: boolean;
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

function renderCells(cells: GlyphCell[]): ReactElement[] {
  return cells.map((cell, index) => (
    <span
      key={index}
      className={cell.resolved ? 'text-text' : 'text-[#c7c7cc]'}
    >
      {cell.char}
    </span>
  ));
}

export default function HeroDecryptHeadline() {
  const [revealed, setRevealed] = useState(INITIAL_REVEALED);
  const [done, setDone] = useState(false);
  const total = HERO_LINE.replace('\n', '').length;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setRevealed(total);
      setDone(true);
      return;
    }

    let current = INITIAL_REVEALED;
    let rafId = 0;
    let lastTick = 0;

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
    <h1
      aria-label={HERO_LINES.join(' ')}
      className="mb-3 text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-text md:mb-6 md:text-6xl md:leading-[1.05] lg:text-7xl"
    >
      <span aria-hidden={!done} className="flex flex-col gap-0">
        {HERO_LINES.map((line) => {
          const lineStart = consumed;
          const lineLen = line.length;
          consumed += lineLen;
          const revealedInLine = Math.max(0, Math.min(lineLen, revealed - lineStart));
          const cells = scrambleLine(line, revealedInLine);

          return (
            <span key={line} className="block overflow-hidden whitespace-nowrap">
              {renderCells(cells)}
            </span>
          );
        })}
      </span>
    </h1>
  );
}
