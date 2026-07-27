import {
  ANALYSIS_DURATION,
  DECLINED_RECOVERY_NOTE,
  FAILED_RECOVERY_NOTE,
  FREE_DIAGNOSIS_NOTE,
} from '@/lib/constants';

export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: FaqItem[] = [
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Preisrahmen je Medientyp und Service-Level: Festplatte (HDD) / SSD — Standard (3–5 AT) 899 – 1.799 €, Express (1–2 AT) 1.149 – 2.049 €. Flash (USB-Stick, Speicherkarte) — Standard 699 – 999 €, Express 949 – 1.249 €. RAID / NAS / Server: individuell nach kostenloser Voranfrage. Notfall (24/7): auf Anfrage. Alle Preise inkl. MwSt.',
  },
  {
    question: 'Was passiert nach der Analyse?',
    answer: `Sie erhalten Dateiliste und verbindliches Angebot. ${FREE_DIAGNOSIS_NOTE} ${FAILED_RECOVERY_NOTE} Rückversand ist kostenlos.`,
  },
  {
    question: 'Wie lange dauert die Laboranalyse?',
    answer: `Die technische Analyse inklusive Dateiliste dauert in der Regel ${ANALYSIS_DURATION} nach Eingang. Danach erhalten Sie ein verbindliches Angebot.`,
  },
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage nach Eingang. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
  },
  {
    question: 'Was kostet die Analysepauschale?',
    answer: `${FREE_DIAGNOSIS_NOTE} ${FAILED_RECOVERY_NOTE} ${DECLINED_RECOVERY_NOTE} Rückversand ist kostenlos.`,
  },
  {
    question: 'Gilt der Preis auch für RAID-Systeme?',
    answer:
      'RAID-, NAS- und Server-Systeme bepreisen wir individuell nach kostenloser Voranfrage. Der Rechner zeigt für diese Medien „auf Anfrage“ — nach der Analyse erhalten Sie ein verbindliches Angebot.',
  },
];
