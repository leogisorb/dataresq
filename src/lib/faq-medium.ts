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
import type { FaqItem } from '@/lib/faq-calculator';

/** Per-medium FAQs for /datenrettung/[slug] — UI + FAQPage JSON-LD */
export const MEDIUM_FAQS: Record<string, FaqItem[]> = {
  'festplatte-hdd': [
    {
      question: 'Was ist Festplatten-Datenrettung (HDD)?',
      answer:
        'Festplatten-Datenrettung stellt Dateien von mechanischen HDDs wieder her — bei Headcrash, Elektronikschaden, nicht erkannten Laufwerken oder logischem Datenverlust. Bei mechanischen Defekten erfolgt die Arbeit im Reinraumlabor, ohne Ihr Original zu überschreiben.',
    },
    {
      question: 'Was kostet eine HDD-Datenrettung?',
      answer: `Festpreise inkl. MwSt. für HDD/SSD/Notebook: logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)} (Rahmen ${formatPriceRange(PRICE_DISPLAY.hddSsd)}). Express +${EXPRESS_SURCHARGE} €. Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED}. ${NO_COST_GUARANTEE_NOTE}`,
    },
    {
      question: 'Festplatte klackert — was tun?',
      answer:
        'Sofort ausschalten und nicht erneut einschalten. Keine Recovery-Software, kein Klonversuch. Jeder Startversuch bei mechanischem Schaden kann die Datenscheiben (Platter) irreparabel zerkratzen. Melden Sie den Fall und nutzen Sie DHL Express oder eine Abgabestelle in Grevenbroich bzw. Mönchengladbach.',
    },
    {
      question: 'Wie lange dauert die Analyse einer Festplatte?',
      answer: `Die Laboranalyse inklusive Dateiliste dauert in der Regel ${ANALYSIS_DURATION} nach Eingang. Danach erhalten Sie ein verbindliches Angebot.`,
    },
  ],
  ssd: [
    {
      question: 'Was ist SSD-Datenrettung?',
      answer:
        'SSD-Datenrettung stellt Daten von Flash-Speicherlaufwerken (SATA, NVMe, M.2, eMMC) wieder her — typisch bei Controller-Defekt, Firmware-Fehlern, Trim/Formatierung oder physischem Schaden. Die Rettung ist technisch anspruchsvoller als bei HDDs, weil Daten über mehrere NAND-Chips verteilt sind.',
    },
    {
      question: 'Was kostet eine SSD-Datenrettung?',
      answer: `Festpreise inkl. MwSt. für HDD/SSD/Notebook: logisch ${formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch ${formatPriceEuro(BASE_PRICES.hddSsd.physical)}. Express +${EXPRESS_SURCHARGE} €. Analyse: ${DIAGNOSIS_FEE_FORMATTED}. ${NO_COST_GUARANTEE_NOTE}`,
    },
    {
      question: 'SSD wird nicht erkannt — ist eine Rettung möglich?',
      answer:
        'Ja, häufig. Logische Defekte (gelöscht, formatiert, Dateisystemfehler) sind gut rettbar. Bei Controller-Ausfällen hängt die Quote vom Chip-Typ ab; gängige Hersteller (Samsung, WD, Crucial, Micron, Toshiba) werden mit spezifischen Firmware-Tools bearbeitet. Niemals selbst klonen oder mit Recovery-Software scannen.',
    },
    {
      question: 'Wie lange dauert die SSD-Analyse?',
      answer: `In der Regel ${ANALYSIS_DURATION} nach Eingang — inkl. Dateiliste und verbindlichem Angebot.`,
    },
  ],
  'raid-nas': [
    {
      question: 'Was ist RAID-/NAS-Datenrettung?',
      answer:
        'RAID- und NAS-Datenrettung rekonstruiert Volumes nach ausgefallenen Laufwerken, fehlgeschlagenen Rebuilds oder Controller-Fehlern — inkl. Synology, QNAP, Drobo und Enterprise-RAID. Alle Member-Disks werden einzeln analysiert, bevor die Array-Geometrie rekonstruiert wird.',
    },
    {
      question: 'Was kostet eine RAID- oder NAS-Rettung?',
      answer: `RAID-, NAS- und Server-Systeme bepreisen wir individuell nach kostenloser Voranfrage und Laboranalyse. Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED}. ${NO_COST_GUARANTEE_NOTE}`,
    },
    {
      question: 'NAS zeigt „Volume degraded“ — was tun?',
      answer:
        'Kein Rebuild starten, keine Laufwerke tauschen und das System nicht weiter beschreiben. Dokumentieren Sie die Konfiguration und kontaktieren Sie uns. Ein falscher Rebuild kann die Restredundanz zerstören.',
    },
    {
      question: 'Wie lange dauert die Analyse bei RAID/NAS?',
      answer: `Die Analyse dauert in der Regel ${ANALYSIS_DURATION} nach Eingang aller Medien; komplexere Arrays können länger brauchen. Danach erhalten Sie Dateiliste und verbindliches Angebot.`,
    },
  ],
  'usb-sd': [
    {
      question: 'Was kostet die Rettung von USB-Stick oder SD-Karte?',
      answer: `Flash-Speicher Festpreise inkl. MwSt.: logisch ${formatPriceEuro(BASE_PRICES.flash.logical)}, physisch ${formatPriceEuro(BASE_PRICES.flash.physical)} (Rahmen ${formatPriceRange(PRICE_DISPLAY.flash)}). Express +${EXPRESS_SURCHARGE} €. Analyse: ${DIAGNOSIS_FEE_FORMATTED}. ${NO_COST_GUARANTEE_NOTE}`,
    },
    {
      question: 'USB-Stick oder SD-Karte wird nicht erkannt — Rettung möglich?',
      answer:
        'Häufig ja. Abgebrochene Stecker, defekte Controller oder überschriebene Sektoren erfordern Chip-Level-Diagnose bzw. direktes Auslesen des NAND. Formatierungsaufforderungen nicht bestätigen.',
    },
    {
      question: 'Wie lange dauert die Flash-Analyse?',
      answer: `In der Regel ${ANALYSIS_DURATION} nach Eingang inkl. Dateiliste.`,
    },
  ],
  server: [
    {
      question: 'Was umfasst Server- und Virtualisierungs-Datenrettung?',
      answer:
        'Wir retten Daten aus VMware, Hyper-V, Windows Server und Datenbankumgebungen — inkl. beschädigter VMs, korrupter Dateisysteme und RAID-Controller-Fehlern. Abwicklung diskret, optional mit NDA und AVV.',
    },
    {
      question: 'Was kostet Server-Datenrettung?',
      answer: `Individuelle Preisgestaltung nach kostenloser Voranfrage und Laboranalyse. Analyse: ${DIAGNOSIS_FEE_FORMATTED}. ${NO_COST_GUARANTEE_NOTE}`,
    },
    {
      question: 'Wie gehe ich bei Server-Ausfall vor?',
      answer:
        'System abschalten — kein weiterer Schreibzugriff. Keine eigenen Rebuilds oder Recovery-Tools auf Produktionssystemen. Wir analysieren im abgeschalteten Zustand und liefern Dateiliste vor Beauftragung.',
    },
  ],
  smartphone: [
    {
      question: 'Was ist Smartphone-Datenrettung?',
      answer:
        'Smartphone-Datenrettung stellt Fotos, Kontakte und Nachrichten von internem Flash wieder her — nach Displaybruch, Wasserschaden, Bootloop oder Reset. Viele Geräte sind verschlüsselt; Zugangsdaten können erforderlich sein.',
    },
    {
      question: 'Was kostet Smartphone-Datenrettung?',
      answer: `Preis nach kostenloser Analyse. Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED}. ${NO_COST_GUARANTEE_NOTE}`,
    },
    {
      question: 'Wasserschaden am Handy — was tun?',
      answer:
        'Gerät sofort ausschalten, nicht laden und nicht in Reis trocken. Keine Softwareresets. Schnelles Handeln erhöht die Chance auf Chip-Level-Rettung.',
    },
  ],
};

export function getMediumFaqs(slug: string): FaqItem[] {
  return MEDIUM_FAQS[slug] ?? [];
}
