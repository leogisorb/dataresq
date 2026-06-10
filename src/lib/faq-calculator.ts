import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';

export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: FaqItem[] = [
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Preisrahmen je Medientyp und Service-Level: Festplatte (HDD) / SSD — Standard (3–5 AT) 899 – 1.799 €, Express (1–2 AT) 1.099 – 1.999 €. Flash (USB-Stick, Speicherkarte) — Standard 699 – 999 €, Express 899 – 1.199 €. RAID / NAS / Server: individuell nach kostenloser Voranfrage. Notfall (24/7): auf Anfrage. Alle Preise inkl. MwSt.',
  },
  {
    question: 'Was passiert nach der Analyse?',
    answer: `Die Analysepauschale von ${DIAGNOSIS_FEE_FORMATTED} wird bei Beauftragung zu 100 % auf Ihren Festpreis angerechnet — die Analyse kostet Sie dann effektiv nichts. Können wir nichts retten, entfällt die Pauschale vollständig, inklusive kostenlosem Rückversand.`,
  },
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage nach Eingang. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
  },
  {
    question: 'Was kostet die Analysepauschale?',
    answer: `Die Analysepauschale von ${DIAGNOSIS_FEE_FORMATTED} deckt die vollständige Laboranalyse und die Dateiliste im Kundenportal. Bei Beauftragung wird sie vollständig verrechnet. Nur wenn Ihre Daten nachweislich rettbar sind und Sie sich gegen die Rettung entscheiden, berechnen wir ${DIAGNOSIS_FEE_FORMATTED} als Aufwandspauschale.`,
  },
  {
    question: 'Gilt der Preis auch für RAID-Systeme?',
    answer:
      'RAID-, NAS- und Server-Systeme bepreisen wir individuell nach kostenloser Voranfrage. Der Rechner zeigt für diese Medien „auf Anfrage“ — nach der Analyse erhalten Sie ein verbindliches Angebot.',
  },
];
