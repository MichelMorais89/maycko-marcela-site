import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'
import { SplitText } from '@/components/motion/SplitText'

export function BlocoElevarSe() {
  return (
    <section
      style={{
        background: 'var(--surface-bege, #EDE3CF)',
        paddingBlock: 'clamp(3.5rem, 6vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="elv-wrap elv-wrap--sm"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          marginInline: 'auto',
        }}
      >
        {/* Numeral romano + linha vertical */}
        <Reveal className="elv-center">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-3)',
            }}
          >
            <span
              className="elv-serif"
              style={{
                fontSize: '0.95rem',
                letterSpacing: '0.4em',
                color: 'var(--gold-500)',
                fontStyle: 'italic',
                opacity: 0.85,
              }}
            >
              I
            </span>
            <span
              aria-hidden="true"
              className="elevarse-line-in"
              style={{
                display: 'block',
                width: 1,
                height: 18,
                background:
                  'linear-gradient(to bottom, var(--gold-500), transparent)',
                opacity: 0.6,
                transformOrigin: 'top',
              }}
            />
          </div>
        </Reveal>

        {/* Eyebrow */}
        <Reveal className="elv-center">
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.72rem, 0.68rem + 0.22vw, 0.88rem)',
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color: 'var(--text-gold, #735422)',
              fontWeight: 600,
              margin: '0 0 var(--space-4)',
            }}
          >
            <SplitText mode="words" staggerMs={40} durationMs={400} delay={150}>
              O QUE É ELEVEM-SE?
            </SplitText>
          </p>
        </Reveal>

        {/* Ornamento superior */}
        <Reveal className="elv-center" delay={1}>
          <Ornament
            variant="rule-diamond-rule"
            tone="gold"
            ruleWidth={52}
            style={{ marginBottom: 'var(--space-6)' }}
          />
        </Reveal>

        {/* Headline, word by word reveal + underline animado em "crescer" */}
        <h2
          className="elv-serif"
          style={{
            fontSize: 'clamp(2rem, 4.4vw, 3.6rem)',
            fontWeight: 400,
            lineHeight: 1.14,
            color: 'var(--text-strong, #2E2A2B)',
            margin: '0 auto',
            maxWidth: '24ch',
            letterSpacing: '-0.008em',
            textWrap: 'balance',
          }}
        >
          <SplitText mode="words" staggerMs={45} durationMs={420} delay={500}>
            Elevem-se não é apenas um nome, é um
          </SplitText>{' '}
          <span
            className="elevarse-highlight-word"
            style={{
              display: 'inline-block',
              position: 'relative',
              fontStyle: 'italic',
              color: 'var(--gold-500)',
              fontWeight: 400,
            }}
          >
            <SplitText mode="words" staggerMs={45} durationMs={420} delay={800}>
              convite
            </SplitText>
          </span>
          <SplitText mode="words" staggerMs={45} durationMs={420} delay={900}>
            , um chamado,
          </SplitText>
        </h2>

        {/* Ornamento intermediário */}
        <Reveal className="elv-center" delay={3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBlock: 'var(--space-6)',
            }}
          >
            <Ornament variant="diamond" tone="gold" />
          </div>
        </Reveal>

        {/* Corpo, dois parágrafos com word reveal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            maxWidth: '48ch',
            marginInline: 'auto',
          }}
        >
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.05rem, 1.55vw, 1.3rem)',
              lineHeight: 1.75,
              color: 'var(--text-body, #4D4748)',
              fontStyle: 'italic',
              margin: 0,
              textAlign: 'center',
            }}
          >
            <SplitText mode="words" staggerMs={22} durationMs={340} delay={1350}>
              para sair do modo automático e assumir, conscientemente, um novo nível de vida, de relacionamento e de propósito.
            </SplitText>
          </p>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.05rem, 1.55vw, 1.3rem)',
              lineHeight: 1.75,
              color: 'var(--text-body, #4D4748)',
              fontStyle: 'italic',
              margin: 0,
              textAlign: 'center',
            }}
          >
            <SplitText mode="words" staggerMs={22} durationMs={340} delay={1750}>
              O verbo no imperativo (elevem-se) carrega ação, decisão e movimento. Ele diz, com clareza: é hora de subir, é hora de crescer, é hora de ir além do que vocês vivem hoje.
            </SplitText>
          </p>
        </div>

        {/* Ornamento inferior */}
        <Reveal className="elv-center" delay={4}>
          <Ornament
            variant="rule-diamond-rule"
            tone="gold"
            ruleWidth={38}
            style={{ marginTop: 'var(--space-6)' }}
          />
        </Reveal>
      </div>

      <style>{`
        /* Underline animado que "desenha" abaixo das palavras destacadas */
        .elevarse-highlight-word::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0.05em;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold-500) 20%, var(--gold-500) 80%, transparent);
          transform: scaleX(0);
          transform-origin: left center;
          animation: elevarseUnderlineDraw 520ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1200ms;
        }
        .elevarse-highlight-word:nth-of-type(2)::after {
          animation-delay: 2650ms;
        }
        @keyframes elevarseUnderlineDraw {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        /* Glow pulsante nas palavras-chave, começa depois do underline */
        @keyframes elevarseWordGlow {
          0%,100% { text-shadow: 0 0 0 rgba(194,161,77,0); }
          50%     { text-shadow: 0 0 18px rgba(194,161,77,0.35), 0 0 6px rgba(194,161,77,0.25); }
        }
        .elevarse-highlight-word {
          animation: elevarseWordGlow 3.5s ease-in-out infinite;
          animation-delay: 1900ms;
        }

        /* Linha vertical decrescendo do numeral romano */
        @keyframes elevarseLineDraw {
          0%   { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .elevarse-line-in {
          animation: elevarseLineDraw 400ms cubic-bezier(0.65, 0, 0.35, 1) 100ms forwards;
          transform: scaleY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .elevarse-highlight-word::after {
            transform: scaleX(1);
            animation: none;
          }
          .elevarse-highlight-word,
          .elevarse-line-in {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
