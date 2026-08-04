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
        text: 'HDDs haben die besten Rettungsquoten unter allen Datenträgern — vorausgesetzt, die Platter (Datenscheiben) sind nicht physisch zerkratzt. Im Reinraumlabor erzielen wir eine Erfolgsquote von 92 %.',
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
        text: 'Logische Defekte (gelöscht, formatiert, Dateisystemfehler) sind bei SSDs gut rettbar. Bei Controller-Ausfällen hängt die Quote vom genauen Chip-Typ ab — spezifische Firmware-Tools für alle gängigen Hersteller (Samsung, WD, Crucial, Micron, Toshiba) stehen zur Verfügung.',
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
  },
  smartphone: {
    title: 'Smartphone & Tablet',
    intro:
      'Smartphones speichern Fotos, Kontakte und Nachrichten auf internem Flash — oft verschlüsselt. Nach Displaybruch, Wasserschaden oder Reset ist schnelles Handeln entscheidend.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Displaybruch oder schwarzer Bildschirm',
          'Wasserschaden (Toilette, Regen, Getränk)',
          'Gelöschte Fotos oder Factory Reset',
          'Gerät startet nicht mehr / wird nicht erkannt',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Gelöschte Dateien und viele logische Defekte sind bei Smartphones gut rettbar — solange das Gerät nicht weiter genutzt wird. Bei Hardwaredefekten hängt die Quote vom Modell und Chipsatz ab.',
      },
    ],
    warning:
      'Gerät nicht weiter nutzen, nicht laden bei Feuchtigkeit, keine weiteren PIN-Fehlversuche.',
  },
  notebook: {
    title: 'Notebook & PC-Systeme',
    intro:
      'Bei Notebooks und PCs retten wir die Daten vom internen Speichermedium — unabhängig davon, ob Mainboard, Display oder Gehäuse defekt sind.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Gerät startet nicht mehr (BSOD, Kernel Panic, kein POST)',
          'Sturz- oder Flüssigkeitsschaden',
          'Gelöschte Partitionen oder Neuinstallation',
          'SSD/HDD wird nicht mehr erkannt',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Logische Defekte und viele Elektronikschäden sind gut rettbar, sobald das Speichermedium unangetastet bleibt. Bei mechanischen HDD-Schäden arbeiten wir im Reinraumlabor; bei NVMe/SSD oft über Controller- oder Chip-Level-Zugriff.',
      },
    ],
    warning:
      'Gerät nicht weiter booten oder chkdsk/fsck ausführen. Bei Verdacht auf mechanischen Schaden Festplatte nicht wiederholt einschalten — direkt einsenden.',
  },
};

