import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'

const CONQUISTAS = [
  { titulo: 'Patrimônio comum', desc: 'Decisões financeiras alinhadas, visão de longo prazo partilhada.' },
  { titulo: 'Presença plena', desc: 'Estar completamente disponível para o outro no dia a dia.' },
  { titulo: 'Decisões unificadas', desc: 'A mesma direção, mesmo sob pressão, mesmo sem tempo.' },
  { titulo: 'Intimidade real', desc: 'Profunda, honesta — nos três níveis que sustentam um casamento.' },
  { titulo: 'Legado', desc: 'Um casamento que passa para os filhos como modelo, não como aviso.' },
]

export function ResultadoMetodo() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Foto full-bleed */}
      <Image
        src="/photos/stock/conquista-casal-praia.jpg"
        alt="Casal em conquista — intimidade, presença e destino"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: '55% 40%' }}
        priority={false}
      />

      {/* Overlay: escuro à esquerda (casal respira), creme sólido à direita (copy vinho ganha contraste) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(10,5,8,0.55) 0%, rgba(20,10,14,0.35) 30%, rgba(245,232,208,0.92) 55%, var(--surface-cream, #f5e8d0) 72%)',
        }}
      />
      {/* Vinheta superior/inferior pra dar profundidade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,5,8,0.35) 0%, transparent 20%, transparent 82%, rgba(10,5,8,0.28) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="elv-wrap resultado-grid"
        style={{
          position: 'relative',
          paddingBlock: 'clamp(80px, 12vh, 140px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-8)',
          alignItems: 'center',
        }}
      >
        {/* Espaço vazio à esquerda — foto respira (hidden on mobile) */}
        <div aria-hidden="true" className="resultado-spacer" />

        {/* Coluna direita — copy */}
        <div style={{ maxWidth: 520 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <Ornament variant="rule" ruleWidth={36} tone="gold" style={{ opacity: 0.75 }} />
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(0.72rem, 0.68rem + 0.2vw, 0.85rem)',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--wine-700, #5a0f1e)',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                O que vocês conquistam
              </p>
            </div>

            <h2
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 3rem)',
                color: 'var(--wine-800, #3d0a14)',
                lineHeight: 1.1,
                margin: '0 0 var(--space-8)',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                fontWeight: 'var(--weight-medium)',
                textWrap: 'balance',
              }}
            >
              <SplitText>Ao final de doze</SplitText>{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #7a1c2e)', fontWeight: 'var(--weight-regular)' }}>
                <SplitText delay={400}>meses.</SplitText>
              </em>
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <ul
              style={{
                listStyle: 'none',
                margin: '0 0 var(--space-9)',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-5)',
              }}
            >
              {CONQUISTAS.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start',
                  }}
                >
                  <Ornament variant="diamond" tone="gold" style={{ marginTop: 8, flexShrink: 0 }} />
                  <div>
                    <p
                      className="elv-serif"
                      style={{
                        fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                        fontWeight: 'var(--weight-medium)',
                        color: 'var(--wine-800, #3d0a14)',
                        margin: '0 0 var(--space-1)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {c.titulo}
                    </p>
                    <p
                      className="elv-sans"
                      style={{
                        fontSize: 'clamp(0.88rem, 1.1vw, 0.98rem)',
                        color: 'rgba(61,10,20,0.85)',
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <Ornament tone="gold" style={{ opacity: 0.75 }} />
            </div>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.2rem, 1.9vw, 1.55rem)',
                fontStyle: 'italic',
                color: 'var(--wine-700, #5a0f1e)',
                lineHeight: 1.35,
                margin: '0 0 var(--space-8)',
                maxWidth: '34ch',
              }}
            >
              Não é o casamento perfeito que você constrói.
              <br />
              <span style={{ color: 'var(--wine-800, #3d0a14)', fontStyle: 'normal', fontWeight: 600 }}>
                É o casamento que dura — com intenção.
              </span>
            </p>

            <ShimmerCTA href="/mentoria">Ver detalhes da mentoria</ShimmerCTA>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .resultado-grid {
            grid-template-columns: 1fr !important;
          }
          .resultado-spacer {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
