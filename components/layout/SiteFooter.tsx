'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BrandArrow } from '@/components/shared/BrandArrow'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/metodo', label: 'O Método' },
  { href: '/mentoria', label: 'A Mentoria' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

const colStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }
const headStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-2xs)',
  letterSpacing: 'var(--tracking-widest)',
  textTransform: 'uppercase',
  color: 'var(--gold-300)',
  marginBottom: 'var(--space-2)',
}
const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-on-wine)',
  textDecoration: 'none',
  opacity: 0.82,
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: '1px solid rgba(214,188,129,0.35)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gold-300)',
        transition: 'transform 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
        e.currentTarget.style.borderColor = 'var(--gold-400)'
        e.currentTarget.style.color = 'var(--gold-400)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,140,72,0.20)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.borderColor = 'rgba(214,188,129,0.35)'
        e.currentTarget.style.color = 'var(--gold-300)'
        e.currentTarget.style.boxShadow = ''
      }}
    >
      {children}
    </a>
  )
}

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

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setState('error'); return }
    setState('loading')
    setTimeout(() => setState('success'), 1100)
  }

  return (
    <footer style={{ background: 'var(--surface-wine-deep)', color: 'var(--text-on-wine)', paddingTop: 'var(--space-10)' }}>
      <div className="elv-wrap">
        <div style={{ display: 'grid', gap: 'var(--space-9)' }}>
          <div className="elv-footer-top" style={{ display: 'grid', gap: 'var(--space-9)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '34ch' }}>
              <strong
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--white-warm)',
                  letterSpacing: 'var(--tracking-tight)',
                  fontWeight: 'var(--weight-semibold)',
                }}
              >
                Elevem-se
              </strong>
              <p
                className="elv-serif elv-on-wine"
                style={{ fontSize: 'var(--text-lg)', fontStyle: 'italic', lineHeight: 1.35, margin: 0, color: 'var(--gold-300)' }}
              >
                Casamentos extraordinários não acontecem por sorte.
                <br />
                <span style={{ color: 'var(--white-warm)', fontStyle: 'normal', fontWeight: 500 }}>Eles são construídos.</span>
              </p>
              <Link
                href="/mentoria#aplicar"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--action-gold)',
                  color: 'var(--wine-950)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  marginTop: 'var(--space-3)',
                  alignSelf: 'flex-start',
                }}
              >
                Quero aplicar
                <BrandArrow variant="fios" size={20} />
              </Link>
              <form onSubmit={submit} noValidate style={{ display: 'none' }}>
                {/* Newsletter form desativada — só no scope da aplicação */}
                {state === 'success' ? null : (
                  <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <button type="submit">{state === 'loading' ? 'Enviando' : 'ok'}</button>
                  </div>
                )}
                {state === 'error' && (
                  <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--wine-300)' }}>Digite um e-mail válido.</span>
                )}
              </form>
            </div>

            <div className="elv-footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-7)' }}>
              <div style={colStyle}>
                <div style={headStyle}>Navegar</div>
                {NAV_LINKS.map((l) => <Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>)}
              </div>
              <div style={colStyle}>
                <div style={headStyle}>A mentoria</div>
                <Link href="/mentoria" style={linkStyle}>Visão geral</Link>
                <Link href="/mentoria#oferta" style={linkStyle}>O que inclui</Link>
                <Link href="/mentoria#investimento" style={linkStyle}>Investimento</Link>
                <Link href="/mentoria#faq" style={linkStyle}>Perguntas frequentes</Link>
                <Link href="/mentoria#aplicar" style={linkStyle}>Aplicar</Link>
              </div>
              <div style={colStyle}>
                <div style={headStyle}>Fale conosco</div>
                <Link href="/contato" style={linkStyle}>Falar com a gente</Link>
                <a href="mailto:contato@elevem-se.com" style={linkStyle}>contato@elevem-se.com</a>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', height: 1, background: 'rgba(214,188,129,0.18)', margin: 'var(--space-8) 0 var(--space-5)' }} />

        {/* Ícones sociais grandes centralizados */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-5)',
            padding: 'var(--space-5) 0 var(--space-6)',
          }}
        >
          <SocialLink href="https://instagram.com/marcelazanardo" label="Instagram @marcelazanardo">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="https://instagram.com/maykoalvess" label="Instagram @maykoalvess">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="https://youtube.com/@mayko.alvess" label="YouTube Maycko Alves">
            <YouTubeIcon />
          </SocialLink>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--space-7)' }}>
          <span
            className="elv-serif"
            style={{ fontStyle: 'italic', fontSize: 'var(--text-md)', color: 'var(--gold-300)', letterSpacing: 'var(--tracking-tight)' }}
          >
            Marcela <span style={{ color: 'var(--gold-500)', fontStyle: 'normal' }}>&</span> Maycko
          </span>
          <p
            className="elv-sans"
            style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--gold-300)', opacity: 0.7, margin: 0 }}
          >
            © {new Date().getFullYear()} Elevem-se · Mentoria para casais · CNPJ e CPF sintonizados
          </p>
        </div>
      </div>
    </footer>
  )
}
