/* Elevem-se — O Método (tabs, timeline, comparativo). */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature } = NS); }

  function Hero() {
    return (
      <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)' }}>
        <div className="elv-wrap elv-split elv-split--media-first">
          <Reveal>
            <Eyebrow>O método integrado</Eyebrow>
            <h1 className="elv-h elv-h--wine elv-fluid-h1" style={{ marginTop: 'var(--space-5)', maxWidth: '16ch' }}>Primeiro cada um se eleva. Depois, juntos, constroem o nós.</h1>
            <p className="elv-lead elv-fluid-lead elv-measure" style={{ marginTop: 'var(--space-6)' }}>
              Doze meses divididos em duas fases. Um caminho estruturado que une mentalidade, relacionamento, prosperidade e propósito — para o CNPJ e o CPF voltarem a andar sintonizados.
            </p>
            <div className="elv-row" style={{ marginTop: 'var(--space-8)' }}>
              <Button variant="primary" size="lg" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar</Button>
            </div>
          </Reveal>
          <Reveal delay={1}><Photo src="assets/photos/marcela-poltrona-web.jpg" alt="Sessão da mentoria" ratio="4 / 5" position="50% 18%" /></Reveal>
        </div>
      </section>
    );
  }

  function FasesTabs() {
    const Tabs = window.Tabs;
    const fase = (n, t, d, items, ph) => (
      <div className="elv-split elv-split--media-first" style={{ alignItems: 'start' }}>
        <div>
          <span className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--gold-700)' }}>{n}</span>
          <h3 className="elv-serif elv-fluid-h3" style={{ fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 'var(--space-2) 0 0' }}>{t}</h3>
          <p className="elv-sans" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: '46ch', marginTop: 'var(--space-4)' }}>{d}</p>
          <ul style={{ listStyle: 'none', margin: 'var(--space-6) 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {items.map((it, j) => (
              <li key={j} className="elv-sans" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', paddingLeft: 22, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 10, width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-500)' }} />{it}
              </li>
            ))}
          </ul>
        </div>
        <Photo src={ph} alt={t} ratio="3 / 4" position="50% 20%" />
      </div>
    );
    const tabs = [
      { label: 'Fase 01 · Elevação individual', content: fase('Primeiros 6 meses', 'Elevação Individual', 'Ninguém constrói um nós saudável a partir de dois eus em desordem. A primeira fase trabalha cada um — mentalidade, energia, crenças e rotina — para que cheguem inteiros ao encontro.', ['Mentalidade e padrões subconscientes', 'Ressignificação de crenças', 'Espiritualidade aplicada (valores, propósito)', 'Saúde, energia e disciplina', 'Organização da rotina e do tempo'], 'assets/photos/marcela-sorriso-web.jpg') },
      { label: 'Fase 02 · Construção do nós', content: fase('Encontros + acompanhamento', 'Construção do Nós', 'Com cada um mais inteiro, a segunda fase reconstrói o relacionamento: comunicação, admiração, intimidade e uma visão de futuro — financeira e de legado — verdadeiramente conjunta.', ['Comunicação madura e não-violenta', 'Reconstrução da admiração', 'Intimidade e conexão', 'Alinhamento na criação dos filhos', 'Visão financeira conjunta, propósito e legado'], 'assets/photos/casal-02-web.jpg') },
    ];
    return (
      <section className="elv-sec elv-sec--cream">
        <div className="elv-wrap">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="As duas fases" title="Doze meses, um caminho" lead="Seis meses de elevação individual, seis meses de construção do nós. Cada fase prepara a próxima." /></Reveal>
          <div style={{ marginTop: 'var(--space-9)' }}>{Tabs ? <Tabs tabs={tabs} /> : null}</div>
        </div>
      </section>
    );
  }

  function Jornada() {
    const Timeline = window.Timeline;
    const steps = [
      { tag: 'Início', t: 'Conversa de diagnóstico', d: 'Entendemos o momento do casal e definimos o ponto de partida — onde estão e para onde querem ir.' },
      { tag: 'Mês 1–6', t: 'Elevação individual', d: 'Encontros estratégicos individuais, mentalidade, saúde e organização da rotina. Cada um se reconstrói.' },
      { tag: 'Mês 6', t: 'Encontro de transição', d: 'O ponto de virada: dos dois eus elevados para o início consciente do nós.' },
      { tag: 'Mês 6–12', t: 'Construção do nós', d: 'Comunicação, intimidade, finanças e legado. O relacionamento ganha estrutura e direção.' },
      { tag: 'Mês 12', t: 'Consolidação e legado', d: 'Vocês saem com método próprio, rituais a dois e uma visão de futuro construída — não improvisada.' },
    ];
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap elv-wrap--md">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="A jornada" title="Como os 12 meses acontecem" /></Reveal>
          <div style={{ marginTop: 'var(--space-9)' }}>{Timeline ? <Timeline steps={steps} /> : null}</div>
        </div>
      </section>
    );
  }

  function ParaQuem() {
    const sim = ['Casais que já têm resultado e querem evoluir o casamento', 'Quem decidiu sair do modo automático com método', 'Casais dispostos ao compromisso dos dois lados', 'Quem valoriza profundidade, não fórmula mágica'];
    const nao = ['Quem busca terapia de crise emergencial', 'Casais em que apenas um quer participar', 'Quem espera promessa milagrosa sem trabalho', 'Quem não tem abertura para alinhar valores'];
    const Col = ({ title, items, ok }) => (
      <Card variant={ok ? 'plain' : 'outline'} pad="lg" style={{ height: '100%' }}>
        <div className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: ok ? 'var(--text-gold)' : 'var(--text-muted)', marginBottom: 'var(--space-5)' }}>{title}</div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {items.map((it, i) => (
            <li key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <span style={{ flex: 'none', width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, background: ok ? 'var(--wine-50)' : 'transparent', border: ok ? 'none' : '1px solid var(--border-hairline)', color: ok ? 'var(--wine-600)' : 'var(--text-muted)' }}>{ok ? '✓' : '—'}</span>
              <span className="elv-sans" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)' }}>{it}</span>
            </li>
          ))}
        </ul>
      </Card>
    );
    return (
      <section className="elv-sec elv-sec--cream">
        <div className="elv-wrap">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="Honestidade primeiro" title="Para quem é — e para quem não é" /></Reveal>
          <div className="elv-grid-2 elv-grid-2-sm" style={{ marginTop: 'var(--space-9)', alignItems: 'stretch' }}>
            <Reveal as="div" style={{ display: 'flex' }}><Col title="É para vocês se…" items={sim} ok /></Reveal>
            <Reveal delay={1} as="div" style={{ display: 'flex' }}><Col title="Não é o momento se…" items={nao} /></Reveal>
          </div>
        </div>
      </section>
    );
  }

  function Cta() {
    return (
      <section className="elv-sec elv-sec--wine">
        <div className="elv-wrap elv-center">
          <Reveal className="elv-center">
            {Badge ? <Badge tone="onWine" rule>O próximo passo</Badge> : null}
            <h2 className="elv-h elv-h--light elv-fluid-h2" style={{ marginTop: 'var(--space-4)', maxWidth: '20ch' }}>O método existe. Falta a decisão de vocês.</h2>
            <div style={{ marginTop: 'var(--space-7)' }}><Button variant="gold" size="lg" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar</Button></div>
          </Reveal>
        </div>
      </section>
    );
  }

  function MetodoApp() {
    bindLocal();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    return (
      <Page active="metodo.html">
        <Hero />
        <FasesTabs />
        <Jornada />
        <ParaQuem />
        <Cta />
      </Page>
    );
  }
  window.ElevemMetodoApp = MetodoApp;
})();
