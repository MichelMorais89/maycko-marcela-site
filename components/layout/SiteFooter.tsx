'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { openAplicarModal } from '@/components/aplicar/AplicarModal'

const COLS = [
  {
    head: 'CASAL',
    links: [
      { label: 'Biografia', href: '/biografia' },
      { label: 'Nossa história', href: '/biografia#historia' },
      { label: 'Imprensa', href: '/contato' },
    ],
  },
  {
    head: 'MÉTODO',
    links: [
      { label: 'O Caminho', href: '/metodo' },
      { label: 'Filosofia', href: '/metodo#filosofia' },
      { label: '3 Fases', href: '/metodo#fases' },
      { label: 'Diagnóstico', href: '/metodo#quiz' },
    ],
  },
  {
    head: 'MENTORIA',
    links: [
      { label: 'Experiência', href: '/mentoria' },
      { label: 'Para quem é', href: '/mentoria#perfil' },
      { label: 'Aplicação', href: '/mentoria#aplicar', action: 'openAplicar' as const },
      { label: 'FAQ', href: '/mentoria#faq' },
    ],
  },
  {
    head: 'CONTEÚDO',
    links: [
      { label: 'Podcasts', href: '/conteudo/podcasts' },
      { label: 'Ebooks', href: '/conteudo/ebooks' },
      { label: 'Vídeos', href: '/conteudo/videos' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    head: 'CONTATO & REDES',
    links: [
      { label: 'Fale conosco', href: '/contato' },
      { label: 'Instagram Marcela', href: 'https://www.instagram.com/marcelazanardo/', external: true },
      { label: 'Instagram Maycko', href: 'https://www.instagram.com/maycko.alves/', external: true },
      { label: 'YouTube', href: 'https://youtube.com/@marcelaemaycko', external: true },
      { label: 'WhatsApp', href: 'https://wa.me/5511941688639', external: true },
    ],
  },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.5 7.2c-.24-.9-.94-1.6-1.83-1.84C19.06 5 12 5 12 5s-7.06 0-8.67.36c-.89.24-1.59.94-1.83 1.84C1.15 8.8 1.15 12 1.15 12s0 3.2.35 4.8c.24.9.94 1.6 1.83 1.84 1.61.36 8.67.36 8.67.36s7.06 0 8.67-.36c.89-.24 1.59-.94 1.83-1.84.35-1.6.35-4.8.35-4.8s0-3.2-.35-4.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.52 5.82L0 24l6.34-1.66A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.52 18.5a9.93 9.93 0 01-5.06-1.37l-.36-.22-3.76.98.99-3.66-.23-.38A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

interface ColItem {
  label: string
  href: string
  external?: boolean
  action?: 'openAplicar'
}

function FooterCol({ head, links, openIdx, onToggle, idx }: {
  head: string
  links: ColItem[]
  openIdx: number | null
  onToggle: (i: number) => void
  idx: number
}) {
  const isOpen = openIdx === idx

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    color: 'rgba(246,239,216,0.72)',
    textDecoration: 'none',
    lineHeight: 1.6,
    transition: 'color 180ms ease',
    display: 'block',
  }

  const links_el = links.map((l) => {
    if (l.action === 'openAplicar') {
      return (
        <button
          key={l.href}
          type="button"
          onClick={() => openAplicarModal()}
          style={{
            ...linkStyle,
            background: 'transparent',
            border: 'none',
            padding: 0,
            textAlign: 'left',
            cursor: 'pointer',
            font: 'inherit',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--wine-400, #A8636F)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(246,239,216,0.72)' }}
        >
          {l.label}
        </button>
      )
    }
    return l.external ? (
      <a
        key={l.href}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--wine-400, #A8636F)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(246,239,216,0.72)' }}
      >
        {l.label}
      </a>
    ) : (
      <Link
        key={l.href}
        href={l.href}
        style={linkStyle}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--wine-400, #A8636F)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(246,239,216,0.72)' }}
      >
        {l.label}
      </Link>
    )
  })

  return (
    <div>
      {/* Desktop heading */}
      <p
        className="elv-sans footer-col-head"
        style={{
          fontSize: 'clamp(0.65rem, 0.62rem + 0.16vw, 0.78rem)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold-300, #E0CB99)',
          fontWeight: 600,
          margin: '0 0 var(--space-4)',
        }}
      >
        {head}
      </p>

      {/* Mobile accordion toggle */}
      <button
        className="footer-col-toggle"
        aria-expanded={isOpen}
        onClick={() => onToggle(idx)}
        style={{
          display: 'none',
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(194,161,77,0.15)',
          padding: 'var(--space-3) 0',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.65rem, 0.62rem + 0.16vw, 0.78rem)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold-300, #E0CB99)',
          fontWeight: 600,
          textAlign: 'left',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {head}
        <span aria-hidden="true" style={{ fontSize: '1rem', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease', display: 'inline-block' }}>▾</span>
      </button>

      <div
        className="footer-col-links"
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}
      >
        {links_el}
      </div>
    </div>
  )
}

export function SiteFooter() {
  const [openCol, setOpenCol] = useState<number | null>(null)
  const signatureRef = useRef<HTMLDivElement>(null)

  const toggle = (i: number) => setOpenCol((prev) => prev === i ? null : i)

  // Re-dispara a animação da assinatura toda vez que o footer entra em view
  useEffect(() => {
    const el = signatureRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // remove + reflow + add para re-disparar as animations
            el.classList.remove('is-visible')
            void el.offsetWidth
            el.classList.add('is-visible')
          } else {
            el.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .footer-col-head { display: none !important; }
          .footer-col-toggle { display: flex !important; }
          .footer-col-links { overflow: hidden; max-height: 0; transition: max-height 300ms ease; }
          .footer-col-links.open { max-height: 400px; }
          .footer-mega-grid { grid-template-columns: 1fr !important; gap: var(--space-0) !important; }
        }
        .footer-social-link { color: var(--gold-300, #E0CB99); transition: color 180ms ease, transform 180ms ease; }
        .footer-social-link:hover { color: var(--wine-400, #A8636F) !important; transform: translateY(-2px); }
        .ebook-card-grid { grid-template-columns: minmax(220px, 380px) 1fr; }
        @media (max-width: 700px) { .ebook-card-grid { grid-template-columns: 1fr !important; } }

        /* Assinatura da marca, reveal cinematográfico. Só dispara quando .is-visible */
        @keyframes footerSigOrnamentIn {
          0%   { opacity: 0; transform: scaleX(0.4); }
          100% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes footerSigLine1In {
          0%   { opacity: 0; transform: translateY(6px); letter-spacing: 0.55em; }
          100% { opacity: 1; transform: translateY(0); letter-spacing: 0.42em; }
        }
        @keyframes footerSigLine2In {
          0%   { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes footerSigLine2Glow {
          0%,100% { text-shadow: 0 0 0 rgba(210,182,115,0); }
          50%     { text-shadow: 0 0 22px rgba(210,182,115,0.45), 0 0 6px rgba(210,182,115,0.35); }
        }

        /* Estado idle, invisível até entrar em view */
        .footer-signature-line1,
        .footer-signature-line2,
        .footer-signature-ornament--top,
        .footer-signature-ornament--bottom {
          opacity: 0;
        }

        /* Quando o footer entra em view, dispara em cascata */
        .footer-signature.is-visible .footer-signature-ornament--top {
          animation: footerSigOrnamentIn 480ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .footer-signature.is-visible .footer-signature-line1 {
          animation: footerSigLine1In 520ms cubic-bezier(0.22, 1, 0.36, 1) 140ms forwards;
        }
        .footer-signature.is-visible .footer-signature-line2 {
          animation:
            footerSigLine2In 600ms cubic-bezier(0.22, 1, 0.36, 1) 340ms forwards,
            footerSigLine2Glow 3.5s ease-in-out 1100ms infinite;
        }
        .footer-signature.is-visible .footer-signature-ornament--bottom {
          animation: footerSigOrnamentIn 480ms cubic-bezier(0.22, 1, 0.36, 1) 620ms forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-signature-line1,
          .footer-signature-line2,
          .footer-signature-ornament--top,
          .footer-signature-ornament--bottom {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <footer
        style={{
          position: 'relative',
          background: 'var(--surface-anchor, #16233A)',
          color: 'var(--text-on-wine, #F6EFD8)',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Grade principal, 5 colunas */}
          <div
            className="elv-wrap"
            style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}
          >
            <div
              className="footer-mega-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 'clamp(24px, 4vw, 48px)',
              }}
            >
              {COLS.map((col, i) => (
                <FooterCol
                  key={col.head}
                  head={col.head}
                  links={col.links}
                  openIdx={openCol}
                  onToggle={toggle}
                  idx={i}
                />
              ))}
            </div>
          </div>

          {/* Separador dourado */}
          <div
            aria-hidden="true"
            style={{
              height: 1,
              background: 'linear-gradient(to right, transparent 0%, rgba(194,161,77,0.3) 20%, rgba(194,161,77,0.3) 80%, transparent 100%)',
              marginInline: 'clamp(24px, 5vw, 80px)',
            }}
          />

          {/* Assinatura da marca, tratamento editorial (re-anima cada vez que entra em view) */}
          <div
            ref={signatureRef}
            className="elv-wrap footer-signature"
            style={{
              paddingBlock: 'clamp(3rem, 6vw, 5rem)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Ornamento superior, linha + losango + linha */}
            <div
              aria-hidden="true"
              className="footer-signature-ornament footer-signature-ornament--top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                opacity: 0,
              }}
            >
              <span style={{ display: 'inline-block', width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-500))' }} />
              <span style={{ display: 'inline-block', width: 8, height: 8, border: '1px solid var(--gold-500)', transform: 'rotate(45deg)' }} />
              <span style={{ display: 'inline-block', width: 60, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-500))' }} />
            </div>

            {/* Assinatura em 2 tempos, uppercase + itálico dourado brilhante */}
            <p
              style={{
                margin: 0,
                lineHeight: 1.35,
              }}
            >
              <span
                className="elv-sans footer-signature-line1"
                style={{
                  display: 'block',
                  fontSize: 'clamp(0.72rem, 0.68rem + 0.32vw, 1rem)',
                  letterSpacing: '0.42em',
                  textTransform: 'uppercase',
                  color: 'rgba(246,239,216,0.72)',
                  fontWeight: 500,
                  marginBottom: 'clamp(0.6rem, 1vw, 0.9rem)',
                }}
              >
                Casamentos extraordinários
              </span>
              <span
                className="elv-serif footer-signature-line2"
                style={{
                  display: 'block',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--gold-400, #D2B673)',
                  letterSpacing: '-0.005em',
                  position: 'relative',
                }}
              >
                são construídos com intenção.
              </span>
            </p>

            {/* Ornamento inferior */}
            <div
              aria-hidden="true"
              className="footer-signature-ornament footer-signature-ornament--bottom"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: 'clamp(1.5rem, 2.5vw, 2rem)',
                opacity: 0,
              }}
            >
              <span style={{ display: 'inline-block', width: 42, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-500))' }} />
              <span style={{ display: 'inline-block', width: 6, height: 6, border: '1px solid var(--gold-500)', transform: 'rotate(45deg)' }} />
              <span style={{ display: 'inline-block', width: 42, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-500))' }} />
            </div>
          </div>

          {/* Separador dourado */}
          <div
            aria-hidden="true"
            style={{
              height: 1,
              background: 'linear-gradient(to right, transparent 0%, rgba(194,161,77,0.3) 20%, rgba(194,161,77,0.3) 80%, transparent 100%)',
              marginInline: 'clamp(24px, 5vw, 80px)',
            }}
          />

          {/* Ícones sociais */}
          <div
            className="elv-wrap"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-5)',
              paddingBlock: 'var(--space-6)',
            }}
          >
            <a
              className="footer-social-link"
              href="https://www.instagram.com/marcelazanardo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Marcela"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(194,161,77,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <InstagramIcon />
            </a>
            <a
              className="footer-social-link"
              href="https://www.instagram.com/maycko.alves/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Maycko"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(194,161,77,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <InstagramIcon />
            </a>
            <a
              className="footer-social-link"
              href="https://youtube.com/@marcelaemaycko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal YouTube"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(194,161,77,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <YouTubeIcon />
            </a>
            <a
              className="footer-social-link"
              href="https://wa.me/5511941688639"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(194,161,77,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <WhatsAppIcon />
            </a>
          </div>

          {/* Linha inferior */}
          <div
            className="elv-wrap"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderTop: '1px solid rgba(194,161,77,0.12)',
              paddingTop: 'var(--space-5)',
            }}
          >
            <span
              className="elv-serif"
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                fontStyle: 'italic',
                color: 'var(--gold-400, #D2B673)',
                letterSpacing: '-0.005em',
              }}
            >
              ELEVEM-SE
            </span>

            <p
              className="elv-sans"
              style={{
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-wide)',
                color: 'rgba(214,188,129,0.55)',
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Maycko e Marcela · Todos os direitos reservados
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
              <Link
                href="/privacidade"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-xs)',
                  color: 'rgba(214,188,129,0.55)',
                  textDecoration: 'none',
                }}
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-xs)',
                  color: 'rgba(214,188,129,0.55)',
                  textDecoration: 'none',
                }}
              >
                Termos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
