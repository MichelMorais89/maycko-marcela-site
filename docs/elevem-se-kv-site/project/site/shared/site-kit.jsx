/* ============================================================
   Elevem-se — KV de Site · Kit compartilhado
   Nav (desktop + mobile), Footer completo, Reveal-on-scroll,
   helpers de layout. Compõe os primitivos do Design System.
   Exporta tudo em window para os outros scripts da página.
   ============================================================ */

let Logo, Badge, Button, Card, Quote, Signature, Avatar, Input, Field;
function bindDS() {
  const NS = window.ElevemSeDesignSystem_00d476 || {};
  ({ Logo, Badge, Button, Card, Quote, Signature, Avatar, Input, Field } = NS);
}

/* ---------- hooks ------------------------------------------------------ */
function useMediaQuery(query) {
  const get = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : false);
  const [match, setMatch] = React.useState(get);
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const h = () => setMatch(m.matches);
    h();
    m.addEventListener ? m.addEventListener('change', h) : m.addListener(h);
    return () => { m.removeEventListener ? m.removeEventListener('change', h) : m.removeListener(h); };
  }, [query]);
  return match;
}

/* IntersectionObserver-driven reveal. Wrap any block. */
function Reveal({ children, as = 'div', delay = 0, className = '', style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('is-in'); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { io.unobserve(el); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in'))); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return React.createElement(as, { ref, className: `elv-reveal ${className}`.trim(), 'data-delay': delay || undefined, style, ...rest }, children);
}

/* ---------- small presentational helpers ------------------------------ */
function Eyebrow({ children, tone = 'gold' }) {
  return Badge ? <Badge tone={tone} rule>{children}</Badge>
    : <span className="elv-eyebrow">{children}</span>;
}

function Photo({ src, alt = '', ratio = '4 / 5', frame = true, position = '50% 30%', className = '', style }) {
  return (
    <div className={`elv-photo ${frame ? 'elv-photo--frame' : ''} ${className}`.trim()} style={{ aspectRatio: ratio, ...style }}>
      {src ? <img src={src} alt={alt} style={{ objectPosition: position }} loading="lazy" /> : null}
    </div>
  );
}

function SectionHead({ eyebrow, title, lead, align = 'left', tone = 'dark', titleClass = 'elv-fluid-h2', max = '24ch' }) {
  const isCenter = align === 'center';
  return (
    <div className={isCenter ? 'elv-center' : ''} style={{ maxWidth: isCenter ? '46rem' : undefined, marginInline: isCenter ? 'auto' : undefined }}>
      {eyebrow ? <Eyebrow tone={tone === 'light' ? 'onWine' : 'gold'}>{eyebrow}</Eyebrow> : null}
      {title ? <h2 className={`elv-h ${titleClass} ${tone === 'light' ? 'elv-h--light' : ''}`} style={{ marginTop: 'var(--space-4)', maxWidth: max, textWrap: 'balance' }}>{title}</h2> : null}
      {lead ? <p className={`elv-lead elv-fluid-lead ${tone === 'light' ? 'elv-on-wine' : 'elv-muted'}`} style={{ marginTop: 'var(--space-5)', maxWidth: '48ch', marginInline: isCenter ? 'auto' : undefined }}>{lead}</p> : null}
    </div>
  );
}

/* ---------- navigation ------------------------------------------------- */
const NAV_LINKS = [
  { href: 'home.html', label: 'Home' },
  { href: 'sobre.html', label: 'Sobre' },
  { href: 'metodo.html', label: 'O Método' },
  { href: 'mentoria.html', label: 'A Mentoria' },
  { href: 'blog.html', label: 'Blog' },
  { href: 'contato.html', label: 'Contato' },
];

function currentPage() {
  const p = (window.location.pathname.split('/').pop() || 'home.html').toLowerCase();
  return p === '' || p === 'index.html' ? 'home.html' : p;
}

function SiteNav({ active }) {
  const isDesktop = useMediaQuery('(min-width: 1000px)');
  const [open, setOpen] = React.useState(false);
  const here = active || currentPage();

  React.useEffect(() => { document.body.style.overflow = open && !isDesktop ? 'hidden' : ''; }, [open, isDesktop]);
  React.useEffect(() => { if (isDesktop) setOpen(false); }, [isDesktop]);

  const linkStyle = (l) => ({
    fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', textDecoration: 'none',
    letterSpacing: '0.02em', position: 'relative', paddingBottom: 4, whiteSpace: 'nowrap',
    color: here === l.href ? 'var(--wine-700)' : 'var(--text-body)',
    fontWeight: here === l.href ? 'var(--weight-semibold)' : 'var(--weight-regular)',
    transition: 'color var(--duration-fast) var(--ease-standard)',
  });

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'color-mix(in srgb, var(--ivory) 86%, transparent)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="elv-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: 'var(--space-3)' }}>
        <a href="home.html" aria-label="Elevem-se — início" style={{ display: 'inline-flex', textDecoration: 'none', flex: 'none', whiteSpace: 'nowrap' }}>
          {Logo ? <Logo variant="horizontal" tone="wine" size={isDesktop ? 36 : 32} tagline={false} /> : <strong>Elevem-se</strong>}
        </a>

        {isDesktop ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="elv-nav-link" style={linkStyle(l)}>
                {l.label}
                {here === l.href ? <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 1, background: 'var(--gold-500)' }} /> : null}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={() => (window.location.href = 'mentoria.html#aplicar')}>Quero a mentoria</Button>
          </div>
        ) : (
          <button aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}
            style={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', gap: 5, width: 44, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', padding: 10 }}>
            <span style={{ height: 2, background: 'var(--wine-700)', borderRadius: 2, transition: 'transform 240ms var(--ease-standard), opacity 240ms', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ height: 2, background: 'var(--wine-700)', borderRadius: 2, transition: 'opacity 180ms', opacity: open ? 0 : 1 }} />
            <span style={{ height: 2, background: 'var(--wine-700)', borderRadius: 2, transition: 'transform 240ms var(--ease-standard)', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        )}
      </div>

      {/* mobile drawer */}
      {!isDesktop ? (
        <div style={{ overflow: 'hidden', maxHeight: open ? '80vh' : 0, transition: 'max-height 360ms var(--ease-entrance)', borderTop: open ? '1px solid var(--border-hairline)' : 'none', background: 'var(--surface-page)' }}>
          <div className="elv-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', paddingBlock: 'var(--space-5)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', textDecoration: 'none', color: here === l.href ? 'var(--wine-700)' : 'var(--text-strong)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-hairline)' }}>{l.label}</a>
            ))}
            <div style={{ marginTop: 'var(--space-4)' }}>
              <Button variant="primary" size="lg" fullWidth onClick={() => (window.location.href = 'mentoria.html#aplicar')}>Quero a mentoria</Button>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

