import Link from 'next/link';

import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import { BTN_BRAND_LG } from '@/lib/button-styles';

export default function FooterCta() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <Link className={`${BTN_BRAND_LG} w-full sm:w-auto`} href={CALCULATOR_PAGE_PATH}>
        Angebot anfordern
      </Link>
    </div>
  );
}
