import type { Metadata } from 'next'
import Image from 'next/image'
import { AtosSystem } from '@/components/mentoria/AtosSystem'
import { Calculadora } from '@/components/mentoria/Calculadora'
import { FormAplicacao } from '@/components/mentoria/FormAplicacao'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Ornament } from '@/components/shared/Ornament'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'
export const metadata: Metadata = {
  title: 'A Mentoria ELEVEM-SE — Para Casais que Decidiram Construir Juntos',
  description:
    'Programa boutique de 12 meses para casais empreendedores. Método em 3 atos: Elevação Individual, Construção do Nós e Legado em Casal. Máximo 12 casais por ciclo.',
  openGraph: {
    title: 'A Mentoria ELEVEM-SE',
    description:
      'Um programa boutique para casais que já conquistaram muito e decidiram que o casamento também precisa evoluir no mesmo nível.',
    images: [{ url: '/photos/mentores-couple.jpg', width: 1200, height: 630 }],
  },
}

const BENEFICIOS = [
  '12 meses de mentoria com Maycko e Marcela',
  'Acesso à plataforma exclusiva ELEVEM-SE',
  'Encontros ao vivo mensais em grupo',
  'Sessões de acompanhamento em casal',
  'Material de apoio e exercícios práticos',
  'Comunidade privada de casais elevados',
]

const FAQ_ITEMS = [
  {
    q: 'Para quem é a mentoria ELEVEM-SE?',
    a: 'Para casais que já conquistaram resultados expressivos na vida profissional e financeira, mas percebem que o casamento ficou para segundo plano. A mentoria é para quem quer construir — não consertar.',
  },
  {
    q: 'Qual a duração do programa?',
    a: '12 meses. Cada fase tem duração e ritmo próprios: Elevação Individual, Construção do Nós e Legado em Casal se desenvolvem em ciclos progressivos.',
  },
  {
    q: 'Como funciona o processo seletivo?',
    a: 'Após preencher o formulário de aplicação, passamos por uma conversa de alinhamento para entender o momento do casal. Aceitamos no máximo 12 casais por ciclo para garantir atenção real.',
  },
  {
    q: 'É necessário os dois participarem juntos?',
    a: 'Sim. A mentoria é fundamentalmente um programa para o casal. A presença e o comprometimento de ambos é requisito básico.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Oferecemos 7 dias de garantia incondicional desde o início do programa. Se por qualquer razão você sentir que não é o momento certo, devolvemos o investimento integral.',
  },
  {
    q: 'Os encontros são presenciais ou online?',
    a: 'Os encontros em grupo são online ao vivo. Dependendo do plano escolhido, há opção de sessões presenciais em Brasília.',
  },
  {
    q: 'Qual o investimento?',
    a: 'O investimento é apresentado durante a conversa de alinhamento, após o formulário. Trabalhamos com condições personalizadas conforme o ciclo e o plano selecionado.',
  },
  {
    q: 'Em quanto tempo vemos resultados?',
    a: 'Os primeiros deslocamentos costumam aparecer nas primeiras semanas — especialmente em comunicação e perspectiva. Os resultados estruturais se consolidam ao longo dos 12 meses.',
  },
]

function Sparkle() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 6 }}>
      <path d="M7 0 L8.2 5.8 L14 7 L8.2 8.2 L7 14 L5.8 8.2 L0 7 L5.8 5.8 Z" fill="var(--gold-500)" />
    </svg>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      style={{
        borderBottom: '1px solid rgba(184,140,72,0.12)',
        paddingBlock: 'var(--space-5)',
      }}
    >
      <summary
        className="elv-sans"
        style={{
          cursor: 'pointer',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-4)',
          fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--text-strong)',
          userSelect: 'none',
        }}
      >
        {q}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 22,
            height: 22,
            border: '1px solid var(--gold-500)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold-500)',
            fontSize: '1.1rem',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </summary>
      <p
        className="elv-sans"
        style={{
          marginTop: 'var(--space-4)',
          fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--text-body)',
        }}
      >
        {a}
      </p>
    </details>
  )
}

