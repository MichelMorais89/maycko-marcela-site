import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Photo } from '@/components/shared/Photo'

export function Hero() {
  return (
    <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)' }}>
      <div className="elv-wrap elv-split elv-split--media-first">
        <Reveal>
          <Eyebrow>Mentoria para casais</Eyebrow>
          <h1
            className="elv-h elv-h--wine elv-fluid-hero"
            style={{ marginTop: 'var(--space-5)' }}
          >
            Casais que crescem juntos não dependem da sorte. Dependem de{' '}
            <span className="elv-ital-warm elv-mark-warm">estrutura.</span>
          </h1>
          <p
            className="elv-lead elv-fluid-lead elv-measure"
            style={{ marginTop: 'var(--space-6)' }}
          >
            Uma mentoria exclusiva para casais que já conquistaram muito — e decidiram que o
            casamento também precisa evoluir no mesmo nível. Em 12 meses, vocês saem do modo
            automático e constroem um relacionamento estruturado, consciente e próspero.
          </p>
          <div className="elv-row" style={{ marginTop: 'var(--space-8)', gap: 'var(--space-4)' }}>
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
            <Link
              href="/metodo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 28px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--gold-500)',
                color: 'var(--wine-700)',
                background: 'transparent',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background var(--duration-fast) var(--ease-standard)',
              }}
            >
              Conhecer o método
            </Link>
          </div>
          <p
            className="elv-sans elv-muted"
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)',
              marginTop: 'var(--space-5)',
              textTransform: 'uppercase',
            }}
          >
            Processo seletivo por aplicação · Poucos casais por ciclo
          </p>
        </Reveal>

        <Reveal delay={1} style={{ position: 'relative' }}>
          <Photo
            src="/photos/hero-couple.jpg"
            alt="Maycko e Marcela"
            ratio="4 / 5"
            position="50% 20%"
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
          <div
            style={{
              position: 'absolute',
              left: 'clamp(-12px, -2vw, -26px)',
              bottom: -26,
              width: 'min(82%, 312px)',
            }}
          >
            <div
              style={{
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                padding: 'var(--space-6)',
              }}
            >
              <span
                className="elv-serif"
                style={{
                  display: 'block',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 'var(--leading-snug)',
                  color: 'var(--text-strong)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Ensinamos o que vivemos e estruturamos.
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span
                  style={{ width: 28, height: 1, background: 'var(--rule-gold)', flexShrink: 0 }}
                />
                <div>
                  <div
                    className="elv-sans"
                    style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}
                  >
                    Maycko &amp; Marcela
                  </div>
                  <div
                    className="elv-sans elv-muted"
                    style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase' }}
                  >
                    Mentores
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
