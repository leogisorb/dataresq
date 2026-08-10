import {
  ANALYSIS_DURATION,
  BASE_PRICES,
  DECLINED_RECOVERY_NOTE,
  EXPRESS_SURCHARGE,
  formatPriceEuro,
  formatPriceRange,
  NO_COST_GUARANTEE_NOTE,
  PRICE_DISPLAY,
} from '@/lib/constants';

export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: FaqItem[] = [
  {
    question: 'Was kostet eine Datenrettung?',
    answer: `Festpreise inkl. MwSt. nach Schadenart: Festplatte (HDD) / SSD / Notebook — logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)} (Rahmen ${formatPriceRange(PRICE_DISPLAY.hddSsd)}). Flash (USB-Stick, Speicherkarte) — logisch ${formatPriceEuro(BASE_PRICES.flash.logical)}, physisch ${formatPriceEuro(BASE_PRICES.flash.physical)}. Express: +${EXPRESS_SURCHARGE} €. RAID / NAS / Server und Smartphone: Preis nach kostenloser Analyse. Notfall (24/7): auf Anfrage. Verbindlicher Festpreis nach der Analyse.`,
  },
  {
    question: 'Was passiert nach der Analyse?',
    answer: `Sie erhalten Dateiliste und verbindliches Angebot. ${NO_COST_GUARANTEE_NOTE} Rückversand ist kostenlos.`,
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
    answer: `${NO_COST_GUARANTEE_NOTE} ${DECLINED_RECOVERY_NOTE} Rückversand ist kostenlos.`,
  },
  {
    question: 'Gilt der Preis auch für RAID-Systeme?',
    answer:
      'RAID-, NAS- und Server-Systeme bepreisen wir individuell nach kostenloser Voranfrage. Der Rechner zeigt für diese Medien „auf Anfrage“ — nach der Analyse erhalten Sie ein verbindliches Angebot.',
  },
  {
    question: 'Welche Erfolgsaussichten gibt es bei HDD und SSD?',
    answer:
      'HDDs haben unter allen Datenträgern oft die besten Rettungsaussichten — vorausgesetzt, die Datenscheiben (Platter) sind nicht physisch zerkratzt; bei mechanisch intakten Oberflächen sind die Chancen im Partner-Reinraumlabor typischerweise hoch (interne Statistik, keine unabhängige Prüfung). Bei SSDs sind logische Defekte (gelöscht, formatiert, Dateisystemfehler) gut rettbar; Controller-Ausfälle hängen vom Chip-Typ und verfügbaren Firmware-Tools ab.',
  },
  {
    question: 'Wo kann ich in NRW abgeben?',
    answer:
      'Persönliche Abgabe ohne Termin an den iAmbulanz-Partnern in Grevenbroich und Mönchengladbach. Beratung und Koordination erfolgen aus dem Büro Köln. Alternativ holt DHL Express Ihren Datenträger kostenlos und versichert bundesweit ab.',
  },
];
