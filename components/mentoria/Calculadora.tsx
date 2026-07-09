'use client'

import { useState, useRef, useEffect } from 'react'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
import { Ornament } from '@/components/shared/Ornament'
import { Reveal } from '@/components/shared/Reveal'

function formatBRL(n: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(n)
}

function AnimatedNumber({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(0)
  const prevRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const from = prevRef.current
    const to = value
    prevRef.current = value
    if (from === to) return

    const duration = 1200
    const start = performance.now()
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) { setDisplay(to); return }

    const tick = (now: number) => {
      const pct = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - pct, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (pct < 1) rafRef.current = requestAnimationFrame(tick)
    }
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [value])

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        className="elv-serif"
        style={{
          fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)',
          fontWeight: 'var(--weight-medium)',
          background: 'linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.1,
        }}
      >
        {formatBRL(display)}
      </div>
      <p
        className="elv-sans"
        style={{
          fontSize: 'clamp(0.72rem, 0.85vw, 0.82rem)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,248,235,0.5)',
          marginTop: 'var(--space-2)',
        }}
      >
        {label}
      </p>
    </div>
  )
}

export function Calculadora() {
  const [renda, setRenda] = useState('')
  const [anos, setAnos] = useState('')
  const [calculado, setCalculado] = useState(false)

  const rendaN = parseFloat(renda.replace(/\D/g, '')) || 0
  const anosN = parseInt(anos) || 0

  const perdaQualidade = Math.round(rendaN * anosN * 12 * 0.08)
  const perdaNegocio = Math.round(rendaN * anosN * 12 * 0.12)
  const total = perdaQualidade + perdaNegocio

  const handleCalc = () => {
    if (rendaN > 0 && anosN > 0) setCalculado(true)
  }

  const handleRendaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '')
    const n = parseInt(raw) || 0
    setRenda(n > 0 ? formatBRL(n) : '')
    setCalculado(false)
  }

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingBlock: 'var(--space-12)',
        background: 'var(--ink-950, #07050a)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(122,28,46,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1, maxWidth: '720px', marginInline: 'auto' }}>
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-9)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <Ornament variant="rule" ruleWidth={32} tone="gold" style={{ opacity: 0.6 }} />
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
              Calculadora
            </p>
            <Ornament variant="rule" ruleWidth={32} tone="gold" style={{ opacity: 0.6 }} />
          </div>
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)',
              color: 'var(--white-warm)',
              margin: '0 auto',
              maxWidth: '28ch',
              lineHeight: 1.18,
              fontWeight: 'var(--weight-medium)',
              textAlign: 'center',
            }}
          >
            Quanto custa deixar o casamento{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-300)' }}>no automático?</em>
          </h2>
        </Reveal>

        {/* Card */}
        <div
          style={{
            background:
              'linear-gradient(155deg, rgba(38,26,32,0.92) 0%, rgba(22,14,18,0.97) 55%, rgba(12,7,10,1) 100%)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: [
              '0 1px 0 rgba(255,220,150,0.10) inset',
              '0 -1px 0 rgba(0,0,0,0.6) inset',
              '0 32px 80px rgba(0,0,0,0.6)',
              '0 0 0 1px rgba(184,140,72,0.18)',
            ].join(', '),
            padding: 'clamp(32px, 4vw, 56px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Highlight topo */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: 1,
              background: 'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)',
              opacity: 0.5,
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'var(--space-5)' }}>
            {/* Input Renda */}
            <div>
              <label
                className="elv-sans"
                style={{
                  display: 'block',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                }}
              >
                Renda familiar mensal
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={renda}
                onChange={handleRendaInput}
                placeholder="R$ 0"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(184,140,72,0.25)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--white-warm)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-md)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(184,140,72,0.6)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(184,140,72,0.25)' }}
              />
            </div>

            {/* Input Anos */}
            <div>
              <label
                className="elv-sans"
                style={{
                  display: 'block',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)',
                }}
              >
                Anos no automático
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={anos}
                onChange={(e) => { setAnos(e.target.value); setCalculado(false) }}
                placeholder="0"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(184,140,72,0.25)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--white-warm)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-md)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(184,140,72,0.6)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(184,140,72,0.25)' }}
              />
            </div>
          </div>

          {/* Botão calcular */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-6)' }}>
            <button
              onClick={handleCalc}
              disabled={rendaN === 0 || anosN === 0}
              style={{
                padding: '13px 32px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(184,140,72,0.45)',
                background: 'transparent',
                color: 'var(--gold-300)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: rendaN > 0 && anosN > 0 ? 'pointer' : 'not-allowed',
                opacity: rendaN > 0 && anosN > 0 ? 1 : 0.45,
                transition: 'all 0.2s ease',
              }}
            >
              Calcular o custo do automático
            </button>
          </div>

          {/* Resultado */}
          {calculado && total > 0 && (
            <div
              style={{
                marginTop: 'var(--space-8)',
                paddingTop: 'var(--space-7)',
                borderTop: '1px solid rgba(184,140,72,0.15)',
              }}
            >
              <p
                className="elv-sans"
                style={{
                  textAlign: 'center',
                  fontSize: 'clamp(0.82rem, 1vw, 0.92rem)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,248,235,0.45)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Estimativa de custo invisível
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                <AnimatedNumber value={perdaQualidade} label="Em qualidade de vida" />
                <AnimatedNumber value={perdaNegocio} label="Em oportunidades conjuntas" />
                <AnimatedNumber value={total} label="Custo total estimado" />
              </div>

              <p
                className="elv-serif"
                style={{
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                  color: 'var(--gold-300)',
                  lineHeight: 1.4,
                  marginBottom: 'var(--space-7)',
                }}
              >
                Esse é o preço invisível de um casamento no automático.
                <br />
                <span style={{ color: 'var(--white-warm)', fontStyle: 'normal' }}>
                  A mentoria custa menos do que um único ano assim.
                </span>
              </p>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MagneticButton>
                  <ShimmerCTA href="#aplicar">Quero minha aplicação</ShimmerCTA>
                </MagneticButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
