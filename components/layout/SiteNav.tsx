'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/metodo', label: 'O Método' },
  { href: '/mentoria', label: 'A Mentoria' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

function useMediaQuery(query: string) {
  const [match, setMatch] = useState(false)
  useEffect(() => {
    const m = window.matchMedia(query)
    const h = () => setMatch(m.matches)
    h()
    m.addEventListener('change', h)
    return () => m.removeEventListener('change', h)
  }, [query])
  return match
}

interface SiteNavProps {
  active?: string
}

export function SiteNav({ active = '/' }: SiteNavProps) {
  const isDesktop = useMediaQuery('(min-width: 1000px)')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open && !isDesktop ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open, isDesktop])

  useEffect(() => {
    if (isDesktop) setOpen(false)
  }, [isDesktop])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'color-mix(in srgb, var(--ivory) 86%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div
        className="elv-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: 'var(--space-3)',
        }}
      >
        <Link href="/" aria-label="Elevem-se — início" style={{ display: 'inline-flex', textDecoration: 'none', flex: 'none' }}>
          <strong
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isDesktop ? 'var(--text-lg)' : 'var(--text-md)',
              color: 'var(--wine-700)',
              letterSpacing: 'var(--tracking-tight)',
              fontWeight: 'var(--weight-semibold)',
            }}
          >
            Elevem-se
          </strong>
        </Link>

        {isDesktop ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="elv-nav-link"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    position: 'relative',
                    paddingBottom: 4,
                    whiteSpace: 'nowrap',
                    color: isActive ? 'var(--wine-700)' : 'var(--text-body)',
                    fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-regular)',
                    transition: 'color var(--duration-fast) var(--ease-standard)',
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: -2,
                        height: 1,
                        background: 'var(--gold-500)',
                      }}
                    />
                  )}
                </Link>
              )
            })}
            <Link
              href="/mentoria#aplicar"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--action-primary)',
                color: 'var(--white-warm)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background var(--duration-fast) var(--ease-standard)',
              }}
            >
              Quero a mentoria
            </Link>
          </div>
        ) : (
          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              width: 44,
              height: 44,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 10,
            }}
          >
            <span style={{ height: 2, background: 'var(--wine-700)', borderRadius: 2, transition: 'transform 240ms var(--ease-standard), opacity 240ms', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ height: 2, background: 'var(--wine-700)', borderRadius: 2, transition: 'opacity 180ms', opacity: open ? 0 : 1 }} />
            <span style={{ height: 2, background: 'var(--wine-700)', borderRadius: 2, transition: 'transform 240ms var(--ease-standard)', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        )}
      </div>

      {!isDesktop && (
        <div
          style={{
            overflow: 'hidden',
            maxHeight: open ? '80vh' : 0,
            transition: 'max-height 360ms var(--ease-entrance)',
            borderTop: open ? '1px solid var(--border-hairline)' : 'none',
            background: 'var(--surface-page)',
          }}
        >
          <div
            className="elv-wrap"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', paddingBlock: 'var(--space-5)' }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  textDecoration: 'none',
                  color: active === l.href ? 'var(--wine-700)' : 'var(--text-strong)',
                  padding: 'var(--space-3) 0',
                  borderBottom: '1px solid var(--border-hairline)',
                }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 'var(--space-4)' }}>
              <Link
                href="/mentoria#aplicar"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--action-primary)',
                  color: 'var(--white-warm)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Quero a mentoria
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
