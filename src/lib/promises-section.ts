import { FOUNDING_YEAR } from '@/lib/team';

export type PromiseIconKey = 'price' | 'preview' | 'noCost' | 'shipping';

export interface PromiseFaceGradient {
  from: string;
  via: string;
  to: string;
}

export interface PromiseTile {
  icon: PromiseIconKey;
  title: string;
  body: string;
  /** Short label in the colored header */
  meta: string;
  /** RSQ logo color on the outer back peek */
  backClass: string;
  /** Glass folder-face gradient (SVG fill) */
  faceGradient: PromiseFaceGradient;
  /** Fallback glass panel behind SVG */
  faceClass: string;
}

export const PROMISES_HEADLINE = 'Fair. Transparent. Ohne Risiko.' as const;

export const PROMISES_INTRO =
  'Bei uns wissen Sie von Anfang an, woran Sie sind – ohne versteckte Kosten und ohne Risiko.' as const;

export const PROMISES_BANNER_LEAD =
  'Ihre Daten sind bei uns in sicheren Händen.' as const;

export const PROMISES_BANNER_TRAIL =
  `Deutschlandweit. Zertifiziert. Erfolgreich seit ${FOUNDING_YEAR}.` as const;

/** Inner face = frosted glass over full-bleed color (shared) */
const FACE_GLASS = {
  from: 'rgba(255,255,255,0.28)',
  via: 'rgba(255,255,255,0.38)',
  to: 'rgba(255,255,255,0.52)',
} as const;

/** Card shell only — no solid white fill (that killed the glass look) */
const FACE_GLASS_CLASS =
  'border border-white/40 bg-transparent' as const;

/** Outer = logo colors; inner = glass */
export const promiseTiles: readonly PromiseTile[] = [
  {
    icon: 'price',
    title: 'Verbindlicher Festpreis vorab',
    body: 'Sie erhalten vor Beginn der Datenrettung einen verbindlichen Festpreis – garantiert ohne Preis-Schock.',
    meta: 'Festpreis',
    backClass: 'bg-[#22d3ee]',
    faceGradient: FACE_GLASS,
    faceClass: FACE_GLASS_CLASS,
  },
  {
    icon: 'preview',
    title: 'Liste der zu rettenden Daten vor der Bezahlung',
    body: 'Sie erhalten eine Liste aller rettbaren Daten zur Ansicht. Erst dann entscheiden Sie, ob Sie die Rettung beauftragen.',
    meta: 'Dateiliste',
    backClass: 'bg-[#a78bfa]',
    faceGradient: FACE_GLASS,
    faceClass: FACE_GLASS_CLASS,
  },
  {
    icon: 'noCost',
    title: 'Keine Rettung, keine Bezahlung',
    body: 'Wenn wir Ihre Daten nicht retten können, entstehen Ihnen garantiert keine Kosten. Versprochen!',
    meta: 'No-Cure',
    backClass: 'bg-[#f472b6]',
    faceGradient: FACE_GLASS,
    faceClass: FACE_GLASS_CLASS,
  },
  {
    icon: 'shipping',
    title: 'Kostenlose DHL Express Abholung & Rücksendung',
    body: 'Wir organisieren die kostenlose Abholung und den sicheren Rückversand mit DHL Express – schnell und zuverlässig.',
    meta: 'DHL Express',
    backClass: 'bg-[#fb923c]',
    faceGradient: FACE_GLASS,
    faceClass: FACE_GLASS_CLASS,
  },
] as const;
