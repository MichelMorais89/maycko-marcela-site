'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/content/blog/posts'
import { CATEGORIES, CATEGORY_COLORS } from '@/content/blog/posts'

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory ? p.category === activeCategory : true
    const matchSearch =
      search.trim() === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const grid = filtered

  const showEditorial = !activeCategory && !search

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20" style={{ perspective: '1600px' }}>
      {/* Chip filters, categorias */}
      <div className="editorial-chips">
        <button
          type="button"
          onClick={() => { setActiveCategory(null); setSearch('') }}
          className={`editorial-chip ${!activeCategory && !search ? 'is-active' : ''}`}
        >
          Todas as edições
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => { setActiveCategory(cat); setSearch('') }}
            className={`editorial-chip ${activeCategory === cat ? 'is-active' : ''}`}
          >
            {cat}
          </button>
        ))}
        <div className="editorial-search-wrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar matéria..."
            className="editorial-search"
            aria-label="Buscar matérias"
          />
        </div>
      </div>

      {/* Grid direto de matérias (sem capa em destaque) */}
      <div>
        {showEditorial && (
          <div className="editorial-section-header">
            <span className="editorial-section-rule" aria-hidden="true" />
            <p className="editorial-section-title">EDIÇÕES</p>
            <span className="editorial-section-rule" aria-hidden="true" />
          </div>
        )}

        {filtered.length === 0 ? (
          <p style={{ color: 'var(--text-muted, #716A6B)', textAlign: 'center', padding: '3rem 0' }}>
            Nenhuma matéria encontrada.
          </p>
        ) : (
          <div className="editorial-grid">
            {(showEditorial ? grid : filtered).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="editorial-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="editorial-card-media">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 40%' }}
                  />
                  <div className="editorial-card-veil" aria-hidden="true" />
                  <div className="editorial-card-shine" aria-hidden="true" />
                  <span
                    className="editorial-cat-badge editorial-cat-badge--sm"
                    style={{
                      background: CATEGORY_COLORS[post.category]?.bg,
                      color: CATEGORY_COLORS[post.category]?.text,
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="editorial-card-copy">
                  <p className="editorial-kicker">{post.kicker} · {post.readTime}</p>
                  <h3 className="editorial-card-title font-serif">{post.title}</h3>
                  <p className="editorial-card-desc">{post.description}</p>
                  <div className="editorial-meta editorial-meta--sm">
                    <span>{post.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{fmtDate(post.date)}</span>
                    <span className="editorial-arrow" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* ========== FILTROS ========== */
        .editorial-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 2.5rem;
          align-items: center;
        }
        .editorial-chip {
          padding: 7px 14px;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(46,42,43,0.14);
          border-radius: 999px;
          color: var(--text-body, #4D4748);
          font-size: 0.8rem;
          font-family: inherit;
          cursor: pointer;
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease, transform 220ms ease;
        }
        .editorial-chip:hover {
          background: rgba(194,161,77,0.16);
          color: var(--text-strong, #2E2A2B);
          border-color: rgba(194,161,77,0.4);
        }
        .editorial-chip.is-active {
          background: var(--wine-600, #6E2A36);
          color: #F5F0E8;
          border-color: var(--wine-600, #6E2A36);
          font-weight: 500;
        }
        .editorial-search-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-left: auto;
          padding: 6px 12px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(46,42,43,0.14);
          border-radius: 999px;
          color: var(--text-muted, #716A6B);
          transition: border-color 200ms ease, background 200ms ease;
        }
        .editorial-search-wrap:focus-within {
          border-color: rgba(194,161,77,0.6);
          background: rgba(255,255,255,0.8);
        }
        .editorial-search {
          background: transparent;
          border: none;
          outline: none;
          font-family: inherit;
          font-size: 0.85rem;
          color: var(--text-strong, #2E2A2B);
          width: 180px;
        }

        /* ========== BADGE + META (globais) ========== */
        .editorial-cat-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.7rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          font-weight: 600;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .editorial-cat-badge--sm {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 5px 10px;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          z-index: 3;
        }
        .editorial-cat-badge--static { position: static; }

        .editorial-kicker {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--text-gold, #735422);
          font-weight: 600;
          margin: 0 0 0.5rem;
        }
        .editorial-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-muted, #716A6B);
        }
        .editorial-meta--sm { font-size: 0.72rem; }
        .editorial-arrow {
          color: var(--gold-500, #C2A14D);
          font-size: 1rem;
          transition: transform 300ms ease;
          display: inline-block;
        }
        .editorial-card:hover .editorial-arrow,
        .editorial-featured-landscape:hover .editorial-arrow {
          transform: translateX(4px);
        }

        /* ========== MATÉRIA DESTAQUE, PAISAGEM (sem imagem) ========== */
        .editorial-featured-landscape {
          display: block;
          margin-bottom: 3rem;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .editorial-featured-landscape:hover {
          transform: translateY(-4px);
        }
        .editorial-featured-landscape-inner {
          position: relative;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(46,42,43,0.1);
          border-left: 4px solid var(--wine-600, #6E2A36);
          border-radius: 8px;
          padding: clamp(1.75rem, 3.5vw, 2.75rem) clamp(1.75rem, 3.5vw, 3.25rem);
          box-shadow: 0 10px 24px rgba(60,25,35,0.06);
          transition: box-shadow 480ms ease, border-color 300ms ease;
        }
        .editorial-featured-landscape:hover .editorial-featured-landscape-inner {
          border-left-color: var(--gold-500, #C2A14D);
          box-shadow:
            0 24px 48px rgba(60,25,35,0.14),
            0 8px 18px rgba(60,25,35,0.08);
        }
        .editorial-featured-landscape-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(194,161,77,0.12) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 900ms ease;
          pointer-events: none;
        }
        .editorial-featured-landscape:hover .editorial-featured-landscape-shine {
          transform: translateX(100%);
        }
        .editorial-featured-landscape-header {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 1.1rem;
        }
        .editorial-featured-landscape-kicker {
          font-size: 0.68rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--text-gold, #735422);
          font-weight: 600;
        }
        .editorial-featured-landscape-title {
          font-size: clamp(1.7rem, 3.6vw, 2.8rem);
          line-height: 1.13;
          color: var(--text-strong, #2E2A2B);
          margin: 0 0 1rem;
          font-weight: 500;
          letter-spacing: -0.005em;
          text-wrap: balance;
          max-width: 30ch;
        }
        .editorial-featured-landscape-desc {
          font-size: clamp(0.95rem, 1.15vw, 1.05rem);
          line-height: 1.55;
          color: var(--text-body, #4D4748);
          margin: 0 0 1.5rem;
          max-width: 68ch;
        }
        .editorial-featured-landscape-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 1rem;
          border-top: 1px solid rgba(46,42,43,0.08);
          flex-wrap: wrap;
        }
        .editorial-featured-landscape-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-muted, #716A6B);
        }
        .editorial-featured-landscape-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--wine-600, #6E2A36);
        }

        /* ========== SECTION HEADER "MAIS EDIÇÕES" ========== */
        .editorial-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 2rem;
        }
        .editorial-section-rule {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(46,42,43,0.2), transparent);
        }
        .editorial-section-title {
          font-size: 0.72rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--text-gold, #735422);
          font-weight: 700;
          margin: 0;
          flex-shrink: 0;
        }

        /* ========== GRID PRINCIPAL ========== */
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .editorial-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(46,42,43,0.08);
          box-shadow: 0 6px 16px rgba(60,25,35,0.05);
          transform-style: preserve-3d;
          transition:
            transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 420ms ease,
            border-color 260ms ease;
        }
        .editorial-card:hover {
          transform: translateY(-6px) rotateX(2deg) rotateY(-1deg);
          border-color: rgba(194,161,77,0.55);
          box-shadow:
            0 26px 50px rgba(60,25,35,0.15),
            0 10px 22px rgba(60,25,35,0.08);
        }
        .editorial-card-media {
          position: relative;
          aspect-ratio: 3 / 2;
          overflow: hidden;
        }
        .editorial-card-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,15,25,0.28) 0%, transparent 55%);
          pointer-events: none;
        }
        .editorial-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255,240,200,0.2) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 800ms ease;
          pointer-events: none;
        }
        .editorial-card:hover .editorial-card-shine { transform: translateX(100%); }
        .editorial-card-copy {
          padding: 1.1rem 1.25rem 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .editorial-card-title {
          font-size: 1.12rem;
          line-height: 1.25;
          color: var(--text-strong, #2E2A2B);
          margin: 0;
          font-weight: 500;
          text-wrap: balance;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .editorial-card-desc {
          font-size: 0.87rem;
          line-height: 1.5;
          color: var(--text-muted, #716A6B);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .editorial-card-copy .editorial-meta {
          color: var(--text-muted, #716A6B);
          margin-top: auto;
          padding-top: 0.4rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .editorial-cover, .editorial-sec-card, .editorial-card {
            transition: none;
          }
          .editorial-cover:hover, .editorial-sec-card:hover, .editorial-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
