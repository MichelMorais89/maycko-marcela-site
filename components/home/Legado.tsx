import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'

export function Legado() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '64vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/photos/legado-couple-white.jpg"
        alt="Maycko e Marcela"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: '50% 24%' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(42,16,22,0.94) 8%, rgba(42,16,22,0.5) 48%, rgba(42,16,22,0.28) 100%)',
        }}
      />
      <div className="elv-wrap" style={{ position: 'relative', paddingBlock: 'var(--space-10)' }}>
        <Reveal>
          <Eyebrow tone="onWine">Legado</Eyebrow>
          <h2
            className="elv-h elv-h--light elv-fluid-h1"
            style={{ marginTop: 'var(--space-4)', maxWidth: '24ch' }}
          >
            No fim, ninguém é lembrado pelo que acumulou — e sim pela forma como amou, construiu e
            sustentou o próprio casamento.
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
