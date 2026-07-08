import Image from 'next/image'
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
    q: 'O CNPJ ia bem, o CPF não. A mentoria sintonizou os dois — e o nosso casamento respira de novo.',
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
      {/* Foto Marcela tablet — fundo em blur */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '35%',
          zIndex: 0,
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/photos/depoimentos-marcela-tablet.jpg"
          alt=""
          fill
          sizes="35vw"
          style={{ objectFit: 'cover', objectPosition: '50% 20%', filter: 'blur(2px)' }}
        />
      </div>

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
            Quem viveu
          </p>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{ color: 'var(--text-strong)', margin: 0, textAlign: 'center' }}
          >
            <SplitText delay={100}>Casais que saíram do automático</SplitText>
          </h2>
        </Reveal>

        <div className="elv-grid-3" style={{ marginTop: 'var(--space-9)', alignItems: 'stretch' }}>
          {ITEMS.map((t, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2} as="div" style={{ display: 'flex' }}>
              <TiltCard style={{ width: '100%' }}>
                <div
                  style={{
                    background: 'var(--surface-card)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--ring-hairline)',
                    padding: 'var(--space-8)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-5)',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <span
                    className="elv-serif"
                    style={{
                      fontSize: 'var(--text-4xl)',
                      color: 'var(--gold-400)',
                      lineHeight: 0.6,
                      height: 24,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="elv-serif"
                    style={{
                      fontSize: 'var(--text-lg)',
                      lineHeight: 'var(--leading-snug)',
                      color: 'var(--text-strong)',
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {t.q}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'var(--sand)',
                        border: '2px solid var(--gold-500)',
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
                          color: 'var(--text-strong)',
                        }}
                      >
                        {t.n}
                      </div>
                      <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)' }}>
                        {t.r}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <p
          className="elv-center elv-sans elv-muted"
          style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-6)' }}
        >
          Depoimentos representativos — substituir por casos reais aprovados.
        </p>
      </div>
    </section>
  )
}
