import { Reveal } from '@/components/shared/Reveal'
import { Photo } from '@/components/shared/Photo'
import { Ornament } from '@/components/shared/Ornament'

const BIO = [
  'Maycko Alves é empreendedor serial e mentor de liderança com trajetória à frente de múltiplos negócios. Aprendeu na prática que resultados extraordinários na empresa começam pela ordem dentro de casa.',
  'Com linguagem direta, desafia homens a saírem da inércia — não apenas como provedores, mas como presença ativa na construção da família e do propósito conjunto.',
  'Na Elevem-se, conduz o Módulo de Estrutura: o método de tomada de decisão, liderança compartilhada e visão de legado que transforma a dinâmica de um casal.',
]

const ESPECIALIDADES = [
  'Empreendedorismo e performance',
  'Liderança masculina e presença no lar',
  'Decisão estratégica em casal',
  'Construção de legado familiar',
]

export function SobreMaycko() {
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
          {/* Bio Maycko — à esquerda (invertido) */}
          <div style={{ order: 0 }}>
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
                  Mentor
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
                Maycko{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
                  Alves
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
                Empreendedor e mentor de liderança
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

          {/* Foto Maycko — à direita */}
          <Reveal style={{ order: 1, display: 'flex' }}>
            <div style={{ position: 'relative', flex: 1, minHeight: 640, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <Photo
                src="/photos/mentor-maycko.jpg"
                alt="Maycko Alves"
                ratio="3 / 4"
                position="50% 20%"
                sizes="(max-width: 768px) 90vw, 42vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
