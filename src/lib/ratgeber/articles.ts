import type { FaqItem } from '@/lib/faq-calculator';
import {
  ANALYSIS_DURATION,
  BASE_PRICES,
  DIAGNOSIS_FEE_FORMATTED,
  EXPRESS_SURCHARGE,
  formatPriceEuro,
  formatPriceRange,
  NO_COST_GUARANTEE_NOTE,
  PRICE_DISPLAY,
} from '@/lib/constants';

export interface RatgeberSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  ordered?: boolean;
}

export interface RatgeberArticle {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  updatedAt: string;
  relatedStandortSlugs?: string[];
  relatedMediumSlugs?: string[];
  faqs?: FaqItem[];
  sections: RatgeberSection[];
}

export const RATGEBER_ARTICLES: RatgeberArticle[] = [
  {
    slug: 'festplatte-klackert',
    title: 'Festplatte klackert — was tun und was Sie vermeiden sollten',
    excerpt:
      'Klackernde HDD bedeutet oft mechanischen Schaden. Sofort ausschalten, nicht selbst retten — so erhöhen Sie die Chance auf Datenrettung.',
    datePublished: '2026-08-04',
    updatedAt: '2026-08-04',
    relatedMediumSlugs: ['festplatte-hdd'],
    relatedStandortSlugs: ['grevenbroich', 'moenchengladbach'],
    faqs: [
      {
        question: 'Darf ich eine klackernde Festplatte noch einschalten?',
        answer:
          'Nein. Jeder Startversuch kann die Datenscheiben (Platter) irreparabel zerkratzen. Gerät ausschalten und professionell diagnostizieren lassen.',
      },
      {
        question: 'Was kostet die Analyse bei klackernder HDD?',
        answer: `Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED}. Dauer in der Regel ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE}`,
      },
    ],
    sections: [
      {
        heading: 'Kurzantwort',
        paragraphs: [
          `Wenn Ihre Festplatte klackert, ratscht oder schleift: sofort ausschalten und nicht erneut einschalten. Keine Recovery-Software, kein Klonversuch. Professionelle Datenrettung im Reinraumlabor kann mechanische Defekte oft noch retten — Analyse ${DIAGNOSIS_FEE_FORMATTED}, typisch ${ANALYSIS_DURATION}.`,
        ],
      },
      {
        heading: 'Was das Klackern bedeutet',
        paragraphs: [
          'Das typische Klackern entsteht, wenn der Lesekopf die Platter-Oberfläche nicht korrekt anfahren kann — häufig nach Sturz, Verschleiß oder Elektronikproblem. Weiterbetrieb erhöht das Risiko eines Headcrashs mit irreversiblen Kratzern.',
        ],
      },
      {
        heading: 'Sofortmaßnahmen',
        paragraphs: ['Tun Sie Folgendes — und nichts anderes:'],
        ordered: true,
        list: [
          'Gerät / Gehäuse ausschalten und vom Strom trennen',
          'Keine eigenen Rettungsversuche und keine Kühlschrank-/Gefrier-Mythen',
          'Seriennummer und Symptome notieren',
          'Abgabe in Grevenbroich oder Mönchengladbach oder kostenlose DHL Express-Abholung beauftragen',
        ],
      },
      {
        heading: 'Kostenrahmen',
        paragraphs: [
          `HDD-Festpreise inkl. MwSt.: logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)}. Express +${EXPRESS_SURCHARGE} €. Verbindlicher Festpreis nach der kostenlosen Analyse.`,
        ],
      },
    ],
  },
  {
    slug: 'datenrettung-kosten',
    title: 'Was kostet Datenrettung? Preise und Ablauf 2026',
    excerpt: `Transparente Festpreise für HDD, SSD und Flash — Analyse ${DIAGNOSIS_FEE_FORMATTED}, verbindliches Angebot vor Beauftragung.`,
    datePublished: '2026-08-04',
    updatedAt: '2026-08-04',
    relatedMediumSlugs: ['festplatte-hdd', 'ssd', 'usb-sd'],
    faqs: [
      {
        question: 'Gibt es eine Analysepauschale?',
        answer: `${NO_COST_GUARANTEE_NOTE}`,
      },
    ],
    sections: [
      {
        heading: 'Kurzantwort',
        paragraphs: [
          `Datenrettung kostet bei RSQDATA für HDD/SSD/Notebook logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)} bzw. physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)} (inkl. MwSt.). Flash (USB/SD): ${formatPriceRange(PRICE_DISPLAY.flash)}. RAID/NAS/Smartphone nach Analyse. Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED}.`,
        ],
      },
      {
        heading: 'Preistabelle (Standard, inkl. MwSt.)',
        paragraphs: [
          `HDD / SSD / Notebook: logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)}.`,
          `USB-Stick / SD-Karte: logisch ${formatPriceEuro(BASE_PRICES.flash.logical)}, physisch ${formatPriceEuro(BASE_PRICES.flash.physical)}.`,
          `Express-Aufpreis: +${EXPRESS_SURCHARGE} €. Notfall 24/7 auf Anfrage. RAID/NAS/Server und Smartphone: individuelles Angebot nach Analyse.`,
        ],
      },
      {
        heading: 'Warum erst nach der Analyse ein Festpreis?',
        paragraphs: [
          'Der physische Zustand (Mechanik, Controller, Verschlüsselung) entscheidet über den Aufwand. Nach der Laboranalyse sehen Sie die Dateiliste und erhalten ein verbindliches Angebot — ohne Nachforderungen.',
        ],
      },
    ],
  },
  {
    slug: 'ssd-vs-hdd-datenrettung',
    title: 'SSD vs. HDD Datenrettung — Unterschiede und Erfolgsaussichten',
    excerpt:
      'Mechanik vs. Flash: warum HDDs und SSDs unterschiedlich gerettet werden — und was Sie bei beiden vermeiden sollten.',
    datePublished: '2026-08-04',
    updatedAt: '2026-08-04',
    relatedMediumSlugs: ['festplatte-hdd', 'ssd'],
    sections: [
      {
        heading: 'Kurzantwort',
        paragraphs: [
          'HDD-Rettung arbeitet oft mechanisch im Reinraum (Köpfe, Platter, Elektronik). SSD-Rettung zielt auf Controller, Firmware und NAND-Chips. Beide Medien: gleiche Festpreis-Leiter bei RSQDATA; Technik und Quote unterscheiden sich.',
        ],
      },
      {
        heading: 'Vergleich',
        paragraphs: [
          'HDD: bewegliche Teile, typische Symptome Klackern/Nicht-Erkennen; hohe Quote bei intakten Plattern (im Labor ca. 92 % bei mechanisch intakter Oberfläche).',
          'SSD: keine Mechanik, Ausfälle oft ohne Vorwarnung; logische Defekte gut rettbar, Controller-Fälle chipabhängig. Niemals selbst scannen oder klonen.',
        ],
      },
      {
        heading: 'Gemeinsame Regeln',
        paragraphs: [
          `Ausschalten, nicht beschreiben, Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}, dann verbindliches Angebot. ${NO_COST_GUARANTEE_NOTE}`,
        ],
      },
    ],
  },
  {
    slug: 'raid-nas-volume-degraded',
    title: 'RAID/NAS „Volume degraded“ — richtig reagieren',
    excerpt:
      'Kein Rebuild, keine Laufwerke tauschen: so schützen Sie Restredundanz und erhöhen die Chance auf Array-Rekonstruktion.',
    datePublished: '2026-08-04',
    updatedAt: '2026-08-04',
    relatedMediumSlugs: ['raid-nas', 'server'],
    faqs: [
      {
        question: 'Soll ich bei „Volume degraded“ einen Rebuild starten?',
        answer:
          'Nein — nicht ohne professionelle Einschätzung. Ein falscher Rebuild kann die verbleibende Redundanz zerstören und die Rettung erschweren.',
      },
    ],
    sections: [
      {
        heading: 'Kurzantwort',
        paragraphs: [
          'Bei „Volume degraded“ oder ausgefallenem RAID: System nicht weiter beschreiben, keinen Rebuild starten, keine Member tauschen. Alle Laufwerke sichern und professionell analysieren lassen. Preis nach Voranfrage; Analyse kostenlos.',
        ],
      },
      {
        heading: 'Typische Ursachen',
        paragraphs: [
          'Mehrere Laufwerksausfälle, abgebrochene Rebuilds, Controller-Fehler, Firmware-Updates oder Stromausfälle. Synology, QNAP und Enterprise-RAIDs sind betroffen — das Verfahren ist immer: Einzelanalyse der Member, dann Geometrie-Rekonstruktion.',
        ],
      },
      {
        heading: 'Ablauf bei RSQDATA',
        paragraphs: [
          `Voranfrage, Versand oder Abgabe in NRW, Laboranalyse in ${ANALYSIS_DURATION}, Dateiliste und verbindliches Angebot. Optional NDA/SLA für Unternehmen.`,
        ],
      },
    ],
  },
  {
    slug: 'datenrettung-nrw-abgabe-dhl',
    title: 'Datenrettung in NRW: Abgabe vor Ort oder DHL Express?',
    excerpt:
      'Grevenbroich und Mönchengladbach für persönliche Abgabe, Köln für Koordination — oder kostenlose DHL Express-Abholung bundesweit.',
    datePublished: '2026-08-04',
    updatedAt: '2026-08-04',
    relatedStandortSlugs: ['grevenbroich', 'moenchengladbach', 'koeln'],
    relatedMediumSlugs: ['festplatte-hdd'],
    sections: [
      {
        heading: 'Kurzantwort',
        paragraphs: [
          'In NRW können Sie Datenträger ohne Termin in Grevenbroich oder Mönchengladbach abgeben. Beratung und Auftragssteuerung laufen über das Büro Köln. Wer nicht vorbeikommen will oder kann, nutzt die kostenlose, versicherte DHL Express-Abholung an der Haustür — bundesweit.',
        ],
      },
      {
        heading: 'Persönliche Abgabe',
        paragraphs: [
          'iAmbulanz-Partner in Grevenbroich (Am Hammerwerk 16A) und Mönchengladbach (Lüpertzender Str. 159): alle gängigen Medien, Zustandsdokumentation vor Ort, ideal für Neuss, Düsseldorf, Krefeld, Viersen und Umgebung.',
        ],
      },
      {
        heading: 'Büro Köln',
        paragraphs: [
          'Pellenzstr. 15, 50823 Köln — Kundenbetreuung und Koordination. Keine Medien-Abgabe am Büro. Erreichbar für Bonn, Leverkusen, Bergisch Gladbach und Aachen-Region per Fernannahme.',
        ],
      },
      {
        heading: 'DHL Express',
        paragraphs: [
          'Kostenlose Abholung mit Wunschzeitfenster, optional Schutzbox vorab. Danach Laboranalyse inkl. Dateiliste und verbindliches Angebot — unabhängig vom Annahmeweg.',
        ],
      },
    ],
  },
  {
    slug: 'datenrettung-koeln',
    title: 'Datenrettung Köln — Koordination aus NRW',
    excerpt:
      'RSQDATA steuert aus Köln Annahme, Analyse und Angebot. Abgabe an Partnern in Grevenbroich/Mönchengladbach oder per DHL.',
    datePublished: '2026-08-04',
    updatedAt: '2026-08-04',
    relatedStandortSlugs: ['koeln', 'grevenbroich', 'moenchengladbach'],
    sections: [
      {
        heading: 'Kurzantwort',
        paragraphs: [
          'Datenrettung aus Köln bedeutet bei RSQDATA: Beratung und Koordination am Bürostandort Pellenzstr. 15 — die technische Laborarbeit erfolgt über den Reinraum-Partner. Medien geben Sie in Grevenbroich/Mönchengladbach ab oder senden sie per DHL Express.',
        ],
      },
      {
        heading: 'Für wen das passt',
        paragraphs: [
          'Privat- und Geschäftskunden aus Köln, Bonn, Leverkusen und dem Umland, die transparente Preise und eine Dateiliste vor Beauftragung wollen — ohne Analysepauschale.',
        ],
      },
    ],
  },
];

export function getAllRatgeberArticles(): RatgeberArticle[] {
  return RATGEBER_ARTICLES;
}

export function getRatgeberArticle(slug: string): RatgeberArticle | undefined {
  return RATGEBER_ARTICLES.find((article) => article.slug === slug);
}

export function getRatgeberSlugs(): string[] {
  return RATGEBER_ARTICLES.map((article) => article.slug);
}
