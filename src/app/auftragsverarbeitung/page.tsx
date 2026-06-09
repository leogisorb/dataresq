// TODO: Rechtsanwalt prüfen lassen

import type { Metadata } from 'next';
import Link from 'next/link';

import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { SITE } from '@/lib/constants';
import { createLegalMetadata } from '@/lib/legal-metadata';

export const metadata: Metadata = createLegalMetadata({
  title: 'Auftragsverarbeitungsvertrag (AVV)',
  description: 'AVV der DATARESQ gemäß Art. 28 DSGVO für gewerbliche Auftraggeber.',
  path: '/auftragsverarbeitung',
});

export default function AuftragsverarbeitungPage() {
  return (
    <LegalPageLayout>
      <h1>Auftragsverarbeitungsvertrag (AVV)</h1>
      <p>gemäß Art. 28 DSGVO — für gewerbliche Auftraggeber</p>

      <h2>1. Gegenstand &amp; Dauer</h2>
      <p>
        Gegenstand ist die Datenrettung von Speichermedien, die personenbezogene Daten enthalten
        können. Die Laufzeit entspricht der Dauer des jeweiligen Auftrags.
      </p>

      <h2>2. Art der Verarbeitung &amp; betroffene Personen</h2>
      <p>
        Verarbeitung durch physischen Zugriff auf Speichermedien im Rahmen der Datenrettung.
        Betroffene Personen: Mitarbeiter und Kunden des Auftraggebers (unbekannter Umfang, abhängig
        vom Inhalt des Datenträgers).
      </p>

      <h2>3. Pflichten DATARESQ als Auftragsverarbeiter</h2>
      <ul>
        <li>Verarbeitung nur nach dokumentierter Weisung des Auftraggebers</li>
        <li>Vertraulichkeit — alle Mitarbeiter zur Geheimhaltung verpflichtet</li>
        <li>
          Technisch-organisatorische Maßnahmen (TOMs): [REINRAUM-ZUGANG, VERSCHLÜSSELUNG,
          LÖSCHPROZESS NACH ÜBERGABE]
        </li>
        <li>Keine Weitergabe an Unterauftragnehmer ohne vorherige Zustimmung</li>
        <li>Löschung nach Auftragsabschluss (7 Tage Sicherungskopie zur Qualitätssicherung)</li>
      </ul>

      <h2>4. Unterauftragnehmer</h2>
      <p>[LISTE falls vorhanden — sonst: Derzeit keine Unterauftragnehmer eingesetzt.]</p>

      <h2>5. Betroffenenrechte</h2>
      <p>
        DATARESQ unterstützt den Auftraggeber bei der Erfüllung von Auskunfts-, Berichtigungs- und
        Löschanfragen betroffener Personen im Rahmen des Auftrags.
      </p>

      <h2>6. Download</h2>
      <p>
        <a
          className="inline-flex min-h-[44px] items-center rounded-md border border-border px-4 py-2 font-medium text-text active:bg-surface-muted"
          href="#"
        >
          AVV als PDF herunterladen [PLATZHALTER]
        </a>
      </p>

      <h2>7. Kontakt &amp; Abschluss</h2>
      <p>
        Der AVV gilt als abgeschlossen mit Auftragserteilung durch Unternehmen auf Basis dieser
        Vereinbarung. Für individuelle AVV-Abschlüsse kontaktieren Sie uns unter{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <p>
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </LegalPageLayout>
  );
}
