'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (scrolled / total) * 100 : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] h-[3px] w-full origin-left"
      style={{ background: 'var(--gold-500)', transform: 'scaleX(0)' }}
      ref={barRef}
    />
  )
}
