import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'

export function FinalCta() {
  return (
    <section className="elv-sec elv-sec--page">
      <div className="elv-wrap elv-wrap--md elv-center">
        <Reveal className="elv-center">
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'var(--wine-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--space-5)',
            }}
          >
            <span
              className="elv-serif"
              style={{ color: 'var(--gold-300)', fontSize: 'var(--text-lg)', fontStyle: 'italic' }}
            >
              E
            </span>
          </div>

          <Eyebrow>A decisão é estratégica</Eyebrow>

          <h2
            className="elv-h elv-fluid-h1"
            style={{ marginTop: 'var(--space-4)', maxWidth: '20ch' }}
          >
            Se o casamento de vocês pode viver em outro nível
          </h2>

          <p
            className="elv-lead elv-fluid-lead"
            style={{ marginTop: 'var(--space-5)', maxWidth: '46ch' }}
          >
            Preencham a aplicação. Se houver alinhamento, vocês entram. Se não, indicamos o melhor
            caminho.
          </p>

          <div
            className="elv-row"
            style={{ justifyContent: 'center', marginTop: 'var(--space-7)' }}
          >
            <Link
              href="/mentoria#aplicar"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 28px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--action-primary)',
                color: 'var(--white-warm)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background var(--duration-fast) var(--ease-standard)',
              }}
            >
              Quero aplicar
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
