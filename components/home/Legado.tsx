import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { SplitText } from '@/components/motion/SplitText'

export function Legado() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '68vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* AC5: objectPosition reposicionado — casal no canto direito, 45%+ espaço livre à esquerda */}
      <Image
        src="/photos/legado-couple-white.jpg"
        alt="Maycko e Marcela"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: '82% 28%' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(42,16,22,0.92) 0%, rgba(42,16,22,0.75) 50%, rgba(42,16,22,0.20) 100%)',
        }}
      />
      <div
        className="elv-wrap"
        style={{ position: 'relative', paddingBlock: 'var(--space-11)', maxWidth: '580px' }}
      >
        <Reveal>
          <Eyebrow tone="onWine">Legado</Eyebrow>
          <h2
            className="elv-serif"
            style={{
              marginTop: 'var(--space-4)',
              maxWidth: '22ch',
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.12,
              fontWeight: 'var(--weight-medium)',
            }}
          >
            <SplitText delay={100}>
              No fim, ninguém é lembrado pelo que acumulou — e sim pela forma como amou, construiu e sustentou o próprio casamento.
            </SplitText>
          </h2>
          <span
            style={{
              display: 'block',
              width: 36,
              height: 1,
              background: 'var(--gold-500)',
              marginTop: 'var(--space-7)',
            }}
          />
        </Reveal>
      </div>
    </section>
  )
}
