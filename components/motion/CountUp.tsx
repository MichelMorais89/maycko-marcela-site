'use client'

import { useRef, useState, useEffect } from 'react'

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
  replay?: boolean
}

export function CountUp({ to, duration = 1800, suffix = '', replay = true }: CountUpProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const rafRef = useRef<number | null>(null)
  const isRunning = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setValue(to); return }

    function run() {
      if (isRunning.current) return
      isRunning.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const pct = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - pct, 3)
        setValue(Math.round(eased * to))
        if (pct < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          isRunning.current = false
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (rafRef.current) cancelAnimationFrame(rafRef.current)
          isRunning.current = false
          setValue(0)
          run()
          if (!replay) observer.disconnect()
        } else if (replay) {
          if (rafRef.current) cancelAnimationFrame(rafRef.current)
          isRunning.current = false
          setValue(0)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [to, duration, replay])

  return (
    <span ref={ref} className="elv-countup">
      {value}
      {suffix}
    </span>
  )
}
