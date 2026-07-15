import type { Metadata } from 'next'
import Image from 'next/image'
import { ElevemseWatermark } from '@/components/brand/ElevemseWatermark'
import { EbookBuyButton } from '@/components/blocks/EbookBuyButton'
import { NewsletterForm } from '@/components/blocks/NewsletterForm'

export const metadata: Metadata = {
  title: 'Ebooks, ELEVEM-SE | Maycko e Marcela',
  description:
    'Material que aprofunda o que a mentoria vive. Ebooks ELEVEM-SE, para quem quer começar a construir antes mesmo de aplicar.',
  openGraph: {
    title: 'Ebooks, ELEVEM-SE | Maycko e Marcela',
    description: 'Comunicação no Relacionamento, O método Maycko & Marcela.',
    images: [
      {
        url: '/ebooks/capa-ebook-comunicacao.jpg',
        width: 1200,
        height: 1695,
        alt: 'Ebook Comunicação no Relacionamento, Maycko & Marcela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebooks, ELEVEM-SE | Maycko e Marcela',
    description: 'Comunicação no Relacionamento, O método Maycko & Marcela.',
    images: ['/ebooks/capa-ebook-comunicacao.jpg'],
  },
}

export default function EbooksPage() {
  return (
    <main>
      {/* Bloco 1, Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--surface-wine-deep, #4A1B29)',
          paddingBlock: 'clamp(100px, 16vh, 160px)',
        }}
      >
        {/* Foto solo Marcela */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <Image
            src="/photos/conceito-marcela-perfil.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: '78% 20%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(28,8,18,0.92) 0%, rgba(28,8,18,0.75) 50%, rgba(28,8,18,0.30) 100%)',
            }}
          />
        </div>

        {/* Marca d'água parallax */}
        <ElevemseWatermark
          variant="outline"
          color="dourado"
          motion="parallax"
          opacity={0.07}
          size="full"
        />

        <div
          className="elv-wrap"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
        <div style={{ maxWidth: 600, paddingLeft: 'clamp(0px, 2vw, 40px)' }}>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.72rem, 0.68rem + 0.22vw, 0.88rem)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--gold-400, #D2B673)',
              fontWeight: 600,
              margin: '0 0 var(--space-5)',
            }}
          >
            EBOOKS · ELEVEM-SE
          </p>
          <h1
            className="elv-serif"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--white-warm, #FFFDFA)',
              margin: '0 0 var(--space-6)',
              maxWidth: '20ch',
            }}
          >
            Material que aprofunda o que a mentoria vive.
          </h1>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
              fontStyle: 'italic',
              color: 'var(--gold-300, #E0CB99)',
              lineHeight: 1.5,
              margin: '0 0 var(--space-8)',
              maxWidth: '42ch',
            }}
          >
            Cada ebook é uma peça do método, para quem quer começar a construir antes mesmo de aplicar.
          </p>
          <a
            href="#ebooks"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.72rem, 0.7rem + 0.2vw, 0.88rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-300, #E0CB99)',
              textDecoration: 'none',
              fontWeight: 500,
              opacity: 0.85,
            }}
          >
            VEJA MAIS ↓
          </a>
        </div>
        </div>
      </section>

      {/* Bloco 2, Card único do Ebook */}
      <section
        id="ebooks"
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          paddingBlock: 'clamp(5rem, 10vw, 9rem)',
        }}
      >
        <div className="elv-wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(220px, 380px) 1fr',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'start',
            }}
            className="ebook-card-grid"
          >
            {/* Capa 3D */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md, 12px)',
                overflow: 'hidden',
                boxShadow:
                  '8px 16px 40px rgba(44,26,18,0.22), 2px 4px 12px rgba(44,26,18,0.14)',
                transform: 'perspective(800px) rotateY(-4deg) rotateX(1deg)',
                aspectRatio: '1200/1695',
              }}
            >
              <Image
                src="/ebooks/capa-ebook-comunicacao.jpg"
                alt="Capa do ebook: Comunicação no Relacionamento, Maycko & Marcela"
                fill
                sizes="(max-width: 700px) 80vw, 380px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Texto */}
            <div style={{ paddingTop: 'clamp(0px, 2vw, 24px)' }}>
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.84rem)',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'var(--text-gold, #735422)',
                  fontWeight: 600,
                  margin: '0 0 var(--space-4)',
                }}
              >
                EBOOK · MAYCKO &amp; MARCELA
              </p>

              <h2
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: 'var(--text-strong, #2E2A2B)',
                  margin: '0 0 var(--space-3)',
                  maxWidth: '22ch',
                }}
              >
                Comunicação no Relacionamento
              </h2>

              <p
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                  fontStyle: 'italic',
                  color: 'var(--text-muted, #716A6B)',
                  margin: '0 0 var(--space-7)',
                }}
              >
                O método Maycko &amp; Marcela.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                  margin: '0 0 var(--space-8)',
                  maxWidth: '52ch',
                }}
              >
                <p
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                    lineHeight: 1.7,
                    color: 'var(--text-body, #4D4748)',
                    margin: 0,
                  }}
                >
                  Casais saudáveis também discutem. Também se frustram. Também erram.{' '}
                  <strong style={{ color: 'var(--text-strong, #2E2A2B)', fontWeight: 600 }}>
                    A diferença é que aprendem a conversar melhor ao longo do tempo.
                  </strong>
                </p>
                <p
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                    lineHeight: 1.7,
                    color: 'var(--text-body, #4D4748)',
                    margin: 0,
                  }}
                >
                  Este livro é sobre isso. Sobre a comunicação que nasce quando duas pessoas param de reagir e começam a se ouvir.
                  Sobre pequenas mudanças na forma de falar que transformam completamente a forma de se relacionar.
                </p>
                <p
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                    lineHeight: 1.7,
                    color: 'var(--text-body, #4D4748)',
                    margin: 0,
                  }}
                >
                  Escrito para casais que já se amam, mas querem se{' '}
                  <strong style={{ color: 'var(--text-strong, #2E2A2B)', fontWeight: 600 }}>encontrar</strong> de novo.
                </p>
              </div>

              <EbookBuyButton
                href="https://pay.hub.la/ZVvbzHw07h8ETdYByF5z"
                price="R$ 67"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3, Captação newsletter */}
      <section
        style={{
          background: 'var(--surface-bege-light, #F5EFE4)',
          paddingBlock: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        <div
          className="elv-wrap elv-center"
          style={{ maxWidth: 560, textAlign: 'center' }}
        >
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
              fontWeight: 400,
              lineHeight: 1.25,
              color: 'var(--text-strong, #2E2A2B)',
              margin: '0 0 var(--space-6)',
            }}
          >
            Quer receber o próximo ebook antes de todo mundo?
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </main>
  )
}
