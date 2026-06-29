export type CertificationIconKey = 'award' | 'microscope' | 'shield' | 'handshake';

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
