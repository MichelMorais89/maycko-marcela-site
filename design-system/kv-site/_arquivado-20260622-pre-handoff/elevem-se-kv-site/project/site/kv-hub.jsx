/* Elevem-se — KV Hub: índice + styleguide do KV de Site.
   Documenta a herança do DS, as adaptações web, e a biblioteca de
   blocos (heroes, CTAs, cards, seções, estados, microinterações). */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature, Avatar, Input, Field;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature, Avatar, Input, Field } = NS); }

  /* ---- doc helpers --------------------------------------------------- */
  function DocSection({ n, title, lead, children, id }) {
    return (
      <section id={id} style={{ paddingBlock: 'var(--space-10)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="elv-wrap">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)' }}>
              <span className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-xl)', color: 'var(--gold-600)' }}>{n}</span>
              <h2 className="elv-h elv-fluid-h2">{title}</h2>
            </div>
            {lead ? <p className="elv-lead elv-fluid-lead elv-measure" style={{ marginTop: 'var(--space-4)', marginLeft: 'calc(var(--text-xl) + var(--space-4))' }}>{lead}</p> : null}
          </Reveal>
          <div style={{ marginTop: 'var(--space-8)' }}>{children}</div>
        </div>
      </section>
    );
  }

  function Frame({ label, desc, children, bg = 'var(--white-warm)', pad = true, min }) {
    return (
      <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</span>
          {desc ? <span className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)' }}>{desc}</span> : null}
        </figcaption>
        <div style={{ background: bg, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--ring-hairline)', overflow: 'hidden', padding: pad ? 'var(--space-7)' : 0, minHeight: min }}>{children}</div>
      </figure>
    );
  }

  /* ---- 1 · Páginas --------------------------------------------------- */
  function PagesGrid() {
    const pages = [
      ['Home', 'home.html', 'Hero, prova, dores, método, mentores, depoimentos, legado e CTA.'],
      ['Sobre', 'sobre.html', 'O casal, a história, os valores e a citação-assinatura.'],
      ['O Método', 'metodo.html', 'As duas fases (tabs), a jornada (timeline) e o comparativo.'],
      ['A Mentoria', 'mentoria.html', 'Oferta, investimento, FAQ e a aplicação multi-step.'],
      ['Blog', 'blog.html', 'Listagem com filtro, destaque, cards e estado vazio.'],
      ['Blog post', 'blog-post.html', 'Leitura long-form com progresso, autor e relacionados.'],
      ['Contato', 'contato.html', 'Formulário com estados e canais de atendimento.'],
      ['Manifesto', 'manifesto.html', 'Página de impacto no modo NOTURNO — registro dramático do DS.', 'dark'],
    ];
    return (
      <div className="elv-grid-3" style={{ alignItems: 'stretch' }}>
        {pages.map((p, i) => {
          const dark = p[3] === 'dark';
          return (
          <Reveal key={p[1]} delay={i % 3} as="a" href={p[1]} className="elv-lift" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-6)', background: dark ? 'var(--ink-900)' : 'var(--white-warm)', borderRadius: 'var(--radius-md)', boxShadow: dark ? 'inset 0 0 0 1px rgba(214,188,129,0.28)' : 'var(--ring-hairline)' }}>
            <span className="elv-serif" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-medium)', color: dark ? 'var(--gold-300)' : 'var(--wine-700)' }}>{p[0]}{dark ? <span className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--gold-400)', marginLeft: 'var(--space-3)', verticalAlign: 'middle' }}>Noturno</span> : null}</span>
            <span className="elv-sans" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', flex: 1, color: dark ? '#C8CDD6' : 'var(--text-muted)' }}>{p[2]}</span>
            <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: dark ? 'var(--gold-300)' : 'var(--text-gold)' }}>Abrir página →</span>
          </Reveal>
          );
        })}
      </div>
    );
  }

  /* ---- 2 · Fundação (tokens) ---------------------------------------- */
  function Tokens() {
    const swatches = [
      ['Vinho', '#6E2A36', 'var(--wine-600)', 'light'],
      ['Vinho profundo', '#4A1B29', 'var(--wine-800)', 'light'],
      ['Dourado', '#C2A14D', 'var(--gold-500)', 'dark'],
      ['Navy / âncora', '#21314F', 'var(--ink-800)', 'light'],
      ['Marfim', '#F4EEE2', 'var(--ivory)', 'dark'],
      ['Areia', '#D9C4A3', 'var(--sand)', 'dark'],
      ['Calor / clay', '#B47254', 'var(--warm-500)', 'light'],
      ['Grafite', '#2E2A2B', 'var(--graphite-900)', 'light'],
    ];
    const scale = [['Display', 'clamp 40→88', 'elv-fluid-hero'], ['H1', 'clamp 32→64', 'elv-fluid-h1'], ['H2', 'clamp 28→48', 'elv-fluid-h2'], ['Lead', 'clamp 17→22', 'elv-fluid-lead'], ['Body', '16px', ''], ['Eyebrow', '11px caps', '']];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
        <Frame label="Paleta — 100% do Design System" desc="Proporção ~70% claro · 15% vinho · 10% navy · 5% dourado. Dourado nunca em texto de corpo.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--space-4)' }}>
            {swatches.map((s) => (
              <div key={s[0]}>
                <div style={{ height: 64, borderRadius: 'var(--radius-md)', background: s[2], boxShadow: 'var(--ring-hairline)' }} />
                <div className="elv-sans" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', marginTop: 8 }}>{s[0]}</div>
                <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', fontFamily: 'monospace' }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </Frame>
        <div className="elv-grid-2" style={{ alignItems: 'stretch', gap: 'var(--space-7)' }}>
          <Frame label="Tipografia" desc="Spectral (serifada editorial) + Mulish (sans). Escala fluida com clamp — adaptação web.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {scale.map((t) => (
                <div key={t[0]} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-4)', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 'var(--space-3)' }}>
                  <span className={`elv-serif ${t[2]}`} style={{ color: 'var(--text-strong)', fontSize: t[0] === 'Display' ? 'var(--text-2xl)' : t[0] === 'H1' ? 'var(--text-xl)' : 'var(--text-lg)' }}>{t[0]}</span>
                  <span className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', fontFamily: 'monospace' }}>{t[1]}</span>
                </div>
              ))}
            </div>
          </Frame>
          <Frame label="Espaçamento, raios & sombras" desc="Base-4. Raios contidos (8px; pílula só em botões/chips). Sombras quentes.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-end' }}>
                {[2, 4, 5, 6, 8, 9].map((s) => <div key={s} title={`space-${s}`} style={{ width: `var(--space-${s})`, height: `var(--space-${s})`, background: 'var(--wine-200)', borderRadius: 2 }} />)}
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                {[['sm', 'var(--radius-sm)'], ['md', 'var(--radius-md)'], ['lg', 'var(--radius-lg)'], ['pill', 'var(--radius-pill)']].map((r) => <div key={r[0]} style={{ width: 56, height: 40, background: 'var(--cream)', borderRadius: r[1], boxShadow: 'var(--ring-hairline)' }} />)}
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
                {['var(--shadow-sm)', 'var(--shadow-md)', 'var(--shadow-lg)'].map((sh) => <div key={sh} style={{ width: 56, height: 40, background: 'var(--white-warm)', borderRadius: 'var(--radius-md)', boxShadow: sh }} />)}
              </div>
            </div>
          </Frame>
        </div>
      </div>
    );
  }

  /* ---- 3 · 5 Heroes -------------------------------------------------- */
  function Heroes() {
    const H = (children) => <div style={{ padding: 'var(--space-8) var(--space-7)' }}>{children}</div>;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
        <Frame label="Hero 01 — Split editorial" desc="Texto + foto emoldurada. Uso: Home." pad={false}>
          {H(
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-7)', alignItems: 'center' }}>
              <div>
                <Badge tone="gold" rule>Mentoria para casais</Badge>
                <h3 className="elv-serif" style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-medium)', color: 'var(--wine-700)', margin: 'var(--space-4) 0', lineHeight: 1.05 }}>Crescer juntos não é sorte. É <span className="elv-ital-warm elv-mark-warm">estrutura.</span></h3>
                <div className="elv-row"><Button variant="primary" size="md">Quero aplicar</Button><Button variant="secondary" size="md">O método</Button></div>
              </div>
              <Photo src="assets/photos/casal-01-web.jpg" alt="" ratio="4/5" position="50% 18%" />
            </div>
          )}
        </Frame>
        <div className="elv-grid-2" style={{ alignItems: 'stretch', gap: 'var(--space-7)' }}>
          <Frame label="Hero 02 — Statement centralizado" desc="Eyebrow → título → lead → CTA. Uso: A Mentoria." pad={false}>
            {H(<div className="elv-center" style={{ textAlign: 'center' }}><Badge tone="gold" rule>A mentoria</Badge><h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--wine-700)', margin: 'var(--space-4) 0' }}>Doze meses para reconstruir a vida a dois.</h3><Button variant="primary" size="md">Quero aplicar</Button></div>)}
          </Frame>
          <Frame label="Hero 03 — Full-bleed com overlay" desc="Foto dramática + gradiente vinho. Uso: Legado / aberturas." pad={false} bg="var(--wine-950)">
            <div style={{ position: 'relative', minHeight: 220, display: 'flex', alignItems: 'flex-end' }}>
              <img src="assets/photos/casal-bw-web.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 22%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(42,16,22,0.92), rgba(42,16,22,0.25))' }} />
              <div style={{ position: 'relative', padding: 'var(--space-7)' }}><Badge tone="onWine" rule>Legado</Badge><h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--white-warm)', margin: 'var(--space-3) 0 0', maxWidth: '18ch' }}>A forma como amaram e construíram.</h3></div>
            </div>
          </Frame>
          <Frame label="Hero 04 — Vinho invertido + captura" desc="Seção escura com lead capture embutido." pad={false} bg="var(--wine-600)">
            {H(<div><Badge tone="onWine" rule>Entrar na lista</Badge><h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--white-warm)', margin: 'var(--space-3) 0 var(--space-5)' }}>Ainda não é o momento de aplicar?</h3>{window.LeadCapture ? React.createElement(window.LeadCapture, { tone: 'wine' }) : null}</div>)}
          </Frame>
          <Frame label="Hero 05 — Tipográfico “caixa-alta”" desc="Statement que grita, sem foto. Registro de impacto do DS." pad={false} bg="var(--ink-900)">
            {H(<div style={{ textAlign: 'center', paddingBlock: 'var(--space-6)' }}><div className="elv-impact-kicker" style={{ fontSize: 'var(--text-2xs)' }}>O método integrado</div><div className="elv-impact" style={{ fontSize: 'var(--text-3xl)', color: 'var(--white-warm)', marginTop: 'var(--space-4)' }}>SAIAM DO <span className="accent">AUTOMÁTICO</span></div></div>)}
          </Frame>
        </div>
      </div>
    );
  }

  /* ---- 4 · CTAs (5) -------------------------------------------------- */
  function Ctas() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
        <div className="elv-grid-2" style={{ gap: 'var(--space-7)', alignItems: 'stretch' }}>
          <Frame label="CTA 01 — Inline + reasseguro">
            <div className="elv-row"><Button variant="primary" size="lg">Quero aplicar</Button><span className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>Processo seletivo</span></div>
          </Frame>
          <Frame label="CTA 02 — Card boxed">
            <Card variant="plain" pad="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <span className="elv-serif" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>Pronto para o próximo nível?</span>
              <Button variant="primary" size="md">Aplicar</Button>
            </Card>
          </Frame>
        </div>
        <Frame label="CTA 03 — Banner vinho full-width" pad={false} bg="var(--wine-600)">
          <div style={{ padding: 'var(--space-7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
            <h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--white-warm)', margin: 0, maxWidth: '20ch' }}>O método existe. Falta a decisão de vocês.</h3>
            <Button variant="gold" size="lg">Quero aplicar</Button>
          </div>
        </Frame>
        <div className="elv-grid-2" style={{ gap: 'var(--space-7)', alignItems: 'stretch' }}>
          <Frame label="CTA 04 — Captura de lead (newsletter)">{window.LeadCapture ? React.createElement(window.LeadCapture, {}) : null}</Frame>
          <Frame label="CTA 05 — Barra fixa (mobile)" desc="Sticky de conversão para telas pequenas.">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', background: 'var(--white-warm)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)' }}>
              <span className="elv-sans" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)' }}>Elevem-se</span>
              <Button variant="primary" size="sm">Quero aplicar</Button>
            </div>
          </Frame>
        </div>
      </div>
    );
  }

  /* ---- 5 · Cards (4 tipos) ------------------------------------------ */
  function Cards() {
    return (
      <div className="elv-grid-4" style={{ alignItems: 'stretch' }}>
        <Frame label="Card — Blog">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={{ aspectRatio: '16/10', borderRadius: 'var(--radius-md)', background: 'var(--wine-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="elv-serif" style={{ fontStyle: 'italic', fontSize: '2.5rem', color: 'var(--gold-200)', opacity: 0.5 }}>e</span></div>
            <span className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-gold)' }}>Relacionamento</span>
            <h4 className="elv-serif" style={{ margin: 0, fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>Sair do modo automático</h4>
          </div>
        </Frame>
        <Frame label="Card — Oferta/produto">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--text-gold)' }}>Parcelado</span>
            <span className="elv-serif" style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-strong)' }}>a confirmar</span>
            <span className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)' }}>Em até 12x</span>
            <Button variant="secondary" size="sm" fullWidth>Aplicar</Button>
          </div>
        </Frame>
        <Frame label="Card — Case/depoimento">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span className="elv-serif" style={{ fontSize: '2rem', color: 'var(--gold-400)', lineHeight: 0.5, height: 16 }}>“</span>
            <p className="elv-serif" style={{ margin: 0, fontSize: 'var(--text-md)', color: 'var(--text-strong)', lineHeight: 1.3 }}>Voltamos a nos admirar, com método.</p>
            <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Bruno &amp; Patrícia</span>
          </div>
        </Frame>
        <Frame label="Card — Pessoa/mentor">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'center' }}>
            {Avatar ? <Avatar src="assets/photos/marcela-sorriso-web.jpg" alt="Marcela" size={64} /> : null}
            <div><div className="elv-serif" style={{ fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>Marcela Zanardo</div><div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)' }}>Mentora</div></div>
          </div>
        </Frame>
      </div>
    );
  }

  /* ---- 6 · Estados --------------------------------------------------- */
  function States() {
    const FocusInput = () => <input placeholder="Foco com anel dourado" autoFocus={false} style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gold-500)', boxShadow: '0 0 0 3px var(--gold-100)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', outline: 'none', color: 'var(--text-strong)', background: 'var(--white-warm)' }} />;
    const Skeleton = () => <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>{[80, 100, 60].map((w, i) => <div key={i} style={{ height: 12, width: `${w}%`, borderRadius: 6, background: 'linear-gradient(90deg, var(--cream), var(--sand), var(--cream))', backgroundSize: '200% 100%', animation: 'elvShimmer 1.4s ease-in-out infinite' }} />)}</div>;
    return (
      <div className="elv-grid-3" style={{ alignItems: 'stretch' }}>
        <Frame label="Hover" desc="Vinho 600 → 700, sombra sobe. Passe o mouse."><div className="elv-row"><Button variant="primary" size="md">Botão</Button><Button variant="secondary" size="md">Outline</Button></div></Frame>
        <Frame label="Focus (teclado)" desc="Anel dourado — WCAG AA."><FocusInput /></Frame>
        <Frame label="Loading" desc="Botão ocupado + skeleton de conteúdo."><div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}><Button variant="primary" size="md" disabled>Enviando…</Button><Skeleton /></div></Frame>
        <Frame label="Empty" desc="Categoria sem conteúdo.">
          <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}><span className="elv-serif" style={{ fontSize: 'var(--text-3xl)', fontStyle: 'italic', color: 'var(--gold-400)' }}>—</span><p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-sm)', margin: 'var(--space-3) 0 0' }}>Ainda não há itens aqui.</p></div>
        </Frame>
        <Frame label="Error" desc="Borda + mensagem em vinho/danger.">
          <div><input defaultValue="email-invalido" style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--danger)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', outline: 'none', color: 'var(--text-strong)', background: 'var(--white-warm)' }} /><span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>Digite um e-mail válido.</span></div>
        </Frame>
        <Frame label="Success" desc="Confirmação com selo dourado.">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}><span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-800)' }}>✓</span><span className="elv-sans" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>Recebido com sucesso.</span></div>
        </Frame>
      </div>
    );
  }

  /* ---- 7 · Microinterações ------------------------------------------ */
  function Micro() {
    const items = [
      ['Reveal no scroll', 'Fade + rise de 18px, 420ms, ease-entrance. Dispara a 12% de visibilidade, uma vez. Respeita prefers-reduced-motion.'],
      ['Hover de botão', 'Transição de cor 140ms (vinho 600→700); press = scale(0.99) + 0.5px. Sem glow, sem salto.'],
      ['Lift de card', 'translateY(-4px) + sombra lg em 240ms ao passar o mouse.'],
      ['Underline de link', 'Sublinhado dourado cresce da esquerda em 240ms no hover.'],
      ['Accordion / FAQ', 'max-height + opacity em ease-entrance; ícone + gira 45° para ×.'],
      ['Menu mobile', 'Drawer com max-height 360ms; hambúrguer vira × com rotação das barras.'],
      ['Progresso de leitura', 'Barra dourada no topo do artigo acompanha o scroll (80ms linear).'],
      ['Form multi-step', 'Etapas trocam com fade; progresso preenche em 240ms; validação inline por etapa.'],
    ];
    return (
      <div className="elv-grid-2" style={{ gap: 'var(--space-2) var(--space-8)' }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-hairline)', alignItems: 'baseline' }}>
            <span className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-md)', color: 'var(--gold-600)', minWidth: 28 }}>{String(i + 1).padStart(2, '0')}</span>
            <div><div className="elv-sans" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{it[0]}</div><p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-sm)', margin: '2px 0 0', lineHeight: 'var(--leading-relaxed)' }}>{it[1]}</p></div>
          </div>
        ))}
      </div>
    );
  }

  /* ---- header -------------------------------------------------------- */
  function HubHeader() {
    return (
      <header className="elv-sec--page" style={{ paddingBlock: 'var(--space-10)' }}>
        <div className="elv-wrap">
          <Reveal className="elv-center" style={{ textAlign: 'center' }}>
            {Logo ? <Logo variant="lockup" tone="wine" size={64} /> : null}
            <div style={{ marginTop: 'var(--space-6)' }}><Badge tone="gold" rule>KV de Site · Alta fidelidade</Badge></div>
            <h1 className="elv-h elv-fluid-h1" style={{ marginTop: 'var(--space-4)', maxWidth: '20ch' }}>O Key Visual de site da Elevem-se</h1>
            <p className="elv-lead elv-fluid-lead" style={{ marginTop: 'var(--space-5)', maxWidth: '54ch' }}>
              Herdado 100% do Design System Elevem-se. Mobile-first, WCAG AA, com as adaptações específicas de web (estados, escala fluida, microinterações). Abaixo: o sistema, as páginas e a biblioteca de blocos.
            </p>
            <div className="elv-row" style={{ justifyContent: 'center', marginTop: 'var(--space-7)' }}>
              <Button variant="primary" size="lg" onClick={() => (location.href = 'home.html')}>Ver a Home</Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('biblioteca').scrollIntoView({ behavior: 'smooth' })}>Biblioteca de blocos</Button>
            </div>
          </Reveal>
        </div>
      </header>
    );
  }

  function HubApp() {
    bindLocal();
    bindDS();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    return (
      <React.Fragment>
        <a href="#paginas" className="elv-skip">Pular para o conteúdo</a>
        <SiteNav active="index.html" />
        <main id="conteudo" style={{ background: 'var(--surface-page)' }}>
          <HubHeader />
          <DocSection id="paginas" n="01" title="As páginas" lead="Sete páginas em alta fidelidade + uma peça de impacto noturno, navegáveis no mobile e no desktop."><PagesGrid /></DocSection>
          <DocSection n="02" title="Fundação herdada" lead="Cores, tipografia e espaçamento vêm direto dos tokens do Design System — nada inventado."><Tokens /></DocSection>
          <DocSection id="biblioteca" n="03" title="Cinco heroes" lead="Variações de abertura para diferentes intenções — do split editorial ao statement de impacto."><Heroes /></DocSection>
          <DocSection n="04" title="Cinco tipos de CTA" lead="Da chamada inline ao banner vinho e à barra fixa de mobile — sempre rumo à aplicação."><Ctas /></DocSection>
          <DocSection n="05" title="Cards" lead="Blog, oferta, case e pessoa — a mesma família visual, usos diferentes."><Cards /></DocSection>
          <DocSection n="06" title="Estados" lead="Hover, focus, loading, empty, error e success — o que só existe na web."><States /></DocSection>
          <DocSection n="07" title="Microinterações" lead="Calmas e adultas: 140–420ms, sem bounce, respeitando reduced-motion."><Micro /></DocSection>
        </main>
        <SiteFooter />
      </React.Fragment>
    );
  }
  window.ElevemHubApp = HubApp;
})();
