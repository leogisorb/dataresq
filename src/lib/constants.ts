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

export const DATA_RETENTION_DAYS = 14 as const;

export type DeviceKey = 'hdd' | 'ssd' | 'raid' | 'usb';
export type DamageKey = 'del' | 'mech' | 'water' | 'ctrl' | 'enc' | 'crash';
export type UrgencyKey = 'std' | 'express' | 'notfall';

export type DeviceCategory = 'hddSsd' | 'flash';

export const SERVICE_PRICES: Record<
  UrgencyKey,
  Record<DeviceCategory, [number, number] | null>
> = {
  std: { hddSsd: [899, 1799], flash: [699, 999] },
  express: { hddSsd: [1099, 1999], flash: [899, 1199] },
  notfall: { hddSsd: null, flash: null },
} as const;

export function formatPriceRange(range: [number, number]): string {
  return `${range[0].toLocaleString('de-DE')} – ${range[1].toLocaleString('de-DE')} €`;
}

export function getDeviceCategory(device: DeviceKey): DeviceCategory | null {
  if (device === 'hdd' || device === 'ssd') return 'hddSsd';
  if (device === 'usb') return 'flash';
  return null;
}
