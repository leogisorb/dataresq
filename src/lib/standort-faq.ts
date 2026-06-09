import type { Location } from './locations';

export interface StandortFaqItem {
  question: string;
  answer: string;
}

export function getStandortFaqs(loc: Location): StandortFaqItem[] {
  return [
    {
      question: 'Kann ich das Medium persönlich vorbeibringen?',
      answer: loc.serviceNote,
    },
    {
      question: `Wie lange dauert die Datenrettung ab ${loc.name}?`,
      answer: `Bei Versand aus ${loc.name} in der Regel 3–5 Werktage. Express-Option: 24h nach Eingang im Labor.`,
    },
    {
      question: `Gibt es einen lokalen Ansprechpartner in ${loc.name}?`,
      answer: `Ja — persönlicher Kontakt per Telefon und E-Mail. Wir arbeiten bundesweit per Versandservice; ${loc.serviceNote}`,
    },
  ];
}