export const DAMAGE_INFO: Record<DamageKey, CalculatorInfoContent> = {
  del: {
    title: 'Versehentlich gelöscht oder formatiert',
    intro:
      'Auch nach geleertem Papierkorb oder Schnellformatierung sind Daten meist vollständig wiederherstellbar — solange nichts Neues darauf geschrieben wurde.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Dateien aus dem Papierkorb endgültig gelöscht',
          'Laufwerk versehentlich formatiert',
          'Partition gelöscht oder Partitionstabelle überschrieben',
          'rm -rf auf dem falschen Pfad',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Dies ist die häufigste und am besten rettbare Kategorie. Bei HDDs liegen die Erfolgsquoten bei 95–99 %, bei SSDs etwas niedriger durch TRIM.',
      },
    ],
    warning:
      'Stoppen Sie die Nutzung des Laufwerks sofort. Jede neue Datei kann gelöschte Daten überschreiben.',
  },
  unreadable: {
    title: 'Wird erkannt, aber nicht lesbar',
    intro:
      'Das Laufwerk erscheint im System, lässt sich aber nicht öffnen. Bitte nicht formatieren, auch wenn Windows es vorschlägt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          '„Sie müssen das Laufwerk formatieren"-Meldung',
          'Laufwerk erscheint als RAW',
          'Ordner sind leer oder Dateien nicht öffnenbar',
          'Dateisystemfehler nach Absturz',
        ],
      },
    ],
    warning: 'Nicht formatieren und keine Reparaturtools starten — zuerst professionell sichern lassen.',
  },
  crash: {
    title: 'System startet nicht mehr',
    intro:
      'Bluescreen, Kernel Panic oder Bootfehler bedeuten oft ein Problem mit Systempartition oder Dateisystem — die Platte selbst ist meist intakt. Wenn das Gerät dabei klackert oder gar nicht mehr erkannt wird, wählen Sie bitte einen Punkt aus „Gerät defekt".',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Windows-BSOD nach einem Update',
          'macOS Kernel Panic / „Laufwerk nicht reparierbar"',
          '„No bootable device" / kein POST',
          'Endloser Neustart nach Update',
        ],
      },
    ],
    note: 'Kein chkdsk, fsck oder erzwungenes Update — zuerst Daten sichern lassen.',
  },
  mech: {
    title: 'Klackert, schleift oder dreht nicht',
    intro:
      'Klackern klingt wie ein leises, regelmäßiges Tack-Tack im Abstand von wenigen Sekunden. Bitte sofort ausschalten — jeder Startversuch kann die Datenscheiben zerstören.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Klackern, Kratzen oder Schleifen beim Einschalten',
          'Festplatte dreht an, erkennt sich aber nicht',
          'Festplatte dreht gar nicht (kein Anlaufton)',
        ],
      },
      {
        label: 'Unser Prozess',
        text: 'Mechanische Reparaturen führen wir ausschließlich im Reinraumlabor durch.',
      },
    ],
    warning:
      'Auf keinen Fall erneut einschalten oder „wärmen". Jeder Startversuch vergrößert den Schaden.',
  },
  not_recognized: {
    title: 'Wird gar nicht mehr erkannt',
    intro:
      'Das Laufwerk erscheint weder im Explorer noch im BIOS bzw. in der Datenträgerverwaltung.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Keine Reaktion, kein Stromgeräusch',
          'Gerät fehlt in BIOS / Datenträgerverwaltung',
          'USB-Gehäuse erkennt das Laufwerk nicht',
          'Plötzlich 0 Byte oder falsche Kapazität',
        ],
      },
    ],
    warning: 'Keine weiteren Adapter- oder Port-Tests mit Gewalt — Medium ruhen lassen und einsenden.',
  },
  water: {
    title: 'Sturz oder Flüssigkeitsschaden',
    intro:
      'Gerät nicht trocknen lassen und nicht einschalten — bei Feuchtigkeit arbeitet Korrosion weiter.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Wasser, Feuchtigkeit oder Getränk auf dem Gerät',
          'Stoß oder Fall, danach kein Zugriff',
          'Kellerüberschwemmung / Löschwasser',
        ],
      },
      {
        label: 'Erste Maßnahmen',
        items: [
          'Sofort ausschalten und vom Strom trennen',
          'Nicht mit Föhn, Reis oder Heizung trocknen',
          'So schnell wie möglich einsenden',
        ],
      },
    ],
    warning: 'Nicht einschalten — auch nicht kurz zum Testen.',
  },
  ctrl: {
    title: 'Controller oder Elektronik',
    intro:
      'Typisch nach Blitzschlag oder Netzteildefekt, oder wenn eine SSD plötzlich 0 Byte anzeigt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'PCB / Überspannungsschaden',
          'Laufwerk erscheint mit falscher Modellbezeichnung',
          'SSD zeigt 0 Byte',
          'Nach Gewitter kein Zugriff mehr',
        ],
      },
    ],
    note: 'Platinen werden nicht blind getauscht — kalibrierungsspezifische Daten müssen übertragen werden.',
  },
  unknown: {
    title: 'Ursache unklar — wir klären das in der Analyse',
    intro:
      'Sie müssen die genaue Ursache nicht kennen. In der Laboranalyse diagnostizieren wir den Defekt und nennen Ihnen Erfolgsaussichten sowie einen verbindlichen Festpreis.',
    sections: [
      {
        label: 'Was wir prüfen',
        items: [
          'Physischer Zustand des Mediums',
          'Dateisystem und lesbare Partitionen',
          'Welche Dateien sich retten lassen',
        ],
      },
    ],
    warning:
      'Gerät nicht weiter nutzen und keine eigenen Recovery-Tools starten.',
  },
};

