import { Reveal } from '@/components/shared/Reveal'
import { CountUp } from '@/components/motion/CountUp'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const STATS = [
  {
    value: 20,
    suffix: '+',
    label: 'anos de caminhada juntos',
    body: 'Construindo diariamente o relacionamento que ensinamos.',
  },
  {
    value: 13,
    suffix: '',
    label: 'anos de casamento',
    body: 'Aprendendo que amor é uma decisão construída todos os dias.',
  },
  {
    value: 3,
    suffix: '',
    label: 'filhos',
    body: 'Nosso maior legado e a maior prova de que família é construída com presença.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'mentoria online',
    body: 'Impactando casais em todo o Brasil.',
  },
]

export function Prova() {
  return (
    <section
      className="elv-sec--prova prova-section"
      style={{
        paddingBlock: 'var(--space-11)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Textura orgânica sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 0%, rgba(184,140,72,0.06) 0%, transparent 40%), radial-gradient(circle at 50% 100%, rgba(122,28,46,0.10) 0%, transparent 45%)',
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      />
      {/* Grid dotted extra sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(184,140,72,0.06) 0.5px, transparent 0.5px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />
      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-9)' }}>
          <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)' }} />
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--white-warm)',
              margin: 0,
            }}
          >
            <SplitText>Mais do que ensinar.</SplitText>
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
              }}
            >
              <SplitText delay={300}>Nós vivemos.</SplitText>
            </em>
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'stretch',
          }}
        >
          {STATS.map((s, i) => (
            <Reveal
              key={i}
              delay={(i % 3) as 0 | 1 | 2}
              style={{ textAlign: 'center', display: 'flex' }}
            >
              <div
                className="prova-card"
                style={{
                  position: 'relative',
                  padding: 'var(--space-7) var(--space-5)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'default',
                  border: '1px solid rgba(184,140,72,0.15)',
                  background:
                    'linear-gradient(180deg, rgba(255,248,235,0.03) 0%, rgba(184,140,72,0.06) 100%)',
                  backdropFilter: 'blur(2px)',
                  overflow: 'hidden',
                  transition:
                    'transform 480ms cubic-bezier(0.22, 1, 0.36, 1), border-color 380ms ease, box-shadow 480ms ease',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Halo radial dourado atrás do número */}
                <span
                  aria-hidden="true"
                  className="prova-halo"
                  style={{
                    position: 'absolute',
                    top: '18%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '140%',
                    height: 180,
                    background:
                      'radial-gradient(ellipse at center, rgba(194,161,77,0.35) 0%, rgba(194,161,77,0.10) 30%, transparent 55%)',
                    filter: 'blur(18px)',
                    pointerEvents: 'none',
                    opacity: 0.55,
                    transition: 'opacity 480ms ease, transform 480ms ease',
                    zIndex: 0,
                  }}
                />

                {/* Gloss shine que atravessa o card ao entrar hover */}
                <span
                  aria-hidden="true"
                  className="prova-shine"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                    zIndex: 2,
                  }}
                />

                <div
                  className="elv-serif prova-number"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: 'clamp(3rem, 4.2vw, 4.6rem)',
                    lineHeight: 1,
                    background:
                      'linear-gradient(180deg, #F5E5B8 0%, #C2A14D 55%, #A87F2E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter:
                      'drop-shadow(0 2px 8px rgba(194,161,77,0.35)) drop-shadow(0 8px 24px rgba(122,28,46,0.25))',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div
                  className="elv-sans"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: 'clamp(0.95rem, 0.85rem + 0.35vw, 1.1rem)',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    marginTop: 'var(--space-4)',
                    color: 'var(--gold-300)',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
                {/* Divisor curto animado */}
                <span
                  aria-hidden="true"
                  className="prova-divider"
                  style={{
                    display: 'block',
                    width: 42,
                    height: 1,
                    background:
                      'linear-gradient(90deg, transparent, var(--gold-500) 30%, var(--gold-500) 70%, transparent)',
                    margin: 'var(--space-3) auto',
                    transformOrigin: 'center',
                    animationDelay: `${i * 120 + 400}ms`,
                  }}
                />
                <p
                  className="elv-serif"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: 'var(--text-sm)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginTop: 0,
                    color: 'rgba(255,248,235,0.72)',
                    maxWidth: '30ch',
                    marginInline: 'auto',
                    fontStyle: 'italic',
                  }}
                >
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        /* Divisor de cada card desenha ao entrar */
        @keyframes provaDividerDraw {
          0%   { transform: scaleX(0); opacity: 0.4; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .prova-divider {
          transform: scaleX(0);
          animation: provaDividerDraw 620ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        /* Halo pulsa devagar (idle) */
        @keyframes provaHaloPulse {
          0%,100% { opacity: 0.45; transform: translate(-50%, -50%) scale(1); }
          50%     { opacity: 0.7; transform: translate(-50%, -50%) scale(1.12); }
        }
        .prova-halo {
          animation: provaHaloPulse 4s ease-in-out infinite;
        }

        /* Número respira sutilmente com glow pulsante */
        @keyframes provaNumberGlow {
          0%,100% { filter: drop-shadow(0 2px 8px rgba(194,161,77,0.35)) drop-shadow(0 8px 24px rgba(122,28,46,0.25)); }
          50%     { filter: drop-shadow(0 2px 14px rgba(194,161,77,0.55)) drop-shadow(0 8px 30px rgba(122,28,46,0.4)); }
        }
        .prova-number {
          animation: provaNumberGlow 3.6s ease-in-out infinite;
        }

        /* Card hover, levanta e intensifica halo */
        .prova-card {
          will-change: transform, box-shadow;
        }
        .prova-card:hover {
          transform: translateY(-8px);
          border-color: rgba(194,161,77,0.45);
          box-shadow:
            0 20px 50px rgba(0,0,0,0.35),
            0 0 0 1px rgba(194,161,77,0.3),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .prova-card:hover .prova-halo {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1.25);
        }

        /* Gloss shine, passa da esquerda pra direita ao hover */
        .prova-shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -70%;
          width: 55%;
          height: 200%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            transparent 35%,
            rgba(255, 250, 230, 0.14) 48%,
            rgba(255, 250, 230, 0.22) 50%,
            rgba(255, 250, 230, 0.14) 52%,
            transparent 65%,
            transparent 100%
          );
          transform: translateX(-100%);
          filter: blur(3px);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        .prova-card:hover .prova-shine::before {
          opacity: 1;
          animation: provaShineSweep 1200ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes provaShineSweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(320%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .prova-divider,
          .prova-halo,
          .prova-number,
          .prova-card,
          .prova-shine::before {
            animation: none;
            transition: none;
          }
          .prova-divider {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}
