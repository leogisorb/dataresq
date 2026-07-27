import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ContentPageShell from '@/components/layout/ContentPageShell';
import StandortContent from '@/components/standort/StandortContent';
import { getLocation, getLocationMetaDescription, getLocationPageTitle, LOCATIONS } from '@/lib/locations';
import { createContentMetadata } from '@/lib/metadata';

interface StandortPageProps {
  params: Promise<{ stadt: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({ stadt: location.slug }));
}

export async function generateMetadata({ params }: StandortPageProps): Promise<Metadata> {
  const { stadt } = await params;
  const loc = getLocation(stadt);

  if (!loc) {
    return {};
  }

  return createContentMetadata({
    title: getLocationPageTitle(loc),
    description: getLocationMetaDescription(loc),
    path: `/standort/${loc.slug}`,
  });
}

export default async function StandortPage({ params }: StandortPageProps) {
  const { stadt } = await params;
  const loc = getLocation(stadt);

  if (!loc) {
    notFound();
  }

  return (
    <>
      <ContentPageShell>
        <div className="site-container py-12 md:px-8 md:py-16 lg:px-12">
          <StandortContent loc={loc} />
        </div>
      </ContentPageShell>
    </>
  );
}
