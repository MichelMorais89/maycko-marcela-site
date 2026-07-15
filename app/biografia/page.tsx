import type { Metadata } from 'next'
import Image from 'next/image'
import { ElevemseWatermark } from '@/components/brand/ElevemseWatermark'
import { Prova } from '@/components/home/Prova'
import { BiografiaPrincipios } from '@/components/biografia/Principios'
import { BiografiaLegado } from '@/components/biografia/Legado'

export const metadata: Metadata = {
  title: 'Biografia, Maycko & Marcela | ELEVEM-SE',
  description:
    'Casados há treze anos, pais de três filhos, mais de vinte anos caminhando juntos. Conheça Maycko e Marcela, os mentores por trás do ELEVEM-SE.',
  openGraph: {
    title: 'Biografia, Maycko & Marcela | ELEVEM-SE',
    description: 'Ensinamos aquilo que construímos.',
    images: [{ url: '/photos/sobre-hero-couple-black.jpg', width: 1200, height: 630 }],
  },
}

export default function BiografiaPage() {
  return (
    <>
      {/* Bloco 1, Hero NAVY (estilo V2: foto full-bleed + texto sobreposto) */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: '82vh', color: '#fff', paddingTop: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        {/* Foto full-bleed */}
        <div className="absolute inset-0">
          <Image
            src="/photos/sobre-hero-couple-black.jpg"
            alt="Maycko e Marcela"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '78% 25%' }}
          />
          {/* Overlay navy dominante na base */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, var(--surface-anchor, #16233A) 0%, color-mix(in srgb, var(--surface-anchor, #16233A) 55%, transparent) 50%, transparent 80%)',
            }}
          />
          {/* Overlay lateral esquerdo, mais denso pra texto respirar */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, color-mix(in srgb, var(--surface-anchor, #16233A) 78%, transparent) 0%, color-mix(in srgb, var(--surface-anchor, #16233A) 40%, transparent) 40%, transparent 70%)',
            }}
          />
        </div>

        <ElevemseWatermark
          variant="outline"
          color="dourado"
          motion="breathing"
          opacity={0.06}
          size="full"
        />

        {/* Conteúdo do hero, alinhado com o container do nav (max-w-7xl), texto ocupa coluna à esquerda */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <div style={{ maxWidth: '44rem' }}>
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
              QUEM CONDUZ ESSA JORNADA
            </p>
          </div>
          <h1
            className="font-serif uppercase leading-none mb-6"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5.4rem)',
              color: '#F5F0E8',
              letterSpacing: '0.02em',
              fontWeight: 500,
              textShadow: '0 2px 30px rgba(0,0,0,0.35)',
            }}
          >
            Maycko{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400, #D2B673)', fontWeight: 400 }}>
              &amp;
            </em>{' '}
            Marcela
          </h1>
          <p
            className="text-lg lg:text-xl leading-relaxed max-w-lg mb-10"
            style={{ color: 'rgba(245,240,232,0.85)' }}
          >
            Há mais de vinte anos caminhando juntos. Casados há treze, pais de três filhos, e mentores de um método que nasceu da própria prática.
          </p>
          {/* Scroll hint */}
          <div className="flex items-center gap-3" aria-hidden="true">
            <span
              className="biografia-hero-line"
              style={{
                display: 'block',
                width: 1,
                height: 48,
                background: 'var(--gold-500, #C2A14D)',
                opacity: 0.6,
              }}
            />
            <span
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: 'var(--gold-400, #D2B673)', opacity: 0.7 }}
            >
              Descer
            </span>
          </div>
          </div>
        </div>

        <style>{`
          @keyframes biografiaHeroLinePulse {
            0%, 100% { opacity: 0.6; transform: scaleY(1); }
            50%      { opacity: 0.9; transform: scaleY(1.12); }
          }
          .biografia-hero-line {
            animation: biografiaHeroLinePulse 2.4s ease-in-out infinite;
            transform-origin: top;
          }
        `}</style>
      </section>

      {/* Bloco 2, Nossa história (bege, foto em moldura arqueada) */}
      <section
        id="historia"
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-16 lg:py-20 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 items-center">
          {/* Foto, moldura arqueada estilo retrato clássico */}
          <div className="relative order-2 lg:order-1 mx-auto lg:mx-0" style={{ maxWidth: 380 }}>
            {/* Moldura externa dourada dupla */}
            <div
              className="relative"
              style={{
                aspectRatio: '3 / 4',
                borderRadius: '999px 999px 12px 12px',
                overflow: 'hidden',
                border: '1px solid rgba(194,161,77,0.45)',
                padding: 6,
                background: 'rgba(255,255,255,0.4)',
                boxShadow:
                  '0 20px 50px rgba(60,25,35,0.15), 0 8px 20px rgba(60,25,35,0.08)',
              }}
            >
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: '999px 999px 6px 6px',
                  border: '1px solid rgba(194,161,77,0.35)',
                }}
              >
                <Image
                  src="/photos/mentores-couple-warm.jpg"
                  alt="Maycko e Marcela, nossa história"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 380px"
                  style={{ objectPosition: '50% 22%' }}
                />
              </div>
            </div>
            {/* Ornamento dourado abaixo da foto */}
            <div className="flex justify-center items-center gap-2 mt-4" aria-hidden="true">
              <span
                style={{
                  display: 'inline-block',
                  width: 32,
                  height: 1,
                  background: 'linear-gradient(to right, transparent, var(--gold-500, #C2A14D))',
                }}
              />
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  border: '1px solid var(--gold-500, #C2A14D)',
                  transform: 'rotate(45deg)',
                }}
              />
              <span
                style={{
                  display: 'inline-block',
                  width: 32,
                  height: 1,
                  background: 'linear-gradient(to left, transparent, var(--gold-500, #C2A14D))',
                }}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
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
                style={{ color: 'var(--text-gold, #735422)' }}
              >
                NOSSA HISTÓRIA
              </p>
            </div>
            <h2
              className="font-serif text-3xl lg:text-4xl leading-tight mb-6"
              style={{ color: 'var(--text-strong, #2E2A2B)' }}
            >
              Ensinamos aquilo que{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                construímos
              </em>
              .
            </h2>
            <div
              className="space-y-4 text-base lg:text-[1.05rem] leading-relaxed"
              style={{ color: 'var(--text-body, #4D4748)' }}
            >
              <p>Nos conhecemos jovens, carregando cada um a sua própria história, sonhos, inseguranças e a certeza de que havia algo maior reservado para a nossa vida juntos.</p>
              <p>Ao longo dos anos, construímos uma família: casados há treze anos e pais de três filhos. O que a maioria vê de fora custou decisão, estrutura e muito trabalho conjunto.</p>
              <p>A ELEVEM-SE não surgiu de uma teoria. Surgiu da prática, dos acertos, dos ajustes, das conversas difíceis e dos marcos que comemoramos juntos.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Bloco 3, Prova (números que traduzem quem eles são) */}
      <Prova />

      {/* Bloco 4, Princípios que guiam tudo (wine) */}
      <BiografiaPrincipios />

      {/* Bloco 5, A família / Um legado que se vive (navy, carrossel), FINAL */}
      <BiografiaLegado />
    </>
  )
}
