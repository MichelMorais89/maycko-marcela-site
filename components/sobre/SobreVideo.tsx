import { Reveal } from '@/components/shared/Reveal'

export function SobreVideo() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'clamp(400px, 70vh, 700px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0d0408',
      }}
    >
      {/* Vídeo background */}
      <video
        src="/videos/essencia.mp4"
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
          objectPosition: '50% 40%',
        }}
      />

      {/* Overlay vinho escuro */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'color-mix(in srgb, var(--wine-900, #1a0508) 65%, transparent)',
        }}
      />

      {/* Copy sobreposta */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: 'var(--space-10) var(--space-6)',
          maxWidth: '36ch',
        }}
      >
        <Reveal>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.7rem, 0.7rem + 0.2vw, 0.85rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)',
            }}
          >
            A essência
          </p>
          <blockquote
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.1,
              fontStyle: 'italic',
              fontWeight: 'var(--weight-regular)',
              margin: 0,
              textWrap: 'balance',
            }}
          >
            <em>Ensinamos o que vivemos.</em>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
