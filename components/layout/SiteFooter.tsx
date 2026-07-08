'use client'

import { useState } from 'react'
import Link from 'next/link'

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
                className="elv-on-wine elv-sans"
                style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-relaxed)', margin: 0, opacity: 0.9 }}
              >
                Mentoria para casais empreendedores. Relacionamento, propósito e prosperidade — em estrutura, não em sorte.
              </p>
              <form onSubmit={submit} noValidate style={{ marginTop: 'var(--space-2)' }}>
                <div style={headStyle}>Entrar na lista</div>
                {state === 'success' ? (
                  <p className="elv-sans" style={{ fontSize: 'var(--text-sm)', color: 'var(--gold-200)', margin: 0 }}>Recebido. Vocês entram pela lista. ✦</p>
                ) : (
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    <input
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle') }}
                      type="email"
                      placeholder="seu melhor e-mail"
                      aria-label="E-mail"
                      style={{
                        flex: '1 1 200px',
                        minWidth: 0,
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-pill)',
                        border: `1px solid ${state === 'error' ? 'var(--wine-300)' : 'rgba(214,188,129,0.4)'}`,
                        background: 'rgba(255,253,250,0.06)',
                        color: 'var(--white-warm)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--text-sm)',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      disabled={state === 'loading'}
                      style={{
                        padding: '12px 20px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--action-gold)',
                        color: 'var(--wine-950)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--weight-medium)',
                        letterSpacing: 'var(--tracking-wider)',
                        textTransform: 'uppercase',
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {state === 'loading' ? 'Enviando…' : 'Quero entrar'}
                    </button>
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
                <Link href="/metodo" style={linkStyle}>O método</Link>
                <Link href="/mentoria#oferta" style={linkStyle}>O que inclui</Link>
                <Link href="/mentoria#faq" style={linkStyle}>Perguntas frequentes</Link>
                <Link href="/mentoria#aplicar" style={linkStyle}>Aplicar</Link>
              </div>
              <div style={colStyle}>
                <div style={headStyle}>Conteúdo</div>
                <Link href="/blog" style={linkStyle}>Blog</Link>
                <Link href="/sobre" style={linkStyle}>Quem conduz</Link>
                <Link href="/contato" style={linkStyle}>Falar com a gente</Link>
              </div>
              <div style={colStyle}>
                <div style={headStyle}>Social</div>
                <a href="https://instagram.com/marcelazanardo" style={linkStyle}>@marcelazanardo</a>
                <a href="https://instagram.com/maykoalvess" style={linkStyle}>@maykoalvess</a>
                <a href="https://youtube.com/@mayko.alvess" style={linkStyle}>YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', height: 1, background: 'rgba(214,188,129,0.18)', margin: 'var(--space-8) 0 var(--space-5)' }} />
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
