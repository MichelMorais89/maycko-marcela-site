'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useCallback } from 'react'

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

  // Spotlight radial vinho segue o cursor
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (prefersReduced) return
      const sec = sectionRef.current
      if (!sec) return
      const r = sec.getBoundingClientRect()
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(500px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(122,28,46,0.18) 0%, transparent 70%)`
      }
      // Parallax sutil na foto (movimento inverso)
      if (imgRef.current) {
        const xPct = (e.clientX - r.left) / r.width
        const yPct = (e.clientY - r.top) / r.height
        const dx = (xPct - 0.5) * -12
        const dy = (yPct - 0.5) * -7
        imgRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`
      }
    },
    [prefersReduced]
  )

  // Scroll parallax na foto
  useEffect(() => {
    if (prefersReduced) return
    const onScroll = () => {
      const el = imgRef.current
      if (!el) return
      el.style.transform = `translateY(${window.scrollY * 0.14}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [prefersReduced])

  // Canvas partículas douradas
  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const particles: {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; phase: number
    }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 42; i++) {
      particles.push({
        x: Math.random() * (canvas.width * 0.55), // lado esquerdo/centro
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.08,
        size: Math.random() * 2.0 + 0.5,
        opacity: Math.random() * 0.45 + 0.12,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width * 0.55 }
        if (p.x < -4) p.x = canvas.width * 0.55
        if (p.x > canvas.width * 0.55) p.x = -4
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
        gridTemplateColumns: '1fr',
        alignItems: 'stretch',
        overflow: 'hidden',
        background: 'var(--surface-anchor)',
      }}
    >
      {/* Foto à direita — ocupa ~48% da largura no desktop, full no mobile */}
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          // Mobile: foto full-bleed escurecida; Desktop: 48% direita
          width: '100%',
          willChange: 'transform',
          transition: prefersReduced ? 'none' : 'transform 0.1s linear',
          zIndex: 0,
        }}
        className="hero-photo-col"
      >
        <Image
          src="/photos/hero-couple.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '65% 20%' }}
        />
        {/* Overlay: no desktop, vela esquerda para garantir copy legível */}
        <div
          className="hero-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(18,8,12,0.96) 0%, rgba(18,8,12,0.82) 45%, rgba(18,8,12,0.28) 72%, rgba(18,8,12,0.10) 100%)',
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
          transition: 'background 0.14s ease',
        }}
      />

      {/* Canvas partículas (lado esquerdo) */}
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

      {/* Content — coluna esquerda, máx 52% desktop */}
      <div
        className="elv-wrap hero-content"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBlock: 'clamp(120px, 15vh, 180px)',
          maxWidth: '640px',
        }}
      >
        <p
          className="elv-sans"
          style={{
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: 'var(--gold-300)',
            marginBottom: 'var(--space-6)',
          }}
        >
          Mentoria para casais
        </p>

        {/* AC1: sempre em 1 linha — whitespace-nowrap + clamp que cabe em 375px */}
        <h1
          className="elv-serif"
          style={{
            fontSize: 'clamp(2.8rem, 8.5vw, 8rem)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--white-warm)',
            lineHeight: 1,
            margin: 0,
            whiteSpace: 'nowrap',
            display: 'flex',
            gap: '0.04em',
          }}
          aria-label={TITLE}
        >
          {TITLE.split('').map((ch, i) => (
            <span
              key={i}
              className="elv-letter elv-letter-drop"
              aria-hidden="true"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        {/* Linha dourada separadora */}
        <span
          style={{
            display: 'block',
            width: 48,
            height: 1,
            background: 'var(--gold-500)',
            margin: 'var(--space-7) 0',
          }}
        />

        <p
          className="elv-sans"
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'rgba(255,248,235,0.80)',
            maxWidth: '50ch',
            margin: 0,
          }}
        >
          Uma mentoria exclusiva para casais que já conquistaram muito — e decidiram que o
          casamento também precisa evoluir no mesmo nível. Em 12 meses, saem do modo automático e
          constroem um relacionamento estruturado, consciente e próspero.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            marginTop: 'var(--space-9)',
          }}
        >
          <Link
            href="/mentoria#aplicar"
            className="elv-cta-glow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '15px 32px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--wine-600)',
              color: 'var(--white-warm)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--weight-semibold)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Quero aplicar
          </Link>
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
        </div>

        <p
          className="elv-sans"
          style={{
            fontSize: 'var(--text-2xs)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: 'rgba(255,248,235,0.38)',
            marginTop: 'var(--space-6)',
          }}
        >
          Processo seletivo · Poucos casais por ciclo
        </p>
      </div>

      {/* Floating quote card — fora dos rostos, canto inferior esquerdo */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(16px, 4vw, 48px)',
          bottom: 'clamp(28px, 5vh, 52px)',
          zIndex: 4,
          width: 'min(280px, 80vw)',
          background: 'rgba(18,8,12,0.78)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(184,140,72,0.22)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-5)',
        }}
      >
        <span
          className="elv-serif"
          style={{
            display: 'block',
            fontStyle: 'italic',
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--leading-snug)',
            color: 'var(--white-warm)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Ensinamos o que vivemos e estruturamos.
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <span style={{ width: 22, height: 1, background: 'var(--gold-500)', flexShrink: 0 }} />
          <div>
            <div
              className="elv-sans"
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-semibold)',
                color: 'var(--white-warm)',
              }}
            >
              Maycko &amp; Marcela
            </div>
            <div
              className="elv-sans"
              style={{
                fontSize: 'var(--text-2xs)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--gold-300)',
              }}
            >
              Mentores
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
