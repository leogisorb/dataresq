import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import {
  ANALYSIS_DURATION,
  BASE_PRICES,
  DECLINED_RECOVERY_NOTE,
  EXPRESS_SURCHARGE,
  formatPriceEuro,
  LAB_PARTNER_NOTE,
  NO_COST_GUARANTEE_NOTE,
} from '@/lib/constants';

export interface DatenrettungFaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Single source for /datenrettung FAQ UI + FAQPage JSON-LD */
export const datenrettungFaqs: DatenrettungFaqItem[] = [
  {
    id: 'labor',
    question: 'Wo findet die Datenrettung statt?',
    answer: LAB_PARTNER_NOTE,
  },
  {
    id: 'analyse-dauer',
    question: 'Wie lange dauert die Laboranalyse?',
    answer: `Die technische Analyse inklusive Dateiliste dauert in der Regel ${ANALYSIS_DURATION} nach Eingang Ihres Datenträgers. Danach erhalten Sie ein verbindliches Angebot.`,
  },
  {
    id: 'dauer',
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage nach Eingang. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
  },
  {
    id: 'kosten',
    question: 'Was kostet eine Datenrettung?',
    answer: `Festpreise inkl. MwSt.: HDD/SSD/Notebook logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)} · Flash logisch ${formatPriceEuro(BASE_PRICES.flash.logical)}, physisch ${formatPriceEuro(BASE_PRICES.flash.physical)} · Express +${EXPRESS_SURCHARGE} € · RAID/NAS/Smartphone nach Analyse · Notfall auf Anfrage. Verbindlicher Festpreis nach der kostenlosen Analyse. Nutzen Sie unseren Preisrechner unter ${CALCULATOR_PAGE_PATH}. ${NO_COST_GUARANTEE_NOTE}`,
  },
  {
    id: 'pruefgebuehr',
    question: 'Was kostet die Analysepauschale?',
    answer: `${NO_COST_GUARANTEE_NOTE} ${DECLINED_RECOVERY_NOTE} Rückversand ist kostenlos.`,
  },
  {
    id: 'sicherheit',
    question: 'Sind meine Daten bei Ihnen sicher?',
    answer:
      'Ja. DSGVO-konforme Verarbeitung, verschlüsselte Übertragung und zertifizierte Löschung mit Nachweis. Für Unternehmen schließen wir einen AVV (Auftragsverarbeitung) ab.',
  },
  {
    id: 'medien',
    question: 'Welche Medien können Sie retten?',
    answer:
      'Festplatten (2,5" und 3,5"), SSDs (SATA, NVMe, M.2), RAID-Arrays, NAS-Systeme, USB-Sticks, SD-Karten und Smartphones.',
  },
];
