export const SITE = {
  phone: '+49 151 27064982',
  phoneTel: '+4915127064982',
  email: 'info@rsqdata.de',
  /** Büro Köln — Kundenbetreuung / Koordination (nicht Impressumsadresse) */
  address: {
    street: 'Pellenzstr. 15',
    city: 'Köln',
    zip: '50823',
    country: 'DE',
    region: 'NRW',
  },
  openingHours: {
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '09:00',
    closes: '18:00',
  },
  /**
   * Externe Profil-URLs für Schema.org sameAs (GBP, Social, Bewertungsportale).
   * Leere Einträge werden in JSON-LD weggelassen — URLs nachpflegen, sobald live.
   */
  sameAs: [] as readonly string[],
} as const;

/** NRW-Kernstädte für areaServed / Local SEO (keine Doorway-Seiten) */
export const NRW_AREA_SERVED = [
  'Nordrhein-Westfalen',
  'Köln',
  'Düsseldorf',
  'Mönchengladbach',
  'Grevenbroich',
  'Neuss',
  'Krefeld',
  'Bonn',
  'Leverkusen',
  'Aachen',
  'Bergisch Gladbach',
  'Viersen',
  'Erkelenz',
  'Jüchen',
] as const;

/** Stabile Sitemap-/Schema-Aktualität (manuell bei Content-Updates anheben) */
export const CONTENT_LAST_UPDATED = '2026-08-12' as const;

/** Angaben gemäß § 5 DDG — Single Source für /impressum (TXT ist Vorgabe) */
export const LEGAL = {
  ownerName: 'Robert Münch',
  brandName: 'RSQDATA',
  vatId: 'DE291595156',
  /** Nur Impressum — nicht in Nav/Footer */
  phoneSecondary: '+49 2181 7578878',
  phoneSecondaryTel: '+4921817578878',
  address: {
    street: 'Am Hammerwerk 16A',
    city: 'Grevenbroich',
    zip: '41515',
    country: 'Deutschland',
  },
} as const;

/** Laborpartner — technische Rettung im Reinraumlabor (nicht RSQDATA-eigen) */
export const LAB_PARTNER = {
  name: 'Fields',
  address: {
    careOf: 'Fields c/o RSQDATA',
    street: '18-21 Old Fields Rd, Bocam Park',
    city: 'Pencoed Bridgend',
    zip: 'CF35 5LJ',
    country: 'GB',
  },
} as const;

export const LAB_PARTNER_ADDRESS_LINE =
  `${LAB_PARTNER.address.careOf}, ${LAB_PARTNER.address.street}, ${LAB_PARTNER.address.zip} ${LAB_PARTNER.address.city}, United Kingdom` as const;

export const LAB_PARTNER_BADGE = `Partner-Reinraumlabor (${LAB_PARTNER.name})` as const;

export const LAB_PARTNER_NOTE =
  `Die technische Analyse und Rettung erfolgt über unseren Laborpartner ${LAB_PARTNER.name} (UK). RSQDATA koordiniert Annahme, Kommunikation und Angebot aus Köln.` as const;

export const LAB_PARTNER_NOTE_SHORT =
  `Laborpartner ${LAB_PARTNER.name} (UK)` as const;

/** Laboranalyse inkl. Dateiliste — USP: kostenlos (0€) */
export const DIAGNOSIS_FEE = 0 as const;
export const DIAGNOSIS_FEE_FORMATTED = `${DIAGNOSIS_FEE}€` as const;

export const FREE_DIAGNOSIS_BADGE = 'Kostenlose Analyse inkl. Dateiliste' as const;

export const FREE_DIAGNOSIS_CAPTION = 'Analyse inkl. Dateiliste — 0 €' as const;

/** Dauer der Laboranalyse bis Dateiliste und Angebot */
export const ANALYSIS_DURATION = '48–72 h' as const;

/** Kurzform für Hero / Trust-Pills */
export const FAILED_RECOVERY_BADGE = 'Keine Rettung = keine Kosten' as const;

/**
 * Einheitliche Kosten-Garantie: kostenlose Analyse + keine Rettung = keine Kosten.
 */
export const NO_COST_GUARANTEE_NOTE =
  `Keine Rettung = keine Kosten — die Laboranalyse inklusive Dateiliste kostet bei uns ${DIAGNOSIS_FEE_FORMATTED} (ohne Analysepauschale). Können wir nichts retten, zahlen Sie weder Rettungspreis noch Analysegebühr.` as const;

