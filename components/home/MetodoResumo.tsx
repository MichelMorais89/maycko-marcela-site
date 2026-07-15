import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'
import { BrandArrow } from '@/components/shared/BrandArrow'

type Fase = {
  n: string
  eyebrow: string
  title: string
  lead: string
  items: string[]
  outro?: string
}

const FASES: Fase[] = [
  {
    n: '01',
    eyebrow: 'Primeira fase',
    title: 'Elevação Individual',
    lead: 'Antes de fortalecer o casamento, fortalecemos quem existe dentro dele.',
    items: [
      'Mentalidade',
      'Inteligência emocional',
      'Saúde e energia',
      'Organização da rotina',
      'Ressignificação de crenças',
      'Identidade e propósito',
    ],
    outro: 'Porque relacionamentos saudáveis começam em pessoas saudáveis.',
  },
  {
    n: '02',
    eyebrow: 'Segunda fase',
    title: 'Construção do Nós',
    lead: 'Depois de fortalecer cada pessoa, construímos aquilo que realmente sustenta um casamento.',
    items: [
      'Comunicação madura',
      'Reconstrução da admiração',
      'Alinhamento financeiro',
      'Intimidade',
      'Parceria',
      'Conexão emocional',
      'Decisões em unidade',
    ],
    outro: 'Porque casal forte se constrói com estrutura, não com sorte.',
  },
  {
    n: '03',
    eyebrow: 'Resultado',
    title: 'Legado em Casal',
    lead: 'Vocês constroem um casamento capaz de sustentar a família que desejam deixar como legado.',
    items: [
      'Casamento como ativo estratégico',
      'Presença plena no dia a dia',
      'Visão financeira conjunta',
      'Impacto que dura gerações',
    ],
    outro: 'Porque patrimônio se constrói. Mas casamento também.',
  },
]

function Sparkle() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 6 }}
    >
      <path
        d="M7 0 L8.2 5.8 L14 7 L8.2 8.2 L7 14 L5.8 8.2 L0 7 L5.8 5.8 Z"
        fill="var(--gold-400)"
      />
    </svg>
  )
}

