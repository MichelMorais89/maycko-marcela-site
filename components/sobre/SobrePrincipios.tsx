import { Reveal } from '@/components/shared/Reveal'
import { Ornament } from '@/components/shared/Ornament'

const PRINCIPIOS = [
  {
    numero: '01',
    titulo: 'Construção antes de sorte',
    descricao:
      'Relacionamentos extraordinários são resultado de decisões intencionais, não de circunstâncias favoráveis.',
  },
  {
    numero: '02',
    titulo: 'Presença antes de resultado',
    descricao:
      'O que você constrói juntos vale mais do que o que você entrega separados. Presença é o maior ativo de um casal.',
  },
  {
    numero: '03',
    titulo: 'Aliança antes de individualidade',
    descricao:
      'Dois crescem mais do que um quando a aliança é o ponto de partida, não a consequência do sucesso.',
  },
  {
    numero: '04',
    titulo: 'Estrutura antes de intuição',
    descricao:
      'A emoção indica o destino; a estrutura determina o caminho. Casamentos duradouros têm método, não apenas sentimento.',
  },
  {
    numero: '05',
    titulo: 'Legado antes de patrimônio',
    descricao:
      'O que você deixa para seus filhos não é o que acumulou, mas o que eles viram você construir junto.',
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
          background: 'color-mix(in srgb, var(--wine-800, #2d0914) 60%, transparent)',
          border: '1px solid color-mix(in srgb, var(--gold-500) 20%, transparent)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-7) var(--space-6)',
          overflow: 'hidden',
          width: '100%',
          minHeight: '100%',
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
            opacity: 0.18,
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
            color: 'var(--white-warm)',
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
            color: 'color-mix(in srgb, var(--white-warm) 65%, transparent)',
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

export function SobrePrincipios() {
  return (
    <section
      style={{
        background: 'var(--surface-wine, #3d0f1f)',
        paddingBlock: 'clamp(6rem, 12vw, 10rem)',
      }}
    >
      <div className="elv-wrap">
        {/* Cabeçalho */}
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-12)' }}>
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
                color: 'var(--gold-400)',
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
              color: 'var(--white-warm)',
              margin: 0,
              maxWidth: '24ch',
              textWrap: 'balance',
            }}
          >
            Princípios que{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
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
