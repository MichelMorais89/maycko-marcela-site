'use client'

import { useEffect, useRef } from 'react'

const TRAIL_COUNT = 6

export function CursorTrail() {
  const trailRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const positions: { x: number; y: number }[] = Array.from(
      { length: TRAIL_COUNT },
      () => ({ x: -200, y: -200 })
    )
    let mouse = { x: -200, y: -200 }
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      // Shift buffer
      for (let i = TRAIL_COUNT - 1; i > 0; i--) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.28
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.28
      }
      positions[0].x += (mouse.x - positions[0].x) * 0.28
      positions[0].y += (mouse.y - positions[0].y) * 0.28

      trailRef.current.forEach((el, i) => {
        if (!el) return
        const scale = 1 - i * 0.14
        el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) translate(-50%,-80%) scale(${scale})`
        el.style.opacity = `${(1 - i / TRAIL_COUNT) * 0.45}`
      })
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
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRef.current[i] = el }}
          aria-hidden="true"
          className="cursor-trail hidden md:block"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: 20 - i * 2,
            height: 20 - i * 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'var(--wine-600)' : 'var(--gold-500)',
            pointerEvents: 'none',
            zIndex: 299,
            willChange: 'transform',
          }}
        />
      ))}
    </>
  )
}
