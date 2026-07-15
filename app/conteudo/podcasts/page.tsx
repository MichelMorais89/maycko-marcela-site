import type { Metadata } from 'next'
import Image from 'next/image'
import { PodcastGrid } from '@/components/podcasts/PodcastGrid'
import podcasts from '@/_data/podcasts.json'

export const metadata: Metadata = {
  title: 'Podcasts, ELEVEM-SE',
  description:
    'Conversas longas sobre o que sustenta um casamento. Episódios do podcast Maycko & Marcela, bastidores do método, entrevistas e reflexões.',
  openGraph: {
    title: 'Podcasts, ELEVEM-SE',
    description: 'Conversas longas sobre o que sustenta um casamento.',
    images: [{ url: '/photos/depoimentos-marcela-tablet.jpg', width: 1200, height: 630 }],
  },
}

export default function PodcastsPage() {
  return (
    <>
      {/* Hero split, foto empurrada + título "PODCAST" gigante */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{
          minHeight: '72vh',
          background: 'var(--surface-anchor, #16233A)',
          color: '#fff',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          <div className="absolute top-0 bottom-0" style={{ left: '25%', right: '-20%' }}>
            <Image
              src="/photos/depoimentos-marcela-tablet.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '50% 25%', transform: 'scale(1.05)' }}
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
              className="text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(245,240,232,0.82)', maxWidth: '40ch' }}
            >
              Conversas longas sobre o que sustenta um casamento, bastidores do método, entrevistas e reflexões.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@mayko.alvess"
                target="_blank"
                rel="noopener noreferrer"
                className="podcasts-hero-cta podcasts-hero-cta--yt"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
                </svg>
                Ver no YouTube
              </a>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="podcasts-hero-cta podcasts-hero-cta--sp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.7 0 12 0zm5.5 17.3c-.2.4-.7.5-1.1.2-3-1.8-6.8-2.2-11.2-1.2-.4.1-.9-.2-.9-.6-.1-.4.2-.9.6-.9 4.9-1.1 9.2-.6 12.5 1.3.4.3.5.8.1 1.2zm1.5-3.4c-.3.4-.8.6-1.3.3-3.4-2.1-8.6-2.7-12.7-1.5-.5.2-1-.2-1.2-.7-.2-.5.2-1 .7-1.2 4.7-1.4 10.4-.7 14.3 1.7.4.3.6.9.2 1.4zm.1-3.5C15.2 8 8.7 7.8 5 8.9c-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-1.3 11.4-1 15.8 1.6.5.3.7 1 .4 1.6-.3.4-.9.6-1.5.3z"/>
                </svg>
                Ouvir no Spotify
              </a>
            </div>

            <style>{`
              .podcasts-hero-cta {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 11px 22px;
                color: #fff;
                font-size: 0.8rem;
                letter-spacing: 0.16em;
                text-transform: uppercase;
                font-weight: 600;
                border-radius: 8px;
                text-decoration: none;
                transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
              }
              .podcasts-hero-cta--yt {
                background: rgba(255,0,51,0.9);
                box-shadow: 0 10px 24px rgba(180,30,50,0.35), inset 0 1px 0 rgba(255,220,220,0.35);
              }
              .podcasts-hero-cta--yt:hover {
                background: rgba(255,0,51,1);
                transform: translateY(-2px);
                box-shadow: 0 14px 32px rgba(180,30,50,0.5), inset 0 1.5px 0 rgba(255,220,220,0.5);
              }
              .podcasts-hero-cta--sp {
                background: rgba(30,215,96,0.9);
                box-shadow: 0 10px 24px rgba(30,180,80,0.32), inset 0 1px 0 rgba(220,255,220,0.3);
              }
              .podcasts-hero-cta--sp:hover {
                background: rgba(30,215,96,1);
                transform: translateY(-2px);
                box-shadow: 0 14px 32px rgba(30,180,80,0.45), inset 0 1.5px 0 rgba(220,255,220,0.45);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Bloco 2, Grid de episódios (bege) */}
      <section
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <PodcastGrid podcasts={podcasts} />
        </div>
      </section>

      {/* Bloco 3, CTA canal (bege compacto) */}
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
            Prefere ouvir com fone no meio do trânsito?
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="podcasts-canal-btn podcasts-canal-btn--sp inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.22em] uppercase font-semibold rounded"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.7 0 12 0zm5.5 17.3c-.2.4-.7.5-1.1.2-3-1.8-6.8-2.2-11.2-1.2-.4.1-.9-.2-.9-.6-.1-.4.2-.9.6-.9 4.9-1.1 9.2-.6 12.5 1.3.4.3.5.8.1 1.2zm1.5-3.4c-.3.4-.8.6-1.3.3-3.4-2.1-8.6-2.7-12.7-1.5-.5.2-1-.2-1.2-.7-.2-.5.2-1 .7-1.2 4.7-1.4 10.4-.7 14.3 1.7.4.3.6.9.2 1.4zm.1-3.5C15.2 8 8.7 7.8 5 8.9c-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-1.3 11.4-1 15.8 1.6.5.3.7 1 .4 1.6-.3.4-.9.6-1.5.3z"/>
              </svg>
              SPOTIFY
            </a>
            <a
              href="https://www.youtube.com/@mayko.alvess"
              target="_blank"
              rel="noopener noreferrer"
              className="podcasts-canal-btn podcasts-canal-btn--yt inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.22em] uppercase font-semibold rounded"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
              </svg>
              YOUTUBE
            </a>
          </div>
          <style>{`
            .podcasts-canal-btn {
              text-decoration: none;
              color: #fff;
              transition: transform 0.15s, box-shadow 0.15s;
            }
            .podcasts-canal-btn:hover { transform: translateY(-2px); }
            .podcasts-canal-btn--sp {
              background: #1ED760;
              box-shadow: 0 6px 14px rgba(30,180,80,0.35);
            }
            .podcasts-canal-btn--sp:hover { box-shadow: 0 12px 22px rgba(30,180,80,0.5); }
            .podcasts-canal-btn--yt {
              background: #FF0033;
              box-shadow: 0 6px 14px rgba(180,30,50,0.35);
            }
            .podcasts-canal-btn--yt:hover { box-shadow: 0 12px 22px rgba(180,30,50,0.5); }
          `}</style>
        </div>
      </section>
    </>
  )
}
