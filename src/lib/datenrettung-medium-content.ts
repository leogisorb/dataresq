export interface MediumDetailContent {
  intro: string;
  symptoms: string[];
  approach: string[];
  relatedSlugs: string[];
}

export const MEDIUM_DETAIL_CONTENT: Record<string, MediumDetailContent> = {
  'festplatte-hdd': {
    intro:
      'Mechanische Festplatten sind besonders anfällig für Headcrash, Lagerschaden und Elektronikdefekte. In unserem ISO-5-Reinraum arbeiten wir am defekten Laufwerk — ohne Ihr Originalmedium zu überschreiben.',
    symptoms: [
      'Klicken, Rattern oder Brummen beim Einschalten',
      'BIOS erkennt die Festplatte nicht mehr',
      'Plötzlicher Datenverlust nach Sturz oder Stromausfall',
      'Gelöschte Partitionen oder formatierte Laufwerke',
    ],
    approach: [
      'Zustandsdokumentation und forensische Erstinspektion',
      'Reinraum-Arbeit bei mechanischen Defekten (ISO 5 / Class 100)',
      'Sector-by-Sector-Imaging auf Sicherungsmedien',
      'Logische Rekonstruktion und Dateiliste im Kundenportal',
    ],
    relatedSlugs: ['ssd', 'raid-nas', 'server'],
  },
  ssd: {
    intro:
      'SSDs und NVMe-Laufwerke scheitern oft am Controller, an Firmware oder durch Verschleiß der NAND-Zellen. Wir retten Daten von SATA-, M.2- und eMMC-Medien — auch nach Wasserschaden.',
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
      'Dateiliste vor Beauftragung — Festpreis garantiert',
    ],
    relatedSlugs: ['festplatte-hdd', 'usb-sd', 'smartphone'],
  },
  'raid-nas': {
    intro:
      'RAID-Arrays und NAS-Systeme verlieren Daten oft durch mehrfach ausgefallene Festplatten, Controller-Fehler oder fehlerhafte Rebuilds. Wir rekonstruieren Synology, QNAP, Drobo und Enterprise-RAIDs.',
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
    intro:
      'USB-Sticks und SD-Karten sind kompakt und empfindlich — abgebrochene Stecker, defekte Controller oder überschriebene Sektoren sind häufig. Flash-Speicher erfordert spezialisierte Werkzeuge.',
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
      'Preisrahmen 699 – 999 € für Flash-Speicher (Standard)',
    ],
    relatedSlugs: ['smartphone', 'ssd', 'festplatte-hdd'],
  },
  server: {
    intro:
      'Server- und Virtualisierungsumgebungen bergen komplexe Abhängigkeiten: VMware, Hyper-V, Windows Server und Datenbanken erfordern erfahrene Spezialisten und diskrete Abwicklung.',
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
    intro:
      'Smartphones speichern Fotos, Kontakte und Nachrichten auf internem Flash — oft verschlüsselt. Nach Displaybruch, Wasserschaden oder Reset ist schnelles Handeln entscheidend.',
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
