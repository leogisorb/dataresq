// TODO: Echte Kundenzitate einsetzen — keine Testimonials erfinden

import {
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_PADDING,
} from '@/lib/section-styles';

const testimonials = [
  {
    quote: '[QUOTE PLACEHOLDER — echter Kundentext hier einsetzen]',
    name: '[Name Nachname]',
    role: '[Funktion], [Unternehmen]',
  },
  {
    quote: '[QUOTE PLACEHOLDER — echter Kundentext hier einsetzen]',
    name: '[Name Nachname]',
    role: '[Funktion], [Unternehmen]',
  },
];

export default function Testimonials() {
  return (
    <section className={SECTION_PADDING}>
      <div className="site-container">
        <h2 className={SECTION_HEADING}>Was unsere Kunden sagen</h2>

        <div className={`${SECTION_CONTENT_MT} grid grid-cols-1 gap-6 md:grid-cols-2`}>
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-2xl bg-bg-card p-6 shadow-md md:p-8"
            >
              <p className="mb-6 text-base italic leading-relaxed text-text">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="size-10 shrink-0 rounded-full bg-bg-subtle shadow-inner"
                />
                <div>
                  <p className="text-sm font-semibold text-text">{testimonial.name}</p>
                  <p className="text-xs text-text">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
