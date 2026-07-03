import Image from 'next/image';

import { testimonials } from '@/lib/testimonials';
import {
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_PADDING,
} from '@/lib/section-styles';

export default function Testimonials() {
  return (
    <section className={SECTION_PADDING}>
      <div className="site-container">
        <h2 className={SECTION_HEADING}>Was unsere Kunden sagen</h2>

        <div
          className={`${SECTION_CONTENT_MT} grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl bg-bg-card p-6 shadow-md md:p-8"
            >
              <p className="mb-6 text-base italic leading-relaxed text-text">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  alt={testimonial.imageAlt}
                  className="size-10 shrink-0 rounded-full object-cover"
                  height={40}
                  src={testimonial.image}
                  width={40}
                />
                <div>
                  <p className="text-sm font-semibold text-text">{testimonial.name}</p>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
