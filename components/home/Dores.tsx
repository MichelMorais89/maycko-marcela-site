import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

const PAINS = [
  'Conversam menos e discutem pelos mesmos motivos de sempre.',
  'Resolvem os problemas, mas não evoluem com eles.',
  'A rotina engoliu a admiração que um tinha pelo outro.',
  'O dinheiro, às vezes, gera uma tensão silenciosa.',
  'Não querem se separar. Mas também não querem envelhecer no automático.',
]

export function Dores() {
  return (
    <section
      className="elv-sec dores-sec"
      style={{
        position: 'relative',
        minHeight: '110vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--surface-wine-deep)',
        paddingBlock: 'clamp(80px, 12vw, 140px)',
      }}
    >
      {/* Foto full-bleed — casal fisicamente deslocado pra direita via inner container */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '22%',
            right: '-22%',
          }}
        >
          <Image
            src="/photos/dores-couple-hug-bw.jpg"
            alt=""
            fill
            sizes="120vw"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 22%',
              filter: 'grayscale(10%) contrast(1.1) brightness(0.98)',
            }}
          />
        </div>
        {/* Overlay em "muro" — bloqueia esquerda até ~55%, casal só aparece à direita */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(28,10,16,0.98) 0%, rgba(28,10,16,0.97) 42%, rgba(28,10,16,0.88) 52%, rgba(28,10,16,0.50) 62%, rgba(28,10,16,0.12) 78%, rgba(28,10,16,0) 95%)',
          }}
        />
        {/* Vinheta inferior sutil pra ancorar a foto no bloco */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 65%, rgba(28,10,16,0.55) 100%)',
          }}
        />
      </div>

      {/* Content — coluna ESQUERDA com respiro maior (não no canto) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '500px',
          paddingLeft: 'clamp(44px, 8vw, 132px)',
          paddingRight: 'clamp(24px, 4vw, 40px)',
        }}
      >
        <Reveal>
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 600,
              marginBottom: 'var(--space-5)',
            }}
          >
            Talvez vocês reconheçam
          </p>

          {/* Título — reduzido, respirando melhor */}
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.65rem, 3.4vw, 3rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.12,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
              maxWidth: '18ch',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>
              <SplitText delay={100}>Vocês se amam.</SplitText>
            </span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              <SplitText delay={400}>Mas o relacionamento</SplitText>
            </span>{' '}
            <SplitText delay={600}>está</SplitText>{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--gold-400)',
                fontWeight: 'var(--weight-regular)',
              }}
            >
              <SplitText delay={800}>apenas funcionando.</SplitText>
            </em>
          </h2>
        </Reveal>

        <Reveal
          delay={1}
          as="ul"
          style={{
            listStyle: 'none',
            margin: 'var(--space-9) 0 0',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px, 2.4vw, 28px)',
            maxWidth: '52ch',
          }}
        >
          {PAINS.map((p, i) => (
            <li
              key={i}
              className="elv-sans"
              style={{
                display: 'flex',
                gap: 'var(--space-4)',
                alignItems: 'flex-start',
                fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'rgba(255,248,235,0.85)',
                paddingBottom: 'clamp(20px, 2.4vw, 28px)',
                borderBottom:
                  i < PAINS.length - 1 ? '1px solid rgba(184,140,72,0.18)' : 'none',
              }}
            >
              <Ornament variant="diamond" tone="gold" style={{ marginTop: 8 }} />
              <span>{p}</span>
            </li>
          ))}
        </Reveal>

        <Reveal delay={2} style={{ marginTop: 'var(--space-9)' }}>
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.15rem, 1.9vw, 1.55rem)',
              color: 'var(--gold-300)',
              fontStyle: 'italic',
              lineHeight: 1.35,
              margin: 0,
              maxWidth: '34ch',
            }}
          >
            Talvez o problema nunca tenha sido falta de amor.
            <br />
            <span style={{ color: 'var(--white-warm)' }}>Talvez tenha sido falta de direção.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
