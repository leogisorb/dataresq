import { LEGAL } from '@/lib/constants';

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
export const YEARS_EXPERIENCE = new Date().getFullYear() - FOUNDING_YEAR;

/** Nur reale Profile — Platzhalter werden herausgefiltert */
export const TEAM: TeamMember[] = [
  {
    name: LEGAL.ownerName,
    role: 'Gründer & Geschäftsführer',
    bio: `Seit ${FOUNDING_YEAR} begleitet ${LEGAL.ownerName} Kundinnen und Kunden bei Datenverlust — zuerst in ${FOUNDING_LOCATION}, heute mit Koordination aus Köln. Schwerpunkt: transparente Preise, kostenlose Analyse inkl. Dateiliste und verbindliches Angebot vor Beauftragung. Über ${RESCUED_DATASETS} gerettete Datensätze (intern erfasst).`,
    credentials: [`Seit ${FOUNDING_YEAR}`, `${YEARS_EXPERIENCE}+ Jahre`, 'NRW · Köln'],
    image: '/images/team/gruender.svg',
  },
];

export function getPublicTeamMembers(): TeamMember[] {
  return TEAM.filter((member) => !member.name.includes('[') && !member.bio.includes('['));
}
