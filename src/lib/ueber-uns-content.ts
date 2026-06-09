export interface Certification {
  icon: string;
  title: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    icon: '🏅',
    title: 'ISO 9001',
    description: 'Zertifiziertes Qualitätsmanagement für reproduzierbare Datenrettungsprozesse.',
  },
  {
    icon: '🔬',
    title: 'Reinraum ISO 5',
    description: 'Staubfreie Umgebung für mechanische Festplattenrettung nach ISO-Klasse 5.',
  },
  {
    icon: '🔒',
    title: 'DSGVO-konform',
    description: 'Datenschutzkonforme Verarbeitung — AVV für Unternehmenskunden verfügbar.',
  },
  {
    icon: '🤝',
    title: 'Mitglied [VERBAND]',
    description: 'Mitgliedschaft in [VERBAND] — anerkannte Branchenstandards und Weiterbildung.',
  },
];

export interface ComparisonRow {
  feature: string;
  muench: string;
  competitor: string;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Reinraumlabor', muench: '✅ Eigenes', competitor: '❌ Oft extern' },
  { feature: 'Ersatzteillager', muench: '✅ 14.000+', competitor: '⚠️ Begrenzt' },
  { feature: 'Festpreis', muench: '✅ Immer', competitor: '⚠️ Oft variabel' },
  { feature: 'No Cure No Pay', muench: '✅ Garantiert', competitor: '⚠️ Nicht immer' },
  { feature: 'Kein Outsourcing', muench: '✅ 100%', competitor: '❌ Häufig' },
  { feature: 'DSGVO / AVV', muench: '✅', competitor: '⚠️ Selten' },
];

export const reinraumBullets = [
  'Reinraum ISO-Klasse 5',
  'Über 14.000 Ersatzteile im Lager',
  'Alle Arbeiten intern — kein Outsourcing',
  'Sichere, verschlüsselte Datenspeicherung',
];
