import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { Photo } from '@/components/shared/Photo'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const BIO = [
  'Há mais de vinte anos caminhamos juntos.',
  'Somos casados há treze anos e pais de três filhos.',
  'A Elevem-se nasceu da nossa própria história.',
  'Antes de ensinar qualquer princípio, nós o vivemos.',
  'Aprendemos, erramos, reconstruímos, amadurecemos e estruturamos aquilo que hoje compartilhamos com centenas de casais.',
  'Não acreditamos em fórmulas prontas.',
  'Acreditamos em princípios sólidos que fortalecem relacionamentos para toda a vida.',
]

export function Mentores() {
  return (
    <section className="elv-sec elv-sec--cream">
      <div className="elv-wrap">
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-10)' }}>
          <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)', opacity: 0.85 }} />
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold-600, #8a6a2c)',
              fontWeight: 600,
              marginBottom: 'var(--space-4)',
            }}
          >
            Quem conduz essa jornada
          </p>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{ color: 'var(--text-strong)', margin: 0 }}
          >
            <SplitText mode="chars" staggerMs={40}>Maycko & Marcela</SplitText>
          </h2>
        </Reveal>

        <div
          className="mentores-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-11)',
            alignItems: 'center',
          }}
        >
          {/* Foto do casal juntos */}
          <Reveal className="elv-sticky-col">
            <div
              className="elv-photo-oval"
              style={{ position: 'relative', aspectRatio: '4 / 5' }}
            >
              <Photo
                src="/photos/mentores-couple.jpg"
                alt="Maycko e Marcela juntos"
                ratio="4 / 5"
                position="50% 20%"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </Reveal>

          {/* Bio conjunta */}
          <div style={{ paddingTop: 'var(--space-3)' }}>
            <Reveal
              as="div"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                maxWidth: '46ch',
              }}
            >
              {BIO.map((line, i) => (
                <p
                  key={i}
                  className={i === BIO.length - 1 ? 'elv-serif' : 'elv-sans'}
                  style={{
                    fontSize: i === BIO.length - 1 ? 'clamp(1.15rem, 1.8vw, 1.5rem)' : 'clamp(1rem, 1.35vw, 1.15rem)',
                    fontStyle: i === BIO.length - 1 ? 'italic' : 'normal',
                    color: i === BIO.length - 1 ? 'var(--wine-700)' : 'var(--text-body)',
                    lineHeight: 'var(--leading-relaxed)',
                    margin: 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </Reveal>

            <Reveal delay={2} style={{ marginTop: 'var(--space-8)' }}>
              <p
                className="elv-serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.2rem, 2vw, 1.7rem)',
                  color: 'var(--gold-600, #8a6a2c)',
                  lineHeight: 1.35,
                  margin: 0,
                  maxWidth: '30ch',
                }}
              >
                Porque ensinamos aquilo que construímos.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="elv-center" style={{ marginTop: 'var(--space-10)' }}>
          <Link
            href="/sobre"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--gold-500)',
              color: 'var(--wine-700)',
              background: 'transparent',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Conhecer a história
          </Link>
        </div>
      </div>
    </section>
  )
}
