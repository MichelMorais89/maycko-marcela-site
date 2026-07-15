'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

interface Video {
  id: string
  youtubeId: string
  title: string
  description?: string
  date: string
  duration?: string
  category: string
  cover?: string
}

const CATEGORIES = ['Todos', 'Rotina', 'Comunicação', 'Método', 'Legado']
const TAGS = ['rotina de casal', 'comunicação', 'método', 'legado', 'finanças', 'família', 'presença', 'projeto de vida']

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function VideoGrid({ videos }: { videos: Video[] }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [modalVideoId, setModalVideoId] = useState<string | null>(null)

  const filtered = useMemo(
    () => (activeCategory === 'Todos' ? videos : videos.filter((v) => v.category === activeCategory)),
    [videos, activeCategory],
  )

  const countByCat = useMemo(() => {
    const map: Record<string, number> = { Todos: videos.length }
    for (const c of CATEGORIES) if (c !== 'Todos') map[c] = 0
    for (const v of videos) map[v.category] = (map[v.category] ?? 0) + 1
    return map
  }, [videos])

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
      {/* Contador */}
      <p className="videos-counter">
        Você está vendo <strong>{filtered.length}</strong> de <strong>{videos.length}</strong> vídeos
      </p>

      <div className="videos-layout" style={{ perspective: '1400px' }}>
        {/* Sidebar */}
        <aside className="videos-sidebar">
          {/* Categorias */}
          <div className="videos-side-card">
            <p className="videos-side-label">CATEGORIAS</p>
            <ul className="videos-cat-list">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`videos-cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
                  >
                    <span>{cat}</span>
                    <span className="videos-cat-count">{countByCat[cat] ?? 0}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="videos-side-card">
            <p className="videos-side-label">TAGS</p>
            <div className="videos-tags">
              {TAGS.map((tag) => (
                <span key={tag} className="videos-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="videos-grid-wrap">
          {filtered.length === 0 ? (
            <p style={{ color: 'var(--text-muted, #716A6B)', padding: '2rem 0' }}>
              Nenhum vídeo nessa categoria ainda.
            </p>
          ) : (
            <div className="videos-grid">
              {filtered.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setModalVideoId(video.youtubeId)}
                  className="video-card"
                  aria-label={`Assistir ${video.title}`}
                >
                  <div className="video-card-shine" aria-hidden="true" />
                  <div className="video-card-media">
                    {video.cover ? (
                      <Image
                        src={video.cover}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 40%' }}
                      />
                    ) : (
                      <div className="video-card-fallback" />
                    )}
                    <div className="video-card-veil" aria-hidden="true" />

                    {/* Botão play 3D */}
                    <div className="video-play-btn" aria-hidden="true">
                      <div className="video-play-ring" />
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4l14 8-14 8V4z" />
                      </svg>
                    </div>

                    {/* Badge YouTube */}
                    <span className="video-yt-badge" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5s-5.2 0-8.3.4c-.5.1-1.5.1-2.3 1-.7.7-.9 2.3-.9 2.3S.3 8 .3 9.8v1.9c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C5.7 19 12 19 12 19s5.2 0 8.3-.4c.5-.1 1.5-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.9c0-1.8-.2-3.6-.2-3.6zM9.5 14V7l6.3 3.5-6.3 3.5z"/>
                      </svg>
                      <span>YouTube</span>
                    </span>

                    {/* Duração */}
                    {video.duration && (
                      <span className="video-duration">{video.duration}</span>
                    )}
                  </div>

                  <div className="video-card-copy">
                    <div className="video-card-meta">
                      <span className="video-card-cat">{video.category}</span>
                      <span aria-hidden="true" className="video-card-dot">·</span>
                      <span className="video-card-date">{fmtDate(video.date)}</span>
                    </div>
                    <h3 className="font-serif video-card-title">{video.title}</h3>
                    {video.description && (
                      <p className="video-card-desc">{video.description}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal YouTube embed */}
      {modalVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Player de vídeo"
          className="video-modal"
          onClick={() => setModalVideoId(null)}
        >
          <div
            className="video-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalVideoId(null)}
              aria-label="Fechar vídeo"
              className="video-modal-close"
            >
              ✕
            </button>
            <div className="video-modal-frame">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                title="Vídeo ELEVEM-SE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* CONTADOR */
        .videos-counter {
          font-size: 0.88rem;
          color: var(--text-muted, #716A6B);
          margin: 0 0 1.75rem;
          text-align: center;
        }
        .videos-counter strong {
          color: var(--text-strong, #2E2A2B);
          font-weight: 600;
        }

        /* LAYOUT */
        .videos-layout {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .videos-layout { grid-template-columns: 1fr; gap: 20px; }
        }

        /* SIDEBAR */
        .videos-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
        }
        @media (max-width: 900px) {
          .videos-sidebar { position: static; }
        }
        .videos-side-card {
          background: linear-gradient(160deg, rgba(22,35,58,0.98) 0%, rgba(30,45,72,0.95) 100%);
          border: 1px solid rgba(194,161,77,0.35);
          border-radius: 12px;
          padding: 1rem 1.15rem 1.15rem;
          box-shadow: 0 10px 22px rgba(22,35,58,0.15);
        }
        .videos-side-label {
          font-size: 0.66rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--gold-400, #D2B673);
          margin: 0 0 0.75rem;
        }
        .videos-cat-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .videos-cat-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 8px 12px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 6px;
          color: rgba(245,240,232,0.75);
          font-family: inherit;
          font-size: 0.87rem;
          cursor: pointer;
          transition: background 200ms ease, color 200ms ease, border-color 200ms ease, transform 200ms ease;
        }
        .videos-cat-btn:hover {
          background: rgba(194,161,77,0.14);
          color: #F5F0E8;
          transform: translateX(2px);
        }
        .videos-cat-btn.is-active {
          background: linear-gradient(135deg, rgba(194,161,77,0.28), rgba(194,161,77,0.14));
          border-color: rgba(194,161,77,0.55);
          color: var(--gold-400, #D2B673);
          font-weight: 600;
        }
        .videos-cat-count {
          font-size: 0.72rem;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(194,161,77,0.18);
          color: var(--gold-400, #D2B673);
          font-weight: 600;
        }
        .videos-cat-btn.is-active .videos-cat-count {
          background: rgba(255,240,200,0.25);
          color: #FFF5D9;
        }
        .videos-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .videos-tag {
          padding: 4px 10px;
          background: rgba(194,161,77,0.14);
          color: var(--gold-400, #D2B673);
          font-size: 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(194,161,77,0.28);
          cursor: default;
        }

        /* GRID */
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 22px;
        }
        .video-card {
          position: relative;
          text-align: left;
          background: #fff;
          border: 1px solid rgba(46,42,43,0.08);
          border-radius: 14px;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(60,25,35,0.06);
          transform-style: preserve-3d;
          transition:
            transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 420ms ease,
            border-color 260ms ease;
          font-family: inherit;
        }
        .video-card:hover {
          transform: translateY(-6px) rotateX(1.5deg) rotateY(-1deg);
          border-color: rgba(194,161,77,0.55);
          box-shadow:
            0 26px 50px rgba(60,25,35,0.16),
            0 10px 22px rgba(60,25,35,0.08);
        }
        .video-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255,240,200,0.15) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 900ms ease;
          pointer-events: none;
          z-index: 4;
        }
        .video-card:hover .video-card-shine { transform: translateX(100%); }

        .video-card-media {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #16233A;
        }
        .video-card-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(22,35,58,1) 0%, rgba(110,42,54,0.85) 100%);
        }
        .video-card-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,15,25,0.45) 0%, rgba(10,15,25,0.15) 50%, rgba(10,15,25,0.35) 100%);
          transition: background 300ms ease;
          pointer-events: none;
        }
        .video-card:hover .video-card-veil {
          background: linear-gradient(to top, rgba(10,15,25,0.6) 0%, rgba(10,15,25,0.25) 50%, rgba(10,15,25,0.4) 100%);
        }

        /* BOTÃO PLAY 3D */
        .video-play-btn {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          pointer-events: none;
        }
        .video-play-btn svg {
          position: relative;
          z-index: 2;
          color: #fff;
          margin-left: 4px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          transition: transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .video-play-ring {
          position: absolute;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(220,60,80,0.95) 0%, rgba(180,30,50,1) 60%, rgba(120,15,30,1) 100%);
          box-shadow:
            0 6px 18px rgba(180,30,50,0.5),
            inset 0 1.5px 0 rgba(255,220,220,0.35),
            inset 0 -2px 6px rgba(60,10,20,0.4);
          transition: transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 380ms ease;
        }
        .video-card:hover .video-play-ring {
          transform: scale(1.15);
          box-shadow:
            0 12px 28px rgba(180,30,50,0.7),
            inset 0 2px 0 rgba(255,220,220,0.45),
            inset 0 -3px 8px rgba(60,10,20,0.5);
        }
        .video-card:hover .video-play-btn svg { transform: scale(1.15); }

        /* Badge YouTube */
        .video-yt-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          background: rgba(10,15,25,0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 6px;
          color: #fff;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          z-index: 3;
        }
        .video-yt-badge svg { color: #FF0033; }

        .video-duration {
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 3px 8px;
          background: rgba(10,15,25,0.82);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 500;
          border-radius: 4px;
          z-index: 3;
          letter-spacing: 0.02em;
        }

        /* COPY */
        .video-card-copy {
          padding: 1rem 1.15rem 1.15rem;
        }
        .video-card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 0.5rem;
          font-size: 0.72rem;
        }
        .video-card-cat {
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-gold, #735422);
        }
        .video-card-dot { color: rgba(46,42,43,0.4); }
        .video-card-date { color: var(--text-muted, #716A6B); }
        .video-card-title {
          font-size: 1.05rem;
          line-height: 1.28;
          color: var(--text-strong, #2E2A2B);
          margin: 0 0 0.5rem;
          font-weight: 500;
          text-wrap: balance;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .video-card-desc {
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--text-muted, #716A6B);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* MODAL */
        .video-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: rgba(10,15,25,0.85);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .video-modal-inner {
          position: relative;
          width: 100%;
          max-width: 900px;
        }
        .video-modal-close {
          position: absolute;
          top: -44px;
          right: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(194,161,77,0.35);
          color: #F5F0E8;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 200ms ease;
        }
        .video-modal-close:hover { background: rgba(0,0,0,0.75); }
        .video-modal-frame {
          position: relative;
          padding-bottom: 56.25%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .video-modal-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .video-card { transition: none; }
          .video-card:hover { transform: none; }
        }
      `}</style>
    </>
  )
}