export function MetodoResumo() {
  return (
    <section
      className="elv-sec"
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
            'radial-gradient(ellipse 60% 40% at 20% 10%, rgba(184,140,72,0.10) 0%, transparent 65%), radial-gradient(ellipse 55% 45% at 85% 90%, rgba(122,28,46,0.14) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-10)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-4)',
            }}
          >
            <Ornament variant="rule" ruleWidth={40} tone="gold" style={{ opacity: 0.7 }} />
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
              O caminho
            </p>
            <Ornament variant="rule" ruleWidth={40} tone="gold" style={{ opacity: 0.7 }} />
          </div>
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              color: 'var(--white-warm)',
              margin: '0 auto',
              maxWidth: '28ch',
              lineHeight: 1.18,
              fontWeight: 'var(--weight-medium)',
              textAlign: 'center',
            }}
          >
            <SplitText delay={100}>
              Durante 12 meses, vocês aprendem primeiro a fortalecer cada indivíduo. Depois, o relacionamento.
            </SplitText>
          </h2>
          <p
            className="elv-sans"
            style={{
              marginTop: 'var(--space-5)',
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'rgba(255,248,235,0.65)',
              maxWidth: '52ch',
              margin: 'var(--space-5) auto 0',
              textAlign: 'center',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Porque pessoas emocionalmente saudáveis constroem relacionamentos saudáveis.
          </p>
        </Reveal>

        {/* Cards horizontais empilhados, 3D real */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 40px)' }}>
          {FASES.map((f, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <article
                className="elv-metodo-card elv-hover-card"
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'clamp(24px, 4vw, 64px)',
                  alignItems: 'start',
                  padding: 'clamp(36px, 4.5vw, 68px)',
                  background:
                    'linear-gradient(155deg, rgba(38,26,32,0.85) 0%, rgba(22,14,18,0.95) 55%, rgba(12,7,10,1) 100%)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: [
                    '0 1px 0 rgba(255,220,150,0.10) inset',
                    '0 -1px 0 rgba(0,0,0,0.6) inset',
                    '0 24px 60px rgba(0,0,0,0.55)',
                    '0 60px 120px rgba(0,0,0,0.35)',
                    '0 0 0 1px rgba(184,140,72,0.14)',
                  ].join(', '),
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Highlight top dourado (double-line) */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 'clamp(48px, 5vw, 72px)',
                    right: 'clamp(48px, 5vw, 72px)',
                    height: 1,
                    background:
                      'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)',
                    opacity: 0.6,
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 4,
                    left: 'clamp(60px, 6vw, 96px)',
                    right: 'clamp(60px, 6vw, 96px)',
                    height: 1,
                    background:
                      'linear-gradient(to right, transparent 0%, rgba(184,140,72,0.4) 50%, transparent 100%)',
                    opacity: 0.4,
                  }}
                />
                {/* Ornamento decorativo (diamante) topo centralizado */}
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
                      'linear-gradient(135deg, var(--gold-400) 0%, var(--gold-600, #8a6a2c) 100%)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                  }}
                />

                {/* Textura de canto sutil */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(ellipse 30% 60% at 100% 100%, rgba(122,28,46,0.18) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Número gigante emboss dourado */}
                <div
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(4rem, 7vw, 7.5rem)',
                    lineHeight: 0.85,
                    fontStyle: 'italic',
                    fontWeight: 'var(--weight-light)',
                    background:
                      'linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 50%, var(--gold-700, #6a4d1e) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 2px 0 rgba(0,0,0,0.4)',
                    filter: 'drop-shadow(0 4px 12px rgba(184,140,72,0.15))',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {f.n}
                </div>

                {/* Conteúdo */}
                <div style={{ minWidth: 0, position: 'relative', zIndex: 1 }}>
                  {/* Eyebrow + ícone chama */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 22 C4 20 2 17 3 12 C4 8 6 6 7 4 C6 6 7 8 9 8 C11 7 11 4 10 2 C12 4 14 7 15 10 C16 15 13 20 8 22 Z"
                        fill="var(--wine-600)"
                      />
                      <path
                        d="M9 20 C6 18 5 15 6 11 C7 9 9 8 10 6 C10 8 11 10 12 12 C13 15 12 18 9 20 Z"
                        fill="var(--gold-500)"
                      />
                    </svg>
                    <span
                      className="elv-sans"
                      style={{
                        fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-400)',
                        fontWeight: 700,
                      }}
                    >
                      {f.eyebrow}
                    </span>
                  </div>

                  {/* Título com gradiente dourado + emboss */}
                  <h3
                    className="elv-serif"
                    style={{
                      fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)',
                      lineHeight: 1.08,
                      margin: '0 0 var(--space-2)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      fontWeight: 'var(--weight-medium)',
                      maxWidth: '30ch',
                      background:
                        'linear-gradient(180deg, var(--white-warm) 0%, rgba(255,240,210,0.85) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 1px 0 rgba(0,0,0,0.5)',
                    }}
                  >
                    {f.title}
                  </h3>

                  {/* Linha divisora curta dourada */}
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: 44,
                      height: 1,
                      background:
                        'linear-gradient(to right, var(--gold-500) 0%, rgba(184,140,72,0) 100%)',
                      margin: '0 0 var(--space-5)',
                    }}
                  />

                  {/* Lead / descrição */}
                  <p
                    className="elv-sans"
                    style={{
                      fontSize: 'clamp(0.98rem, 1.3vw, 1.12rem)',
                      lineHeight: 'var(--leading-relaxed)',
                      color: 'rgba(255,248,235,0.72)',
                      margin: '0 0 var(--space-6)',
                      maxWidth: '58ch',
                    }}
                  >
                    {f.lead}
                  </p>

                  {/* Lista com sparkle */}
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: 0,
                      padding: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: 'var(--space-3) var(--space-6)',
                    }}
                  >
                    {f.items.map((it, j) => (
                      <li
                        key={j}
                        className="elv-sans"
                        style={{
                          display: 'flex',
                          gap: 'var(--space-3)',
                          alignItems: 'flex-start',
                          fontSize: 'var(--text-md)',
                          lineHeight: 'var(--leading-normal)',
                          color: 'rgba(255,248,235,0.88)',
                        }}
                      >
                        <Sparkle />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Outro itálico */}
                  {f.outro && (
                    <p
                      className="elv-serif"
                      style={{
                        marginTop: 'var(--space-7)',
                        paddingTop: 'var(--space-5)',
                        borderTop: '1px solid rgba(184,140,72,0.15)',
                        fontStyle: 'italic',
                        fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
                        background:
                          'linear-gradient(90deg, var(--gold-300) 0%, var(--gold-500) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.02em',
                        lineHeight: 1.35,
                        maxWidth: '52ch',
                      }}
                    >
                      {f.outro}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Fecho + CTA */}
        <Reveal className="elv-center" style={{ marginTop: 'var(--space-10)' }}>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
              fontStyle: 'italic',
              color: 'var(--gold-300)',
              lineHeight: 1.4,
              maxWidth: '40ch',
              margin: '0 auto var(--space-7)',
            }}
          >
            Porque casamentos extraordinários não acontecem por sorte. Eles são construídos.
          </p>

          <Link
            href="/metodo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 26px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(184,140,72,0.55)',
              color: 'var(--white-warm)',
              background: 'transparent',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Ver o método completo
            <BrandArrow variant="fios" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
