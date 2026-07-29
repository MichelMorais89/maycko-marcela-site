import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ElevemseWatermark } from '@/components/brand/ElevemseWatermark'
import { QuizTrigger } from '@/components/metodo/QuizTrigger'
import { AplicarButton } from '@/components/aplicar/AplicarButton'

export const metadata: Metadata = {
  title: 'O Método ELEVEM-SE, 12 Meses que Constroem um Casamento',
  description:
    'Um método estruturado em 3 fases: Elevação Individual, Construção do Nós e Legado em Casal. Visualize a jornada e descubra em que fase está o casamento de vocês.',
  openGraph: {
    title: 'O Método ELEVEM-SE, 12 Meses',
    description:
      'Doze meses que constroem um casamento para a vida toda. 3 fases. Método estruturado.',
    images: [{ url: '/photos/metodo-casal-caminho.jpg', width: 1200, height: 630 }],
  },
}

const FILOSOFIA_CARDS = [
  {
    label: 'PROPÓSITO',
    tagline: 'Saber para onde caminham, juntos e individualmente.',
    svg: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        <defs>
          <linearGradient id="fmFlameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--wine-600)" />
            <stop offset="100%" stopColor="var(--gold-500)" />
          </linearGradient>
        </defs>
        <path
          d="M50 88 C 40 84 34 76 34 66 C 34 58 38 52 42 46 C 42 52 46 54 50 54 C 54 54 58 52 58 46 C 62 52 66 58 66 66 C 66 76 60 84 50 88 Z"
          fill="none"
          stroke="url(#fmFlameGrad)"
          strokeWidth="1.6"
        />
        <path
          d="M50 78 C 44 74 42 68 44 62 C 46 58 49 56 50 52 C 51 56 54 58 56 62 C 58 68 56 74 50 78 Z"
          fill="var(--gold-500)"
          opacity="0.55"
        />
        <circle cx="50" cy="20" r="1.5" fill="var(--gold-500)" opacity="0.8" />
      </svg>
    ),
  },
  {
    label: 'ALIANÇA',
    tagline: 'Duas histórias alinhadas numa só direção.',
    svg: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        <defs>
          <linearGradient id="fmRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-400)" />
            <stop offset="100%" stopColor="var(--gold-600)" />
          </linearGradient>
        </defs>
        <circle cx="38" cy="50" r="22" fill="none" stroke="url(#fmRingGrad)" strokeWidth="1.8" />
        <circle cx="62" cy="50" r="22" fill="none" stroke="url(#fmRingGrad)" strokeWidth="1.8" />
        <circle cx="50" cy="50" r="2" fill="var(--gold-500)" />
      </svg>
    ),
  },
  {
    label: 'LEGADO',
    tagline: 'O que fica além de vocês, o que os filhos vão levar.',
    svg: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        <defs>
          <linearGradient id="fmColGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--gold-400)" />
            <stop offset="100%" stopColor="var(--gold-600)" />
          </linearGradient>
        </defs>
        <path d="M 20 22 L 50 10 L 80 22 Z" fill="none" stroke="url(#fmColGrad)" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="22" y="24" width="56" height="5" fill="none" stroke="url(#fmColGrad)" strokeWidth="1.5" />
        <rect x="26" y="29" width="48" height="3" fill="none" stroke="url(#fmColGrad)" strokeWidth="1.2" />
        <line x1="30" y1="32" x2="30" y2="76" stroke="url(#fmColGrad)" strokeWidth="1.6" />
        <line x1="38" y1="32" x2="38" y2="76" stroke="url(#fmColGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="46" y1="32" x2="46" y2="76" stroke="url(#fmColGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="50" y1="32" x2="50" y2="76" stroke="url(#fmColGrad)" strokeWidth="1.8" />
        <line x1="54" y1="32" x2="54" y2="76" stroke="url(#fmColGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="62" y1="32" x2="62" y2="76" stroke="url(#fmColGrad)" strokeWidth="1" opacity="0.55" />
        <line x1="70" y1="32" x2="70" y2="76" stroke="url(#fmColGrad)" strokeWidth="1.6" />
        <rect x="26" y="76" width="48" height="3" fill="none" stroke="url(#fmColGrad)" strokeWidth="1.2" />
        <rect x="22" y="79" width="56" height="5" fill="none" stroke="url(#fmColGrad)" strokeWidth="1.5" />
        <rect x="18" y="84" width="64" height="6" fill="none" stroke="url(#fmColGrad)" strokeWidth="1.4" />
      </svg>
    ),
  },
]

