/* Elevem-se — Home. Compõe DS + site-kit. Mobile-first. */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature, Avatar;
  function bindLocal() {
    const NS = window.ElevemSeDesignSystem_00d476 || {};
    ({ Logo, Badge, Button, Card, Quote, Signature, Avatar } = NS);
  }

  /* ---- Hero ---------------------------------------------------------- */
  function Hero() {
    return (
      <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)' }}>
        <div className="elv-wrap elv-split elv-split--media-first">
          <Reveal as="div">
            <Eyebrow>Mentoria para casais</Eyebrow>
            <h1 className="elv-h elv-h--wine elv-fluid-hero" style={{ marginTop: 'var(--space-5)' }}>
              Casais que crescem juntos não dependem da sorte. Dependem de <span className="elv-ital-warm elv-mark-warm">estrutura.</span>
            </h1>
            <p className="elv-lead elv-fluid-lead elv-measure" style={{ marginTop: 'var(--space-6)' }}>
              Uma mentoria exclusiva para casais que já conquistaram muito — e decidiram que o casamento também precisa evoluir no mesmo nível. Em 12 meses, vocês saem do modo automático e constroem um relacionamento estruturado, consciente e próspero.
            </p>
            <div className="elv-row" style={{ marginTop: 'var(--space-8)', gap: 'var(--space-4)' }}>
              <Button variant="primary" size="lg" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar</Button>
              <Button variant="secondary" size="lg" onClick={() => (location.href = 'metodo.html')}>Conhecer o método</Button>
            </div>
            <p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', marginTop: 'var(--space-5)', textTransform: 'uppercase' }}>Processo seletivo por aplicação · Poucos casais por ciclo</p>
          </Reveal>

          <Reveal as="div" delay={1} style={{ position: 'relative' }}>
            <Photo src="assets/photos/casal-01-web.jpg" alt="Maycko e Marcela" ratio="4 / 5" position="50% 20%" />
            <div style={{ position: 'absolute', left: 'clamp(-12px, -2vw, -26px)', bottom: -26, width: 'min(82%, 312px)' }}>
              <Card variant="raised" pad="md">
                {Quote ? <Quote size="sm" cite="Maycko & Marcela" role="Mentores">Ensinamos o que vivemos e estruturamos.</Quote> : null}
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---- Stat / prova strip (substitui "logos") ------------------------ */
  function Prova() {
    const stats = [
      ['+20', 'anos juntos'],
      ['13', 'anos de casamento'],
      ['3', 'filhos'],
      ['100%', 'digital · Brasil'],
    ];
    return (
      <section className="elv-sec--cream" style={{ paddingBlock: 'var(--space-7)', borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="elv-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i} className="elv-prova-item" style={{ textAlign: 'center' }}>
              <div className="elv-serif" style={{ fontSize: 'clamp(2rem, 1.4rem + 2vw, 3rem)', color: 'var(--wine-700)', lineHeight: 1 }}>{s[0]}</div>
              <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', marginTop: 'var(--space-2)' }}>{s[1]}</div>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  /* ---- Dores --------------------------------------------------------- */
  function Dores() {
    const pains = [
      'Conversam menos — e discutem pelos mesmos motivos de sempre.',
      'Resolvem os problemas, mas não evoluem com eles.',
      'A rotina engoliu a admiração que um tinha pelo outro.',
      'O dinheiro, às vezes, gera uma tensão silenciosa.',
      'Não querem se separar. Mas também não querem envelhecer no automático.',
    ];
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap elv-split">
          <Reveal>
            <SectionHead eyebrow="Talvez você reconheça" title="Vocês se amam. Mas sabem que poderiam estar melhores." lead="A casa funciona, os filhos estão bem, o trabalho anda. Mas o relacionamento está apenas funcionando." />
          </Reveal>
          <Reveal delay={1} as="div" style={{ display: 'flex', flexDirection: 'column' }}>
            {pains.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderBottom: i < pains.length - 1 ? '1px solid var(--border-hairline)' : 'none', alignItems: 'baseline' }}>
                <span className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--gold-600)', minWidth: 34 }}>{String(i + 1).padStart(2, '0')}</span>
                <p className="elv-sans" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', margin: 0 }}>{p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---- Conceito (wine) ----------------------------------------------- */
  function Conceito() {
    const lines = ['Amor sem direção vira desgaste.', 'Boa intenção sem alinhamento vira conflito.', 'Prosperidade sem maturidade vira disputa.'];
    return (
      <section className="elv-sec elv-sec--wine">
        <div className="elv-wrap elv-center">
          <Reveal className="elv-center">
            {Badge ? <Badge tone="onWine" rule>O conceito</Badge> : null}
            <h2 className="elv-h elv-h--light elv-fluid-h1" style={{ marginTop: 'var(--space-5)', maxWidth: '18ch' }}>
              Casamentos não fracassam por falta de amor. Fracassam por falta de <em className="elv-ital-gold">estrutura.</em>
            </h2>
          </Reveal>
          <div style={{ display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-8)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {lines.map((l, i) => (
              <Reveal key={i} delay={i}><p className="elv-sans elv-on-wine" style={{ fontWeight: 'var(--weight-light)', fontSize: 'var(--text-base)', maxWidth: '22ch', margin: 0, lineHeight: 'var(--leading-normal)', textAlign: 'center' }}>{l}</p></Reveal>
            ))}
          </div>
          <span className="elv-tick elv-tick--wine" style={{ width: 44, margin: 'var(--space-8) 0 var(--space-5)' }} />
          <Reveal><p className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-xl)', color: 'var(--gold-100)', maxWidth: '30ch', margin: 0, textAlign: 'center' }}>Relacionamento saudável não é ausência de problemas. É construção estratégica.</p></Reveal>
        </div>
      </section>
    );
  }

  /* ---- Método resumido ----------------------------------------------- */
  function MetodoResumo() {
    const fases = [
      { n: 'Fase 01', t: 'Elevação Individual', d: 'Primeiros 6 meses', items: ['Mentalidade e padrões subconscientes', 'Ressignificação de crenças', 'Saúde, energia e disciplina', 'Organização da rotina e do tempo'] },
      { n: 'Fase 02', t: 'Construção do Nós', d: 'Encontros + acompanhamento', items: ['Comunicação madura', 'Reconstrução da admiração', 'Intimidade e conexão', 'Visão financeira conjunta e legado'] },
    ];
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="O método" title="Doze meses, em duas fases" lead="Seis meses de encontros e seis meses de acompanhamento. Primeiro cada um se eleva; depois, juntos, vocês constroem o nós." /></Reveal>
          <div className="elv-grid-2 elv-grid-2-sm" style={{ marginTop: 'var(--space-9)', alignItems: 'stretch' }}>
            {fases.map((f, i) => (
              <Reveal key={i} delay={i} as="div" style={{ display: 'flex' }}>
                <Card variant={i === 0 ? 'ink' : 'wine'} pad="lg" className="elv-lift" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--gold-300)', whiteSpace: 'nowrap' }}>{f.n}</span>
                    <span className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>{f.d}</span>
                  </div>
                  <h3 className="elv-serif" style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-2xl)', color: 'var(--white-warm)', margin: 0 }}>{f.t}</h3>
                  <span style={{ width: 30, height: 1, background: i === 0 ? 'var(--ink-400)' : 'var(--rule-gold-on-wine)' }} />
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {f.items.map((it, j) => (
                      <li key={j} className="elv-sans" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: i === 0 ? 'var(--ink-100)' : 'var(--text-on-wine)', paddingLeft: 18, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, top: 9, width: 5, height: 5, borderRadius: '50%', background: i === 0 ? 'var(--ink-400)' : 'var(--gold-400)' }} />{it}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="elv-center" style={{ marginTop: 'var(--space-8)' }}>
            <Button variant="ghost" size="md" onClick={() => (location.href = 'metodo.html')}>Ver o método completo →</Button>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Quem conduz --------------------------------------------------- */
  function Mentores() {
    return (
      <section className="elv-sec elv-sec--cream">
        <div className="elv-wrap elv-split elv-split--media-first">
          <Reveal><Photo src="assets/photos/casal-02-web.jpg" alt="Marcela e Maycko" ratio="4 / 5" position="50% 18%" /></Reveal>
          <Reveal delay={1}>
            <SectionHead eyebrow="Quem conduz" title="Marcela & Maycko" lead="Juntos há mais de 20 anos, casados há 13, pais de três filhos. Já atravessamos as fases difíceis — e escolhemos crescer. A Elevem-se nasceu da prática, não da teoria: ensinamos o que vivemos e estruturamos." />
            <div style={{ marginTop: 'var(--space-7)' }}>{Signature ? <Signature mentor="couple" tone="wine" size="md" /> : null}</div>
            <div style={{ marginTop: 'var(--space-6)' }}><Button variant="secondary" size="md" onClick={() => (location.href = 'sobre.html')}>Conhecer a história</Button></div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---- Depoimentos / cases ------------------------------------------- */
  function Depoimentos() {
    const items = [
      { q: 'Paramos de discutir os mesmos assuntos. Hoje conversamos antes do problema virar conflito.', n: 'Rafael & Letícia', r: 'Empreendedores · 9 anos juntos' },
      { q: 'O CNPJ ia bem, o CPF não. A mentoria sintonizou os dois — e o nosso casamento respira de novo.', n: 'André & Camila', r: 'Sócios e casados · 14 anos' },
      { q: 'Saímos do automático. Voltamos a nos admirar, com método e não com sorte.', n: 'Bruno & Patrícia', r: 'Família empreendedora · 12 anos' },
    ];
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap">
          <Reveal className="elv-center"><SectionHead align="center" eyebrow="Quem viveu" title="Casais que saíram do automático" /></Reveal>
          <div className="elv-grid-3" style={{ marginTop: 'var(--space-9)', alignItems: 'stretch' }}>
            {items.map((t, i) => (
              <Reveal key={i} delay={i} as="div" style={{ display: 'flex' }}>
                <Card variant="plain" pad="lg" className="elv-lift" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', width: '100%' }}>
                  <span className="elv-serif" style={{ fontSize: 'var(--text-4xl)', color: 'var(--gold-400)', lineHeight: 0.6, height: 24 }}>“</span>
                  <p className="elv-serif" style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-snug)', color: 'var(--text-strong)', margin: 0, flex: 1 }}>{t.q}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    {Avatar ? <Avatar initials={t.n.split(' ')[0][0] + t.n.split('& ')[1][0]} size={40} /> : null}
                    <div>
                      <div className="elv-sans" style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{t.n}</div>
                      <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)' }}>{t.r}</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <p className="elv-center elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-6)' }}>Depoimentos representativos — substituir por casos reais aprovados.</p>
        </div>
      </section>
    );
  }

  /* ---- Legado (full-bleed) ------------------------------------------- */
  function Legado() {
    return (
      <section style={{ position: 'relative', minHeight: '64vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src="assets/photos/casal-bw-web.jpg" alt="Maycko e Marcela" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 24%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(42,16,22,0.94) 8%, rgba(42,16,22,0.5) 48%, rgba(42,16,22,0.28) 100%)' }} />
        <div className="elv-wrap" style={{ position: 'relative', paddingBlock: 'var(--space-10)' }}>
          <Reveal>
            {Badge ? <Badge tone="onWine" rule>Legado</Badge> : null}
            <h2 className="elv-h elv-h--light elv-fluid-h1" style={{ marginTop: 'var(--space-4)', maxWidth: '24ch' }}>
              No fim, ninguém é lembrado pelo que acumulou — e sim pela forma como amou, construiu e sustentou o próprio casamento.
            </h2>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ---- CTA final ----------------------------------------------------- */
  function FinalCta() {
    return (
      <section className="elv-sec elv-sec--page">
        <div className="elv-wrap elv-wrap--md elv-center">
          <Reveal className="elv-center">
            {Logo ? <Logo variant="mark" tone="wine" size={52} /> : null}
            <div style={{ marginTop: 'var(--space-5)' }}><Eyebrow>A decisão é estratégica</Eyebrow></div>
            <h2 className="elv-h elv-fluid-h1" style={{ marginTop: 'var(--space-4)', maxWidth: '20ch' }}>Se o casamento de vocês pode viver em outro nível</h2>
            <p className="elv-lead elv-fluid-lead" style={{ marginTop: 'var(--space-5)', maxWidth: '46ch' }}>Preencham a aplicação. Se houver alinhamento, vocês entram. Se não, indicamos o melhor caminho.</p>
            <div className="elv-row" style={{ justifyContent: 'center', marginTop: 'var(--space-7)' }}>
              <Button variant="primary" size="lg" onClick={() => (location.href = 'mentoria.html#aplicar')}>Quero aplicar</Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  function HomeApp() {
    bindLocal();
    bindDS();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    return (
      <Page active="home.html">
        <Hero />
        <Prova />
        <Dores />
        <Conceito />
        <MetodoResumo />
        <Mentores />
        <Depoimentos />
        <Legado />
        <FinalCta />
      </Page>
    );
  }

  window.ElevemHomeApp = HomeApp;
})();
