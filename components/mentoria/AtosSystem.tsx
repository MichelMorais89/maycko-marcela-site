'use client'

import { useEffect, useState, useRef } from 'react'
import { Ornament } from '@/components/shared/Ornament'
import { Reveal } from '@/components/shared/Reveal'

const DWELL = 4000

const ATOS = [
  {
    n: '01',
    fase: 'Ato I',
    title: 'Quem Você É',
    sub: 'Elevação Individual',
    desc: 'Antes de fortalecer o casamento, fortalecemos cada pessoa dentro dele. Identidade, mentalidade, energia — a base de tudo.',
    itens: ['Ressignificação de crenças', 'Inteligência emocional', 'Propósito individual', 'Saúde e energia'],
  },
  {
    n: '02',
    fase: 'Ato II',
    title: 'Quem Vocês São',
    sub: 'Construção do Nós',
    desc: 'Com duas pessoas íntegras, construímos o que sustenta um casamento de alto nível: comunicação, intimidade e parceria real.',
    itens: ['Comunicação madura', 'Intimidade e admiração', 'Alinhamento financeiro', 'Decisões em unidade'],
  },
  {
    n: '03',
    fase: 'Ato III',
    title: 'O Que Vocês Deixam',
    sub: 'Legado em Casal',
    desc: 'O casamento como ativo estratégico. Um relacionamento capaz de sustentar a família e o legado que desejam construir.',
    itens: ['Casamento como ativo', 'Visão financeira conjunta', 'Presença e impacto', 'Legado intergeracional'],
  },
]

function Sparkle() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 5 }}>
      <path d="M7 0 L8.2 5.8 L14 7 L8.2 8.2 L7 14 L5.8 8.2 L0 7 L5.8 5.8 Z" fill="var(--gold-400)" />
    </svg>
  )
}

