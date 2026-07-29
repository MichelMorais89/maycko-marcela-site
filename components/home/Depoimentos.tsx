import { Reveal } from '@/components/shared/Reveal'
import { TiltCard } from '@/components/motion/TiltCard'
import { SplitText } from '@/components/motion/SplitText'

const ITEMS = [
  {
    q: 'Paramos de discutir os mesmos assuntos. Hoje conversamos antes do problema virar conflito.',
    n: 'Rafael & Letícia',
    r: 'Empreendedores · 9 anos juntos',
    initials: 'RL',
  },
  {
    q: 'O CNPJ ia bem, o CPF não. A mentoria sintonizou os dois, e o nosso casamento respira de novo.',
    n: 'André & Camila',
    r: 'Sócios e casados · 14 anos',
    initials: 'AC',
  },
  {
    q: 'Saímos do automático. Voltamos a nos admirar, com método e não com sorte.',
    n: 'Bruno & Patrícia',
    r: 'Família empreendedora · 12 anos',
    initials: 'BP',
  },
]

export function Depoimentos() {
  return (
    <section className="elv-sec elv-sec--page" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal className="elv-center">
          <p
            className="elv-sans"
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--wine-600)',
              marginBottom: 'var(--space-4)',
            }}
          >
            A VOZ DE QUEM VIVEU
          </p>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{
              color: 'var(--text-strong)',
              margin: 0,
              textAlign: 'center',
              maxWidth: '30ch',
              marginInline: 'auto',
              textWrap: 'balance',
            }}
          >
            <SplitText delay={100}>Casais que escolheram elevar-se antes que a rotina decidisse por&nbsp;eles.</SplitText>
          </h2>
          <p
            className="elv-lead elv-fluid-lead"
            style={{ marginTop: 'var(--space-4)', textAlign: 'center', maxWidth: '38ch', marginInline: 'auto' }}
          >
            Construíram um novo jeito de viver o casamento.
          </p>
        </Reveal>

        <div className="elv-grid-3" style={{ marginTop: 'var(--space-9)', alignItems: 'stretch' }}>
          {ITEMS.map((t, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2} as="div" style={{ display: 'flex' }}>
              <TiltCard style={{ width: '100%' }}>
                <div
                  style={{
                    position: 'relative',
                    background:
                      'linear-gradient(155deg, #fdf7ea 0%, #f9efd8 55%, #f0e0bd 100%)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: [
                      '0 1px 0 rgba(255,255,255,0.65) inset',
                      '0 -1px 0 rgba(122,28,46,0.10) inset',
                      '0 14px 30px rgba(60,25,35,0.14)',
                      '0 40px 80px rgba(60,25,35,0.10)',
                      '0 0 0 1px rgba(184,140,72,0.30)',
                    ].join(', '),
                    padding: 'clamp(28px, 3vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-5)',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  {/* Highlight top hairline dourado */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '15%',
                      right: '15%',
                      height: 1,
                      background:
                        'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)',
                      opacity: 0.55,
                    }}
                  />
                  {/* Ornamento canto superior direito, sutil */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 18,
                      right: 20,
                      width: 6,
                      height: 6,
                      background: 'var(--gold-500)',
                      transform: 'rotate(45deg)',
                      opacity: 0.55,
                    }}
                  />
                  {/* Aspas grandes serifadas com gradient */}
                  <span
                    className="elv-serif"
                    style={{
                      fontSize: 'clamp(3.5rem, 5vw, 4.5rem)',
                      lineHeight: 0.6,
                      height: 30,
                      fontStyle: 'italic',
                      background:
                        'linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 55%, var(--wine-600) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="elv-serif"
                    style={{
                      fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                      lineHeight: 'var(--leading-snug)',
                      color: 'var(--wine-800, #3a1220)',
                      margin: 0,
                      flex: 1,
                      fontStyle: 'italic',
                      fontWeight: 500,
                    }}
                  >
                    {t.q}
                  </p>
                  {/* Divisor curto dourado */}
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: 32,
                      height: 1,
                      background:
                        'linear-gradient(to right, var(--gold-500) 0%, rgba(184,140,72,0) 100%)',
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: '50%',
                        background:
                          'radial-gradient(circle at 30% 30%, #f7ebc9 0%, #d9b96e 100%)',
                        border: '2px solid var(--gold-500)',
                        boxShadow:
                          '0 4px 12px rgba(122,28,46,0.15), inset 0 1px 2px rgba(255,255,255,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="elv-serif"
                        style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--weight-semibold)',
                          color: 'var(--wine-700)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div
                        className="elv-sans"
                        style={{
                          fontWeight: 'var(--weight-semibold)',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--wine-800, #3a1220)',
                        }}
                      >
                        {t.n}
                      </div>
                      <div
                        className="elv-sans"
                        style={{
                          fontSize: 'var(--text-2xs)',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-600, #8a6a2c)',
                          fontWeight: 600,
                          marginTop: 2,
                        }}
                      >
                        {t.r}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
