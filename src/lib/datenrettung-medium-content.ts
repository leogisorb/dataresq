import {
  ANALYSIS_DURATION,
  BASE_PRICES,
  DIAGNOSIS_FEE_FORMATTED,
  formatPriceEuro,
  formatPriceRange,
  NO_COST_GUARANTEE_NOTE,
  PRICE_DISPLAY,
} from '@/lib/constants';

export interface CitationAnswer {
  question: string;
  answer: string;
  facts?: Array<{ label: string; value: string }>;
}

export interface MediumDetailContent {
  intro: string;
  citationAnswer: CitationAnswer;
  symptoms: string[];
  approach: string[];
  relatedSlugs: string[];
}

export const MEDIUM_DETAIL_CONTENT: Record<string, MediumDetailContent> = {
  'festplatte-hdd': {
    citationAnswer: {
      question: 'Was ist Festplatten-Datenrettung?',
      answer: `Wiederherstellung von Dateien mechanischer HDDs bei Headcrash, Elektronikschaden oder logischem Verlust — im Reinraum ohne Überschreiben des Originals. ${NO_COST_GUARANTEE_NOTE}`,
      facts: [
        { label: 'Logisch', value: formatPriceEuro(BASE_PRICES.hddSsd.logical) },
        { label: 'Physisch', value: formatPriceEuro(BASE_PRICES.hddSsd.physical) },
        { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
      ],
    },
    intro: `Festplatten-Datenrettung stellt Dateien von mechanischen HDDs wieder her — bei Headcrash, Elektronikschaden oder logischem Verlust. Kosten: logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)} (inkl. MwSt.); Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE} Mechanische Festplatten sind besonders anfällig für Headcrash, Lagerschaden und Elektronikdefekte. Bei mechanischen Defekten arbeiten wir im Reinraumlabor — ohne Ihr Originalmedium zu überschreiben.`,
    symptoms: [
      'Klicken, Rattern oder Brummen beim Einschalten',
      'BIOS erkennt die Festplatte nicht mehr',
      'Plötzlicher Datenverlust nach Sturz oder Stromausfall',
      'Gelöschte Partitionen oder formatierte Laufwerke',
    ],
    approach: [
      'Zustandsdokumentation und forensische Erstinspektion',
      'Reinraum-Arbeit bei mechanischen Defekten',
      'Sector-by-Sector-Imaging auf Sicherungsmedien',
      'Logische Rekonstruktion und Dateiliste im Kundenportal',
    ],
    relatedSlugs: ['ssd', 'raid-nas', 'server'],
  },
  ssd: {
    citationAnswer: {
      question: 'Was ist SSD-Datenrettung?',
      answer: `Rettung von SATA-, NVMe- und M.2-Flashlaufwerken bei Controller-, Firmware- oder Trim-/Formatierungsproblemen. ${NO_COST_GUARANTEE_NOTE}`,
      facts: [
        { label: 'Logisch', value: formatPriceEuro(BASE_PRICES.hddSsd.logical) },
        { label: 'Physisch', value: formatPriceEuro(BASE_PRICES.hddSsd.physical) },
        { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
      ],
    },
    intro: `SSD-Datenrettung stellt Daten von SATA-, NVMe- und M.2-Flashlaufwerken wieder her — typisch bei Controller-Defekt, Firmware-Fehler oder Trim/Formatierung. Kosten: logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)} (inkl. MwSt.); Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE} SSDs scheitern oft am Controller, an Firmware oder durch Verschleiß der NAND-Zellen — auch nach Wasserschaden.`,
    symptoms: [
      'SSD wird nicht erkannt oder zeigt 0 Byte Kapazität',
      'Plötzlicher Ausfall nach Firmware-Update',
      'Trim-Befehle oder Formatierung haben Daten überschrieben',
      'Physische Beschädigung durch Sturz oder Flüssigkeit',
    ],
    approach: [
      'Chip-off und direkter NAND-Zugriff bei Controller-Defekt',
      'Firmware-Reparatur und Translation-Table-Rekonstruktion',
      'NVMe- und BitLocker-Verschlüsselung nach Key-Übergabe',
      'Dateiliste vor Beauftragung — verbindliches Angebot nach Laboranalyse',
    ],
    relatedSlugs: ['festplatte-hdd', 'usb-sd', 'smartphone'],
  },
  'raid-nas': {
    citationAnswer: {
      question: 'Was ist RAID-/NAS-Datenrettung?',
      answer: `Rekonstruktion ausgefallener Arrays und Volumes (u. a. Synology, QNAP, Drobo). Preis nach Voranfrage; Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}.`,
      facts: [
        { label: 'Preis', value: 'Individuell nach Analyse' },
        { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
      ],
    },
    intro: `RAID-/NAS-Datenrettung rekonstruiert ausgefallene Arrays und Volumes (u. a. Synology, QNAP, Drobo). Preis individuell nach kostenloser Voranfrage; Analyse ${DIAGNOSIS_FEE_FORMATTED}, Dauer in der Regel ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE} Datenverlust entsteht oft durch mehrfach ausgefallene Festplatten, Controller-Fehler oder fehlerhafte Rebuilds.`,
    symptoms: [
      'RAID ist degraded oder fällt komplett aus',
      'NAS startet nicht mehr oder meldet Volume-Fehler',
      'Mehrere Laufwerke gleichzeitig defekt',
      'Nach Firmware-Update oder Stromausfall kein Zugriff mehr',
    ],
    approach: [
      'Einzelanalyse aller Member-Disks im Labor',
      'Paritätsberechnung und RAID-Geometrie-Rekonstruktion',
      'Virtuelles Mounting des rekonstruierten Volumes',
      'NDA und SLA für Unternehmenskunden auf Anfrage',
    ],
    relatedSlugs: ['server', 'festplatte-hdd', 'ssd'],
  },
  'usb-sd': {
    citationAnswer: {
      question: 'Was kostet USB-/SD-Datenrettung?',
      answer: `Flash-Speicher Festpreis ${formatPriceRange(PRICE_DISPLAY.flash)} (inkl. MwSt.); Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE}`,
      facts: [
        { label: 'Logisch', value: formatPriceEuro(BASE_PRICES.flash.logical) },
        { label: 'Physisch', value: formatPriceEuro(BASE_PRICES.flash.physical) },
        { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
      ],
    },
    intro: `USB-Stick- und SD-Karten-Rettung stellt Daten von Flash-Speicher wieder her — Festpreis ${formatPriceRange(PRICE_DISPLAY.flash)} (inkl. MwSt.); Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE} Abgebrochene Stecker, defekte Controller oder überschriebene Sektoren sind häufig und erfordern spezialisierte Werkzeuge.`,
    symptoms: [
      'USB-Stick wird nicht mehr erkannt oder heiß',
      'SD-Karte fordert Formatierung an',
      'Abgebrochener oder verbogener Stecker',
      'Gelöschte Fotos, Videos oder Dokumente',
    ],
    approach: [
      'Chip-Level-Diagnose bei Controller-Ausfall',
      'Direktes Auslesen des NAND-Chips',
      'Logische Rekonstruktion von FAT/exFAT-Dateisystemen',
      `Festpreis Flash-Speicher: logisch ${formatPriceEuro(BASE_PRICES.flash.logical)}, physisch ${formatPriceEuro(BASE_PRICES.flash.physical)} (inkl. MwSt.)`,
    ],
    relatedSlugs: ['smartphone', 'ssd', 'festplatte-hdd'],
  },
  server: {
    citationAnswer: {
      question: 'Was umfasst Server-Datenrettung?',
      answer: `VMware, Hyper-V, Windows Server und Datenbanken — Preis nach Voranfrage; Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}.`,
      facts: [
        { label: 'Preis', value: 'Individuell nach Analyse' },
        { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
      ],
    },
    intro: `Server- und Virtualisierungs-Datenrettung umfasst VMware, Hyper-V, Windows Server und Datenbanken. Preis nach kostenloser Voranfrage; Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE} Komplexe Abhängigkeiten erfordern erfahrene Spezialisten und diskrete Abwicklung.`,
    symptoms: [
      'VM startet nicht mehr oder zeigt beschädigtes Dateisystem',
      'SQL-Datenbank ist korrupt oder lässt sich nicht mounten',
      'RAID-Controller meldet kritischen Fehler',
      'Ransomware oder logische Löschung auf Produktionssystem',
    ],
    approach: [
      'Analyse im abgeschalteten Zustand — kein weiterer Schreibzugriff',
      'VMFS, NTFS, ext4 und Datenbank-Rekonstruktion',
      'NDA, verschlüsselte Übergabe und Löschzertifikat',
      'Individuelle Preisgestaltung nach kostenloser Voranfrage',
    ],
    relatedSlugs: ['raid-nas', 'festplatte-hdd', 'ssd'],
  },
  smartphone: {
    citationAnswer: {
      question: 'Was ist Smartphone-Datenrettung?',
      answer: `Wiederherstellung von Fotos, Kontakten und Nachrichten nach Displaybruch, Wasserschaden oder Reset. Preis nach Analyse; ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}.`,
      facts: [
        { label: 'Preis', value: 'Nach Analyse' },
        { label: 'Analyse', value: `${DIAGNOSIS_FEE_FORMATTED} · ${ANALYSIS_DURATION}` },
      ],
    },
    intro: `Smartphone-Datenrettung stellt Fotos, Kontakte und Nachrichten von internem Flash wieder her — nach Displaybruch, Wasserschaden oder Reset. Preis nach Analyse; Analyse ${DIAGNOSIS_FEE_FORMATTED} in ${ANALYSIS_DURATION}. ${NO_COST_GUARANTEE_NOTE} Viele Geräte sind verschlüsselt; schnelles Handeln ist entscheidend.`,
    symptoms: [
      'Gerät startet nicht mehr (Bootloop oder schwarzer Bildschirm)',
      'Wasserschaden oder Fall auf harten Untergrund',
      'Gelöschte Fotos, WhatsApp-Chats oder Kontakte',
      'PIN vergessen bei noch funktionierendem Gerät',
    ],
    approach: [
      'JTAG- und Chip-off-Verfahren bei Hardwaredefekt',
      'Logische Extraktion bei funktionierender Platine',
      'iOS- und Android-spezifische Recovery-Tools',
      'Gerät nach Analyse nicht weiter nutzen — verhindert Überschreibung',
    ],
    relatedSlugs: ['usb-sd', 'ssd', 'festplatte-hdd'],
  },
};

export function getMediumDetailContent(slug: string): MediumDetailContent | undefined {
  return MEDIUM_DETAIL_CONTENT[slug];
}
