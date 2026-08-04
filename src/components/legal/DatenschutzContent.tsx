import Link from 'next/link';

import { SITE } from '@/lib/constants';

/** Full privacy policy — keep in sync with Datenschutzerklärung 2.txt */
export default function DatenschutzContent(): React.JSX.Element {
  return (
    <>
      <h1>Datenschutzerklärung</h1>
      <p>Stand: August 2026</p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler
        Datenschutzgesetze der Mitgliedstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen
        ist:
      </p>
      <p>
        Robert Münch, RSQDATA
        <br />
        Am Hammerwerk 16A
        <br />
        41515 Grevenbroich
      </p>
      <p>
        Robert Münch, RSQDATA
        <br />
        Lüpertzender Str. 159
        <br />
        41061 Mönchengladbach
      </p>
      <p>
        Telefon: <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <br />
        Umsatzsteuer-Identifikationsnummer: DE291595156
      </p>
      <p>
        Ein Datenschutzbeauftragter ist nicht bestellt, da die Voraussetzungen des § 38 BDSG nicht
        vorliegen.
      </p>
      <p>
        Unser Büro für Beratung und Koordination befindet sich in Köln ({SITE.address.street},{' '}
        {SITE.address.zip} {SITE.address.city}). Ladungsfähige Anschriften des Verantwortlichen sind
        die oben genannten Standorte in Grevenbroich und Mönchengladbach.
      </p>

      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns ein zentrales Anliegen – insbesondere, weil
        wir mit Datenträgern arbeiten, auf denen sich Ihre persönlichsten oder geschäftskritischsten
        Informationen befinden können. Diese Datenschutzerklärung informiert Sie darüber, welche
        Daten wir erheben, zu welchem Zweck und auf welcher Rechtsgrundlage wir sie verarbeiten, wie
        lange wir sie speichern und welche Rechte Ihnen zustehen.
      </p>
      <p>
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
        können. Die Verarbeitung erfolgt ausschließlich im Einklang mit der DSGVO und dem
        Bundesdatenschutzgesetz (BDSG).
      </p>

      <h2>3. Hosting und Bereitstellung der Website</h2>

      <h3>3.1 Server-Logfiles</h3>
      <p>
        Beim Aufruf unserer Website werden automatisch Informationen erhoben, die Ihr Browser
        übermittelt, und in sogenannten Server-Logfiles gespeichert:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>verwendeter Browser und Betriebssystem</li>
        <li>Referrer-URL (zuvor besuchte Seite)</li>
      </ul>
      <p>
        Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen nicht der
        Identifizierung einzelner Personen. Die Verarbeitung erfolgt zur Gewährleistung eines
        störungsfreien Betriebs, zur Optimierung unseres Angebots und zur Abwehr von Angriffen auf
        unsere Systeme.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        technisch fehlerfreien und sicheren Darstellung unserer Website).
      </p>
      <p>
        <strong>Speicherdauer:</strong> Löschung nach spätestens 30 Tagen.
      </p>

      <h3>3.2 Website-Hosting (Vercel)</h3>
      <p>
        Die Website (Next.js-Anwendung) wird gehostet bei der Vercel Inc., 440 N Barranca Ave #4133,
        Covina, CA 91723, USA. Der Anbieter verarbeitet die unter 3.1 genannten Daten in unserem
        Auftrag. Es besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Der Auslieferung
        unserer Website dient unter anderem die Region Frankfurt (fra1); eine Verarbeitung in
        weiteren Standorten von Vercel (einschließlich USA) kann nicht ausgeschlossen werden.
      </p>
      <p>
        Soweit eine Übermittlung in die USA erfolgt, stützt sich diese auf den
        Angemessenheitsbeschluss der Europäischen Kommission zum EU-US Data Privacy Framework (Art.
        45 DSGVO) sowie ergänzend auf die EU-Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c
        DSGVO, soweit anwendbar. Vercel Inc. ist unter dem EU-US Data Privacy Framework zertifiziert.
      </p>

      <h3>3.3 Domain, DNS und Postfach (STRATO)</h3>
      <p>
        Die Domain <strong>rsqdata.de</strong> wird über die STRATO AG, Otto-Ostrowski-Straße 7,
        10249 Berlin, verwaltet. STRATO stellt die DNS-Server sowie den Empfang von E-Mails an
        unsere Domain-Postfächer (MX) bereit. Es besteht ein Auftragsverarbeitungsvertrag gemäß Art.
        28 DSGVO. Die Server befinden sich in Deutschland.
      </p>

      <h3>3.4 Transaktionale E-Mails (Resend)</h3>
      <p>
        Für den Versand von System- und Anfrage-E-Mails (insbesondere Bestätigungen und
        Weiterleitung Ihrer Angebotsanfrage) nutzen wir Resend Inc., 2261 Market Street #5039, San
        Francisco, CA 94114, USA. Resend verarbeitet dabei die in der jeweiligen E-Mail enthaltenen
        Daten (u. a. Name, E-Mail-Adresse, Inhalt Ihrer Anfrage) in unserem Auftrag. Es besteht ein
        Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen /
        Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
        zuverlässigen E-Mail-Versand).
      </p>
      <p>
        Eine Übermittlung in die USA kann nicht ausgeschlossen werden. Resend Inc. ist unter dem
        EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO); ergänzend gelten soweit
        erforderlich die EU-Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO.
      </p>

      <h3>3.5 SSL-/TLS-Verschlüsselung</h3>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der
        Adresszeile „https://“ und dem Schloss-Symbol in Ihrem Browser.
      </p>

      <h2>4. Kontaktaufnahme und Angebotsanfrage</h2>

      <h3>4.1 Anfrageformular und Preisrechner</h3>
      <p>
        Wenn Sie unser Anfrageformular nutzen, verarbeiten wir die von Ihnen angegebenen Daten:
      </p>
      <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>
          Angaben zum betroffenen Datenträger (Medientyp, Schadensbild, gewünschtes Service-Level)
        </li>
        <li>gewählter Abwicklungsweg (Versand oder Abgabe an einer Annahmestelle)</li>
        <li>optionale Angaben zu Symptomen und benötigten Dateitypen</li>
      </ul>
      <p>
        Diese Daten benötigen wir, um Ihre Anfrage zu bearbeiten, Ihnen ein Angebot zu erstellen und
        den Auftrag vorzubereiten. Pflichtfelder sind als solche gekennzeichnet; alle weiteren
        Angaben sind freiwillig. Der technische Versand erfolgt über den unter 3.4 genannten
        Dienstleister Resend.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher
        Maßnahmen auf Ihre Anfrage hin).
      </p>

      <h3>4.2 Kontakt per E-Mail oder Telefon</h3>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur
        Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei
        vertragsbezogenen Anfragen, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        der Beantwortung von Anfragen). Eine Aufzeichnung von Telefongesprächen findet nicht statt.
      </p>

      <h3>4.3 Speicherdauer</h3>
      <p>
        Kommt kein Vertrag zustande, löschen wir Ihre Anfragedaten spätestens sechs Monate nach dem
        letzten Kontakt. Kommt ein Vertrag zustande, gelten die handels- und steuerrechtlichen
        Aufbewahrungsfristen von sechs beziehungsweise zehn Jahren (§ 257 HGB, § 147 AO).
      </p>

      <h2>5. Verarbeitung im Rahmen der Datenrettung</h2>
      <p>
        Dieser Abschnitt beschreibt die Verarbeitung Ihrer Daten während der eigentlichen
        Dienstleistung. Er ist der wichtigste Teil dieser Erklärung, da hierbei nicht nur Ihre
        Kontaktdaten, sondern auch die auf Ihrem Datenträger gespeicherten Inhalte verarbeitet
        werden.
      </p>

      <h3>5.1 Welche Daten wir verarbeiten</h3>
      <ul>
        <li>Ihre Kontakt-, Vertrags- und Rechnungsdaten</li>
        <li>
          technische Angaben zum Datenträger (Hersteller, Modell, Seriennummer, Kapazität,
          Schadensbild)
        </li>
        <li>
          die auf dem Datenträger gespeicherten Inhalte, soweit dies zur Analyse und
          Wiederherstellung technisch erforderlich ist
        </li>
      </ul>
      <p>
        Die Inhalte Ihres Datenträgers können personenbezogene Daten von Ihnen sowie von Dritten
        enthalten (zum Beispiel Fotos, E-Mails, Kunden- oder Personaldaten). Diese Daten verarbeiten
        wir ausschließlich als technische Notwendigkeit der Wiederherstellung, nicht zu eigenen
        Zwecken.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Soweit auf
        dem Datenträger besondere Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO
        enthalten sein sollten, erfolgt die Verarbeitung auf Grundlage Ihrer Beauftragung und der
        zwischen uns bestehenden Vertraulichkeitsvereinbarung.
      </p>

      <h3>5.2 Zweistufiger Bearbeitungsprozess</h3>
      <p>
        Wir bearbeiten Ihren Auftrag je nach Art und Schwere des Schadens auf zwei unterschiedlichen
        Wegen.
      </p>
      <p>
        <strong>Stufe 1 – Bearbeitung an unserem Standort Grevenbroich</strong>
      </p>
      <p>
        Einen erheblichen Teil der Aufträge bearbeiten wir vollständig an unserem Standort in
        Grevenbroich. Dies betrifft insbesondere:
      </p>
      <ul>
        <li>
          logische Schäden (versehentlich gelöschte Dateien, formatierte Datenträger,
          Dateisystemfehler)
        </li>
        <li>defekte Partitionen und Bootprobleme</li>
        <li>
          Datenrettung von Notebooks, PCs, Smartphones und Tablets bei logischen Defekten oder
          intaktem Speicherchip
        </li>
        <li>Auslesen von USB-Sticks und Speicherkarten ohne Chipschaden</li>
      </ul>
      <p>
        In diesen Fällen verlassen Ihre Daten unsere Räumlichkeiten in Deutschland nicht. Sollte
        sich im Verlauf der Bearbeitung herausstellen, dass eine Weitergabe an unser Partnerlabor
        erforderlich ist, informieren wir Sie vorab (siehe Stufe 2).
      </p>
      <p>
        <strong>Stufe 2 – Bearbeitung im Reinraumlabor unseres Auftragsverarbeiters</strong>
      </p>
      <p>
        Komplexe Fälle, die spezielle Laborausstattung erfordern, geben wir an unseren
        Auftragsverarbeiter weiter. Dies betrifft insbesondere:
      </p>
      <ul>
        <li>
          mechanische Schäden an Festplatten (zum Beispiel Headcrash, defekte Lese-/Schreibköpfe),
          die eine Öffnung des Datenträgers im Reinraum erfordern
        </li>
        <li>Rekonstruktion von RAID-Verbünden, NAS- und Serversystemen</li>
        <li>Chip-Level-Recovery bei physisch beschädigten Flash-Speichern</li>
        <li>Firmware-Defekte, die herstellerspezifische Spezialwerkzeuge erfordern</li>
      </ul>
      <p>
        <strong>Information vor Weitergabe:</strong> Bevor wir Ihren Datenträger an das Reinraumlabor
        weitergeben, informieren wir Sie darüber. Sie können der Weitergabe widersprechen; in diesem
        Fall senden wir Ihnen Ihren Datenträger unbearbeitet zurück beziehungsweise stellen ihn zur
        Abholung bereit.
      </p>

      <h3>5.3 Auftragsverarbeiter für Stufe 2</h3>
      <p>Auftragsverarbeiter für die Bearbeitung komplexer Fälle ist:</p>
      <p>
        Fields Data Recovery Ltd
        <br />
        Fields House, 18-21 Old Field Road, Bocam Park
        <br />
        Pencoed, Bridgend, CF35 5LJ
        <br />
        Vereinigtes Königreich
        <br />
        Company Number: 06695262
      </p>
      <p>
        Es besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Fields Data Recovery Ltd
        verarbeitet Ihre Daten ausschließlich nach unseren Weisungen und zu keinem anderen Zweck als
        der beauftragten Datenrettung. Das Unternehmen ist nach ISO 9001 und ISO 14001 zertifiziert.
      </p>
      <p>
        <strong>Übermittlung in ein Drittland:</strong> Die Übermittlung in das Vereinigte Königreich
        erfolgt auf Grundlage des Angemessenheitsbeschlusses der Europäischen Kommission gemäß Art.
        45 DSGVO (Durchführungsbeschluss (EU) 2021/1772 vom 28. Juni 2021, erneuert durch
        Durchführungsbeschluss der Europäischen Kommission vom 19. Dezember 2025 mit Geltung bis zum
        27. Dezember 2031). Die Europäische Kommission hat damit festgestellt, dass das Vereinigte
        Königreich ein Datenschutzniveau bietet, das dem der Europäischen Union im Wesentlichen
        gleichwertig ist. Eine gesonderte Einwilligung Ihrerseits ist daher nicht erforderlich; wir
        informieren Sie dennoch vorab über jede Weitergabe.
      </p>

      <h3>5.4 Vertraulichkeit</h3>
      <p>
        Wir und unser Auftragsverarbeiter greifen ausschließlich in dem Umfang auf die Inhalte Ihres
        Datenträgers zu, der für die technische Wiederherstellung erforderlich ist. Eine inhaltliche
        Kenntnisnahme, Auswertung oder Nutzung Ihrer Daten zu eigenen Zwecken findet nicht statt.
        Alle beteiligten Mitarbeiter und Partner sind vertraglich zur Verschwiegenheit verpflichtet.
      </p>

      <h3>5.5 Löschung der wiederhergestellten Daten</h3>
      <p>
        Nach vollständiger Auslieferung der wiederhergestellten Daten und Abschluss des Auftrags
        werden die von Ihrem Datenträger extrahierten Inhaltsdaten spätestens nach 30 Tagen
        unwiderruflich gelöscht – sowohl auf unseren Systemen als auch auf denen unseres
        Auftragsverarbeiters. Die Frist dient dazu, Ihnen bei Übertragungsproblemen eine erneute
        Bereitstellung zu ermöglichen.
      </p>
      <p>
        Auf Wunsch löschen wir die Daten auch sofort nach Ihrer Bestätigung des Erhalts. Ihre
        Vertrags- und Rechnungsdaten bleiben von dieser Löschung unberührt und unterliegen den
        gesetzlichen Aufbewahrungsfristen.
      </p>

      <h2>6. Abgabe an unseren Annahmestellen</h2>
      <p>Sie können Ihren Datenträger an unseren Annahmestellen abgeben:</p>
      <ul>
        <li>iAmbulanz Mönchengladbach, Lüpertzender Str. 159, 41061 Mönchengladbach</li>
        <li>iAmbulanz Grevenbroich, Am Hammerwerk 16A, 41515 Grevenbroich</li>
      </ul>
      <p>
        Die dort erhobenen Daten (Kontaktdaten, Angaben zum Gerät, Vorgangsnummer) werden
        ausschließlich zur Weiterleitung an RSQDATA und zur Auftragsabwicklung verwendet. Eine
        Nutzung zu eigenen Zwecken der Annahmestelle findet nicht statt.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
      </p>

      <h2>7. Versanddienstleister</h2>
      <p>
        Für den Versand und Rückversand Ihres Datenträgers arbeiten wir mit der DHL Paket GmbH,
        Sträßchensweg 10, 53113 Bonn, zusammen. Zur Erstellung des Versandlabels und zur Zustellung
        übermitteln wir Ihren Namen und Ihre Adresse an DHL.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
      </p>
      <p>
        Datenschutzhinweise von DHL:{' '}
        <a
          href="https://www.dhl.de/de/toolbar/footer/datenschutz.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.dhl.de/de/toolbar/footer/datenschutz.html
        </a>
      </p>

      <h2>8. Cookies und Einwilligungsverwaltung</h2>

      <h3>8.1 Technisch notwendige Cookies</h3>
      <p>
        Unsere Website verwendet Cookies, die für den Betrieb der Seite technisch erforderlich sind
        – beispielsweise zur Speicherung Ihrer Eingaben im Preisrechner während einer Sitzung. Diese
        Cookies können nicht deaktiviert werden.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1
        lit. f DSGVO.
      </p>

      <h3>8.2 Optionale Cookies und Tracking-Dienste</h3>
      <p>
        Die nachfolgend genannten Dienste setzen wir ausschließlich nach Ihrer ausdrücklichen
        Einwilligung ein. Ihre Einwilligung können Sie jederzeit über die Cookie-Einstellungen auf
        unserer Website mit Wirkung für die Zukunft widerrufen.
      </p>
      <p>
        <strong>Rechtsgrundlage</strong> für alle nachfolgend genannten Dienste: § 25 Abs. 1 TDDDG
        in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
      </p>
      <p>
        <em>
          Hinweis: Die Einbindung der Tracking-Dienste und des Cookie-Banners ist geplant. Bis zur
          technischen Freischaltung werden die unter 8.2 genannten Dienste nicht aktiv geladen.
        </em>
      </p>

      <h3>8.2.1 Google Tag Manager</h3>
      <p>
        Wir nutzen den Google Tag Manager der Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Irland.
      </p>
      <p>
        Der Google Tag Manager ist ein Werkzeug, mit dem wir Tracking- und Analyse-Tools auf unserer
        Website verwalten und einbinden können. Der Tag Manager selbst erstellt keine Nutzerprofile,
        speichert keine Cookies und erhebt keine personenbezogenen Daten zu eigenen Zwecken. Er
        dient ausschließlich der technischen Auslieferung der von Ihnen freigegebenen Dienste. Bei
        Aufruf des Tag Managers wird jedoch Ihre IP-Adresse an Google übermittelt.
      </p>
      <p>
        Datenschutzerklärung von Google:{' '}
        <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
          https://policies.google.com/privacy
        </a>
      </p>

      <h3>8.2.2 Google Analytics 4</h3>
      <p>
        Wir nutzen Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon
        House, Barrow Street, Dublin 4, Irland.
      </p>
      <p>
        <strong>Zweck:</strong> Analyse des Nutzungsverhaltens auf unserer Website, um unser Angebot
        und den Preisrechner zu verbessern.
      </p>
      <p>
        <strong>Verarbeitete Daten:</strong> gekürzte IP-Adresse, Geräte- und Browserinformationen,
        ungefährer Standort (Land/Region), aufgerufene Seiten, Verweildauer, Interaktionen mit dem
        Preisrechner, Referrer-URL, pseudonyme Nutzer- und Sitzungs-IDs.
      </p>
      <p>
        Google Analytics 4 anonymisiert IP-Adressen standardmäßig; eine Kürzung erfolgt innerhalb der
        EU beziehungsweise des EWR, bevor die Daten an Google übertragen werden. Eine Zusammenführung
        mit anderen Daten von Google findet nach unserer Konfiguration nicht statt.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Die von uns eingestellte Aufbewahrungsdauer für Nutzer- und
        Ereignisdaten beträgt 14 Monate. Cookies von Google Analytics haben eine Laufzeit von bis zu
        24 Monaten.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Eine Übermittlung personenbezogener Daten an die
        Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, kann nicht ausgeschlossen
        werden. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert, für das die
        Europäische Kommission mit Beschluss vom 10. Juli 2023 ein angemessenes Datenschutzniveau
        festgestellt hat (Art. 45 DSGVO). Ergänzend haben wir mit Google die
        EU-Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO abgeschlossen.
      </p>
      <p>
        <strong>Auftragsverarbeitung:</strong> Mit Google besteht ein Auftragsverarbeitungsvertrag
        gemäß Art. 28 DSGVO.
      </p>
      <p>
        <strong>Widerspruch:</strong> Neben dem Widerruf über unsere Cookie-Einstellungen können Sie
        die Erfassung durch Google Analytics mit dem folgenden Browser-Add-on verhindern:{' '}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://tools.google.com/dlpage/gaoptout
        </a>
      </p>

      <h3>8.2.3 Google Ads Conversion-Tracking und Remarketing</h3>
      <p>
        Wir nutzen das Werbeprogramm Google Ads der Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland.
      </p>
      <p>
        <strong>Zweck:</strong> Messung des Erfolgs unserer Werbeanzeigen (Conversion-Tracking)
        sowie die Ausspielung interessenbezogener Werbung an Nutzer, die unsere Website bereits
        besucht haben (Remarketing).
      </p>
      <p>
        Funktionsweise: Wenn Sie über eine Google-Anzeige auf unsere Website gelangen, wird ein
        Cookie gesetzt. Führen Sie anschließend eine bestimmte Handlung aus (zum Beispiel das
        Absenden des Anfrageformulars), kann Google diese Handlung der Anzeige zuordnen. Wir
        erhalten dabei ausschließlich aggregierte Statistiken und können einzelne Nutzer nicht
        identifizieren.
      </p>
      <p>
        <strong>Verarbeitete Daten:</strong> Cookie-ID, IP-Adresse, aufgerufene Seiten, ausgeführte
        Conversions, Geräte- und Browserinformationen.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Conversion-Cookies verlieren nach 90 Tagen ihre Gültigkeit.
        Die Mitgliedschaft in Remarketing-Listen endet spätestens nach 540 Tagen.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> siehe Abschnitt 8.2.2.
      </p>
      <p>
        Anzeigeneinstellungen von Google:{' '}
        <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">
          https://adssettings.google.com
        </a>
      </p>

      <h3>8.2.4 Meta-Pixel (Facebook und Instagram)</h3>
      <p>
        Wir nutzen das Meta-Pixel der Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04
        X2K5, Irland.
      </p>
      <p>
        <strong>Zweck:</strong> Messung der Wirksamkeit unserer Werbeanzeigen auf Facebook und
        Instagram sowie Ausspielung zielgruppenbezogener Werbung.
      </p>
      <p>
        <strong>Verarbeitete Daten:</strong> IP-Adresse, Browser- und Geräteinformationen,
        aufgerufene Seiten, ausgeführte Handlungen auf unserer Website sowie – sofern Sie bei
        Facebook oder Instagram eingeloggt sind – Ihre dortige Nutzerkennung.
      </p>
      <p>
        <strong>Gemeinsame Verantwortlichkeit:</strong> Für die Erhebung und Übermittlung der Daten
        durch das Meta-Pixel sind wir gemeinsam mit Meta Platforms Ireland Limited verantwortlich im
        Sinne des Art. 26 DSGVO. Die zwischen uns geltende Vereinbarung ist abrufbar unter:{' '}
        <a
          href="https://www.facebook.com/legal/controller_addendum"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.facebook.com/legal/controller_addendum
        </a>
        . Für die anschließende Weiterverarbeitung durch Meta ist Meta allein verantwortlich. Ihre
        Betroffenenrechte in Bezug auf diese Verarbeitung können Sie sowohl uns gegenüber als auch
        gegenüber Meta geltend machen.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Eine Übermittlung an die Meta Platforms, Inc., 1 Meta
        Way, Menlo Park, CA 94025, USA, findet statt. Meta Platforms, Inc. ist unter dem EU-US Data
        Privacy Framework zertifiziert (Angemessenheitsbeschluss der Europäischen Kommission vom 10.
        Juli 2023, Art. 45 DSGVO). Ergänzend gelten die EU-Standardvertragsklauseln nach Art. 46 Abs.
        2 lit. c DSGVO.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Die Speicherdauer der Cookies beträgt bis zu 90 Tage.
      </p>
      <p>
        Datenschutzerklärung von Meta:{' '}
        <a
          href="https://www.facebook.com/privacy/policy"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.facebook.com/privacy/policy
        </a>
        {' · '}
        Werbeeinstellungen bei Meta:{' '}
        <a
          href="https://www.facebook.com/settings?tab=ads"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.facebook.com/settings?tab=ads
        </a>
      </p>

      <h2>9. Kartendienste und eingebettete Inhalte</h2>

      <h3>9.1 Google Maps</h3>
      <p>
        Auf unseren Standortseiten binden wir Kartenmaterial des Dienstes Google Maps der Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ein.
      </p>
      <p>
        <strong>Zweck:</strong> Anzeige der Lage unserer Annahmestellen in Mönchengladbach und
        Grevenbroich sowie unseres Büros in Köln und Bereitstellung einer Anfahrtsmöglichkeit.
      </p>
      <p>
        <strong>Zwei-Klick-Lösung:</strong> Die Karte wird nicht automatisch geladen. Beim Aufruf
        der Seite sehen Sie zunächst einen Hinweis ohne Verbindung zu Google. Erst wenn Sie die
        Karte durch Anklicken aktiv laden, wird eine Verbindung zu den Servern von Google
        hergestellt und Ihre IP-Adresse sowie gegebenenfalls weitere Informationen an Google
        übermittelt. Sind Sie zu diesem Zeitpunkt in Ihrem Google-Konto eingeloggt, kann Google die
        Nutzung Ihrem Konto zuordnen.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktives
        Laden der Karte) in Verbindung mit § 25 Abs. 1 TDDDG.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Eine Übermittlung an die Google LLC in den USA kann
        nicht ausgeschlossen werden. Google LLC ist unter dem EU-US Data Privacy Framework
        zertifiziert; ergänzend gelten die EU-Standardvertragsklauseln.
      </p>
      <p>
        Nutzungsbedingungen von Google Maps:{' '}
        <a
          href="https://www.google.com/intl/de_de/help/terms_maps/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.google.com/intl/de_de/help/terms_maps/
        </a>
      </p>

      <h3>9.2 Schriftarten</h3>
      <p>
        Die auf unserer Website verwendeten Schriftarten werden lokal von unserem eigenen Server
        ausgeliefert. Eine Verbindung zu Servern Dritter, insbesondere zu Google Fonts, findet dabei
        nicht statt. Eine Übermittlung Ihrer IP-Adresse an Dritte erfolgt durch die Schriftdarstellung
        nicht.
      </p>

      <h2>10. Weitergabe von Daten an Dritte</h2>
      <p>Eine Weitergabe Ihrer personenbezogenen Daten erfolgt ausschließlich:</p>
      <ul>
        <li>
          an unseren Auftragsverarbeiter Fields Data Recovery Ltd bei komplexen Fällen (siehe 5.2 und
          5.3)
        </li>
        <li>an unseren Versanddienstleister DHL zur Zustellung</li>
        <li>
          an unsere technischen Dienstleister im Rahmen des Website-Betriebs (Vercel, STRATO, Resend
          – siehe Abschnitt 3)
        </li>
        <li>
          an unseren Steuerberater sowie an Behörden und Gerichte, soweit gesetzlich vorgeschrieben
        </li>
        <li>
          an das von Ihnen gewählte Kreditinstitut beziehungsweise an einen Zahlungsdienstleister zur
          Abwicklung Ihrer Zahlung
        </li>
      </ul>
      <p>
        Eine Weitergabe zu Werbe- oder Marketingzwecken oder ein Verkauf Ihrer Daten findet in keinem
        Fall statt. Tracking- und Werbedienste (Abschnitt 8.2) werden ausschließlich nach Ihrer
        Einwilligung eingebunden.
      </p>

      <h2>11. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben jederzeit folgende Rechte:</p>
      <ul>
        <li>
          <strong>Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über die von uns
          verarbeiteten personenbezogenen Daten verlangen.
        </li>
        <li>
          <strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder
          die Vervollständigung unvollständiger Daten verlangen.
        </li>
        <li>
          <strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen,
          soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </li>
        <li>
          <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können verlangen, dass
          die Verarbeitung Ihrer Daten eingeschränkt wird.
        </li>
        <li>
          <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, dass wir Ihnen
          die von Ihnen bereitgestellten Daten in einem strukturierten, gängigen und
          maschinenlesbaren Format übermitteln.
        </li>
        <li>
          <strong>Widerspruch (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer Daten auf
          Grundlage berechtigter Interessen aus Gründen widersprechen, die sich aus Ihrer besonderen
          Situation ergeben.
        </li>
        <li>
          <strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Erteilte Einwilligungen
          können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum
          Widerruf erfolgten Verarbeitung bleibt unberührt.
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an:{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <p>
        <strong>Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO):</strong>
      </p>
      <p>
        Unbeschadet anderweitiger Rechtsbehelfe steht Ihnen ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu. Für uns zuständig ist:
      </p>
      <p>
        Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
        <br />
        Kavalleriestraße 2–4, 40213 Düsseldorf
        <br />
        Telefon: 0211 38424-0
        <br />
        E-Mail: poststelle@ldi.nrw.de
      </p>

      <h2>12. Datensicherheit</h2>
      <p>
        Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen zufällige oder
        vorsätzliche Manipulation, Verlust, Zerstörung und unberechtigten Zugriff zu schützen. Dazu
        gehören insbesondere:
      </p>
      <ul>
        <li>verschlüsselte Datenübertragung über unsere Website (SSL/TLS)</li>
        <li>Zugriffsbeschränkungen auf Datenträger und Arbeitsstationen</li>
        <li>physische Zugangssicherung unserer Arbeitsräume</li>
        <li>getrennte und gesicherte Aufbewahrung eingesandter Kundendatenträger</li>
        <li>Verpflichtung aller Mitarbeiter auf das Datengeheimnis</li>
      </ul>
      <p>
        Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend
        überprüft und angepasst.
      </p>

      <h2>13. Keine automatisierte Entscheidungsfindung</h2>
      <p>
        Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO
        findet nicht statt. Der auf unserer Website angezeigte Preisindikator ist eine unverbindliche
        Orientierung und keine automatisierte Entscheidung mit rechtlicher Wirkung; das verbindliche
        Angebot erstellen wir stets nach individueller Prüfung.
      </p>

      <h2>14. Aktualität und Änderung dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung hat den Stand August 2026. Durch die Weiterentwicklung unserer
        Website und unserer Angebote oder aufgrund geänderter gesetzlicher beziehungsweise
        behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die
        jeweils aktuelle Fassung finden Sie unter{' '}
        <Link href="/datenschutz">www.rsqdata.de/datenschutz</Link>.
      </p>

      <p>
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </>
  );
}
