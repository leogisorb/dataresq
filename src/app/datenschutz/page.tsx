// TODO: Rechtsanwalt prüfen lassen

import type { Metadata } from 'next';

import DatenschutzContent from '@/components/legal/DatenschutzContent';
import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { createLegalMetadata } from '@/lib/legal-metadata';

export const metadata: Metadata = createLegalMetadata({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der RSQDATA gemäß DSGVO.',
  path: '/datenschutz',
});

export default function DatenschutzPage() {
  return (
    <LegalPageLayout breadcrumbLabel="Datenschutzerklärung" path="/datenschutz">
      <DatenschutzContent />
    </LegalPageLayout>
  );
}
