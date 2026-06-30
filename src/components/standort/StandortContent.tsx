import Image from 'next/image';
import Link from 'next/link';

import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import ProcessTimelinePreview from '@/components/sections/datenrettung/ProcessTimelinePreview';
import StandortFaq from '@/components/standort/StandortFaq';
import { TILE_CARD_LINK } from '@/lib/button-styles';
import type { Location } from '@/lib/locations';
import { trustBadges } from '@/lib/datenrettung-services';
import { STANDORT_SERVICES } from '@/lib/standort-services';
import { getStandortFaqs } from '@/lib/standort-faq';
import {
  generateBreadcrumbJsonLd,
  generateLocalBusinessLocationJsonLd,
  generateRatgeberFaqPageJsonLd,
} from '@/lib/structured-data';
import { siteConfig } from '@/lib/metadata';

interface StandortContentProps {
  loc: Location;
}

export default function StandortContent({ loc }: StandortContentProps) {
  const faqs = getStandortFaqs(loc);
  const localBusinessJsonLd = generateLocalBusinessLocationJsonLd(loc);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Standorte', url: `${siteConfig.url}/standort` },
    { name: loc.name, url: `${siteConfig.url}/standort/${loc.slug}` },
  ]);
  const faqJsonLd = generateRatgeberFaqPageJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
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

      <h1 className="text-3xl font-bold text-text md:text-4xl">
        Datenrettung {loc.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text">{loc.description}</p>
      <p className="mt-3 text-sm text-text-muted">{loc.serviceNote}</p>

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

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">Leistungen in {loc.name}</h2>
        <p className="mt-3 max-w-2xl text-sm text-text-muted md:text-base">
          An dieser Abgabestelle nehmen wir alle Datenträgertypen entgegen. Die Rettung erfolgt
          in unserem Labor nach dokumentierter Übergabe.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {STANDORT_SERVICES.map((service) => (
            <Link
              key={service.title}
              className={TILE_CARD_LINK}
              href={service.href}
            >
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

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">Warum RSQDATA in {loc.name}?</h2>
        <ul className="mt-4 space-y-2 text-text">
          {trustBadges.map((badge) => (
            <li key={badge}>✓ {badge}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">
          Häufige Fragen zur Datenrettung in {loc.name}
        </h2>
        <div className="mt-6">
          <StandortFaq faqs={faqs} />
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-black/5 bg-bg-card p-8 text-text">
        <h2 className="text-2xl font-bold text-text">
          Jetzt Datenrettung in {loc.name} beauftragen
        </h2>
        <div className="mt-6">
          <DatenrettungCta />
        </div>
      </section>
    </>
  );
}
