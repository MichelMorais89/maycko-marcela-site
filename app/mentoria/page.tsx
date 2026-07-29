import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ElevemseWatermark } from '@/components/brand/ElevemseWatermark'
import { MentoriaFormAplicacao } from '@/components/mentoria/MentoriaFormAplicacao'
import { MentoriaFaq } from '@/components/mentoria/MentoriaFaq'
import { AplicarButton } from '@/components/aplicar/AplicarButton'

export const metadata: Metadata = {
  title: '12 Meses ELEVEM-SE, A Mentoria para Casais que Decidiram',
  description:
    '12 meses. 3 fases. Um casamento que vocês vão querer viver duas vezes. Mentoria boutique para casais que já construíram tudo, menos a intenção de se escolherem.',
  openGraph: {
    title: '12 Meses ELEVEM-SE, A Mentoria',
    description:
      '12 meses. 3 fases. Um casamento que vocês vão querer viver duas vezes.',
    images: [{ url: '/photos/mentores-couple-warm.jpg', width: 1200, height: 630 }],
  },
}

const JORNADA_CARDS = [
  {
    title: 'Encontros mensais ao vivo',
    body: 'Com Maycko e Marcela, conversas diretas, sem palestra genérica.',
  },
  {
    title: 'Workshops presenciais',
    body: 'Imersões que vocês vão lembrar por décadas.',
  },
  {
    title: 'Comunidade fechada de casais',
    body: 'Quem vive o mesmo cria a mesma linguagem.',
  },
  {
    title: 'Rituais de casal aplicáveis',
    body: 'Para levar o método pra dentro da rotina de verdade.',
  },
  {
    title: 'Mentoria individual',
    body: 'Para quando um dos dois precisa avançar sozinho primeiro.',
  },
  {
    title: 'Biblioteca de conteúdo exclusiva',
    body: 'Do essencial ao profundo, sempre disponível.',
  },
]

const COMPARATIVO = [
  { antes: 'Conversa sobre logística', depois: 'Conversa sobre projeto' },
  { antes: 'Afeto por hábito', depois: 'Afeto por escolha' },
  { antes: 'Cada um com sua agenda', depois: 'Uma agenda em comum' },
  { antes: 'Amor implícito', depois: 'Amor demonstrado' },
  { antes: 'Tempo residual', depois: 'Tempo intencional' },
  { antes: 'Vida a dois', depois: 'Legado a dois' },
]

