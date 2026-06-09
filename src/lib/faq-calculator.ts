export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: FaqItem[] = [
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Die Kosten hängen von Datenträger, Schadensart und Dringlichkeit ab. Typische Preise: HDD 290–1.200 €, SSD 390–1.400 €, RAID ab 890 €. Die Diagnose ist immer kostenlos.',
  },
  {
    question: 'Was bedeutet No Recovery, No Fee?',
    answer:
      'Sie zahlen nichts, wenn keine Daten gerettet werden können. Die Diagnose ist kostenlos, eine Kostenübernahme entsteht erst nach erfolgter Datenrettung.',
  },
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 10–14 Werktage. Express: 3–5 Werktage. Notfall: 24–48 Stunden. Alle Aufträge werden in unserem Reinraum ISO Klasse 5 bearbeitet.',
  },
  {
    question: 'Ist die Diagnose wirklich kostenlos?',
    answer:
      'Ja. Die Erstdiagnose und der schriftliche Kostenvoranschlag sind für Sie vollständig kostenlos und unverbindlich. Erst nach Ihrer Beauftragung beginnt die kostenpflichtige Datenrettung zum vereinbarten Festpreis.',
  },
  {
    question: 'Gilt der Preis auch für RAID-Systeme?',
    answer:
      'RAID- und NAS-Systeme erfordern eine individuelle Bewertung. Unser Rechner zeigt Richtwerte für gängige RAID-Konfigurationen. Für komplexe Setups erstellen wir nach der Diagnose ein individuelles Angebot.',
  },
];
