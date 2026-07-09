/* Elevem-se — Manifesto (página de impacto, modo NOTURNO).
   Registro forte/escuro do DS: graphite-navy + dourado, CAIXA-ALTA que "grita".
   Shell dark próprio (não usa a nav clara). Wrap em [data-theme="noturno"]. */
(function () {
  let Logo, Badge, Button, Quote, Signature;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Quote, Signature } = NS); }

  /* dark top bar — minimal */
  function DarkBar() {
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'color-mix(in srgb, var(--noir-900) 80%, transparent)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="elv-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: 'var(--space-3)' }}>
          <a href="home.html" aria-label="Elevem-se — início" style={{ display: 'inline-flex', textDecoration: 'none', flex: 'none' }}>
            {Logo ? <Logo variant="horizontal" tone="light" size={34} tagline={false} /> : <strong style={{ color: 'var(--white-warm)' }}>Elevem-se</strong>}
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
            <a href="home.html" className="elv-sans" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', textDecoration: 'none', letterSpacing: '0.02em' }}>Voltar ao site</a>
            <Button variant="gold" size="sm" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar</Button>
          </div>
        </div>
      </header>
    );
  }

  /* full-screen impact statement */
  function Statement({ kicker, children, sub, min = '78vh', glow = false }) {
    return (
      <section style={{ position: 'relative', minHeight: min, display: 'flex', alignItems: 'center', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
        {glow ? <span aria-hidden="true" style={{ position: 'absolute', width: 720, height: 720, borderRadius: '50%', background: 'radial-gradient(circle, rgba(110,42,54,0.55), transparent 62%)', top: '-22%', right: '-14%', filter: 'blur(8px)', pointerEvents: 'none' }} /> : null}
        <div className="elv-wrap" style={{ position: 'relative', paddingBlock: 'var(--space-10)' }}>
          <Reveal>
            {kicker ? <div className="elv-impact-kicker" style={{ fontSize: 'var(--text-2xs)', marginBottom: 'var(--space-5)' }}>{kicker}</div> : null}
            <h2 className="elv-impact" style={{ fontSize: 'clamp(2.25rem, 1rem + 6vw, 5.5rem)', color: 'var(--white-warm)', maxWidth: '16ch' }}>{children}</h2>
            {sub ? <p className="elv-sans" style={{ marginTop: 'var(--space-7)', maxWidth: '46ch', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>{sub}</p> : null}
          </Reveal>
        </div>
      </section>
    );
  }

  function ManifestoApp() {
    bindLocal();
    bindDS();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);

    const pilares = [
      ['01', 'Elevação individual', 'Ninguém constrói um nós saudável a partir de dois eus em desordem.'],
      ['02', 'Construção do nós', 'Comunicação, admiração e intimidade — reconstruídas com método.'],
      ['03', 'Prosperidade com propósito', 'CNPJ e CPF sintonizados. Legado, não acúmulo.'],
    ];

    return (
      <div data-theme="noturno" style={{ background: 'var(--surface-page)', color: 'var(--text-body)', minHeight: '100vh' }}>
        <a href="#manifesto" className="elv-skip">Pular para o conteúdo</a>
        <DarkBar />
        <main id="manifesto">
          {/* Hero */}
          <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <span aria-hidden="true" style={{ position: 'absolute', width: 860, height: 860, borderRadius: '50%', background: 'radial-gradient(circle, rgba(110,42,54,0.5), transparent 60%)', top: '-26%', left: '-12%', pointerEvents: 'none' }} />
            <span aria-hidden="true" style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(194,161,77,0.16), transparent 64%)', bottom: '-18%', right: '-8%', pointerEvents: 'none' }} />
            <div className="elv-wrap" style={{ position: 'relative', paddingBlock: 'var(--space-11)' }}>
              <Reveal>
                <div className="elv-impact-kicker" style={{ fontSize: 'var(--text-2xs)' }}>Manifesto · Elevem-se</div>
                <span className="elv-tick elv-tick--wine" style={{ width: 44, background: 'var(--gold-400)', display: 'block', margin: 'var(--space-6) 0' }} />
                <h1 className="elv-impact" style={{ fontSize: 'clamp(2.75rem, 1rem + 8vw, 7rem)', color: 'var(--white-warm)', maxWidth: '14ch' }}>
                  Crescer juntos não é <span className="accent">sorte.</span> É <span className="accent">estrutura.</span>
                </h1>
                <p className="elv-sans" style={{ marginTop: 'var(--space-8)', maxWidth: '48ch', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-light)', lineHeight: 'var(--leading-snug)', color: 'var(--text-body)' }}>
                  Para casais empreendedores que já conquistaram muito — e decidiram que o casamento também precisa evoluir no mesmo nível.
                </p>
              </Reveal>
            </div>
          </section>

          <Statement kicker="A verdade que liberta" glow sub="Boa intenção sem alinhamento vira conflito. Amor sem direção vira desgaste.">
            Casamentos não fracassam por falta de amor. Fracassam por falta de <span className="accent">estrutura.</span>
          </Statement>

          {/* Full-bleed photo statement */}
          <section style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', borderBottom: '1px solid var(--border-hairline)' }}>
            <img src="assets/photos/casal-bw-web.jpg" alt="Maycko e Marcela" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 22%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--noir-950) 6%, rgba(12,15,20,0.55) 46%, rgba(12,15,20,0.25) 100%)' }} />
            <div className="elv-wrap" style={{ position: 'relative', paddingBlock: 'var(--space-10)' }}>
              <Reveal>
                <div className="elv-impact-kicker" style={{ fontSize: 'var(--text-2xs)', marginBottom: 'var(--space-4)' }}>Quem conduz</div>
                <h2 className="elv-impact" style={{ fontSize: 'clamp(2rem, 1rem + 5vw, 4.5rem)', color: 'var(--white-warm)', maxWidth: '20ch' }}>
                  Vivemos o que <span className="accent">ensinamos.</span>
                </h2>
                <p className="elv-sans" style={{ marginTop: 'var(--space-6)', maxWidth: '42ch', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-light)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
                  Mais de 20 anos juntos, 13 de casamento, três filhos. A Elevem-se nasceu da prática, não da teoria.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Pilares — big serif numerals */}
          <section style={{ paddingBlock: 'var(--space-11)', borderBottom: '1px solid var(--border-hairline)' }}>
            <div className="elv-wrap">
              <Reveal><div className="elv-impact-kicker" style={{ fontSize: 'var(--text-2xs)', marginBottom: 'var(--space-8)' }}>O método, em três movimentos</div></Reveal>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pilares.map((p, i) => (
                  <Reveal key={p[0]} delay={Math.min(i, 3)} as="div" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-6)', alignItems: 'baseline', padding: 'var(--space-7) 0', borderTop: i ? '1px solid var(--border-hairline)' : 'none' }}>
                    <span className="elv-serif" style={{ fontSize: 'clamp(2.5rem, 1.5rem + 4vw, 5rem)', fontStyle: 'italic', color: 'var(--gold-400)', lineHeight: 0.9 }}>{p[0]}</span>
                    <div>
                      <h3 className="elv-serif" style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.5rem)', fontWeight: 'var(--weight-medium)', color: 'var(--white-warm)', margin: 0 }}>{p[1]}</h3>
                      <p className="elv-sans" style={{ marginTop: 'var(--space-3)', maxWidth: '40ch', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-light)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>{p[2]}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <Statement kicker="A decisão" glow min="70vh" sub="Preencham a aplicação. Se houver alinhamento, vocês entram.">
            Saiam do <span className="accent-wine">automático.</span> Construam com <span className="accent">método.</span>
          </Statement>

          {/* Final CTA */}
          <section style={{ paddingBlock: 'var(--space-11)' }}>
            <div className="elv-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {Logo ? <Logo variant="mark" tone="light" size={56} /> : null}
                <h2 className="elv-impact" style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 3.75rem)', color: 'var(--white-warm)', margin: 'var(--space-7) 0 0', maxWidth: '18ch' }}>
                  O casamento de vocês pode viver em outro nível
                </h2>
                <div style={{ marginTop: 'var(--space-8)' }}>
                  <Button variant="gold" size="lg" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar para o Elevem-se</Button>
                </div>
                <div style={{ marginTop: 'var(--space-9)' }}>{Signature ? <Signature mentor="couple" tone="light" size="sm" /> : null}</div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
    );
  }
  window.ElevemManifestoApp = ManifestoApp;
})();
