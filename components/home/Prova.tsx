import { Reveal } from '@/components/shared/Reveal'

const STATS = [
  ['+20', 'anos juntos'],
  ['13', 'anos de casamento'],
  ['3', 'filhos'],
  ['100%', 'digital · Brasil'],
] as const

export function Prova() {
  return (
    <section
      className="elv-sec--cream"
      style={{
        paddingBlock: 'var(--space-7)',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div
        className="elv-wrap"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}
      >
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i as 0 | 1 | 2 | 3} style={{ textAlign: 'center' }}>
            <div
              className="elv-serif"
              style={{
                fontSize: 'clamp(2rem, 1.4rem + 2vw, 3rem)',
                color: 'var(--wine-700)',
                lineHeight: 1,
              }}
            >
              {s[0]}
            </div>
            <div
              className="elv-sans elv-muted"
              style={{
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                marginTop: 'var(--space-2)',
              }}
            >
              {s[1]}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
