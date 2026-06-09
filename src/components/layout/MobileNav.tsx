'use client';

import dynamic from 'next/dynamic';

const MobileNavClient = dynamic(() => import('./MobileNavClient'), {
  ssr: false,
  loading: () => (
    <header className="site-header">
      <div className="site-container flex h-11 items-center md:h-12">
        <img
          alt="DATARESQ"
          className="h-7 w-auto md:h-8"
          height={32}
          src="/images/logo_2.svg"
          width={97}
        />
      </div>
    </header>
  ),
});

export default MobileNavClient;
