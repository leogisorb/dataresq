import PriceCalculator from '@/components/calculator/PriceCalculator';
import BrandCarousel from '@/components/sections/BrandCarousel';
import { calculatorFaqs } from '@/lib/faq-calculator';

export default function CalculatorSection() {
  return (
    <section className="bg-bg-subtle py-16 md:py-24" id="kostenrechner">
      <div className="site-container text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-4xl">
          Was kostet Datenrettung?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text">
          Berechnen Sie jetzt Ihren Richtpreis — in 2 Minuten.
        </p>

        <div className="mx-auto mt-10 w-full max-w-3xl">
          <PriceCalculator />
        </div>
      </div>

      <div className="mt-10">
        <BrandCarousel />
      </div>

      <div className="site-container">
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="text-xl font-semibold tracking-tight text-text md:text-2xl">
            Häufige Fragen zu Datenrettungskosten
          </h3>
          <div className="mt-8 flex flex-col gap-6 text-left">
            {calculatorFaqs.map((faq) => (
              <article key={faq.question} className="border-b border-black/5 pb-6 last:border-0">
                <h4 className="text-lg font-semibold text-text">{faq.question}</h4>
                <p className="mt-2 leading-relaxed text-text">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
