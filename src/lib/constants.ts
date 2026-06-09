export const SITE = {
  email: 'info@muench-datenrettung.de',
  address: {
    street: '[STRASSE]',
    city: '[ORT]',
    zip: '[PLZ]',
    country: 'DE',
  },
} as const;

/** Prüfgebühr für Erstdiagnose inkl. Kostenvoranschlag */
export const DIAGNOSIS_FEE = 39 as const;
export const DIAGNOSIS_FEE_FORMATTED = `${DIAGNOSIS_FEE}€` as const;

export type DeviceKey = 'hdd' | 'ssd' | 'raid' | 'usb';
export type DamageKey = 'del' | 'mech' | 'water' | 'ctrl' | 'enc' | 'crash';
export type UrgencyKey = 'std' | 'now';

export const PRICE_MATRIX: Record<DeviceKey, Record<DamageKey, [number, number]>> = {
  hdd: {
    del: [290, 490],
    mech: [490, 890],
    water: [690, 1200],
    ctrl: [390, 690],
    enc: [290, 590],
    crash: [390, 750],
  },
  ssd: {
    del: [390, 690],
    mech: [590, 990],
    water: [790, 1400],
    ctrl: [490, 890],
    enc: [390, 790],
    crash: [490, 890],
  },
  raid: {
    del: [990, 2200],
    mech: [1200, 2800],
    water: [1400, 3200],
    ctrl: [890, 1800],
    enc: [990, 2200],
    crash: [890, 2000],
  },
  usb: {
    del: [190, 390],
    mech: [290, 590],
    water: [390, 790],
    ctrl: [290, 590],
    enc: [290, 490],
    crash: [290, 550],
  },
};

export const URGENCY_MULTIPLIER: Record<UrgencyKey, number> = {
  std: 1.0,
  now: 1.7,
};
