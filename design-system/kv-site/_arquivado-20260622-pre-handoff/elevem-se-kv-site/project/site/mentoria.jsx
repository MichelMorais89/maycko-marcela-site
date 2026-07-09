/* Elevem-se — A Mentoria (página de vendas / conversão-mãe). */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature } = NS); }

  /* ---- Hero ---------------------------------------------------------- */
  function Hero() {
    return (
      <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)' }}>
        <div className="elv-wrap elv-center">
          <Reveal className="elv-center">
            <Eyebrow>A mentoria</Eyebrow>
            <h1 className="elv-h elv-h--wine elv-fluid-h1" style={{ marginTop: 'var(--space-5)', maxWidth: '20ch' }}>
              Doze meses para reconstruir os pilares da vida a dois.
            </h1>
            <p className="elv-lead elv-fluid-lead" style={{ marginTop: 'var(--space-5)', maxWidth: '52ch' }}>
              Um ecossistema completo de encontros, acompanhamento e experiências — desenhado para casais empreendedores que decidiram sair do automático com método, e não com sorte.
            </p>
            <div className="elv-row" style={{ justifyContent: 'center', marginTop: 'var(--space-7)' }}>
              <Button variant="primary" size="lg" onClick={() => document.getElementById('aplicar').scrollIntoView({ behavior: 'smooth' })}>Quero aplicar</Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('oferta').scrollIntoView({ behavior: 'smooth' })}>O que inclui</Button>
            </div>
            <p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', marginTop: 'var(--space-5)' }}>Processo seletivo · Poucos casais por ciclo · Garantia de 30 dias</p>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---- Oferta / ecossistema ----------------------------------------- */
  function Oferta() {
    const items = [
      ['14', 'encontros estratégicos', 'Individuais e do relacionamento'],
      ['12', 'meses de acompanhamento', 'Do início ao fim do ciclo'],
      ['01', 'grupo exclusivo', 'Casais em alinhamento de valores'],
      ['—', 'planner personalizado', 'Estrutura da rotina a dois'],
      ['03', 'livros selecionados', 'Curadoria do casal'],
      ['03', 'sessões de hipnose clínica', 'Com referência convidada'],
    ];
    return (
      <section className="elv-sec elv-sec--cream" id="oferta">
        <div className="elv-wrap">
          <Reveal><SectionHead eyebrow="O que está incluído" title="Isso não é apenas mentoria. É um ecossistema." lead="Encontros, materiais, experiências e acompanhamento — tudo para sustentar a evolução do casal por um ano inteiro." /></Reveal>
          <div className="elv-grid-3" style={{ marginTop: 'var(--space-9)' }}>
            {items.map((it, i) => (
              <Reveal key={i} delay={i % 3} as="div">
                <Card variant="plain" pad="lg" className="elv-lift" style={{ height: '100%', display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <span className="elv-serif" style={{ fontSize: 'var(--text-3xl)', color: 'var(--gold-600)', lineHeight: 0.9, minWidth: 52 }}>{it[0]}</span>
                  <div>
                    <div className="elv-serif" style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>{it[1]}</div>
                    <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-sm)', marginTop: 4 }}>{it[2]}</div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Investimento / pricing --------------------------------------- */
  function Investimento() {
    const planos = [
      { tag: 'À vista', destaque: false, valor: 'a confirmar', nota: 'Melhor condição do ciclo', items: ['Programa completo de 12 meses', 'Todos os encontros e materiais', 'Acesso ao grupo exclusivo'] },
      { tag: 'Parcelado', destaque: true, valor: 'a confirmar', nota: 'Em até 12x no cartão', items: ['Mesmo programa completo', 'Sem juros nas condições do ciclo', 'Vagas sujeitas à seleção'] },
    ];
    return (
      <section className="elv-sec elv-sec--page" id="investimento">
        <div className="elv-wrap">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="Investimento" title="Uma decisão, não uma despesa" lead="O valor é apresentado na conversa de diagnóstico, com a condição vigente do ciclo. Aqui, a transparência sobre o formato." /></Reveal>
          <div className="elv-grid-2 elv-grid-2-sm" style={{ marginTop: 'var(--space-9)', alignItems: 'stretch', maxWidth: 820, marginInline: 'auto' }}>
            {planos.map((p, i) => (
              <Reveal key={i} delay={i} as="div" style={{ display: 'flex' }}>
                <Card variant={p.destaque ? 'wine' : 'plain'} pad="lg" className="elv-lift" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', position: 'relative' }}>
                  {p.destaque ? <span style={{ position: 'absolute', top: 'var(--space-5)', right: 'var(--space-5)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Mais escolhido</span> : null}
                  <div className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: p.destaque ? 'var(--gold-300)' : 'var(--text-gold)' }}>{p.tag}</div>
                  <div className="elv-serif" style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-medium)', color: p.destaque ? 'var(--white-warm)' : 'var(--text-strong)', lineHeight: 1 }}>{p.valor}</div>
                  <div className="elv-sans" style={{ fontSize: 'var(--text-sm)', color: p.destaque ? 'var(--gold-100)' : 'var(--text-muted)' }}>{p.nota}</div>
                  <span style={{ width: 30, height: 1, background: p.destaque ? 'var(--rule-gold-on-wine)' : 'var(--rule-gold)', margin: 'var(--space-2) 0' }} />
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
                    {p.items.map((it, j) => (
                      <li key={j} className="elv-sans" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: p.destaque ? 'var(--text-on-wine)' : 'var(--text-body)', paddingLeft: 18, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, top: 9, width: 5, height: 5, borderRadius: '50%', background: p.destaque ? 'var(--gold-400)' : 'var(--wine-500)' }} />{it}
                      </li>
                    ))}
                  </ul>
                  <Button variant={p.destaque ? 'gold' : 'secondary'} size="md" fullWidth onClick={() => document.getElementById('aplicar').scrollIntoView({ behavior: 'smooth' })}>Aplicar para o ciclo</Button>
                </Card>
              </Reveal>
            ))}
          </div>
          <p className="elv-center elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-6)' }}>Valores e condições a confirmar com o casal · sujeitos à seleção.</p>
        </div>
      </section>
    );
  }

  /* ---- Exclusividade + garantia ------------------------------------- */
  function Exclusividade() {
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap elv-grid-2 elv-grid-2-sm" style={{ alignItems: 'stretch' }}>
          <Reveal as="div" style={{ display: 'flex' }}>
            <Card variant="ink" pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', justifyContent: 'center', width: '100%' }}>
              {Badge ? <Badge tone="onWine" rule>Exclusividade</Badge> : null}
              <h3 className="elv-serif elv-fluid-h3" style={{ fontWeight: 'var(--weight-medium)', color: 'var(--white-warm)', margin: 0 }}>Não trabalhamos com volume. Trabalhamos com profundidade.</h3>
              <p className="elv-sans" style={{ fontWeight: 'var(--weight-light)', fontSize: 'var(--text-sm)', color: 'var(--ink-100)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>Poucos casais por ciclo, com processo seletivo e alinhamento de valores obrigatório. Nem todos que aplicam entram — e isso é intencional.</p>
            </Card>
          </Reveal>
          <Reveal delay={1} as="div" style={{ display: 'flex' }}>
            <Card variant="plain" pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', justifyContent: 'center', width: '100%' }}>
              <Eyebrow>Garantia de 30 dias</Eyebrow>
              <h3 className="elv-serif elv-fluid-h3" style={{ fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 0 }}>O risco é nosso, não de vocês.</h3>
              <p className="elv-sans" style={{ fontWeight: 'var(--weight-light)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>Se aplicarem o método e não perceberem evolução real nos primeiros 30 dias, devolvemos o investimento.</p>
            </Card>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---- FAQ ----------------------------------------------------------- */
  function Faq() {
    const items = [
      { q: 'Para quem é a mentoria?', a: 'Para casais empreendedores que já conquistaram resultado profissional e querem que o casamento evolua no mesmo nível. Não é terapia de crise — é construção estratégica da vida a dois.' },
      { q: 'Como funciona o processo seletivo?', a: 'Vocês preenchem a aplicação, conversamos em uma sessão de diagnóstico de 30 minutos e, havendo alinhamento de valores e momento, vocês entram no ciclo. Trabalhamos com poucos casais por vez.' },
      { q: 'Quanto tempo dura?', a: 'Doze meses, em duas fases: seis meses de elevação individual e seis meses de construção do nós, com encontros e acompanhamento contínuo.' },
      { q: 'É online ou presencial?', a: 'O acompanhamento é 100% digital, com encontros por vídeo. Experiências e eventos pontuais podem ser presenciais, sempre comunicados com antecedência.' },
      { q: 'Os dois precisam participar?', a: 'Sim. A mentoria é do casal. A transformação acontece quando os dois se comprometem com o mesmo método.' },
      { q: 'E se não funcionar para a gente?', a: 'Vocês têm 30 dias de garantia. Se aplicarem o método e não perceberem evolução real, devolvemos o investimento.' },
    ];
    return (
      <section className="elv-sec elv-sec--cream" id="faq">
        <div className="elv-wrap elv-wrap--md">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="Perguntas frequentes" title="Antes de aplicar" /></Reveal>
          <div style={{ marginTop: 'var(--space-8)' }}><Accordion items={items} /></div>
        </div>
      </section>
    );
  }

  /* ---- Aplicação (form) --------------------------------------------- */
  function Aplicar() {
    const Form = window.ElevemApplicationForm;
    return (
      <section className="elv-sec elv-sec--deep" id="aplicar">
        <div className="elv-wrap elv-split">
          <Reveal>
            {Badge ? <Badge tone="onWine" rule>Aplicação</Badge> : null}
            <h2 className="elv-h elv-h--light elv-fluid-h2" style={{ marginTop: 'var(--space-4)', maxWidth: '16ch' }}>Se o casamento de vocês pode viver em outro nível</h2>
            <p className="elv-on-wine elv-fluid-lead" style={{ marginTop: 'var(--space-5)', maxWidth: '40ch', fontWeight: 'var(--weight-light)' }}>
              Preencham a aplicação. Se houver alinhamento na conversa de diagnóstico, vocês entram. Se não, indicamos o melhor caminho — sem custo.
            </p>
            <div style={{ marginTop: 'var(--space-7)' }}>{Signature ? <Signature mentor="couple" tone="light" size="sm" /> : null}</div>
          </Reveal>
          <Reveal delay={1} as="div" style={{ display: 'flex' }}>
            <Card variant="raised" pad="lg" style={{ width: '100%' }}>
              {Form ? <Form /> : <p>Carregando…</p>}
            </Card>
          </Reveal>
        </div>
      </section>
    );
  }

  function MentoriaApp() {
    bindLocal();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); if (location.hash === '#aplicar') setTimeout(() => { const el = document.getElementById('aplicar'); el && el.scrollIntoView(); }, 300); }, []);
    return (
      <Page active="mentoria.html" mobileCta={false}>
        <Hero />
        <Oferta />
        <Investimento />
        <Exclusividade />
        <Faq />
        <Aplicar />
      </Page>
    );
  }

  window.ElevemMentoriaApp = MentoriaApp;
})();
