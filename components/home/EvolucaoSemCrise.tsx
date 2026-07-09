import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

export function EvolucaoSemCrise() {
  return (
    <section
      style={{
        background: 'var(--surface-anchor)',
        paddingBlock: 'clamp(7rem, 14vw, 12rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora sutil centralizada */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,140,72,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 20% 30%, rgba(122,28,46,0.10) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="elv-wrap elv-wrap--md elv-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-8)' }}>
          <Ornament tone="gold" style={{ marginBottom: 'var(--space-6)', opacity: 0.9 }} />
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.85rem, 1.05vw, 1.05rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 600,
              margin: 0,
            }}
          >
            Reposicionamento
          </p>
        </Reveal>

        {/* Frase-manifesto gigante */}
        <Reveal className="elv-center">
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.9rem, 4.2vw, 3.8rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.14,
              margin: '0 auto',
              maxWidth: '22ch',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: '-0.005em',
              textWrap: 'balance',
            }}
          >
            <SplitText>{`O casamento de vocês não precisa`}</SplitText>{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                fontWeight: 'var(--weight-regular)',
              }}
            >
              <SplitText delay={400}>{`estar em crise`}</SplitText>
            </em>{' '}
            <SplitText delay={800}>{`para precisar evoluir.`}</SplitText>
          </h2>
        </Reveal>

        {/* Subtexto — restauração riscado, evolução sublinhado */}
        <Reveal delay={2} style={{ marginTop: 'var(--space-9)' }}>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.1rem, 1.7vw, 1.4rem)',
              fontStyle: 'italic',
              color: 'var(--gold-300)',
              lineHeight: 1.4,
              margin: '0 auto',
              maxWidth: '38ch',
              textAlign: 'center',
            }}
          >
            Não trabalhamos com{' '}
            <span className="elv-strike-fast" style={{ position: 'relative', display: 'inline-block' }}>
              restauração
            </span>
            .
            <br />
            <span style={{ color: 'var(--white-warm)', fontStyle: 'normal', fontWeight: 500 }}>
              Trabalhamos com{' '}
              <span
                className="elv-underline-gold"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                evolução
              </span>
              .
            </span>
          </p>
        </Reveal>

        {/* Ornamento diamante ancora */}
        <Reveal delay={3} style={{ marginTop: 'var(--space-9)' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Ornament variant="diamond" tone="gold" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
