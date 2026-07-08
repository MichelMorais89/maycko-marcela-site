import { Reveal } from '@/components/shared/Reveal'
import { CountUp } from '@/components/motion/CountUp'

const STATS = [
  { value: 20, suffix: '+', label: 'anos juntos' },
  { value: 13, suffix: '', label: 'anos de casamento' },
  { value: 3, suffix: '', label: 'filhos' },
  { value: 100, suffix: '%', label: 'digital · Brasil' },
]

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
              <CountUp to={s.value} suffix={s.suffix} />
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
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
