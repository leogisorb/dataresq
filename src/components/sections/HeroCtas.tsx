import Link from 'next/link';

export default function HeroCtas() {
  return (
    <Link
      className="btn-brand min-h-11 w-fit min-w-[37.5%] max-w-full rounded-full px-[18px] text-center text-sm font-semibold leading-snug sm:min-h-12 sm:text-[15px] md:min-h-[52px] md:px-5 md:text-base"
      href="/#kostenrechner"
    >
      Jetzt Kosten berechnen
    </Link>
  );
}
