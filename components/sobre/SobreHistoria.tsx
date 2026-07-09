import { Reveal } from '@/components/shared/Reveal'
import { Photo } from '@/components/shared/Photo'
import { Ornament } from '@/components/shared/Ornament'

const PARAGRAFOS = [
  'Nos conhecemos jovens, carregando cada um a sua própria história — sonhos, inseguranças e a certeza de que havia algo maior reservado para a nossa vida juntos.',
  'Ao longo dos anos, construímos uma família: somos casados há treze anos e pais de três filhos. O que a maioria vê de fora — a parceria, a consistência, o crescimento — custou decisão, estrutura e muito trabalho conjunto.',
  'A empresa nasceu da nossa jornada. Percebemos que muitos casais enfrentavam os mesmos dilemas que vivemos: como crescer profissionalmente sem perder a conexão? Como construir um legado sem sacrificar o presente? Como alinhar sonhos individuais em um projeto comum?',
  'A Elevem-se não surgiu de uma teoria. Surgiu da prática — dos acertos, dos ajustes, das conversas difíceis e dos marcos que comemoramos juntos.',
  'Hoje acompanhamos centenas de casais que decidiram parar de existir no piloto automático e passaram a construir, de forma intencional, relacionamentos e famílias extraordinárias.',
]

export function SobreHistoria() {
  return (
    <section className="elv-sec elv-sec--cream" style={{ paddingBlock: 'clamp(5rem, 10vw, 8rem)' }}>
      <div className="elv-wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(3rem, 8vw, 7rem)',
            alignItems: 'stretch',
          }}
        >
          {/* Foto casal (nova #45 navy) — com sway */}
          <Reveal style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="elv-photo-sway" style={{ position: 'relative', flexGrow: 1, minHeight: '400px', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <Photo
                src="/photos/mentores-couple-warm.jpg"
                alt="Maycko e Marcela — mentores em ação"
                ratio="4 / 5"
                position="50% 22%"
                sizes="(max-width: 768px) 100vw, 44vw"
                priority
              />
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <Reveal style={{ marginBottom: 'var(--space-8)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                <Ornament variant="rule" ruleWidth={32} tone="gold" />
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.85rem)',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-600, #8a6a2c)',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Nossa história
                </p>
              </div>
              <h2
                className="elv-serif elv-fluid-h2"
                style={{
                  color: 'var(--text-strong)',
                  margin: 0,
                  marginBottom: 'var(--space-8)',
                  maxWidth: '20ch',
                }}
              >
                Ensinamos o que{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--wine-600)' }}>
                  construímos
                </em>
              </h2>
            </Reveal>

            <Reveal
              as="div"
              delay={1}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}
            >
              {PARAGRAFOS.map((p, i) => (
                <p
                  key={i}
                  className="elv-sans"
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
                    color: 'var(--text-body)',
                    lineHeight: 'var(--leading-relaxed)',
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={2} style={{ marginTop: 'var(--space-8)' }}>
              <Ornament tone="gold" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
