import type { Metadata } from 'next'
import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
import { ContatoForm } from '@/components/contato/ContatoForm'

export const metadata: Metadata = {
  title: 'Contato — Maycko & Marcela | Elevem-se',
  description:
    'Se você quer conversar antes de aplicar, estamos aqui. Entre em contato com a equipe Elevem-se.',
  openGraph: {
    title: 'Contato — Maycko & Marcela | Elevem-se',
    description: 'Entre em contato com a equipe Elevem-se.',
    images: [{ url: '/photos/hero-couple.jpg', width: 1200, height: 630 }],
  },
}

const INFO_ITEMS = [
  {
    label: 'Instagram — Marcela',
    value: '@marcelazanardo',
    href: 'https://instagram.com/marcelazanardo',
  },
  {
    label: 'Instagram — Maycko',
    value: '@maykoalvess',
    href: 'https://instagram.com/maykoalvess',
  },
  {
    label: 'YouTube',
    value: 'Maycko & Marcela',
    href: 'https://youtube.com/@mayckoemarcel',
  },
  {
    label: 'E-mail',
    value: 'contato@eleve-mse.com.br',
    href: 'mailto:contato@eleve-mse.com.br',
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--surface-wine-deep, #1c0810)',
          paddingTop: 'clamp(var(--space-14), 14vw, var(--space-20))',
          paddingBottom: 'clamp(var(--space-12), 10vw, var(--space-16))',
        }}
      >
        <div className="elv-wrap elv-center">
          <Reveal>
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
                Vamos conversar
              </p>
              <Ornament variant="rule" ruleWidth={32} tone="gold" />
            </div>
            <h1
              className="elv-serif"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                color: 'var(--white-warm)',
                lineHeight: 1.05,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                fontWeight: 'var(--weight-medium)',
                margin: 0,
                marginBottom: 'var(--space-5)',
                maxWidth: '18ch',
                marginInline: 'auto',
                textWrap: 'balance',
              }}
            >
              Fale com{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
                a gente
              </em>
            </h1>
            <p
              className="elv-sans"
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                color: 'color-mix(in srgb, var(--white-warm) 72%, transparent)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '42ch',
                margin: '0 auto',
              }}
            >
              Se você quer conversar antes de aplicar, estamos aqui.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Corpo — form + info lateral */}
      <section
        style={{
          background: 'var(--surface-anchor)',
          paddingBlock: 'clamp(var(--space-12), 10vw, var(--space-18))',
        }}
      >
        <div className="elv-wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(var(--space-10), 6vw, var(--space-16))',
              alignItems: 'start',
            }}
          >
            {/* Form */}
            <Reveal>
              <div
                style={{
                  background: 'var(--white-warm, #fdfaf6)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(var(--space-7), 4vw, var(--space-10))',
                  boxShadow: '0 8px 48px color-mix(in srgb, var(--wine-900, #1a0508) 12%, transparent)',
                }}
              >
                <h2
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                    color: 'var(--text-strong)',
                    margin: 0,
                    marginBottom: 'var(--space-7)',
                    fontStyle: 'italic',
                  }}
                >
                  Envie uma mensagem
                </h2>
                <ContatoForm />
              </div>
            </Reveal>

            {/* Info lateral */}
            <Reveal delay={1}>
              <div style={{ paddingTop: 'var(--space-2)' }}>
                <Ornament tone="gold" style={{ marginBottom: 'var(--space-6)' }} />

                <h2
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    color: 'var(--text-strong)',
                    margin: 0,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Onde nos{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--wine-600)', fontWeight: 'var(--weight-regular)' }}>
                    encontrar
                  </em>
                </h2>
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                    color: 'var(--text-body)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  Estamos presentes nas principais plataformas. Nos acompanhe e entre em contato pelo canal que preferir.
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-5)',
                  }}
                >
                  {INFO_ITEMS.map((item) => (
                    <li key={item.label}>
                      <p
                        className="elv-sans"
                        style={{
                          fontSize: 'clamp(0.7rem, 0.7rem + 0.1vw, 0.8rem)',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-600, #8a6a2c)',
                          fontWeight: 600,
                          margin: 0,
                          marginBottom: 'var(--space-1)',
                        }}
                      >
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="elv-sans"
                        style={{
                          fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                          color: 'var(--text-strong)',
                          textDecoration: 'none',
                          fontWeight: 'var(--weight-medium)',
                          transition: 'color 200ms var(--ease-standard)',
                        }}
                      >
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA aplicar */}
                <div
                  style={{
                    marginTop: 'var(--space-10)',
                    padding: 'var(--space-7)',
                    background: 'color-mix(in srgb, var(--wine-600) 8%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--wine-400) 30%, transparent)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <p
                    className="elv-serif"
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                      color: 'var(--text-strong)',
                      fontStyle: 'italic',
                      margin: 0,
                      marginBottom: 'var(--space-5)',
                    }}
                  >
                    Ou aplique direto para a mentoria
                  </p>
                  <ShimmerCTA href="/mentoria#aplicar">
                    Aplicar agora
                  </ShimmerCTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
