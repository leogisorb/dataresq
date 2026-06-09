export default function ReinraumIcon({ className = 'size-8' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        d="M9 3h6l2 4v14H7V7l2-4zM9 7h6M10 11h4M10 15h4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
