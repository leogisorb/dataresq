// TODO: Rechtsanwalt prüfen lassen

import type { Metadata } from 'next';
import Link from 'next/link';

import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { createLegalMetadata } from '@/lib/legal-metadata';

export const metadata: Metadata = createLegalMetadata({
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB der DATARESQ.',
  path: '/agb',
});

export default function AgbPage() {
  return (
    <LegalPageLayout>
      <h1>Allgemeine Geschäftsbedingungen</h1>
      <p>Stand: [DATUM]</p>

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        [PLACEHOLDER — Diese AGB gelten für alle Aufträge der DATARESQ gegenüber
        Verbrauchern und Unternehmern, sofern nicht individuell abweichende Vereinbarungen
        getroffen wurden.]
      </p>

      <h2>§ 2 Leistungsumfang</h2>
      <p>
        Leistungen umfassen Prüfung, Datenrettung und Rückversand des Datenträgers. Es wird kein
        Erfolg garantiert. Die Erstprüfung kostet 39 €; die Datenrettung zum vereinbarten Festpreis
        nach Beauftragung.
      </p>

      <h2>§ 3 Preise &amp; Zahlung</h2>
      <p>
        Es gilt der vereinbarte Festpreis nach schriftlichem Angebot. Die Zahlung erfolgt nach
        Datenübergabe. Zahlungsarten: [LISTE — z. B. Überweisung, PayPal, Kreditkarte].
      </p>

      <h2>§ 4 Widerrufsrecht (B2C)</h2>
      <p>
        [PLACEHOLDER — Vollständige Widerrufsbelehrung gemäß §§ 312g, 355 BGB. Inhalt durch
        Rechtsanwalt zu ergänzen.]
      </p>
      <p>
        Widerruf möglich über den Button &bdquo;Verträge hier widerrufen&ldquo; im Footer dieser
        Website.
      </p>

      <h2>§ 5 Haftung &amp; Gewährleistung</h2>
      <p>
        [PLACEHOLDER — Haftungsbeschränkung, keine Garantie auf Erfolg der Datenrettung,
        Ausschluss mittelbarer Schäden soweit gesetzlich zulässig.]
      </p>

      <h2>§ 6 Datenschutz</h2>
      <p>
        Es gilt unsere <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>

      <h2>§ 7 Gerichtsstand &amp; anwendbares Recht</h2>
      <p>
        Es gilt deutsches Recht. Gerichtsstand für Kaufleute: [ORT]. Für Verbraucher gelten die
        gesetzlichen Gerichtsstände.
      </p>

      <p>
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </LegalPageLayout>
  );
}
