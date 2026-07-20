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
    warning:
      'Tippen Sie niemals auf „Jetzt formatieren", wenn Ihr Betriebssystem das vorschlägt. Das überschreibt die Dateitabelle und verschlechtert die Rettungschancen erheblich.',
  },
  smartphone: {
    title: 'Smartphone & Tablet (iPhone, iPad & Android)',
    intro:
      'Smartphones und Tablets speichern Fotos, Kontakte und Nachrichten auf internem Flash-Speicher oder einer verschlüsselten Partition. Nach Displaybruch, Wasserschaden oder versehentlichem Löschen ist eine professionelle Analyse oft der einzige Weg zu Ihren Daten.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Display kaputt — Gerät startet, Daten nicht zugänglich',
          'Wasserschaden oder Sturz — Gerät erkennt sich nicht mehr',
          'Gelöschte Fotos, Videos oder WhatsApp-Chats',
          'PIN vergessen oder Gerät nach Reset gesperrt',
        ],
      },
      {
        label: 'Erfolgsaussichten',
        text: 'Gelöschte Dateien und viele logische Defekte sind bei Smartphones gut rettbar — solange das Gerät nicht weiter genutzt wird. Bei Hardwaredefekten hängt die Quote vom Modell und Chipsatz ab.',
      },
    ],
    warning:
      'Gerät nicht weiter benutzen, nicht auf Werkseinstellungen zurücksetzen und keine Recovery-Apps installieren — das kann Daten überschreiben.',
  },
  notebook: {
    title: 'Notebook & PC-Systeme',
    intro:
      'Notebooks und PCs speichern Daten auf interner SSD oder HDD — oft mit verschlüsselter Systempartition. Nach Sturz, Flüssigkeitsschaden, Mainboard-Defekt oder Boot-Fehler retten wir die Daten direkt vom Speichermedium — unabhängig davon, ob das Gerät noch startet.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Notebook oder PC startet nicht mehr oder hängt beim Apple-/Windows-Logo',
          'Bluescreen (BSOD) oder Kernel Panic nach Update oder Sturz',
          'Flüssigkeit auf der Tastatur — Gerät geht nicht mehr an',
          'SSD/HDD wird im BIOS nicht erkannt, obwohl das Gerät läuft',
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
        text: 'Mechanische Reparaturen führen wir ausschließlich im Reinraumlabor durch — ein staubfreier Arbeitsraum mit einem Reinheitsgrad vergleichbar mit einem OP-Saal. Ein einzelnes Staubkorn auf der Plattenoberfläche würde beim Einschalten einen weiteren Headcrash auslösen.',
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

export const MOBILE_DAMAGE_INFO: Record<DamageKey, CalculatorInfoContent> = {
  del: {
    title: 'Gelöschte Fotos, Nachrichten & Apps',
    intro:
      'Gelöschte Dateien auf Smartphones und Tablets bleiben oft noch auf dem internen Flash-Speicher — solange der Speicher nicht überschrieben wurde. Entscheidend ist, das Gerät nach dem Löschvorgang möglichst wenig weiter zu nutzen.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Fotos oder Videos aus der Galerie gelöscht',
          'WhatsApp-Nachrichten oder Kontakte verschwunden',
          'Factory Reset oder „Telefon zurücksetzen"',
          'App-Daten nach Update oder Neuinstallation weg',
        ],
      },
    ],
    warning:
      'Keine neuen Fotos machen, Apps installieren oder Backups überschreiben — jede neue Schreiboperation kann gelöschte Daten ersetzen.',
  },
  mech: {
    title: 'Sturz & Stoßschaden',
    intro:
      'Nach einem Sturz kann der interne Speicherchip gelöst sein, das Gehäuse verbogen sein oder Bauteile auf der Platine Mikrorisse bekommen. Oft startet das Gerät noch — die Daten sind aber nicht mehr zugänglich.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Gerät nach Fall auf harten Boden',
          'Gehäuse verbogen, Risse im Rahmen',
          'Gerät vibriert ungewöhnlich oder erkennt sich am PC nicht',
          'Intermittierende Verbindung per USB',
        ],
      },
    ],
    warning:
      'Gerät nicht wiederholt ein- und ausschalten. Bei gelöstem Speicherchip kann jeder Startversuch den Chip weiter beschädigen.',
  },
  water: {
    title: 'Wasserschaden',
    intro:
      'Flüssigkeit auf dem Mainboard verursacht Kurzschlüsse und Korrosion — besonders im Ladeport und an Lötstellen. Je schneller das Gerät bei uns ankommt, desto höher die Chance auf vollständige Datenrettung.',
    sections: [
      {
        label: 'Erste Maßnahmen',
        items: [
          'Sofort ausschalten — nicht laden',
          'Nicht mit Föhn oder Reis trocknen',
          'SIM-Karte entfernen, wenn möglich',
          'So schnell wie möglich einsenden',
        ],
      },
    ],
    warning:
      'Ladegerät nicht anschließen. Strom durch feuchte Elektronik beschleunigt Korrosion und kann den Speicher dauerhaft zerstören.',
  },
  ctrl: {
    title: 'Kurzschluss & Elektronikdefekt',
    intro:
      'Defekte am Ladeport, auf dem Mainboard oder nach Überspannung führen dazu, dass das Gerät nicht mehr erkannt wird — die Daten auf dem Flash-Speicher sind oft noch intakt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Ladeport korrodiert oder locker',
          'Gerät heizt sich auf, startet nicht',
          'Nach Gewitter oder Billig-Ladegerät kein Zugriff mehr',
          'PC erkennt das Gerät nicht mehr per USB',
        ],
      },
    ],
    note: 'Wir lesen den Speicherchip im Labor direkt aus — unabhängig davon, ob das Gerät noch startet.',
  },
  enc: {
    title: 'Passwort vergessen & Gerät gesperrt',
    intro:
      'Vergessene PIN, Passwort oder Bildschirmsperre bedeuten nicht automatisch Datenverlust. Je nach Gerät und Verschlüsselung prüfen wir, ob ein technischer Zugriff auf die gespeicherten Daten möglich ist.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'PIN oder Muster vergessen',
          'Apple-ID / Google-Konto gesperrt',
          'Gerät nach zu vielen Fehlversuchen gesperrt',
          'Kindersicherung oder Firmen-MDM aktiv',
        ],
      },
    ],
    warning:
      'Keine weiteren Fehlversuche mit PIN oder Passwort — manche Geräte löschen nach zu vielen Versuchen alle Daten.',
  },
  crash: {
    title: 'Displaybruch & schwarzer Bildschirm',
    intro:
      'Ein kaputtes Display bedeutet nicht, dass die Daten weg sind. Der interne Speicher ist oft unversehrt — nur die Anzeige oder Touch-Einheit ist defekt.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Displayglas gebrochen, Touch reagiert nicht',
          'Schwarzer Bildschirm, Gerät vibriert noch',
          'Bildschirm flackert oder zeigt Streifen',
          'Gerät startet hörbar, Bild bleibt schwarz',
        ],
      },
    ],
    note: 'Datenrettung ist auch bei totem Display möglich — das Gerät muss dafür nicht mehr bedienbar sein.',
  },
};