const FASES = [
  {
    num: '01',
    title: 'ELEVAÇÃO INDIVIDUAL',
    eyebrow: 'PRIMEIRA FASE',
    subhead: 'Antes de fortalecer o casamento, fortalecemos quem existe dentro dele.',
    bullets: ['Mentalidade', 'Inteligência emocional', 'Saúde e energia', 'Identidade e propósito'],
    rodape: '"Porque relacionamentos elevados começam em pessoas elevadas."',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'CONSTRUÇÃO DO NÓS',
    eyebrow: 'SEGUNDA FASE',
    subhead: 'Duas identidades inteiras aprendendo a caminhar juntas, sem se perder e sem se sobrepor.',
    bullets: ['Comunicação de verdade', 'Projeto de vida a dois', 'Intimidade emocional', 'Aliança financeira'],
    rodape: '"O nós não anula o eu. O nós amplia o eu."',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M9 14c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 20c0-2.761 2.239-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 20c0-2.761-2.239-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'LEGADO EM CASAL',
    eyebrow: 'TERCEIRA FASE',
    subhead: 'O que vocês constroem juntos passa a durar além de vocês.',
    bullets: ['Educação dos filhos como casal', 'Patrimônio como visão comum', 'Rede de casais', 'Legado geracional'],
    rodape: '"O maior investimento de um casal é o que ele deixa depois."',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4v20M8 10l6-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 24h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function MetodoPage() {
  return (
    <>
      {/* Bloco 1, Hero navy compacto (foto SOLTA à direita, sem moldura, com fade lateral) */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          background: 'var(--surface-anchor, #16233A)',
          color: '#fff',
          minHeight: '72vh',
          paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        }}
      >
        {/* Foto full-bleed, casal empurrado pra direita via container deslocado (mesmo padrão do bloco Dores) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{ zIndex: 0 }}
        >
          {/* Container interno deslocado, foto ancorada na ponta direita, casal aproximado */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: '22%', right: '-22%' }}
          >
            <Image
              src="/photos/legado-couple-white.jpg"
              alt=""
              fill
              priority
              sizes="130vw"
              className="object-cover"
              style={{ objectPosition: '35% 30%', transform: 'scale(1.12)', transformOrigin: 'center right' }}
            />
          </div>
          {/* Overlay "muro", navy sólido total à esquerda, esconde a linha da foto */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, var(--surface-anchor, #16233A) 0%, var(--surface-anchor, #16233A) 40%, color-mix(in srgb, var(--surface-anchor, #16233A) 96%, transparent) 50%, color-mix(in srgb, var(--surface-anchor, #16233A) 70%, transparent) 62%, color-mix(in srgb, var(--surface-anchor, #16233A) 32%, transparent) 74%, color-mix(in srgb, var(--surface-anchor, #16233A) 8%, transparent) 86%, transparent 96%)',
            }}
          />
          {/* Vinheta suave */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, color-mix(in srgb, var(--surface-anchor, #16233A) 25%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--surface-anchor, #16233A) 35%, transparent) 100%)',
            }}
          />
        </div>

        <ElevemseWatermark
          variant="outline"
          color="dourado"
          motion="breathing"
          opacity={0.04}
          size="full"
        />

        {/* Texto na esquerda */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div style={{ maxWidth: '38rem' }}>
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
                O MÉTODO ELEVEM-SE
              </p>
            </div>
            <h1
              className="font-serif uppercase leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
                color: '#F5F0E8',
                letterSpacing: '0.02em',
                fontWeight: 500,
                textShadow: '0 2px 30px rgba(0,0,0,0.35)',
              }}
            >
              Doze meses{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-400, #D2B673)', fontWeight: 400 }}>
                que constroem
              </em>{' '}
              um casamento para a vida toda.
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed max-w-md mb-8"
              style={{ color: 'rgba(245,240,232,0.82)' }}
            >
              Um método estruturado em fases, primeiro a elevação de cada indivíduo, depois a construção do que vocês são juntos.
            </p>
            <div className="flex flex-wrap gap-4">
              <AplicarButton className="metodo-cta-primary inline-block px-7 py-3 text-xs tracking-[0.22em] uppercase font-medium rounded-sm">
                QUERO APLICAR
              </AplicarButton>
              <a
                href="#fases"
                className="metodo-cta-secondary inline-block px-7 py-3 text-xs tracking-[0.22em] uppercase font-medium rounded-sm"
              >
                VER OS 12 MESES
              </a>
            </div>
            <style>{`
              .metodo-cta-primary {
                background: var(--wine-600, #6E2A36);
                color: #F5F0E8;
                transition: background 0.15s, transform 0.15s;
              }
              .metodo-cta-primary:hover {
                background: var(--wine-700, #5A1F28);
                transform: translateY(-1px);
              }
              .metodo-cta-secondary {
                border: 1px solid rgba(210,182,115,0.55);
                color: #F5F0E8;
                background: transparent;
                transition: border-color 0.15s, background 0.15s;
              }
              .metodo-cta-secondary:hover {
                border-color: rgba(210,182,115,0.95);
                background: rgba(210,182,115,0.08);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Bloco 2, Filosofia (BEGE + 3 cards 3D tilt) */}
      <section
        id="filosofia"
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-14 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-14 text-center mx-auto">
            <p
              className="text-xs tracking-[0.28em] uppercase mb-4 font-semibold"
              style={{ color: 'var(--text-gold, #735422)' }}
            >
              A FILOSOFIA POR TRÁS
            </p>
            <h2
              className="font-serif leading-tight"
              style={{
                color: 'var(--text-strong, #2E2A2B)',
                fontSize: 'clamp(1.75rem, 3.4vw, 2.8rem)',
                textWrap: 'balance',
              }}
            >
              Três pilares que sustentam{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)', whiteSpace: 'nowrap' }}>
                tudo&nbsp;o&nbsp;que&nbsp;construímos.
              </em>
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: 'var(--text-body, #4D4748)' }}
            >
              O método ELEVEM-SE não começa com o casamento. Começa com cada pessoa dentro dele.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8" style={{ alignItems: 'stretch' }}>
            {FILOSOFIA_CARDS.map((card, i) => {
              const iconKey = ['flame', 'rings', 'column'][i]
              return (
                <div key={card.label} className="filosofia-card-wrap" style={{ perspective: '1200px' }}>
                  <div className="filosofia-card">
                    <div className="filosofia-card-inner">
                      {/* Símbolo temático grande animado */}
                      <div
                        className={`filosofia-symbol filosofia-symbol--${iconKey}`}
                        aria-hidden="true"
                      >
                        {card.svg}
                      </div>

                      {/* Label uppercase serifada dourada */}
                      <h3
                        className="elv-serif filosofia-card-label"
                      >
                        {card.label}
                      </h3>

                      {/* Divisor curto dourado */}
                      <span
                        aria-hidden="true"
                        className="filosofia-card-underline"
                      />

                      {/* Tagline em italic */}
                      <p className="elv-serif filosofia-card-tagline">
                        {card.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <style>{`
            .filosofia-card-wrap {
              transform-style: preserve-3d;
              display: flex;
              height: 100%;
            }
            .filosofia-card {
              position: relative;
              background: linear-gradient(155deg, #1c2942 0%, #0e1725 100%);
              border-radius: 14px;
              padding: clamp(2.5rem, 3.5vw, 3.5rem) clamp(1.5rem, 2.5vw, 2.5rem);
              min-height: 460px;
              width: 100%;
              overflow: hidden;
              transition:
                transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 520ms ease,
                border-color 300ms ease;
              border: 1px solid rgba(194,161,77,0.28);
              box-shadow:
                0 18px 40px rgba(0,0,0,0.22),
                0 6px 14px rgba(0,0,0,0.14),
                inset 0 1px 0 rgba(255,255,255,0.05);
              transform-style: preserve-3d;
              will-change: transform;
              display: flex;
              flex-direction: column;
            }
            .filosofia-card-wrap:hover .filosofia-card {
              transform: rotateX(-5deg) rotateY(5deg) translateY(-6px) scale(1.02);
              border-color: rgba(194,161,77,0.7);
              box-shadow:
                0 34px 66px rgba(0,0,0,0.35),
                0 14px 28px rgba(0,0,0,0.2),
                0 0 0 1px rgba(194,161,77,0.5),
                inset 0 1px 0 rgba(255,255,255,0.08);
            }
            .filosofia-card-inner {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 1rem;
              height: 100%;
              transform: translateZ(20px);
              position: relative;
              z-index: 1;
            }
            .filosofia-card-label {
              font-size: clamp(1.1rem, 1.6vw, 1.4rem);
              font-weight: 400;
              letter-spacing: 0.4em;
              text-transform: uppercase;
              color: var(--gold-400, #D2B673);
              margin: 1rem 0 0;
              text-indent: 0.4em;
            }
            .filosofia-card-underline {
              display: block;
              width: 40px;
              height: 1px;
              background: linear-gradient(to right, transparent, var(--gold-500, #C2A14D), transparent);
              margin: 0.5rem auto 0.75rem;
            }
            .filosofia-card-tagline {
              font-size: clamp(0.95rem, 1.2vw, 1.1rem);
              font-style: italic;
              color: rgba(245,240,232,0.72);
              line-height: 1.55;
              max-width: 22ch;
              margin: 0;
              text-wrap: balance;
            }
            /* Símbolo, container e animações temáticas */
            .filosofia-symbol {
              width: clamp(80px, 10vw, 110px);
              aspect-ratio: 1;
              margin: 0 auto 1.25rem;
              display: block;
              transform: translateZ(30px);
              filter: drop-shadow(0 4px 12px rgba(194,161,77,0.25));
            }
            .filosofia-symbol svg {
              width: 100%;
              height: 100%;
              display: block;
              overflow: visible;
            }

            /* PROPÓSITO, chama tremulando + subindo, com brilho pulsante */
            @keyframes filosofiaFlameBreath {
              0%,100% { transform: scale(1) rotate(-1deg) skewX(0deg) translateY(0); }
              20%     { transform: scale(1.06) rotate(1deg) skewX(1deg) translateY(-2px); }
              40%     { transform: scale(0.97) rotate(-1.2deg) skewX(-0.8deg) translateY(1px); }
              60%     { transform: scale(1.04) rotate(0.6deg) skewX(0.8deg) translateY(-3px); }
              80%     { transform: scale(1.02) rotate(-0.4deg) skewX(-0.3deg); }
            }
            .filosofia-symbol--flame svg {
              animation: filosofiaFlameBreath 3s ease-in-out infinite;
              transform-origin: 50% 100%;
              filter: drop-shadow(0 0 6px rgba(194,161,77,0.4));
            }
            @keyframes filosofiaFlameGlow {
              0%,100% { filter: drop-shadow(0 0 6px rgba(194,161,77,0.4)); }
              50%     { filter: drop-shadow(0 0 14px rgba(194,161,77,0.75)); }
            }
            .filosofia-symbol--flame {
              animation: filosofiaFlameGlow 2.4s ease-in-out infinite;
            }
            /* Ponto pequeno do topo da chama pulsando */
            @keyframes filosofiaFlameSpark {
              0%,100% { opacity: 0.7; r: 1.4; }
              50%     { opacity: 1; r: 2.2; }
            }
            .filosofia-symbol--flame svg > circle {
              animation: filosofiaFlameSpark 1.6s ease-in-out infinite;
            }

            /* ALIANÇA, SVG inteiro rotaciona lentamente (anéis em movimento contínuo) */
            @keyframes filosofiaRingsRotate {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            .filosofia-symbol--rings svg {
              animation: filosofiaRingsRotate 18s linear infinite;
              transform-origin: 50% 50%;
            }
            @keyframes filosofiaRingsGlow {
              0%,100% { filter: drop-shadow(0 0 5px rgba(194,161,77,0.35)); }
              50%     { filter: drop-shadow(0 0 12px rgba(194,161,77,0.7)); }
            }
            .filosofia-symbol--rings {
              animation: filosofiaRingsGlow 3s ease-in-out infinite;
            }
            @keyframes filosofiaRingsCenter {
              0%,100% { r: 2; opacity: 0.75; }
              50%     { r: 3.5; opacity: 1; }
            }
            .filosofia-symbol--rings svg circle:last-child {
              animation: filosofiaRingsCenter 2.4s ease-in-out infinite;
              transform-origin: 50% 50%;
            }
            /* Hover acelera a rotação */
            .filosofia-card-wrap:hover .filosofia-symbol--rings svg {
              animation-duration: 8s;
            }

            /* LEGADO, coluna com wave subindo (shimmer) + linhas pulsando com stagger */
            @keyframes filosofiaColumnPulse {
              0%,100% { opacity: 0.45; }
              50%     { opacity: 1; }
            }
            .filosofia-symbol--column svg line:nth-of-type(1) { animation: filosofiaColumnPulse 2.4s ease-in-out 0s   infinite; }
            .filosofia-symbol--column svg line:nth-of-type(2) { animation: filosofiaColumnPulse 2.4s ease-in-out 0.15s infinite; }
            .filosofia-symbol--column svg line:nth-of-type(3) { animation: filosofiaColumnPulse 2.4s ease-in-out 0.3s  infinite; }
            .filosofia-symbol--column svg line:nth-of-type(4) { animation: filosofiaColumnPulse 2.4s ease-in-out 0.45s infinite; }
            .filosofia-symbol--column svg line:nth-of-type(5) { animation: filosofiaColumnPulse 2.4s ease-in-out 0.6s  infinite; }
            .filosofia-symbol--column svg line:nth-of-type(6) { animation: filosofiaColumnPulse 2.4s ease-in-out 0.75s infinite; }
            .filosofia-symbol--column svg line:nth-of-type(7) { animation: filosofiaColumnPulse 2.4s ease-in-out 0.9s  infinite; }
            @keyframes filosofiaColumnFrame {
              0%,100% { transform: translateY(0); }
              50%     { transform: translateY(-3px); }
            }
            .filosofia-symbol--column svg {
              animation: filosofiaColumnFrame 4s ease-in-out infinite;
            }
            @keyframes filosofiaColumnGlow {
              0%,100% { filter: drop-shadow(0 0 4px rgba(194,161,77,0.35)); }
              50%     { filter: drop-shadow(0 0 12px rgba(194,161,77,0.65)); }
            }
            .filosofia-symbol--column {
              animation: filosofiaColumnGlow 4s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .filosofia-symbol--flame svg,
              .filosofia-symbol--flame svg > circle,
              .filosofia-symbol--rings svg,
              .filosofia-symbol--rings svg circle:last-child,
              .filosofia-symbol--column svg,
              .filosofia-symbol--column svg line {
                animation: none !important;
              }
            }

            .filosofia-card-diamond {
              display: block;
              width: 10px;
              height: 10px;
              border: 1px solid var(--gold-500, #C2A14D);
              transform: rotate(45deg);
              margin-bottom: 1.25rem;
              transition: transform 480ms cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .filosofia-card-wrap:hover .filosofia-card-diamond {
              transform: rotate(225deg) scale(1.3);
              background: var(--gold-500, #C2A14D);
            }
            .filosofia-card-inner {
              position: relative;
              z-index: 1;
              transform: translateZ(15px);
            }
          `}</style>

        </div>
      </section>

      {/* Bloco 3, Introdução das 3 Fases (bege) */}
      <section
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-14 lg:py-20"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p
            className="text-xs tracking-[0.32em] uppercase mb-5 font-semibold"
            style={{ color: 'var(--text-gold, #735422)' }}
          >
            O MÉTODO COMPLETO
          </p>
          <h2
            className="font-serif leading-tight mb-5"
            style={{
              color: 'var(--text-strong, #2E2A2B)',
              fontSize: 'clamp(1.9rem, 3.6vw, 3rem)',
              letterSpacing: '-0.005em',
              textWrap: 'balance',
            }}
          >
            Doze meses.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
              Duas fases.
            </em>{' '}
            Uma transformação.
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--text-body, #4D4748)' }}
          >
            Cada mês tem um tema, exercícios práticos e um princípio que guia o trabalho. Role para percorrer o caminho.
          </p>
        </div>
      </section>

      {/* Bloco 4, 3 Fases Interativas (bege + cards 3D com tilt) */}
      <section
        id="fases"
        style={{ background: 'var(--surface-bege, #EDE3CF)', borderTop: '1px solid rgba(46,42,43,0.08)' }}
        className="py-14 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Timeline horizontal DEITADA (desktop), círculos dourados + linha reta + descida pros cards */}
          <div className="hidden lg:block relative mb-8" style={{ perspective: '1400px' }}>
            <div className="relative">
              {/* Linha horizontal principal dourada */}
              <div
                aria-hidden="true"
                className="fase-line-h"
                style={{
                  position: 'absolute',
                  left: '15%',
                  right: '15%',
                  top: 44,
                  height: 3,
                  background:
                    'linear-gradient(to right, transparent, var(--gold-500, #C2A14D) 8%, var(--gold-500, #C2A14D) 92%, transparent)',
                  boxShadow: '0 2px 8px rgba(194,161,77,0.35)',
                  transformOrigin: 'left center',
                }}
              />
              {/* Nós, 3 círculos dourados preenchidos + descida curta pros cards */}
              <div className="grid grid-cols-3 gap-6 lg:gap-8 relative z-10">
                {FASES.map((fase) => (
                  <div key={fase.num} className="flex flex-col items-center">
                    {/* Círculo grande dourado preenchido com número */}
                    <div
                      className="fase-node-3d"
                      style={{
                        width: 88,
                        height: 88,
                        borderRadius: '50%',
                        background:
                          'linear-gradient(145deg, #F5E5B8 0%, #C2A14D 55%, #8A6A2C 100%)',
                        border: '2px solid rgba(194,161,77,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--wine-700, #5A1F28)',
                        boxShadow:
                          '0 14px 32px rgba(122,28,46,0.28), 0 6px 12px rgba(60,25,35,0.14), inset 0 2px 4px rgba(255,240,200,0.7), inset 0 -3px 6px rgba(122,28,46,0.15)',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 480ms cubic-bezier(0.22,1,0.36,1), box-shadow 480ms ease',
                        marginBottom: 8,
                        position: 'relative',
                      }}
                    >
                      <span
                        className="font-serif"
                        style={{
                          fontSize: '1.8rem',
                          fontWeight: 500,
                          textShadow: '0 1px 2px rgba(255,240,200,0.6)',
                        }}
                      >
                        {fase.num}
                      </span>
                    </div>
                    {/* Descida vertical curta conectando círculo → card */}
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'block',
                        width: 2,
                        height: 44,
                        background:
                          'linear-gradient(to bottom, var(--gold-500, #C2A14D), transparent)',
                        opacity: 0.7,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards das fases, 3D tilt */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {FASES.map((fase, i) => (
              <div
                key={fase.num}
                className="fase-card-wrap"
                style={{ perspective: '1400px', animationDelay: `${i * 120}ms` }}
              >
                <div className="fase-card">
                  {/* Número gigante em relevo dourado */}
                  <span aria-hidden="true" className="fase-card-num elv-serif">
                    {fase.num}
                  </span>

                  <div className="fase-card-inner">
                    {/* Ícone dourado com glow */}
                    <div className="fase-card-icon">
                      {fase.icon}
                    </div>

                    <p
                      className="text-xs tracking-[0.28em] uppercase mb-2 font-semibold"
                      style={{ color: 'var(--text-gold, #735422)' }}
                    >
                      {fase.eyebrow}
                    </p>
                    <h3
                      className="font-serif text-2xl lg:text-[1.6rem] leading-tight mb-4"
                      style={{
                        color: 'var(--text-strong, #2E2A2B)',
                        letterSpacing: '-0.005em',
                      }}
                    >
                      {fase.title}
                    </h3>
                    <p
                      className="text-sm lg:text-base mb-6 leading-relaxed italic"
                      style={{ color: 'var(--text-body, #4D4748)' }}
                    >
                      {fase.subhead}
                    </p>

                    <div
                      aria-hidden="true"
                      className="fase-card-divider"
                    />

                    <ul className="space-y-2.5 mb-6">
                      {fase.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-3 text-sm"
                          style={{ color: 'var(--text-body, #4D4748)' }}
                        >
                          <span
                            aria-hidden="true"
                            className="fase-card-bullet"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <p
                      className="text-sm italic leading-relaxed pt-4"
                      style={{
                        color: 'var(--wine-600, #6E2A36)',
                        borderTop: '1px solid rgba(194,161,77,0.35)',
                      }}
                    >
                      {fase.rodape}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            .fase-card-wrap {
              transform-style: preserve-3d;
              opacity: 0;
              transform: translateY(20px);
              animation: faseCardIn 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
              animation-delay: inherit;
            }
            @keyframes faseCardIn {
              to { opacity: 1; transform: translateY(0); }
            }

            .fase-card {
              position: relative;
              background: linear-gradient(160deg, #ffffff 0%, #faf3e0 100%);
              border-radius: 14px;
              padding: clamp(1.75rem, 2.5vw, 2.5rem);
              overflow: hidden;
              transition:
                transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 520ms ease,
                border-color 300ms ease;
              border: 1px solid rgba(194,161,77,0.32);
              box-shadow:
                0 14px 32px rgba(60,25,35,0.08),
                0 4px 10px rgba(60,25,35,0.05),
                inset 0 1px 0 rgba(255,255,255,0.75);
              transform-style: preserve-3d;
              will-change: transform;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            .fase-card-wrap:hover .fase-card {
              transform: translateY(-10px);
              border-color: rgba(194,161,77,0.75);
              box-shadow:
                0 30px 60px rgba(60,25,35,0.18),
                0 12px 24px rgba(60,25,35,0.12),
                0 0 0 1px rgba(194,161,77,0.5),
                inset 0 1px 0 rgba(255,255,255,0.9);
            }
            /* Faixa dourada superior aparece no hover */
            .fase-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 15%;
              right: 15%;
              height: 2px;
              background: linear-gradient(to right, transparent, var(--gold-500, #C2A14D), transparent);
              transform: scaleX(0);
              transform-origin: center;
              transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
            }
            .fase-card-wrap:hover .fase-card::before {
              transform: scaleX(1);
            }
            /* Halo dourado radial que aparece no hover */
            .fase-card::after {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(194,161,77,0.18) 0%, transparent 60%);
              opacity: 0;
              transition: opacity 480ms ease;
              pointer-events: none;
            }
            .fase-card-wrap:hover .fase-card::after {
              opacity: 1;
            }

            .fase-card-num {
              position: absolute;
              top: -0.75rem;
              right: 0.5rem;
              font-size: 9rem;
              font-weight: 500;
              line-height: 1;
              background: linear-gradient(135deg, #F5E5B8 0%, #C2A14D 55%, #8A6A2C 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              opacity: 0.18;
              user-select: none;
              transform: translateZ(20px);
              transition: opacity 400ms ease, transform 400ms ease;
              pointer-events: none;
            }
            .fase-card-wrap:hover .fase-card-num {
              opacity: 0.35;
              transform: translateZ(35px);
            }

            .fase-card-inner {
              position: relative;
              z-index: 1;
              transform: translateZ(20px);
              display: flex;
              flex-direction: column;
              height: 100%;
            }

            .fase-card-icon {
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: linear-gradient(135deg, rgba(245,229,184,0.85) 0%, rgba(194,161,77,0.55) 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--wine-600, #6E2A36);
              box-shadow:
                0 6px 18px rgba(194,161,77,0.25),
                inset 0 1px 0 rgba(255,255,255,0.6);
              transition: transform 400ms ease, box-shadow 400ms ease;
              transform: translateZ(25px);
            }
            .fase-card-wrap:hover .fase-card-icon {
              transform: translateZ(45px) scale(1.08);
              box-shadow:
                0 12px 28px rgba(194,161,77,0.4),
                inset 0 1px 0 rgba(255,255,255,0.7);
            }

            .fase-card-divider {
              width: 40px;
              height: 2px;
              background: var(--gold-500, #C2A14D);
              margin-bottom: 1.25rem;
              opacity: 0.6;
              transition: width 400ms ease;
            }
            .fase-card-wrap:hover .fase-card-divider {
              width: 80px;
              opacity: 1;
            }

            .fase-card-bullet {
              display: inline-block;
              width: 6px;
              height: 6px;
              background: var(--gold-500, #C2A14D);
              border-radius: 50%;
              flex-shrink: 0;
              box-shadow: 0 0 0 3px rgba(194,161,77,0.15);
            }
          `}</style>
        </div>
      </section>

      {/* Bloco 5, Quiz (bege, chamativo mas alinhado) */}
      <section
        id="quiz"
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          borderTop: '1px solid rgba(194,161,77,0.35)',
        }}
        className="py-12 lg:py-16 text-center relative overflow-hidden"
      >
        {/* Halo dourado radial ao fundo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(194,161,77,0.14) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: 36,
                height: 1,
                background:
                  'linear-gradient(to right, transparent, var(--gold-500, #C2A14D))',
              }}
            />
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ color: 'var(--text-gold, #735422)' }}
            >
              DIAGNÓSTICO EM 2 MINUTOS
            </p>
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: 36,
                height: 1,
                background:
                  'linear-gradient(to left, transparent, var(--gold-500, #C2A14D))',
              }}
            />
          </div>
          <h2
            className="font-serif leading-tight mb-4 mx-auto"
            style={{
              color: 'var(--text-strong, #2E2A2B)',
              fontSize: 'clamp(1.55rem, 2.8vw, 2.35rem)',
              letterSpacing: '-0.005em',
              maxWidth: '48ch',
              textWrap: 'balance',
            }}
          >
            Em que fase está{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
              o casamento de vocês?
            </em>
          </h2>
          <p
            className="mb-8 leading-relaxed mx-auto"
            style={{
              color: 'var(--text-body, #4D4748)',
              fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
              maxWidth: '52ch',
            }}
          >
            9 perguntas rápidas. Descubra qual fase o casal de vocês está vivendo, e qual é o próximo passo natural.
          </p>
          <QuizTrigger />
        </div>
      </section>
    </>
  )
}
