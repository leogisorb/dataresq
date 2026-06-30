import Image from 'next/image';

import { FEELGOOD_MANAGER } from '@/lib/ueber-uns-content';

export default function FeelgoodManagerSection() {
  const hasImage = FEELGOOD_MANAGER.image !== null;

  return (
    <div
      className={[
        'flex flex-col gap-8',
        hasImage ? 'md:flex-row md:items-center md:gap-12' : 'max-w-2xl',
      ].join(' ')}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-text md:text-3xl">{FEELGOOD_MANAGER.title}</h2>
        <p className="text-base leading-relaxed text-text-muted md:text-lg">
          {FEELGOOD_MANAGER.body}
        </p>
      </div>

      {hasImage && FEELGOOD_MANAGER.image ? (
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-bg-subtle md:w-64 lg:w-72">
          <Image
            alt={FEELGOOD_MANAGER.imageAlt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            src={FEELGOOD_MANAGER.image}
          />
        </div>
      ) : null}
    </div>
  );
}
