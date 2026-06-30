import Link from 'next/link';

import HashLink from '@/components/navigation/HashLink';
import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import { BTN_BRAND_LG } from '@/lib/button-styles';

export default function FooterCta() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <Link className={`${BTN_BRAND_LG} w-full sm:w-auto`} href={CALCULATOR_PAGE_PATH}>
        Jetzt Kosten berechnen
      </Link>
      <HashLink className={`${BTN_BRAND_LG} w-full sm:w-auto`} href="/#kontakt">
        Kontakt aufnehmen
      </HashLink>
    </div>
  );
}
