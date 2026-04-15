export function LashIcon(props) {
  return (
    <svg viewBox="0 0 64 64" width="40" height="40" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* upper lid */}
        <path d="M10 34 C 18 22, 46 22, 54 34" />
        {/* lower lid (subtle) */}
        <path d="M14 36 C 22 44, 42 44, 50 36" opacity="0.55" />

        {/* lashes */}
        <path d="M18 30 L14 23" />
        <path d="M24 27 L21 19" />
        <path d="M32 26 L32 17" />
        <path d="M40 27 L43 19" />
        <path d="M46 30 L50 23" />

        {/* pupil */}
        <circle
          cx="32"
          cy="34"
          r="2.3"
          fill="currentColor"
          stroke="none"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}
