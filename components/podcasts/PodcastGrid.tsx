'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

interface Podcast {
  id: string
  youtubeId: string
  spotifyUrl: string
  title: string
  description?: string
  date: string
  duration?: string
  category: string
  cover?: string
  guest?: string
}

const CATEGORIES = ['Todos', 'Rotina', 'Comunicação', 'Método', 'Legado']
const TAGS = ['casamento', 'rotina', 'método', 'legado', 'comunicação', 'finanças', 'família', 'projeto de vida']

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function PodcastGrid({ podcasts }: { podcasts: Podcast[] }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [modalVideoId, setModalVideoId] = useState<string | null>(null)

  const filtered = useMemo(
    () => (activeCategory === 'Todos' ? podcasts : podcasts.filter((p) => p.category === activeCategory)),
    [podcasts, activeCategory],
  )

  const countByCat = useMemo(() => {
    const map: Record<string, number> = { Todos: podcasts.length }
    for (const c of CATEGORIES) if (c !== 'Todos') map[c] = 0
    for (const p of podcasts) map[p.category] = (map[p.category] ?? 0) + 1
    return map
  }, [podcasts])

  useEffect(() => {
    if (!modalVideoId) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalVideoId(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalVideoId])

  return (
    <>
      <p className="podcasts-counter">
        Você está vendo <strong>{filtered.length}</strong> de <strong>{podcasts.length}</strong> episódios
      </p>

      <div className="podcasts-layout" style={{ perspective: '1400px' }}>
        {/* Sidebar */}
        <aside className="podcasts-sidebar">
          <div className="podcasts-side-card">
            <p className="podcasts-side-label">CATEGORIAS</p>
            <ul className="podcasts-cat-list">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`podcasts-cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
                  >
                    <span>{cat}</span>
                    <span className="podcasts-cat-count">{countByCat[cat] ?? 0}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="podcasts-side-card">
            <p className="podcasts-side-label">TAGS</p>
            <div className="podcasts-tags">
              {TAGS.map((tag) => (
                <span key={tag} className="podcasts-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="podcasts-grid-wrap">
          {filtered.length === 0 ? (
            <p style={{ color: 'var(--text-muted, #716A6B)', padding: '2rem 0' }}>
              Nenhum episódio nessa categoria ainda.
            </p>
          ) : (
            <div className="podcasts-grid">
              {filtered.map((podcast) => (
                <div key={podcast.id} className="podcast-card">
                  <div className="podcast-card-shine" aria-hidden="true" />

                  {/* Coluna esquerda, capa/thumb com play */}
                  <button
                    type="button"
                    className="podcast-card-media"
                    onClick={() => setModalVideoId(podcast.youtubeId)}
                    aria-label={`Assistir ${podcast.title}`}
                  >
                    {podcast.cover ? (
                      <Image
                        src={podcast.cover}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 240px"
                        className="object-cover"
                        style={{ objectPosition: '50% 35%' }}
                      />
                    ) : (
                      <div className="podcast-card-fallback" />
                    )}
                    <div className="podcast-card-veil" aria-hidden="true" />

                    {/* Play 3D */}
                    <div className="podcast-play-btn" aria-hidden="true">
                      <div className="podcast-play-ring" />
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4l14 8-14 8V4z" />
                      </svg>
                    </div>

                    {/* Onda sonora decorativa embaixo */}
                    <div className="podcast-wave" aria-hidden="true">
                      {[3, 8, 5, 11, 6, 9, 4, 12, 7, 10, 5, 8].map((h, i) => (
                        <span key={i} style={{ height: `${h}px`, animationDelay: `${i * 60}ms` }} />
                      ))}
                    </div>

                    {/* Duração */}
                    {podcast.duration && (
                      <span className="podcast-duration">{podcast.duration}</span>
                    )}
                  </button>

                  {/* Coluna direita, copy */}
                  <div className="podcast-card-copy">
                    <div className="podcast-card-meta">
                      <span className="podcast-card-cat">{podcast.category}</span>
                      <span aria-hidden="true" className="podcast-card-dot">·</span>
                      <span className="podcast-card-date">{fmtDate(podcast.date)}</span>
                    </div>
                    <h3 className="font-serif podcast-card-title">{podcast.title}</h3>
                    {podcast.description && (
                      <p className="podcast-card-desc">{podcast.description}</p>
                    )}
                    {podcast.guest && (
                      <p className="podcast-card-guest">{podcast.guest}</p>
                    )}
                    <div className="podcast-card-actions">
                      <button
                        type="button"
                        onClick={() => setModalVideoId(podcast.youtubeId)}
                        className="podcast-btn podcast-btn--yt"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
                        </svg>
                        Assistir
                      </button>
                      <a
                        href={podcast.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="podcast-btn podcast-btn--sp"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.7 0 12 0zm5.5 17.3c-.2.4-.7.5-1.1.2-3-1.8-6.8-2.2-11.2-1.2-.4.1-.9-.2-.9-.6-.1-.4.2-.9.6-.9 4.9-1.1 9.2-.6 12.5 1.3.4.3.5.8.1 1.2zm1.5-3.4c-.3.4-.8.6-1.3.3-3.4-2.1-8.6-2.7-12.7-1.5-.5.2-1-.2-1.2-.7-.2-.5.2-1 .7-1.2 4.7-1.4 10.4-.7 14.3 1.7.4.3.6.9.2 1.4zm.1-3.5C15.2 8 8.7 7.8 5 8.9c-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-1.3 11.4-1 15.8 1.6.5.3.7 1 .4 1.6-.3.4-.9.6-1.5.3z"/>
                        </svg>
                        Ouvir no Spotify
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal YouTube */}
      {modalVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Player de podcast"
          className="podcast-modal"
          onClick={() => setModalVideoId(null)}
        >
          <div
            className="podcast-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalVideoId(null)}
              aria-label="Fechar"
              className="podcast-modal-close"
            >
              ✕
            </button>
            <div className="podcast-modal-frame">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                title="Podcast ELEVEM-SE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .podcasts-counter {
          font-size: 0.88rem;
          color: var(--text-muted, #716A6B);
          margin: 0 0 1.75rem;
          text-align: center;
        }
        .podcasts-counter strong { color: var(--text-strong, #2E2A2B); font-weight: 600; }

        .podcasts-layout {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .podcasts-layout { grid-template-columns: 1fr; gap: 20px; }
        }

        .podcasts-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
        }
        @media (max-width: 900px) { .podcasts-sidebar { position: static; } }

        .podcasts-side-card {
          background: linear-gradient(160deg, rgba(22,35,58,0.98) 0%, rgba(30,45,72,0.95) 100%);
          border: 1px solid rgba(194,161,77,0.35);
          border-radius: 12px;
          padding: 1rem 1.15rem 1.15rem;
          box-shadow: 0 10px 22px rgba(22,35,58,0.15);
        }
        .podcasts-side-label {
          font-size: 0.66rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--gold-400, #D2B673);
          margin: 0 0 0.75rem;
        }
        .podcasts-cat-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 3px;
        }
        .podcasts-cat-btn {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
          padding: 8px 12px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 6px;
          color: rgba(245,240,232,0.75);
          font-family: inherit; font-size: 0.87rem;
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease, border-color 200ms ease, transform 200ms ease;
        }
        .podcasts-cat-btn:hover {
          background: rgba(194,161,77,0.14);
          color: #F5F0E8;
          transform: translateX(2px);
        }
        .podcasts-cat-btn.is-active {
          background: linear-gradient(135deg, rgba(194,161,77,0.28), rgba(194,161,77,0.14));
          border-color: rgba(194,161,77,0.55);
          color: var(--gold-400, #D2B673);
          font-weight: 600;
        }
        .podcasts-cat-count {
          font-size: 0.72rem;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(194,161,77,0.18);
          color: var(--gold-400, #D2B673);
          font-weight: 600;
        }
        .podcasts-cat-btn.is-active .podcasts-cat-count {
          background: rgba(255,240,200,0.25);
          color: #FFF5D9;
        }
        .podcasts-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .podcasts-tag {
          padding: 4px 10px;
          background: rgba(194,161,77,0.14);
          color: var(--gold-400, #D2B673);
          font-size: 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(194,161,77,0.28);
        }

        /* GRID de cards horizontais */
        .podcasts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .podcast-card {
          position: relative;
          display: grid;
          grid-template-columns: 240px 1fr;
          background: #fff;
          border: 1px solid rgba(46,42,43,0.08);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(60,25,35,0.06);
          transform-style: preserve-3d;
          transition:
            transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 420ms ease,
            border-color 260ms ease;
        }
        .podcast-card:hover {
          transform: translateY(-5px) rotateX(1deg);
          border-color: rgba(194,161,77,0.55);
          box-shadow:
            0 24px 46px rgba(60,25,35,0.15),
            0 10px 22px rgba(60,25,35,0.08);
        }
        @media (max-width: 640px) {
          .podcast-card { grid-template-columns: 1fr; }
        }
        .podcast-card-shine {
          position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255,240,200,0.15) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 900ms ease;
          pointer-events: none; z-index: 4;
        }
        .podcast-card:hover .podcast-card-shine { transform: translateX(100%); }

        .podcast-card-media {
          position: relative;
          background: #16233A;
          overflow: hidden;
          border: 0; padding: 0; cursor: pointer;
          font-family: inherit;
          min-height: 220px;
        }
        @media (max-width: 640px) {
          .podcast-card-media { aspect-ratio: 16 / 9; min-height: 0; }
        }
        .podcast-card-fallback {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(22,35,58,1) 0%, rgba(110,42,54,0.85) 100%);
        }
        .podcast-card-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,15,25,0.55) 0%, rgba(10,15,25,0.15) 55%, rgba(10,15,25,0.4) 100%);
          transition: background 300ms ease;
          pointer-events: none;
        }
        .podcast-card:hover .podcast-card-veil {
          background: linear-gradient(to top, rgba(10,15,25,0.65) 0%, rgba(10,15,25,0.2) 55%, rgba(10,15,25,0.45) 100%);
        }

        .podcast-play-btn {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          z-index: 3; pointer-events: none;
        }
        .podcast-play-btn svg {
          position: relative; z-index: 2;
          color: #fff; margin-left: 4px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          transition: transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .podcast-play-ring {
          position: absolute;
          width: 62px; height: 62px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(220,60,80,0.95) 0%, rgba(180,30,50,1) 60%, rgba(120,15,30,1) 100%);
          box-shadow:
            0 6px 18px rgba(180,30,50,0.5),
            inset 0 1.5px 0 rgba(255,220,220,0.35),
            inset 0 -2px 6px rgba(60,10,20,0.4);
          transition: transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 380ms ease;
        }
        .podcast-card:hover .podcast-play-ring {
          transform: scale(1.15);
          box-shadow:
            0 12px 28px rgba(180,30,50,0.7),
            inset 0 2px 0 rgba(255,220,220,0.45),
            inset 0 -3px 8px rgba(60,10,20,0.5);
        }
        .podcast-card:hover .podcast-play-btn svg { transform: scale(1.15); }

        /* Onda sonora animada */
        .podcast-wave {
          position: absolute;
          bottom: 10px; left: 10px; right: 60px;
          display: flex; align-items: center; gap: 3px;
          z-index: 3;
        }
        .podcast-wave span {
          display: inline-block;
          width: 3px;
          background: linear-gradient(to top, var(--gold-500, #C2A14D), var(--gold-400, #D2B673));
          border-radius: 2px;
          animation: podcastWave 1.4s ease-in-out infinite;
          transform-origin: bottom;
          opacity: 0.8;
        }
        @keyframes podcastWave {
          0%, 100% { transform: scaleY(0.5); }
          50%      { transform: scaleY(1.4); }
        }
        .podcast-card:hover .podcast-wave span { opacity: 1; }

        .podcast-duration {
          position: absolute;
          bottom: 10px; right: 10px;
          padding: 3px 8px;
          background: rgba(10,15,25,0.82);
          color: #fff;
          font-size: 0.72rem; font-weight: 500;
          border-radius: 4px; z-index: 3;
          letter-spacing: 0.02em;
        }

        /* Copy */
        .podcast-card-copy {
          padding: 1.25rem 1.4rem 1.25rem;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .podcast-card-meta {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.72rem;
        }
        .podcast-card-cat {
          font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-gold, #735422);
        }
        .podcast-card-dot { color: rgba(46,42,43,0.4); }
        .podcast-card-date { color: var(--text-muted, #716A6B); }
        .podcast-card-title {
          font-size: 1.2rem;
          line-height: 1.25;
          color: var(--text-strong, #2E2A2B);
          margin: 0;
          font-weight: 500;
          text-wrap: balance;
        }
        .podcast-card-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-body, #4D4748);
          margin: 0;
        }
        .podcast-card-guest {
          font-size: 0.78rem;
          font-style: italic;
          color: var(--text-muted, #716A6B);
          margin: 0;
        }
        .podcast-card-actions {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .podcast-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 14px;
          font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.1em;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: transform 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }
        .podcast-btn--yt {
          background: rgba(255,0,51,0.92);
          color: #fff;
          box-shadow: 0 4px 12px rgba(180,30,50,0.3);
        }
        .podcast-btn--yt:hover {
          background: #FF0033;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(180,30,50,0.45);
        }
        .podcast-btn--sp {
          background: rgba(30,215,96,0.92);
          color: #fff;
          box-shadow: 0 4px 12px rgba(30,180,80,0.3);
        }
        .podcast-btn--sp:hover {
          background: #1ED760;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(30,180,80,0.45);
        }

        /* Modal */
        .podcast-modal {
          position: fixed; inset: 0; z-index: 100;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          background: rgba(10,15,25,0.85);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .podcast-modal-inner {
          position: relative;
          width: 100%; max-width: 900px;
        }
        .podcast-modal-close {
          position: absolute; top: -44px; right: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(194,161,77,0.35);
          color: #F5F0E8;
          font-size: 1rem; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 200ms ease;
        }
        .podcast-modal-close:hover { background: rgba(0,0,0,0.75); }
        .podcast-modal-frame {
          position: relative;
          padding-bottom: 56.25%;
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .podcast-modal-frame iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%; border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .podcast-card { transition: none; }
          .podcast-card:hover { transform: none; }
          .podcast-wave span { animation: none; transform: scaleY(1); }
        }
      `}</style>
    </>
  )
}
