export const SITE = {
  email: 'info@muench-datenrettung.de',
  address: {
    street: 'Am Hammerwerk 16A',
    city: 'Grevenbroich',
    zip: '41515',
    country: 'DE',
  },
} as const;

/** Analysepauschale für Laboranalyse inkl. Dateiliste */
export const DIAGNOSIS_FEE = 79 as const;
export const DIAGNOSIS_FEE_FORMATTED = `${DIAGNOSIS_FEE}€` as const;

/** Bei erfolgloser Rettung: nur Analysepauschale, kein Rettungspreis */
export const FAILED_RECOVERY_NOTE =
  `Können wir nichts retten, zahlen Sie nur die Analysepauschale von ${DIAGNOSIS_FEE_FORMATTED} — nicht den Rettungspreis.` as const;

export const FAILED_RECOVERY_BADGE = 'Kein Rettungspreis bei Misserfolg' as const;

export const DATA_RETENTION_DAYS = 14 as const;

export type DeviceKey = 'hdd' | 'ssd' | 'raid' | 'usb' | 'smartphone' | 'notebook';
export type DamageKey = 'del' | 'mech' | 'water' | 'ctrl' | 'enc' | 'crash';
export type UrgencyKey = 'std' | 'express' | 'notfall';

export type DeviceCategory = 'hddSsd' | 'flash' | 'smartphone' | 'notebook';

export const SERVICE_PRICES: Record<
  UrgencyKey,
  Record<DeviceCategory, [number, number] | null>
> = {
  std: {
    hddSsd: [899, 1799],
    flash: [699, 999],
    smartphone: [179, 999],
    notebook: [249, 1199],
  },
  express: {
    hddSsd: [1099, 1999],
    flash: [899, 1199],
    smartphone: [179, 999],
    notebook: [249, 1199],
  },
  notfall: { hddSsd: null, flash: null, smartphone: null, notebook: null },
} as const;

export function formatPriceRange(range: [number, number]): string {
  return `${range[0].toLocaleString('de-DE')} – ${range[1].toLocaleString('de-DE')} €`;
}

export function getDeviceCategory(device: DeviceKey): DeviceCategory | null {
  if (device === 'hdd' || device === 'ssd') return 'hddSsd';
  if (device === 'usb') return 'flash';
  if (device === 'smartphone') return 'smartphone';
  if (device === 'notebook') return 'notebook';
  return null;
}