export function AtosSystem() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const startRef = useRef<number>(0)
  const rafRef = useRef<number>(0)
  const pausedRef = useRef(false)
  const prefersReduced = useRef(false)

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced.current) return

    const tick = (now: number) => {
      if (pausedRef.current) {
        startRef.current = now - progress * DWELL
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const elapsed = now - startRef.current
      const pct = Math.min(elapsed / DWELL, 1)
      setProgress(pct)
      if (pct >= 1) {
        setActive((a) => (a + 1) % ATOS.length)
        startRef.current = now
        setProgress(0)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    startRef.current = performance.now()
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (prefersReduced.current) return
    startRef.current = performance.now()
    setProgress(0)
  }, [active])

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ink-900, #0d0a0d)',
        color: 'var(--white-warm)',
        paddingBlock: 'var(--space-12)',
      }}
    >
      {/* Aurora sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 55% 40% at 10% 15%, rgba(184,140,72,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 90% 85%, rgba(122,28,46,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <Ornament variant="rule" ruleWidth={36} tone="gold" style={{ opacity: 0.7 }} />
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
              O método em três atos
            </p>
            <Ornament variant="rule" ruleWidth={36} tone="gold" style={{ opacity: 0.7 }} />
          </div>
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              color: 'var(--white-warm)',
              margin: '0 auto',
              maxWidth: '28ch',
              lineHeight: 1.15,
              fontWeight: 'var(--weight-medium)',
              textAlign: 'center',
            }}
          >
            Uma jornada em três movimentos.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-300)' }}>Cada um constrói o próximo.</em>
          </h2>
        </Reveal>

        {/* Cards */}
        <div
          className="atos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 24px)',
            alignItems: 'stretch',
          }}
        >
          {ATOS.map((ato, i) => {
            const isActive = i === active
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => { pausedRef.current = true; setHoveredIdx(i) }}
                onMouseLeave={() => { pausedRef.current = false; setHoveredIdx(null) }}
                aria-pressed={isActive}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'clamp(28px, 3.5vw, 48px)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transform: (isActive || hoveredIdx === i) ? 'translateY(-12px)' : 'translateY(0)',
                  filter: hoveredIdx !== null
                    ? hoveredIdx === i
                      ? 'brightness(1) saturate(1)'
                      : 'brightness(.42) saturate(.65) blur(.4px)'
                    : isActive
                      ? 'brightness(1) saturate(1)'
                      : 'brightness(.42) saturate(.65) blur(.4px)',
                  transition: prefersReduced.current
                    ? 'none'
                    : 'transform 0.55s cubic-bezier(0.16,1,0.3,1), filter 0.55s cubic-bezier(0.16,1,0.3,1)',
                  background:
                    'linear-gradient(155deg, rgba(38,26,32,0.90) 0%, rgba(22,14,18,0.96) 55%, rgba(12,7,10,1) 100%)',
                  boxShadow: isActive
                    ? [
                        '0 1px 0 rgba(255,220,150,0.14) inset',
                        '0 -1px 0 rgba(0,0,0,0.6) inset',
                        '0 32px 80px rgba(0,0,0,0.7)',
                        '0 0 0 1px rgba(184,140,72,0.35)',
                        '0 0 60px rgba(122,28,46,0.18)',
                      ].join(', ')
                    : [
                        '0 1px 0 rgba(255,220,150,0.06) inset',
                        '0 8px 24px rgba(0,0,0,0.4)',
                        '0 0 0 1px rgba(184,140,72,0.08)',
                      ].join(', '),
                  minHeight: 'clamp(340px, 42vw, 480px)',
                }}
              >
                {/* Highlight top dourado */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '12%',
                    right: '12%',
                    height: 1,
                    background:
                      'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)',
                    opacity: isActive ? 0.7 : 0.2,
                    transition: 'opacity 0.55s ease',
                  }}
                />
                {/* Segunda linha */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 4,
                    left: '20%',
                    right: '20%',
                    height: 1,
                    background:
                      'linear-gradient(to right, transparent 0%, rgba(184,140,72,0.45) 50%, transparent 100%)',
                    opacity: isActive ? 0.5 : 0.1,
                    transition: 'opacity 0.55s ease',
                  }}
                />
                {/* Diamante topo centro */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: -5,
                    left: '50%',
                    transform: 'translateX(-50%) rotate(45deg)',
                    width: 10,
                    height: 10,
                    background:
                      'linear-gradient(135deg, var(--gold-400) 0%, var(--gold-600,#8a6a2c) 100%)',
                    opacity: isActive ? 1 : 0.3,
                    transition: 'opacity 0.55s ease',
                  }}
                />

                {/* Sweep de luz — atravessa o card quando ativo */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(105deg, transparent 30%, rgba(255,220,140,0.06) 50%, transparent 70%)',
                      animation: prefersReduced.current ? 'none' : 'ato-sweep 2.2s ease-in-out infinite',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                {/* Número grande */}
                <div
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                    lineHeight: 0.85,
                    fontStyle: 'italic',
                    fontWeight: 'var(--weight-light)',
                    background:
                      'linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 50%, var(--gold-700,#6a4d1e) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 'var(--space-5)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {ato.n}
                </div>

                {/* Conteúdo */}
                <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <p
                    className="elv-sans"
                    style={{
                      fontSize: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.82rem)',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-400)',
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {ato.fase}
                  </p>
                  <h3
                    className="elv-serif"
                    style={{
                      fontSize: 'clamp(1.3rem, 2vw, 1.9rem)',
                      lineHeight: 1.1,
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      fontWeight: 'var(--weight-medium)',
                      background:
                        'linear-gradient(180deg, var(--white-warm) 0%, rgba(255,240,210,0.85) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {ato.title}
                  </h3>
                  <p
                    className="elv-serif"
                    style={{
                      fontSize: 'clamp(0.85rem, 1vw, 0.98rem)',
                      color: 'var(--gold-300)',
                      fontStyle: 'italic',
                      margin: 0,
                    }}
                  >
                    {ato.sub}
                  </p>

                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: 36,
                      height: 1,
                      background: 'linear-gradient(to right, var(--gold-500) 0%, rgba(184,140,72,0) 100%)',
                      marginBlock: 'var(--space-2)',
                    }}
                  />

                  <p
                    className="elv-sans"
                    style={{
                      fontSize: 'clamp(0.88rem, 1.1vw, 0.98rem)',
                      lineHeight: 'var(--leading-relaxed)',
                      color: 'rgba(255,248,235,0.68)',
                      margin: 0,
                    }}
                  >
                    {ato.desc}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      margin: 'var(--space-3) 0 0',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-2)',
                    }}
                  >
                    {ato.itens.map((it, j) => (
                      <li
                        key={j}
                        className="elv-sans"
                        style={{
                          display: 'flex',
                          gap: 'var(--space-2)',
                          alignItems: 'flex-start',
                          fontSize: 'clamp(0.82rem, 1vw, 0.92rem)',
                          color: 'rgba(255,248,235,0.85)',
                        }}
                      >
                        <Sparkle />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress bar dourada — só no card ativo */}
                {isActive && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'rgba(184,140,72,0.15)',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${progress * 100}%`,
                        background:
                          'linear-gradient(to right, var(--gold-600,#8a6a2c) 0%, var(--gold-400) 100%)',
                        boxShadow: '0 0 8px rgba(184,140,72,0.6)',
                        transition: prefersReduced.current ? 'none' : 'width 0.1s linear',
                      }}
                    />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Indicadores de paginação */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-8)',
          }}
        >
          {ATOS.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para ato ${i + 1}`}
              onClick={() => setActive(i)}
              style={{
                all: 'unset',
                cursor: 'pointer',
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? 'var(--gold-500)' : 'rgba(184,140,72,0.25)',
                transition: prefersReduced.current ? 'none' : 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ato-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @media (max-width: 768px) {
          .atos-grid {
            grid-template-columns: 1fr !important;
          }
          .atos-grid > button {
            filter: brightness(1) saturate(1) !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
