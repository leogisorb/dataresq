export const ASCII_SHAPES = [
  { id: 'platter', label: 'Festplatte', hint: 'Konzentrische Ringe / Sektoren' },
  { id: 'chip', label: 'Chip / SSD', hint: 'Die mit Pins & Raster' },
  { id: 'shield', label: 'Schild + Haken', hint: 'Trust / No-Cure-No-Pay' },
  { id: 'magnifier', label: 'Lupe', hint: 'Analyse über Sektoren' },
  { id: 'waveform', label: 'Wellenform', hint: 'Noise → saubere Sinuswelle' },
  { id: 'folder', label: 'Ordner', hint: 'Klare Folder-Silhouette mit Dokument' },
  { id: 'logo', label: 'RSQDATA Logo', hint: 'Echte Wortmarke → ASCII (Heal-Welle)' },
  { id: 'progress', label: 'Sector-Ring', hint: 'Kreis-Progress um die Mitte' },
] as const;

export type AsciiShapeId = (typeof ASCII_SHAPES)[number]['id'];

export interface AsciiSample {
  density: number;
  corrupt: boolean;
}

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n));
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function hash2(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function noise2(x: number, y: number): number {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const xf = x - x0;
  const yf = y - y0;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(x0, y0);
  const b = hash2(x0 + 1, y0);
  const c = hash2(x0, y0 + 1);
  const d = hash2(x0 + 1, y0 + 1);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

function ring(dist: number, radius: number, thickness: number): number {
  return 1 - smoothstep(0, thickness, Math.abs(dist - radius));
}

function box(ux: number, uy: number, halfW: number, halfH: number): number {
  const dx = Math.abs(ux) - halfW;
  const dy = Math.abs(uy) - halfH;
  const outside = Math.hypot(Math.max(dx, 0), Math.max(dy, 0));
  const inside = Math.min(Math.max(dx, dy), 0);
  return outside + inside;
}

function samplePlatter(ux: number, uy: number, t: number): AsciiSample {
  const dist = Math.hypot(ux, uy);
  const angle = Math.atan2(uy, ux) + t * 0.35;
  const sector = 0.5 + 0.5 * Math.sin(angle * 8);
  let density = 0;
  density = Math.max(density, ring(dist, 0.22, 0.04) * 0.7);
  density = Math.max(density, ring(dist, 0.38, 0.05) * 0.85);
  density = Math.max(density, ring(dist, 0.55, 0.06));
  density = Math.max(density, ring(dist, 0.72, 0.05) * 0.9);
  density *= 0.55 + sector * 0.55;
  // Hub
  density = Math.max(density, (1 - smoothstep(0.08, 0.14, dist)) * 0.95);
  // Outer fade
  density *= 1 - smoothstep(0.78, 0.95, dist);
  const corrupt = ((angle + Math.PI) / (Math.PI * 2) + t * 0.08) % 1 < 0.35;
  return { density: clamp01(density), corrupt };
}

function sampleChip(ux: number, uy: number, t: number): AsciiSample {
  const body = 1 - smoothstep(0, 0.04, box(ux, uy, 0.42, 0.28));
  const gridX = 0.55 + 0.45 * Math.sin(ux * 38 + t);
  const gridY = 0.55 + 0.45 * Math.sin(uy * 34 - t * 0.8);
  let density = body * (0.35 + gridX * gridY * 0.65);

  // Pins left/right
  for (let i = -3; i <= 3; i += 1) {
    const pinY = i * 0.08;
    const pinL = 1 - smoothstep(0, 0.025, box(ux + 0.52, uy - pinY, 0.08, 0.018));
    const pinR = 1 - smoothstep(0, 0.025, box(ux - 0.52, uy - pinY, 0.08, 0.018));
    density = Math.max(density, pinL * 0.85, pinR * 0.85);
  }

  // Center die notch
  const notch = 1 - smoothstep(0, 0.03, Math.hypot(ux + 0.28, uy + 0.18) - 0.05);
  density = Math.max(density, notch * body * 0.9);

  const corrupt = noise2(ux * 8 + t * 2, uy * 8) > 0.62 && ux < 0;
  return { density: clamp01(density), corrupt };
}

function sampleShield(ux: number, uy: number, t: number): AsciiSample {
  // Classic shield outline
  const top = uy + 0.55;
  const side = Math.abs(ux) - (0.38 - Math.max(0, uy + 0.15) * 0.35);
  const bottom = uy - 0.55 - Math.abs(ux) * 0.55;
  const sdf = Math.max(side, Math.max(-top, bottom));
  const fill = 1 - smoothstep(0, 0.05, sdf);
  const edge = ring(Math.abs(sdf), 0, 0.035) * (sdf < 0.08 ? 1 : 0);

  // Checkmark
  const rot1x = (ux + 0.05) * 0.7 + (uy + 0.08) * 0.7;
  const rot1y = -(ux + 0.05) * 0.7 + (uy + 0.08) * 0.7;
  const checkA = 1 - smoothstep(0, 0.03, box(rot1x, rot1y, 0.22, 0.035));
  const rot2x = (ux - 0.08) * 0.55 - (uy + 0.05) * 0.84;
  const rot2y = (ux - 0.08) * 0.84 + (uy + 0.05) * 0.55;
  const checkB = 1 - smoothstep(0, 0.03, box(rot2x, rot2y, 0.12, 0.035));

  let density = Math.max(fill * 0.35, edge * 0.95, checkA * 0.9, checkB * 0.9);
  density *= 0.75 + 0.25 * Math.sin(t * 2 + ux * 4);
  const corrupt = fill > 0.2 && noise2(ux * 10, uy * 10 + t) > 0.78;
  return { density: clamp01(density), corrupt };
}

function sampleMagnifier(ux: number, uy: number, t: number): AsciiSample {
  const lensX = ux + 0.08;
  const lensY = uy + 0.08;
  const lensDist = Math.hypot(lensX, lensY);
  const rim = ring(lensDist, 0.38, 0.045);
  const glass = lensDist < 0.38 ? 0.2 + 0.35 * noise2(lensX * 6 + t, lensY * 6) : 0;

  // Handle
  const hx = (ux - 0.28) * 0.7 + (uy - 0.32) * 0.7;
  const hy = -(ux - 0.28) * 0.7 + (uy - 0.32) * 0.7;
  const handle = 1 - smoothstep(0, 0.03, box(hx - 0.28, hy, 0.22, 0.04));

  // Background sector dots inside lens
  const sectors =
    lensDist < 0.34
      ? ring(lensDist, 0.12 + (t % 1) * 0.15, 0.03) * 0.7 +
        (0.4 + 0.6 * Math.sin(Math.atan2(lensY, lensX) * 10 + t * 3)) * 0.25
      : 0;

  const density = Math.max(rim, glass * 0.5, handle * 0.85, sectors);
  const corrupt = lensDist < 0.34 && noise2(lensX * 12, lensY * 12 + t * 3) > 0.55;
  return { density: clamp01(density), corrupt };
}

function sampleWaveform(ux: number, uy: number, t: number): AsciiSample {
  const phase = ux * 6 + t * 2.2;
  const clean = Math.sin(phase) * 0.28;
  const noisy =
    Math.sin(phase * 2.7) * 0.12 +
    (noise2(ux * 14 + t * 3, uy * 4) - 0.5) * 0.35;
  const mix = smoothstep(-0.35, 0.35, ux);
  const waveY = clean * mix + noisy * (1 - mix);
  const band = 1 - smoothstep(0, 0.06, Math.abs(uy - waveY));
  const envelope = 1 - smoothstep(0.85, 1.05, Math.abs(ux));
  const harmonics =
    (1 - smoothstep(0, 0.04, Math.abs(uy - waveY * 0.55))) * 0.35 * mix;
  const density = (band * 0.95 + harmonics) * envelope;
  return { density: clamp01(density), corrupt: ux < 0 };
}

/**
 * Clean open-folder mark — outline-first, few SDF ops (cheap per cell).
 * Tab + body + one document with subtle line texture.
 */
function sampleFolder(ux: number, uy: number, t: number): AsciiSample {
  const x = ux * 0.72;
  const y = uy * 0.72 + 0.04;

  const tab = box(x + 0.26, y + 0.4, 0.24, 0.1);
  const body = box(x, y - 0.04, 0.5, 0.38);
  const paperLift = Math.sin(t * 0.7) * 0.012;
  const paper = box(x - 0.04, y + 0.2 + paperLift, 0.32, 0.24);

  const rim = (sdf: number): number => {
    const a = Math.abs(sdf);
    if (a > 0.04) return 0;
    return 1 - a / 0.04;
  };

  const softFill = (sdf: number, amount: number): number => {
    if (sdf > 0) return 0;
    return amount * (1 - smoothstep(-0.05, 0, sdf));
  };

  let density = Math.max(rim(tab), rim(body), rim(paper));
  density = Math.max(density, softFill(body, 0.2), softFill(tab, 0.28), softFill(paper, 0.38));

  // Sparse horizontal lines inside the document only
  if (paper < -0.01) {
    const row = Math.abs(Math.sin((y - paperLift) * 36));
    if (row > 0.55) {
      density = Math.max(density, 0.62);
    }
  }

  // Tiny gap between tab and body (reads as real folder)
  const notch = box(x + 0.02, y + 0.3, 0.12, 0.03);
  if (notch < 0) {
    density *= 0.15;
  }

  const vignette = 1 - smoothstep(0.9, 1.25, Math.hypot(ux, uy));
  density *= vignette;

  return { density: clamp01(density), corrupt: false };
}

/** Soft glyph field approximating RSQDATA wordmark */
function sampleLogo(ux: number, uy: number, t: number): AsciiSample {
  // Approximate letter blocks for R S Q D A T A in a centered row
  const letters: Array<{ x: number; w: number; h: number }> = [
    { x: -0.72, w: 0.09, h: 0.22 }, // R
    { x: -0.5, w: 0.09, h: 0.22 }, // S
    { x: -0.28, w: 0.1, h: 0.22 }, // Q
    { x: -0.05, w: 0.09, h: 0.22 }, // D
    { x: 0.16, w: 0.09, h: 0.22 }, // A
    { x: 0.38, w: 0.08, h: 0.22 }, // T
    { x: 0.58, w: 0.09, h: 0.22 }, // A
  ];

  let density = 0;
  for (const letter of letters) {
    const d = box(ux - letter.x, uy, letter.w, letter.h);
    const fill = 1 - smoothstep(0, 0.04, d);
    density = Math.max(density, fill);
  }

  // Inner cutouts / counters (rough)
  density *= 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(ux * 30 + t * 2));
  // Halo
  const halo = 1 - smoothstep(0.2, 0.55, Math.hypot(ux * 0.7, uy * 1.4));
  density = Math.max(density * 0.95, halo * 0.15);
  density *= 1 - smoothstep(0.35, 0.55, Math.abs(uy));

  const corrupt = (Math.sin(ux * 40 + t * 8) + 1) * 0.5 > 0.65 && Math.abs(uy) < 0.25;
  return { density: clamp01(density), corrupt };
}

function sampleProgress(ux: number, uy: number, t: number): AsciiSample {
  const dist = Math.hypot(ux, uy);
  const angle = (Math.atan2(uy, ux) + Math.PI) / (Math.PI * 2);
  const progress = (t * 0.15) % 1;
  const onArc = angle < progress || (progress > 0.85 && angle > 0.95);
  const rim = ring(dist, 0.62, 0.055);
  const inner = ring(dist, 0.48, 0.03) * 0.45;
  const ticks =
    Math.abs(((angle * 24) % 1) - 0.5) < 0.08 && Math.abs(dist - 0.62) < 0.07 ? 0.7 : 0;
  let density = rim * (onArc ? 1 : 0.22) + inner + ticks * rim;
  // Soft center keep open-ish
  density *= smoothstep(0.2, 0.42, dist);
  density *= 1 - smoothstep(0.78, 0.95, dist);
  return { density: clamp01(density), corrupt: !onArc && rim > 0.3 };
}

export function sampleAsciiShape(
  id: AsciiShapeId,
  ux: number,
  uy: number,
  t: number,
): AsciiSample {
  switch (id) {
    case 'platter':
      return samplePlatter(ux, uy, t);
    case 'chip':
      return sampleChip(ux, uy, t);
    case 'shield':
      return sampleShield(ux, uy, t);
    case 'magnifier':
      return sampleMagnifier(ux, uy, t);
    case 'waveform':
      return sampleWaveform(ux, uy, t);
    case 'folder':
      return sampleFolder(ux, uy, t);
    case 'logo':
      return sampleLogo(ux, uy, t);
    case 'progress':
      return sampleProgress(ux, uy, t);
    default:
      return samplePlatter(ux, uy, t);
  }
}
