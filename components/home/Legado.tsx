import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const FORGET_LINES = [
  'todas as reuniões que participaram',
  'cada contrato fechado',
  'cada meta alcançada',
]

const REMEMBER_LINES = [
  'as conversas ao redor da mesa',
  'as viagens',
  'os abraços',
  'os momentos em família',
  'as histórias construídas juntos',
]

export function Legado() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Vídeo full-bleed, legado começa aqui */}
      <video
        src="/videos/legado-inicio.mp4"
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
          objectPosition: '30% 50%',
        }}
      />
      {/* Overlay: escurece à direita pra copy respirar */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to left, rgba(42,16,22,0.95) 0%, rgba(42,16,22,0.82) 45%, rgba(42,16,22,0.28) 100%)',
        }}
      />

      <div
        className="elv-wrap mobile-stack"
        style={{
          position: 'relative',
          paddingBlock: 'clamp(80px, 12vh, 140px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-8)',
          alignItems: 'center',
        }}
      >
        {/* Espaço vazio à esquerda (foto do casal aparece nele) */}
        <div aria-hidden="true" className="mobile-hide" />

        {/* Coluna direita, copy */}
        <div style={{ maxWidth: '520px' }}>
          <Reveal>
            <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)', opacity: 0.9 }} />
            <p
              className="elv-sans"
              style={{
                fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Legado começa aqui
            </p>
          </Reveal>

          {/* Bloco 1, o que NÃO se lembra */}
          <Reveal delay={1} style={{ marginTop: 'var(--space-7)' }}>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
                fontStyle: 'italic',
                color: 'rgba(255,248,235,0.55)',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Vocês dificilmente lembrarão de
            </p>
            <ul
              style={{
                listStyle: 'none',
                margin: 'var(--space-4) 0 0',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}
            >
              {FORGET_LINES.map((line, i) => {
                // Duração proporcional ao comprimento da frase, como se lesse, um pouco mais rápido
                const charDurationMs = 32
                const duration = Math.max(900, line.length * charDurationMs)
                // Delay: começa após a linha anterior
                const priorDuration = FORGET_LINES
                  .slice(0, i)
                  .reduce((acc, l) => acc + Math.max(900, l.length * charDurationMs) + 220, 0)
                const delay = 800 + priorDuration
                return (
                  <li
                    key={i}
                    className="elv-sans elv-strike"
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: 'fit-content',
                      fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                      color: 'rgba(255,248,235,0.55)',
                      lineHeight: 'var(--leading-relaxed)',
                      ['--strike-delay' as string]: `${delay}ms`,
                      ['--strike-duration' as string]: `${duration}ms`,
                    }}
                  >
                    {line}
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* Bloco 2, o que SE lembra (destaque) */}
          <Reveal delay={2} style={{ marginTop: 'var(--space-8)' }}>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                color: 'var(--gold-300)',
                fontStyle: 'italic',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              Mas lembrarão
            </p>
            <ul
              style={{
                listStyle: 'none',
                margin: 'var(--space-4) 0 0',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              {REMEMBER_LINES.map((line, i) => (
                <li
                  key={i}
                  className="elv-serif"
                  style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    fontSize: 'clamp(1.15rem, 1.7vw, 1.5rem)',
                    color: 'var(--white-warm)',
                    lineHeight: 1.3,
                    fontStyle: 'italic',
                  }}
                >
                  <Ornament variant="diamond" tone="gold" style={{ marginTop: 10 }} />
                  <SplitText delay={i * 100}>{line}</SplitText>
                </li>
              ))}
            </ul>
          </Reveal>

          <div style={{ margin: 'var(--space-9) 0 var(--space-5)' }}>
            <Ornament tone="gold" style={{ opacity: 0.85 }} />
          </div>

          <Reveal delay={3}>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.2rem, 1.9vw, 1.6rem)',
                lineHeight: 1.35,
                color: 'var(--gold-300)',
                margin: 0,
                maxWidth: '32ch',
                fontStyle: 'italic',
              }}
            >
              Porque patrimônio pode ser herdado.
              <br />
              <span style={{ color: 'var(--white-warm)', fontStyle: 'normal', fontWeight: 500 }}>
                Um casamento saudável também.
              </span>
            </p>
            <p
              className="elv-sans"
              style={{
                marginTop: 'var(--space-6)',
                fontSize: 'clamp(0.72rem, 0.68rem + 0.2vw, 0.85rem)',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                fontWeight: 600,
              }}
            >
              Esse é o legado que atravessa gerações
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
