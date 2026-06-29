export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image: string;
}

export const FOUNDING_YEAR = 2013 as const;
export const FOUNDING_LOCATION = 'Grevenbroich' as const;
export const RESCUED_DATASETS = '12.000' as const;

export const TEAM: TeamMember[] = [
  {
    name: '[VOLLSTÄNDIGER NAME]',
    role: 'Gründer & Technischer Leiter',
    bio: '[2–3 Sätze Fachkompetenz, Jahre Erfahrung, Spezialisierung — z. B. über 15 Jahre Erfahrung in mechanischer und logischer Datenrettung, Spezialisierung auf RAID-Systeme und SSD-Controller-Reparatur.]',
    credentials: ['[Zertifikat 1]', '[Zertifikat 2]'],
    image: '/images/team/gruender.svg',
  },
  {
    name: '[VOLLSTÄNDIGER NAME 2]',
    role: 'Senior Datenrettungs-Techniker',
    bio: '[2–3 Sätze Fachkompetenz — z. B. Experte für Festplatten-Mechanik und Reinraumarbeiten, zertifiziert in ISO-Klasse-5-Umgebungen.]',
    credentials: ['[Zertifikat 1]'],
    image: '/images/team/techniker.svg',
  },
  {
    name: '[VOLLSTÄNDIGER NAME 3]',
    role: 'Spezialist Logische Datenrettung',
    bio: '[2–3 Sätze Fachkompetenz — z. B. Spezialist für Dateisysteme, RAID-Rekonstruktion und forensische Datenanalyse.]',
    credentials: ['[Zertifikat 1]', '[Zertifikat 2]'],
    image: '/images/team/spezialist.svg',
  },
];
