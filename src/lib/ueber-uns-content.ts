import {
  DIAGNOSIS_FEE_FORMATTED,
  LAB_PARTNER,
  LAB_PARTNER_ADDRESS_LINE,
  LAB_PARTNER_NOTE,
} from '@/lib/constants';

export type CertificationIconKey = 'microscope' | 'shield' | 'handshake';

export const ABOUT_STORY_HEADLINE =
  'Seit 2013 begleiten wir Sie bei Datenverlust — heute aus Köln.' as const;

export const ABOUT_STORY_IMAGE = '/images/ueber-uns/hdd-hand.png' as const;

export const ABOUT_STORY_IMAGE_ALT =
  'Offene Festplatte in den Händen — professionelle Datenrettung' as const;

export const aboutStoryParagraphs: readonly string[] = [
  '2013 haben wir in Grevenbroich angefangen — mit Handy-Reparatur, Displays und Akkus. Schnell kamen Fälle dazu, bei denen es nicht nur ums Gerät ging, sondern um die Daten darauf.',
  'Heute ist RSQDATA Ihr Ansprechpartner in Deutschland: Annahme, Beratung, Analyse-Koordination und verbindliches Angebot — aus unserem Büro in Köln. Persönliche Abgabe geht auch an unseren Partner iAmbulanz in Grevenbroich und Mönchengladbach.',
  'Für Sie ändert sich der Ablauf nicht: Sie senden Ihr Medium ein oder geben es ab, erhalten nach der Analyse Dateiliste und Angebot — und entscheiden erst dann.',
];

export const labPartnerBullets: readonly string[] = [
  `Reinraumlabor unseres Partners ${LAB_PARTNER.name} (UK)`,
  'Mechanische HDD-Rettung unter kontrollierten Bedingungen',
  'RSQDATA koordiniert Übergabe, Analyse und Kommunikation aus Köln',
  'Dokumentierter Ablauf von Annahme bis Rückgabe der Daten',
];

export const labPartnerIntro = LAB_PARTNER_NOTE;

export const labPartnerAddressLine = LAB_PARTNER_ADDRESS_LINE;

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
    rsqdata: `${DIAGNOSIS_FEE_FORMATTED} pauschal, bei Beauftragung voll verrechnet`,
    industry: '„Kostenlos“ – dafür oft höhere Rettungspreise',
  },
  {
    feature: 'Preisangabe vor Einsendung',
    rsqdata: 'Konkreter Preisrahmen im Online-Rechner',
    industry: 'Erst nach Einsendung',
  },
  {
    feature: 'Angebot',
    rsqdata: 'Verbindlicher Festpreis mit Maximalpreis-Garantie',
    industry: 'Kostenvoranschlag, Nachberechnung möglich',
  },
  {
    feature: 'Dateiliste vor Beauftragung',
    rsqdata: 'Ja – Sie sehen, was rettbar ist',
    industry: 'Selten',
  },
  {
    feature: 'Keine Rettung',
    rsqdata: `Nur ${DIAGNOSIS_FEE_FORMATTED} Analysepauschale`,
    industry: 'Teils Bearbeitungs-/Rücksendegebühren',
  },
  {
    feature: 'Abgabe vor Ort',
    rsqdata: 'Mönchengladbach & Grevenbroich, persönlich',
    industry: 'Nur Versand oder Kurier',
  },
];
