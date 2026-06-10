import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';

export const datenrettungFaqs = [
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage nach Eingang. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
  },
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Preisrahmen: HDD/SSD Standard 899 – 1.799 €, Express 1.099 – 1.999 € · Flash Standard 699 – 999 €, Express 899 – 1.199 € · RAID / NAS / Server individuell · Notfall auf Anfrage. Warum dieses Modell? Weil Sie nur dann eine gute Entscheidung treffen können, wenn Sie Preis und rettbare Daten kennen, bevor Sie zahlen. Das Risiko einer erfolglosen Rettung tragen wir — nicht Sie.',
  },
  {
    question: 'Was kostet die Analysepauschale?',
    answer: `Die Analysepauschale von ${DIAGNOSIS_FEE_FORMATTED} deckt die Laboranalyse und Dateiliste. Bei Beauftragung wird sie zu 100 % auf Ihren Festpreis angerechnet. Können wir nichts retten, zahlen Sie keinen Cent — inklusive kostenlosem Rückversand.`,
  },
];
