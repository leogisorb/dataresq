import {
  BASE_PRICES,
  EXPRESS_SURCHARGE,
  formatPriceEuro,
  getPricedCategory,
  skipsServiceFlow,
  type DamageKey,
  type DeviceKey,
  type PriceGroup,
  type ReturnMediumKey,
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

export interface DamageGroupDefinition {
  id: 'logical' | 'physical';
  title: string;
  keys: readonly DamageKey[];
}

export interface UrgencyOption {
  key: UrgencyKey;
  label: string;
  duration: string;
  priceHint?: string;
  popular?: boolean;
}

export interface ReturnMediumOption {
  key: ReturnMediumKey;
  label: string;
  hint: string;
}

export interface PriceEstimateResult {
  priceGroup: PriceGroup;
  amount: number | null;
  ceiling: number | null;
  logicalAmount: number | null;
  label: string;
  detail: string | null;
}

export const DEVICE_OPTIONS: DeviceOption[] = [
  { key: 'hdd', label: 'Festplatte HDD' },
  { key: 'ssd', label: 'SSD / NVMe' },
  { key: 'raid', label: 'RAID / NAS / Server' },
  { key: 'usb', label: 'USB / SD-Karte' },
  { key: 'smartphone', label: 'Smartphone / Tablet' },
  { key: 'notebook', label: 'Notebook & PC-Systeme' },
];

export const DAMAGE_PRICE_GROUP: Record<DamageKey, Exclude<PriceGroup, 'anfrage'>> = {
  del: 'logical',
  unreadable: 'logical',
  crash: 'logical',
  mech: 'physical',
  not_recognized: 'physical',
  water: 'physical',
  ctrl: 'physical',
  unknown: 'unknown',
};

export const DAMAGE_GROUPS: readonly DamageGroupDefinition[] = [
  {
    id: 'logical',
    title: 'Gerät funktioniert — Daten fehlen',
    keys: ['del', 'unreadable', 'crash'],
  },
  {
    id: 'physical',
    title: 'Gerät defekt',
    keys: ['mech', 'not_recognized', 'water', 'ctrl'],
  },
] as const;

export const DAMAGE_OPTIONS: DamageOption[] = [
  {
    key: 'del',
    label: 'Versehentlich gelöscht oder formatiert',
    hint: 'Dateien, Ordner, Partitionen, Papierkorb',
  },
  {
    key: 'unreadable',
    label: 'Wird erkannt, aber nicht lesbar',
    hint: '„Formatieren?"-Meldung, RAW, leere Ordner',
  },
  {
    key: 'crash',
    label: 'System startet nicht mehr',
    hint: 'Bluescreen, Kernel Panic, Bootfehler',
  },
  {
    key: 'mech',
    label: 'Klackert, schleift oder dreht nicht',
    hint: 'Mechanischer Schaden',
  },
  {
    key: 'not_recognized',
    label: 'Wird gar nicht mehr erkannt',
    hint: 'Keine Reaktion, kein Strom',
  },
  {
    key: 'water',
    label: 'Sturz oder Flüssigkeitsschaden',
    hint: 'Wasser, Feuchtigkeit, Stoß',
  },
  {
    key: 'ctrl',
    label: 'Controller oder Elektronik',
    hint: 'PCB, Überspannung, 0 Byte',
  },
  {
    key: 'unknown',
    label: 'Weiß ich nicht — Ursache unklar',
    hint: 'Kein Problem. Wir klären das in der kostenlosen Analyse.',
  },
];

/** Schadensarten für Smartphone / Tablet — gleiche Keys, passende Labels. */
export const MOBILE_DAMAGE_OPTIONS: DamageOption[] = [
  {
    key: 'del',
    label: 'Versehentlich gelöscht',
    hint: 'Fotos, Nachrichten, Kontakte',
  },
  {
    key: 'unreadable',
    label: 'Wird erkannt, aber nicht lesbar',
    hint: 'Gerät hängt, Apps öffnen nicht',
  },
  {
    key: 'crash',
    label: 'Displaybruch / startet nicht',
    hint: 'Glas kaputt, schwarzer Bildschirm',
  },
  {
    key: 'mech',
    label: 'Sturzschaden',
    hint: 'Gerät gefallen, Gehäuse beschädigt',
  },
  {
    key: 'not_recognized',
    label: 'Wird gar nicht mehr erkannt',
    hint: 'Keine Reaktion, kein Laden',
  },
  {
    key: 'water',
    label: 'Wasserschaden',
    hint: 'Toilette, Regen, Getränk',
  },
  {
    key: 'ctrl',
    label: 'Kurzschluss / Elektronik',
    hint: 'Ladeport, Platine, Überspannung',
  },
  {
    key: 'unknown',
    label: 'Weiß ich nicht — Ursache unklar',
    hint: 'Kein Problem. Wir klären das in der Analyse.',
  },
];

export function getDamageOptionsForDevice(device: DeviceKey | null): DamageOption[] {
  if (device === 'smartphone') return MOBILE_DAMAGE_OPTIONS;
  return DAMAGE_OPTIONS;
}

export function getDamageLabel(device: DeviceKey, key: DamageKey): string {
  return (
    getDamageOptionsForDevice(device).find((option) => option.key === key)?.label ??
    DAMAGE_OPTIONS.find((option) => option.key === key)?.label ??
    key
  );
}

export function getDamageOption(device: DeviceKey | null, key: DamageKey): DamageOption | undefined {
  return getDamageOptionsForDevice(device).find((option) => option.key === key);
}

export const RETURN_MEDIUM_OPTIONS: ReturnMediumOption[] = [
  {
    key: 'new',
    label: 'Neuer Datenträger',
    hint: 'Daten auf neuen Datenträger spielen — je nach Datenmenge auf Anfrage',
  },
  {
    key: 'download',
    label: 'Downloadlink',
    hint: 'Verschlüsselter Download über Ihr Kundenportal — im Festpreis enthalten',
  },
  {
    key: 'both',
    label: 'Beides',
    hint: 'Downloadlink im Festpreis · neuer Datenträger je nach Datenmenge auf Anfrage',
  },
];

const RETURN_MEDIUM_SURCHARGE_NOTE =
  'Neuer Datenträger: je nach Datenmenge auf Anfrage.' as const;

export const URGENCY_OPTIONS: UrgencyOption[] = [
  { key: 'std', label: 'Standard', duration: '3–5 Arbeitstage nach Eingang' },
  {
    key: 'express',
    label: 'Express',
    duration: '1–2 Arbeitstage nach Eingang',
    priceHint: `+${EXPRESS_SURCHARGE} €`,
    popular: true,
  },
  {
    key: 'notfall',
    label: 'Notfall',
    duration: '24/7-Bearbeitung, bis Ihre Daten gerettet sind',
    priceHint: 'auf Anfrage',
  },
];

function applyUrgency(amount: number, urgency: UrgencyKey): number | null {
  if (urgency === 'notfall') return null;
  if (urgency === 'express') return amount + EXPRESS_SURCHARGE;
  return amount;
}

export function getGroupPrices(
  device: DeviceKey,
  urgency: UrgencyKey = 'std',
): { logical: number; physical: number } | null {
  const category = getPricedCategory(device);
  if (!category) return null;

  const base = BASE_PRICES[category];
  const logical = applyUrgency(base.logical, urgency);
  const physical = applyUrgency(base.physical, urgency);
  if (logical === null || physical === null) return null;

  return { logical, physical };
}

export function buildUnknownFallbackHint(device: DeviceKey): string {
  const prices = getGroupPrices(device, 'std');
  if (!prices) {
    return 'Preis nach kostenloser Analyse.';
  }
  return `Kein Problem. Sie zahlen höchstens ${formatPriceEuro(prices.physical)}. Zeigt die kostenlose Analyse einen logischen Defekt, sinkt der Preis auf ${formatPriceEuro(prices.logical)}.`;
}

function withReturnMediumNote(
  result: PriceEstimateResult,
  returnMedium: ReturnMediumKey,
): PriceEstimateResult {
  if (returnMedium !== 'new' && returnMedium !== 'both') return result;

  const detail = result.detail
    ? `${result.detail} ${RETURN_MEDIUM_SURCHARGE_NOTE}`
    : RETURN_MEDIUM_SURCHARGE_NOTE;

  return { ...result, detail };
}

export function calculatePriceEstimate(
  device: DeviceKey,
  damage: DamageKey,
  urgency: UrgencyKey = 'std',
  returnMedium: ReturnMediumKey = 'download',
): PriceEstimateResult {
  if (device === 'raid' || device === 'smartphone') {
    return withReturnMediumNote(
      {
        priceGroup: 'anfrage',
        amount: null,
        ceiling: null,
        logicalAmount: null,
        label: 'Preis nach Analyse',
        detail: 'Festpreis nach kostenloser Analyse — verbindlich vor Beauftragung.',
      },
      returnMedium,
    );
  }

  if (urgency === 'notfall') {
    return withReturnMediumNote(
      {
        priceGroup: 'anfrage',
        amount: null,
        ceiling: null,
        logicalAmount: null,
        label: 'auf Anfrage',
        detail: 'Notfall-Service individuell nach Absprache.',
      },
      returnMedium,
    );
  }

  const prices = getGroupPrices(device, urgency);
  if (!prices) {
    return withReturnMediumNote(
      {
        priceGroup: 'anfrage',
        amount: null,
        ceiling: null,
        logicalAmount: null,
        label: 'Preis nach Analyse',
        detail: 'Festpreis nach kostenloser Analyse — verbindlich vor Beauftragung.',
      },
      returnMedium,
    );
  }

  const group = DAMAGE_PRICE_GROUP[damage];
  const expressSuffix =
    urgency === 'express' ? ` Inkl. Express (+${EXPRESS_SURCHARGE} €).` : '';
  const freeListNote = ' Dateiliste kostenlos.';

  if (group === 'physical') {
    return withReturnMediumNote(
      {
        priceGroup: 'physical',
        amount: prices.physical,
        ceiling: prices.physical,
        logicalAmount: prices.logical,
        label: formatPriceEuro(prices.physical),
        detail: `Festpreis inkl. MwSt. — verbindlich nach der kostenlosen Analyse.${expressSuffix}${freeListNote}`,
      },
      returnMedium,
    );
  }

  if (group === 'logical') {
    return withReturnMediumNote(
      {
        priceGroup: 'logical',
        amount: prices.logical,
        ceiling: prices.physical,
        logicalAmount: prices.logical,
        label: `Voraussichtlich ${formatPriceEuro(prices.logical)}`,
        detail: `Höchstpreis ${formatPriceEuro(prices.physical)}, falls die Analyse einen physischen Defekt zeigt.${expressSuffix}${freeListNote}`,
      },
      returnMedium,
    );
  }

  return withReturnMediumNote(
    {
      priceGroup: 'unknown',
      amount: prices.physical,
      ceiling: prices.physical,
      logicalAmount: prices.logical,
      label: `Höchstpreis ${formatPriceEuro(prices.physical)}`,
      detail: `Sinkt auf ${formatPriceEuro(prices.logical)}, wenn der Defekt rein logisch ist.${expressSuffix}${freeListNote}`,
    },
    returnMedium,
  );
}

export function buildAnfragePrefillLabel(
  estimate: PriceEstimateResult,
): string {
  if (estimate.detail) {
    return `${estimate.label} — ${estimate.detail}`;
  }
  return estimate.label;
}

export { skipsServiceFlow };

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[\d\s+()-]{6,}$/;
