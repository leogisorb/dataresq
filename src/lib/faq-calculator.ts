import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';

export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: FaqItem[] = [
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Die Kosten hängen von Datenträger, Schadensart und Dringlichkeit ab. Typische Preise: HDD 290–1.200 €, SSD 390–1.400 €, RAID ab 890 €. Die Erstprüfung kostet 39 €.',
  },
  {
    question: 'Was passiert nach der Erstprüfung?',
    answer: `Die Prüfgebühr von ${DIAGNOSIS_FEE_FORMATTED} fällt für die Schadensanalyse und den Kostenvoranschlag an. Die kostenpflichtige Datenrettung zahlen Sie erst nach Ihrer Beauftragung — zum vereinbarten Festpreis.`,
  },
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 10–14 Werktage. Notfall: 24–48 Stunden. Alle Aufträge werden in unserem Reinraum ISO Klasse 5 bearbeitet.',
  },
  {
    question: 'Was kostet die Erstprüfung?',
    answer: `Die Erstprüfung inklusive schriftlichem Kostenvoranschlag kostet ${DIAGNOSIS_FEE_FORMATTED}. Erst nach Ihrer Beauftragung beginnt die kostenpflichtige Datenrettung zum vereinbarten Festpreis.`,
  },
  {
    question: 'Gilt der Preis auch für RAID-Systeme?',
    answer:
      'RAID- und NAS-Systeme erfordern eine individuelle Bewertung. Unser Rechner zeigt Richtwerte für gängige RAID-Konfigurationen. Für komplexe Setups erstellen wir nach der Prüfung ein individuelles Angebot.',
  },
];
