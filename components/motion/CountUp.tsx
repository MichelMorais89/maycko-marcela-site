'use client'

import { useRef, useState, useEffect } from 'react'

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
}

export function CountUp({ to, duration = 1800, suffix = '' }: CountUpProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setValue(to); return }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const pct = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - pct, 3)
          setValue(Math.round(eased * to))
          if (pct < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className="elv-countup">
      {value}
      {suffix}
    </span>
  )
}
