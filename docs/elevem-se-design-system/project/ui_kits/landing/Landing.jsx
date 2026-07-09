/* Elevem-se — Landing / sales page UI kit.
   Real content from elevem-se.com.br, recreated in the new identity.
   Composes design-system primitives; DS bound at render (load-order-safe). */

let Logo, Badge, Button, Card, Quote, Signature;
function bindDS() {
  const NS = window.ElevemSeDesignSystem_00d476;
  ({ Logo, Badge, Button, Card, Quote, Signature } = NS);
  // Resilience: if the bundle predates a component, fall back so the page never hard-crashes.
  if (!Signature) {
    Signature = ({ tone }) => React.createElement('span', {
      style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, letterSpacing: '0.04em', color: tone === 'light' ? 'var(--white-warm)' : 'var(--graphite-900)' },
    }, 'Maycko & Marcela');
  }
}

/* ---------- helpers ---------------------------------------------------- */

function Photo({ src, alt = '', ratio = '4 / 5', frame = true, position = '50% 30%', style }) {
  return (
    <div style={{ aspectRatio: ratio, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--cream)', boxShadow: frame ? 'inset 0 0 0 1px var(--gold-500)' : 'none', position: 'relative', ...style }}>
      {src && <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }} />}
    </div>
  );
}

function Eyebrow({ children, tone = 'gold' }) {
  return <Badge tone={tone} rule>{children}</Badge>;
}

function Section({ children, bg = 'page', id, style }) {
  const backgrounds = { page: 'var(--surface-page)', cream: 'var(--surface-sunken)', wine: 'var(--surface-wine)', deep: 'var(--surface-wine-deep)' };
  return (
    <section id={id} style={{ background: backgrounds[bg], padding: 'var(--space-11) var(--space-6)', ...style }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Heading({ children, tone = 'dark', size = 'var(--text-3xl)', style }) {
  return (
    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: size, lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)', color: tone === 'light' ? 'var(--white-warm)' : 'var(--text-strong)', margin: 'var(--space-4) 0 0', maxWidth: '22ch', textWrap: 'balance', ...style }}>{children}</h2>
  );
}

/* ---------- nav -------------------------------------------------------- */

function Nav() {
  const link = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', textDecoration: 'none', letterSpacing: '0.02em' };
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 10, background: 'color-mix(in srgb, var(--ivory) 88%, transparent)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'var(--space-3) var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo variant="horizontal" tone="wine" size={34} tagline={false} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
          <a href="#quem-somos" style={link}>Quem somos</a>
          <a href="#metodo" style={link}>O método</a>
          <a href="#ecossistema" style={link}>Ecossistema</a>
          <Button variant="primary" size="sm">Quero aplicar</Button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- hero ------------------------------------------------------- */

function Hero() {
  return (
    <Section bg="page" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-12)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'var(--space-10)', alignItems: 'center' }}>
        <div>
          <Eyebrow>Mentoria para casais</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--wine-700)', margin: 'var(--space-5) 0 0', textWrap: 'balance' }}>
            Casais que crescem juntos não dependem da sorte.<br />
            Dependem de <span style={{ fontStyle: 'italic', background: 'linear-gradient(to bottom, transparent 60%, var(--highlight-warm) 60%)', padding: '0 0.06em' }}>estrutura.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: '48ch', margin: 'var(--space-6) 0 0' }}>
            Uma mentoria exclusiva para casais que já conquistaram muito e decidiram que o casamento também precisa evoluir no mesmo nível. Em 12 meses, vocês saem do modo automático e constroem um relacionamento estruturado, consciente e próspero.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="lg">Quero aplicar para o Elevem-se</Button>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>Processo seletivo por aplicação</span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Photo src="../../assets/photos/casal-01-web.jpg" alt="Maycko e Marcela" ratio="4 / 5" position="50% 22%" />
          <div style={{ position: 'absolute', left: '-26px', bottom: '-22px', width: '62%' }}>
            <Card variant="raised" pad="md">
              <Quote size="sm" cite="Maycko & Marcela" role="Mentores">
                Ensinamos o que vivemos e estruturamos.
              </Quote>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- quem somos ------------------------------------------------- */

function QuemSomos() {
  return (
    <Section bg="cream" id="quem-somos">
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-10)', alignItems: 'center' }}>
        <Photo src="../../assets/photos/casal-02-web.jpg" alt="Marcela e Maycko" ratio="4 / 5" position="50% 20%" />
        <div>
          <Eyebrow>Quem conduz</Eyebrow>
          <Heading>Marcela &amp; Maycko</Heading>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: '52ch', marginTop: 'var(--space-5)' }}>
            Juntos há mais de 20 anos, casados há 13, pais de três filhos. Já atravessamos as fases difíceis — e escolhemos crescer. A Elevem-se nasceu da prática, não da teoria: ensinamos o que vivemos e estruturamos.
          </p>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <Signature mentor="couple" tone="wine" size="md" />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- dores ------------------------------------------------------ */

