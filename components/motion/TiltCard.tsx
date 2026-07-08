'use client'

import { useRef, useCallback } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function TiltCard({ children, className = '', style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`
  }, [])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)'
  }, [])

  return (
    <div
      ref={ref}
      className={`elv-tilt ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
