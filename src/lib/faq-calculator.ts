export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: FaqItem[] = [
  {
    question: 'Was kostet eine Datenrettung?',
    answer:
      'Die Kosten hängen von Medium und Schadenstyp ab. Einfache logische Schäden an USB-Sticks beginnen bei ca. 99 €, mechanische HDD-Schäden liegen zwischen 349 € und 699 €. Unser Preisrechner gibt Ihnen eine realistische Richtspanne — der verbindliche Festpreis folgt nach der kostenlosen Diagnose.',
  },
  {
    question: 'Zahle ich auch wenn keine Daten gerettet werden?',
    answer:
      'Nein. Bei DATARESQ gilt: Kein Befund = keine Kosten. Sie erhalten vor Beauftragung einen Festpreis auf Basis der Diagnose. Wird nichts gerettet, entstehen Ihnen keine Kosten.',
  },
  {
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Im Standard-Service dauert die Datenrettung in der Regel 3–5 Werktage. Mit dem Express-Service (24h) bearbeiten wir Ihren Fall prioritär — gegen einen Aufschlag von 30 % auf die Richtpreisspanne.',
  },
  {
    question: 'Ist die Diagnose wirklich kostenlos?',
    answer:
      'Ja. Die Erstdiagnose und der schriftliche Kostenvoranschlag sind für Sie vollständig kostenlos und unverbindlich. Erst nach Ihrer Beauftragung beginnt die kostenpflichtige Datenrettung zum vereinbarten Festpreis.',
  },
  {
    question: 'Gilt der Preis auch für RAID-Systeme?',
    answer:
      'RAID- und NAS-Systeme erfordern eine individuelle Bewertung. Unser Rechner zeigt Richtwerte für gängige RAID-Konfigurationen. Für komplexe Setups (z. B. mehrere defekte Platten, Enterprise-RAID) erstellen wir nach der Diagnose ein individuelles Angebot.',
  },
];
