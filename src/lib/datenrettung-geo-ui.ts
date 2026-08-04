import {
  ANALYSIS_DURATION,
  BASE_PRICES,
  DIAGNOSIS_FEE_FORMATTED,
  formatPriceEuro,
  formatPriceRange,
  LEGAL,
  NO_COST_GUARANTEE_NOTE,
  PRICE_DISPLAY,
} from '@/lib/constants';

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const DATENRETTUNG_GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Datenrettung',
    definition:
      'Wiederherstellung von Dateien von defekten, gelöschten oder nicht zugänglichen Speichermedien — ohne weitere Schreibzugriffe auf das Originalmedium.',
  },
  {
    term: 'Logischer Defekt',
    definition: `Datenverlust ohne Hardware-Bruch (gelöscht, formatiert, Dateisystemfehler). Festpreis HDD/SSD ab ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, Flash ab ${formatPriceEuro(BASE_PRICES.flash.logical)} (inkl. MwSt.).`,
  },
  {
    term: 'Physischer Defekt',
    definition: `Hardware-Schaden (Mechanik, Controller, Elektronik). Festpreis HDD/SSD ${formatPriceEuro(BASE_PRICES.hddSsd.physical)}, Flash ${formatPriceEuro(BASE_PRICES.flash.physical)} (inkl. MwSt.).`,
  },
  {
    term: 'Laboranalyse inkl. Dateiliste',
    definition: `Technische Diagnose mit Übersicht der rettbaren Dateien — bei RSQDATA ${DIAGNOSIS_FEE_FORMATTED}, Dauer in der Regel ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE}`,
  },
];

export const FOUNDER_EXPERT_QUOTE = {
  quote:
    'Sie sollen den Preis und die Dateiliste kennen, bevor Sie beauftragen — nicht danach. Genau deshalb ist die Analyse bei uns kostenlos und das Angebot verbindlich.',
  attribution: LEGAL.ownerName,
  role: 'Gründer, RSQDATA · seit 2013',
} as const;

export const PILLAR_CITATION_ANSWER = {
  question: 'Was ist professionelle Datenrettung?',
  answer: `Professionelle Datenrettung stellt Dateien von HDD, SSD, RAID, NAS, USB und Smartphones wieder her — ohne Ihr Original zu überschreiben. Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. Preisrahmen HDD/SSD ${formatPriceRange(PRICE_DISPLAY.hddSsd)}, Flash ${formatPriceRange(PRICE_DISPLAY.flash)} (inkl. MwSt.).`,
  facts: [
    { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
    { label: 'HDD/SSD', value: formatPriceRange(PRICE_DISPLAY.hddSsd) },
    { label: 'Flash', value: formatPriceRange(PRICE_DISPLAY.flash) },
    { label: 'NRW-Abgabe', value: 'Grevenbroich & Mönchengladbach' },
  ],
} as const;
