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
      {/* Photo with parallax */}
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          inset: 0,
          willChange: 'transform',
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

      {/* Content */}
      <div
        className="elv-wrap"
        style={{
          position: 'relative',
          zIndex: 3,
          paddingBlock: 'clamp(100px, 14vh, 160px)',
          maxWidth: '820px',
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

        {/* Stagger letter title */}
        <h1
          className="elv-serif"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--white-warm)',
            lineHeight: 1,
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
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

        <p
          className="elv-sans"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'rgba(255,248,235,0.82)',
            maxWidth: '56ch',
            marginTop: 'var(--space-7)',
            marginBottom: 0,
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
              border: '1px solid var(--gold-500)',
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
            color: 'rgba(255,248,235,0.45)',
            marginTop: 'var(--space-6)',
          }}
        >
          Processo seletivo por aplicação · Poucos casais por ciclo
        </p>
      </div>

      {/* Floating quote card */}
      <div
        style={{
          position: 'absolute',
          right: 'clamp(16px, 5vw, 64px)',
          bottom: 'clamp(32px, 6vh, 64px)',
          zIndex: 4,
          width: 'min(300px, 80vw)',
          background: 'rgba(42,16,22,0.72)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(184,140,72,0.25)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-6)',
        }}
      >
        <span
          className="elv-serif"
          style={{
            display: 'block',
            fontStyle: 'italic',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-snug)',
            color: 'var(--white-warm)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Ensinamos o que vivemos e estruturamos.
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <span style={{ width: 24, height: 1, background: 'var(--gold-500)', flexShrink: 0 }} />
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
