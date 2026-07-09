import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const RECEBEM_CUIDADO = [
  {
    n: '01',
    area: 'Empresa',
    verbo: 'recebe',
    cuidado: 'planejamento',
  },
  {
    n: '02',
    area: 'Patrimônio',
    verbo: 'recebe',
    cuidado: 'investimento',
  },
  {
    n: '03',
    area: 'Filhos',
    verbo: 'recebem',
    cuidado: 'atenção',
  },
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" fill="none" stroke="var(--gold-400)" strokeWidth="1.4" opacity="0.4" />
      <path
        d="M6 10.5 L8.7 13.2 L14.5 7"
        stroke="var(--gold-400)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" fill="none" stroke="var(--wine-500, #a44a5c)" strokeWidth="1.4" opacity="0.5" />
      <path
        d="M6.5 6.5 L13.5 13.5 M13.5 6.5 L6.5 13.5"
        stroke="var(--wine-500, #a44a5c)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Manifesto() {
  return (
    <section
      className="elv-sec"
      style={{
        background: 'var(--surface-anchor)',
        paddingBlock: 'clamp(6rem, 12vw, 10rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora — inicia na base */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 20% 95%, rgba(184,140,72,0.14) 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 90% 100%, rgba(122,28,46,0.18) 0%, transparent 68%)',
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)',
        }}
      />

      <div
        className="elv-wrap manifesto-grid mobile-stack"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'center',
        }}
      >
        {/* Coluna texto */}
        <div>
          <Reveal style={{ marginBottom: 'var(--space-9)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)',
              }}
            >
              <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.8 }} />
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(1rem, 1.15vw, 1.35rem)',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                A verdade que poucos casais percebem
              </p>
            </div>

            {/* Pergunta-frame */}
            <p
              className="elv-serif"
              style={{
                marginTop: 'var(--space-7)',
                fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
                color: 'var(--white-warm)',
                lineHeight: 1.25,
                fontWeight: 'var(--weight-medium)',
                letterSpacing: '-0.005em',
                margin: 'var(--space-7) 0 0',
                maxWidth: '24ch',
              }}
            >
              <SplitText>{`Tudo na vida de vocês recebe cuidado.`}</SplitText>
            </p>
          </Reveal>

          {/* Lista de 3 que RECEBEM cuidado (positivos) */}
          <Reveal
            delay={1}
            as="ul"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(18px, 2.2vw, 26px)',
            }}
          >
            {RECEBEM_CUIDADO.map((item) => (
              <li
                key={item.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto auto 1fr',
                  alignItems: 'center',
                  gap: 'clamp(14px, 2vw, 22px)',
                }}
              >
                <span
                  className="elv-serif"
                  style={{
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-400)',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    minWidth: '2ch',
                    opacity: 0.7,
                  }}
                >
                  {item.n}
                </span>
                <CheckIcon />
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
                    color: 'var(--white-warm)',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{item.area}</strong>
                  <span style={{ color: 'rgba(255,248,235,0.55)' }}> {item.verbo} </span>
                  <em
                    style={{
                      fontStyle: 'italic',
                      color: 'var(--gold-300)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {item.cuidado}.
                  </em>
                </p>
              </li>
            ))}
          </Reveal>

          {/* Divisor com "MAS" */}
          <Reveal delay={2} style={{ marginTop: 'clamp(36px, 4.5vw, 56px)' }}>
            <div
              aria-hidden="true"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background:
                    'linear-gradient(to right, transparent 0%, rgba(184,140,72,0.35) 50%, transparent 100%)',
                }}
              />
              <span
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'var(--wine-500, #a44a5c)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                }}
              >
                Mas…
              </span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background:
                    'linear-gradient(to right, transparent 0%, rgba(164,74,92,0.35) 50%, transparent 100%)',
                }}
              />
            </div>
          </Reveal>

          {/* Linha 04 — casamento — destaque negativo */}
          <Reveal delay={3}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto 1fr',
                alignItems: 'center',
                gap: 'clamp(14px, 2vw, 22px)',
                padding: 'clamp(20px, 2.5vw, 28px)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(122,28,46,0.14)',
                border: '1px solid rgba(164,74,92,0.28)',
              }}
            >
              <span
                className="elv-serif"
                style={{
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--wine-500, #a44a5c)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  minWidth: '2ch',
                  opacity: 0.85,
                }}
              >
                04
              </span>
              <XIcon />
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
                  color: 'var(--white-warm)',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                <strong style={{ fontWeight: 600 }}>Casamento</strong>
                <span style={{ color: 'rgba(255,248,235,0.55)' }}> fica </span>
                <em
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--wine-300, #d1899b)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {`para "quando sobrar tempo".`}
                </em>
              </p>
            </div>
          </Reveal>

          {/* Manifesto síntese */}
          <Reveal delay={4} style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)',
                fontStyle: 'italic',
                color: 'var(--gold-300)',
                lineHeight: 1.35,
                margin: 0,
                maxWidth: '38ch',
              }}
            >
              Acreditamos que o relacionamento deve crescer{' '}
              <strong style={{ color: 'var(--white-warm)', fontWeight: 500, fontStyle: 'normal' }}>
                na mesma velocidade
              </strong>{' '}
              que a vida de vocês cresce.
            </p>
          </Reveal>
        </div>

        {/* Coluna foto */}
        <Reveal delay={1} style={{ height: '100%', display: 'flex' }}>
          <div
            className="elv-photo-hover"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 560,
              minHeight: 700,
              marginLeft: 'auto',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow:
                '0 30px 80px rgba(0,0,0,0.55), 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(184,140,72,0.14)',
              flex: 1,
              cursor: 'pointer',
            }}
          >
            <Image
              src="/photos/manifesto-couple-hands.jpg"
              alt="Maycko e Marcela — de mãos dadas"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 30%',
                filter: 'contrast(1.05) brightness(0.9)',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse at center, transparent 55%, rgba(28,10,16,0.55) 100%)',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
