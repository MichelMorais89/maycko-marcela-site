import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHead } from '@/components/shared/SectionHead'

const FASES = [
  {
    n: 'Fase 01',
    t: 'Elevação Individual',
    d: 'Primeiros 6 meses',
    variant: 'ink' as const,
    items: [
      'Mentalidade e padrões subconscientes',
      'Ressignificação de crenças',
      'Saúde, energia e disciplina',
      'Organização da rotina e do tempo',
    ],
  },
  {
    n: 'Fase 02',
    t: 'Construção do Nós',
    d: 'Encontros + acompanhamento',
    variant: 'wine' as const,
    items: [
      'Comunicação madura',
      'Reconstrução da admiração',
      'Intimidade e conexão',
      'Visão financeira conjunta e legado',
    ],
  },
]

const CARD_STYLES = {
  ink: {
    bg: 'var(--ink-800)',
    rule: 'var(--ink-400)',
    dot: 'var(--ink-400)',
    text: 'var(--ink-100)',
  },
  wine: {
    bg: 'var(--surface-wine)',
    rule: 'var(--rule-gold-on-wine)',
    dot: 'var(--gold-400)',
    text: 'var(--text-on-wine)',
  },
}

export function MetodoResumo() {
  return (
    <section className="elv-sec elv-sec--page">
      <div className="elv-wrap">
        <Reveal className="elv-center">
          <SectionHead
            align="center"
            eyebrow="O método"
            title="Doze meses, em duas fases"
            lead="Seis meses de encontros e seis meses de acompanhamento. Primeiro cada um se eleva; depois, juntos, vocês constroem o nós."
          />
        </Reveal>

        <div
          className="elv-grid-2 elv-grid-2-sm"
          style={{ marginTop: 'var(--space-9)', alignItems: 'stretch' }}
        >
          {FASES.map((f, i) => {
            const s = CARD_STYLES[f.variant]
            return (
              <Reveal key={i} delay={i as 0 | 1} as="div" style={{ display: 'flex' }}>
                <div
                  className="elv-lift"
                  style={{
                    background: s.bg,
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-8)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                    width: '100%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span
                      className="elv-serif"
                      style={{ fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--gold-300)', whiteSpace: 'nowrap' }}
                    >
                      {f.n}
                    </span>
                    <span
                      className="elv-sans"
                      style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gold-300)' }}
                    >
                      {f.d}
                    </span>
                  </div>
                  <h3
                    className="elv-serif"
                    style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-2xl)', color: 'var(--white-warm)', margin: 0 }}
                  >
                    {f.t}
                  </h3>
                  <span style={{ width: 30, height: 1, background: s.rule }} />
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {f.items.map((it, j) => (
                      <li
                        key={j}
                        className="elv-sans"
                        style={{
                          fontSize: 'var(--text-sm)',
                          lineHeight: 'var(--leading-normal)',
                          color: s.text,
                          paddingLeft: 18,
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 9,
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: s.dot,
                          }}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="elv-center" style={{ marginTop: 'var(--space-8)' }}>
          <Link
            href="/metodo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 20px',
              borderRadius: 'var(--radius-pill)',
              background: 'transparent',
              color: 'var(--wine-700)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Ver o método completo →
          </Link>
        </div>
      </div>
    </section>
  )
}
