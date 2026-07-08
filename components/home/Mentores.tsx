import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHead } from '@/components/shared/SectionHead'
import { Photo } from '@/components/shared/Photo'

export function Mentores() {
  return (
    <section className="elv-sec elv-sec--cream">
      <div className="elv-wrap elv-split elv-split--media-first">
        <Reveal>
          <Photo
            src="/photos/mentor-marcela.jpg"
            alt="Marcela e Maycko"
            ratio="4 / 5"
            position="50% 18%"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={1}>
          <SectionHead
            eyebrow="Quem conduz"
            title="Marcela & Maycko"
            lead="Juntos há mais de 20 anos, casados há 13, pais de três filhos. Já atravessamos as fases difíceis — e escolhemos crescer. A Elevem-se nasceu da prática, não da teoria: ensinamos o que vivemos e estruturamos."
          />
          <div style={{ marginTop: 'var(--space-7)' }}>
            <span
              className="elv-serif"
              style={{
                fontStyle: 'italic',
                fontSize: 'var(--text-md)',
                color: 'var(--wine-700)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Marcela <span style={{ color: 'var(--gold-500)', fontStyle: 'normal' }}>&</span> Maycko
            </span>
          </div>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Link
              href="/sobre"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--gold-500)',
                color: 'var(--wine-700)',
                background: 'transparent',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Conhecer a história
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
