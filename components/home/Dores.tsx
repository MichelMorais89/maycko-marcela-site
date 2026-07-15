import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const PAINS = [
  'Conversam menos e discutem pelos mesmos motivos de sempre.',
  'Resolvem os problemas, mas não evoluem com eles.',
  'A rotina engoliu a admiração que um tinha pelo outro.',
  'O dinheiro, às vezes, gera uma tensão silenciosa.',
  'Não querem se separar. Mas também não querem envelhecer no automático.',
]

// Ritmo do bloco, tempos-chave em ms (acelerado 2026-07-14)
const T_TITLE_END = 900   // depois do "apenas funcionando"
const T_BULLETS_START = T_TITLE_END + 200
const T_BULLET_STEP = 240  // intervalo entre bullets
const T_FINAL = T_BULLETS_START + PAINS.length * T_BULLET_STEP + 200

export function Dores() {
  return (
    <section
      className="elv-sec dores-sec"
      style={{
        position: 'relative',
        minHeight: '110vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--surface-wine-deep)',
        paddingBlock: 'clamp(80px, 12vw, 140px)',
      }}
    >
      {/* Foto full-bleed */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '22%',
            right: '-22%',
          }}
        >
          <Image
            src="/photos/dores-couple-hug-bw.jpg"
            alt=""
            fill
            sizes="120vw"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 22%',
              filter: 'grayscale(10%) contrast(1.1) brightness(0.98)',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(28,10,16,0.98) 0%, rgba(28,10,16,0.97) 42%, rgba(28,10,16,0.88) 52%, rgba(28,10,16,0.50) 62%, rgba(28,10,16,0.12) 78%, rgba(28,10,16,0) 95%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 65%, rgba(28,10,16,0.55) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '540px',
          paddingLeft: 'clamp(44px, 8vw, 132px)',
          paddingRight: 'clamp(24px, 4vw, 40px)',
        }}
      >
        {/* Eyebrow */}
        <Reveal>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 600,
              marginBottom: 'var(--space-5)',
            }}
          >
            <SplitText mode="words" staggerMs={40} durationMs={380}>
              Talvez vocês reconheçam
            </SplitText>
          </p>

          {/* Título, SplitText por palavras, cadência dramática */}
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.65rem, 3.4vw, 3rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.12,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
              maxWidth: '18ch',
            }}
          >
            <SplitText mode="words" staggerMs={60} durationMs={480} delay={160}>
              Vocês se amam.
            </SplitText>{' '}
            <SplitText mode="words" staggerMs={50} durationMs={480} delay={420}>
              Mas o relacionamento está
            </SplitText>{' '}
            <em
              className="dores-highlight-word"
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                fontWeight: 'var(--weight-regular)',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              <SplitText mode="words" staggerMs={70} durationMs={520} delay={720}>
                apenas funcionando.
              </SplitText>
            </em>
          </h2>
        </Reveal>

        {/* Lista de dores, cada bullet abre em sequência */}
        <ul
          style={{
            listStyle: 'none',
            margin: 'var(--space-9) 0 0',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px, 2.4vw, 28px)',
            maxWidth: '52ch',
          }}
        >
          {PAINS.map((p, i) => {
            const bulletDelay = T_BULLETS_START + i * T_BULLET_STEP
            return (
              <Reveal
                key={i}
                as="li"
                className="dores-bullet"
                style={{
                  display: 'flex',
                  gap: 'var(--space-4)',
                  alignItems: 'flex-start',
                  fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'rgba(255,248,235,0.85)',
                  paddingBottom: 'clamp(20px, 2.4vw, 28px)',
                  position: 'relative',
                  transitionDelay: `${bulletDelay}ms`,
                }}
              >
                <span
                  className="dores-diamond-in elv-sans"
                  aria-hidden="true"
                  style={{
                    marginTop: 8,
                    animationDelay: `${bulletDelay + 80}ms`,
                    flexShrink: 0,
                  }}
                >
                  <Ornament variant="diamond" tone="gold" />
                </span>
                <span className="elv-sans" style={{ flex: 1 }}>
                  <SplitText
                    mode="words"
                    staggerMs={18}
                    durationMs={340}
                    delay={bulletDelay + 150}
                  >
                    {p}
                  </SplitText>
                </span>
                {i < PAINS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="dores-divider-draw"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 1,
                      background: 'rgba(184,140,72,0.28)',
                      transformOrigin: 'left center',
                      animationDelay: `${bulletDelay + 260}ms`,
                    }}
                  />
                )}
              </Reveal>
            )
          })}
        </ul>

        {/* Frase final, cadência lenta, mais dramática */}
        <Reveal
          style={{
            marginTop: 'var(--space-9)',
            transitionDelay: `${T_FINAL}ms`,
          }}
        >
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.15rem, 1.9vw, 1.55rem)',
              color: 'var(--gold-300)',
              fontStyle: 'italic',
              lineHeight: 1.35,
              margin: 0,
              maxWidth: '34ch',
            }}
          >
            <SplitText mode="words" staggerMs={40} durationMs={420} delay={T_FINAL + 50}>
              Talvez o problema nunca tenha sido falta de amor.
            </SplitText>
            <br />
            <span
              className="dores-highlight-final"
              style={{
                color: 'var(--white-warm)',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              <SplitText mode="words" staggerMs={50} durationMs={460} delay={T_FINAL + 500}>
                Talvez tenha sido falta de direção.
              </SplitText>
            </span>
          </p>
        </Reveal>
      </div>

      <style>{`
        /* Diamante entra rodando + crescendo */
        @keyframes doresDiamondIn {
          0%   { transform: rotate(-90deg) scale(0); opacity: 0; }
          60%  { transform: rotate(20deg) scale(1.25); opacity: 1; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        .dores-diamond-in {
          display: inline-block;
          transform: rotate(-90deg) scale(0);
          opacity: 0;
          animation: doresDiamondIn 420ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Linha divisória desenha da esquerda pra direita */
        @keyframes doresDividerDraw {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .dores-divider-draw {
          transform: scaleX(0);
          animation: doresDividerDraw 520ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        /* Glow pulsante no "apenas funcionando" (dourado) */
        @keyframes doresHighlightGlow {
          0%,100% { text-shadow: 0 0 0 rgba(194,161,77,0); }
          50%     { text-shadow: 0 0 24px rgba(194,161,77,0.45), 0 0 8px rgba(194,161,77,0.3); }
        }
        .dores-highlight-word {
          animation: doresHighlightGlow 3.8s ease-in-out infinite;
          animation-delay: 1500ms;
        }

        /* Underline dourado se desenha embaixo de "falta de direção" */
        .dores-highlight-final::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.08em;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold-400) 20%, var(--gold-400) 80%, transparent);
          transform: scaleX(0);
          transform-origin: left center;
          animation: doresDividerDraw 600ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: ${T_FINAL + 1100}ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .dores-diamond-in,
          .dores-divider-draw,
          .dores-highlight-word,
          .dores-highlight-final::after {
            animation: none;
            transform: none;
            opacity: 1;
          }
          .dores-divider-draw {
            transform: scaleX(1);
          }
          .dores-highlight-final::after {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}
