import Image from 'next/image'
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
    <section
      className="elv-sec dores-sec"
      style={{ background: 'var(--surface-wine-deep)', overflow: 'hidden' }}
    >
      <div
        className="elv-wrap dores-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-10)', alignItems: 'center' }}
      >
        {/* Foto BW lateral */}
        <Reveal
          className="dores-photo"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '4 / 5',
            maxWidth: 460,
            margin: '0 auto',
          }}
        >
          <Image
            src="/photos/dores-couple-hug-bw.jpg"
            alt="Casal em abraço — empatia contemplativa"
            fill
            sizes="(max-width: 900px) 90vw, 40vw"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 25%',
              filter: 'grayscale(15%) contrast(1.05)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 55%, rgba(42,16,22,0.62) 100%)',
            }}
          />
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <SectionHead
              eyebrow="Talvez você reconheça"
              title="Vocês se amam. Mas sabem que poderiam estar melhores."
              lead="A casa funciona, os filhos estão bem, o trabalho anda. Mas o relacionamento está apenas funcionando."
              tone="light"
            />
          </Reveal>
          <Reveal
            delay={1}
            as="div"
            style={{ display: 'flex', flexDirection: 'column', marginTop: 'var(--space-7)' }}
          >
            {PAINS.map((p, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-4) 0',
                  borderBottom:
                    i < PAINS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="elv-serif"
                  style={{
                    fontStyle: 'italic',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--gold-400)',
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
                    color: 'rgba(255,248,235,0.80)',
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