function Dores() {
  const pains = [
    'Conversam menos — e discutem pelos mesmos motivos de sempre.',
    'Resolvem os problemas, mas não evoluem com eles.',
    'A rotina engoliu a admiração que um tinha pelo outro.',
    'O dinheiro, às vezes, gera uma tensão silenciosa.',
    'Não querem se separar. Mas também não querem envelhecer no automático.',
  ];
  return (
    <Section bg="page" id="dores">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-10)' }}>
        <div>
          <Eyebrow>Talvez você reconheça</Eyebrow>
          <Heading>Vocês se amam. Mas sabem que poderiam estar melhores.</Heading>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: '40ch', marginTop: 'var(--space-5)' }}>
            A casa funciona, os filhos estão bem, o trabalho anda. Mas o relacionamento está apenas funcionando.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {pains.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderBottom: i < pains.length - 1 ? '1px solid var(--border-hairline)' : 'none', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--gold-600)', minWidth: 34 }}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- conceito (wine) -------------------------------------------- */

function Conceito() {
  const lines = [
    'Amor sem direção vira desgaste.',
    'Boa intenção sem alinhamento vira conflito.',
    'Prosperidade sem maturidade vira disputa.',
  ];
  return (
    <Section bg="wine" id="conceito">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Badge tone="onWine" rule>O conceito</Badge>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--white-warm)', margin: 'var(--space-5) 0 0', maxWidth: '18ch', textWrap: 'balance' }}>
            Casamentos não fracassam por falta de amor. Fracassam por falta de <em style={{ color: 'var(--gold-300)' }}>estrutura.</em>
        </h2>
        <div style={{ display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-8)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {lines.map((l, i) => (
            <p key={i} style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-base)', color: 'var(--text-on-wine)', maxWidth: '22ch', margin: 0, lineHeight: 'var(--leading-normal)' }}>{l}</p>
          ))}
        </div>
        <span style={{ width: 44, height: 1, background: 'var(--rule-gold-on-wine)', margin: 'var(--space-8) 0 var(--space-5)' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-xl)', color: 'var(--gold-100)', maxWidth: '30ch', margin: 0 }}>
          Relacionamento saudável não é ausência de problemas. É construção estratégica.
        </p>
      </div>
    </Section>
  );
}

/* ---------- método ----------------------------------------------------- */

function Metodo() {
  const fases = [
    { n: 'Fase 01', t: 'Elevação Individual', d: 'Primeiros 6 meses', items: ['Mentalidade e padrões subconscientes', 'Ressignificação de crenças', 'Espiritualidade aplicada', 'Saúde, energia e disciplina', 'Organização da rotina e do tempo'] },
    { n: 'Fase 02', t: 'Construção do Nós', d: 'Encontros + acompanhamento', items: ['Comunicação madura', 'Reconstrução da admiração', 'Intimidade e conexão', 'Alinhamento na criação dos filhos', 'Visão financeira conjunta, propósito e legado'] },
  ];
  return (
    <Section bg="page" id="metodo">
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Eyebrow>O método</Eyebrow>
        <Heading style={{ textAlign: 'center', maxWidth: '24ch' }}>Doze meses, em duas fases</Heading>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: '48ch', marginTop: 'var(--space-4)', lineHeight: 'var(--leading-relaxed)' }}>
          Seis meses de encontros e seis meses de acompanhamento. Primeiro cada um se eleva; depois, juntos, vocês constroem o nós.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-9)', alignItems: 'stretch' }}>
        {fases.map((f, i) => (
          <Card key={i} variant={i === 0 ? 'ink' : 'wine'} pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--gold-300)' }}>{f.n}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>{f.d}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-2xl)', color: 'var(--white-warm)', margin: 0 }}>{f.t}</h3>
            <span style={{ width: 30, height: 1, background: i === 0 ? 'var(--ink-400)' : 'var(--rule-gold-on-wine)' }} />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {f.items.map((it, j) => (
                <li key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: i === 0 ? 'var(--ink-100)' : 'var(--text-on-wine)', paddingLeft: 18, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 9, width: 5, height: 5, borderRadius: '50%', background: i === 0 ? 'var(--ink-400)' : 'var(--gold-400)' }} />
                  {it}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------- ecossistema ------------------------------------------------ */

function Ecossistema() {
  const items = [
    ['14', 'encontros estratégicos', 'Individuais e do relacionamento'],
    ['12', 'meses de acompanhamento', 'Do início ao fim do ciclo'],
    ['01', 'grupo exclusivo', 'Casais em alinhamento de valores'],
    ['—', 'planner personalizado', 'Estrutura da rotina a dois'],
    ['03', 'livros selecionados', 'Curadoria do casal'],
    ['03', 'sessões com Inês Marcel', 'Referência em hipnose clínica'],
  ];
  return (
    <Section bg="cream" id="ecossistema">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
        <div>
          <Eyebrow>O que está incluído</Eyebrow>
          <Heading>Isso não é apenas mentoria. É um ecossistema.</Heading>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-base)', color: 'var(--text-muted)', maxWidth: '38ch', marginTop: 'var(--space-5)', lineHeight: 'var(--leading-relaxed)' }}>
            Convites para experiências e eventos, materiais e acompanhamento — tudo desenhado para sustentar a evolução do casal por um ano inteiro.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2) var(--space-6)' }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderTop: '1px solid var(--border-hairline)', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--gold-700)', minWidth: 38, lineHeight: 1 }}>{it[0]}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>{it[1]}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2 }}>{it[2]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- exclusividade + garantia ----------------------------------- */

function Exclusividade() {
  return (
    <Section bg="page" id="exclusividade">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'stretch' }}>
        <Card variant="ink" pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <Badge tone="onWine" rule>Exclusividade</Badge>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-2xl)', color: 'var(--white-warm)', margin: 0, textWrap: 'balance' }}>
            Não trabalhamos com volume. Trabalhamos com profundidade.
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-sm)', color: 'var(--ink-100)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
            Poucos casais por ciclo, com processo seletivo por aplicação e alinhamento de valores obrigatório. Nem todos que aplicam entram — e isso é intencional.
          </p>
        </Card>
        <Card variant="plain" pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <Eyebrow>Garantia de 30 dias</Eyebrow>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-2xl)', color: 'var(--text-strong)', margin: 0, textWrap: 'balance' }}>
            O risco é nosso, não de vocês.
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
            Se aplicarem o método e não perceberem evolução real nos primeiros 30 dias, devolvemos o investimento.
          </p>
        </Card>
      </div>
    </Section>
  );
}

