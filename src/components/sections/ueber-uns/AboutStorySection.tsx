'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import {
  ABOUT_STORY_IMAGE,
  ABOUT_STORY_IMAGE_ALT,
  aboutStoryParagraphs,
} from '@/lib/ueber-uns-content';

const LG_BREAKPOINT = 1024;

export default function AboutStorySection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const stickyTrackRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState<number | null>(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const trackEl = stickyTrackRef.current;
    if (!imageEl || !trackEl) return;

    const syncTrackHeight = () => {
      if (window.innerWidth < LG_BREAKPOINT) {
        setTrackHeight(null);
        trackEl.style.removeProperty('height');
        return;
      }

      const height = imageEl.offsetHeight;
      setTrackHeight(height);
      trackEl.style.height = `${height}px`;
    };

    syncTrackHeight();

    const observer = new ResizeObserver(syncTrackHeight);
    observer.observe(imageEl);

    window.addEventListener('resize', syncTrackHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncTrackHeight);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
      <div ref={imageRef} className="relative min-h-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-bg-subtle sm:aspect-[3/4]">
          <Image
            alt={ABOUT_STORY_IMAGE_ALT}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            src={ABOUT_STORY_IMAGE}
          />
        </div>
      </div>

      <div className="relative min-h-0">
        <div
          ref={stickyTrackRef}
          className="relative lg:min-h-0"
          style={trackHeight !== null ? { height: `${trackHeight}px` } : undefined}
        >
          <div className="lg:sticky lg:top-24">
            <div className="flex flex-col gap-6 text-base leading-relaxed text-text md:text-lg md:leading-relaxed">
              {aboutStoryParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
