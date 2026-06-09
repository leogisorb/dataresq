// TODO: Rechtsanwalt prüfen lassen

import type { Metadata } from 'next';
import Link from 'next/link';

import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { SITE } from '@/lib/constants';
import { createLegalMetadata } from '@/lib/legal-metadata';

export const metadata: Metadata = createLegalMetadata({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der DATARESQ gemäß DSGVO.',
  path: '/datenschutz',
});

export default function DatenschutzPage() {
  return (
    <LegalPageLayout>
      <h1>Datenschutzerklärung</h1>
      <p>Stand: [DATUM]</p>

      <h2>1. Verantwortlicher</h2>
      <p>
        [NAME / FIRMENNAME]
        <br />
        [STRASSE, HAUSNUMMER]
        <br />
        [PLZ ORT]
        <br />
        E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>2. Erhobene Daten &amp; Verarbeitungszwecke</h2>

      <h3>2.1 Kontaktformular / Preiskalkulator</h3>
      <ul>
        <li>
          <strong>Zweck:</strong> Angebotserstellung und Kontaktaufnahme
        </li>
        <li>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
        </li>
        <li>
          <strong>Daten:</strong> Name, Telefon, E-Mail, Schadensbeschreibung
        </li>
        <li>
          <strong>Speicherdauer:</strong> [X] Monate nach Auftragsabschluss / Ablehnung
        </li>
      </ul>

      <h3>2.2 Server-Logfiles</h3>
      <ul>
        <li>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
        </li>
        <li>
          <strong>Speicherdauer:</strong> 7 Tage
        </li>
      </ul>

      <h3>2.3 Cookies</h3>
      <ul>
        <li>Technisch notwendige Cookies: keine Einwilligung erforderlich</li>
        <li>Analyse-/Marketing-Cookies: nur nach Einwilligung — [TOOL NENNEN]</li>
      </ul>

      <h2>3. Weitergabe an Dritte</h2>
      <ul>
        <li>
          <strong>Hosting:</strong> Vercel Inc. (AVV abgeschlossen) — Server in [REGION]
        </li>
        <li>
          <strong>E-Mail-Versand:</strong> Resend Inc. (AVV abgeschlossen)
        </li>
        <li>Keine Weitergabe an Dritte zu Werbezwecken.</li>
      </ul>

      <h2>4. Ihre Rechte (Art. 15–22 DSGVO)</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch. Sie haben zudem das Recht, Beschwerde bei einer
        Aufsichtsbehörde einzulegen.
      </p>
      <p>
        <strong>Zuständige Aufsichtsbehörde:</strong> [LANDESBEHÖRDE]
      </p>

      <h2>5. Auftragsverarbeitung (für B2B-Kunden)</h2>
      <p>
        Informationen zum Auftragsverarbeitungsvertrag finden Sie unter{' '}
        <Link href="/auftragsverarbeitung">/auftragsverarbeitung</Link>.
      </p>

      <h2>6. Widerruf der Einwilligung</h2>
      <p>
        Sie können eine erteilte Einwilligung jederzeit widerrufen. Für Vertragswiderrufe nutzen Sie
        den Widerrufsbutton im Footer dieser Website.
      </p>

      <p>
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </LegalPageLayout>
  );
}
