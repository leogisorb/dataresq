import Link from 'next/link';

import { TILE_CARD_LINK } from '@/lib/button-styles';
import { datenrettungServices } from '@/lib/datenrettung-services';

interface RelatedServicesProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export default function RelatedServices({
  currentSlug,
  relatedSlugs,
}: RelatedServicesProps): JSX.Element | null {
  const related = relatedSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => datenrettungServices.find((service) => service.slug === slug))
    .filter((service): service is (typeof datenrettungServices)[number] => Boolean(service));

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-black/5 bg-bg-subtle py-12 text-text md:px-8 md:py-16 lg:px-12">
      <div className="site-container">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          Verwandte Leistungen
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <li key={service.slug}>
              <Link className={`block p-5 ${TILE_CARD_LINK}`} href={service.href}>
                <p className="text-base font-medium text-text">{service.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-muted">
          <Link className="font-medium text-text transition-opacity hover:opacity-70" href="/datenrettung">
            ← Alle Datenrettungs-Leistungen
          </Link>
        </p>
      </div>
    </section>
  );
}
