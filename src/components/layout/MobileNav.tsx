'use client';

import dynamic from 'next/dynamic';

const MobileNavClient = dynamic(() => import('./MobileNavClient'), {
  ssr: false,
  loading: () => (
    <header className="sticky top-0 z-50 bg-white/72 shadow-sm backdrop-blur-xl">
      <div className="site-container flex min-h-[56px] items-center justify-between gap-4">
        <img
          alt="DATARESQ"
          className="h-8 w-auto md:h-9"
          height={36}
          src="/images/LOGO.svg"
          width={109}
        />
      </div>
    </header>
  ),
});

export default MobileNavClient;
