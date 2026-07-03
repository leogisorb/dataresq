import MobileNav from '@/components/layout/MobileNav';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { siteConfig } from '@/lib/metadata';
import { generateBreadcrumbJsonLd } from '@/lib/structured-data';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  breadcrumbLabel: string;
  path: string;
}

export default function LegalPageLayout({
  children,
  breadcrumbLabel,
  path,
}: LegalPageLayoutProps) {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: breadcrumbLabel, url: `${siteConfig.url}${path}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MobileNav />
      <main className="bg-bg text-text">
        <div className="site-container py-12">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/' },
              { label: breadcrumbLabel },
            ]}
          />
          <article className="prose prose-invert max-w-none prose-headings:text-text prose-p:text-text prose-a:text-text prose-li:text-text prose-strong:text-text">
            {children}
          </article>
        </div>
      </main>
    </>
  );
}
