import Link from 'next/link'
import { Reveal } from '@/components/shared/Reveal'
import { Photo } from '@/components/shared/Photo'

const MENTORS = [
  {
    foto: '/photos/mentor-marcela.jpg',
    nome: 'Marcela',
    alt: 'Marcela — mentora',
    role: 'Mentora & Co-fundadora',
    bio: 'Especialista em dinâmicas relacionais, comunicação não-violenta e desenvolvimento feminino. Guia mulheres e casais para além do automático.',
  },
  {
    foto: '/photos/mentor-maycko.jpg',
    nome: 'Maycko',
    alt: 'Maycko — mentor',
    role: 'Mentor & Co-fundador',
    bio: 'Empreendedor serial, estrategista de negócios e especialista em performance masculina. Alia resultados profissionais com presença plena no lar.',
  },
]

export function Mentores() {
  return (
    <section className="elv-sec elv-sec--cream">
      <div className="elv-wrap">
        <Reveal className="elv-center" style={{ marginBottom: 'var(--space-10)' }}>
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
            Quem conduz
          </p>
          <h2
            className="elv-serif elv-fluid-h2"
            style={{ color: 'var(--text-strong)', margin: 0 }}
          >
            Marcela &{' '}
            <span className="elv-ital-warm" style={{ fontStyle: 'italic' }}>
              Maycko
            </span>
          </h2>
          <p
            className="elv-lead elv-fluid-lead elv-measure"
            style={{ marginTop: 'var(--space-5)', textAlign: 'center' }}
          >
            Juntos há mais de 20 anos, casados há 13, pais de três filhos. A Elevem-se nasceu da
            prática — ensinamos o que vivemos e estruturamos.
          </p>
        </Reveal>

        {/* Sticky reveal layout */}
        {MENTORS.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 'var(--space-10)',
              alignItems: 'start',
              marginBottom: 'var(--space-12)',
              direction: i % 2 === 0 ? 'ltr' : 'rtl',
            }}
            className="mentores-row"
          >
            {/* Sticky photo */}
            <div className="elv-sticky-col" style={{ direction: 'ltr' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  position: 'relative',
                }}
              >
                <Photo
                  src={m.foto}
                  alt={m.alt}
                  ratio="3 / 4"
                  position="50% 18%"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>

            {/* Scrolling text */}
            <div style={{ direction: 'ltr', paddingTop: 'var(--space-8)' }}>
              <Reveal>
                <p
                  className="elv-sans"
                  style={{
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--wine-600)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {m.role}
                </p>
                <h3
                  className="elv-serif"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    color: 'var(--text-strong)',
                    lineHeight: 1.05,
                    margin: 0,
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {m.nome}
                </h3>
                <span
                  style={{
                    display: 'block',
                    width: 36,
                    height: 1,
                    background: 'var(--gold-500)',
                    margin: 'var(--space-6) 0',
                  }}
                />
              </Reveal>
              <Reveal delay={1}>
                <p
                  className="elv-lead elv-fluid-lead"
                  style={{ maxWidth: '44ch', marginBottom: 'var(--space-8)' }}
                >
                  {m.bio}
                </p>
              </Reveal>
            </div>
          </div>
        ))}

        <div className="elv-center" style={{ marginTop: 'var(--space-2)' }}>
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
      </div>
    </section>
  )
}
