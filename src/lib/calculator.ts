import { EXPRESS_MULTIPLIER, PRICE_MATRIX } from './constants';

export const MEDIUM_OPTIONS = [
  { id: 'hdd', label: 'Festplatte HDD', icon: '💾' },
  { id: 'ssd', label: 'SSD', icon: '⚡' },
  { id: 'raid', label: 'RAID / NAS', icon: '🗄️' },
  { id: 'usb_sd', label: 'USB / SD-Karte', icon: '🔌' },
  { id: 'smartphone', label: 'Smartphone', icon: '📱' },
] as const;

export const SCHADEN_LABELS: Record<string, string> = {
  logisch: 'Daten gelöscht / formatiert / nicht erkannt',
  elektronik: 'Elektronikschaden / Überspannung',
  mechanisch: 'Klackert / Geräusche / Sturz',
  wasser: 'Wasserschaden / Feuchtigkeit',
  ransomware: 'Verschlüsselt (Ransomware / Virus)',
};

export function getSchadenOptions(medium: string): string[] {
  const matrix = PRICE_MATRIX[medium];
  if (!matrix) return [];
  return Object.keys(matrix);
}

export function calculatePriceRange(
  medium: string,
  schaden: string,
  express: boolean,
): string | null {
  const matrix = PRICE_MATRIX[medium];
  if (!matrix || !matrix[schaden]) return null;

  const [min, max] = matrix[schaden];
  const factor = express ? EXPRESS_MULTIPLIER : 1;
  return `${Math.round(min * factor)} € – ${Math.round(max * factor)} €`;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[\d\s+()-]{6,}$/;
