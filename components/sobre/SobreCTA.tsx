import { Reveal } from '@/components/shared/Reveal'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
import { Ornament } from '@/components/shared/Ornament'

export function SobreCTA() {
  return (
    <section
      style={{
        background: 'var(--surface-wine-deep, #1c0810)',
        paddingBlock: 'clamp(6rem, 12vw, 10rem)',
      }}
    >
      <div className="elv-wrap elv-center">
        <Reveal>
          <Ornament tone="gold" style={{ marginBottom: 'var(--space-6)' }} />
          <h2
            className="elv-serif elv-fluid-h2"
            style={{
              color: 'var(--white-warm)',
              margin: 0,
              marginBottom: 'var(--space-5)',
              maxWidth: '26ch',
              textWrap: 'balance',
            }}
          >
            Pronto para construir algo{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
              extraordinário?
            </em>
          </h2>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
              color: 'color-mix(in srgb, var(--white-warm) 70%, transparent)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-8)',
              maxWidth: '40ch',
              marginInline: 'auto',
            }}
          >
            Conheça a mentoria que Maycko e Marcela desenvolveram para casais que decidiram parar de
            existir no piloto automático.
          </p>
          <ShimmerCTA href="/mentoria">
            Conheça a mentoria
          </ShimmerCTA>
        </Reveal>
      </div>
    </section>
  )
}
