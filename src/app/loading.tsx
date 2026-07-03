export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-label="Seite wird geladen"
      className="pointer-events-none fixed inset-x-0 top-[var(--site-header-height)] z-40 h-0.5 overflow-hidden bg-transparent"
    >
      <div className="h-full w-1/3 animate-[loading-bar_0.9s_ease-in-out_infinite] bg-accent" />
    </div>
  );
}
