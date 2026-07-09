import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'

interface CardVideoProps {
  video: string
  eyebrow: string
  h2First: string
  h2Emphasis: string
  h2Rest?: string
}

function CardVideo({ video, eyebrow, h2First, h2Emphasis, h2Rest }: CardVideoProps) {
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '3 / 4',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow:
          '0 30px 80px rgba(0,0,0,0.55), 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(184,140,72,0.16)',
      }}
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10,5,8,0.92) 0%, rgba(10,5,8,0.45) 45%, rgba(10,5,8,0.15) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: 'clamp(28px, 4vw, 44px)',
          zIndex: 2,
        }}
      >
        <p
          className="elv-sans"
          style={{
            fontSize: 'clamp(0.72rem, 0.7rem + 0.2vw, 0.85rem)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold-400)',
            fontWeight: 600,
            marginBottom: 'var(--space-4)',
          }}
        >
          {eyebrow}
        </p>
        <h3
          className="elv-serif"
          style={{
            fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
            color: 'var(--white-warm)',
            lineHeight: 1.18,
            margin: 0,
            fontWeight: 'var(--weight-medium)',
            textWrap: 'balance',
            maxWidth: '18ch',
          }}
        >
          {h2First}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-300)', fontWeight: 400 }}>
            {h2Emphasis}
          </em>
          {h2Rest ? ` ${h2Rest}` : null}
        </h3>
      </div>
    </div>
  )
}

const FOTOS_FAMILIA = [
  { src: '/photos/stock/familia-pjs-crianca.jpg', alt: 'Família em casa de pijamas' },
  { src: '/photos/stock/familia-campo-crianca.jpg', alt: 'Família no campo com filhos' },
  { src: '/photos/stock/familia-bebe-beijo.jpg', alt: 'Casal beijando o bebê' },
]

export function SobreIntimidadePresenca() {
  return (
    <section
      style={{
        background: 'var(--ink-900, #0a0709)',
        paddingBlock: 'clamp(6rem, 12vw, 10rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 55% at 20% 30%, rgba(184,140,72,0.08) 0%, transparent 60%), radial-gradient(ellipse 65% 55% at 85% 80%, rgba(122,28,46,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header — A Família / Um legado que se vive */}
        <Reveal className="elv-center" style={{ marginBottom: 'clamp(56px, 7vw, 88px)' }}>
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
                fontSize: 'clamp(0.72rem, 0.7rem + 0.2vw, 0.9rem)',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              A família
            </p>
            <Ornament variant="rule" ruleWidth={32} tone="gold" />
          </div>
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              color: 'var(--white-warm)',
              margin: 0,
              maxWidth: '22ch',
              marginInline: 'auto',
              lineHeight: 1.12,
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
            }}
          >
            Um legado{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
              que se vive
            </em>
          </h2>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,248,235,0.72)',
              lineHeight: 'var(--leading-relaxed)',
              marginTop: 'var(--space-6)',
              maxWidth: '46ch',
              marginInline: 'auto',
            }}
          >
            O que ensinamos não é teoria — é a vida que escolhemos construir todos os dias, dentro de casa, com nossos filhos assistindo.
          </p>
        </Reveal>

        {/* 2 cards vídeo — Intimidade + Presença */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          <Reveal>
            <CardVideo
              video="/videos/intimidade.mp4"
              eyebrow="Intimidade"
              h2First="A intimidade que"
              h2Emphasis="ninguém vê"
              h2Rest="nas redes."
            />
          </Reveal>

          <Reveal delay={1}>
            <CardVideo
              video="/videos/presenca.mp4"
              eyebrow="Presença"
              h2First="Presença que se"
              h2Emphasis="transforma"
              h2Rest="em memória."
            />
          </Reveal>
        </div>

        {/* Grid de 3 fotos de família — legado que se vive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 28px)',
          }}
        >
          {FOTOS_FAMILIA.map((foto, i) => (
            <Reveal key={foto.src} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="elv-photo-hover"
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                }}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
