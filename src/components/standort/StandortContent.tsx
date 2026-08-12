import Image from 'next/image';
import Link from 'next/link';

import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import ProcessTimelinePreview from '@/components/sections/datenrettung/ProcessTimelinePreview';
import CitationAnswerBlock from '@/components/seo/CitationAnswerBlock';
import LastUpdatedBadge from '@/components/seo/LastUpdatedBadge';
import StandortFaq from '@/components/standort/StandortFaq';
import StandortLabPartnerSection from '@/components/standort/StandortLabPartnerSection';
import StandortMapConsent from '@/components/standort/StandortMapConsent';
import { TILE_CARD_LINK } from '@/lib/button-styles';
import { CONTENT_LAST_UPDATED, DIAGNOSIS_FEE_FORMATTED, SITE } from '@/lib/constants';
import {
  getGoogleMapsEmbedUrl,
  getLocationPageTitle,
  type Location,
} from '@/lib/locations';
import { trustBadges } from '@/lib/datenrettung-services';
import { STANDORT_SERVICES } from '@/lib/standort-services';
import { getStandortFaqs } from '@/lib/standort-faq';
import {
  generateBreadcrumbJsonLd,
  generateLocalBusinessLocationJsonLd,
  generateFaqPageJsonLd,
} from '@/lib/structured-data';
import { siteConfig } from '@/lib/metadata';

interface StandortContentProps {
  loc: Location;
}

function getStandortCitation(loc: Location): { question: string; answer: string } {
  if (loc.kind === 'abgabe') {
    return {
      question: `Kann ich Datenträger in ${loc.name} abgeben?`,
      answer: `Ja. An der iAmbulanz-Abgabestelle in ${loc.name} (${loc.street}, ${loc.zip} ${loc.name}) nehmen wir Ihre Medien entgegen. Analyse inkl. Dateiliste: ${DIAGNOSIS_FEE_FORMATTED}. ${loc.localFact}`,
    };
  }
  if (loc.kind === 'buero') {
    return {
      question: `Gibt es Medien-Abgabe in ${loc.name}?`,
      answer: `Nein — das Büro in ${loc.name} ist für Beratung und Koordination. Medien geben Sie in Grevenbroich oder Mönchengladbach ab oder senden sie per DHL Express. ${loc.localFact}`,
    };
  }
  return {
    question: 'Wo findet die Laborarbeit statt?',
    answer: `${loc.localFact} Annahme und Kundenkommunikation steuert RSQDATA; die technische Rettung erfolgt im Partner-Reinraumlabor.`,
  };
}

export default function StandortContent({ loc }: StandortContentProps) {
  const faqs = getStandortFaqs(loc);
  const pageTitle = getLocationPageTitle(loc);
  const isAbgabe = loc.kind === 'abgabe';
  const citation = getStandortCitation(loc);
  const localBusinessJsonLd =
    loc.kind === 'labor' ? null : generateLocalBusinessLocationJsonLd(loc);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Standorte', url: `${siteConfig.url}/standort` },
    { name: loc.name, url: `${siteConfig.url}/standort/${loc.slug}` },
  ]);
  const faqJsonLd = generateFaqPageJsonLd(faqs);

  return (
    <>
      {localBusinessJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
        <Link className="active:text-accent md:hover:text-accent" href="/">
          Startseite
        </Link>
        <span className="mx-2">›</span>
        <Link className="active:text-accent md:hover:text-accent" href="/standort">
          Standorte
        </Link>
        <span className="mx-2">›</span>
        <span>{loc.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-text md:text-4xl">{pageTitle}</h1>
      <LastUpdatedBadge className="mt-3" dateIso={CONTENT_LAST_UPDATED} />
      <p className="mt-4 max-w-2xl text-lg text-text">{loc.description}</p>
      <p className="mt-3 text-sm text-text-muted">{loc.serviceNote}</p>
      <p className="mt-3 max-w-2xl text-sm text-text-muted md:text-base">{loc.localFact}</p>
      <CitationAnswerBlock answer={citation.answer} question={citation.question} />

      {loc.kind === 'buero' ? (
        <div className="mt-6 flex flex-col gap-2 text-sm text-text">
          <a className="text-accent hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <a
            className="text-accent hover:underline"
            href={loc.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Maps
          </a>
        </div>
      ) : null}

      <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-xl bg-bg-subtle md:aspect-[3/1]">
        <Image
          alt={loc.imageAlt}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          src={loc.image}
        />
      </div>

      {loc.kind !== 'labor' && loc.mapsUrl ? (
        <StandortMapConsent
          embedUrl={getGoogleMapsEmbedUrl(loc)}
          locationName={loc.name}
          mapsUrl={loc.mapsUrl}
        />
      ) : null}

      {loc.kind === 'labor' ? (
        <div className="mt-10">
          <StandortLabPartnerSection />
        </div>
      ) : null}

      {isAbgabe ? (
        <>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-text">Leistungen in {loc.name}</h2>
            <p className="mt-3 max-w-2xl text-sm text-text-muted md:text-base">
              An dieser Abgabestelle nehmen wir alle Datenträgertypen entgegen — von der Übergabe
              bis zum verbindlichen Angebot begleitet RSQDATA Sie durch den Prozess.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {STANDORT_SERVICES.map((service) => (
                <Link key={service.title} className={TILE_CARD_LINK} href={service.href}>
                  <h3 className="font-semibold text-text">{service.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-text">So funktioniert es</h2>
            <p className="mt-3 max-w-2xl text-sm text-text-muted">
              Kurzüberblick in sechs Schritten. Details, Preise und Ablauf finden Sie auf der
              Datenrettungsseite.
            </p>
            <div className="mt-6">
              <ProcessTimelinePreview />
            </div>
          </section>
        </>
      ) : null}

      {loc.kind === 'buero' ? (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text">Was wir aus Köln übernehmen</h2>
          <ul className="mt-4 space-y-2 text-text">
            <li>✓ Beratung bei Datenverlust</li>
            <li>✓ Koordination von Annahme und Versand</li>
            <li>✓ Kommunikation zu Analyse, Dateiliste und Angebot</li>
            <li>✓ Ansprechpartner bis zur Datenübergabe</li>
          </ul>
        </section>
      ) : null}

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">
          {isAbgabe ? `Warum RSQDATA in ${loc.name}?` : 'Ihre Vorteile mit RSQDATA'}
        </h2>
        <ul className="mt-4 space-y-2 text-text">
          {trustBadges.map((badge) => (
            <li key={badge}>✓ {badge}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">Häufige Fragen</h2>
        <div className="mt-6">
          <StandortFaq faqs={faqs} />
        </div>
      </section>

      {isAbgabe ? (
        <section className="mt-12 rounded-lg border border-black/5 bg-bg-card p-8 text-text">
          <h2 className="text-2xl font-bold text-text">
            Jetzt Datenrettung in {loc.name} beauftragen
          </h2>
          <div className="mt-6">
            <DatenrettungCta />
          </div>
        </section>
      ) : (
        <section className="mt-12 rounded-lg border border-black/5 bg-bg-card p-8 text-text">
          <h2 className="text-2xl font-bold text-text">Datenrettung starten</h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            {loc.kind === 'labor'
              ? 'Medien senden Sie per DHL Express oder geben sie an einer iAmbulanz-Abgabestelle ab.'
              : 'Medien-Abgabe erfolgt an den iAmbulanz-Standorten oder per kostenloser DHL Express-Abholung.'}
          </p>
          <div className="mt-6">
            <DatenrettungCta />
          </div>
        </section>
      )}
    </>
  );
}
