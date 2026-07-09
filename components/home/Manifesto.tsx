import Image from 'next/image'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'

export function Manifesto() {
  return (
    <section
      className="elv-sec"
      style={{
        background: 'var(--surface-anchor)',
        paddingBlock: 'clamp(80px, 12vw, 140px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora — inicia na base, sobe suave (evita corte no topo) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 20% 95%, rgba(184,140,72,0.14) 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 90% 100%, rgba(122,28,46,0.18) 0%, transparent 68%)',
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)',
        }}
      />

      <div
        className="elv-wrap manifesto-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'stretch',
        }}
      >
        {/* Coluna texto — esquerda */}
        <div>
          <Reveal style={{ marginBottom: 'var(--space-9)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)',
              }}
            >
              <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.8 }} />
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(1rem, 1.15vw, 1.35rem)',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Um instante, uma decisão
              </p>
            </div>
          </Reveal>

          {/* 3 statements grandes */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(36px, 5vw, 64px)',
            }}
          >
            <Reveal>
              <p
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
                  color: 'var(--white-warm)',
                  lineHeight: 1.28,
                  margin: 0,
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: '-0.005em',
                  maxWidth: '30ch',
                }}
              >
                <SplitText>{`Empresas crescem. Carreiras evoluem. Filhos crescem.`}</SplitText>
                <br />
                <em
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--gold-400)',
                  }}
                >
                  <SplitText delay={400}>O patrimônio aumenta.</SplitText>
                </em>
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p
                className="elv-serif"
                style={{
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
                  color: 'var(--white-warm)',
                  lineHeight: 1.28,
                  margin: 0,
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: '-0.005em',
                  maxWidth: '30ch',
                }}
              >
                <SplitText>{`Mas muitos casais percebem, tarde demais, que o relacionamento`}</SplitText>{' '}
                <em
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--gold-400)',
                  }}
                >
                  <SplitText delay={400}>ficou para trás.</SplitText>
                </em>
              </p>
            </Reveal>

            <div aria-hidden="true">
              <Ornament variant="diamond" tone="gold" />
            </div>

            <Reveal delay={2}>
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                  color: 'rgba(255,248,235,0.78)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                  maxWidth: '48ch',
                }}
              >
                A <strong style={{ color: 'var(--gold-300)', fontWeight: 600 }}>Elevem-se</strong> é uma mentoria exclusiva para casais que decidiram crescer juntos em todas as áreas da vida.
              </p>
              <p
                className="elv-sans"
                style={{
                  fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                  color: 'rgba(255,248,235,0.62)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 'var(--space-5) 0 0',
                  maxWidth: '48ch',
                }}
              >
                Durante <strong style={{ color: 'var(--white-warm)', fontWeight: 600 }}>12 meses</strong>, vocês aprenderão a fortalecer a comunicação, alinhar expectativas, restaurar a conexão e construir um relacionamento saudável, intencional e duradouro.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Coluna foto — direita, acompanha altura do texto */}
        <Reveal delay={1} style={{ height: '100%', display: 'flex' }}>
          <div
            className="elv-photo-hover"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 560,
              minHeight: 600,
              marginLeft: 'auto',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow:
                '0 30px 80px rgba(0,0,0,0.55), 0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(184,140,72,0.14)',
              flex: 1,
              cursor: 'pointer',
            }}
          >
            <Image
              src="/photos/manifesto-couple-hands.jpg"
              alt="Maycko e Marcela — de mãos dadas"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 30%',
                filter: 'contrast(1.05) brightness(0.9)',
              }}
            />
            {/* Vinheta dourada sutil */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse at center, transparent 55%, rgba(28,10,16,0.55) 100%)',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
