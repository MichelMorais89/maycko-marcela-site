'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

type QuizStep = 'intro' | 'questions' | 'capture' | 'result'
type Phase = 1 | 2 | 3

const QUESTIONS = [
  // Bloco A, Elevação Individual (fase 1)
  {
    block: 'A' as const,
    text: 'Nos últimos 6 meses, quantas vezes você parou para pensar quem você quer ser como pessoa (não como casal)?',
    options: ['Nunca', 'Raramente', 'Algumas vezes', 'Frequentemente'],
  },
  {
    block: 'A' as const,
    text: 'Quando um de vocês está mal, o outro sabe distinguir se é cansaço, ansiedade ou algo mais profundo?',
    options: ['Não', 'Às vezes', 'Na maioria das vezes', 'Sempre'],
  },
  {
    block: 'A' as const,
    text: 'Vocês têm rotinas de cuidado pessoal (saúde, mente, corpo) que são inegociáveis?',
    options: [
      'Nenhum dos dois',
      'Um dos dois',
      'Os dois, mas de forma inconstante',
      'Os dois, com constância',
    ],
  },
  // Bloco B, Construção do Nós (fase 2)
  {
    block: 'B' as const,
    text: 'Quantas vezes por semana vocês têm uma conversa que não é sobre logística (filhos, contas, agenda)?',
    options: ['0', '1-2', '3-4', 'Praticamente todo dia'],
  },
  {
    block: 'B' as const,
    text: 'Vocês têm um projeto de vida compartilhado escrito, conversado, revisado?',
    options: [
      'Não temos',
      'Falamos, mas nunca colocamos no papel',
      'Temos, mas não revisamos',
      'Temos e revisamos regularmente',
    ],
  },
  {
    block: 'B' as const,
    text: 'Quando algo importante acontece na vida de um, o outro é a primeira pessoa a saber?',
    options: ['Raramente', 'Às vezes', 'Na maioria', 'Sempre'],
  },
  // Bloco C, Legado (fase 3)
  {
    block: 'C' as const,
    text: 'Vocês têm clareza sobre que tipo de história de casal querem deixar para os filhos (ou para o mundo)?',
    options: [
      'Nunca conversamos sobre isso',
      'Já pensamos, mas não conversamos',
      'Já conversamos',
      'Está claro para os dois',
    ],
  },
  {
    block: 'C' as const,
    text: 'Vocês se veem como referência (positiva) para outros casais ao redor?',
    options: ['Não', 'Talvez', 'Sim, algumas pessoas dizem', 'Sim, com clareza'],
  },
  {
    block: 'C' as const,
    text: 'Qual dessas frases mais representa o casamento de vocês hoje?',
    options: [
      '"Estamos juntos, mas cada um na sua"',
      '"Estamos aprendendo a nos encontrar de novo"',
      '"Estamos alinhados e construindo juntos"',
      '"Estamos deixando um legado que passa por nós"',
    ],
  },
]

const RESULTS: Record<
  Phase,
  {
    eyebrow: string
    headline: string
    subhead: string
    body: string[]
    cta: string
  }
> = {
  1: {
    eyebrow: 'VOCÊS ESTÃO NA FASE 1',
    headline: 'ELEVAÇÃO INDIVIDUAL.',
    subhead:
      'O casamento de vocês está pronto para dar o próximo salto, mas o salto começa em cada um, antes de começar no "nós".',
    body: [
      'O que suas respostas mostram: vocês são um casal com base sólida, mas ainda existem áreas individuais (mentalidade, saúde emocional, propósito) que precisam de estrutura antes que a construção conjunta ganhe outro patamar.',
      'Próximo passo natural: a Fase 2 (Construção do Nós). Mas ela só se sustenta quando a Fase 1 está firme.',
    ],
    cta: 'QUERO INICIAR A FASE 1 NA MENTORIA →',
  },
  2: {
    eyebrow: 'VOCÊS ESTÃO NA FASE 2',
    headline: 'CONSTRUÇÃO DO NÓS.',
    subhead:
      'Vocês individualmente já se encontraram. Agora é hora de encontrar o "vocês", a versão do casal que ainda não existe, mas está pronta para nascer.',
    body: [
      'O que suas respostas mostram: cada um de vocês está inteiro. Mas a construção conjunta, comunicação profunda, projeto de vida, aliança consciente, ainda opera abaixo do potencial.',
      'Próximo passo natural: entrar num método estruturado que traduza a intenção de vocês em prática diária.',
    ],
    cta: 'QUERO CONSTRUIR O NÓS NA MENTORIA →',
  },
  3: {
    eyebrow: 'VOCÊS ESTÃO NA FASE 3',
    headline: 'LEGADO EM CASAL.',
    subhead:
      'Vocês já elevaram cada um. Já construíram o "nós". Agora chega a fase mais rara, a que quase nenhum casal alcança sem intenção deliberada: deixar algo que dure além de vocês.',
    body: [
      'O que suas respostas mostram: vocês têm base, aliança e clareza. O que falta é dar forma consciente ao legado, como educar os filhos como casal, como impactar sua rede, como se tornar referência.',
      'Próximo passo natural: entrar no ciclo de casais que já operam nessa fase, aprofundar, formalizar e potencializar o legado que já está sendo construído.',
    ],
    cta: 'QUERO ELEVAR MEU LEGADO NA MENTORIA →',
  },
}