export default function MentoriaPage() {
  return (
    <>
      {/* Bloco 1, Hero navy compacto (foto do casal + texto sobreposto, padrão do site) */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{
          minHeight: '78vh',
          color: '#fff',
          background: 'var(--surface-wine-deep, #1c0810)',
          paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
        }}
      >
        {/* Foto full-bleed com deslocamento pra empurrar o casal pra direita */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            className="absolute top-0 bottom-0"
            style={{ left: '25%', right: '-18%' }}
          >
            <Image
              src="/photos/mentores-couple-warm.jpg"
              alt=""
              fill
              priority
              sizes="130vw"
              className="object-cover"
              style={{ objectPosition: '78% 25%', transform: 'scale(1.08)', transformOrigin: 'center right' }}
            />
          </div>
          {/* Overlay navy denso à esquerda, cobre corte + texto respira */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, var(--surface-wine-deep, #1c0810) 0%, var(--surface-wine-deep, #1c0810) 42%, color-mix(in srgb, var(--surface-wine-deep, #1c0810) 94%, transparent) 52%, color-mix(in srgb, var(--surface-wine-deep, #1c0810) 68%, transparent) 64%, color-mix(in srgb, var(--surface-wine-deep, #1c0810) 30%, transparent) 78%, transparent 94%)',
            }}
          />
          {/* Vinheta topo/base */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, color-mix(in srgb, var(--surface-wine-deep, #1c0810) 30%, transparent) 0%, transparent 20%, transparent 78%, color-mix(in srgb, var(--surface-wine-deep, #1c0810) 45%, transparent) 100%)',
            }}
          />
        </div>

        <ElevemseWatermark
          variant="outline"
          color="dourado"
          motion="breathing"
          opacity={0.05}
          size="full"
        />

        {/* Conteúdo, texto à esquerda alinhado com o container do nav */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <div style={{ maxWidth: '46rem' }}>
            <div className="flex items-center gap-3 mb-5">
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: 32,
                  height: 1,
                  background: 'var(--gold-500, #C2A14D)',
                }}
              />
              <p
                className="text-xs tracking-[0.28em] uppercase font-semibold"
                style={{ color: 'var(--gold-400, #D2B673)' }}
              >
                A MENTORIA
              </p>
            </div>
            <h1
              className="font-serif uppercase leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(2rem, 4.6vw, 4rem)',
                color: '#F5F0E8',
                letterSpacing: '0.02em',
                fontWeight: 500,
                textShadow: '0 2px 30px rgba(0,0,0,0.35)',
              }}
            >
              A ELEVEM-SE é um{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-400, #D2B673)', fontWeight: 400 }}>
                programa boutique.
              </em>
            </h1>
            <p
              className="leading-relaxed mb-8 max-w-lg"
              style={{
                color: 'rgba(245,240,232,0.85)',
                fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                fontStyle: 'italic',
              }}
            >
              Para casais que decidiram construir juntos, com método, estrutura e intenção.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <AplicarButton className="mentoria-hero-cta-primary inline-block px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-medium rounded-sm">
                QUERO APLICAR
              </AplicarButton>
              <Link
                href="/metodo"
                className="mentoria-hero-cta-secondary inline-block px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-medium rounded-sm"
              >
                VER O MÉTODO
              </Link>
            </div>
            <p
              className="text-xs tracking-[0.28em] uppercase mb-6"
              style={{ color: 'rgba(210,182,115,0.65)', fontWeight: 500 }}
            >
              PROCESSO SELETIVO · MÁXIMO 12 CASAIS POR CICLO
            </p>
            <style>{`
              .mentoria-hero-cta-primary {
                background: var(--wine-600, #6E2A36);
                color: #F5F0E8;
                transition: background 0.15s, transform 0.15s;
              }
              .mentoria-hero-cta-primary:hover {
                background: var(--wine-700, #5A1F28);
                transform: translateY(-1px);
              }
              .mentoria-hero-cta-secondary {
                border: 1px solid rgba(210,182,115,0.55);
                color: #F5F0E8;
                background: transparent;
                transition: border-color 0.15s, background 0.15s;
              }
              .mentoria-hero-cta-secondary:hover {
                border-color: rgba(210,182,115,0.95);
                background: rgba(210,182,115,0.08);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Bloco 2, Reposicionamento + A jornada por dentro (fundidos, compacto e interativo) */}
      <section
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 15%, rgba(194,161,77,0.1) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12" style={{ perspective: '1400px' }}>
          {/* Header, Reposicionamento (citação impactante) */}
          <div className="max-w-3xl mx-auto text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-500, #C2A14D))' }} />
              <p className="text-xs tracking-[0.32em] uppercase font-semibold" style={{ color: 'var(--text-gold, #735422)' }}>
                REPOSICIONAMENTO
              </p>
              <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-500, #C2A14D))' }} />
            </div>
            <h2
              className="font-serif leading-[1.15] mb-3"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.55rem, 2.8vw, 2.35rem)',
                letterSpacing: '-0.005em',
                textWrap: 'balance',
              }}
            >
              O casamento de vocês não precisa{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)', fontWeight: 400 }}>
                estar em crise
              </em>{' '}
              para precisar evoluir.
            </h2>
            <p
              className="font-serif italic"
              style={{
                color: 'var(--text-body, #4D4748)',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Não trabalhamos com{' '}
              <span className="reposicionamento-strike">restauração</span>.{' '}
              Trabalhamos com{' '}
              <em className="reposicionamento-underline" style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)', paddingBottom: '2px' }}>
                evolução
              </em>
              .
            </p>
          </div>

          <style>{`
            @keyframes reposicionamentoStrikeIn {
              from { transform: scaleX(0); }
              to   { transform: scaleX(1); }
            }
            .reposicionamento-strike {
              position: relative;
              display: inline-block;
              opacity: 0.6;
            }
            .reposicionamento-strike::after {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              top: 55%;
              height: 1.5px;
              background: linear-gradient(to right, rgba(110,42,54,0.9), rgba(194,161,77,0.9));
              transform: scaleX(0);
              transform-origin: left center;
              animation: reposicionamentoStrikeIn 1400ms cubic-bezier(0.65, 0, 0.35, 1) 500ms forwards;
              border-radius: 2px;
              pointer-events: none;
            }
            .reposicionamento-underline {
              position: relative;
              display: inline-block;
            }
            .reposicionamento-underline::after {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 1px;
              background: var(--gold-500, #C2A14D);
              transform: scaleX(0);
              transform-origin: left center;
              animation: reposicionamentoStrikeIn 1200ms cubic-bezier(0.65, 0, 0.35, 1) 2100ms forwards;
              pointer-events: none;
            }
            @media (prefers-reduced-motion: reduce) {
              .reposicionamento-strike::after,
              .reposicionamento-underline::after {
                animation: none;
                transform: scaleX(1);
              }
            }
          `}</style>

          {/* Divisor ornamental compacto entre os 2 conceitos */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <span style={{ display: 'inline-block', width: 44, height: 1, background: 'linear-gradient(to right, transparent, rgba(194,161,77,0.55))' }} />
            <span style={{ display: 'inline-block', width: 6, height: 6, border: '1px solid var(--gold-500, #C2A14D)', transform: 'rotate(45deg)', opacity: 0.65 }} />
            <span style={{ display: 'inline-block', width: 44, height: 1, background: 'linear-gradient(to left, transparent, rgba(194,161,77,0.55))' }} />
          </div>

          {/* Sub-header compacto, A jornada por dentro */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: 'var(--text-gold, #735422)' }}>
              A JORNADA POR DENTRO
            </p>
            <h3
              className="font-serif leading-tight"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.25rem, 2vw, 1.7rem)',
                letterSpacing: '-0.005em',
                textWrap: 'balance',
                margin: 0,
              }}
            >
              Não é curso.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                É uma travessia guiada.
              </em>
            </h3>
          </div>

          {/* Grid de cards interativos 3D */}
          <div className="jornada-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {JORNADA_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="mentoria-jornada-card"
                style={{
                  animationDelay: `${i * 70}ms`,
                }}
              >
                <div className="mentoria-jornada-shine" aria-hidden="true" />
                <span className="mentoria-jornada-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mentoria-jornada-mark" aria-hidden="true" />
                <span className="mentoria-jornada-dot" aria-hidden="true" />
                <h3
                  className="font-serif"
                  style={{
                    color: 'var(--text-strong, #2E2A2B)',
                    fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    marginBottom: '0.45rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    color: 'var(--text-body, #4D4748)',
                    margin: 0,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <style>{`
            .mentoria-jornada-card {
              position: relative;
              padding: 1.4rem 1.4rem 1.4rem 1.65rem;
              background: rgba(255,255,255,0.55);
              border: 1px solid rgba(194,161,77,0.28);
              border-radius: 10px;
              transition:
                transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
                border-color 260ms ease,
                box-shadow 420ms ease,
                background 260ms ease;
              overflow: hidden;
              opacity: 0;
              transform: translateY(16px);
              animation: mentoriaJornadaIn 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
              animation-delay: inherit;
              transform-style: preserve-3d;
              cursor: default;
            }
            @keyframes mentoriaJornadaIn {
              to { opacity: 1; transform: translateY(0); }
            }
            .mentoria-jornada-card:hover {
              transform: translateY(-6px) rotateX(2deg) rotateY(-2deg);
              border-color: rgba(194,161,77,0.85);
              background: rgba(255,255,255,0.95);
              box-shadow:
                0 24px 44px rgba(60,25,35,0.14),
                0 8px 18px rgba(60,25,35,0.08),
                inset 0 1px 0 rgba(255,255,255,0.9);
            }
            .mentoria-jornada-shine {
              position: absolute;
              inset: 0;
              background: linear-gradient(115deg, transparent 40%, rgba(255,240,200,0.35) 50%, transparent 60%);
              transform: translateX(-100%);
              transition: transform 700ms ease;
              pointer-events: none;
              z-index: 1;
            }
            .mentoria-jornada-card:hover .mentoria-jornada-shine {
              transform: translateX(100%);
            }
            .mentoria-jornada-num {
              position: absolute;
              top: 0.6rem;
              right: 0.9rem;
              font-family: var(--font-serif);
              font-size: 2.3rem;
              font-weight: 500;
              line-height: 1;
              background: linear-gradient(135deg, #F5E5B8 0%, #C2A14D 55%, #8A6A2C 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              opacity: 0.28;
              user-select: none;
              transition: opacity 300ms ease, transform 300ms ease;
              pointer-events: none;
              z-index: 1;
            }
            .mentoria-jornada-card:hover .mentoria-jornada-num {
              opacity: 0.75;
              transform: scale(1.1) translateZ(20px);
            }
            .mentoria-jornada-mark {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 3px;
              background: linear-gradient(to bottom, var(--gold-500, #C2A14D), var(--wine-600, #6E2A36));
              transform: scaleY(0.3);
              transform-origin: top center;
              transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
              border-radius: 3px;
            }
            .mentoria-jornada-card:hover .mentoria-jornada-mark {
              transform: scaleY(1);
            }
            .mentoria-jornada-dot {
              position: absolute;
              left: -4px;
              top: 50%;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: var(--gold-500, #C2A14D);
              transform: translateY(-50%) scale(0);
              transition: transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1);
              box-shadow: 0 0 10px rgba(194,161,77,0.5);
              z-index: 3;
            }
            .mentoria-jornada-card:hover .mentoria-jornada-dot {
              transform: translateY(-50%) scale(1);
            }
          `}</style>
        </div>
      </section>

      {/* Bloco 3, A Transformação (bege, compacto, hover que muda cor) */}
      <section
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-500, #C2A14D))' }} />
              <p className="text-xs tracking-[0.32em] uppercase font-semibold" style={{ color: 'var(--text-gold, #735422)' }}>
                A TRANSFORMAÇÃO
              </p>
              <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-500, #C2A14D))' }} />
            </div>
            <h2
              className="font-serif leading-tight"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                letterSpacing: '-0.005em',
                textWrap: 'balance',
              }}
            >
              O que muda quando o casamento{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                sai do automático.
              </em>
            </h2>
          </div>

          {/* 2 cards comparativos, coloridos com gradient + hover 3D */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6" style={{ perspective: '1400px' }}>
            {/* VOCÊS SAEM DE, vinho profundo com toque escuro */}
            <div className="transf-card transf-card--from">
              <div className="transf-card-glow" aria-hidden="true" />
              <div className="transf-card-shine" aria-hidden="true" />
              <div className="transf-card-header">
                <span className="transf-card-icon transf-card-icon--from" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <p className="transf-card-label">VOCÊS SAEM DE</p>
              </div>
              <ul className="transf-list">
                {COMPARATIVO.map((row) => (
                  <li key={row.antes} className="transf-item transf-item--from">
                    <span aria-hidden="true" className="transf-icon transf-icon--from">✕</span>
                    <span className="transf-text">{row.antes}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* E PASSAM A VIVER, dourado premium radiante */}
            <div className="transf-card transf-card--to">
              <div className="transf-card-glow" aria-hidden="true" />
              <div className="transf-card-shine" aria-hidden="true" />
              <div className="transf-card-header">
                <span className="transf-card-icon transf-card-icon--to" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="transf-card-label transf-card-label--to">E PASSAM A VIVER</p>
              </div>
              <ul className="transf-list">
                {COMPARATIVO.map((row) => (
                  <li key={row.depois} className="transf-item transf-item--to">
                    <span aria-hidden="true" className="transf-icon transf-icon--to">✓</span>
                    <span className="transf-text">{row.depois}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <style>{`
            .transf-card {
              position: relative;
              padding: 1.6rem 1.6rem 1.6rem 1.8rem;
              border-radius: 16px;
              overflow: hidden;
              transform-style: preserve-3d;
              transition:
                transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 500ms ease,
                border-color 300ms ease;
              cursor: default;
            }
            /* SAEM DE, VINHO PROFUNDO com nuances escuras */
            .transf-card--from {
              background:
                linear-gradient(155deg, #3D141C 0%, #6E2A36 55%, #4A1A24 100%);
              border: 1.5px solid rgba(194,161,77,0.35);
              box-shadow:
                0 18px 40px rgba(60,15,25,0.28),
                0 6px 14px rgba(60,15,25,0.18),
                inset 0 1px 0 rgba(255,200,210,0.12);
            }
            /* PASSAM A VIVER, DOURADO PREMIUM radiante */
            .transf-card--to {
              background:
                linear-gradient(155deg, #F5E5B8 0%, #E5C87A 40%, #C2A14D 100%);
              border: 1.5px solid rgba(139,105,44,0.45);
              box-shadow:
                0 22px 50px rgba(139,105,44,0.35),
                0 8px 18px rgba(60,25,35,0.15),
                inset 0 1px 0 rgba(255,245,215,0.7),
                inset 0 -2px 6px rgba(139,105,44,0.15);
            }

            /* Glow radial atrás */
            .transf-card-glow {
              position: absolute;
              inset: -30%;
              border-radius: 50%;
              opacity: 0;
              transition: opacity 700ms ease, transform 700ms ease;
              pointer-events: none;
              z-index: 0;
            }
            .transf-card--from .transf-card-glow {
              background: radial-gradient(circle, rgba(194,161,77,0.25) 0%, transparent 60%);
            }
            .transf-card--to .transf-card-glow {
              background: radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 60%);
            }
            .transf-card:hover .transf-card-glow {
              opacity: 1;
              transform: scale(1.2);
            }

            /* Shine sweep no hover */
            .transf-card-shine {
              position: absolute;
              inset: 0;
              background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%);
              transform: translateX(-100%);
              transition: transform 900ms ease;
              pointer-events: none;
              z-index: 2;
            }
            .transf-card:hover .transf-card-shine {
              transform: translateX(100%);
            }

            .transf-card:hover {
              transform: translateY(-6px) rotateX(2deg) rotateY(-2deg);
            }
            .transf-card--from:hover {
              border-color: rgba(194,161,77,0.6);
              box-shadow:
                0 30px 60px rgba(60,15,25,0.4),
                0 10px 22px rgba(60,15,25,0.25),
                inset 0 1px 0 rgba(255,200,210,0.18),
                0 0 0 1px rgba(194,161,77,0.25);
            }
            .transf-card--to:hover {
              border-color: rgba(139,105,44,0.75);
              box-shadow:
                0 34px 66px rgba(139,105,44,0.5),
                0 12px 26px rgba(60,25,35,0.22),
                inset 0 2px 0 rgba(255,245,215,0.85),
                inset 0 -3px 8px rgba(139,105,44,0.2),
                0 0 0 1px rgba(255,220,150,0.4);
            }

            /* Header (ícone + label) */
            .transf-card-header {
              display: flex;
              align-items: center;
              gap: 0.7rem;
              margin-bottom: 1.1rem;
              position: relative;
              z-index: 3;
            }
            .transf-card-icon {
              width: 34px;
              height: 34px;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              transform-style: preserve-3d;
              transition: transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .transf-card-icon--from {
              background: radial-gradient(circle at 30% 25%, rgba(220,120,140,0.5) 0%, rgba(110,42,54,0.6) 50%, rgba(30,10,15,0.5) 100%);
              color: #F5D9DF;
              box-shadow:
                inset 0 1.5px 0 rgba(255,210,220,0.35),
                inset 0 -2px 4px rgba(30,10,15,0.4),
                0 3px 8px rgba(30,10,15,0.4);
            }
            .transf-card-icon--to {
              background: radial-gradient(circle at 30% 25%, #FFF5D0 0%, #E5C87A 50%, #8A6A2C 100%);
              color: #5A3E12;
              box-shadow:
                inset 0 1.5px 0 rgba(255,250,220,0.9),
                inset 0 -2px 4px rgba(139,105,44,0.35),
                0 4px 10px rgba(139,105,44,0.45);
            }
            .transf-card:hover .transf-card-icon {
              transform: scale(1.15) rotateZ(-10deg) translateZ(10px);
            }

            .transf-card-label {
              font-size: 0.72rem;
              letter-spacing: 0.32em;
              text-transform: uppercase;
              font-weight: 700;
              margin: 0;
              color: rgba(255,220,225,0.9);
              text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            }
            .transf-card-label--to {
              color: #5A3E12;
              text-shadow: 0 1px 0 rgba(255,245,215,0.6);
            }

            .transf-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
              position: relative;
              z-index: 3;
            }
            .transf-item {
              display: flex;
              gap: 0.7rem;
              align-items: flex-start;
              font-size: 0.9rem;
              line-height: 1.45;
              padding: 8px 10px;
              border-radius: 8px;
              transition: background 260ms ease, transform 260ms ease, color 260ms ease;
              cursor: default;
            }
            /* SAEM DE, texto claro riscado */
            .transf-item--from {
              color: rgba(245,220,225,0.68);
              font-style: italic;
              text-decoration: line-through;
              text-decoration-color: rgba(255,200,205,0.35);
            }
            .transf-item--from:hover {
              background: rgba(0,0,0,0.28);
              color: rgba(255,240,245,0.95);
              transform: translateX(-3px);
            }
            /* PASSAM A VIVER, texto escuro rico */
            .transf-item--to {
              color: #3A2A0E;
              font-weight: 500;
            }
            .transf-item--to:hover {
              background: rgba(255,250,225,0.55);
              color: #1F1508;
              transform: translateX(3px);
            }

            .transf-icon {
              flex-shrink: 0;
              margin-top: 2px;
              font-weight: 800;
              transition: transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .transf-icon--from { color: rgba(255,200,205,0.6); }
            .transf-icon--to { color: #5A3E12; text-shadow: 0 1px 0 rgba(255,245,215,0.5); }
            .transf-item:hover .transf-icon { transform: scale(1.35) rotate(-8deg); }
            .transf-text { flex: 1; }
          `}</style>
        </div>
      </section>

      {/* Bloco 4, Curadoria de Perfil (bege, 2 colunas espalhadas + ícones 3D interativos) */}
      <section
        id="perfil"
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-14 lg:py-20 relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 40% at 20% 30%, rgba(194,161,77,0.08) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 80% 70%, rgba(110,42,54,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10" style={{ perspective: '1400px' }}>
          {/* Header centralizado */}
          <div className="text-center mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-500, #C2A14D))' }} />
              <p className="text-xs tracking-[0.32em] uppercase font-semibold" style={{ color: 'var(--text-gold, #735422)' }}>
                CURADORIA DE PERFIL
              </p>
              <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-500, #C2A14D))' }} />
            </div>
            <h2
              className="font-serif leading-tight mx-auto"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.55rem, 2.7vw, 2.2rem)',
                letterSpacing: '-0.005em',
                maxWidth: '32ch',
                textWrap: 'balance',
              }}
            >
              A mentoria não é para todos.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                É para casais que decidiram.
              </em>
            </h2>
          </div>

          {/* 2 colunas balanceadas 4x4: REQUISITOS / IMPEDIMENTOS */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Coluna YES */}
            <div className="curadoria-col">
              <div className="curadoria-col-header">
                <span className="curadoria-col-badge curadoria-col-badge--yes">✓ REQUISITOS</span>
                <p className="curadoria-col-title curadoria-col-title--yes">
                  A mentoria é{' '}
                  <em style={{ fontStyle: 'italic' }}>para vocês se</em>
                </p>
              </div>
              <ul className="curadoria-items">
                {[
                  'Já construíram vida, mas sentem que o casamento ficou para trás.',
                  'Não querem terapia. Querem método.',
                  'Estão dispostos a fazer, não só a entender.',
                  'Querem elevar antes que a rotina reduza.',
                ].map((text, i) => (
                  <li
                    key={text}
                    className="curadoria-item-3d curadoria-item-3d--yes"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <span className="curadoria-icon-3d curadoria-icon-3d--yes" aria-hidden="true">
                      <span className="curadoria-icon-glyph">✓</span>
                    </span>
                    <span className="curadoria-item-text">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna NO, balanceada com 4 items */}
            <div className="curadoria-col">
              <div className="curadoria-col-header">
                <span className="curadoria-col-badge curadoria-col-badge--no">✕ IMPEDIMENTOS</span>
                <p className="curadoria-col-title curadoria-col-title--no">
                  A mentoria{' '}
                  <em style={{ fontStyle: 'italic' }}>não é para vocês se</em>
                </p>
              </div>
              <ul className="curadoria-items">
                {[
                  'Buscam solução mágica em vez de construção real.',
                  'Querem ouvir o que já sabem, e não mudar nada.',
                  'Preferem terceirizar o casamento em vez de assumir.',
                  'Não têm 12 meses de compromisso a dar ao próprio casamento.',
                ].map((text, i) => (
                  <li
                    key={text}
                    className="curadoria-item-3d curadoria-item-3d--no"
                    style={{ animationDelay: `${i * 90 + 120}ms` }}
                  >
                    <span className="curadoria-icon-3d curadoria-icon-3d--no" aria-hidden="true">
                      <span className="curadoria-icon-glyph">✕</span>
                    </span>
                    <span className="curadoria-item-text">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <style>{`
            .curadoria-col {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
            }
            .curadoria-col-header {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            .curadoria-col-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              align-self: flex-start;
              padding: 6px 12px;
              border-radius: 999px;
              font-size: 0.66rem;
              font-weight: 700;
              letter-spacing: 0.24em;
            }
            .curadoria-col-badge--yes {
              background: linear-gradient(135deg, rgba(194,161,77,0.2), rgba(194,161,77,0.08));
              color: var(--text-gold, #735422);
              border: 1px solid rgba(194,161,77,0.4);
            }
            .curadoria-col-badge--no {
              background: linear-gradient(135deg, rgba(110,42,54,0.14), rgba(110,42,54,0.05));
              color: var(--wine-700, #5A1F28);
              border: 1px solid rgba(110,42,54,0.28);
            }
            .curadoria-col-title {
              font-family: var(--font-serif);
              font-size: clamp(1.1rem, 1.5vw, 1.35rem);
              line-height: 1.3;
              margin: 0;
              color: var(--text-strong, #2E2A2B);
              font-weight: 500;
            }
            .curadoria-col-title--yes em { color: var(--wine-600, #6E2A36); }
            .curadoria-col-title--no em { color: rgba(110,42,54,0.7); }

            .curadoria-items {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .curadoria-item-3d {
              display: grid;
              grid-template-columns: auto 1fr;
              gap: 1rem;
              align-items: flex-start;
              padding: 1rem 1.15rem 1rem 1rem;
              background: rgba(255,255,255,0.55);
              border-radius: 12px;
              border: 1px solid rgba(194,161,77,0.22);
              transition:
                transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 380ms ease,
                background 260ms ease,
                border-color 260ms ease;
              opacity: 0;
              transform: translateY(12px);
              animation: curadoriaItemIn 520ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
              animation-delay: inherit;
              transform-style: preserve-3d;
              cursor: default;
            }
            @keyframes curadoriaItemIn {
              to { opacity: 1; transform: translateY(0); }
            }
            .curadoria-item-3d--yes:hover {
              transform: translateY(-4px) rotateX(2deg);
              background: rgba(255,255,255,0.95);
              border-color: rgba(194,161,77,0.7);
              box-shadow:
                0 20px 40px rgba(60,25,35,0.12),
                0 6px 14px rgba(194,161,77,0.15);
            }
            .curadoria-item-3d--no:hover {
              transform: translateY(-4px) rotateX(2deg);
              background: rgba(255,255,255,0.85);
              border-color: rgba(110,42,54,0.4);
              box-shadow:
                0 20px 40px rgba(60,25,35,0.12),
                0 6px 14px rgba(110,42,54,0.15);
            }
            .curadoria-item-text {
              font-size: 0.95rem;
              line-height: 1.5;
              color: var(--text-body, #4D4748);
              padding-top: 6px;
            }
            .curadoria-item-3d--no .curadoria-item-text {
              color: rgba(77,71,72,0.72);
              text-decoration: line-through;
              text-decoration-color: rgba(110,42,54,0.3);
              text-decoration-thickness: 1px;
            }

            /* Ícones 3D, pastilhas com sombra dupla, brilho e profundidade */
            .curadoria-icon-3d {
              width: 42px;
              height: 42px;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              position: relative;
              transform-style: preserve-3d;
              transition:
                transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 380ms ease;
            }
            .curadoria-icon-3d--yes {
              background: radial-gradient(circle at 30% 25%, #E5C87A 0%, #C2A14D 45%, #8A6A2C 100%);
              box-shadow:
                0 6px 14px rgba(194,161,77,0.5),
                0 2px 4px rgba(60,25,35,0.15),
                inset 0 1.5px 0 rgba(255,240,200,0.6),
                inset 0 -2px 4px rgba(60,25,35,0.15);
            }
            .curadoria-icon-3d--no {
              background: radial-gradient(circle at 30% 25%, #B84055 0%, #6E2A36 45%, #3D141C 100%);
              box-shadow:
                0 6px 14px rgba(110,42,54,0.5),
                0 2px 4px rgba(60,25,35,0.2),
                inset 0 1.5px 0 rgba(255,200,210,0.35),
                inset 0 -2px 4px rgba(30,10,15,0.4);
            }
            .curadoria-icon-glyph {
              color: #fff;
              font-size: 1.15rem;
              font-weight: 800;
              text-shadow: 0 1.5px 2px rgba(60,25,35,0.4);
              transform: translateZ(4px);
              transition: transform 380ms ease;
            }
            .curadoria-item-3d:hover .curadoria-icon-3d {
              transform: scale(1.18) rotateZ(-8deg) translateZ(14px);
            }
            .curadoria-item-3d--yes:hover .curadoria-icon-3d {
              box-shadow:
                0 12px 22px rgba(194,161,77,0.6),
                0 4px 8px rgba(60,25,35,0.2),
                inset 0 2px 0 rgba(255,240,200,0.7),
                inset 0 -3px 5px rgba(60,25,35,0.2);
            }
            .curadoria-item-3d--no:hover .curadoria-icon-3d {
              box-shadow:
                0 12px 22px rgba(110,42,54,0.65),
                0 4px 8px rgba(60,25,35,0.25),
                inset 0 2px 0 rgba(255,200,210,0.4),
                inset 0 -3px 5px rgba(30,10,15,0.5);
            }
            .curadoria-item-3d:hover .curadoria-icon-glyph {
              transform: translateZ(10px) scale(1.08);
            }

            @media (prefers-reduced-motion: reduce) {
              .curadoria-item-3d { animation: none; opacity: 1; transform: none; }
            }
          `}</style>
        </div>
      </section>

      {/* Bloco Investimento (navy, card premium com pricing) */}
      <section
        style={{ background: 'var(--surface-anchor, #16233A)' }}
        className="py-14 lg:py-20 relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 50% 40%, rgba(194,161,77,0.09) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-500, #C2A14D))' }} />
            <p className="text-xs tracking-[0.32em] uppercase font-semibold" style={{ color: 'var(--gold-400, #D2B673)' }}>
              INVESTIMENTO
            </p>
            <span aria-hidden="true" style={{ display: 'inline-block', width: 28, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-500, #C2A14D))' }} />
          </div>
          <h2
            className="font-serif leading-tight mb-10"
            style={{
              color: '#F5F0E8',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
              letterSpacing: '-0.005em',
              textWrap: 'balance',
            }}
          >
            Um programa boutique exige um{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400, #D2B673)' }}>
              comprometimento real.
            </em>
          </h2>

          {/* Card de pricing */}
          <div
            className="rounded-xl p-7 lg:p-10 text-left"
            style={{
              background: 'linear-gradient(160deg, rgba(60,15,25,0.55) 0%, rgba(30,10,15,0.75) 100%)',
              border: '1px solid rgba(194,161,77,0.45)',
              boxShadow:
                '0 30px 60px rgba(0,0,0,0.4), 0 12px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <div className="text-center mb-8">
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-2"
                style={{ color: 'var(--gold-400, #D2B673)' }}
              >
                MENTORIA ELEVEM-SE · 12 MESES
              </p>
              <p
                className="mb-1"
                style={{
                  color: 'rgba(245,240,232,0.78)',
                  fontSize: '1rem',
                }}
              >
                Consulte condições durante a conversa de alinhamento
              </p>
              <p
                className="font-serif italic"
                style={{
                  color: 'var(--gold-400, #D2B673)',
                  fontSize: '0.9rem',
                }}
              >
                Ou parcelado em até 12x
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
              {[
                '12 meses de mentoria com Maycko e Marcela',
                'Acesso à plataforma exclusiva ELEVEM-SE',
                'Encontros ao vivo mensais em grupo',
                'Sessões de acompanhamento em casal',
                'Material de apoio e exercícios práticos',
                'Comunidade privada de casais elevados',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    color: 'rgba(245,240,232,0.85)',
                    fontSize: '0.95rem',
                    lineHeight: 1.45,
                  }}
                >
                  <span aria-hidden="true" style={{ color: 'var(--gold-500, #C2A14D)', fontSize: '1.15rem', lineHeight: 1, flexShrink: 0, marginTop: 1 }}>
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Garantia */}
            <div
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: '1px solid rgba(194,161,77,0.25)' }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '1.5px solid var(--gold-500, #C2A14D)',
                  color: 'var(--gold-400, #D2B673)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                7
              </div>
              <div>
                <p style={{ color: '#F5F0E8', fontSize: '0.95rem', fontWeight: 500, marginBottom: 2 }}>
                  Garantia de 7 dias
                </p>
                <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.82rem', lineHeight: 1.4, margin: 0 }}>
                  Incondicional. Se não for o momento certo, devolvemos o investimento integral.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <AplicarButton className="mentoria-invest-cta inline-block px-10 py-3.5 text-xs tracking-[0.22em] uppercase font-medium rounded-full">
                QUERO A MENTORIA
              </AplicarButton>
              <p
                className="mt-4 text-xs tracking-[0.22em] uppercase"
                style={{ color: 'rgba(210,182,115,0.55)' }}
              >
                MÁXIMO 12 CASAIS POR CICLO · VAGAS LIMITADAS
              </p>
            </div>
            <style>{`
              .mentoria-invest-cta {
                background: linear-gradient(135deg, var(--wine-600, #6E2A36), var(--wine-700, #5A1F28));
                color: #F5F0E8;
                transition: transform 0.15s ease, box-shadow 0.15s ease;
                box-shadow: 0 8px 20px rgba(122,28,46,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
              }
              .mentoria-invest-cta:hover {
                transform: translateY(-2px);
                box-shadow: 0 14px 28px rgba(122,28,46,0.55), inset 0 1px 0 rgba(255,255,255,0.15);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Bloco 5, FAQ (bege, compacto), vem ANTES do formulário */}
      <section
        id="faq"
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          borderTop: '1px solid rgba(46,42,43,0.08)',
        }}
        className="py-10 lg:py-14"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-6">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-2"
              style={{ color: 'var(--text-gold, #735422)' }}
            >
              PERGUNTAS FREQUENTES
            </p>
            <h2
              className="font-serif leading-tight"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.4rem, 2.4vw, 1.95rem)',
                margin: 0,
              }}
            >
              O que vocês precisam saber.
            </h2>
          </div>
          <MentoriaFaq />
        </div>
      </section>

      {/* Bloco 6, Candidatura (bege, formulário no final) */}
      <section
        id="aplicar"
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          borderTop: '1px solid rgba(46,42,43,0.08)',
        }}
        className="py-14 lg:py-20"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              style={{ color: 'var(--text-gold, #735422)' }}
            >
              CANDIDATURA
            </p>
            <h2
              className="font-serif leading-tight mb-3"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                letterSpacing: '-0.005em',
              }}
            >
              Dê o{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                primeiro passo.
              </em>
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mx-auto"
              style={{ color: 'var(--text-body, #4D4748)', maxWidth: '38ch' }}
            >
              Preencha abaixo. Entraremos em contato para a conversa de alinhamento.
            </p>
          </div>
          <MentoriaFormAplicacao />
        </div>
      </section>
    </>
  )
}
