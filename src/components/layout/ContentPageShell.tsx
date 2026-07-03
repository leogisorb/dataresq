interface ContentPageShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentPageShell({ children, className = '' }: ContentPageShellProps) {
  return <main className={`bg-bg text-text ${className}`}>{children}</main>;
}
