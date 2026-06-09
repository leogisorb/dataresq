import MobileNav from '@/components/layout/MobileNav';

interface LegalPageLayoutProps {
  children: React.ReactNode;
}

export default function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <>
      <MobileNav />
      <main className="bg-bg text-text">
        <div className="site-container py-12">
          <article className="prose prose-invert max-w-none prose-headings:text-text prose-p:text-text prose-a:text-text prose-li:text-text prose-strong:text-text">
            {children}
          </article>
        </div>
      </main>
    </>
  );
}
