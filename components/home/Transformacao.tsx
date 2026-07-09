import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'
import { TiltCard } from '@/components/motion/TiltCard'

const SAEM_DE = [
  'O casamento no modo automático',
  'As mesmas discussões, sem evolução',
  'A admiração desgastada pela rotina',
  'A tensão silenciosa em torno do dinheiro',
]

const PASSAM_A = [
  'Conexão consciente e presente',
  'Comunicação madura de verdade',
  'Admiração e intimidade reconstruídas',
  'CNPJ e CPF prósperos, em sintonia',
]

function XIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 6 }}
    >
      <path
        d="M2 2 L12 12 M12 2 L2 12"
        stroke="var(--wine-500, #a44a5c)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 6 }}
    >
      <path
        d="M2 7.5 L5.5 11 L12 3.5"
        stroke="var(--gold-400)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Transformacao() {
  return (
    <section
      className="elv-sec"
      style={{
        background: 'var(--surface-wine-deep)',
        paddingBlock: 'clamp(80px, 12vw, 140px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-10)' }}>
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
            A transformação
          </p>
          <h2
            className="elv-serif"
            style={{
              marginTop: 'var(--space-5)',
              fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.15,
              maxWidth: '20ch',
              margin: 'var(--space-5) auto 0',
              textTransform: 'uppercase',
              letterSpacing: '0.015em',
              fontWeight: 'var(--weight-semibold)',
            }}
          >
            <SplitText delay={100}>O que muda quando o casamento</SplitText>{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                textTransform: 'lowercase',
                fontWeight: 'var(--weight-medium)',
              }}
            >
              <SplitText delay={500}>sai do automático.</SplitText>
            </em>
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          {/* Card antes */}
          <Reveal>
            <TiltCard style={{ height: '100%' }}>
            <article
              className="elv-hover-card"
              style={{
                padding: 'clamp(28px, 4vw, 44px)',
                background: 'rgba(28,12,18,0.55)',
                border: '1px solid rgba(164,74,92,0.25)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.20)',
                height: '100%',
              }}
            >
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.85rem)',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--wine-500, #a44a5c)',
                  fontWeight: 600,
                  margin: '0 0 var(--space-6)',
                }}
              >
                Vocês saem de
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                {SAEM_DE.map((item, i) => (
                  <li
                    key={i}
                    className="elv-serif"
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                      lineHeight: 'var(--leading-normal)',
                      fontStyle: 'italic',
                      color: 'rgba(255,248,235,0.70)',
                    }}
                  >
                    <XIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            </TiltCard>
          </Reveal>

          {/* Card depois */}
          <Reveal delay={1}>
            <TiltCard style={{ height: '100%' }}>
            <article
              className="elv-hover-card"
              style={{
                padding: 'clamp(28px, 4vw, 44px)',
                background: 'rgba(50,25,15,0.65)',
                border: '1px solid rgba(184,140,72,0.4)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.25), 0 0 60px rgba(184,140,72,0.08)',
                height: '100%',
              }}
            >
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.85rem)',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  margin: '0 0 var(--space-6)',
                }}
              >
                E passam a viver
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                {PASSAM_A.map((item, i) => (
                  <li
                    key={i}
                    className="elv-serif"
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                      lineHeight: 'var(--leading-normal)',
                      fontStyle: 'italic',
                      color: 'var(--white-warm)',
                      fontWeight: 500,
                    }}
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
