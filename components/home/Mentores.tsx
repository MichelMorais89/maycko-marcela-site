import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { Photo } from '@/components/shared/Photo'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'
import { BrandArrow } from '@/components/shared/BrandArrow'

export function Mentores() {
  return (
    <section className="elv-sec elv-sec--cream" style={{ paddingBlock: 'clamp(6rem, 12vw, 10rem)' }}>
      <div className="elv-wrap">
        <div
          className="mentores-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 8vw, 7rem)',
            alignItems: 'center',
          }}
        >
          {/* Foto casal */}
          <Reveal className="elv-sticky-col">
            <div
              className="elv-photo-oval elv-photo-hover"
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                overflow: 'hidden',
              }}
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

          {/* Texto enxuto */}
          <div>
            <Reveal>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.8 }} />
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(1rem, 1.15vw, 1.35rem)',
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-600, #8a6a2c)',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Quem conduz essa jornada
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1.9rem, 3.8vw, 3.4rem)',
                  color: 'var(--text-strong)',
                  lineHeight: 1.05,
                  margin: 0,
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: '-0.005em',
                  whiteSpace: 'nowrap',
                }}
              >
                <SplitText mode="chars" staggerMs={38}>Maycko & Marcela</SplitText>
              </h2>
            </Reveal>

            <Reveal delay={2} style={{ marginTop: 'var(--space-7)' }}>
              <p
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1.2rem, 1.9vw, 1.6rem)',
                  color: 'var(--text-body)',
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: '30ch',
                  fontStyle: 'italic',
                }}
              >
                Há mais de duas décadas construindo aquilo que hoje ensinam para outros casais.
              </p>
            </Reveal>

            <Reveal delay={3} style={{ marginTop: 'var(--space-9)' }}>
              <Link
                href="/sobre"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--gold-500)',
                  color: 'var(--wine-700)',
                  background: 'transparent',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Conheça nossa história
                <BrandArrow variant="fios" size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
