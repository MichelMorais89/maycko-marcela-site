'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export type WatermarkVariant = 'outline' | 'solid'
export type WatermarkColor = 'dourado' | 'vinho'
export type WatermarkMotion = 'breathing' | 'horizontal-slide' | 'zoom' | 'parallax' | 'none'
export type WatermarkSize = 'full' | 'half' | 'quarter'

interface ElevemseWatermarkProps {
  variant?: WatermarkVariant
  color?: WatermarkColor
  motion?: WatermarkMotion
  opacity?: number
  size?: WatermarkSize
  className?: string
}

const COLOR_MAP: Record<WatermarkColor, string> = {
  dourado: '#C2A14D',
  vinho: '#6E2A36',
}

const SIZE_MAP: Record<WatermarkSize, string> = {
  full: '100%',
  half: '60%',
  quarter: '40%',
}

const KEYFRAMES = `
@keyframes elv-wm-breathing {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.01); }
}
@keyframes elv-wm-slide {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(50%); }
}
@keyframes elv-wm-zoom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
`

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

function useParallax(enabled: boolean): number {
  const [offset, setOffset] = useState(0)
  const rafRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setOffset(window.scrollY * 0.2)
    })
  }, [])

  useEffect(() => {
    if (!enabled) return
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled, handleScroll])

  return offset
}

function KeyframesInjector() {
  useEffect(() => {
    const id = 'elv-wm-keyframes'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = KEYFRAMES
    document.head.appendChild(style)
    return () => { document.getElementById(id)?.remove() }
  }, [])
  return null
}

export function ElevemseWatermark({
  variant = 'outline',
  color = 'dourado',
  motion = 'breathing',
  opacity = 0.07,
  size = 'full',
  className = '',
}: ElevemseWatermarkProps) {
  const reducedMotion = useReducedMotion()
  const effectiveMotion = reducedMotion ? 'none' : motion
  const parallaxOffset = useParallax(effectiveMotion === 'parallax')

  const colorValue = COLOR_MAP[color]
  const widthValue = SIZE_MAP[size]

  const getAnimation = (): React.CSSProperties => {
    switch (effectiveMotion) {
      case 'breathing':
        return { animation: 'elv-wm-breathing 7s ease-in-out infinite' }
      case 'horizontal-slide':
        return { animation: 'elv-wm-slide 40s linear infinite alternate' }
      case 'zoom':
        return { animation: 'elv-wm-zoom 20s ease-in-out infinite' }
      case 'parallax':
        return { transform: `translateY(${parallaxOffset}px)` }
      default:
        return {}
    }
  }

  const svgStyle: React.CSSProperties = {
    color: colorValue,
    opacity,
    width: widthValue,
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    pointerEvents: 'none',
    userSelect: 'none',
    ...getAnimation(),
  }

  const wrapperStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
  }

  return (
    <>
      <KeyframesInjector />
      <div style={wrapperStyle} aria-hidden="true" className={className}>
        {variant === 'outline' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 200"
            fill="none"
            style={svgStyle}
            aria-hidden="true"
            focusable="false"
          >
            <text
              x="50%"
              y="72%"
              textAnchor="middle"
              fontFamily="'Spectral', 'Georgia', serif"
              fontSize="160"
              fontWeight="200"
              letterSpacing="0.18em"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              paintOrder="stroke"
            >
              ELEVEM-SE
            </text>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 200"
            fill="currentColor"
            style={svgStyle}
            aria-hidden="true"
            focusable="false"
          >
            <text
              x="50%"
              y="72%"
              textAnchor="middle"
              fontFamily="'Spectral', 'Georgia', serif"
              fontSize="160"
              fontWeight="200"
              letterSpacing="0.18em"
              fill="currentColor"
            >
              ELEVEM-SE
            </text>
          </svg>
        )}
      </div>
    </>
  )
}
