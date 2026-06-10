import type { DamageKey, DeviceKey } from '@/lib/constants';

export interface CalculatorInfoSection {
  label: string;
  items?: string[];
  text?: string;
}

export interface CalculatorInfoContent {
  title: string;
  intro: string;
  sections: CalculatorInfoSection[];
  warning?: string;
  note?: string;
}

export const DEVICE_INFO: Record<DeviceKey, CalculatorInfoContent> = {
  hdd: {
    title: 'Festplatte (HDD)',
    intro:
      'Klassische Festplatten speichern Daten auf magnetisch beschichteten, rotierenden Scheiben — einem sogenannten Platter. Ein beweglicher Lesekopf liest und schreibt die Daten mit hauchdünnem Abstand zur Oberfläche. Genau diese Mechanik macht HDDs anfällig, aber auch sehr gut rettbar.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Klackernde oder schleifende Geräusche beim Starten',
          'Festplatte dreht nicht mehr oder wird nicht erkannt',
          'Laptop wurde fallengelassen, danach keine Daten mehr',
          'Nach einem Stromausfall plötzlich unleserlich',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'HDDs haben die besten Rettungsquoten unter allen Datenträgern — vorausgesetzt, die Platter (Datenscheiben) sind nicht physisch zerkratzt. In unserem Reinraum ISO Klasse 5 erzielen wir eine Erfolgsquote von 92 %.',
      },
    ],
    warning:
      'Hören Sie sofort auf, die Festplatte zu benutzen oder einzuschalten. Jeder Startversuch bei mechanischem Schaden kann die Platter irreparabel beschädigen.',
  },
  ssd: {
    title: 'SSD & NVMe-Laufwerk',
    intro:
      'SSDs und NVMe-Laufwerke speichern Daten auf Flash-Speicherchips — ohne bewegliche Teile. Das macht sie schnell und stoßfest, aber ihre Ausfälle kommen oft ohne Vorwarnung. Weil die Daten auf mehreren Chips verteilt gespeichert werden, ist die Rettung technisch anspruchsvoller als bei HDDs.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Laufwerk wird plötzlich nicht mehr erkannt (besonders nach Windows-Update)',
          'MacBook oder Laptop bootet nicht mehr',
          'SSD erscheint als 0 Byte oder mit falscher Kapazität',
          'Schreibfehler, Dateikorruption nach längerem Betrieb',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Logische Defekte (gelöscht, formatiert, Dateisystemfehler) sind bei SSDs gut rettbar. Bei Controller-Ausfällen hängt die Quote vom genauen Chip-Typ ab — unser Labor hat Zugriff auf spezifische Firmware-Tools für alle gängigen Hersteller (Samsung, WD, Crucial, Micron, Toshiba).',
      },
    ],
    warning:
      'Niemals versuchen, eine defekte SSD selbst zu klonen oder mit Recovery-Software zu scannen — das kann den Controller endgültig beschädigen.',
  },
  raid: {
    title: 'RAID-Systeme, NAS & Server',
    intro:
      'RAID-Systeme verteilen Daten über mehrere Festplatten, um Ausfallsicherheit oder Geschwindigkeit zu erhöhen. Fällt ein zweites Laufwerk aus oder wird ein Rebuild falsch durchgeführt, sind alle Daten betroffen — unabhängig vom RAID-Level. Wir retten RAID 0, 1, 5, 6, 10 sowie proprietäre NAS-Systeme aller großen Hersteller.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Mehrere Laufwerke gleichzeitig ausgefallen',
          'NAS zeigt „Volume degraded" oder startet nicht mehr',
          'RAID-Rebuild wurde abgebrochen oder ist fehlgeschlagen',
          'Server-Absturz, danach kein Zugriff mehr auf Freigaben',
        ],
      },
      {
        label: 'Kompatible Systeme',
        text: 'Synology, QNAP, Netgear ReadyNAS, Buffalo, Promise, HP ProLiant, Dell PowerEdge, IBM, Fujitsu — sowie proprietäre Hardware-RAID-Controller (LSI, Adaptec, Areca, 3ware).',
      },
    ],
    warning:
      'Starten Sie kein manuelles Rebuild, wenn nicht alle Ursachen des Ausfalls bekannt sind. Ein falscher Rebuild überschreibt oft die letzten Daten unwiderruflich. Laufwerke unverändert lassen und direkt einsenden.',
  },
  usb: {
    title: 'USB-Stick & Speicherkarten',
    intro:
      'USB-Sticks und SD-Karten basieren wie SSDs auf Flash-Speicher — sind aber für seltene Lese-/Schreibvorgänge ausgelegt, nicht für den Dauereinsatz. Gerade günstige Modelle haben oft keinen zuverlässigen Wear-Leveling-Schutz. Häufig steckt der Defekt im Controller-Chip, nicht im Speicher selbst.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Karte oder Stick wird nicht erkannt oder zeigt falschen Inhalt',
          'Fotos oder Dokumente plötzlich weg oder korrupt',
          'Physisch verbogener oder gebrochener USB-Anschluss',
          'Karte aus Kamera: Meldung „Karte nicht lesbar" oder „Bitte formatieren"',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Gelöschte Fotos, Videos und Dokumente sind auf Flash-Medien in den meisten Fällen vollständig wiederherstellbar — solange das Medium danach nicht neu bespielt wurde. Bei physischem Chipschaden löten unsere Techniker den Speicherchip direkt aus und lesen ihn über spezielle Adapter aus.',
      },
    ],
    warning:
      'Tippen Sie niemals auf „Jetzt formatieren", wenn Ihr Betriebssystem das vorschlägt. Das überschreibt die Dateitabelle und verschlechtert die Rettungschancen erheblich.',
  },
};

