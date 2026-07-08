import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHead } from '@/components/shared/SectionHead'
import { SplitText } from '@/components/motion/SplitText'

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
        {/* Foto BW flutuante com mask-image — sem caixa retangular */}
        <Reveal
          className="dores-photo elv-photo-float"
          style={{
            position: 'relative',
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
              objectPosition: '50% 22%',
              filter: 'grayscale(10%) contrast(1.08)',
              mixBlendMode: 'screen',
            }}
          />
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <p
              className="elv-sans"
              style={{
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Talvez você reconheça
            </p>
            <h2
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                color: 'var(--white-warm)',
                lineHeight: 1.1,
                margin: '0 0 var(--space-5)',
                maxWidth: '22ch',
              }}
            >
              <SplitText delay={100}>
                Vocês se amam. Mas sabem que poderiam estar melhores.
              </SplitText>
            </h2>
            <p
              className="elv-sans"
              style={{
                fontSize: 'var(--text-md)',
                color: 'rgba(255,248,235,0.70)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '44ch',
              }}
            >
              A casa funciona, os filhos estão bem, o trabalho anda. Mas o relacionamento está apenas funcionando.
            </p>
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
