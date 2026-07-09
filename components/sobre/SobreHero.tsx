import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

export function SobreHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Foto full-bleed */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/photos/hero-couple.jpg"
          alt="Maycko e Marcela"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
        />
        {/* Overlay vinho dominante na base */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, var(--wine-900, #2a0a12) 0%, color-mix(in srgb, var(--wine-800) 55%, transparent) 50%, transparent 80%)',
          }}
        />
        {/* Overlay lateral esquerdo para legibilidade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, color-mix(in srgb, var(--wine-900, #2a0a12) 60%, transparent) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Conteúdo */}
      <div
        className="elv-wrap"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 'clamp(6rem, 12vw, 9rem)',
          maxWidth: '52rem',
        }}
      >
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
              Quem conduz essa jornada
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1
            className="elv-serif"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 5rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              fontWeight: 'var(--weight-medium)',
              margin: 0,
              marginBottom: 'var(--space-5)',
              whiteSpace: 'nowrap',
            }}
          >
            <SplitText mode="chars" staggerMs={35}>Maycko</SplitText>
            {' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                fontWeight: 'var(--weight-regular)',
              }}
            >
              <SplitText mode="chars" staggerMs={35} delay={300}>&</SplitText>
            </em>
            {' '}
            <SplitText mode="chars" staggerMs={35} delay={500}>Marcela</SplitText>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
              color: 'color-mix(in srgb, var(--white-warm) 80%, transparent)',
              lineHeight: 'var(--leading-relaxed)',
              margin: 0,
              maxWidth: '40ch',
            }}
          >
            Há mais de vinte anos caminhando juntos.
          </p>
        </Reveal>

        {/* Scroll hint */}
        <Reveal delay={3}>
          <div
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              marginTop: 'var(--space-10)',
            }}
          >
            <span
              style={{
                display: 'block',
                width: 1,
                height: 48,
                background: 'var(--gold-500)',
                opacity: 0.6,
                animation: 'scrollPulse 2.4s ease-in-out infinite',
              }}
            />
            <span
              className="elv-sans"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                opacity: 0.7,
              }}
            >
              Descer
            </span>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.08); }
        }
      `}</style>
    </section>
  )
}
