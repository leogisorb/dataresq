import {
  formatPriceRange,
  getDeviceCategory,
  SERVICE_PRICES,
  type DamageKey,
  type DeviceKey,
  type ReturnMediumKey,
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

export interface ReturnMediumOption {
  key: ReturnMediumKey;
  label: string;
  hint: string;
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
  { key: 'notebook', label: 'Notebook & PC-Systeme' },
];

export const DAMAGE_OPTIONS: DamageOption[] = [
  { key: 'del', label: 'Versehentlich gelöscht', hint: 'Dateien, Partitionen' },
  { key: 'mech', label: 'Mechanischer Schaden', hint: 'Klicken, Sturz' },
  { key: 'water', label: 'Flüssigkeitsschaden', hint: 'Wasser, Feuchtigkeit' },
  { key: 'ctrl', label: 'Controller / Elektronik', hint: 'PCB, Überspannung' },
  { key: 'enc', label: 'Verschlüsselt / Ransomware', hint: 'BitLocker, Virus' },
  { key: 'crash', label: 'Absturz / BSOD', hint: 'Boot-Fehler, Kernel' },
];

/** Schadensarten für Smartphone / Tablet — gleiche Keys, passende Labels. */
export const MOBILE_DAMAGE_OPTIONS: DamageOption[] = [
  { key: 'del', label: 'Versehentlich gelöscht', hint: 'Fotos, Nachrichten, Kontakte' },
  { key: 'mech', label: 'Sturz', hint: 'Gerät gefallen, Gehäuse beschädigt' },
  { key: 'water', label: 'Wasserschaden', hint: 'Toilette, Regen, Getränk' },
  { key: 'ctrl', label: 'Kurzschluss / Elektronik', hint: 'Ladeport, Platine, Überspannung' },
  { key: 'enc', label: 'Passwort / gesperrt', hint: 'PIN vergessen, Bildschirmsperre' },
  { key: 'crash', label: 'Displaybruch', hint: 'Glas kaputt, Touch defekt, schwarzer Bildschirm' },
];

/** Schadensarten für Notebook & PC-Systeme — gleiche Keys, passende Labels. */
export const NOTEBOOK_DAMAGE_OPTIONS: DamageOption[] = [
  { key: 'del', label: 'Versehentlich gelöscht', hint: 'Dateien, Partitionen, System' },
  { key: 'mech', label: 'Sturz', hint: 'Notebook gefallen, Gehäuse beschädigt' },
  { key: 'water', label: 'Flüssigkeitsschaden', hint: 'Tastatur, Kaffee, Wasser' },
  { key: 'ctrl', label: 'Mainboard / Elektronik', hint: 'Logic Board, Netzteil, Überspannung' },
  { key: 'enc', label: 'Verschlüsselt / BitLocker', hint: 'FileVault, TPM, Ransomware' },
  { key: 'crash', label: 'Startet nicht', hint: 'Boot-Fehler, BSOD, kein POST' },
];

export function getDamageOptionsForDevice(device: DeviceKey | null): DamageOption[] {
  if (device === 'smartphone') return MOBILE_DAMAGE_OPTIONS;
  if (device === 'notebook') return NOTEBOOK_DAMAGE_OPTIONS;
  return DAMAGE_OPTIONS;
}

export function getDamageLabel(device: DeviceKey, key: DamageKey): string {
  return (
    getDamageOptionsForDevice(device).find((option) => option.key === key)?.label ??
    DAMAGE_OPTIONS.find((option) => option.key === key)?.label ??
    key
  );
}

export const RETURN_MEDIUM_OPTIONS: ReturnMediumOption[] = [
  {
    key: 'original',
    label: 'Original zurück',
    hint: 'Ihr Datenträger wird versichert an Sie zurückgeschickt',
  },
  {
    key: 'new',
    label: 'Neuer Datenträger',
    hint: 'Daten auf neuen Datenträger spielen — Preis auf Anfrage',
  },
  {
    key: 'both',
    label: 'Original + neuer Datenträger',
    hint: 'Beides versichert zurück — Preis für neuen Datenträger auf Anfrage',
  },
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
  returnMedium: ReturnMediumKey = 'original',
): PriceEstimateResult {
  if (returnMedium === 'new' || returnMedium === 'both') {
    return { range: null, label: 'auf Anfrage' };
  }

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
