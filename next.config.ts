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
    ];
  },
};

export default nextConfig;
