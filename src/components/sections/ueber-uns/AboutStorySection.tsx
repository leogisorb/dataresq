'use client';

import Image from 'next/image';
import { Building2, History, Route, type LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import {
  ABOUT_STORY_IMAGE,
  ABOUT_STORY_IMAGE_ALT,
  ABOUT_STORY_IMAGE_TILE,
  aboutStoryTiles,
  type AboutStoryIconKey,
} from '@/lib/ueber-uns-content';

const STORY_ICONS: Record<AboutStoryIconKey, LucideIcon> = {
  history: History,
  building: Building2,
  route: Route,
};

export default function AboutStorySection(): React.JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={[
        'about-story-reveal grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14',
        inView ? 'is-inview' : '',
      ].join(' ')}
    >
      <div className="flex min-h-0 flex-col gap-4 md:gap-5 lg:order-1 lg:h-full">
        {aboutStoryTiles.map((tile) => {
          const Icon = STORY_ICONS[tile.icon];

          return (
            <article
              key={tile.headline}
              className="about-story-tile flex flex-1 flex-col justify-center gap-3 rounded-2xl border border-border bg-bg-card p-5 md:gap-3.5 md:rounded-3xl md:p-6 lg:p-7"
            >
              <h3
                className={[
                  'flex items-center gap-2.5 text-xl font-semibold tracking-tight md:text-2xl',
                  tile.accentClass,
                ].join(' ')}
              >
                <Icon aria-hidden className="size-5 shrink-0 md:size-6" strokeWidth={1.75} />
                {tile.headline}
              </h3>
              <p className="text-base leading-relaxed text-text md:text-lg md:leading-relaxed">
                {tile.body}
              </p>
            </article>
          );
        })}
      </div>

      <div className="about-story-media relative min-h-0 lg:order-2 lg:h-full">
        <div className="relative aspect-[4/3] h-full min-h-[18rem] w-full overflow-hidden rounded-2xl bg-bg-subtle sm:min-h-[22rem] md:rounded-3xl lg:aspect-auto lg:min-h-0">
          <Image
            alt={ABOUT_STORY_IMAGE_ALT}
            className="object-cover object-center"
            fill
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={ABOUT_STORY_IMAGE}
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"
          />

          <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-5 sm:bottom-5 md:inset-x-6 md:bottom-6">
            <div className="about-story-media-tile max-w-md rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md md:rounded-3xl md:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                {ABOUT_STORY_IMAGE_TILE.eyebrow}
              </p>
              <p className="mt-1.5 text-lg font-semibold tracking-tight text-white md:text-xl">
                {ABOUT_STORY_IMAGE_TILE.title}
              </p>
              <p className="mt-1 text-sm text-white/75 md:text-[15px]">
                {ABOUT_STORY_IMAGE_TILE.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
