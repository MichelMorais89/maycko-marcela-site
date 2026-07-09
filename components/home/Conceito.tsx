import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const PILARES = [
  {
    title: 'Intenção',
    tagline: 'Nada aqui é deixado ao acaso',
    icon: (
      // Bússola — direção clara, propósito de norte
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="intencaoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-300)" />
            <stop offset="100%" stopColor="var(--gold-500)" />
          </linearGradient>
        </defs>
        {/* Anel externo da bússola */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="url(#intencaoGrad)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="url(#intencaoGrad)" strokeWidth="1" opacity="0.35" />
        {/* Marcas dos 4 pontos cardeais */}
        <line x1="50" y1="14" x2="50" y2="22" stroke="url(#intencaoGrad)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="50" y1="78" x2="50" y2="86" stroke="url(#intencaoGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
        <line x1="14" y1="50" x2="22" y2="50" stroke="url(#intencaoGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
        <line x1="78" y1="50" x2="86" y2="50" stroke="url(#intencaoGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
        {/* Agulha norte (dourado sólido) — mais destaque */}
        <path
          d="M 50 22 L 55 50 L 50 44 L 45 50 Z"
          fill="var(--gold-500)"
          stroke="var(--gold-400)"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        {/* Agulha sul (contorno apenas) */}
        <path
          d="M 50 78 L 55 50 L 50 56 L 45 50 Z"
          fill="none"
          stroke="url(#intencaoGrad)"
          strokeWidth="1.3"
          strokeLinejoin="round"
          opacity="0.55"
        />
        {/* Pivô central */}
        <circle cx="50" cy="50" r="2.5" fill="var(--gold-500)" />
        <circle cx="50" cy="50" r="4" fill="none" stroke="url(#intencaoGrad)" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Maturidade',
    tagline: 'A escuta amplia. O ego recua',
    icon: (
      // Árvore da vida — copa cheia com galhos + tronco + raízes em espelho
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="maturidadeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--gold-300)" />
            <stop offset="100%" stopColor="var(--gold-500)" />
          </linearGradient>
        </defs>

        {/* Linha do solo (horizonte suave) */}
        <line
          x1="14"
          y1="52"
          x2="86"
          y2="52"
          stroke="url(#maturidadeGrad)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeDasharray="1.5 3"
          opacity="0.35"
        />

        {/* Copa preenchida sutil — dá volume */}
        <path
          d="M 50 8
             C 34 8, 22 20, 24 32
             C 20 32, 16 36, 18 42
             C 22 48, 30 50, 38 48
             C 42 50, 44 50, 50 50
             C 56 50, 58 50, 62 48
             C 70 50, 78 48, 82 42
             C 84 36, 80 32, 76 32
             C 78 20, 66 8, 50 8 Z"
          fill="url(#maturidadeGrad)"
          opacity="0.10"
        />
        {/* Copa contorno */}
        <path
          d="M 50 8
             C 34 8, 22 20, 24 32
             C 20 32, 16 36, 18 42
             C 22 48, 30 50, 38 48
             C 42 50, 44 50, 50 50
             C 56 50, 58 50, 62 48
             C 70 50, 78 48, 82 42
             C 84 36, 80 32, 76 32
             C 78 20, 66 8, 50 8 Z"
          fill="none"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />

        {/* Galhos internos (esqueleto da copa) */}
        <path
          d="M 50 50 L 50 22"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M 50 30 L 40 22 M 50 30 L 60 22"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M 50 38 L 36 34 M 50 38 L 64 34"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Tronco */}
        <path
          d="M 47 50 L 47 62 L 53 62 L 53 50"
          fill="url(#maturidadeGrad)"
          opacity="0.85"
        />
        <path
          d="M 47 50 L 47 62 M 53 50 L 53 62"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="47"
          y1="62"
          x2="53"
          y2="62"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Raízes — espelho da copa em formato mais aberto */}
        {/* Raiz principal central */}
        <path
          d="M 50 62 L 50 90"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Raízes secundárias — curvas suaves saindo do tronco */}
        <path
          d="M 47 62 C 40 68, 30 74, 22 84"
          fill="none"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M 53 62 C 60 68, 70 74, 78 84"
          fill="none"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Raízes intermediárias */}
        <path
          d="M 48 68 C 42 74, 36 80, 32 88"
          fill="none"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M 52 68 C 58 74, 64 80, 68 88"
          fill="none"
          stroke="url(#maturidadeGrad)"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.65"
        />
        {/* Sub-raízes terminais */}
        <path
          d="M 30 78 L 26 84"
          stroke="url(#maturidadeGrad)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M 70 78 L 74 84"
          stroke="url(#maturidadeGrad)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M 42 82 L 38 88"
          stroke="url(#maturidadeGrad)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M 58 82 L 62 88"
          stroke="url(#maturidadeGrad)"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: 'Escolhas diárias',
    tagline: 'A soma dos pequenos gestos que se tornam legado',
    icon: (
      // Tijolos empilhados — construção literal do casamento
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="escolhasGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--gold-300)" />
            <stop offset="100%" stopColor="var(--gold-500)" />
          </linearGradient>
        </defs>
        {/* Linha 1 (topo) — 3 tijolos alinhados */}
        <rect x="24" y="26" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="41.5" y="26" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="59" y="26" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" />
        {/* Linha 2 — 4 tijolos deslocados (estilo tijolo travado) */}
        <rect x="15.5" y="37" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.9" />
        <rect x="33" y="37" width="17" height="10" fill="url(#escolhasGrad)" opacity="0.18" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="50.5" y="37" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.9" />
        <rect x="68" y="37" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.7" />
        {/* Linha 3 — 3 tijolos alinhados */}
        <rect x="24" y="48" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.9" />
        <rect x="41.5" y="48" width="17" height="10" fill="url(#escolhasGrad)" opacity="0.25" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="59" y="48" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.9" />
        {/* Linha 4 — 4 tijolos deslocados */}
        <rect x="15.5" y="59" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.75" />
        <rect x="33" y="59" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.85" />
        <rect x="50.5" y="59" width="17" height="10" fill="url(#escolhasGrad)" opacity="0.15" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="68" y="59" width="17" height="10" fill="none" stroke="url(#escolhasGrad)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.75" />
        {/* Base — linha do chão */}
        <line x1="10" y1="72" x2="90" y2="72" stroke="url(#escolhasGrad)" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
        {/* Chama pequena no topo — coroa simbólica do que se constrói */}
        <path
          d="M 50 22 C 47 19 46 15 48 12 C 49 15 51 15 52 12 C 54 15 53 19 50 22 Z"
          fill="var(--gold-500)"
          opacity="0.75"
        />
      </svg>
    ),
  },
]

export function Conceito() {
  return (
    <section
      className="elv-sec"
      style={{
        background: 'var(--ink-900, #0a0709)',
        position: 'relative',
        overflow: 'hidden',
        paddingBlock: 'clamp(7rem, 14vw, 12rem)',
        color: 'var(--white-warm)',
      }}
    >
      {/* Aurora */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 65% 55% at 20% 15%, rgba(184,140,72,0.10) 0%, transparent 65%), radial-gradient(ellipse 60% 55% at 85% 90%, rgba(122,28,46,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap elv-wrap--md" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header eyebrow com ornamento estilo V1 */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-9)' }}>
          <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)' }} />
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 600,
              margin: 0,
            }}
          >
            Nossa filosofia
          </p>
        </Reveal>

        {/* H2 GIGANTE CAIXA-ALTA — estilo V1 */}
        <Reveal className="elv-center">
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.05,
              margin: '0 auto',
              maxWidth: '18ch',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: '0.015em',
              textAlign: 'center',
              textTransform: 'uppercase',
              textWrap: 'balance',
            }}
          >
            <SplitText>{`O QUE SIGNIFICA`}</SplitText>{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                fontWeight: 'var(--weight-regular)',
                textTransform: 'lowercase',
              }}
            >
              <SplitText delay={400}>{`Elevem-se?`}</SplitText>
            </em>
          </h2>

          {/* Subtítulo dourado */}
          <p
            className="elv-serif"
            style={{
              marginTop: 'var(--space-8)',
              fontSize: 'clamp(1.2rem, 2vw, 1.7rem)',
              color: 'var(--gold-300)',
              fontStyle: 'italic',
              lineHeight: 1.4,
              maxWidth: '46ch',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            Elevar-se é{' '}
            <em style={{ color: 'var(--gold-400)' }}>decidir crescer</em>{' '}
            antes que os problemas obriguem vocês a mudar.
          </p>
        </Reveal>

        {/* Rule dourada */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: 'clamp(48px, 6vw, 72px) 0 clamp(40px, 5vw, 64px)' }}>
          <Ornament variant="rule" ruleWidth={140} tone="gold" style={{ opacity: 0.7 }} />
        </div>

        {/* Intro pra corpo */}
        <Reveal className="elv-center">
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,248,235,0.72)',
              lineHeight: 'var(--leading-relaxed)',
              margin: '0 auto',
              maxWidth: '46ch',
              textAlign: 'center',
            }}
          >
            É entender que um relacionamento saudável não nasce pronto.
          </p>
        </Reveal>

        {/* Statement destacado */}
        <Reveal delay={1} className="elv-center" style={{ marginTop: 'var(--space-6)' }}>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.25,
              margin: '0 auto',
              maxWidth: '20ch',
              fontStyle: 'italic',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Ele é{' '}
            <span
              style={{
                background:
                  'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              construído.
            </span>
          </p>
        </Reveal>

        {/* Ponte narrativa */}
        <Reveal delay={2} className="elv-center" style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,248,235,0.72)',
              lineHeight: 'var(--leading-relaxed)',
              margin: 0,
              maxWidth: '38ch',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            Não com sorte.
          </p>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              fontWeight: 600,
              color: 'var(--white-warm)',
              margin: 'var(--space-3) 0 0',
              textAlign: 'center',
            }}
          >
            Com estes três pilares:
          </p>
        </Reveal>

        {/* 3 pilares em TRIÂNGULO — estilo V1 (2 em cima + 1 embaixo centralizado) */}
        <div
          className="conceito-triangle"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
            gap: 'clamp(24px, 3vw, 44px)',
            marginTop: 'var(--space-9)',
            maxWidth: 900,
            marginInline: 'auto',
          }}
        >
          {PILARES.map((p, i) => (
            <Reveal
              key={i}
              delay={(i % 3) as 0 | 1 | 2}
              style={
                i === 2
                  ? {
                      gridColumn: '1 / -1',
                      maxWidth: 'calc(50% - clamp(10px, 1.25vw, 18px))',
                      justifySelf: 'center',
                      width: '100%',
                    }
                  : {}
              }
            >
              <article
                className="elv-hover-card"
                style={{
                  border: '1px solid rgba(184,140,72,0.28)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(40px, 4.5vw, 60px) clamp(28px, 3.5vw, 44px)',
                  background:
                    'linear-gradient(180deg, rgba(28,20,24,0.55) 0%, rgba(15,10,14,0.78) 100%)',
                  boxShadow:
                    '0 14px 40px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,220,150,0.08)',
                  textAlign: 'center',
                  minHeight: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-6)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ width: 108, height: 108 }}>{p.icon}</div>
                <h3
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1.05rem, 1.3vw, 1.3rem)',
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    fontWeight: 'var(--weight-medium)',
                    background:
                      'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                    fontStyle: 'italic',
                    color: 'rgba(255,248,235,0.72)',
                    lineHeight: 1.35,
                    margin: 0,
                    maxWidth: '22ch',
                  }}
                >
                  {p.tagline}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Assinatura filosofia */}
        <Reveal delay={3} style={{ marginTop: 'clamp(56px, 7vw, 88px)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-6)' }}>
            <Ornament tone="gold" />
          </div>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.15rem, 1.8vw, 1.55rem)',
              color: 'var(--gold-300)',
              lineHeight: 1.4,
              margin: '0 auto',
              maxWidth: '32ch',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            Essa é a{' '}
            <strong style={{ color: 'var(--white-warm)', fontStyle: 'normal', fontWeight: 500 }}>
              essência da Elevem-se.
            </strong>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
