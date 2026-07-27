'use client';

import { useEffect, useRef } from 'react';

import { buildRsqLogoMask } from '@/lib/ascii-logo-mask';
import { sampleAsciiShape, type AsciiShapeId } from '@/lib/ascii-shapes';

interface DataRecoveryBackgroundProps {
  shape: AsciiShapeId;
  className?: string;
}

const ASCII_RAMP = ' .:-=+*#%@' as const;
const CORRUPT_RAMP = ' .:;+*?%#@Xx0?' as const;
/** Larger cells → fewer glyphs → smoother frame times */
const CELL_W = 11;
const CELL_H = 15;
const POINTER_RADIUS = 120;
const POINTER_PUSH = 20;
/** Cap ASCII redraws — full-grid fillText is expensive */
const FRAME_MS = 1000 / 24;
/** Heal wave across full hero width; 50% slower than original 0.18 */
const WAVE_SPEED = 0.09;
/** Soft boost band at wave front (only where shape glyphs already exist) */
const WAVE_FRONT = 0.04;

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n));
}

function pickRamp(ramp: string, density: number): string {
  const i = Math.min(ramp.length - 1, Math.floor(clamp01(density) * (ramp.length - 1)));
  return ramp[i] ?? ' ';
}

function hash2(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export default function DataRecoveryBackground({
  shape,
  className,
}: DataRecoveryBackgroundProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapeRef = useRef<AsciiShapeId>(shape);
  shapeRef.current = shape;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) {
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) {
      return;
    }

    const host = container.parentElement ?? container;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let logoMask: Float32Array = new Float32Array(0);
    /** Baked density/corrupt for static-ish shapes (folder) */
    let bakedDensity: Float32Array = new Float32Array(0);
    let bakedCorrupt: Uint8Array = new Uint8Array(0);
    let bakeShape: AsciiShapeId | null = null;
    let bakeTimeBucket = -1;

    let rafId = 0;
    let disposed = false;
    const start = performance.now();
    let lastDraw = 0;

    let targetX = -9999;
    let targetY = -9999;
    let pointerX = -9999;
    let pointerY = -9999;
    let pointerActive = false;

    const aspectOf = (): number => width / Math.max(height, 1);

    const bakeField = (activeShape: AsciiShapeId, t: number): void => {
      const aspect = aspectOf();
      const len = cols * rows;
      if (bakedDensity.length !== len) {
        bakedDensity = new Float32Array(len);
        bakedCorrupt = new Uint8Array(len);
      }

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const i = r * cols + c;
          if (activeShape === 'logo') {
            const base = logoMask[i] ?? 0;
            bakedDensity[i] = base;
            bakedCorrupt[i] = 0;
            continue;
          }

          const nx = c / Math.max(cols - 1, 1);
          const ny = r / Math.max(rows - 1, 1);
          const ux = (nx - 0.5) * 2 * Math.max(aspect, 1) * 0.95;
          const uy = (ny - 0.5) * 2 * Math.max(1 / aspect, 1) * 0.95;
          const sample = sampleAsciiShape(activeShape, ux, uy, t);
          bakedDensity[i] = sample.density;
          bakedCorrupt[i] = sample.corrupt ? 1 : 0;
        }
      }

      bakeShape = activeShape;
      bakeTimeBucket = Math.floor(t * 4);
    };

    const resize = (): void => {
      const nextW = container.clientWidth;
      const nextH = container.clientHeight;
      if (nextW < 2 || nextH < 2) {
        return;
      }

      width = nextW;
      height = nextH;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL_W);
      rows = Math.ceil(height / CELL_H);
      logoMask = buildRsqLogoMask(cols, rows);
      bakeShape = null;
      bakeTimeBucket = -1;
    };

    const draw = (now: number): void => {
      if (cols < 2 || rows < 2) {
        return;
      }

      const t = reducedMotion ? 0 : (now - start) / 1000;
      const activeShape = shapeRef.current;
      const timeBucket = Math.floor(t * 4);

      // Re-bake when shape changes, or slowly for animated shapes
      const needsBake =
        bakeShape !== activeShape ||
        (activeShape !== 'logo' && bakeTimeBucket !== timeBucket) ||
        (activeShape === 'logo' && bakeTimeBucket !== timeBucket);

      if (needsBake) {
        bakeField(activeShape, t);
      }

      if (pointerActive) {
        pointerX += (targetX - pointerX) * 0.28;
        pointerY += (targetY - pointerY) * 0.28;
      } else if (pointerX > -5000) {
        pointerX += (-9999 - pointerX) * 0.12;
        pointerY += (-9999 - pointerY) * 0.12;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.font = `600 ${CELL_H - 2}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const pointerOn = pointerX > -5000;
      const isFolder = activeShape === 'folder';
      const isLogo = activeShape === 'logo';
      // Pixel-based: true hero left edge (0) → right edge (1)
      const waveX = reducedMotion ? 1 : (t * WAVE_SPEED) % 1;

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const i = r * cols + c;
          let density = bakedDensity[i] ?? 0;

          let x = c * CELL_W + CELL_W / 2;
          let y = r * CELL_H + CELL_H / 2;
          // Normalized by full canvas/hero width — not shape bounds
          const nx = width > 0 ? x / width : 0;
          if (density < (isLogo ? 0.04 : 0.06)) {
            continue;
          }

          const distToWave = Math.abs(nx - waveX);
          const atFront = !reducedMotion && distToWave < WAVE_FRONT;
          // Left of front = healed; right = still corrupt
          const corrupt = nx > waveX;

          if (isLogo) {
            density = clamp01(density * (corrupt ? 0.78 : 0.96));
          }

          let d = density;
          if (atFront) {
            d = clamp01(d + 0.28);
          }

          if (!reducedMotion && !isFolder && !isLogo && corrupt) {
            const morph = hash2(c + Math.floor(t * 10), r);
            d = clamp01(d * 0.88 + morph * 0.18);
          }

          let ch = pickRamp(
            atFront || corrupt ? CORRUPT_RAMP : ASCII_RAMP,
            d,
          );
          if (ch === ' ') {
            continue;
          }

          let opacity = isLogo || isFolder ? 0.3 + d * 0.52 : 0.18 + d * 0.42;

          if (atFront) {
            opacity = Math.min(1, opacity + 0.12);
          }

          if (pointerOn) {
            const vx = x - pointerX;
            const vy = y - pointerY;
            const dist = Math.hypot(vx, vy);
            if (dist < POINTER_RADIUS) {
              const force = clamp01(1 - dist / POINTER_RADIUS);
              const f2 = force * force;
              if (!reducedMotion && dist > 0.001) {
                x += (vx / dist) * POINTER_PUSH * f2;
                y += (vy / dist) * POINTER_PUSH * f2;
              }
              d = clamp01(d + f2 * 0.5);
              ch = pickRamp(corrupt ? CORRUPT_RAMP : ASCII_RAMP, Math.max(d, 0.7 * f2));
              opacity = Math.min(1, opacity * (1 - f2) + 0.95 * f2);
            }
          }

          ctx.fillStyle = `rgba(17, 17, 17, ${opacity.toFixed(3)})`;
          ctx.fillText(ch, x, y);
        }
      }
    };

    const tick = (now: number): void => {
      if (disposed) {
        return;
      }
      if (now - lastDraw >= FRAME_MS) {
        lastDraw = now;
        draw(now);
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent): void => {
      const rect = container.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      pointerActive = true;
    };

    const onPointerLeave = (): void => {
      pointerActive = false;
    };

    resize();
    draw(performance.now());
    rafId = window.requestAnimationFrame(tick);

    host.addEventListener('pointermove', onPointerMove, { passive: true });
    host.addEventListener('pointerleave', onPointerLeave);

    const observer = new ResizeObserver(() => {
      resize();
      lastDraw = 0;
    });
    observer.observe(container);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  // Full hero width stays opaque (wave must reach both edges).
  // Soft center hole for copy; top/bottom fade only — no left/right clip.
  const maskClass =
    shape === 'logo' || shape === 'folder'
      ? '[mask-image:radial-gradient(ellipse_55%_42%_at_50%_44%,transparent_0%,transparent_35%,black_68%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_55%_42%_at_50%_44%,transparent_0%,transparent_35%,black_68%,black_100%)]'
      : '[mask-image:radial-gradient(ellipse_40%_48%_at_50%_44%,transparent_0%,transparent_32%,black_70%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_40%_48%_at_50%_44%,transparent_0%,transparent_32%,black_70%,black_100%)]';

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={[
        'pointer-events-none absolute inset-0 z-0 overflow-hidden',
        maskClass,
        className ?? '',
      ].join(' ')}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
