'use client'

import { useState, useRef, useCallback } from 'react'
import { QuizFase } from './QuizFase'

export function QuizTrigger() {
  const [open, setOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLSpanElement>(null)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(600px circle at ${px * 100}% ${py * 100}%, rgba(255,245,210,0.30) 0%, rgba(255,245,210,0.05) 30%, transparent 60%)`
    }
    // Tilt suavíssimo, sem torção
    el.style.transform = `translateY(-2px)`
  }, [])

  const onLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'translateY(0)'
    if (shineRef.current) shineRef.current.style.background = 'transparent'
  }, [])

  return (
    <>
      <div
        ref={cardRef}
        className="quiz-card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        <span aria-hidden="true" className="quiz-card-glow" />
        <span ref={shineRef} aria-hidden="true" className="quiz-card-shine" />

        <div className="quiz-card-grid">
          {/* Ícone bússola, coluna 1 */}
          <div className="quiz-card-icon" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="quizIconGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5E5B8" />
                  <stop offset="55%" stopColor="#C2A14D" />
                  <stop offset="100%" stopColor="#8A6A2C" />
                </linearGradient>
                <radialGradient id="quizGlowGrad">
                  <stop offset="0%" stopColor="rgba(194,161,77,0.5)" />
                  <stop offset="100%" stopColor="rgba(194,161,77,0)" />
                </radialGradient>
              </defs>
              {/* Glow interno pulsante */}
              <circle cx="50" cy="50" r="46" fill="url(#quizGlowGrad)" className="quiz-icon-glow-inner" />
              {/* Anel externo tracejado que gira */}
              <g className="quiz-icon-outer-ring">
                <circle cx="50" cy="50" r="44" stroke="url(#quizIconGrad)" strokeWidth="0.5" opacity="0.55" fill="none" strokeDasharray="2 5" />
              </g>
              {/* Círculo externo sólido */}
              <circle cx="50" cy="50" r="40" stroke="url(#quizIconGrad)" strokeWidth="1.5" fill="none" />
              {/* Marcadores cardinais */}
              <g className="quiz-icon-cardinals">
                <line x1="50" y1="12" x2="50" y2="20" stroke="url(#quizIconGrad)" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="50" y1="80" x2="50" y2="88" stroke="url(#quizIconGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
                <line x1="12" y1="50" x2="20" y2="50" stroke="url(#quizIconGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
                <line x1="80" y1="50" x2="88" y2="50" stroke="url(#quizIconGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
              </g>
              {/* Agulha girando (bússola) */}
              <g className="quiz-icon-needle" style={{ transformOrigin: '50px 50px' }}>
                <path d="M50 18 L55 50 L50 55 L45 50 Z" fill="var(--wine-600, #6E2A36)" opacity="0.9" />
                <path d="M50 82 L45 50 L50 45 L55 50 Z" fill="url(#quizIconGrad)" opacity="0.65" />
              </g>
              <circle cx="50" cy="50" r="4" fill="var(--wine-700, #5A1F28)" />
              <circle cx="50" cy="50" r="1.5" fill="#F5E5B8" />
            </svg>
          </div>

          {/* Info central, coluna 2 */}
          <div className="quiz-card-info">
            <p className="quiz-card-eyebrow">DIAGNÓSTICO GRATUITO</p>
            <h3 className="quiz-card-title">
              Em que fase está o{' '}
              <em>casamento de vocês?</em>
            </h3>
            <div className="quiz-card-meta">
              <span>9 perguntas</span>
              <span className="quiz-card-meta-sep">•</span>
              <span>2 minutos</span>
              <span className="quiz-card-meta-sep">•</span>
              <span>resultado personalizado</span>
            </div>
          </div>

          {/* CTA, coluna 3 */}
          <button
            type="button"
            className="quiz-card-cta"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(true)
            }}
          >
            <span>COMEÇAR</span>
            <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M2 7h13m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .quiz-card {
          position: relative;
          background: linear-gradient(160deg, #ffffff 0%, #faf3e0 100%);
          border-radius: 18px;
          padding: clamp(1.5rem, 2.5vw, 2rem) clamp(1.5rem, 3vw, 2.5rem);
          border: 1.5px solid rgba(194,161,77,0.42);
          box-shadow:
            0 20px 40px rgba(60,25,35,0.12),
            0 6px 12px rgba(60,25,35,0.06),
            inset 0 1px 0 rgba(255,255,255,0.85);
          transition: transform 320ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease, box-shadow 320ms ease;
          cursor: pointer;
          overflow: hidden;
          max-width: 940px;
          margin: 0 auto;
        }
        .quiz-card:hover {
          border-color: rgba(194,161,77,0.75);
          box-shadow:
            0 30px 56px rgba(60,25,35,0.18),
            0 12px 24px rgba(60,25,35,0.1),
            0 0 0 1px rgba(194,161,77,0.5);
        }

        @keyframes quizCardGlow {
          0%,100% { opacity: 0.35; transform: scale(0.98); }
          50%     { opacity: 0.75; transform: scale(1.02); }
        }
        .quiz-card-glow {
          position: absolute;
          inset: -14px;
          border-radius: 30px;
          background: radial-gradient(ellipse at center, rgba(194,161,77,0.3) 0%, rgba(194,161,77,0.08) 45%, transparent 70%);
          animation: quizCardGlow 3.6s ease-in-out infinite;
          z-index: -1;
          pointer-events: none;
          filter: blur(10px);
        }
        .quiz-card-shine {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          z-index: 3;
          mix-blend-mode: screen;
          transition: background 260ms ease;
        }

        .quiz-card-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: clamp(1.25rem, 3vw, 2rem);
        }

        /* Ícone bússola */
        .quiz-card-icon {
          width: clamp(64px, 8vw, 96px);
          aspect-ratio: 1;
          flex-shrink: 0;
          filter: drop-shadow(0 6px 14px rgba(194,161,77,0.35));
        }
        .quiz-card-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        @keyframes quizIconGlowInner {
          0%,100% { opacity: 0.4; transform: scale(1); transform-origin: 50% 50%; }
          50%     { opacity: 0.85; transform: scale(1.08); }
        }
        .quiz-icon-glow-inner {
          animation: quizIconGlowInner 2.4s ease-in-out infinite;
          transform-origin: 50% 50%;
        }
        @keyframes quizIconOuterSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .quiz-icon-outer-ring {
          animation: quizIconOuterSpin 24s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes quizIconCardinals {
          0%,100% { opacity: 0.55; }
          50%     { opacity: 1; }
        }
        .quiz-icon-cardinals line { animation: quizIconCardinals 2s ease-in-out infinite; }
        .quiz-icon-cardinals line:nth-child(1) { animation-delay: 0s; }
        .quiz-icon-cardinals line:nth-child(2) { animation-delay: 0.25s; }
        .quiz-icon-cardinals line:nth-child(3) { animation-delay: 0.5s; }
        .quiz-icon-cardinals line:nth-child(4) { animation-delay: 0.75s; }

        @keyframes quizNeedleSpin {
          0%,100% { transform: rotate(0deg); }
          25%     { transform: rotate(-25deg); }
          50%     { transform: rotate(15deg); }
          75%     { transform: rotate(-8deg); }
        }
        @keyframes quizNeedleFullSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .quiz-icon-needle {
          animation: quizNeedleSpin 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        /* Hover, bússola gira continuamente 360° (efeito de "buscar direção") */
        .quiz-card:hover .quiz-icon-needle {
          animation: quizNeedleFullSpin 2.4s linear infinite;
        }
        .quiz-card:hover .quiz-icon-outer-ring { animation-duration: 6s; }
        .quiz-card:hover .quiz-icon-glow-inner { animation-duration: 1.2s; }

        /* Info central */
        .quiz-card-info { min-width: 0; text-align: left; }
        .quiz-card-eyebrow {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.65rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--text-gold, #735422);
          font-weight: 700;
          margin: 0 0 0.5rem;
        }
        .quiz-card-title {
          font-family: var(--font-serif);
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          line-height: 1.25;
          color: var(--text-strong, #2E2A2B);
          margin: 0 0 0.75rem;
          font-weight: 500;
          letter-spacing: -0.005em;
        }
        .quiz-card-title em {
          font-style: italic;
          color: var(--wine-600, #6E2A36);
          font-weight: 400;
        }
        .quiz-card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.78rem;
          color: var(--text-body, #4D4748);
          letter-spacing: 0.05em;
          flex-wrap: wrap;
        }
        .quiz-card-meta-sep {
          color: var(--gold-500, #C2A14D);
          opacity: 0.7;
        }

        /* CTA */
        .quiz-card-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--wine-600, #6E2A36), var(--wine-700, #5A1F28));
          color: #F5F0E8;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          font-weight: 700;
          text-transform: uppercase;
          font-family: inherit;
          overflow: hidden;
          box-shadow:
            0 8px 20px rgba(122,28,46,0.35),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: transform 220ms ease, box-shadow 220ms ease;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .quiz-card-cta:hover {
          transform: translateY(-2px);
          box-shadow:
            0 14px 30px rgba(122,28,46,0.5),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .quiz-card-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,245,210,0.35), transparent);
          animation: quizCtaShine 3s ease-in-out infinite;
        }
        @keyframes quizCtaShine {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }
        .quiz-card-cta svg { transition: transform 220ms ease; }
        .quiz-card-cta:hover svg { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .quiz-card-glow,
          .quiz-icon-glow-inner,
          .quiz-icon-outer-ring,
          .quiz-icon-cardinals line,
          .quiz-icon-needle,
          .quiz-card-cta::before {
            animation: none;
          }
          .quiz-card { transition: none; }
        }

        @media (max-width: 720px) {
          .quiz-card-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 1rem;
          }
          .quiz-card-icon { margin: 0 auto; }
          .quiz-card-info { text-align: center; }
          .quiz-card-meta { justify-content: center; }
          .quiz-card-cta { margin: 0 auto; }
        }
      `}</style>
      {open && <QuizFase onClose={() => setOpen(false)} />}
    </>
  )
}
