/* Elevem-se — Sobre (quem conduz). */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature, Avatar;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature, Avatar } = NS); }

  function Hero() {
    return (
      <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)' }}>
        <div className="elv-wrap elv-split elv-split--media-first">
          <Reveal>
            <Eyebrow>Quem conduz</Eyebrow>
            <h1 className="elv-h elv-h--wine elv-fluid-h1" style={{ marginTop: 'var(--space-5)' }}>Marcela <span style={{ color: 'var(--gold-600)', fontStyle: 'italic' }}>&</span> Maycko</h1>
            <p className="elv-lead elv-fluid-lead elv-measure" style={{ marginTop: 'var(--space-6)' }}>
              Juntos há mais de 20 anos, casados há 13, pais de três filhos. Já atravessamos as fases difíceis — e escolhemos crescer. A Elevem-se nasceu da prática, não da teoria.
            </p>
            <div style={{ marginTop: 'var(--space-7)' }}>{Signature ? <Signature mentor="couple" tone="wine" size="md" /> : null}</div>
          </Reveal>
          <Reveal delay={1}><Photo src="assets/photos/casal-01-web.jpg" alt="Marcela e Maycko" ratio="4 / 5" position="50% 18%" /></Reveal>
        </div>
      </section>
    );
  }

  function Historia() {
    return (
      <section className="elv-sec elv-sec--cream">
        <div className="elv-wrap elv-split">
          <Reveal><Photo src="assets/photos/marcela-poltrona-web.jpg" alt="Marcela" ratio="4 / 5" position="50% 16%" /></Reveal>
          <Reveal delay={1}>
            <SectionHead eyebrow="A nossa história" title="Vivemos o que ensinamos." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
              <p className="elv-sans" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', margin: 0 }}>
                Construímos empresas, criamos uma família e, no meio do caminho, quase deixamos o casamento virar rotina. Percebemos que relacionamentos não terminam da noite para o dia — terminam por pequenos desgastes diários.
              </p>
              <p className="elv-sans" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', margin: 0 }}>
                Decidimos reconstruir os pilares da vida a dois com a mesma seriedade com que tratamos os negócios. Funcionou. A Elevem-se é o método que organizamos a partir dessa virada — para que outros casais não precisem aprender pela dor.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  function Valores() {
    const vals = [
      ['Verdade', 'De igual para igual. Sem promessa milagrosa, sem tom de guru.'],
      ['Estrutura', 'Amor com direção. Método, não sorte. Construção, não improviso.'],
      ['Profundidade', 'Poucos casais por ciclo. Presença real, não volume.'],
      ['Propósito', 'CNPJ e CPF sintonizados — prosperidade com sentido e legado.'],
    ];
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="No que acreditamos" title="Os valores que conduzem tudo" /></Reveal>
          <div className="elv-grid-4" style={{ marginTop: 'var(--space-9)' }}>
            {vals.map((v, i) => (
              <Reveal key={i} delay={i % 4} as="div">
                <Card variant="plain" pad="lg" className="elv-lift" style={{ height: '100%' }}>
                  <span className="elv-serif" style={{ fontSize: 'var(--text-2xl)', color: 'var(--gold-600)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="elv-serif" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 'var(--space-3) 0 var(--space-2)' }}>{v[0]}</h3>
                  <p className="elv-sans" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', margin: 0 }}>{v[1]}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function QuoteSec() {
    return (
      <section className="elv-sec elv-sec--wine">
        <div className="elv-wrap elv-wrap--md elv-center">
          <Reveal>
            {Quote ? <Quote tone="wine" size="lg" align="center" cite="Maycko & Marcela" role="Mentores">Ter o CNPJ e o CPF sintonizados.</Quote> : null}
          </Reveal>
        </div>
      </section>
    );
  }

  function Cta() {
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap elv-wrap--md elv-center">
          <Reveal className="elv-center">
            <h2 className="elv-h elv-fluid-h2" style={{ maxWidth: '20ch' }}>Quer conhecer o método que vivemos?</h2>
            <div className="elv-row" style={{ justifyContent: 'center', marginTop: 'var(--space-6)' }}>
              <Button variant="primary" size="lg" onClick={() => (location.href = 'metodo.html')}>Conhecer o método</Button>
              <Button variant="secondary" size="lg" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar</Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  function SobreApp() {
    bindLocal();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    return (
      <Page active="sobre.html">
        <Hero />
        <Historia />
        <Valores />
        <QuoteSec />
        <Cta />
      </Page>
    );
  }
  window.ElevemSobreApp = SobreApp;
})();
