export const SITE = {
  phone: '+49 151 27064982',
  phoneTel: '+4915127064982',
  email: 'info@rsqdata.de',
  address: {
    street: 'Pellenzstr. 15',
    city: 'Köln',
    zip: '50823',
    country: 'DE',
  },
  openingHours: {
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '09:00',
    closes: '18:00',
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

export const FREE_DIAGNOSIS_NOTE =
  `Die Laboranalyse inklusive Dateiliste kostet bei uns ${DIAGNOSIS_FEE_FORMATTED} — ohne Analysepauschale.` as const;

export const FREE_DIAGNOSIS_CAPTION = 'Analysepauschale — bei uns kostenlos' as const;

/** Dauer der Laboranalyse bis Dateiliste und Angebot */
export const ANALYSIS_DURATION = '48–72 h' as const;

/** Bei erfolgloser Rettung: keine Kosten */
export const FAILED_RECOVERY_NOTE =
  'Können wir nichts retten, entstehen Ihnen keine Kosten — keinen Rettungspreis und keine Analysegebühr.' as const;

export const FAILED_RECOVERY_BADGE = 'Keine Rettung = keine Kosten' as const;

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
export type DamageKey = 'del' | 'mech' | 'water' | 'ctrl' | 'enc' | 'crash' | 'unknown';
export type UrgencyKey = 'std' | 'express' | 'notfall';
/** Datenübergabe: neuer Datenträger, Downloadlink oder beides */
export type ReturnMediumKey = 'new' | 'download' | 'both';

export type DeviceCategory = 'hddSsd' | 'flash' | 'smartphone' | 'notebook';

/** Express-Aufpreis gegenüber Standard (Preisindikator im Rechner) */
export const EXPRESS_SURCHARGE = 250 as const;

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
    hddSsd: [1149, 2049],
    flash: [949, 1249],
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
