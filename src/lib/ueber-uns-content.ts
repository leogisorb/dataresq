import {
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

export const FEELGOOD_MANAGER = {
  title: 'Unsere Feelgood-Managerin',
  body: 'Im Büro in Köln sorgt unsere Katze für gute Stimmung. Ins Labor darf sie leider nicht.',
  image: null as string | null,
  imageAlt: 'Feelgood-Managerin — Bürokatze bei RSQDATA',
} as const;

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

export type ComparisonRating = 'yes' | 'partial' | 'no';

export interface ComparisonRow {
  feature: string;
  muench: ComparisonRating;
  competitor: ComparisonRating;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Reinraumlabor-Zugang', muench: 'yes', competitor: 'no' },
  { feature: 'Verbindliches Angebot vor Beauftragung', muench: 'yes', competitor: 'partial' },
  { feature: 'Transparente Analysepauschale', muench: 'yes', competitor: 'partial' },
  { feature: 'DSGVO / AVV für Unternehmen', muench: 'yes', competitor: 'partial' },
  { feature: 'Abgabestellen & DHL-Abholung', muench: 'yes', competitor: 'partial' },
];

export const comparisonRatingLabels: Record<ComparisonRating, string> = {
  yes: 'Ja',
  partial: 'Teilweise',
  no: 'Nein',
};