export const DAMAGE_INFO: Record<DamageKey, CalculatorInfoContent> = {
  del: {
    title: 'Gelöschte Dateien & formatierte Laufwerke',
    intro:
      'Wenn Sie Dateien löschen oder ein Laufwerk formatieren, werden die Daten selbst nicht sofort entfernt — nur der Eintrag in der Dateitabelle wird als „freier Speicher" markiert. Solange dieser Bereich nicht mit neuen Daten überschrieben wird, ist eine vollständige Wiederherstellung möglich.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Dateien aus dem Papierkorb endgültig gelöscht (Shift + Entf)',
          'Gesamtes Laufwerk versehentlich formatiert (Schnell- oder Vollformat)',
          'rm -rf auf dem falschen Pfad ausgeführt',
          'Partition gelöscht oder Partitionstabelle überschrieben',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Dies ist die häufigste und am besten rettbare Kategorie. Bei HDDs liegen die Erfolgsquoten bei 95–99 %, bei SSDs etwas niedriger, da manche SSDs im Hintergrund automatisch gelöschte Blöcke freigeben (TRIM-Funktion).',
      },
    ],
    warning:
      'Stoppen Sie die Nutzung des Laufwerks sofort. Jede neue Datei, die Sie speichern — auch das Herunterladen eines Recovery-Tools — kann die gelöschten Daten überschreiben.',
  },
  mech: {
    title: 'Mechanischer Schaden (Headcrash, Motorausfall)',
    intro:
      'Bei einem mechanischen Schaden sind physische Bauteile der Festplatte defekt: Der Lesekopf hat die Plattenoberfläche berührt (Headcrash), der Spindelmotor dreht nicht mehr, oder die Lager sind beschädigt. Solche Schäden erkennt man oft an ungewöhnlichen Geräuschen.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Klackern, Kratzen oder Schleifen beim Einschalten',
          'Festplatte dreht an, erkennt sich aber nicht',
          'Festplatte dreht gar nicht (kein Anlaufton)',
          'Nach einem Sturz oder Stoß plötzlich keine Daten mehr',
        ],
      },
      {
        label: 'Unser Prozess',
        text: 'Mechanische Reparaturen führen wir ausschließlich in unserem Reinraum ISO Klasse 5 durch — ein staubfreier Arbeitsraum mit einem Reinheitsgrad vergleichbar mit einem OP-Saal. Ein einzelnes Staubkorn auf der Plattenoberfläche würde beim Einschalten einen weiteren Headcrash auslösen.',
      },
    ],
    warning:
      'Auf keinen Fall versuchen, die Festplatte nochmals einzuschalten oder zu „wärmen". Jeder weitere Startversuch vergrößert den Schaden auf den Datenscheiben.',
  },
  water: {
    title: 'Wasser- & Flüssigkeitsschaden',
    intro:
      'Flüssigkeit auf einem Laufwerk verursacht zwei Probleme: sofortige Kurzschlüsse auf der Elektronikplatine und — mit der Zeit — Korrosion der Kontakte und Leiterbahnen. Wie viel gerettet werden kann, hängt stark davon ab, wie schnell das Gerät eingesandt wird.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Laptop ins Wasser gefallen oder Kaffee/Wasser verschüttet',
          'Keller überschwemmt, NAS oder Server steht im Wasser',
          'Gerät im Regen liegengelassen',
          'Löschwasserschaden nach Brandfall',
        ],
      },
      {
        label: 'Erste Maßnahmen (jetzt sofort)',
        items: [
          'Gerät sofort ausschalten und vom Strom trennen',
          'Nicht mehr einschalten — auch nicht kurz zum Testen',
          'Nicht trocknen mit Föhn, Reis oder Heizung',
          'So schnell wie möglich einsenden (jede Stunde zählt)',
        ],
      },
    ],
    warning:
      'Salzwasser, Meerwasser oder koffeinhaltige Flüssigkeiten sind aggressiver als reines Wasser und beschleunigen die Korrosion massiv. Bei solchen Fällen bitte vorab per E-Mail Kontakt aufnehmen.',
  },
  ctrl: {
    title: 'Elektronik- & Controller-Schaden',
    intro:
      'Jede Festplatte und SSD hat eine Steuerplatine (PCB), auf der ein Controller-Chip die gesamte Kommunikation zwischen Laufwerk und Computer regelt. Fällt dieser Chip durch einen Überspannungsschaden, Blitzeinschlag oder einfaches Altern aus, dreht die Festplatte zwar an — antwortet aber nicht.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Festplatte wird nicht erkannt, obwohl sie dreht und anläuft',
          'Nach Gewitter oder Überspannung plötzlich kein Zugriff',
          'Laufwerk erscheint im BIOS mit falscher Modellbezeichnung',
          'USB-Festplatte: die Kapselung erkennt das Laufwerk nicht mehr',
        ],
      },
      {
        label: 'Unser Ansatz',
        text: 'Wir tauschen keine Platinen blind aus — jede HDD-Platine enthält einen ROM-Chip mit laufwerksspezifischen Kalibrierungsdaten. Diese müssen auf die Ersatzplatine übertragen werden, bevor das Laufwerk überhaupt reagiert. Bei SSDs lesen wir den Controller direkt über JTAG oder proprietäre Firmware-Schnittstellen aus.',
      },
    ],
    note: '„Einfach eine neue Platine kaufen und tauschen" funktioniert bei modernen Laufwerken fast nie. Falsch vorgegangen kann es den gespeicherten Kalibrierungsdaten dauerhaft schaden.',
  },
  enc: {
    title: 'Ransomware & Verschlüsselung',
    intro:
      'Bei Ransomware-Angriffen verschlüsseln Schadprogramme Ihre Dateien und fordern Lösegeld. Bei vergessenen BitLocker- oder VeraCrypt-Passwörtern ist der Schlüssel verloren gegangen. Wir empfehlen in beiden Fällen, nicht zu zahlen — und analysieren stattdessen, ob eine technische Rettung möglich ist.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Ransomware-Befall (Locky, WannaCry, REvil u. v. m.)',
          'BitLocker-PIN vergessen, Recovery-Key nicht verfügbar',
          'VeraCrypt-Container, Passwort nicht mehr bekannt',
          'Unternehmensweite Verschlüsselung durch Angreifer',
        ],
      },
      {
        label: 'Was wir prüfen',
        items: [
          'Bekannte Schwachstellen in der eingesetzten Ransomware-Variante (für einige Varianten existieren freie Decryptoren)',
          'Shadow Copies oder VSS-Snapshots, die von der Ransomware nicht gelöscht wurden',
          'Teilweise unverschlüsselte Datenbereiche auf dem Laufwerk',
        ],
      },
    ],
    warning:
      'Schalten Sie das betroffene Gerät sofort aus und trennen Sie es vom Netzwerk. Aktive Ransomware verschlüsselt weiter, solange das Gerät läuft. Für Unternehmenskunden bieten wir forensische Analyse und einen DSGVO-konformen Incident-Report.',
  },
  crash: {
    title: 'Systemabsturz, BSOD & RAID-Rebuild-Fehler',
    intro:
      'Systemabstürze, Bluescreen-Fehler (BSOD) oder ein fehlgeschlagener RAID-Rebuild beschädigen oft die Dateisystemstruktur, nicht die Rohdaten selbst. Das bedeutet: Die Daten sind meist noch vollständig vorhanden — das Dateisystem weiß nur nicht mehr, wo genau.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Windows-BSOD nach einem Update, danach kein Boot mehr',
          'macOS: „Laufwerk nicht reparierbar" im Festplattendienstprogramm',
          'RAID-Rebuild wurde unterbrochen oder mit falscher Reihenfolge gestartet',
          'Linux: Filesystem-Check schlägt fehl, Dateien fehlen nach fsck',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Reiner Dateisystemschaden ohne physische Beschädigung hat eine sehr hohe Erfolgsquote (90–99 %). Wir erstellen zunächst ein 1:1-Abbild des Laufwerks (Image) und arbeiten dann ausschließlich auf dieser Kopie — das Original bleibt immer unberührt.',
      },
    ],
    note: 'Führen Sie kein weiteres chkdsk, fsck oder „Erste Hilfe" im Festplattendienstprogramm durch — diese Tools können Dateistruktur-Metadaten überschreiben, die für die Wiederherstellung entscheidend sind.',
  },
};
