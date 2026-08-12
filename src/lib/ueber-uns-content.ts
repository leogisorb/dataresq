import { DIAGNOSIS_FEE_FORMATTED, LAB_PARTNER, LAB_PARTNER_NOTE } from '@/lib/constants';

export type CertificationIconKey = 'microscope' | 'shield' | 'handshake';

export const ABOUT_STORY_HEADLINE_LEAD =
  'Seit 2013 begleiten wir Sie bei Datenverlust —' as const;

export const ABOUT_STORY_HEADLINE_ACCENT = 'heute aus Köln.' as const;

/** Full headline — for metadata / plain-text contexts */
export const ABOUT_STORY_HEADLINE =
  `${ABOUT_STORY_HEADLINE_LEAD} ${ABOUT_STORY_HEADLINE_ACCENT}` as const;

export const ABOUT_STORY_IMAGE = '/images/ueber-uns/hdd-hand.webp' as const;

export const ABOUT_STORY_IMAGE_ALT =
  'Offene Festplatte in den Händen — professionelle Datenrettung' as const;

export const ABOUT_STORY_IMAGE_TILE = {
  eyebrow: 'RSQDATA',
  title: 'Von der Werkstatt zum Labor',
  subtitle: 'Von Grevenbroich nach Köln',
} as const;

export type AboutStoryIconKey = 'history' | 'building' | 'route';

export interface AboutStoryTile {
  headline: string;
  icon: AboutStoryIconKey;
  body: string;
  /** Tailwind text color — RSQ palette, no green */
  accentClass: string;
}

export const aboutStoryTiles: readonly AboutStoryTile[] = [
  {
    headline: '2013',
    icon: 'history',
    accentClass: 'text-chevron-1',
    body: '2013 haben wir in Grevenbroich angefangen — mit Handy-Reparatur, Displays und Akkus. Schnell kamen Fälle dazu, bei denen es nicht nur ums Gerät ging, sondern um die Daten darauf.',
  },
  {
    headline: 'Heute',
    icon: 'building',
    accentClass: 'text-chevron-2',
    body: 'Heute ist RSQDATA Ihr Ansprechpartner in Deutschland: Annahme, Beratung, Analyse-Koordination und verbindliches Angebot — aus unserem Büro in Köln. Persönliche Abgabe geht auch an unseren Partner iAmbulanz in Grevenbroich und Mönchengladbach.',
  },
  {
    headline: 'Ablauf',
    icon: 'route',
    accentClass: 'text-chevron-4',
    body: 'Für Sie ändert sich der Ablauf nicht: Sie senden Ihr Medium ein oder geben es ab, erhalten nach der Analyse Dateiliste und Angebot — und entscheiden erst dann.',
  },
];

export const labPartnerBullets: readonly string[] = [
  `Reinraumlabor unseres Partners ${LAB_PARTNER.name} (UK)`,
  'Mechanische HDD-Rettung unter kontrollierten Bedingungen',
  'RSQDATA koordiniert Übergabe, Analyse und Kommunikation aus Köln',
  'Dokumentierter Ablauf von Annahme bis Rückgabe der Daten',
];

export const labPartnerIntro = LAB_PARTNER_NOTE;

export interface Certification {
  iconKey: CertificationIconKey;
  iconClass: string;
  iconBgClass: string;
  title: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    iconKey: 'microscope',
    iconClass: 'text-chevron-1',
    iconBgClass: 'bg-chevron-1/15',
    title: 'Reinraumlabor',
    description: 'Mechanische HDD-Rettung unter kontrollierten Bedingungen.',
  },
  {
    iconKey: 'shield',
    iconClass: 'text-success',
    iconBgClass: 'bg-success/10',
    title: 'DSGVO-konform',
    description: 'Datenschutzkonforme Verarbeitung — AVV für Unternehmenskunden verfügbar.',
  },
  {
    iconKey: 'handshake',
    iconClass: 'text-chevron-2',
    iconBgClass: 'bg-chevron-2/15',
    title: 'Abgabepartner iAmbulanz',
    description:
      'Persönliche Übergabe in Grevenbroich und Mönchengladbach — ohne Termin, mit dokumentiertem Protokoll.',
  },
];

export interface ComparisonRow {
  feature: string;
  rsqdata: string;
  industry: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Analysekosten',
    rsqdata: `${DIAGNOSIS_FEE_FORMATTED} — wirklich kostenlose Analyse inkl. Dateiliste`,
    industry: 'Analysegebühr oder „kostenlos“ mit Aufschlag im Rettungspreis',
  },
  {
    feature: 'Preisangabe vor Einsendung',
    rsqdata: 'Konkreter Festpreis-Indikator im Online-Rechner',
    industry: 'Erst nach Einsendung',
  },
  {
    feature: 'Angebot',
    rsqdata: 'Verbindlicher Festpreis vor Beauftragung',
    industry: 'Kostenvoranschlag, Nachberechnung möglich',
  },
  {
    feature: 'Dateiliste vor Beauftragung',
    rsqdata: 'Ja – Sie sehen, was rettbar ist',
    industry: 'Selten',
  },
  {
    feature: 'Keine Rettung',
    rsqdata: `${DIAGNOSIS_FEE_FORMATTED} — keine Kosten`,
    industry: 'Teils Bearbeitungs-/Rücksendegebühren',
  },
  {
    feature: 'Abgabe vor Ort',
    rsqdata: 'Mönchengladbach & Grevenbroich, persönlich',
    industry: 'Nur Versand oder Kurier',
  },
];
