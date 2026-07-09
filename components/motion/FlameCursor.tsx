'use client'

import { useEffect, useRef } from 'react'

export function FlameCursor() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const flameRef = useRef<SVGSVGElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    let raf: number
    let x = -300
    let y = -300
    let cx = -300
    let cy = -300
    let gx = -300
    let gy = -300

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const tick = () => {
      // Chama segue direto (leve suavização)
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      // Glow com trailing mais lento pra dar sensação de "aquecendo"
      gx += (x - gx) * 0.08
      gy += (y - gy) * 0.08
      if (flameRef.current) {
        flameRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -78%)`
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`
      }
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
    <div ref={wrapRef} aria-hidden="true">
      {/* Glow radial que segue o cursor com delay — clareia em volta */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 hidden md:block"
        style={{
          width: 480,
          height: 480,
          zIndex: 299,
          background:
            'radial-gradient(circle, rgba(255,210,150,0.18) 0%, rgba(184,140,72,0.10) 30%, rgba(122,28,46,0.06) 55%, transparent 75%)',
          filter: 'blur(24px)',
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />

      {/* Chama sozinha, sem qualquer círculo */}
      <svg
        ref={flameRef}
        aria-hidden="true"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none fixed left-0 top-0 hidden md:block"
        style={{
          width: 30,
          height: 30,
          zIndex: 300,
          willChange: 'transform',
          filter: 'drop-shadow(0 4px 12px rgba(184,140,72,0.55))',
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
    </div>
  )
}
