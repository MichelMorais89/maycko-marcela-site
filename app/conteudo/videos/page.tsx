import type { Metadata } from 'next'
import Image from 'next/image'
import { VideoGrid } from '@/components/videos/VideoGrid'
import videos from '@/_data/videos.json'

export const metadata: Metadata = {
  title: 'Vídeos, ELEVEM-SE',
  description:
    'Conteúdo em vídeo para casais que constroem casamento no meio da rotina. Curadoria completa do canal ELEVEM-SE.',
  openGraph: {
    title: 'Vídeos, ELEVEM-SE',
    description: 'Conteúdo em vídeo para casais que constroem casamento no meio da rotina.',
    images: [{ url: '/photos/conceito-marcela-dark.jpg', width: 1200, height: 630 }],
  },
}

export default function VideosPage() {
  return (
    <>
      {/* Hero split, foto à direita empurrada + título "VÍDEOS" à esquerda */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{
          minHeight: '72vh',
          background: 'var(--surface-anchor, #16233A)',
          color: '#fff',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
        }}
      >
        {/* Foto full-bleed empurrada pra direita */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          <div className="absolute top-0 bottom-0" style={{ left: '25%', right: '-20%' }}>
            <Image
              src="/photos/videos-hero-couple-macbook.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '55% 70%', transform: 'scale(1.05)' }}
            />
          </div>
          {/* Overlay muro navy denso à esquerda */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, var(--surface-anchor, #16233A) 0%, var(--surface-anchor, #16233A) 42%, color-mix(in srgb, var(--surface-anchor, #16233A) 65%, transparent) 62%, color-mix(in srgb, var(--surface-anchor, #16233A) 20%, transparent) 88%, transparent 100%)',
            }}
          />
          {/* Overlay base */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(22,35,58,0.5) 0%, transparent 55%)',
            }}
          />
        </div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-16">
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
                className="text-xs tracking-[0.32em] uppercase font-semibold"
                style={{ color: 'var(--gold-400, #D2B673)' }}
              >
                CANAL ELEVEM-SE · YOUTUBE
              </p>
            </div>
            <h1
              className="font-serif uppercase leading-none mb-5"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                color: '#F5F0E8',
                letterSpacing: '0.02em',
                fontWeight: 500,
                textShadow: '0 2px 30px rgba(0,0,0,0.35)',
              }}
            >
              Vídeos
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(245,240,232,0.82)', maxWidth: '38ch' }}
            >
              Reflexões curtas, análises de pesquisa e recortes do método, para casais que constroem casamento no meio da rotina.
            </p>
            <a
              href="https://www.youtube.com/@mayko.alvess"
              target="_blank"
              rel="noopener noreferrer"
              className="videos-hero-cta"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
              </svg>
              Inscrever-se no canal
            </a>

            <style>{`
              .videos-hero-cta {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 11px 22px;
                background: rgba(255,0,51,0.9);
                color: #fff;
                font-size: 0.8rem;
                letter-spacing: 0.16em;
                text-transform: uppercase;
                font-weight: 600;
                border-radius: 8px;
                text-decoration: none;
                box-shadow: 0 10px 24px rgba(180,30,50,0.35), inset 0 1px 0 rgba(255,220,220,0.35);
                transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
              }
              .videos-hero-cta:hover {
                transform: translateY(-2px);
                background: rgba(255,0,51,1);
                box-shadow: 0 14px 32px rgba(180,30,50,0.5), inset 0 1.5px 0 rgba(255,220,220,0.5);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Bloco 2, Grid de vídeos (bege) */}
      <section
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <VideoGrid videos={videos} />
        </div>
      </section>

      {/* Bloco 3, CTA canal YouTube (bege compacto) */}
      <section
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          borderTop: '1px solid rgba(46,42,43,0.08)',
        }}
        className="py-10 text-center"
      >
        <div className="max-w-xl mx-auto px-6">
          <p
            className="font-serif italic mb-4"
            style={{ color: 'var(--text-strong, #2E2A2B)', fontSize: '1.15rem' }}
          >
            Quer ver todo o acervo?
          </p>
          <a
            href="https://www.youtube.com/@mayko.alvess"
            target="_blank"
            rel="noopener noreferrer"
            className="videos-canal-btn inline-flex items-center gap-2 px-8 py-3 text-xs tracking-[0.22em] uppercase font-semibold rounded"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
            </svg>
            IR PARA O CANAL
          </a>
          <style>{`
            .videos-canal-btn {
              background: var(--wine-600, #6E2A36);
              color: #F5F0E8;
              text-decoration: none;
              transition: background 0.15s, transform 0.15s;
            }
            .videos-canal-btn:hover {
              background: var(--wine-700, #5A1F28);
              transform: translateY(-1px);
            }
          `}</style>
        </div>
      </section>
    </>
  )
}
