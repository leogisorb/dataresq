import MobileNav from '@/components/layout/MobileNav';

interface ContentPageShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentPageShell({ children, className = '' }: ContentPageShellProps) {
  return (
    <>
      <MobileNav />
      <main className={`bg-bg text-text ${className}`}>{children}</main>
    </>
  );
}
