'use client'

export function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="aurora-root pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        className="aurora-svg absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="aurora-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--wine-600)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--wine-600)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold-500)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--gold-500)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--wine-800)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--wine-800)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g filter="url(#aurora-blur)">
          <ellipse
            className="aurora-blob aurora-blob--1"
            cx="20%"
            cy="25%"
            rx="38%"
            ry="30%"
            fill="url(#blob1)"
          />
          <ellipse
            className="aurora-blob aurora-blob--2"
            cx="75%"
            cy="60%"
            rx="32%"
            ry="28%"
            fill="url(#blob2)"
          />
          <ellipse
            className="aurora-blob aurora-blob--3"
            cx="55%"
            cy="15%"
            rx="28%"
            ry="22%"
            fill="url(#blob3)"
          />
        </g>
      </svg>
    </div>
  )
}
