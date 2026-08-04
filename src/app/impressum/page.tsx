// TODO: Rechtsanwalt prüfen lassen

import type { Metadata } from 'next';
import Link from 'next/link';

import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { LEGAL, SITE } from '@/lib/constants';
import { createLegalMetadata } from '@/lib/legal-metadata';

export const metadata: Metadata = createLegalMetadata({
  title: 'Impressum',
  description: 'Impressum der RSQDATA gemäß § 5 DDG.',
  path: '/impressum',
});

export default function ImpressumPage() {
  return (
    <LegalPageLayout breadcrumbLabel="Impressum" path="/impressum">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p className="space-y-0">
        <span className="block">{LEGAL.ownerName}</span>
        <span className="block">{LEGAL.brandName}</span>
        <span className="block">{LEGAL.address.street}</span>
        <span className="block">
          {LEGAL.address.zip} {LEGAL.address.city}
        </span>
        <span className="block">{LEGAL.address.country}</span>
      </p>

      <h2>Kontakt</h2>
      <p className="space-y-0">
        <span className="block">
          Telefon:{' '}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
          {' / '}
          <a href={`tel:${LEGAL.phoneSecondaryTel}`}>{LEGAL.phoneSecondary}</a>
        </span>
        <span className="block">
          E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </span>
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{' '}
        {LEGAL.vatId}
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className="space-y-0">
        <span className="block">{LEGAL.ownerName}</span>
        <span className="block">{LEGAL.address.street}</span>
        <span className="block">
          {LEGAL.address.zip} {LEGAL.address.city}
        </span>
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
        ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
        mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
        nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte
        einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors beziehungsweise Erstellers.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
        gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden,
        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>

      <p>
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </LegalPageLayout>
  );
}
