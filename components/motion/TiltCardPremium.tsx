'use client'

import { useRef, useCallback } from 'react'

interface TiltCardPremiumProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
  glossColor?: string
}

export function TiltCardPremium({
  children,
  className = '',
  style,
  intensity = 14,
  glossColor = 'rgba(255, 245, 210, 0.55)',
}: TiltCardPremiumProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const glossRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const wrap = wrapRef.current
      const gloss = glossRef.current
      const shadow = shadowRef.current
      if (!wrap) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const r = wrap.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const x = px - 0.5
      const y = py - 0.5

      const rx = -y * intensity
      const ry = x * intensity

      wrap.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.025)`

      if (gloss) {
        gloss.style.background = `radial-gradient(600px circle at ${px * 100}% ${py * 100}%, ${glossColor} 0%, rgba(255,245,210,0.10) 25%, transparent 55%)`
        gloss.style.opacity = '1'
      }
      if (shadow) {
        shadow.style.boxShadow = [
          `${-x * 40}px ${-y * 30 + 30}px 60px rgba(60,25,35,0.28)`,
          `${-x * 20}px ${-y * 15 + 15}px 20px rgba(60,25,35,0.18)`,
        ].join(', ')
      }
    },
    [intensity, glossColor]
  )

  const onLeave = useCallback(() => {
    const wrap = wrapRef.current
    const gloss = glossRef.current
    const shadow = shadowRef.current
    if (wrap) {
      wrap.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
    if (gloss) {
      gloss.style.opacity = '0'
    }
    if (shadow) {
      shadow.style.boxShadow = ''
    }
  }, [])

  const onEnter = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    wrap.classList.remove('tilt-card-premium-shine')
    void wrap.offsetWidth
    wrap.classList.add('tilt-card-premium-shine')
  }, [])

  return (
    <div
      ref={wrapRef}
      className={`tilt-card-premium ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition:
          'transform 340ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 340ms ease',
        willChange: 'transform',
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      <div
        ref={shadowRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          transition: 'box-shadow 260ms ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {children}
      {/* Gloss dinâmico que segue o mouse */}
      <div
        ref={glossRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          opacity: 0,
          transition: 'opacity 260ms ease',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          zIndex: 3,
        }}
      />
      {/* Reflexo diagonal, passada de luz ao entrar */}
      <div
        aria-hidden="true"
        className="tilt-card-premium-reflection"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 4,
        }}
      />

      <style>{`
        .tilt-card-premium {
          position: relative;
        }
        .tilt-card-premium-reflection::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -80%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            transparent 30%,
            rgba(255, 250, 230, 0.55) 48%,
            rgba(255, 250, 230, 0.75) 50%,
            rgba(255, 250, 230, 0.55) 52%,
            transparent 70%,
            transparent 100%
          );
          transform: translateX(-100%) rotate(0deg);
          filter: blur(2px);
          opacity: 0;
        }
        .tilt-card-premium-shine .tilt-card-premium-reflection::before {
          animation: tiltCardPremiumShineSweep 1100ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes tiltCardPremiumShineSweep {
          0%   { transform: translateX(-100%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(280%); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tilt-card-premium { transition: none; }
          .tilt-card-premium-shine .tilt-card-premium-reflection::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
