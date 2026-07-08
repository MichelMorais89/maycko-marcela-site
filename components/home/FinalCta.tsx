import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'

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
              'linear-gradient(to bottom, rgba(18,10,14,0.70) 0%, rgba(18,10,14,0.82) 100%)',
          }}
        />
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
            Se o casamento de vocês pode viver em outro nível
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
            <Link
              href="/mentoria#aplicar"
              className="elv-cta-glow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 36px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--wine-600)',
                color: 'var(--white-warm)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Quero aplicar
            </Link>
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
