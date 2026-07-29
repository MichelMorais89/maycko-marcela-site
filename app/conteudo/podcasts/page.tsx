import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Podcast, ELEVEM-SE',
  description:
    'Box 404 com Ines Marcel, a participação de Maycko e Marcela em um dos podcasts mais ouvidos do Brasil.',
  openGraph: {
    title: 'Podcast, ELEVEM-SE',
    description: 'Maycko e Marcela no Box 404 com Ines Marcel.',
    images: [{ url: '/photos/depoimentos-marcela-tablet.jpg', width: 1200, height: 630 }],
  },
}

const PODCAST = {
  youtubeId: 'P8p6wp8m1VU',
  spotifyUrl: 'https://open.spotify.com/',
  youtubeUrl: 'https://www.youtube.com/@marcelaemaycko',
  title: 'Box 404 com Ines Marcel',
  subtitle: 'Uma conversa sobre casamento, propósito e o que sustenta uma vida a dois.',
  eyebrow: 'PODCAST · PARTICIPAÇÃO',
  duration: 'Episódio inteiro',
  paragraphs: [
    'A convite de Ines Marcel, Maycko e Marcela participaram do Box 404 para uma conversa aberta sobre o método que vem sustentando o próprio casamento deles ao longo dos últimos anos.',
    'Da rotina que consome sem que ninguém perceba à decisão consciente de construir juntos, o episódio é uma introdução direta ao pensamento que estrutura a mentoria ELEVEM-SE.',
    'Uma conversa longa, sem pressa, e sem lugar-comum.',
  ],
}

