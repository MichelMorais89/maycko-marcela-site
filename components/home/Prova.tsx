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
      className="elv-sec--prova"
      style={{
        paddingBlock: 'var(--space-11)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Textura orgânica sutil — evita blur "queimado" */}
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
      {/* Grid dotted extra sutil só nessa seção — dá textura fina */}
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
            gap: 'var(--space-8)',
          }}
        >
          {STATS.map((s, i) => (
            <Reveal key={i} delay={(i % 3) as 0 | 1 | 2} style={{ textAlign: 'center' }}>
              <div
                className="elv-stat-card"
                style={{
                  padding: 'var(--space-6) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'default',
                }}
              >
                <div
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(2.6rem, 3.4vw, 3.8rem)',
                    lineHeight: 1,
                    background:
                      'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 2px 6px rgba(184,140,72,0.15))',
                  }}
                >
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div
                  className="elv-sans"
                  style={{
                    fontSize: 'var(--text-sm)',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    marginTop: 'var(--space-3)',
                    color: 'var(--gold-300)',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
                {/* Divisor curto */}
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    width: 26,
                    height: 1,
                    background: 'var(--gold-500)',
                    margin: 'var(--space-3) auto',
                    opacity: 0.6,
                  }}
                />
                <p
                  className="elv-serif"
                  style={{
                    fontSize: 'var(--text-sm)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginTop: 0,
                    color: 'rgba(255,248,235,0.68)',
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
    </section>
  )
}
