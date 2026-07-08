import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'

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
              Casamentos não fracassam por falta de amor. Fracassam por falta de{' '}
              <em className="elv-ital-gold">estrutura.</em>
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
              Relacionamento saudável não é ausência de problemas. É construção estratégica.
            </p>
          </Reveal>
        </div>

        {/* Foto sticky lateral — Marcela perfil dark */}
        <Reveal
          className="elv-sticky-col conceito-photo"
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '3 / 4',
            position: 'relative',
          }}
        >
          <Image
            src="/photos/conceito-marcela-dark.jpg"
            alt="Marcela — introspecção"
            fill
            sizes="(max-width: 900px) 90vw, 38vw"
            style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(42,16,22,0.65) 0%, transparent 50%)',
            }}
          />
        </Reveal>
      </div>
    </section>
  )
}