const LS_KEY = 'elevemse-quiz-state'

function calcPhase(answers: (number | null)[]): Phase {
  let a = 0,
    b = 0,
    c = 0
  QUESTIONS.forEach((q, i) => {
    const score = (answers[i] ?? 0) + 1
    if (q.block === 'A') a += score
    if (q.block === 'B') b += score
    if (q.block === 'C') c += score
  })
  if (a >= b && a >= c) return 1
  if (b >= a && b >= c) return 2
  return 3
}

interface QuizState {
  step: QuizStep
  current: number
  answers: (number | null)[]
  phase: Phase | null
  capture: { nome: string; email: string; whatsapp: string }
}

function loadState(): QuizState {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) return JSON.parse(raw) as QuizState
  } catch {
    // ignore
  }
  return {
    step: 'intro',
    current: 0,
    answers: Array(9).fill(null),
    phase: null,
    capture: { nome: '', email: '', whatsapp: '' },
  }
}

function saveState(s: QuizState) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(s))
  } catch {
    // ignore
  }
}

export function QuizFase({ onClose }: { onClose: () => void }) {
  const [state, setState] = useState<QuizState>(() => loadState())
  const [captureLoading, setCaptureLoading] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  const update = useCallback((partial: Partial<QuizState>) => {
    setState((prev) => {
      const next = { ...prev, ...partial }
      saveState(next)
      return next
    })
  }, [])

  // ESC close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // focus trap
  useEffect(() => {
    firstFocusRef.current?.focus()
  }, [state.step])

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  function selectAnswer(idx: number) {
    const newAnswers = [...state.answers]
    newAnswers[state.current] = idx
    const isLast = state.current === QUESTIONS.length - 1
    if (isLast) {
      update({ answers: newAnswers, step: 'capture' })
    } else {
      update({ answers: newAnswers, current: state.current + 1 })
    }
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault()
    setCaptureLoading(true)
    const phase = calcPhase(state.answers)
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            form: 'quiz-diagnostico',
            fase: phase,
            ...state.capture,
          }),
        })
      }
    } catch {
      // non-blocking
    }
    update({ step: 'result', phase })
    setCaptureLoading(false)
  }

  const bg = 'var(--surface-anchor, #16233A)'

  const waHref = (() => {
    if (!state.phase) return 'https://wa.me/5511941688639'
    const phaseName = RESULTS[state.phase].headline.replace(/\.$/, '')
    const msg = `Olá, Maycko e Marcela!

Fiz o diagnóstico ELEVEM-SE no site.

Nome: ${state.capture.nome}
E-mail: ${state.capture.email}
WhatsApp: ${state.capture.whatsapp}

Resultado: Fase ${state.phase} — ${phaseName}

Gostaria de conversar sobre a mentoria.`
    return `https://wa.me/5511941688639?text=${encodeURIComponent(msg)}`
  })()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-title"
      ref={dialogRef}
      className="quiz-modal"
      onClick={(e) => {
        // Fecha ao clicar no backdrop
        if (e.target === e.currentTarget) onClose()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10, 15, 25, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overflowY: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: bg,
          borderRadius: 14,
          border: '1px solid rgba(194,161,77,0.3)',
          boxShadow:
            '0 40px 80px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
          width: '100%',
          maxWidth: '460px',
          maxHeight: '88vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {/* close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar quiz"
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.35)',
            border: '1px solid rgba(194,161,77,0.35)',
            cursor: 'pointer',
            color: 'rgba(245,240,232,0.85)',
            fontSize: '1.1rem',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s, color 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.6)'
            e.currentTarget.style.color = '#F5F0E8'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.35)'
            e.currentTarget.style.color = 'rgba(245,240,232,0.85)'
          }}
        >
          ✕
        </button>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '22px 22px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
        {/* INTRO */}
        {state.step === 'intro' && (
          <div className="text-center" style={{ maxWidth: '100%' }}>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: 'var(--text-gold, #735422)', fontSize: '0.68rem' }}
            >
              DIAGNÓSTICO EM 2 MINUTOS
            </p>
            <h2
              id="quiz-title"
              className="font-serif leading-tight mb-3"
              style={{
                color: '#F5F0E8',
                fontSize: 'clamp(1.35rem, 3vw, 1.7rem)',
                lineHeight: 1.2,
                overflowWrap: 'break-word',
                wordBreak: 'normal',
              }}
            >
              Em que fase está o casamento de vocês?
            </h2>
            <p
              className="mb-6"
              style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', lineHeight: 1.5 }}
            >
              9 perguntas rápidas. 2 minutos. Sem cadastro para responder, só para receber o resultado.
            </p>
            <button
              ref={firstFocusRef}
              type="button"
              onClick={() => update({ step: 'questions', current: 0 })}
              className="quiz-btn"
            >
              COMEÇAR
            </button>
          </div>
        )}

        {/* QUESTIONS */}
        {state.step === 'questions' && (
          <div className="w-full">
            {/* progress */}
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  height: 2,
                  background: 'rgba(245,240,232,0.12)',
                  borderRadius: 1,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((state.current + 1) / QUESTIONS.length) * 100}%`,
                    background: 'var(--gold-500, #C2A14D)',
                    borderRadius: 1,
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '0.7rem',
                  color: 'rgba(245,240,232,0.4)',
                  textAlign: 'right',
                  letterSpacing: '0.06em',
                  margin: 0,
                }}
              >
                {state.current + 1} de {QUESTIONS.length}
              </p>
            </div>

            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--gold-500, #C2A14D)',
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              BLOCO {QUESTIONS[state.current].block}
            </p>
            <h3
              id="quiz-title"
              className="font-serif"
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
                lineHeight: 1.35,
                marginBottom: 18,
                color: '#F5F0E8',
                fontWeight: 500,
                letterSpacing: '-0.005em',
              }}
            >
              {QUESTIONS[state.current].text}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {QUESTIONS[state.current].options.map((opt, i) => (
                <button
                  key={opt}
                  ref={i === 0 ? firstFocusRef : undefined}
                  type="button"
                  onClick={() => selectAnswer(i)}
                  className="quiz-option"
                  style={{
                    background:
                      state.answers[state.current] === i
                        ? 'rgba(194,161,77,0.18)'
                        : 'rgba(245,240,232,0.04)',
                    border:
                      state.answers[state.current] === i
                        ? '1px solid rgba(194,161,77,0.65)'
                        : '1px solid rgba(245,240,232,0.12)',
                    color: '#F5F0E8',
                    padding: '11px 16px',
                    textAlign: 'left',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    lineHeight: 1.35,
                    transition: 'all 0.15s ease',
                    fontFamily: 'inherit',
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            {state.current > 0 && (
              <button
                type="button"
                onClick={() => update({ current: state.current - 1 })}
                className="quiz-back-btn"
                style={{
                  marginTop: 28,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '10px 18px',
                  background: 'rgba(245,240,232,0.06)',
                  border: '1px solid rgba(194,161,77,0.35)',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  color: 'rgba(245,240,232,0.78)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(194,161,77,0.18)'
                  e.currentTarget.style.borderColor = 'rgba(194,161,77,0.65)'
                  e.currentTarget.style.color = 'var(--gold-400, #D2B673)'
                  e.currentTarget.style.transform = 'translateX(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(245,240,232,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(194,161,77,0.35)'
                  e.currentTarget.style.color = 'rgba(245,240,232,0.78)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Voltar pergunta anterior</span>
              </button>
            )}
          </div>
        )}

        {/* CAPTURE */}
        {state.step === 'capture' && (
          <div className="w-full" style={{ maxWidth: '100%' }}>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-2 text-center"
              style={{ color: 'var(--text-gold, #735422)', fontSize: '0.68rem' }}
            >
              SEU DIAGNÓSTICO ESTÁ PRONTO
            </p>
            <h3
              id="quiz-title"
              className="font-serif leading-tight mb-2 text-center"
              style={{
                color: '#F5F0E8',
                fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
                lineHeight: 1.25,
                overflowWrap: 'break-word',
              }}
            >
              Deixe seu contato para receber o resultado completo.
            </h3>
            <p
              className="text-center mb-5"
              style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.85rem' }}
            >
              Com análise + recomendações para o momento do casal.
            </p>
            <form onSubmit={handleCapture} className="flex flex-col gap-3">
              <input
                ref={firstFocusRef as React.RefObject<HTMLInputElement>}
                type="text"
                required
                placeholder="Nome do casal"
                value={state.capture.nome}
                onChange={(e) =>
                  update({ capture: { ...state.capture, nome: e.target.value } })
                }
                className="quiz-input"
              />
              <input
                type="email"
                required
                placeholder="E-mail"
                value={state.capture.email}
                onChange={(e) =>
                  update({ capture: { ...state.capture, email: e.target.value } })
                }
                className="quiz-input"
              />
              <input
                type="tel"
                required
                placeholder="Telefone"
                value={state.capture.whatsapp}
                onChange={(e) =>
                  update({ capture: { ...state.capture, whatsapp: e.target.value } })
                }
                className="quiz-input"
              />
              <button
                type="submit"
                disabled={captureLoading}
                className="quiz-btn mt-2"
              >
                {captureLoading ? 'CALCULANDO...' : 'VER MEU RESULTADO'}
              </button>
            </form>
          </div>
        )}

        {/* RESULT */}
        {state.step === 'result' && state.phase && (
          <div className="text-center w-full" style={{ maxWidth: '100%' }}>
            <div
              className="inline-block rounded-sm px-3 py-1.5 mb-3 uppercase"
              style={{
                background: 'rgba(115,84,34,0.15)',
                color: 'var(--text-gold, #735422)',
                border: '1px solid rgba(115,84,34,0.3)',
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
              }}
            >
              {RESULTS[state.phase].eyebrow}
            </div>
            <h2
              id="quiz-title"
              className="font-serif leading-tight mb-3"
              style={{
                color: '#F5F0E8',
                fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
                lineHeight: 1.15,
                overflowWrap: 'break-word',
                letterSpacing: '-0.005em',
              }}
            >
              {RESULTS[state.phase].headline}
            </h2>
            <p
              className="italic mb-4 mx-auto"
              style={{
                color: 'rgba(245,240,232,0.75)',
                fontSize: '0.92rem',
                lineHeight: 1.45,
                maxWidth: '38ch',
              }}
            >
              {RESULTS[state.phase].subhead}
            </p>
            <div
              className="text-left rounded-sm mb-5"
              style={{
                background: 'rgba(245,240,232,0.06)',
                border: '1px solid rgba(245,240,232,0.1)',
                padding: '14px 16px',
              }}
            >
              {RESULTS[state.phase].body.map((para, i) => (
                <p key={para} style={{
                  color: 'rgba(245,240,232,0.72)',
                  lineHeight: 1.55,
                  fontSize: '0.87rem',
                  margin: i === 0 ? '0 0 10px' : 0,
                }}>
                  {para}
                </p>
              ))}
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                localStorage.removeItem(LS_KEY)
                onClose()
              }}
              className="quiz-btn inline-block"
              style={{ fontSize: '0.78rem', padding: '13px 22px' }}
            >
              {RESULTS[state.phase].cta}
            </a>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem(LS_KEY)
                update({
                  step: 'intro',
                  current: 0,
                  answers: Array(9).fill(null),
                  phase: null,
                  capture: { nome: '', email: '', whatsapp: '' },
                })
              }}
              style={{
                display: 'block',
                margin: '12px auto 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(245,240,232,0.35)',
                fontSize: '0.8rem',
                fontFamily: 'inherit',
              }}
            >
              Refazer o quiz
            </button>
          </div>
        )}
      </div>

      <style>{`
        .quiz-btn {
          display: inline-block;
          padding: 13px 26px;
          background: var(--wine-600, #6E2A36);
          color: #F5F0E8;
          border: none;
          cursor: pointer;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: inherit;
          font-weight: 500;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.15s ease;
        }
        .quiz-btn:hover:not(:disabled) {
          background: var(--wine-700, #5A1F28);
        }
        .quiz-btn:disabled {
          opacity: 0.6;
        }
        .quiz-input {
          width: 100%;
          padding: 11px 14px;
          background: rgba(245,240,232,0.07);
          border: 1px solid rgba(245,240,232,0.15);
          color: #F5F0E8;
          font-size: 0.9rem;
          font-family: inherit;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
        }
        .quiz-input::placeholder {
          color: rgba(245,240,232,0.35);
        }
        .quiz-input:focus {
          border-color: rgba(115,84,34,0.5);
        }
        .quiz-option:hover {
          background: rgba(115,84,34,0.12) !important;
          border-color: rgba(115,84,34,0.4) !important;
        }
      `}</style>
      </div>
    </div>
  )
}
