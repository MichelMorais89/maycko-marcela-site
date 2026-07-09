import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const PARTIAL_TRUTHS = [
  { strong: 'Vocês se amam.', rest: '' },
  { strong: 'Vocês constroem juntos.', rest: '' },
  { strong: 'Vocês querem crescer.', rest: '' },
]

const PILLARS = [
  {
    title: 'Propósito',
    tagline: 'Direção clara pra caminhar juntos',
    icon: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="elv-pillar-flame" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--wine-600)" />
            <stop offset="100%" stopColor="var(--gold-400)" />
          </linearGradient>
        </defs>
        {/* Base da chama */}
        <path
          d="M50 88 C 40 84 34 76 34 66 C 34 58 38 52 42 46 C 42 52 46 54 50 54 C 54 54 58 52 58 46 C 62 52 66 58 66 66 C 66 76 60 84 50 88 Z"
          fill="none"
          stroke="url(#flameGrad)"
          strokeWidth="1.4"
        />
        {/* Chama interna */}
        <path
          d="M50 78 C 44 74 42 68 44 62 C 46 58 49 56 50 52 C 51 56 54 58 56 62 C 58 68 56 74 50 78 Z"
          fill="var(--gold-500)"
          opacity="0.55"
        />
        {/* Detalhe superior */}
        <circle cx="50" cy="20" r="1.5" fill="var(--gold-400)" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'Aliança',
    tagline: 'Duas vidas alinhadas em um só sentido',
    icon: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="elv-pillar-rings" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-300)" />
            <stop offset="100%" stopColor="var(--gold-500)" />
          </linearGradient>
        </defs>
        {/* Anel esquerdo */}
        <circle cx="38" cy="50" r="22" fill="none" stroke="url(#ringGrad)" strokeWidth="1.6" />
        <circle cx="38" cy="50" r="22" fill="none" stroke="var(--gold-400)" strokeWidth="0.4" opacity="0.5" transform="translate(0.8 0.8)" />
        {/* Anel direito */}
        <circle cx="62" cy="50" r="22" fill="none" stroke="url(#ringGrad)" strokeWidth="1.6" />
        <circle cx="62" cy="50" r="22" fill="none" stroke="var(--gold-400)" strokeWidth="0.4" opacity="0.5" transform="translate(0.8 0.8)" />
        {/* Ponto de encontro */}
        <circle cx="50" cy="50" r="1.8" fill="var(--gold-500)" />
      </svg>
    ),
  },
  {
    title: 'Estrutura',
    tagline: 'A base que sustenta o casamento',
    icon: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="elv-pillar-column" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="colGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--gold-300)" />
            <stop offset="100%" stopColor="var(--gold-500)" />
          </linearGradient>
        </defs>
        {/* Ápice (frontão) */}
        <path
          d="M 20 22 L 50 10 L 80 22 Z"
          fill="none"
          stroke="url(#colGrad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Capitel */}
        <rect x="22" y="24" width="56" height="5" fill="none" stroke="url(#colGrad)" strokeWidth="1.5" />
        <rect x="26" y="29" width="48" height="3" fill="none" stroke="url(#colGrad)" strokeWidth="1.2" />
        {/* Fuste com estrias — coluna central em destaque */}
        <line x1="30" y1="32" x2="30" y2="76" stroke="url(#colGrad)" strokeWidth="1.6" />
        <line x1="38" y1="32" x2="38" y2="76" stroke="url(#colGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="46" y1="32" x2="46" y2="76" stroke="url(#colGrad)" strokeWidth="1" opacity="0.55" />
        {/* Pilar central destacado */}
        <line x1="50" y1="32" x2="50" y2="76" stroke="url(#colGrad)" strokeWidth="1.8" />
        <line x1="54" y1="32" x2="54" y2="76" stroke="url(#colGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="62" y1="32" x2="62" y2="76" stroke="url(#colGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="70" y1="32" x2="70" y2="76" stroke="url(#colGrad)" strokeWidth="1.6" />
        {/* Base 1 */}
        <rect x="26" y="76" width="48" height="3" fill="none" stroke="url(#colGrad)" strokeWidth="1.2" />
        {/* Base 2 */}
        <rect x="22" y="79" width="56" height="5" fill="none" stroke="url(#colGrad)" strokeWidth="1.5" />
        {/* Base 3 (pedestal) */}
        <rect x="18" y="84" width="64" height="6" fill="none" stroke="url(#colGrad)" strokeWidth="1.4" />
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
        paddingBlock: 'clamp(90px, 12vw, 150px)',
        color: 'var(--white-warm)',
      }}
    >
      {/* Aurora sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 20% 15%, rgba(184,140,72,0.10) 0%, transparent 65%), radial-gradient(ellipse 55% 50% at 85% 90%, rgba(122,28,46,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap elv-wrap--md" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-9)' }}>
          <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)' }} />
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
            Nossa filosofia
          </p>
        </Reveal>

        {/* H2 gigante caixa-alta serifado */}
        <Reveal className="elv-center">
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.6rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.1,
              margin: '0 auto',
              maxWidth: '20ch',
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
            }}
          >
            <SplitText>Nenhum casamento extraordinário nasce</SplitText>{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                fontWeight: 'var(--weight-regular)',
                textTransform: 'lowercase',
              }}
            >
              <SplitText delay={500}>por sorte.</SplitText>
            </em>
          </h2>
          <p
            className="elv-serif"
            style={{
              marginTop: 'var(--space-6)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.55rem)',
              color: 'var(--gold-300)',
              fontStyle: 'italic',
              lineHeight: 1.35,
              maxWidth: '38ch',
              marginInline: 'auto',
            }}
          >
            Alguns são <em style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>construídos</em> — com estrutura, alinhamento e decisão diária.
          </p>
        </Reveal>

        {/* Rule dourada */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: 'var(--space-10) 0 var(--space-9)' }}>
          <Ornament variant="rule" ruleWidth={140} tone="gold" style={{ opacity: 0.7 }} />
        </div>

        {/* Intro pra lista */}
        <Reveal className="elv-center">
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,248,235,0.72)',
              lineHeight: 'var(--leading-relaxed)',
              margin: '0 auto var(--space-7)',
              maxWidth: '42ch',
            }}
          >
            Se vocês estão aqui, provavelmente já sabem:
          </p>
        </Reveal>

        {/* Lista de verdades parciais — CENTRALIZADA */}
        <Reveal delay={1} as="ul" style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-4)',
        }}>
          {PARTIAL_TRUTHS.map((t, i) => (
            <li
              key={i}
              className="elv-sans"
              style={{
                display: 'inline-flex',
                gap: 'var(--space-3)',
                alignItems: 'baseline',
                fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                color: 'var(--white-warm)',
                textAlign: 'center',
              }}
            >
              <span style={{ color: 'var(--gold-400)', fontSize: '0.7em', flexShrink: 0 }}>●</span>
              <span>
                <strong style={{ fontWeight: 600 }}>{t.strong}</strong>
                {t.rest && <span style={{ color: 'rgba(255,248,235,0.72)' }}> {t.rest}</span>}
              </span>
            </li>
          ))}
        </Reveal>

        {/* Transição */}
        <Reveal delay={2} className="elv-center" style={{ marginTop: 'var(--space-10)' }}>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,248,235,0.72)',
              lineHeight: 'var(--leading-relaxed)',
              margin: 0,
              maxWidth: '44ch',
              marginInline: 'auto',
            }}
          >
            Mas quando o desafio real chega…
          </p>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              fontWeight: 600,
              color: 'var(--white-warm)',
              margin: 'var(--space-3) 0 0',
            }}
          >
            é preciso mais do que amor:
          </p>
        </Reveal>

        {/* 3 pilares em TRIÂNGULO — 2 topo + 1 base centralizado */}
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
          {PILLARS.map((p, i) => (
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
      </div>
    </section>
  )
}
