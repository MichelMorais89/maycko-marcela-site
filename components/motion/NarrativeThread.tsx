'use client'

import { useEffect, useRef } from 'react'

export function NarrativeThread() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const total = path.getTotalLength()
    path.style.strokeDasharray = `${total}`
    path.style.strokeDashoffset = `${total}`

    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      const pct = docH > 0 ? window.scrollY / docH : 0
      path.style.strokeDashoffset = `${total * (1 - pct * 0.85)}`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 'clamp(12px, 2vw, 28px)',
        top: 0,
        width: 2,
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
      viewBox="0 0 2 800"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M1 0 C1 200 1 400 1 800"
        stroke="url(#threadGrad)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="threadGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="var(--gold-300)" stopOpacity="0" />
          <stop offset="15%" stopColor="var(--gold-400)" stopOpacity="0.7" />
          <stop offset="85%" stopColor="var(--gold-500)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--gold-300)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
