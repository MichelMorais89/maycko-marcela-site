import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHead } from '@/components/shared/SectionHead'
import { TiltCard } from '@/components/motion/TiltCard'
import { SplitText } from '@/components/motion/SplitText'

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
  {
    n: 'Resultado',
    t: 'Legado em Casal',
    d: '12 meses',
    variant: 'gold' as const,
    items: [
      'Decisões financeiras alinhadas',
      'Casamento como ativo estratégico',
      'Rotina com propósito e presença',
      'Impacto que dura gerações',
    ],
  },
]

const CARD_STYLES = {
  ink: {
    bg: 'var(--ink-800)',
    rule: 'var(--ink-400)',
    dot: 'var(--ink-400)',
    text: 'var(--ink-100)',
    label: 'var(--gold-300)',
  },
  wine: {
    bg: 'var(--surface-wine)',
    rule: 'var(--rule-gold-on-wine)',
    dot: 'var(--gold-400)',
    text: 'var(--text-on-wine)',
    label: 'var(--gold-300)',
  },
  gold: {
    bg: 'var(--gold-800, #3d2a0a)',
    rule: 'var(--gold-400)',
    dot: 'var(--gold-300)',
    text: 'var(--gold-100, #faf3e0)',
    label: 'var(--gold-300)',
  },
}

export function MetodoResumo() {
  return (
    <section className="elv-sec elv-sec--page elv-sec--metodo-texture" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="elv-wrap">
        {/* Foto flutuante lateral — Marcela kimono */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 18vw, 280px)',
            aspectRatio: '3 / 5',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            opacity: 0.18,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          className="metodo-kimono-float"
        >
          <Image
            src="/photos/metodo-marcela-kimono.jpg"
            alt=""
            fill
            sizes="280px"
            style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
          />
        </div>

        <Reveal className="elv-center" style={{ position: 'relative', zIndex: 1 }}>
          <p
            className="elv-sans"
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--wine-600)',
              marginBottom: 'var(--space-4)',
            }}
          >
            O método
          </p>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{ color: 'var(--text-strong)', margin: '0 auto var(--space-5)', maxWidth: '22ch', textAlign: 'center' }}
          >
            <SplitText delay={100}>
              Doze meses, em duas fases
            </SplitText>
          </h2>
          <p className="elv-lead elv-fluid-lead" style={{ textAlign: 'center', maxWidth: '48ch', margin: '0 auto' }}>
            Seis meses de encontros e seis meses de acompanhamento. Primeiro cada um se eleva; depois, juntos, vocês constroem o nós.
          </p>
        </Reveal>

        {/* Mobile: horizontal snap scroll | Desktop: grid */}
        <div
          aria-label="Fases do método"
          className="elv-hscroll md:grid md:grid-cols-3"
          style={{ marginTop: 'var(--space-9)' }}
        >
          {FASES.map((f, i) => {
            const s = CARD_STYLES[f.variant]
            return (
              <TiltCard
                key={i}
                className={`elv-hscroll-item md:min-w-0 elv-card-float`}
                style={{ height: '100%' }}
              >
                <div
                  style={{
                    background: s.bg,
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-8)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                    height: '100%',
                    borderTop: '1px solid rgba(184,140,72,0.35)',
                    boxShadow: '0 8px 24px rgba(42,16,22,0.08), 0 24px 64px rgba(42,16,22,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      className="elv-serif"
                      style={{
                        fontStyle: 'italic',
                        fontSize: 'var(--text-lg)',
                        color: s.label,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {f.n}
                    </span>
                    <span
                      className="elv-sans"
                      style={{
                        fontSize: 'var(--text-2xs)',
                        letterSpacing: 'var(--tracking-wide)',
                        textTransform: 'uppercase',
                        color: s.label,
                      }}
                    >
                      {f.d}
                    </span>
                  </div>
                  <h3
                    className="elv-serif"
                    style={{
                      fontWeight: 'var(--weight-semibold)',
                      fontSize: 'var(--text-2xl)',
                      color: 'var(--white-warm)',
                      margin: 0,
                    }}
                  >
                    {f.t}
                  </h3>
                  <span style={{ width: 30, height: 1, background: s.rule }} />
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: 0,
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-3)',
                    }}
                  >
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
              </TiltCard>
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
