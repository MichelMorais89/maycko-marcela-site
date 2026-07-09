/* Elevem-se — Blog (listagem) com filtro, destaque, cards e estado vazio. */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature } = NS); }

  const POSTS = [
    { slug: 'estrutura-vs-sorte', cat: 'Relacionamento', dest: true, t: 'Casamentos não fracassam por falta de amor', x: 'Eles fracassam por falta de estrutura. Por que a boa intenção, sozinha, não sustenta uma vida a dois — e o que fazer a respeito.', read: '6 min', date: 'Jun 2026', tone: 'wine' },
    { slug: 'cnpj-cpf', cat: 'Empreendedorismo', t: 'CNPJ e CPF sintonizados', x: 'O negócio cresce e o casamento encolhe. Como alinhar a empresa e a vida pessoal sem sacrificar nenhuma das duas.', read: '5 min', date: 'Mai 2026', tone: 'ink' },
    { slug: 'modo-automatico', cat: 'Relacionamento', t: 'Sair do modo automático', x: 'Relacionamentos não terminam da noite para o dia — terminam por pequenos desgastes diários. Os sinais e a virada.', read: '4 min', date: 'Mai 2026', tone: 'sand' },
    { slug: 'dinheiro-a-dois', cat: 'Finanças do casal', t: 'Dinheiro a dois sem tensão silenciosa', x: 'A conversa que a maioria dos casais evita — e como transformá-la em visão financeira conjunta.', read: '7 min', date: 'Abr 2026', tone: 'cream' },
    { slug: 'admiracao', cat: 'Relacionamento', t: 'Reconstruir a admiração', x: 'A rotina engole a admiração antes do amor. Como trazê-la de volta, com método.', read: '5 min', date: 'Abr 2026', tone: 'wine' },
    { slug: 'proposito-legado', cat: 'Propósito', t: 'Propósito, prosperidade e legado', x: 'No fim, ninguém é lembrado pelo que acumulou. Sobre construir uma vida a dois que deixa marca.', read: '6 min', date: 'Mar 2026', tone: 'ink' },
  ];
  const CATS = ['Todos', 'Relacionamento', 'Empreendedorismo', 'Finanças do casal', 'Propósito', 'Eventos'];
  const toneBg = { wine: 'var(--wine-600)', ink: 'var(--ink-800)', sand: 'var(--sand)', cream: 'var(--cream)' };
  const toneFg = { wine: 'var(--gold-200)', ink: 'var(--gold-300)', sand: 'var(--wine-700)', cream: 'var(--wine-700)' };

  function Thumb({ tone, ratio = '16 / 10', label }) {
    return (
      <div style={{ aspectRatio: ratio, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: toneBg[tone] || 'var(--cream)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="elv-serif" style={{ fontSize: 'clamp(2.5rem,2rem+4vw,5rem)', fontStyle: 'italic', color: toneFg[tone] || 'var(--wine-700)', opacity: 0.5 }}>e</span>
        <span style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 1px rgba(214,188,129,0.25)', borderRadius: 'var(--radius-md)' }} />
        {label ? <span className="elv-sans" style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: toneFg[tone], background: 'rgba(0,0,0,0.18)', padding: '5px 10px', borderRadius: 'var(--radius-pill)' }}>{label}</span> : null}
      </div>
    );
  }

  function PostCard({ p }) {
    return (
      <a href={`blog-post.html?p=${p.slug}`} className="elv-lift" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--ring-hairline)', padding: 'var(--space-5)', height: '100%' }}>
        <Thumb tone={p.tone} label={p.cat} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
          <h3 className="elv-serif" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 0, lineHeight: 'var(--leading-snug)' }}>{p.t}</h3>
          <p className="elv-sans" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', margin: 0, flex: 1 }}>{p.x}</p>
          <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}><span>{p.date}</span><span>·</span><span>{p.read} de leitura</span></div>
        </div>
      </a>
    );
  }

  function Featured({ p }) {
    return (
      <a href={`blog-post.html?p=${p.slug}`} style={{ textDecoration: 'none' }}>
        <div className="elv-split" style={{ alignItems: 'center', gap: 'var(--space-8)' }}>
          <Thumb tone={p.tone} ratio="4 / 3" />
          <div>
            <Badge tone="gold" rule>Em destaque · {p.cat}</Badge>
            <h2 className="elv-h elv-fluid-h2" style={{ marginTop: 'var(--space-4)', maxWidth: '18ch' }}>{p.t}</h2>
            <p className="elv-lead elv-fluid-lead elv-measure" style={{ marginTop: 'var(--space-4)' }}>{p.x}</p>
            <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}><span>{p.date}</span><span>·</span><span>{p.read} de leitura</span></div>
          </div>
        </div>
      </a>
    );
  }

  function Empty({ cat }) {
    return (
      <div className="elv-center" style={{ padding: 'var(--space-11) var(--space-5)', textAlign: 'center' }}>
        <span className="elv-serif" style={{ fontSize: 'var(--text-4xl)', fontStyle: 'italic', color: 'var(--gold-400)' }}>—</span>
        <h3 className="elv-serif" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 'var(--space-4) 0 var(--space-2)' }}>Ainda não há artigos em “{cat}”.</h3>
        <p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-base)', maxWidth: '34ch' }}>Estamos preparando conteúdo para esta categoria. Entre na lista para ser avisado.</p>
        <div style={{ marginTop: 'var(--space-6)', width: '100%', maxWidth: 460 }}>{window.LeadCapture ? React.createElement(window.LeadCapture, {}) : null}</div>
      </div>
    );
  }

  function BlogApp() {
    bindLocal();
    const [cat, setCat] = React.useState('Todos');
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    const filtered = cat === 'Todos' ? POSTS : POSTS.filter((p) => p.cat === cat);
    const featured = cat === 'Todos' ? POSTS.find((p) => p.dest) : null;
    const grid = featured ? filtered.filter((p) => p !== featured) : filtered;

    return (
      <Page active="blog.html">
        <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-7)' }}>
          <div className="elv-wrap">
            <Reveal className="elv-center"><SectionHead align="center" eyebrow="Conteúdo" title="O blog da vida a dois" lead="Reflexões sobre relacionamento, empreendedorismo e propósito — sem fórmula mágica, com a verdade de quem vive a dois." /></Reveal>
            <div className="elv-row" style={{ justifyContent: 'center', marginTop: 'var(--space-8)', gap: 'var(--space-2)' }}>
              {CATS.map((c) => <button key={c} className={`elv-chip ${cat === c ? 'is-active' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)} style={{ textTransform: 'none', letterSpacing: '0.01em' }}>{c}</button>)}
            </div>
          </div>
        </section>

        {featured ? (
          <section className="elv-sec--tight elv-sec--cream" style={{ paddingBlock: 'var(--space-9)' }}>
            <div className="elv-wrap"><Reveal><Featured p={featured} /></Reveal></div>
          </section>
        ) : null}

        <section className="elv-sec elv-sec--page">
          <div className="elv-wrap">
            {grid.length === 0 ? <Empty cat={cat} /> : (
              <div className="elv-grid-3" style={{ alignItems: 'stretch' }}>
                {grid.map((p, i) => <Reveal key={p.slug} delay={i % 3} as="div" style={{ display: 'flex' }}><PostCard p={p} /></Reveal>)}
              </div>
            )}
          </div>
        </section>
      </Page>
    );
  }
  window.ElevemBlogApp = BlogApp;
})();
