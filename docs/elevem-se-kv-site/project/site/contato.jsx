/* Elevem-se — Contato (formulário com estados + canais). */
(function () {
  let Logo, Badge, Button, Card, Quote, Signature;
  function bindLocal() { const NS = window.ElevemSeDesignSystem_00d476 || {}; ({ Logo, Badge, Button, Card, Quote, Signature } = NS); }

  function Lbl({ children, required }) { return <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', marginBottom: 'var(--space-2)' }}>{children}{required ? <span style={{ color: 'var(--gold-600)', marginLeft: 4 }}>*</span> : null}</label>; }
  function ctrl(invalid) { return { width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: `1px solid ${invalid ? 'var(--danger)' : 'var(--nude)'}`, background: 'var(--white-warm)', color: 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', outline: 'none' }; }

  function ContactForm() {
    const { Button } = window.ElevemSeDesignSystem_00d476;
    const [d, setD] = React.useState({ nome: '', email: '', assunto: 'Dúvida sobre a mentoria', msg: '' });
    const [touched, setTouched] = React.useState({});
    const [state, setState] = React.useState('idle');
    const set = (k, v) => setD((s) => ({ ...s, [k]: v }));
    const errors = {};
    if (!d.nome.trim()) errors.nome = 'Informe seu nome.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) errors.email = 'E-mail inválido.';
    if (d.msg.trim().length < 8) errors.msg = 'Escreva sua mensagem.';
    const show = (f) => touched[f] ? errors[f] : null;
    const submit = (e) => {
      e.preventDefault();
      if (Object.keys(errors).length) { setTouched({ nome: true, email: true, msg: true }); return; }
      setState('loading');
      setTimeout(() => setState('success'), 1200);
    };

    if (state === 'success') {
      return (
        <div className="elv-reveal is-in elv-center" style={{ textAlign: 'center', padding: 'var(--space-7) 0' }}>
          <span style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, color: 'var(--gold-800)', marginBottom: 'var(--space-5)' }} aria-hidden="true">✓</span>
          <h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 0 }}>Mensagem enviada.</h3>
          <p className="elv-sans" style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', maxWidth: '38ch', marginTop: 'var(--space-4)' }}>Respondemos no e-mail <strong>{d.email}</strong> em até 2 dias úteis.</p>
          <div style={{ marginTop: 'var(--space-6)' }}><Button variant="ghost" size="md" onClick={() => { setD({ nome: '', email: '', assunto: 'Dúvida sobre a mentoria', msg: '' }); setTouched({}); setState('idle'); }}>Enviar outra</Button></div>
        </div>
      );
    }

    return (
      <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div><Lbl required>Seu nome</Lbl><input value={d.nome} onChange={(e) => set('nome', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, nome: true }))} style={ctrl(show('nome'))} placeholder="Como podemos chamar você" />{show('nome') ? <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{show('nome')}</span> : null}</div>
        <div><Lbl required>E-mail</Lbl><input type="email" value={d.email} onChange={(e) => set('email', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, email: true }))} style={ctrl(show('email'))} placeholder="nome@empresa.com" />{show('email') ? <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{show('email')}</span> : null}</div>
        <div><Lbl>Assunto</Lbl>
          <select value={d.assunto} onChange={(e) => set('assunto', e.target.value)} style={{ ...ctrl(false), appearance: 'none', cursor: 'pointer' }}>
            <option>Dúvida sobre a mentoria</option>
            <option>Quero aplicar</option>
            <option>Imprensa / parcerias</option>
            <option>Outro assunto</option>
          </select>
        </div>
        <div><Lbl required>Mensagem</Lbl><textarea value={d.msg} onChange={(e) => set('msg', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, msg: true }))} rows={5} style={{ ...ctrl(show('msg')), resize: 'vertical', lineHeight: 'var(--leading-relaxed)' }} placeholder="Conte como podemos ajudar." />{show('msg') ? <span className="elv-sans" style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{show('msg')}</span> : null}</div>
        <div><Button variant="primary" size="lg" type="submit" disabled={state === 'loading'}>{state === 'loading' ? 'Enviando…' : 'Enviar mensagem'}</Button></div>
      </form>
    );
  }

  function Hero() {
    const canais = [
      ['E-mail', 'contato@elevem-se.com.br'],
      ['WhatsApp', '(11) 90000-0000'],
      ['Instagram', '@marcelazanardo · @maykoalvess'],
      ['Atendimento', '100% digital · seg a sex, 9h–18h'],
    ];
    return (
      <section className="elv-sec elv-sec--page" style={{ paddingTop: 'var(--space-9)' }}>
        <div className="elv-wrap elv-split">
          <Reveal>
            <Eyebrow>Fale com a gente</Eyebrow>
            <h1 className="elv-h elv-h--wine elv-fluid-h1" style={{ marginTop: 'var(--space-5)', maxWidth: '14ch' }}>Vamos conversar?</h1>
            <p className="elv-lead elv-fluid-lead elv-measure" style={{ marginTop: 'var(--space-5)' }}>
              Dúvidas sobre a mentoria, imprensa ou parcerias. Se já quer entrar no processo, o caminho mais rápido é a aplicação.
            </p>
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column' }}>
              {canais.map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-hairline)', alignItems: 'baseline' }}>
                  <span className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-gold)' }}>{c[0]}</span>
                  <span className="elv-sans" style={{ fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>{c[1]}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-7)' }}><Button variant="secondary" size="md" onClick={() => (location.href = 'mentoria.html#aplicar')}>Prefiro aplicar direto</Button></div>
          </Reveal>
          <Reveal delay={1} as="div" style={{ display: 'flex' }}>
            <Card variant="raised" pad="lg" style={{ width: '100%' }}>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </section>
    );
  }

  function ContatoApp() {
    bindLocal();
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    return (
      <Page active="contato.html"><Hero /></Page>
    );
  }
  window.ElevemContatoApp = ContatoApp;
})();
