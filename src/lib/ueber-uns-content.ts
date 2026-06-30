export type CertificationIconKey = 'award' | 'microscope' | 'shield' | 'handshake';

export const ABOUT_STORY_HEADLINE = 'Wir retten Daten. Seit 2013.' as const;

export const ABOUT_STORY_IMAGE = '/images/ueber-uns/hdd-hand.png' as const;

export const ABOUT_STORY_IMAGE_ALT =
  'Offene Festplatte in den Händen, mechanische Datenrettung im Reinraum' as const;

export const aboutStoryParagraphs: readonly string[] = [
  '2013 haben wir in Grevenbroich angefangen. Damals ging es um das Übliche: kaputte Handys, gerissene Displays, tote Akkus. Repariert, abgeholt, weiter.',
  'Dann kamen die Fälle, bei denen andere aufgegeben hatten. Geräte, die nicht mehr starteten. Platinen mit Kurzschluss. Wasserschäden, die tiefer gingen als jedes Display. Statt abzulehnen haben wir Microsoldering gelernt, auf Chip- und Board-Level, mit Equipment, das in normalen Reparaturläden nicht auf dem Tisch liegt.',
  'Irgendwann lag die erste Festplatte bei uns. Seitdem haben wir damit nicht mehr aufgehört. Wir haben einen Reinraum gebaut, Head-Crashes repariert und SSDs gerettet, die kein Diagnose-Tool mehr erkennen.',
  'Heute sind wir ein Datenrettungslabor, das aus einer Handywerkstatt gewachsen ist. Dazu gehören über zehn Jahre Praxis, ein Reinraum nach ISO 5, Microsoldering auf Profi-Niveau und zwei Abgabestellen in Grevenbroich und Mönchengladbach.',
];

export const FEELGOOD_MANAGER = {
  title: 'Unsere Feelgood-Managerin',
  body: 'Im Büro sorgt unsere Katze für gute Stimmung. Ins Labor darf sie leider nicht.',
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
    iconKey: 'award',
    iconClass: 'text-accent',
    iconBgClass: 'bg-accent/10',
    title: 'ISO 9001',
    description: 'Zertifiziertes Qualitätsmanagement für reproduzierbare Datenrettungsprozesse.',
  },
  {
    iconKey: 'microscope',
    iconClass: 'text-chevron-1',
    iconBgClass: 'bg-chevron-1/15',
    title: 'Reinraum ISO 5',
    description: 'Staubfreie Umgebung für mechanische Festplattenrettung nach ISO-Klasse 5.',
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
    title: 'Internationaler Verband',
    description:
      'Mitgliedschaft in einem internationalen Fachverband — anerkannte Branchenstandards und regelmäßige Weiterbildung.',
  },
];

export type ComparisonRating = 'yes' | 'partial' | 'no';

export interface ComparisonRow {
  feature: string;
  muench: ComparisonRating;
  competitor: ComparisonRating;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Eigenes Reinraumlabor ISO 5', muench: 'yes', competitor: 'no' },
  { feature: 'Ersatzteillager (14.000+ Teile)', muench: 'yes', competitor: 'partial' },
  { feature: 'Festpreis vor Beauftragung', muench: 'yes', competitor: 'partial' },
  { feature: 'Transparente Analysepauschale', muench: 'yes', competitor: 'partial' },
  { feature: 'DSGVO / AVV für Unternehmen', muench: 'yes', competitor: 'partial' },
  { feature: 'Abgabestellen & DHL-Abholung', muench: 'yes', competitor: 'partial' },
];

export const comparisonRatingLabels: Record<ComparisonRating, string> = {
  yes: 'Ja',
  partial: 'Teilweise',
  no: 'Nein',
};