export default function MentoriaPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          AC2: Hero
      ───────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--ink-900, #0d0a0d)',
        }}
      >
        {/* Foto casal como background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/photos/mentores-couple.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(12,7,10,0.94) 0%, rgba(12,7,10,0.75) 55%, rgba(12,7,10,0.30) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(12,7,10,0.6) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Wordmark topo */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 'clamp(20px, 3vw, 32px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/monogram-light.svg" alt="" width={24} height={24} style={{ display: 'block' }} />
          <span className="elv-serif" style={{ fontSize: '1.1rem', letterSpacing: '0.02em', color: 'var(--white-warm)', fontWeight: 500 }}>
            Elevem-se
          </span>
        </div>

        {/* Content */}
        <div
          className="elv-wrap"
          style={{
            position: 'relative',
            zIndex: 3,
            paddingBlock: 'clamp(100px, 14vh, 160px)',
            maxWidth: '760px',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            <Ornament variant="rule" ruleWidth={32} tone="gold" style={{ opacity: 0.8 }} />
            <p
              className="elv-sans"
              style={{
                fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              A Mentoria
            </p>
          </div>

          <h1
            className="elv-serif"
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
              fontWeight: 'var(--weight-medium)',
              color: 'var(--white-warm)',
              lineHeight: 1.08,
              margin: '0 0 var(--space-5)',
              maxWidth: '22ch',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
            }}
          >
            <SplitText delay={400}>A ELEVEM-SE É UM PROGRAMA BOUTIQUE.</SplitText>
          </h1>

          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              fontStyle: 'italic',
              color: 'var(--gold-300)',
              lineHeight: 1.45,
              maxWidth: '38ch',
              marginBottom: 'var(--space-9)',
            }}
          >
            <SplitText delay={900}>Para casais que decidiram construir juntos — com método, estrutura e intenção.</SplitText>
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <MagneticButton>
              <ShimmerCTA href="#aplicar">Quero aplicar</ShimmerCTA>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#metodo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '15px 32px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(184,140,72,0.6)',
                  color: 'var(--white-warm)',
                  background: 'transparent',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Ver o método
              </a>
            </MagneticButton>
          </div>

          <p
            className="elv-sans"
            style={{
              fontSize: 'var(--text-2xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'rgba(255,248,235,0.40)',
              marginTop: 'var(--space-6)',
            }}
          >
            Processo seletivo · Máximo 12 casais por ciclo
          </p>
        </div>

        {/* Scroll hint */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(20px, 3vh, 32px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--gold-300)',
          }}
        >
          <span className="elv-sans" style={{ fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', opacity: 0.85 }}>
            Descubra a jornada
          </span>
          <span style={{ display: 'block', width: 1, height: 44, background: 'linear-gradient(to bottom, var(--gold-500), transparent)' }} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          AC3: Vídeo Institucional
      ───────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'clamp(400px, 60vh, 680px)',
          display: 'flex',
          alignItems: 'center',
          background: '#000',
        }}
      >
        <video
          src="/videos/casal-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 40%',
          }}
        />
        {/* Overlay vinho */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(62,16,28,0.90) 0%, rgba(42,12,20,0.78) 50%, rgba(22,6,12,0.65) 100%)',
          }}
        />

        <div
          className="elv-wrap"
          style={{ position: 'relative', zIndex: 1, maxWidth: '600px', paddingBlock: 'clamp(80px, 12vh, 120px)' }}
        >
          <Reveal>
            <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)', opacity: 0.85 }} />
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
              O que é a mentoria
            </p>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.7rem)',
                color: 'var(--white-warm)',
                lineHeight: 1.45,
                fontWeight: 'var(--weight-medium)',
                marginBottom: 'var(--space-6)',
              }}
            >
              A ELEVEM-SE não é terapia de casal. Não é aconselhamento. É um programa estruturado de desenvolvimento para casais que querem construir algo extraordinário — juntos.
            </p>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                fontStyle: 'italic',
                color: 'var(--gold-300)',
                lineHeight: 1.5,
              }}
            >
              Doze meses. Três atos. Um método que começou na nossa própria história.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          AC4: Sistema de Atos
      ───────────────────────────────────────────── */}
      <div id="metodo">
        <AtosSystem />
      </div>

      {/* ─────────────────────────────────────────────
          AC5: Calculadora
      ───────────────────────────────────────────── */}
      <Calculadora />

      {/* ─────────────────────────────────────────────
          AC8: Investimento + Garantia
      ───────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--ink-900, #0d0a0d)',
          paddingBlock: 'var(--space-12)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(184,140,72,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div className="elv-wrap" style={{ position: 'relative', zIndex: 1, maxWidth: '680px', marginInline: 'auto' }}>
          <Reveal className="elv-center" style={{ marginBottom: 'var(--space-9)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <Ornament variant="rule" ruleWidth={32} tone="gold" style={{ opacity: 0.7 }} />
              <p className="elv-sans" style={{ fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, margin: 0 }}>
                Investimento
              </p>
              <Ornament variant="rule" ruleWidth={32} tone="gold" style={{ opacity: 0.7 }} />
            </div>
            <h2 className="elv-serif" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', color: 'var(--white-warm)', margin: '0 auto', maxWidth: '26ch', lineHeight: 1.15, textAlign: 'center', fontWeight: 'var(--weight-medium)' }}>
              Um programa boutique exige um comprometimento real.
            </h2>
          </Reveal>

          {/* Card principal */}
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(155deg, rgba(38,26,32,0.92) 0%, rgba(22,14,18,0.97) 60%, rgba(12,7,10,1) 100%)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: [
                '0 1px 0 rgba(255,220,150,0.12) inset',
                '0 -1px 0 rgba(0,0,0,0.6) inset',
                '0 32px 80px rgba(0,0,0,0.65)',
                '0 0 0 1px rgba(184,140,72,0.25)',
              ].join(', '),
              padding: 'clamp(36px, 4.5vw, 64px)',
              overflow: 'hidden',
            }}
          >
            {/* Highlight topo */}
            <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)', opacity: 0.55 }} />
            <span aria-hidden="true" style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 10, height: 10, background: 'linear-gradient(135deg, var(--gold-400) 0%, var(--gold-600,#8a6a2c) 100%)' }} />

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <p className="elv-sans" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 'var(--space-4)' }}>
                  Mentoria ELEVEM-SE · 12 meses
                </p>
                <p className="elv-serif" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'rgba(255,248,235,0.55)', marginBottom: 'var(--space-3)' }}>
                  Consulte condições durante a conversa de alinhamento
                </p>
                <p className="elv-serif" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', fontStyle: 'italic', color: 'var(--gold-300)' }}>
                  Ou parcelado em até 12x
                </p>
              </div>

              <ul style={{ listStyle: 'none', margin: '0 0 var(--space-8)', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {BENEFICIOS.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <Sparkle />
                    <span className="elv-sans" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', color: 'rgba(255,248,235,0.88)', lineHeight: 'var(--leading-relaxed)' }}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Garantia */}
              <div
                style={{
                  borderTop: '1px solid rgba(184,140,72,0.15)',
                  paddingTop: 'var(--space-6)',
                  marginBottom: 'var(--space-8)',
                  display: 'flex',
                  gap: 'var(--space-4)',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    border: '1px solid rgba(184,140,72,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(184,140,72,0.08)',
                  }}
                >
                  <span className="elv-serif" style={{ fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--gold-400)' }}>7</span>
                </div>
                <div>
                  <p className="elv-sans" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--white-warm)', marginBottom: 4 }}>
                    Garantia de 7 dias
                  </p>
                  <p className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,248,235,0.5)', lineHeight: 1.5 }}>
                    Incondicional. Se não for o momento certo, devolvemos o investimento integral.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                <MagneticButton>
                  <ShimmerCTA href="#aplicar" style={{ padding: '17px 40px', fontSize: 'var(--text-sm)' }}>
                    Quero a mentoria
                  </ShimmerCTA>
                </MagneticButton>
                <p className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,248,235,0.30)' }}>
                  Máximo 12 casais por ciclo · Vagas limitadas
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          AC9: FAQ
      ───────────────────────────────────────────── */}
      <section className="elv-sec elv-sec--cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="elv-wrap" style={{ maxWidth: '700px', marginInline: 'auto' }}>
          <Reveal className="elv-center" style={{ marginBottom: 'var(--space-9)' }}>
            <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)', opacity: 0.8 }} />
            <p className="elv-sans" style={{ fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold-600, #8a6a2c)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Perguntas frequentes
            </p>
            <h2 className="elv-serif elv-fluid-h2" style={{ color: 'var(--text-strong)', margin: 0, textAlign: 'center' }}>
              <SplitText delay={100}>O que você precisa saber.</SplitText>
            </h2>
          </Reveal>

          <Reveal>
            <div style={{ borderTop: '1px solid rgba(184,140,72,0.12)' }}>
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          AC10: Form Aplicação
      ───────────────────────────────────────────── */}
      <section
        id="aplicar"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--ink-900, #0d0a0d)',
          paddingBlock: 'var(--space-12)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 65% 50% at 50% 40%, rgba(122,28,46,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="elv-wrap" style={{ position: 'relative', zIndex: 1, maxWidth: '620px', marginInline: 'auto' }}>
          <Reveal className="elv-center" style={{ marginBottom: 'var(--space-9)' }}>
            <Ornament tone="gold" style={{ marginBottom: 'var(--space-5)', opacity: 0.85 }} />
            <p className="elv-sans" style={{ fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Candidatura
            </p>
            <h2 className="elv-serif" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--white-warm)', margin: '0 auto', maxWidth: '24ch', lineHeight: 1.18, textAlign: 'center', fontWeight: 'var(--weight-medium)' }}>
              <SplitText delay={100}>Dê o primeiro passo.</SplitText>
            </h2>
            <p className="elv-sans" style={{ marginTop: 'var(--space-4)', fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', color: 'rgba(255,248,235,0.55)', textAlign: 'center', maxWidth: '38ch', marginInline: 'auto', lineHeight: 'var(--leading-relaxed)' }}>
              Preencha abaixo. Entraremos em contato para a conversa de alinhamento.
            </p>
          </Reveal>

          <Reveal>
            <FormAplicacao />
          </Reveal>
        </div>
      </section>
    </>
  )
}