/* ---------- footer ----------------------------------------------------- */
function SiteFooter() {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle'); // idle | loading | success | error
  const col = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' };
  const head = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 'var(--space-2)' };
  const link = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-on-wine)', textDecoration: 'none', opacity: 0.82, transition: 'opacity 140ms' };

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setState('error'); return; }
    setState('loading');
    setTimeout(() => setState('success'), 1100);
  };

  return (
    <footer style={{ background: 'var(--surface-wine-deep)', color: 'var(--text-on-wine)', paddingTop: 'var(--space-10)' }}>
      <div className="elv-wrap">
        <div className="elv-grid" style={{ gridTemplateColumns: '1fr', gap: 'var(--space-9)' }}>
          <div className="elv-footer-top" style={{ display: 'grid', gap: 'var(--space-9)' }}>
            {/* brand + newsletter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '34ch' }}>
              {Logo ? <Logo variant="horizontal" tone="light" size={42} /> : null}
              <p className="elv-on-wine elv-sans" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-relaxed)', margin: 0, opacity: 0.9 }}>
                Mentoria para casais empreendedores. Relacionamento, propósito e prosperidade — em estrutura, não em sorte.
              </p>
              <form onSubmit={submit} noValidate style={{ marginTop: 'var(--space-2)' }}>
                <div style={head}>Entrar na lista</div>
                {state === 'success' ? (
                  <p className="elv-sans" style={{ fontSize: 'var(--text-sm)', color: 'var(--gold-200)', margin: 0 }}>Recebido. Vocês entram pela lista. ✦</p>
                ) : (
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    <input value={email} onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle'); }} type="email" placeholder="seu melhor e-mail" aria-label="E-mail"
                      style={{ flex: '1 1 200px', minWidth: 0, padding: '12px 16px', borderRadius: 'var(--radius-pill)', border: `1px solid ${state === 'error' ? 'var(--wine-300)' : 'rgba(214,188,129,0.4)'}`, background: 'rgba(255,253,250,0.06)', color: 'var(--white-warm)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', outline: 'none' }} />
                    <Button variant="gold" size="md" type="submit" disabled={state === 'loading'}>{state === 'loading' ? 'Enviando…' : 'Quero entrar'}</Button>
                  </div>
                )}
                {state === 'error' ? <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--wine-300)' }}>Digite um e-mail válido.</span> : null}
              </form>
            </div>

            {/* link columns */}
            <div className="elv-footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-7)' }}>
              <div style={col}><div style={head}>Navegar</div>
                {NAV_LINKS.map((l) => <a key={l.href} href={l.href} style={link}>{l.label}</a>)}
              </div>
              <div style={col}><div style={head}>A mentoria</div>
                <a href="metodo.html" style={link}>O método</a>
                <a href="mentoria.html#oferta" style={link}>O que inclui</a>
                <a href="mentoria.html#faq" style={link}>Perguntas frequentes</a>
                <a href="mentoria.html#aplicar" style={link}>Aplicar</a>
              </div>
              <div style={col}><div style={head}>Conteúdo</div>
                <a href="blog.html" style={link}>Blog</a>
                <a href="sobre.html" style={link}>Quem conduz</a>
                <a href="contato.html" style={link}>Falar com a gente</a>
              </div>
              <div style={col}><div style={head}>Social</div>
                <a href="https://instagram.com/marcelazanardo" style={link}>@marcelazanardo</a>
                <a href="https://instagram.com/maykoalvess" style={link}>@maykoalvess</a>
                <a href="https://youtube.com/@mayko.alvess" style={link}>YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', height: 1, background: 'rgba(214,188,129,0.18)', margin: 'var(--space-8) 0 var(--space-5)' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--space-7)' }}>
          {Signature ? <Signature mentor="couple" tone="light" size="sm" /> : null}
          <p className="elv-sans" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--gold-300)', opacity: 0.7, margin: 0 }}>© {new Date().getFullYear()} Elevem-se · Mentoria para casais · CNPJ e CPF sintonizados</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- mobile sticky conversion bar ------------------------------- */
