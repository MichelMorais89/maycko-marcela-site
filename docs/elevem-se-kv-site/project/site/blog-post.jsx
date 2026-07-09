/* Elevem-se — Blog post (leitura long-form data-driven por ?p=slug). */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature, Avatar;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature, Avatar } = NS); }

  /* ---- conteúdo dos artigos ----------------------------------------- */
  const POSTS = {
    'estrutura-vs-sorte': {
      cat: 'Relacionamento', date: 'Jun 2026', read: '6 min', img: 'assets/photos/casal-bw-web.jpg', pos: '50% 26%',
      t: 'Casamentos não fracassam por falta de amor',
      body: [
        ['p', <span>A maioria dos casais acredita que o amor basta. Que, se o sentimento estiver vivo, o resto se ajeita. Mas a verdade é mais dura — e mais libertadora: <strong style={{ color: 'var(--wine-700)' }}>casamentos não fracassam por falta de amor. Fracassam por falta de estrutura.</strong></span>],
        ['p', 'Boa intenção sem alinhamento vira conflito. Amor sem direção vira desgaste. Prosperidade sem maturidade vira disputa. Não é o sentimento que falta — é o método para sustentá-lo no dia a dia.'],
        ['h', 'O desgaste é diário, não súbito'],
        ['p', 'Relacionamentos não terminam da noite para o dia. Terminam por pequenos desgastes diários: a conversa que não aconteceu, a admiração que esfriou, a decisão financeira tomada em silêncio. Quando o casal percebe, já está no modo automático — funcionando, mas não evoluindo.'],
        ['quote', 'Relacionamento saudável não é ausência de problemas. É construção estratégica.'],
        ['h', 'Estrutura é o oposto de sorte'],
        ['p', 'Tratar o casamento com a mesma seriedade com que se trata um negócio não é frieza — é respeito. Significa ter rituais, combinados, uma visão de futuro compartilhada e a disciplina de revisitá-la.'],
        ['list', ['Comunicação madura, antes do problema virar conflito', 'Admiração cultivada de propósito, não por acaso', 'Visão financeira conjunta, decidida a dois', 'Propósito e legado que dão direção ao esforço']],
        ['h', 'Onde começar'],
        ['p', 'Comece reconhecendo onde vocês estão. Sair do automático exige primeiro admitir que se entrou nele. A partir daí, é construção — uma camada de cada vez, com método. É exatamente esse caminho que estruturamos na mentoria Elevem-se.'],
      ],
    },
    'cnpj-cpf': {
      cat: 'Empreendedorismo', date: 'Mai 2026', read: '5 min', img: 'assets/photos/casal-01-web.jpg', pos: '50% 18%',
      t: 'CNPJ e CPF sintonizados',
      body: [
        ['p', <span>Existe um padrão silencioso entre casais empreendedores: <strong style={{ color: 'var(--wine-700)' }}>o negócio cresce e o casamento encolhe.</strong> A energia que sobra do dia vira planilha, reunião, resolução de problema. O que sobra para o outro? Quase nada.</span>],
        ['p', 'A conta não fecha por muito tempo. O CNPJ prospera, mas o CPF — a pessoa, o casal, a família — entra no vermelho emocional. E nenhum resultado profissional compensa um relacionamento em silêncio.'],
        ['h', 'Sucesso que custa o casamento não é sucesso'],
        ['p', 'Quando os dois empreendem, a fronteira entre sociedade e casamento desaparece. As conversas viram pauta, a mesa do jantar vira sala de reunião, e o casal esquece de ser casal. Sintonizar o CNPJ e o CPF é redesenhar essa fronteira de propósito.'],
        ['quote', 'O objetivo não é separar empresa e casamento. É fazer os dois crescerem na mesma direção.'],
        ['h', 'Três combinados que mudam o jogo'],
        ['list', ['Horários sagrados sem trabalho — protegidos como qualquer reunião importante', 'Uma conversa de visão por mês, sobre o casal, não sobre a empresa', 'Decisões financeiras grandes tomadas a dois, com critério combinado antes']],
        ['p', 'Não é sobre trabalhar menos. É sobre não deixar o relacionamento ser a variável de ajuste — aquilo que sempre cede quando o resto aperta.'],
      ],
    },
    'modo-automatico': {
      cat: 'Relacionamento', date: 'Mai 2026', read: '4 min', img: 'assets/photos/casal-02-web.jpg', pos: '50% 16%',
      t: 'Sair do modo automático',
      body: [
        ['p', 'A casa funciona. Os filhos estão bem. O trabalho anda. E, no entanto, algo esfriou. Vocês não estão em crise — estão no automático. E o automático é mais perigoso que a crise, porque não dói o suficiente para reagir.'],
        ['h', 'Os sinais discretos'],
        ['list', ['As conversas viraram logística — quem busca, quem paga, quem resolve', 'A admiração deu lugar à cobrança', 'O silêncio do carro deixou de ser confortável e virou distância', 'Vocês se tratam como sócios da rotina, não como parceiros de vida']],
        ['quote', 'Ninguém decide se afastar. O afastamento é o que acontece quando ninguém decide se aproximar.'],
        ['h', 'A virada começa pequena'],
        ['p', 'Sair do automático não exige uma grande revolução — exige intenção repetida. Um gesto, uma pergunta verdadeira, um tempo protegido. A estrutura existe justamente para que esses gestos não dependam da disposição do dia.'],
        ['p', 'É disso que trata o método: transformar boa intenção em prática sustentável, antes que o desgaste diário cobre a conta.'],
      ],
    },
    'dinheiro-a-dois': {
      cat: 'Finanças do casal', date: 'Abr 2026', read: '7 min', img: 'assets/photos/marcela-poltrona-web.jpg', pos: '50% 16%',
      t: 'Dinheiro a dois sem tensão silenciosa',
      body: [
        ['p', <span>Dinheiro raramente é só dinheiro. É segurança, é poder, é história de família, é medo. Por isso a conversa financeira é a que mais casais evitam — e <strong style={{ color: 'var(--wine-700)' }}>a que mais corrói por baixo do silêncio.</strong></span>],
        ['h', 'A tensão que ninguém nomeia'],
        ['p', 'Um acha que o outro gasta demais. O outro acha que falta reconhecimento. Nenhum diz. A conta segue sendo paga, mas o ressentimento acumula juros. Até que um dia explode por um motivo pequeno — que nunca foi o motivo real.'],
        ['quote', 'Casais não brigam por dinheiro. Brigam pelo que o dinheiro significa para cada um.'],
        ['h', 'De tensão a visão conjunta'],
        ['list', ['Nomear o que dinheiro significa para cada um — sem julgamento', 'Combinar critérios antes das decisões, não no calor delas', 'Ter uma visão financeira compartilhada: para onde estamos indo, juntos', 'Revisitar essa visão com regularidade, como se revisita uma meta de negócio']],
        ['p', 'Quando o dinheiro deixa de ser um campo minado e vira um projeto comum, sobra energia para o que importa. A prosperidade, então, deixa de ser disputa e vira legado.'],
      ],
    },
    'admiracao': {
      cat: 'Relacionamento', date: 'Abr 2026', read: '5 min', img: 'assets/photos/marcela-sorriso-web.jpg', pos: '50% 20%',
      t: 'Reconstruir a admiração',
      body: [
        ['p', 'A paixão inicial é fácil — ela vem de graça. A admiração madura é outra coisa: ela se cultiva. E é justamente a admiração, não a paixão, que sustenta um casamento por décadas.'],
        ['h', 'A rotina engole antes do amor'],
        ['p', 'O que a rotina mata primeiro não é o amor — é a admiração. Quando você vê o outro todos os dias resolvendo o trivial, é fácil esquecer quem ele é, do que é capaz, por que você o escolheu. O encanto vira hábito, e o hábito vira invisibilidade.'],
        ['quote', 'Você não se apaixona por quem o outro foi. Você se mantém apaixonado por quem escolhe enxergar todo dia.'],
        ['h', 'O olhar que se treina'],
        ['list', ['Reconhecer em voz alta — específico, não genérico', 'Dar ao outro espaço para brilhar fora do papel doméstico', 'Lembrar e relembrar a história que construíram juntos', 'Cultivar curiosidade: o outro mudou, e vale a pena reconhecê-lo de novo']],
        ['p', 'Reconstruir a admiração é uma decisão diária de enxergar com intenção. Com método, ela deixa de depender do acaso.'],
      ],
    },
    'proposito-legado': {
      cat: 'Propósito', date: 'Mar 2026', read: '6 min', img: 'assets/photos/casal-bw-web.jpg', pos: '50% 22%',
      t: 'Propósito, prosperidade e legado',
      body: [
        ['p', 'No fim, ninguém é lembrado pelo que acumulou. Somos lembrados pela forma como amamos, construímos e sustentamos aquilo que importava. O casamento é, talvez, o legado mais íntimo que um casal deixa.'],
        ['h', 'Prosperidade sem direção é vazia'],
        ['p', 'Crescer por crescer cansa. O dinheiro, a empresa, os resultados — tudo isso pede um porquê maior que eles mesmos. Casais que prosperam sem propósito chegam ao topo e descobrem que subiram a escada encostada na parede errada.'],
        ['quote', 'Propósito é o que transforma esforço em sentido — e sucesso em legado.'],
        ['h', 'Construir o que fica'],
        ['list', ['Definir, a dois, o que vocês querem deixar — para os filhos e para o mundo', 'Alinhar as decisões grandes a esse legado, não só ao resultado imediato', 'Viver os valores na prática, porque legado se ensina pelo exemplo', 'Revisitar o propósito quando a rotina tentar encolhê-lo']],
        ['p', 'Quando o casal compartilha um propósito, o esforço ganha direção e a prosperidade ganha sentido. É aí que a vida a dois deixa de funcionar — e passa a significar.'],
      ],
    },
  };
  const ORDER = ['estrutura-vs-sorte', 'cnpj-cpf', 'modo-automatico', 'dinheiro-a-dois', 'admiracao', 'proposito-legado'];
  const TONE = { 'estrutura-vs-sorte': 'wine', 'cnpj-cpf': 'ink', 'modo-automatico': 'sand', 'dinheiro-a-dois': 'cream', 'admiracao': 'wine', 'proposito-legado': 'ink' };

  function getSlug() {
    const p = new URLSearchParams(location.search).get('p');
    return p && POSTS[p] ? p : 'estrutura-vs-sorte';
  }

  function ReadingBar() {
    const [w, setW] = React.useState(0);
    React.useEffect(() => {
      const onScroll = () => { const h = document.documentElement.scrollHeight - window.innerHeight; setW(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0); };
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 60, background: 'transparent' }}><div style={{ height: '100%', width: `${w}%`, background: 'var(--gold-500)', transition: 'width 80ms linear' }} /></div>;
  }

  function Body({ blocks }) {
    return (
      <article>
        {blocks.map((b, i) => {
          if (b[0] === 'h') return <h2 key={i} className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 'var(--space-8) 0 var(--space-4)', textWrap: 'balance' }}>{b[1]}</h2>;
          if (b[0] === 'quote') return (
            <figure key={i} style={{ margin: 'var(--space-8) 0', paddingLeft: 'var(--space-6)', borderLeft: '2px solid var(--gold-500)' }}>
              <p className="elv-serif" style={{ fontStyle: 'italic', fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-snug)', color: 'var(--wine-700)', margin: 0 }}>{b[1]}</p>
            </figure>
          );
          if (b[0] === 'list') return (
            <ul key={i} style={{ margin: '0 0 var(--space-6)', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {b[1].map((it, j) => <li key={j} className="elv-sans elv-fluid-post" style={{ color: 'var(--text-body)', paddingLeft: 24, position: 'relative' }}><span style={{ position: 'absolute', left: 0, top: 12, width: 7, height: 7, borderRadius: '50%', background: 'var(--gold-500)' }} />{it}</li>)}
            </ul>
          );
          return <p key={i} className="elv-sans elv-fluid-post" style={{ color: 'var(--text-body)', margin: '0 0 var(--space-5)' }}>{b[1]}</p>;
        })}
      </article>
    );
  }

  function BlogPostApp() {
    bindLocal();
    const slug = getSlug();
    const post = POSTS[slug];
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); window.scrollTo(0, 0); }, [slug]);
    const related = ORDER.filter((s) => s !== slug).slice(0, 3).map((s) => ({ slug: s, cat: POSTS[s].cat, t: POSTS[s].t, tone: TONE[s] }));
    const toneBg = { wine: 'var(--wine-600)', ink: 'var(--ink-800)', sand: 'var(--sand)', cream: 'var(--cream)' };
    const toneFg = { wine: 'var(--gold-200)', ink: 'var(--gold-300)', sand: 'var(--wine-700)', cream: 'var(--wine-700)' };

    return (
      <Page active="blog.html" mobileCta={false}>
        <ReadingBar />
        <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-7)' }}>
          <div className="elv-wrap elv-wrap--prose elv-center" style={{ textAlign: 'center' }}>
            <Reveal className="elv-center">
              <a href="blog.html" className="elv-link" style={{ fontSize: 'var(--text-sm)' }}>← Voltar ao blog</a>
              <div style={{ marginTop: 'var(--space-5)' }}><Badge tone="gold" rule>{post.cat}</Badge></div>
              <h1 className="elv-h elv-fluid-h1" style={{ marginTop: 'var(--space-4)', maxWidth: '20ch' }}>{post.t}</h1>
              <div className="elv-sans elv-muted" style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)', display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', marginTop: 'var(--space-5)', flexWrap: 'wrap' }}><span>Maycko &amp; Marcela</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.read} de leitura</span></div>
            </Reveal>
          </div>
        </section>

        <div className="elv-wrap" style={{ marginBottom: 'var(--space-9)' }}>
          <Reveal><div style={{ aspectRatio: '16 / 7', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
            <img src={post.img} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: post.pos }} />
            <span style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 1px var(--gold-500)', borderRadius: 'var(--radius-lg)' }} />
          </div></Reveal>
        </div>

        <section style={{ paddingBottom: 'var(--space-10)' }}>
          <div className="elv-wrap elv-wrap--prose"><Reveal><Body blocks={post.body} /></Reveal></div>
        </section>

        {/* author */}
        <section className="elv-sec--tight elv-sec--cream" style={{ paddingBlock: 'var(--space-8)' }}>
          <div className="elv-wrap elv-wrap--prose">
            <Card variant="plain" pad="lg" style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center', flexWrap: 'wrap' }}>
              {Avatar ? <Avatar src="assets/photos/casal-02-web.jpg" alt="Maycko e Marcela" size={64} /> : null}
              <div style={{ flex: '1 1 240px' }}>
                <div className="elv-serif" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)' }}>Maycko &amp; Marcela</div>
                <p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-sm)', margin: '4px 0 0', lineHeight: 'var(--leading-relaxed)' }}>Mentores da Elevem-se. Juntos há mais de 20 anos — ensinam o que vivem e estruturam.</p>
              </div>
              <Button variant="secondary" size="md" onClick={() => (location.href = 'mentoria.html#aplicar')}>Conhecer a mentoria</Button>
            </Card>
          </div>
        </section>

        {/* related */}
        <section className="elv-sec elv-sec--page">
          <div className="elv-wrap">
            <Reveal><SectionHead eyebrow="Continue lendo" title="Outros artigos" /></Reveal>
            <div className="elv-grid-3" style={{ marginTop: 'var(--space-8)', alignItems: 'stretch' }}>
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i % 3} as="a" href={`blog-post.html?p=${p.slug}`} className="elv-lift" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--ring-hairline)', padding: 'var(--space-5)' }}>
                  <div style={{ aspectRatio: '16 / 10', borderRadius: 'var(--radius-md)', background: toneBg[p.tone], display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <span className="elv-serif" style={{ fontSize: '3rem', fontStyle: 'italic', color: toneFg[p.tone], opacity: 0.5 }}>e</span>
                    <span style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 1px rgba(214,188,129,0.25)', borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-gold)' }}>{p.cat}</div>
                  <h3 className="elv-serif" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 0 }}>{p.t}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Page>
    );
  }
  window.ElevemBlogPostApp = BlogPostApp;
})();
