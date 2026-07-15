'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useCallback } from 'react'
import { SplitText } from '@/components/motion/SplitText'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
import { Ornament } from '@/components/shared/Ornament'
import { BrandArrow } from '@/components/shared/BrandArrow'
import { FlameWatermark } from '@/components/brand/FlameWatermark'

const TITLE = 'ELEVEM-SE'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  // Parallax + spotlight on mouse
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (prefersReduced) return
      const sec = sectionRef.current
      if (!sec) return
      const r = sec.getBoundingClientRect()
      const xPct = (e.clientX - r.left) / r.width
      const yPct = (e.clientY - r.top) / r.height

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(122,28,46,0.22) 0%, transparent 70%)`
      }
      if (imgRef.current) {
        const dx = (xPct - 0.5) * -18
        const dy = (yPct - 0.5) * -10
        imgRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(1.06)`
      }
    },
    [prefersReduced]
  )

  // Scroll parallax
  useEffect(() => {
    if (prefersReduced) return
    const onScroll = () => {
      const el = imgRef.current
      if (!el) return
      el.style.transform = `translateY(${window.scrollY * 0.18}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [prefersReduced])

  // Canvas particles
  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; phase: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 38; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 2.2 + 0.6,
        opacity: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
        if (p.x < -4) p.x = canvas.width + 4
        if (p.x > canvas.width + 4) p.x = -4
        const pulse = 0.7 + 0.3 * Math.sin(t * 0.001 + p.phase)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(184,140,72,${p.opacity * pulse})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReduced])

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    sec.addEventListener('mousemove', handleMouseMove)
    return () => sec.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <section
      ref={sectionRef}
      className="elv-hero-root"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'grid',
        gridTemplateRows: '1fr',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--surface-anchor)',
      }}
    >
      {/* Wordmark topo, monograma + Elevem-se */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 'clamp(20px, 3vw, 32px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/monogram-light.svg" alt="" width={26} height={26} style={{ display: 'block' }} />
        <span
          className="elv-serif"
          style={{
            fontSize: '1.15rem',
            letterSpacing: '0.02em',
            color: 'var(--white-warm)',
            fontWeight: 500,
          }}
        >
          Elevem-se
        </span>
      </div>

      {/* Photo with parallax + fade-in inicial */}
      <div
        ref={imgRef}
        className="elv-hero-photo-fade"
        style={{
          position: 'absolute',
          inset: 0,
          willChange: 'transform, opacity',
          transition: 'transform 0.1s linear',
          zIndex: 0,
        }}
      >
        <Image
          src="/photos/hero-couple.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
        />
        {/* Gradient vinho→creme */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(42,16,22,0.88) 0%, rgba(42,16,22,0.55) 60%, rgba(42,16,22,0.18) 100%)',
          }}
        />
      </div>

      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'background 0.12s ease',
        }}
      />

      {/* Chama viva, lateral esquerda, entre borda e rosto */}
      <FlameWatermark side="left" heightVh={145} offsetPct={28} />

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Content, centralizado */}
      <div
        className="elv-wrap"
        style={{
          position: 'relative',
          zIndex: 3,
          paddingBlock: 'clamp(100px, 14vh, 160px)',
          maxWidth: '820px',
          textAlign: 'center',
          marginInline: 'auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
            justifyContent: 'center',
          }}
        >
          <Ornament variant="rule" ruleWidth={32} tone="gold" style={{ opacity: 0.8 }} />
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
            Mentoria para casais
          </p>
        </div>

        {/* Título, Versão A aprovada 2026-07-14 */}
        <h1
          className="elv-serif"
          style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 3.2rem)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: '-0.005em',
            color: 'var(--white-warm)',
            lineHeight: 1.14,
            margin: '0 auto',
            maxWidth: '28ch',
          }}
        >
          <SplitText delay={1200}>{`Vocês construíram uma vida extraordinária.`}</SplitText>
          <br />
          <em
            style={{
              display: 'block',
              marginTop: 'var(--space-4)',
              fontStyle: 'italic',
              color: 'var(--gold-400)',
              fontWeight: 'var(--weight-regular)',
            }}
          >
            <SplitText delay={1800}>{`Agora construam um casamento capaz de sustentá-la.`}</SplitText>
          </em>
        </h1>

        <p
          className="elv-serif"
          style={{
            marginTop: 'var(--space-8)',
            marginInline: 'auto',
            marginBottom: 0,
            fontStyle: 'italic',
            color: 'var(--gold-300)',
            fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
            lineHeight: 1.4,
            maxWidth: '38ch',
          }}
        >
          <SplitText delay={2400}>
            {`Construímos juntos o que a rotina não constrói sozinha.`}
          </SplitText>
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            marginTop: 'var(--space-9)',
            justifyContent: 'center',
          }}
        >
          <MagneticButton>
            <ShimmerCTA href="/mentoria#aplicar">Quero aplicar</ShimmerCTA>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/metodo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '15px 32px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(184,140,72,0.6)',
                color: 'var(--white-warm)',
                background: 'transparent',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Conhecer o método
            </Link>
          </MagneticButton>
        </div>

        <p
          className="elv-sans"
          style={{
            fontSize: 'var(--text-2xs)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: 'rgba(255,248,235,0.45)',
            marginTop: 'var(--space-6)',
          }}
        >
          Processo seletivo · Poucos casais por ciclo
        </p>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 'clamp(20px, 3vh, 32px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          color: 'var(--gold-300)',
        }}
      >
        <span
          className="elv-sans"
          style={{
            fontSize: '10px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            opacity: 0.85,
          }}
        >
          Comece a subir
        </span>
        <BrandArrow variant="subir" size={22} color="var(--gold-400)" style={{ opacity: 0.85 }} />
        <span
          style={{
            display: 'block',
            width: 1,
            height: 36,
            background: 'linear-gradient(to bottom, var(--gold-500), transparent)',
          }}
        />
      </div>

    </section>
  )
}
