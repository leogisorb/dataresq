// TODO: Rechtsanwalt prüfen lassen

import type { Metadata } from 'next';
import Link from 'next/link';

import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { SITE } from '@/lib/constants';
import { createLegalMetadata } from '@/lib/legal-metadata';

export const metadata: Metadata = createLegalMetadata({
  title: 'Impressum',
  description: 'Impressum der DATARESQ gemäß § 5 DDG.',
  path: '/impressum',
  index: true,
});

export default function ImpressumPage() {
  return (
    <LegalPageLayout>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        [VOLLSTÄNDIGER NAME / FIRMENNAME]
        <br />
        [STRASSE, HAUSNUMMER]
        <br />
        [PLZ ORT]
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Handelsregister</h2>
      <p>
        Registergericht: [GERICHT]
        <br />
        Registernummer: [HRB-NUMMER]
      </p>
      <p>
        <em>Hinweis: Nur ausfüllen, wenn im Handelsregister eingetragen.</em>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>USt-IdNr.: [DE-NUMMER] — gemäß § 27a UStG</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        [NAME]
        <br />
        [ADRESSE]
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p>
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </LegalPageLayout>
  );
}
