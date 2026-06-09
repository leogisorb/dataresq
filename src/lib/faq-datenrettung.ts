import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';

export const datenrettungFaqs = [
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard 3–5 Werktage nach Eingang des Mediums. Notfallbearbeitung binnen 24–48 Stunden auf Anfrage möglich (+70% Aufschlag).',
  },
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Der Preis hängt vom Medium und Schadenstyp ab. Richtwerte: HDD ab 149 €, SSD ab 199 €, RAID ab 399 €. Nutzen Sie unseren Preisrechner für eine sofortige Schätzung.',
  },
  {
    question: 'Was kostet die Erstprüfung?',
    answer: `Die Erstprüfung inklusive schriftlichem Kostenvoranschlag kostet ${DIAGNOSIS_FEE_FORMATTED}. Die kostenpflichtige Datenrettung zahlen Sie erst nach Ihrer Beauftragung zum vereinbarten Festpreis.`,
  },
];