export default function PodcastsPage() {
  return (
    <>
      {/* Hero split, foto empurrada + título "PODCAST" gigante */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{
          minHeight: '68vh',
          background: 'var(--surface-anchor, #16233A)',
          color: '#fff',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          <div className="absolute top-0 bottom-0" style={{ left: '25%', right: '-20%' }}>
            <Image
              src="/photos/podcast-hero-couple-studio.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '55% 45%', transform: 'scale(1.05)' }}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, var(--surface-anchor, #16233A) 0%, var(--surface-anchor, #16233A) 42%, color-mix(in srgb, var(--surface-anchor, #16233A) 65%, transparent) 62%, color-mix(in srgb, var(--surface-anchor, #16233A) 20%, transparent) 88%, transparent 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(22,35,58,0.5) 0%, transparent 55%)',
            }}
          />
        </div>

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
                PODCAST · MAYCKO &amp; MARCELA
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
              Podcast
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.82)', maxWidth: '40ch' }}
            >
              A participação mais recente do casal em conversas longas sobre o que sustenta um casamento.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 2, Card único do Podcast (estilo ebook) */}
      <section
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          paddingBlock: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="podcast-card-grid">
            {/* Player YouTube com estilo 3D — no lugar da capa */}
            <div className="podcast-player-wrap">
              <div className="podcast-player-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${PODCAST.youtubeId}`}
                  title={PODCAST.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/* ornamento embaixo */}
              <div className="podcast-player-orn" aria-hidden="true">
                <span />
                <span className="podcast-player-orn-dot" />
                <span />
              </div>
            </div>

            {/* Texto */}
            <div className="podcast-card-copy">
              <p className="podcast-card-eyebrow">{PODCAST.eyebrow}</p>

              <h2 className="font-serif podcast-card-title">
                {PODCAST.title}
              </h2>

              <p className="font-serif italic podcast-card-subtitle">
                {PODCAST.subtitle}
              </p>

              <div className="podcast-card-body">
                {PODCAST.paragraphs.map((p, i) => (
                  <p key={i} className="podcast-card-para">{p}</p>
                ))}
              </div>

              <div className="podcast-card-actions">
                <a
                  href={PODCAST.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcast-btn podcast-btn--yt"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
                  </svg>
                  Assistir no YouTube
                </a>
                <a
                  href={PODCAST.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcast-btn podcast-btn--sp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.7 0 12 0zm5.5 17.3c-.2.4-.7.5-1.1.2-3-1.8-6.8-2.2-11.2-1.2-.4.1-.9-.2-.9-.6-.1-.4.2-.9.6-.9 4.9-1.1 9.2-.6 12.5 1.3.4.3.5.8.1 1.2zm1.5-3.4c-.3.4-.8.6-1.3.3-3.4-2.1-8.6-2.7-12.7-1.5-.5.2-1-.2-1.2-.7-.2-.5.2-1 .7-1.2 4.7-1.4 10.4-.7 14.3 1.7.4.3.6.9.2 1.4zm.1-3.5C15.2 8 8.7 7.8 5 8.9c-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-1.3 11.4-1 15.8 1.6.5.3.7 1 .4 1.6-.3.4-.9.6-1.5.3z"/>
                  </svg>
                  Ouvir no Spotify
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .podcast-card-grid {
            display: grid;
            grid-template-columns: minmax(280px, 1.05fr) minmax(0, 1fr);
            gap: clamp(2rem, 4vw, 3.5rem);
            align-items: start;
          }
          @media (max-width: 900px) {
            .podcast-card-grid { grid-template-columns: 1fr; }
          }

          .podcast-player-wrap { position: relative; }
          .podcast-player-frame {
            position: relative;
            aspect-ratio: 16 / 9;
            border-radius: 14px;
            overflow: hidden;
            border: 1.5px solid rgba(194,161,77,0.45);
            box-shadow:
              0 22px 48px rgba(60,25,35,0.2),
              0 8px 20px rgba(60,25,35,0.1),
              inset 0 0 0 1px rgba(255,255,255,0.35);
            background: #16233A;
            transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease;
          }
          .podcast-player-frame:hover {
            transform: translateY(-4px);
            box-shadow:
              0 32px 64px rgba(60,25,35,0.28),
              0 12px 26px rgba(60,25,35,0.15),
              inset 0 0 0 1px rgba(255,255,255,0.5);
          }
          .podcast-player-frame iframe {
            position: absolute; inset: 0;
            width: 100%; height: 100%; border: 0;
          }
          .podcast-player-orn {
            display: flex; align-items: center; justify-content: center;
            gap: 8px; margin-top: 14px;
          }
          .podcast-player-orn span:not(.podcast-player-orn-dot) {
            display: inline-block; width: 40px; height: 1px;
            background: linear-gradient(to right, transparent, var(--gold-500, #C2A14D));
          }
          .podcast-player-orn span:last-child {
            background: linear-gradient(to left, transparent, var(--gold-500, #C2A14D));
          }
          .podcast-player-orn-dot {
            width: 6px; height: 6px;
            border: 1px solid var(--gold-500, #C2A14D);
            transform: rotate(45deg);
            opacity: 0.7;
          }

          /* Copy */
          .podcast-card-copy { padding-top: clamp(0px, 1.5vw, 20px); }
          .podcast-card-eyebrow {
            font-size: 0.72rem;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-gold, #735422);
            margin: 0 0 1rem;
          }
          .podcast-card-title {
            font-size: clamp(1.9rem, 3.5vw, 3rem);
            line-height: 1.12;
            color: var(--text-strong, #2E2A2B);
            margin: 0 0 0.75rem;
            font-weight: 500;
            letter-spacing: -0.005em;
            text-wrap: balance;
            max-width: 22ch;
          }
          .podcast-card-subtitle {
            font-size: clamp(1.05rem, 1.4vw, 1.2rem);
            color: var(--wine-600, #6E2A36);
            margin: 0 0 1.5rem;
            line-height: 1.4;
          }
          .podcast-card-body {
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
            margin-bottom: 1.75rem;
            max-width: 52ch;
          }
          .podcast-card-para {
            font-size: 0.95rem;
            line-height: 1.65;
            color: var(--text-body, #4D4748);
            margin: 0;
          }
          .podcast-card-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .podcast-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 22px;
            color: #fff;
            font-size: 0.78rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            font-weight: 600;
            border-radius: 8px;
            text-decoration: none;
            border: 0;
            cursor: pointer;
            font-family: inherit;
            transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
          }
          .podcast-btn--yt {
            background: rgba(255,0,51,0.92);
            box-shadow: 0 10px 22px rgba(180,30,50,0.32), inset 0 1px 0 rgba(255,220,220,0.35);
          }
          .podcast-btn--yt:hover {
            background: rgba(255,0,51,1);
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(180,30,50,0.45), inset 0 1.5px 0 rgba(255,220,220,0.5);
          }
          .podcast-btn--sp {
            background: rgba(30,215,96,0.92);
            box-shadow: 0 10px 22px rgba(30,180,80,0.3), inset 0 1px 0 rgba(220,255,220,0.3);
          }
          .podcast-btn--sp:hover {
            background: rgba(30,215,96,1);
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(30,180,80,0.45), inset 0 1.5px 0 rgba(220,255,220,0.45);
          }
        `}</style>
      </section>
    </>
  )
}
