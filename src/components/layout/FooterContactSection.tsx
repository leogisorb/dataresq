'use client';

import { usePathname } from 'next/navigation';

import FooterCta from '@/components/layout/FooterCta';
import { SITE } from '@/lib/constants';

const HIDDEN_PATHS = ['/ueber-uns'] as const;

export default function FooterContactSection() {
  const pathname = usePathname();

  if (HIDDEN_PATHS.includes(pathname as (typeof HIDDEN_PATHS)[number])) {
    return null;
  }

  return (
    <section className="scroll-mt-24 bg-bg py-20 text-center" id="kontakt">
      <div className="site-container">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-text md:text-4xl">
          Datenverlust ist stressig.
        </h2>
        <p className="mb-8 text-lg text-text">Uns zu erreichen nicht.</p>
        <FooterCta />
        <div className="mt-8 flex flex-col items-center gap-2">
          <a
            className="inline-block text-base text-text-muted transition-colors hover:text-accent"
            href={`tel:${SITE.phoneTel}`}
          >
            {SITE.phone}
          </a>
          <a
            className="inline-block text-base text-text-muted transition-colors hover:text-accent"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
