'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { SplitText } from '@/components/motion/SplitText'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { Ornament } from '@/components/shared/Ornament'

export function HeroMetodo() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--ink-900, #0a0709)',
      }}
    >
      {/* Video background */}
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          inset: '-10%',
          willChange: 'transform',
        }}
      >
        <video
          src="/videos/casal-3-hd.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 30%',
          }}
        />
      </div>

      {/* Overlay vinho dominante */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,7,9,0.55) 0%, rgba(42,16,22,0.72) 50%, rgba(10,7,9,0.92) 100%)',
        }}
      />

      {/* Spotlight radial central */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,140,72,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="elv-wrap"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingBlock: 'clamp(100px, 15vh, 160px)',
          gap: 'var(--space-6)',
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.7 }} />
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 600,
              margin: 0,
            }}
          >
            O Caminho
          </p>
          <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.7 }} />
        </div>

        {/* H1 */}
        <h1
          className="elv-serif"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
            color: 'var(--white-warm)',
            lineHeight: 1.06,
            margin: 0,
            maxWidth: '20ch',
            textTransform: 'uppercase',
            letterSpacing: '0.018em',
            fontWeight: 'var(--weight-medium)',
            textWrap: 'balance',
          }}
        >
          <SplitText>Doze meses que constroem</SplitText>{' '}
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--gold-400)',
              fontWeight: 'var(--weight-regular)',
            }}
          >
            <SplitText delay={500}>um casamento para a vida toda.</SplitText>
          </em>
        </h1>

        {/* Sub */}
        <p
          className="elv-sans"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,248,235,0.72)',
            maxWidth: '48ch',
            margin: 0,
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          Um método estruturado em duas fases — primeiro a elevação de cada indivíduo,
          depois a construção do que vocês são juntos.
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--space-2)' }}>
          <MagneticButton>
            <ShimmerCTA href="/mentoria">Quero aplicar</ShimmerCTA>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="#timeline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '15px 32px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(184,140,72,0.45)',
                color: 'var(--white-warm)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                background: 'transparent',
              }}
            >
              Ver os 12 meses
            </Link>
          </MagneticButton>
        </div>

        {/* Scroll hint */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(28px, 5vh, 48px)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-2)',
            opacity: 0.45,
          }}
        >
          <span
            className="elv-sans"
            style={{ fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-400)' }}
          >
            Scroll
          </span>
          <span style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold-400), transparent)' }} />
        </div>
      </div>
    </section>
  )
}
