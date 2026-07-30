'use client';

import { useEffect, useRef, useState, type ReactElement } from 'react';

const GLYPHS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*+?/<>@';

const TICK_MS = 39;
const REVEAL_STEP = 0.03;

interface GlyphCell {
  char: string;
  resolved: boolean;
}

interface DecryptTextProps {
  text: string;
  className?: string;
  resolvedClassName?: string;
  scrambledClassName?: string;
  /** Stagger before animation starts (ms) */
  delayMs?: number;
  /** Start when element enters the viewport */
  startOnView?: boolean;
}

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? '#';
}

function scrambleLine(target: string, revealedCount: number): GlyphCell[] {
  return Array.from(target, (char, index) => {
    if (char === ' ' || char === '.' || char === '-') {
      return { char, resolved: true };
    }
    if (index < revealedCount) {
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

export default function DecryptText({
  text,
  className = '',
  resolvedClassName = 'text-white',
  scrambledClassName = 'text-white/40',
  delayMs = 0,
  startOnView = true,
}: DecryptTextProps): React.JSX.Element {
  const rootRef = useRef<HTMLSpanElement>(null);
  /** SSR + first paint: full text (avoids Math.random hydration mismatch) */
  const [revealed, setRevealed] = useState(text.length);
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(!startOnView);
  const total = text.length;

  useEffect(() => {
    if (!startOnView) return;
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!active) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setRevealed(total);
      setDone(true);
      return;
    }

    let current = 0;
    let rafId = 0;
    let lastTick = 0;
    let delayDone = false;
    const delayUntil = performance.now() + delayMs;

    setRevealed(0);
    setDone(false);

    const frame = (now: number): void => {
      if (!delayDone) {
        if (now < delayUntil) {
          rafId = requestAnimationFrame(frame);
          return;
        }
        delayDone = true;
        lastTick = now;
      }
      if (now - lastTick < TICK_MS) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      lastTick = now;
      current = Math.min(
        total,
        current + Math.max(1, Math.round(REVEAL_STEP * total)),
      );
      setRevealed(current);

      if (current < total) {
        rafId = requestAnimationFrame(frame);
      } else {
        setDone(true);
      }
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [active, delayMs, total]);

  const cells = scrambleLine(text, revealed);

  return (
    <span ref={rootRef} aria-label={text} className={className}>
      <span aria-hidden={!done}>
        {renderCells(cells, resolvedClassName, scrambledClassName)}
      </span>
    </span>
  );
}
