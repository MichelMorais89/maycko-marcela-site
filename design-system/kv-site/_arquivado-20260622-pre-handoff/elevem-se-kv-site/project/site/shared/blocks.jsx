/* ============================================================
   Elevem-se — KV de Site · Blocos reutilizáveis (web-only)
   Accordion (FAQ), Tabs, Timeline e LeadCapture com estados.
   Compõem os tokens/componentes do Design System. Exporta em window.
   ============================================================ */
(function () {
  function dsNS() { return window.ElevemSeDesignSystem_00d476 || {}; }

  /* ---- Accordion (FAQ) --------------------------------------------- */
  function Accordion({ items, single = true }) {
    const [open, setOpen] = React.useState(single ? 0 : []);
    const isOpen = (i) => (single ? open === i : open.includes(i));
    const toggle = (i) => {
      if (single) setOpen(open === i ? -1 : i);
      else setOpen(open.includes(i) ? open.filter((x) => x !== i) : [...open, i]);
    };
    return (
      <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
        {items.map((it, i) => {
          const o = isOpen(i);
          return (
            <div key={i} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
              <button onClick={() => toggle(i)} aria-expanded={o}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-5)', padding: 'var(--space-5) 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span className="elv-serif" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-medium)', color: o ? 'var(--wine-700)' : 'var(--text-strong)', transition: 'color var(--duration-fast) var(--ease-standard)' }}>{it.q}</span>
                <span aria-hidden="true" style={{ flex: 'none', width: 28, height: 28, position: 'relative', transition: 'transform var(--duration-base) var(--ease-standard)', transform: o ? 'rotate(45deg)' : 'none' }}>
                  <span style={{ position: 'absolute', top: 13, left: 6, width: 16, height: 1.5, background: 'var(--gold-600)' }} />
                  <span style={{ position: 'absolute', top: 6, left: 13, width: 1.5, height: 16, background: 'var(--gold-600)' }} />
                </span>
              </button>
              <div style={{ overflow: 'hidden', maxHeight: o ? 320 : 0, opacity: o ? 1 : 0, transition: 'max-height var(--duration-slow) var(--ease-entrance), opacity var(--duration-base) var(--ease-standard)' }}>
                <p className="elv-sans" style={{ margin: 0, padding: '0 0 var(--space-5)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: '60ch' }}>{it.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  /* ---- Tabs --------------------------------------------------------- */
  function Tabs({ tabs }) {
    const [active, setActive] = React.useState(0);
    return (
      <div>
        <div role="tablist" style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', borderBottom: '1px solid var(--border-hairline)', marginBottom: 'var(--space-7)' }}>
          {tabs.map((t, i) => (
            <button key={i} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '12px 18px', marginBottom: -1, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', fontWeight: 'var(--weight-semibold)', color: active === i ? 'var(--wine-700)' : 'var(--text-muted)', borderBottom: `2px solid ${active === i ? 'var(--gold-500)' : 'transparent'}`, transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast)' }}>{t.label}</button>
          ))}
        </div>
        <div role="tabpanel" key={active} className="elv-reveal is-in" style={{ animation: 'none' }}>{tabs[active].content}</div>
      </div>
    );
  }

  /* ---- Timeline ----------------------------------------------------- */
  function Timeline({ steps }) {
    return (
      <div style={{ position: 'relative' }}>
        <span aria-hidden="true" style={{ position: 'absolute', left: 19, top: 8, bottom: 8, width: 1, background: 'var(--border-hairline)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 'var(--space-5)', alignItems: 'start', position: 'relative' }}>
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-page)', border: '1px solid var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-md)', color: 'var(--gold-700)', zIndex: 1 }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ paddingTop: 4 }}>
                {s.tag ? <div className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-gold)', marginBottom: 4 }}>{s.tag}</div> : null}
                <h4 className="elv-serif" style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)' }}>{s.t}</h4>
                <p className="elv-sans" style={{ margin: 'var(--space-2) 0 0', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: '52ch' }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---- LeadCapture (estados idle/loading/success/error) ------------- */
  function LeadCapture({ tone = 'light', compact = false }) {
    const { Button } = dsNS();
    const [email, setEmail] = React.useState('');
    const [state, setState] = React.useState('idle');
    const onWine = tone === 'wine';
    const submit = (e) => {
      e.preventDefault();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setState('error'); return; }
      setState('loading');
      setTimeout(() => setState('success'), 1100);
    };
    if (state === 'success') {
      return (
        <div className="elv-reveal is-in" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-800)', flex: 'none' }} aria-hidden="true">✓</span>
          <p className="elv-sans" style={{ margin: 0, fontSize: 'var(--text-sm)', color: onWine ? 'var(--gold-100)' : 'var(--text-body)' }}>Recebido. Vocês entram pela lista — fiquem de olho no e-mail.</p>
        </div>
      );
    }
    return (
      <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: 460 }}>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <input value={email} onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle'); }} type="email" placeholder="seu melhor e-mail" aria-label="E-mail"
            style={{ flex: '1 1 220px', minWidth: 0, padding: '14px 18px', borderRadius: 'var(--radius-pill)', border: `1px solid ${state === 'error' ? 'var(--danger)' : (onWine ? 'rgba(214,188,129,0.45)' : 'var(--nude)')}`, background: onWine ? 'rgba(255,253,250,0.06)' : 'var(--white-warm)', color: onWine ? 'var(--white-warm)' : 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', outline: 'none' }} />
          <Button variant={onWine ? 'gold' : 'primary'} size="lg" type="submit" disabled={state === 'loading'}>{state === 'loading' ? 'Enviando…' : 'Entrar na lista'}</Button>
        </div>
        {state === 'error' ? <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: onWine ? 'var(--wine-200)' : 'var(--danger)' }}>Digite um e-mail válido para continuar.</span>
          : <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: onWine ? 'var(--gold-300)' : 'var(--text-muted)' }}>Sem spam. Conteúdo de valor e avisos de abertura de turma.</span>}
      </form>
    );
  }

  Object.assign(window, { Accordion, Tabs, Timeline, LeadCapture });
})();
