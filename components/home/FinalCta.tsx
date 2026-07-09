import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { SplitText } from '@/components/motion/SplitText'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
import { Ornament } from '@/components/shared/Ornament'

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/monogram-light.svg"
            alt=""
            width={44}
            height={44}
            style={{ display: 'block', margin: '0 auto var(--space-5)' }}
          />

          <Ornament tone="gold" style={{ marginBottom: 'var(--space-6)' }} />

          <p
            className="elv-sans"
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--gold-300)',
              margin: 0,
              maxWidth: '46ch',
              lineHeight: 1.4,
            }}
          >
            A decisão mais importante da vida de vocês talvez não seja a próxima conquista profissional.
          </p>

          <h2
            className="elv-serif elv-fluid-h1"
            style={{ marginTop: 'var(--space-5)', maxWidth: '22ch', color: 'var(--white-warm)' }}
          >
            <SplitText delay={100}>
              Talvez seja fortalecer aquilo que sustenta todas as outras.
            </SplitText>
          </h2>

          <div
            className="elv-sans"
            style={{
              marginTop: 'var(--space-6)',
              maxWidth: '48ch',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'rgba(255,248,235,0.80)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              marginInline: 'auto',
            }}
          >
            <p style={{ margin: 0 }}>Se existe amor, existe um caminho.</p>
            <p style={{ margin: 0 }}>Preencham a aplicação.</p>
            <p style={{ margin: 0 }}>
              Se identificarmos que a mentoria faz sentido para vocês, teremos alegria em caminhar juntos durante os próximos doze meses.
            </p>
          </div>

          <div
            className="elv-row"
            style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}
          >
            <MagneticButton>
              <ShimmerCTA href="/mentoria#aplicar" style={{ padding: '16px 36px' }}>
                Quero aplicar para a Mentoria Elevem-se
              </ShimmerCTA>
            </MagneticButton>
          </div>

          <p
            className="elv-sans"
            style={{
              fontSize: 'var(--text-2xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'rgba(255,248,235,0.45)',
              marginTop: 'var(--space-5)',
            }}
          >
            Processo seletivo · Poucos casais por ciclo
          </p>
        </Reveal>
      </div>
    </section>
  )
}
