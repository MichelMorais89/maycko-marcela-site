import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'

const FOTOS = [
  {
    src: '/photos/stock/familia-pjs-crianca.jpg',
    alt: 'Família em casa de pijamas com as crianças',
    legenda: 'A intimidade que ninguém vê nas redes',
  },
  {
    src: '/photos/stock/familia-campo-crianca.jpg',
    alt: 'Família no campo com as crianças',
    legenda: 'Presença que se transforma em memória',
  },
  {
    src: '/photos/stock/familia-bebe-beijo.jpg',
    alt: 'Casal beijando o bebê',
    legenda: 'O legado começa aqui',
  },
]

export function SobreLegado() {
  return (
    <section className="elv-sec elv-sec--cream">
      <div className="elv-wrap">
        {/* Cabeçalho */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-12)' }}>
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
                color: 'var(--gold-600, #8a6a2c)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              A família
            </p>
            <Ornament variant="rule" ruleWidth={32} tone="gold" />
          </div>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{
              color: 'var(--text-strong)',
              margin: 0,
              maxWidth: '22ch',
              textWrap: 'balance',
            }}
          >
            Um legado{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--wine-600)', fontWeight: 'var(--weight-regular)' }}>
              que se vive
            </em>
          </h2>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
              color: 'var(--text-body)',
              lineHeight: 'var(--leading-relaxed)',
              marginTop: 'var(--space-5)',
              maxWidth: '44ch',
              marginInline: 'auto',
            }}
          >
            O que ensinamos não é teoria — é a vida que escolhemos construir todos os dias,
            dentro de casa, com nossos filhos assistindo.
          </p>
        </Reveal>

        {/* Grid de fotos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {FOTOS.map((foto, i) => (
            <Reveal key={foto.src} delay={(i % 3) as 0 | 1 | 2}>
              <figure style={{ margin: 0 }}>
                <div
                  className="elv-photo-hover"
                  style={{
                    position: 'relative',
                    aspectRatio: '3 / 4',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 32vw"
                    style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                  />
                </div>
                <figcaption
                  className="elv-sans"
                  style={{
                    marginTop: 'var(--space-4)',
                    fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}
                >
                  {foto.legenda}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
