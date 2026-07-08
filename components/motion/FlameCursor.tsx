'use client'

import { useEffect, useRef } from 'react'

export function FlameCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let raf: number
    let x = -200
    let y = -200
    let cx = -200
    let cy = -200

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const tick = () => {
      cx += (x - cx) * 0.14
      cy += (y - cy) * 0.14
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -80%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <svg
      ref={cursorRef}
      aria-hidden="true"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className="flame-cursor pointer-events-none fixed left-0 top-0 z-[300] hidden md:block"
      style={{
        width: 36,
        height: 36,
        willChange: 'transform',
      }}
    >
      <path
        d="M59 99 C 51 80 46 58 51 40 C 54 31 58 30 60 33 C 56 31 49 44 44 64 C 42 80 50 92 59 99 Z"
        fill="var(--wine-600)"
      />
      <path
        d="M61 99 C 69 78 74 56 69 36 C 66 26 62 22 60 19 C 62 23 71 40 76 60 C 78 78 70 92 61 99 Z"
        fill="var(--gold-500)"
      />
    </svg>
  )
}
