import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { SplitText } from '@/components/motion/SplitText'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'

export function FinalCta() {
  return (
    <section
      className="elv-sec"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--surface-anchor)',
      }}
    >
      {/* Background photo with overlay */}
      <div
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        aria-hidden="true"
      >
        <Image
          src="/photos/final-cta-couple-navy.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(8,4,8,0.80) 0%, rgba(8,4,8,0.88) 100%)',
          }}
        />
      </div>

      {/* Chama grande atrás do CTA */}
      <div
        aria-hidden="true"
        className="final-cta-flame"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          width: 'clamp(200px, 30vw, 420px)',
          height: 'clamp(260px, 40vw, 540px)',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <defs>
            <filter id="flame-blur">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <g filter="url(#flame-blur)">
            <path
              d="M59 99 C 51 80 46 58 51 40 C 54 31 58 30 60 33 C 56 31 49 44 44 64 C 42 80 50 92 59 99 Z"
              fill="var(--wine-600)"
              opacity="0.9"
            />
            <path
              d="M61 99 C 69 78 74 56 69 36 C 66 26 62 22 60 19 C 62 23 71 40 76 60 C 78 78 70 92 61 99 Z"
              fill="var(--gold-500)"
              opacity="0.85"
            />
          </g>
        </svg>
      </div>

      <div
        className="elv-wrap elv-wrap--md elv-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Reveal className="elv-center">
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'var(--wine-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--space-5)',
            }}
          >
            <span
              className="elv-serif"
              style={{ color: 'var(--gold-300)', fontSize: 'var(--text-lg)', fontStyle: 'italic' }}
            >
              E
            </span>
          </div>

          <Eyebrow tone="onWine">A decisão é estratégica</Eyebrow>

          <h2
            className="elv-serif elv-fluid-h1"
            style={{ marginTop: 'var(--space-4)', maxWidth: '20ch', color: 'var(--white-warm)' }}
          >
            <SplitText delay={100}>
              Se o casamento de vocês pode viver em outro nível
            </SplitText>
          </h2>

          <p
            className="elv-sans"
            style={{
              marginTop: 'var(--space-5)',
              maxWidth: '46ch',
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'rgba(255,248,235,0.78)',
            }}
          >
            Preencham a aplicação. Se houver alinhamento, vocês entram. Se não, indicamos o melhor
            caminho.
          </p>

          <div
            className="elv-row"
            style={{ justifyContent: 'center', marginTop: 'var(--space-7)' }}
          >
            <MagneticButton>
              <ShimmerCTA href="/mentoria#aplicar" style={{ padding: '16px 36px' }}>
                Quero aplicar
              </ShimmerCTA>
            </MagneticButton>
          </div>

          <p
            className="elv-sans"
            style={{
              fontSize: 'var(--text-2xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'rgba(255,248,235,0.38)',
              marginTop: 'var(--space-5)',
            }}
          >
            Processo seletivo por aplicação · Poucos casais por ciclo
          </p>
        </Reveal>
      </div>
    </section>
  )
}
