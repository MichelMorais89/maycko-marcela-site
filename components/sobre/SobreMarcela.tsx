import { Reveal } from '@/components/shared/Reveal'
import { Photo } from '@/components/shared/Photo'
import { Ornament } from '@/components/shared/Ornament'

const BIO = [
  'Marcela Zanardo é terapeuta de relacionamentos com mais de quinze anos de prática clínica. Especialista em comunicação não-violenta, desenvolveu uma linguagem própria para trabalhar a dimensão emocional e relacional da vida a dois.',
  'Sua missão: ajudar casais a construírem vínculos profundos e duradouros — sem atalhos emocionais, sem performance de felicidade.',
  'Na Elevem-se, conduz o Módulo de Aliança: a estrutura de presença, escuta e conexão que transforma cônjuges em verdadeiros parceiros de vida.',
]

const ESPECIALIDADES = [
  'Comunicação e escuta profunda',
  'Vínculos emocionais conscientes',
  'Desenvolvimento feminino',
  'Presença no lar e na liderança',
]

export function SobreMarcela() {
  return (
    <section
      style={{
        background: 'var(--surface-wine-deep, #1c0810)',
        paddingBlock: 'clamp(5rem, 10vw, 8rem)',
      }}
    >
      <div className="elv-wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(3rem, 8vw, 7rem)',
            alignItems: 'stretch',
          }}
        >
          {/* Foto Marcela */}
          <Reveal style={{ display: 'flex' }}>
            <div style={{ position: 'relative', flex: 1, minHeight: 640, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <Photo
                src="/photos/mentor-marcela.jpg"
                alt="Marcela Zanardo"
                ratio="3 / 4"
                position="50% 15%"
                sizes="(max-width: 768px) 90vw, 42vw"
              />
            </div>
          </Reveal>

          {/* Bio Marcela */}
          <div>
            <Reveal style={{ marginBottom: 'var(--space-6)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                <Ornament variant="rule" ruleWidth={32} tone="gold" />
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.85rem)',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-400)',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Mentora
                </p>
              </div>
              <h2
                className="elv-serif elv-fluid-h2"
                style={{
                  color: 'var(--white-warm)',
                  margin: 0,
                  marginBottom: 'var(--space-3)',
                }}
              >
                Marcela{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
                  Zanardo
                </em>
              </h2>
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                  color: 'color-mix(in srgb, var(--gold-300) 70%, transparent)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Terapeuta de relacionamentos
              </p>
            </Reveal>

            <Reveal
              as="div"
              delay={1}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
            >
              {BIO.map((p, i) => (
                <p
                  key={i}
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.25vw, 1.05rem)',
                    color: 'color-mix(in srgb, var(--white-warm) 75%, transparent)',
                    lineHeight: 'var(--leading-relaxed)',
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </Reveal>

            {/* Especialidades */}
            <Reveal delay={2} style={{ marginTop: 'var(--space-8)' }}>
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.8rem)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-500)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Especialidades
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                {ESPECIALIDADES.map((e) => (
                  <li
                    key={e}
                    className="elv-sans"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                      color: 'color-mix(in srgb, var(--white-warm) 80%, transparent)',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        background: 'var(--gold-500)',
                        borderRadius: '50%',
                        flexShrink: 0,
                      }}
                    />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
