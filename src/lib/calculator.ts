import {
  formatPriceRange,
  getDeviceCategory,
  SERVICE_PRICES,
  type DeviceKey,
  type UrgencyKey,
} from './constants';

export interface DeviceOption {
  key: DeviceKey;
  label: string;
}

export interface DamageOption {
  key: import('./constants').DamageKey;
  label: string;
  hint: string;
}

export interface UrgencyOption {
  key: UrgencyKey;
  label: string;
  duration: string;
  popular?: boolean;
}

export interface PriceEstimateResult {
  range: [number, number] | null;
  label: string;
}

export const DEVICE_OPTIONS: DeviceOption[] = [
  { key: 'hdd', label: 'Festplatte HDD' },
  { key: 'ssd', label: 'SSD / NVMe' },
  { key: 'raid', label: 'RAID / NAS / Server' },
  { key: 'usb', label: 'USB / SD-Karte' },
  { key: 'smartphone', label: 'Smartphone / Tablet' },
  { key: 'notebook', label: 'Notebook' },
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
  { key: 'std', label: 'Standard', duration: '3–5 Arbeitstage nach Eingang' },
  { key: 'express', label: 'Express', duration: '1–2 Arbeitstage nach Eingang', popular: true },
  {
    key: 'notfall',
    label: 'Notfall',
    duration: '24/7-Bearbeitung, bis Ihre Daten gerettet sind',
  },
];

export function calculatePriceEstimate(
  device: DeviceKey,
  urgency: UrgencyKey,
): PriceEstimateResult {
  const category = getDeviceCategory(device);

  if (category === null || urgency === 'notfall') {
    return { range: null, label: 'auf Anfrage' };
  }

  const range = SERVICE_PRICES[urgency][category];

  if (range === null) {
    return { range: null, label: 'auf Anfrage' };
  }

  return {
    range,
    label: formatPriceRange(range),
  };
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[\d\s+()-]{6,}$/;
