import { Award, Handshake, Microscope, ShieldCheck } from 'lucide-react';

import { certifications, type CertificationIconKey } from '@/lib/ueber-uns-content';

const CERTIFICATION_ICONS: Record<
  CertificationIconKey,
  typeof Award
> = {
  award: Award,
  microscope: Microscope,
  shield: ShieldCheck,
  handshake: Handshake,
};

export default function CertificationGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {certifications.map((cert) => {
        const Icon = CERTIFICATION_ICONS[cert.iconKey];

        return (
          <article
            key={cert.title}
            className="flex h-full flex-col rounded-xl border border-border bg-bg-card p-6"
          >
            <div
              className={[
                'flex size-12 items-center justify-center rounded-xl',
                cert.iconBgClass,
              ].join(' ')}
            >
              <Icon
                aria-hidden="true"
                className={['size-6', cert.iconClass].join(' ')}
                strokeWidth={1.75}
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-text">{cert.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{cert.description}</p>
          </article>
        );
      })}
    </div>
  );
}