export const MOBILE_DAMAGE_INFO: Record<DamageKey, CalculatorInfoContent> = {
  del: {
    title: 'Gelöschte Fotos, Nachrichten & Apps',
    intro:
      'Gelöschte Dateien auf Smartphones bleiben oft noch auf dem internen Flash — solange der Speicher nicht überschrieben wurde.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Fotos oder Videos gelöscht',
          'WhatsApp-Nachrichten verschwunden',
          'Factory Reset',
        ],
      },
    ],
    warning: 'Gerät möglichst wenig weiter nutzen.',
  },
  unreadable: {
    title: 'Wird erkannt, aber nicht lesbar',
    intro: 'Das Gerät reagiert teilweise, Apps oder Dateien lassen sich aber nicht öffnen.',
    sections: [
      {
        label: 'Typische Symptome',
        items: ['Hängt beim Start', 'Apps stürzen ab', 'Speicher wirkt leer oder korrupt'],
      },
    ],
  },
  crash: {
    title: 'Displaybruch / startet nicht',
    intro:
      'Ein kaputtes Display bedeutet nicht, dass die Daten weg sind. Der interne Speicher ist oft unversehrt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Displayglas gebrochen',
          'Schwarzer Bildschirm',
          'Gerät vibriert, Bild bleibt schwarz',
        ],
      },
    ],
  },
  mech: {
    title: 'Sturzschaden',
    intro: 'Nach einem Sturz kann der Speicherchip oder die Platine beschädigt sein.',
    sections: [
      {
        label: 'Typische Symptome',
        items: ['Gerät nach Fall', 'Gehäuse verbogen', 'Intermittierende USB-Verbindung'],
      },
    ],
    warning: 'Nicht wiederholt ein- und ausschalten.',
  },
  not_recognized: {
    title: 'Wird gar nicht mehr erkannt',
    intro: 'Keine Reaktion, kein Laden, PC erkennt das Gerät nicht.',
    sections: [
      {
        label: 'Typische Symptome',
        items: ['Kein Ladevorgang', 'Keine Vibration', 'USB erkennt nichts'],
      },
    ],
  },
  water: {
    title: 'Wasserschaden',
    intro: 'Flüssigkeit verursacht Kurzschlüsse und Korrosion — schnell einsenden.',
    sections: [
      {
        label: 'Erste Maßnahmen',
        items: ['Sofort ausschalten', 'Nicht laden', 'Nicht mit Reis trocknen'],
      },
    ],
  },
  ctrl: {
    title: 'Kurzschluss & Elektronikdefekt',
    intro: 'Defekte am Ladeport oder Mainboard — Daten auf dem Flash sind oft noch intakt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: ['Ladeport defekt', 'Gerät heizt sich auf', 'Nach Überspannung tot'],
      },
    ],
  },
  unknown: {
    title: 'Ursache unklar — wir klären das in der Analyse',
    intro: 'Sie müssen die Ursache nicht selbst eingrenzen. Wir prüfen Speicher und Zustand.',
    sections: [
      {
        label: 'Typische Ausgangslage',
        items: ['Gerät geht nicht an', 'Daten fehlen ohne klaren Auslöser'],
      },
    ],
  },
};

export const NOTEBOOK_DAMAGE_INFO: Record<DamageKey, CalculatorInfoContent> = {
  del: DAMAGE_INFO.del,
  unreadable: DAMAGE_INFO.unreadable,
  crash: {
    title: 'System startet nicht mehr',
    intro:
      'Boot-Schleifen, BSOD oder fehlender POST bedeuten oft ein Problem mit Systempartition — nicht zwingend Datenverlust.',
    sections: DAMAGE_INFO.crash.sections,
    note: DAMAGE_INFO.crash.note,
  },
  mech: DAMAGE_INFO.mech,
  not_recognized: DAMAGE_INFO.not_recognized,
  water: DAMAGE_INFO.water,
  ctrl: {
    title: 'Controller oder Elektronik / Mainboard',
    intro:
      'Defekte Netzteile, Logic Boards oder Überspannung legen Notebook und PC still — die Daten auf dem Speichermedium sind oft unberührt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Gerät reagiert nicht auf Power-Taste',
          'Kein POST, kein Lüfter',
          'Nach Gewitter tot',
        ],
      },
    ],
  },
  unknown: DAMAGE_INFO.unknown,
};

export function getDamageInfo(device: DeviceKey | null, key: DamageKey): CalculatorInfoContent {
  if (device === 'smartphone') return MOBILE_DAMAGE_INFO[key];
  if (device === 'notebook') return NOTEBOOK_DAMAGE_INFO[key];
  return DAMAGE_INFO[key];
}