export const NOTEBOOK_DAMAGE_INFO: Record<DamageKey, CalculatorInfoContent> = {
  del: {
    title: 'Gelöschte Dateien & formatierte Systempartition',
    intro:
      'Auf Notebooks und PCs bleiben gelöschte Dateien oft noch auf der internen SSD oder HDD — solange der Speicher nicht überschrieben wurde. Nutzen Sie das Gerät möglichst nicht weiter und starten Sie keine eigenen Recovery-Tools.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Dateien endgültig gelöscht oder Papierkorb geleert',
          'Windows-/macOS-Neuinstallation überschreibt die Systempartition',
          'Partition versehentlich gelöscht oder formatiert',
          'System-Reset oder „Diesen PC zurücksetzen“ ausgeführt',
        ],
      },
    ],
    warning: 'Nicht weiter speichern, nicht neu installieren — jedes Schreiben verringert die Rettungschance.',
  },
  mech: {
    title: 'Sturzschaden an Notebook oder PC',
    intro:
      'Nach einem Sturz kann die interne HDD mechanisch beschädigt sein oder die SSD/Platine den Kontakt verlieren. Wir öffnen das Gerät und retten die Daten direkt vom Speichermedium.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Notebook gefallen — startet nicht mehr oder knackt',
          'Gehäuse verbeult, Display gerissen, Gerät tot',
          'Nach Sturz wird die Festplatte nicht mehr erkannt',
          'PC-Tower umgestürzt — Laufwerke klackern oder fehlen',
        ],
      },
    ],
    warning: 'Gerät nicht wiederholt einschalten — bei HDD-Verdacht sofort ruhen lassen und einsenden.',
  },
  water: {
    title: 'Flüssigkeitsschaden an Notebook oder PC',
    intro:
      'Kaffee, Wasser oder andere Flüssigkeiten auf der Tastatur können Mainboard und Speicher beschädigen. Oft sind die Daten auf SSD/HDD noch intakt — entscheidend ist, das Gerät nicht weiter zu betreiben.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'Getränk über die Tastatur verschüttet',
          'Notebook in Regen oder Pfütze gefallen',
          'Gerät geht nach Feuchtigkeit nicht mehr an',
          'Korrosion an Anschlüssen oder Logic Board',
        ],
      },
    ],
    warning: 'Nicht laden, nicht einschalten, nicht mit Reis „trocknen“ — Gerät ausschalten und einsenden.',
  },
  ctrl: {
    title: 'Mainboard- & Elektronikschaden',
    intro:
      'Defekte Netzteile, Logic Boards oder Überspannung legen Notebook und PC still — die Daten auf dem Speichermedium sind oft unberührt. Wir bauen SSD oder HDD aus und retten unabhängig vom Mainboard.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Gerät reagiert nicht auf Netzteil oder Power-Taste',
          'Kein POST, kein Lüfter, keine Anzeige',
          'Brandgeruch oder sichtbarer Schaden an der Platine',
          'Nach Gewitter oder Überspannung tot',
        ],
      },
    ],
    note: 'Die Datenrettung erfolgt am Speichermedium — das Mainboard muss dafür nicht mehr funktionieren.',
  },
  enc: {
    title: 'Verschlüsselung & BitLocker / FileVault',
    intro:
      'Bei BitLocker, FileVault oder TPM-gebundener Verschlüsselung brauchen wir den Wiederherstellungsschlüssel oder das Passwort. Ohne Schlüssel ist eine logische Entschlüsselung in der Regel nicht möglich.',
    sections: [
      {
        label: 'Typische Fälle',
        items: [
          'BitLocker-Wiederherstellungsschlüssel nicht auffindbar',
          'FileVault-Passwort vergessen',
          'Ransomware verschlüsselt die Systempartition',
          'TPM-Fehler nach Mainboard-Tausch',
        ],
      },
    ],
    warning: 'Wiederherstellungsschlüssel und Passwörter bereithalten — ohne sie ist oft keine Entschlüsselung möglich.',
  },
  crash: {
    title: 'Startet nicht / Boot-Fehler',
    intro:
      'Boot-Schleifen, BSOD oder fehlender POST bedeuten oft ein Problem mit Systempartition, Firmware oder Speichermedium — nicht zwingend Datenverlust. Wir sichern die Daten, bevor Reparaturversuche sie gefährden.',
    sections: [
      {
        label: 'Typische Symptome',
        items: [
          'Hängt beim Apple- oder Windows-Logo',
          'Bluescreen (BSOD) oder Kernel Panic beim Start',
          '„No bootable device“ / kein POST',
          'Endloser Neustart nach Update',
        ],
      },
    ],
    note: 'Kein chkdsk, kein erzwungenes Update, keine Neuinstallation — zuerst Daten sichern lassen.',
  },
};

export function getDamageInfo(device: DeviceKey | null, key: DamageKey): CalculatorInfoContent {
  if (device === 'smartphone') return MOBILE_DAMAGE_INFO[key];
  if (device === 'notebook') return NOTEBOOK_DAMAGE_INFO[key];
  return DAMAGE_INFO[key];
}