/* ---------- legado (full-bleed photo) ---------------------------------- */

function Legado() {
  return (
    <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <img src="../../assets/photos/casal-bw-web.jpg" alt="Maycko e Marcela" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 28%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(42,16,22,0.92) 6%, rgba(42,16,22,0.45) 45%, rgba(42,16,22,0.25) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'var(--space-10) var(--space-6)', width: '100%' }}>
        <Badge tone="onWine" rule>Legado</Badge>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-snug)', color: 'var(--white-warm)', margin: 'var(--space-4) 0 0', maxWidth: '24ch', textWrap: 'balance' }}>
          No fim, ninguém é lembrado pelo que acumulou — e sim pela forma como amou, construiu e sustentou o próprio casamento.
        </h2>
      </div>
    </section>
  );
}

/* ---------- CTA final -------------------------------------------------- */

function FinalCta() {
  return (
    <Section bg="page">
      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo variant="mark" tone="wine" size={52} />
        <div style={{ marginTop: 'var(--space-5)' }}><Eyebrow>A decisão é estratégica</Eyebrow></div>
        <Heading style={{ textAlign: 'center', maxWidth: '20ch' }}>Se o casamento de vocês pode viver em outro nível</Heading>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-light)', fontSize: 'var(--text-md)', color: 'var(--text-body)', maxWidth: '46ch', marginTop: 'var(--space-4)', lineHeight: 'var(--leading-relaxed)' }}>
          Preencham a aplicação. Se houver alinhamento, vocês entram. Se não, indicamos o melhor caminho.
        </p>
        <div style={{ marginTop: 'var(--space-7)' }}>
          <Button variant="primary" size="lg">Quero aplicar para o Elevem-se</Button>
        </div>
      </div>
    </Section>
  );
}

/* ---------- footer ----------------------------------------------------- */

function Footer() {
  const link = { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-on-wine)', textDecoration: 'none', opacity: 0.85 };
  return (
    <footer style={{ background: 'var(--surface-wine-deep)', padding: 'var(--space-10) var(--space-6) var(--space-7)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
        <Logo variant="lockup" tone="light" size={60} />
        <Signature mentor="couple" tone="light" size="sm" />
        <div style={{ display: 'flex', gap: 'var(--space-7)' }}>
          <a href="https://instagram.com/marcelazanardo" style={link}>@marcelazanardo</a>
          <a href="https://instagram.com/maykoalvess" style={link}>@maykoalvess</a>
          <a href="https://youtube.com/@mayko.alvess" style={link}>YouTube</a>
        </div>
        <span style={{ width: 40, height: 1, background: 'var(--rule-gold-on-wine)' }} />
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--gold-300)', opacity: 0.7, margin: 0 }}>
          © Elevem-se · Mentoria para casais
        </p>
      </div>
    </footer>
  );
}

/* ---------- app -------------------------------------------------------- */

function LandingApp() {
  bindDS();
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <Nav />
      <Hero />
      <QuemSomos />
      <Dores />
      <Conceito />
      <Metodo />
      <Ecossistema />
      <Exclusividade />
      <Legado />
      <FinalCta />
      <Footer />
    </div>
  );
}

window.ElevemLandingApp = LandingApp;