function MobileCTABar({ label = 'Vagas abertas neste ciclo', cta = 'Aplicar', href = 'mentoria.html#aplicar' }) {
  const isMobile = useMediaQuery('(max-width: 999px)');
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!isMobile) { setShown(false); return; }
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom = window.innerHeight + y > document.documentElement.scrollHeight - 320;
      setShown(y > 560 && !nearBottom);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);
  if (!isMobile) return null;
  return (
    <div aria-hidden={!shown} style={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 55, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)', padding: '10px 12px 10px 18px', background: 'var(--surface-wine-deep)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-lg)', transform: shown ? 'translateY(0)' : 'translateY(140%)', opacity: shown ? 1 : 0, transition: 'transform var(--duration-slow) var(--ease-entrance), opacity var(--duration-base) var(--ease-standard)', pointerEvents: shown ? 'auto' : 'none' }}>
      <span className="elv-sans" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--gold-100)', lineHeight: 1.2 }}>{label}</span>
      <Button variant="gold" size="sm" onClick={() => (window.location.href = href)}>{cta}</Button>
    </div>
  );
}

/* ---------- page shell ------------------------------------------------- */
function Page({ active, children, mobileCta = true, ctaLabel, ctaText, ctaHref }) {
  bindDS();
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <a href="#conteudo" className="elv-skip">Pular para o conteúdo</a>
      <SiteNav active={active} />
      <main id="conteudo">{children}</main>
      <SiteFooter />
      {mobileCta ? <MobileCTABar label={ctaLabel} cta={ctaText} href={ctaHref} /> : null}
    </React.Fragment>
  );
}

Object.assign(window, { bindDS, useMediaQuery, Reveal, Eyebrow, Photo, SectionHead, SiteNav, SiteFooter, MobileCTABar, Page, NAV_LINKS, currentPage });
