import type { Location } from './locations';

export interface StandortFaqItem {
  question: string;
  answer: string;
}

export function getStandortFaqs(loc: Location): StandortFaqItem[] {
  return [
    {
      question: 'Kann ich das Medium persönlich vorbeibringen?',
      answer: `${loc.serviceNote} Unsere Kundenbetreuung dokumentiert den Zustand gemeinsam mit Ihnen und beantwortet Ihre Fragen direkt vor Ort.`,
    },
    {
      question: `Wie lange dauert die Datenrettung ab ${loc.name}?`,
      answer:
        'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
    },
    {
      question: `Gibt es eine kostenlose Abholung in ${loc.name}?`,
      answer:
        'Ja — DHL Express holt Ihren Datenträger kostenlos und versichert an Ihrer Haustür oder im Büro ab. Auf Wunsch senden wir vorab eine kostenlose Schutzbox mit Verpackungsanleitung.',
    },
  ];
}
