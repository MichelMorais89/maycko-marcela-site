'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'

const FOTOS = [
  { src: '/photos/legado/casal-9769.jpg', alt: 'Maycko e Marcela juntos', pos: '50% 60%' },
  { src: '/photos/legado/casal-fullsize.jpg', alt: 'Maycko e Marcela, retrato', pos: '50% 55%' },
  { src: '/photos/legado/dubai-5909.jpg', alt: 'Maycko e Marcela em Dubai', pos: '50% 30%' },
  { src: '/photos/legado/casal-9068.jpg', alt: 'Maycko e Marcela, momento a dois', pos: '50% 30%' },
  { src: '/photos/legado/casal-0235.jpg', alt: 'Maycko e Marcela em família', pos: '50% 10%' },
  { src: '/photos/legado/casal-8910.jpg', alt: 'Maycko e Marcela em momento íntimo', pos: '50% 30%' },
  { src: '/photos/legado/casal-7701.jpg', alt: 'Maycko e Marcela caminhando juntos', pos: '50% 30%' },
]

const AUTOPLAY_MS = 5000

export function BiografiaLegado() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((next: number) => {
    setIdx((prev) => {
      const total = FOTOS.length
      return (next + total) % total
    })
  }, [])

  const next = useCallback(() => go(idx + 1), [go, idx])
  const prev = useCallback(() => go(idx - 1), [go, idx])

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timerRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % FOTOS.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, idx])

  return (
    <section
      style={{
        background: 'var(--surface-anchor, #16233A)',
        paddingBlock: 'clamp(4rem, 7vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 55% at 20% 30%, rgba(184,140,72,0.08) 0%, transparent 60%), radial-gradient(ellipse 65% 55% at 85% 80%, rgba(122,28,46,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Reveal className="elv-center" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-5)',
            }}
          >
            <Ornament variant="rule" ruleWidth={32} tone="gold" />
            <p
              className="elv-sans"
              style={{
                fontSize: 'clamp(0.72rem, 0.7rem + 0.2vw, 0.9rem)',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              A família
            </p>
            <Ornament variant="rule" ruleWidth={32} tone="gold" />
          </div>
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              color: 'var(--white-warm)',
              margin: 0,
              maxWidth: '22ch',
              marginInline: 'auto',
              lineHeight: 1.12,
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
              textAlign: 'center',
            }}
          >
            Um legado{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
              que se vive
            </em>
          </h2>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,248,235,0.72)',
              lineHeight: 'var(--leading-relaxed)',
              marginTop: 'var(--space-6)',
              maxWidth: '46ch',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            O que ensinamos não é teoria, é a vida que escolhemos construir todos os dias, dentro de casa, com nossos filhos assistindo.
          </p>
        </Reveal>

        {/* Carrossel de fotos */}
        <div
          className="legado-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fotos da família Maycko e Marcela"
        >
          <div className="legado-carousel-frame">
            {FOTOS.map((foto, i) => (
              <div
                key={foto.src}
                className={`legado-carousel-slide ${i === idx ? 'is-active' : ''}`}
                aria-hidden={i !== idx}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  style={{ objectFit: 'cover', objectPosition: foto.pos ?? '50% 30%' }}
                />
                <div
                  aria-hidden="true"
                  className="legado-carousel-slide-veil"
                />
              </div>
            ))}

            {/* Setas */}
            <button
              type="button"
              className="legado-carousel-arrow legado-carousel-arrow--prev"
              onClick={prev}
              aria-label="Foto anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="legado-carousel-arrow legado-carousel-arrow--next"
              onClick={next}
              aria-label="Próxima foto"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="legado-carousel-dots" role="tablist" aria-label="Escolher foto">
            {FOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={`Foto ${i + 1} de ${FOTOS.length}`}
                className={`legado-carousel-dot ${i === idx ? 'is-active' : ''}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        {/* Duas frases-quote embaixo do carrossel */}
        <div className="legado-quotes">
          <Reveal>
            <div className="legado-quote">
              <p
                className="elv-sans legado-quote-eyebrow"
                style={{
                  color: 'var(--gold-400)',
                }}
              >
                Intimidade
              </p>
              <p
                className="elv-serif legado-quote-text"
                style={{
                  color: 'var(--white-warm)',
                }}
              >
                A intimidade que{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-300)', fontWeight: 400 }}>
                  ninguém vê
                </em>{' '}
                nas redes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="legado-quote">
              <p
                className="elv-sans legado-quote-eyebrow"
                style={{
                  color: 'var(--gold-400)',
                }}
              >
                Presença
              </p>
              <p
                className="elv-serif legado-quote-text"
                style={{
                  color: 'var(--white-warm)',
                }}
              >
                Presença que se{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-300)', fontWeight: 400 }}>
                  transforma
                </em>{' '}
                em memória.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .legado-carousel {
          position: relative;
          max-width: 900px;
          margin-inline: auto;
        }
        .legado-carousel-frame {
          position: relative;
          aspect-ratio: 16 / 10;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.55),
            0 10px 30px rgba(0,0,0,0.35),
            inset 0 0 0 1px rgba(184,140,72,0.28);
        }
        .legado-carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 6000ms ease-out;
          pointer-events: none;
        }
        .legado-carousel-slide.is-active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        .legado-carousel-slide-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,5,8,0.4) 0%, rgba(10,5,8,0.08) 40%, transparent 100%);
          pointer-events: none;
        }
        .legado-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(10,5,8,0.55);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(194,161,77,0.4);
          color: var(--gold-300);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 200ms ease, transform 200ms ease, color 200ms ease;
        }
        .legado-carousel-arrow:hover {
          background: rgba(10,5,8,0.8);
          color: var(--gold-400);
          transform: translateY(-50%) scale(1.06);
        }
        .legado-carousel-arrow--prev { left: 14px; }
        .legado-carousel-arrow--next { right: 14px; }

        .legado-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: clamp(1.25rem, 2vw, 1.75rem);
        }
        .legado-carousel-dot {
          width: 32px;
          height: 3px;
          background: rgba(194,161,77,0.28);
          border: none;
          padding: 0;
          border-radius: 2px;
          cursor: pointer;
          transition: background 260ms ease, transform 260ms ease;
        }
        .legado-carousel-dot:hover {
          background: rgba(194,161,77,0.5);
        }
        .legado-carousel-dot.is-active {
          background: var(--gold-400);
          transform: scaleX(1.15);
        }

        .legado-quotes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(1.5rem, 4vw, 3rem);
          max-width: 900px;
          margin: clamp(2rem, 3.5vw, 3rem) auto 0;
          text-align: center;
        }
        .legado-quote-eyebrow {
          font-size: clamp(0.72rem, 0.7rem + 0.2vw, 0.85rem);
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 600;
          margin: 0 0 var(--space-4);
        }
        .legado-quote-text {
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          line-height: 1.28;
          font-weight: var(--weight-medium);
          margin: 0;
          text-wrap: balance;
          max-width: 22ch;
          margin-inline: auto;
        }

        @media (max-width: 640px) {
          .legado-carousel-arrow--prev { left: 8px; }
          .legado-carousel-arrow--next { right: 8px; }
          .legado-carousel-arrow { width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  )
}
