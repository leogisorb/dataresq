import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import {
  ANALYSIS_DURATION,
  DECLINED_RECOVERY_NOTE,
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
    answer: `Preisrahmen: HDD/SSD Standard 899 – 1.799 €, Express 1.149 – 2.049 € · Flash Standard 699 – 999 €, Express 949 – 1.249 € · RAID / NAS / Server individuell · Notfall auf Anfrage. Warum dieses Modell? Weil Sie nur dann eine gute Entscheidung treffen können, wenn Sie Preis und rettbare Daten kennen, bevor Sie zahlen. Nutzen Sie unseren Preisrahmen-Rechner unter ${CALCULATOR_PAGE_PATH}. ${NO_COST_GUARANTEE_NOTE}`,
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