export const DECLINED_RECOVERY_NOTE =
  'Entscheiden Sie sich gegen die Rettung, obwohl Daten rettbar sind, bleibt die Analyse kostenlos.' as const;

export const BINDING_OFFER_BADGE = 'Verbindliches Angebot vor Beauftragung' as const;

export const HOME_META_TITLE =
  'Datenrettung für Festplatte, HDD, SSD & RAID' as const;

export const HOME_META_DESCRIPTION =
  `Datenrettung: HDD, SSD, RAID & NAS. Kostenlose Analyse (${DIAGNOSIS_FEE_FORMATTED}) – verbindliches Angebot vor Beauftragung. Keine Rettung = keine Kosten.` as const;

export const HOME_WELCOME_TEXT =
  `Festplatte klackert, SSD tot oder NAS „Volume degraded"? Keine weiteren Schreibzugriffe. RSQDATA rettet HDD, SSD, RAID & NAS — kostenlos per DHL Express oder Abgabe in Grevenbroich und Mönchengladbach. Kostenlose Analyse inkl. Dateiliste, danach verbindliches Angebot.` as const;

export const HOME_TRUST_ITEMS = [
  FREE_DIAGNOSIS_BADGE,
  BINDING_OFFER_BADGE,
  FAILED_RECOVERY_BADGE,
] as const;

export const DATENRETTUNG_META_DESCRIPTION =
  `Ablauf, Leistungen und Preise: HDD, SSD, RAID, NAS, USB und Smartphone. Analyse in ${ANALYSIS_DURATION}, Dateiliste und verbindliches Angebot vor Beauftragung.` as const;

export const SITE_META_DESCRIPTION =
  `RSQDATA — Datenrettung aus Köln. Beratung, Koordination und verbindliches Angebot für Festplatte, SSD, RAID und NAS.` as const;

export const DATA_RETENTION_DAYS = 14 as const;

export type DeviceKey = 'hdd' | 'ssd' | 'raid' | 'usb' | 'smartphone' | 'notebook';
export type DamageKey =
  | 'del'
  | 'unreadable'
  | 'crash'
  | 'mech'
  | 'not_recognized'
  | 'water'
  | 'ctrl'
  | 'unknown';
export type UrgencyKey = 'std' | 'express' | 'notfall';
/** Datenübergabe: neuer Datenträger, Downloadlink oder beides */
export type ReturnMediumKey = 'new' | 'download' | 'both';

/** Preisgruppe aus Schadenauswahl bzw. Anfrage-Fallback */
export type PriceGroup = 'logical' | 'physical' | 'unknown' | 'anfrage';

/** Medien mit Festpreis-Leiter (logisch / physisch) */
export type PricedDeviceCategory = 'hddSsd' | 'flash';

/** Express-Aufpreis gegenüber Standard */
export const EXPRESS_SURCHARGE = 250 as const;

/**
 * Festpreise inkl. MwSt. (Standard-Service).
 * Gruppe A = logischer Defekt, Gruppe B = physischer Defekt.
 */
export const BASE_PRICES = {
  hddSsd: { logical: 585, physical: 1185 },
  flash: { logical: 385, physical: 685 },
} as const;

/** Marketing-Spannen für Service-Karten (Standard) */
export const PRICE_DISPLAY = {
  hddSsd: [BASE_PRICES.hddSsd.logical, BASE_PRICES.hddSsd.physical] as [number, number],
  flash: [BASE_PRICES.flash.logical, BASE_PRICES.flash.physical] as [number, number],
} as const;

export function formatPriceEuro(amount: number): string {
  return `${amount.toLocaleString('de-DE')} €`;
}

export function formatPriceRange(range: [number, number]): string {
  return `${range[0].toLocaleString('de-DE')} – ${range[1].toLocaleString('de-DE')} €`;
}

export function getPricedCategory(device: DeviceKey): PricedDeviceCategory | null {
  if (device === 'hdd' || device === 'ssd' || device === 'notebook') return 'hddSsd';
  if (device === 'usb') return 'flash';
  return null;
}

/** Notebook, RAID, Smartphone: nach Schaden direkt Formular (kein Service-Level) */
export function skipsServiceFlow(device: DeviceKey): boolean {
  return device === 'notebook' || device === 'raid' || device === 'smartphone';
}

export function showsDamagePriceBadges(device: DeviceKey): boolean {
  return getPricedCategory(device) !== null;
}
