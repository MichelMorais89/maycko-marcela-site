import { Reveal } from '@/components/shared/Reveal'
import { SectionHead } from '@/components/shared/SectionHead'

const PAINS = [
  'Conversam menos — e discutem pelos mesmos motivos de sempre.',
  'Resolvem os problemas, mas não evoluem com eles.',
  'A rotina engoliu a admiração que um tinha pelo outro.',
  'O dinheiro, às vezes, gera uma tensão silenciosa.',
  'Não querem se separar. Mas também não querem envelhecer no automático.',
]

export function Dores() {
  return (
    <section className="elv-sec elv-sec--page">
      <div className="elv-wrap elv-split">
        <Reveal>
          <SectionHead
            eyebrow="Talvez você reconheça"
            title="Vocês se amam. Mas sabem que poderiam estar melhores."
            lead="A casa funciona, os filhos estão bem, o trabalho anda. Mas o relacionamento está apenas funcionando."
          />
        </Reveal>
        <Reveal delay={1} as="div" style={{ display: 'flex', flexDirection: 'column' }}>
          {PAINS.map((p, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 'var(--space-4)',
                padding: 'var(--space-4) 0',
                borderBottom: i < PAINS.length - 1 ? '1px solid var(--border-hairline)' : 'none',
                alignItems: 'baseline',
              }}
            >
              <span
                className="elv-serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gold-600)',
                  minWidth: 34,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className="elv-sans"
                style={{
                  fontSize: 'var(--text-md)',
                  lineHeight: 'var(--leading-normal)',
                  color: 'var(--text-body)',
                  margin: 0,
                }}
              >
                {p}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
