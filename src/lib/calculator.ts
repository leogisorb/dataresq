import {
  PRICE_MATRIX,
  URGENCY_MULTIPLIER,
  type DamageKey,
  type DeviceKey,
  type UrgencyKey,
} from './constants';

export interface DeviceOption {
  key: DeviceKey;
  label: string;
}

export interface DamageOption {
  key: DamageKey;
  label: string;
  hint: string;
}

export interface UrgencyOption {
  key: UrgencyKey;
  label: string;
  duration: string;
  popular?: boolean;
}

export const DEVICE_OPTIONS: DeviceOption[] = [
  { key: 'hdd', label: 'Festplatte HDD' },
  { key: 'ssd', label: 'SSD / NVMe' },
  { key: 'raid', label: 'RAID / NAS' },
  { key: 'usb', label: 'USB / SD-Karte' },
];

export const DAMAGE_OPTIONS: DamageOption[] = [
  { key: 'del', label: 'Versehentlich gelöscht', hint: 'Dateien, Partitionen' },
  { key: 'mech', label: 'Mechanischer Schaden', hint: 'Klicken, Sturz' },
  { key: 'water', label: 'Flüssigkeitsschaden', hint: 'Wasser, Feuchtigkeit' },
  { key: 'ctrl', label: 'Controller / Elektronik', hint: 'PCB, Überspannung' },
  { key: 'enc', label: 'Verschlüsselt / Ransomware', hint: 'BitLocker, Virus' },
  { key: 'crash', label: 'Absturz / BSOD', hint: 'Boot-Fehler, Kernel' },
];

export const URGENCY_OPTIONS: UrgencyOption[] = [
  { key: 'std', label: 'Standard', duration: '10–14 Tage' },
  { key: 'now', label: 'Notfall', duration: '24–48 Std.', popular: true },
];

export function calculatePriceRange(
  device: DeviceKey,
  damage: DamageKey,
  urgency: UrgencyKey,
): [number, number] {
  const [lo, hi] = PRICE_MATRIX[device][damage];
  const mult = URGENCY_MULTIPLIER[urgency];
  return [Math.round((lo * mult) / 10) * 10, Math.round((hi * mult) / 10) * 10];
}

export function formatPriceRange(range: [number, number]): string {
  return `${range[0].toLocaleString('de-DE')} – ${range[1].toLocaleString('de-DE')} €`;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[\d\s+()-]{6,}$/;
