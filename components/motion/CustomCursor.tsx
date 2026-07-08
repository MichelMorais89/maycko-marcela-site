'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let raf: number
    let x = -100
    let y = -100
    let cx = -100
    let cy = -100

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const tick = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
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
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="cursor-custom pointer-events-none fixed left-0 top-0 z-[300] hidden h-10 w-10 rounded-full md:block"
      style={{
        background: 'var(--wine-600)',
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  )
}
