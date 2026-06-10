import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/preise-calculator',
        destination: '/#kostenrechner',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/#kontakt',
        permanent: false,
      },
      {
        source: '/standort/muenchen',
        destination: '/standort/grevenbroich',
        permanent: true,
      },
      {
        source: '/standort/berlin',
        destination: '/standort/koeln',
        permanent: true,
      },
      {
        source: '/standort/hamburg',
        destination: '/standort/moenchengladbach',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
