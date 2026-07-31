import {
  FileSearch,
  ShieldCheck,
  Tag,
  Truck,
  type LucideIcon,
} from 'lucide-react';

import SectionHeader from '@/components/sections/SectionHeader';
import DecryptText from '@/components/ui/DecryptText';
import {
  PROMISES_BANNER_LEAD,
  PROMISES_BANNER_TRAIL,
  PROMISES_HEADLINE,
  PROMISES_INTRO,
  promiseTiles,
  type PromiseIconKey,
} from '@/lib/promises-section';
import { SECTION_CONTENT_MT, SECTION_PADDING } from '@/lib/section-styles';

const ICONS: Record<PromiseIconKey, LucideIcon> = {
  price: Tag,
  preview: FileSearch,
  noCost: ShieldCheck,
  shipping: Truck,
};

/** Folder body + left tab, S-curve notch (viewBox 380×268) */
const FOLDER_BODY_PATH =
  'M 0 20 Q 0 0 20 0 L 206 0 A 14 14 0 0 1 220 14 A 14 14 0 0 0 234 24 L 380 24 L 380 268 L 0 268 Z';

export default function PromisesSection(): React.JSX.Element {
  return (
    <section
      aria-labelledby="promises-heading"
      className={`bg-bg ${SECTION_PADDING}`}
    >
      <div className="site-container">
        <SectionHeader
          subline={PROMISES_INTRO}
          title={PROMISES_HEADLINE}
          titleId="promises-heading"
        />
      </div>

      {/* Full-bleed scroll on mobile so folders aren't clipped by site-container */}
      <ul
        className={`${SECTION_CONTENT_MT} flex list-none items-stretch gap-3 overflow-x-auto px-[7.5%] pb-2 md:mx-auto md:grid md:w-[85%] md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:max-w-[calc(4*340px+3*0.5rem)] lg:gap-2`}
      >
        {promiseTiles.map((tile, index) => {
          const Icon = ICONS[tile.icon];
          const gradId = `promise-folder-face-${index}`;
          return (
            <li
              key={tile.title}
              className="flex w-[min(300px,86vw)] shrink-0 md:w-full md:min-w-0"
            >
              <article
                className={[
                  'relative mx-auto flex h-full w-full max-w-[340px] flex-col overflow-hidden rounded-[2rem] shadow-[0_8px_28px_rgba(0,0,0,0.18)]',
                  tile.faceClass,
                ].join(' ')}
              >
                {/* Colored header band (Expertise gradient) */}
                <div
                  className={[
                    'relative h-[7.25rem] shrink-0 overflow-hidden',
                    tile.backClass,
                  ].join(' ')}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-10 opacity-70 blur-xl bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35)_0%,transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12)_0%,transparent_45%)]"
                  />
                  <Icon
                    aria-hidden="true"
                    className="absolute top-5 left-6 z-10 size-6 text-[#1d1d1f] md:size-7"
                    strokeWidth={1.5}
                  />
                  <p className="absolute top-5 right-6 z-10 max-w-[12ch] text-right text-base font-bold leading-snug text-[#1d1d1f] md:text-lg">
                    <DecryptText
                      delayMs={index * 140}
                      resolvedClassName="text-[#1d1d1f]"
                      scrambledClassName="text-[#1d1d1f]/40"
                      text={tile.meta}
                    />
                  </p>
                </div>

                {/* RSQ-colored folder + tab */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute top-[4.5rem] left-0 block h-[calc(100%-4.5rem)] w-full"
                  viewBox="0 0 380 268"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id={gradId}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor={tile.faceGradient.from}
                      />
                      <stop
                        offset="45%"
                        stopColor={tile.faceGradient.via}
                      />
                      <stop
                        offset="100%"
                        stopColor={tile.faceGradient.to}
                      />
                    </linearGradient>
                  </defs>
                  <path d={FOLDER_BODY_PATH} fill={`url(#${gradId})`} />
                </svg>

                {/* Content on folder body */}
                <div className="relative z-10 flex flex-1 flex-col px-7 pb-7 pt-3">
                  <div className="text-left">
                    <h3 className="text-[1.05rem] font-bold leading-snug tracking-tight text-white md:text-[1.125rem]">
                      {tile.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-white/65">
                      {tile.body}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="site-container">
        <p className="mt-6 text-center text-sm leading-relaxed text-text-muted md:mt-8">
          <span className="font-medium text-text">{PROMISES_BANNER_LEAD}</span>
          <span className="mx-2 text-border" aria-hidden="true">
            |
          </span>
          <span>{PROMISES_BANNER_TRAIL}</span>
        </p>
      </div>
    </section>
  );
}
