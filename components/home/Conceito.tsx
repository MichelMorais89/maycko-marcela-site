import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { FlameLetter } from '@/components/motion/FlameLetter'
import { SplitText } from '@/components/motion/SplitText'

const LINES = [
  'Amor sem direção vira desgaste.',
  'Boa intenção sem alinhamento vira conflito.',
  'Prosperidade sem maturidade vira disputa.',
]

export function Conceito() {
  return (
    <section className="elv-sec elv-sec--wine" style={{ overflow: 'hidden' }}>
      <div
        className="elv-wrap conceito-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-10)',
          alignItems: 'start',
        }}
      >
        {/* Conteúdo textual */}
        <div className="elv-center">
          <Reveal className="elv-center">
            <Eyebrow tone="onWine">O conceito</Eyebrow>
            <h2
              className="elv-h elv-h--light elv-fluid-h1"
              style={{ marginTop: 'var(--space-5)', maxWidth: '18ch' }}
            >
              <SplitText delay={100}>
                Casamentos não fracassam por falta de amor. Fracassam por falta de estrutura.
              </SplitText>
            </h2>
          </Reveal>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-8)',
              marginTop: 'var(--space-8)',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {LINES.map((l, i) => (
              <Reveal key={i} delay={i as 0 | 1 | 2}>
                <p
                  className="elv-sans elv-on-wine"
                  style={{
                    fontWeight: 'var(--weight-light)',
                    fontSize: 'var(--text-base)',
                    maxWidth: '22ch',
                    margin: 0,
                    lineHeight: 'var(--leading-normal)',
                    textAlign: 'center',
                  }}
                >
                  {l}
                </p>
              </Reveal>
            ))}
          </div>

          <span
            className="elv-tick elv-tick--wine"
            style={{ width: 44, margin: 'var(--space-8) 0 var(--space-5)' }}
          />

          <Reveal>
            <p
              className="elv-serif"
              style={{
                fontStyle: 'italic',
                fontSize: 'var(--text-xl)',
                color: 'var(--gold-100)',
                maxWidth: '30ch',
                margin: 0,
                textAlign: 'center',
              }}
            >
              Relacionamento saudável não é ausência de problemas. É construção <FlameLetter size="0.9em" />stratégica.
            </p>
          </Reveal>
        </div>

        {/* Foto sticky lateral — Marcela perfil dark com mask-image */}
        <Reveal
          className="elv-sticky-col conceito-photo"
          style={{
            aspectRatio: '3 / 4',
            position: 'relative',
          }}
        >
          <div
            className="elv-photo-float--gold"
            style={{ position: 'relative', width: '100%', height: '100%', minHeight: 420 }}
          >
            <Image
              src="/photos/conceito-marcela-dark.jpg"
              alt="Marcela — introspecção"
              fill
              sizes="(max-width: 900px) 90vw, 38vw"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 15%',
                mixBlendMode: 'screen',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
