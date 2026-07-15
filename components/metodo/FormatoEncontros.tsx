import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const FORMATOS = [
  {
    n: '01',
    titulo: 'Encontro Semanal',
    desc: 'Uma sessão por semana com os mentores, ao vivo, focada no tema do mês. Dúvidas, avanços e próximos passos.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 40, height: 40 }}>
        <circle cx="24" cy="24" r="18" stroke="var(--gold-400)" strokeWidth="1.2" />
        <path d="M24 14 L24 24 L31 29" stroke="var(--gold-400)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="1.5" fill="var(--gold-400)" />
      </svg>
    ),
  },
  {
    n: '02',
    titulo: 'Acompanhamento Diário',
    desc: 'Acesso ao canal de suporte do casal durante toda a semana. Feedback, orientação e presença constante.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 40, height: 40 }}>
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="var(--gold-400)" strokeWidth="1.2" />
        <path d="M16 20 L22 26 L32 17" stroke="var(--gold-400)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: '03',
    titulo: 'Comunidade Privada',
    desc: 'Um espaço exclusivo com outros casais no mesmo nível de comprometimento. Troca, inspiração e pertencimento real.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 40, height: 40 }}>
        <circle cx="18" cy="20" r="7" stroke="var(--gold-400)" strokeWidth="1.2" />
        <circle cx="30" cy="20" r="7" stroke="var(--gold-400)" strokeWidth="1.2" />
        <path d="M10 38 C10 32 13 28 18 28" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M38 38 C38 32 35 28 30 28" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M18 28 C20 30 24 31 30 28" stroke="var(--gold-400)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function FormatoEncontros() {
  return (
    <section
      className="elv-sec"
      style={{
        background: 'var(--ink-900, #0d0a0d)',
        paddingBlock: 'clamp(90px, 12vw, 150px)',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--white-warm)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 75% 20%, rgba(184,140,72,0.10) 0%, transparent 65%), radial-gradient(ellipse 55% 45% at 20% 85%, rgba(122,28,46,0.14) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
            <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.6 }} />
            <p
              className="elv-sans"
              style={{
                fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold-500)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Formato
            </p>
            <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.6 }} />
          </div>

          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.12,
              textTransform: 'uppercase',
              letterSpacing: '0.008em',
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
              margin: '0 auto',
              maxWidth: '22ch',
            }}
          >
            <SplitText>Como acontece</SplitText>{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
              <SplitText delay={300}>na prática.</SplitText>
            </em>
          </h2>
        </Reveal>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 2.5vw, 36px)',
            maxWidth: 1000,
            marginInline: 'auto',
          }}
        >
          {FORMATOS.map((f, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <article
                className="elv-hover-card"
                style={{
                  border: '1px solid rgba(184,140,72,0.28)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(36px, 4.5vw, 56px) clamp(28px, 3.5vw, 44px)',
                  background:
                    'linear-gradient(155deg, rgba(38,26,32,0.85) 0%, rgba(22,14,18,0.95) 55%, rgba(12,7,10,1) 100%)',
                  boxShadow: [
                    '0 1px 0 rgba(255,220,150,0.10) inset',
                    '0 -1px 0 rgba(0,0,0,0.6) inset',
                    '0 20px 50px rgba(0,0,0,0.50)',
                    '0 0 0 1px rgba(184,140,72,0.10)',
                  ].join(', '),
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-5)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Numero faint */}
                <span
                  aria-hidden="true"
                  className="elv-serif"
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontSize: '4rem',
                    fontStyle: 'italic',
                    fontWeight: 'var(--weight-light)',
                    color: 'rgba(184,140,72,0.10)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {f.n}
                </span>

                {/* Highlight top dourado */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 'clamp(28px, 4vw, 48px)',
                    right: 'clamp(28px, 4vw, 48px)',
                    height: 1,
                    background:
                      'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)',
                    opacity: 0.5,
                  }}
                />

                {/* Icon */}
                <div>{f.icon}</div>

                {/* Título */}
                <h3
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                    letterSpacing: '0.12em',
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
                  {f.titulo}
                </h3>

                {/* Desc */}
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'rgba(255,248,235,0.72)',
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
