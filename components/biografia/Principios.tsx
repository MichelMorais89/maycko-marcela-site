import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'

const PRINCIPIOS = [
  {
    numero: '01',
    titulo: 'A transformação sempre começa em nós.',
    descricao:
      'Antes de fortalecermos um relacionamento, fortalecemos cada indivíduo. Porque acreditamos que casamentos saudáveis são construídos por pessoas emocionalmente saudáveis.',
  },
  {
    numero: '02',
    titulo: 'Amar é uma decisão que fazemos todos os dias.',
    descricao:
      'Para nós, um relacionamento sólido não se sustenta apenas pelo sentimento, mas pelas escolhas conscientes, pelo respeito e pelo compromisso diário de evoluir juntos.',
  },
  {
    numero: '03',
    titulo: 'Construímos de dentro para fora.',
    descricao:
      'Trabalhamos mente, espírito, corpo e prosperidade porque sabemos que uma vida equilibrada é o alicerce de um relacionamento forte e duradouro.',
  },
  {
    numero: '04',
    titulo: 'Prosperidade só faz sentido quando fortalece a família.',
    descricao:
      'Acreditamos que sucesso não deve custar a saúde, o casamento ou os filhos. Crescer vale a pena quando todas as áreas da vida crescem juntas.',
  },
  {
    numero: '05',
    titulo: 'Vivemos aquilo que queremos deixar como legado.',
    descricao:
      'Mais do que ensinar, escolhemos viver pelo exemplo. Sabemos que as maiores transformações acontecem quando nossos valores são vistos no dia a dia, dentro de casa.',
  },
]

type Principio = (typeof PRINCIPIOS)[number]

function PrincipioCard({ p, delay }: { p: Principio; delay: 0 | 1 | 2 | 3 }) {
  return (
    <Reveal delay={delay} style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div
        className="elv-hover-card"
        style={{
          position: 'relative',
          background: 'rgba(255,255,255,0.5)',
          border: '1px solid rgba(194,161,77,0.32)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-7) var(--space-6)',
          overflow: 'hidden',
          width: '100%',
          minHeight: '100%',
          boxShadow: '0 6px 24px rgba(60,25,35,0.06)',
        }}
      >
        <span
          aria-hidden="true"
          className="elv-serif"
          style={{
            position: 'absolute',
            top: 'var(--space-4)',
            right: 'var(--space-5)',
            fontSize: '4.5rem',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--gold-500) 0%, var(--gold-700, #7a5c24) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.28,
            userSelect: 'none',
          }}
        >
          {p.numero}
        </span>

        <div style={{ marginBottom: 'var(--space-5)' }}>
          <Ornament variant="diamond" tone="gold" />
        </div>

        <h3
          className="elv-serif"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: 'var(--text-strong, #2E2A2B)',
            lineHeight: 1.25,
            margin: 0,
            marginBottom: 'var(--space-4)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          {p.titulo}
        </h3>
        <p
          className="elv-sans"
          style={{
            fontSize: 'clamp(0.875rem, 1vw, 0.95rem)',
            color: 'var(--text-body, #4D4748)',
            lineHeight: 'var(--leading-relaxed)',
            margin: 0,
          }}
        >
          {p.descricao}
        </p>
      </div>
    </Reveal>
  )
}

export function BiografiaPrincipios() {
  return (
    <section
      style={{
        background: 'var(--surface-bege, #EDE3CF)',
        paddingBlock: 'clamp(4rem, 7vw, 6rem)',
      }}
    >
      <div className="elv-wrap">
        {/* Cabeçalho */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-8)' }}>
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
                color: 'var(--text-gold, #735422)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              O que acreditamos
            </p>
            <Ornament variant="rule" ruleWidth={32} tone="gold" />
          </div>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{
              color: 'var(--text-strong, #2E2A2B)',
              margin: 0,
              maxWidth: '24ch',
              textWrap: 'balance',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            Princípios que{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)', fontWeight: 'var(--weight-regular)' }}>
              guiam tudo
            </em>
          </h2>
        </Reveal>

        {/* Grid de princípios: 3 em cima + 2 embaixo centralizados */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
          }}
        >
          {/* Linha 1: 3 cards */}
          <div
            className="mobile-stack-tight"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-6)',
            }}
          >
            {PRINCIPIOS.slice(0, 3).map((p, i) => (
              <PrincipioCard key={p.numero} p={p} delay={(i % 4) as 0 | 1 | 2 | 3} />
            ))}
          </div>

          {/* Linha 2: 2 cards centralizados no meio, mesmo tamanho da linha 1 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 'var(--space-6)',
              flexWrap: 'wrap',
            }}
          >
            {PRINCIPIOS.slice(3).map((p, i) => (
              <div
                key={p.numero}
                style={{
                  flex: '0 1 calc((100% - 2 * var(--space-6)) / 3)',
                  minWidth: 280,
                  display: 'flex',
                  alignSelf: 'stretch',
                }}
              >
                <PrincipioCard p={p} delay={((i + 3) % 4) as 0 | 1 | 2 | 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
