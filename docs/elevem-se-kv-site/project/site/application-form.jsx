/* Elevem-se — Formulário de aplicação multi-step (conversão-mãe).
   Validação real por etapa, progresso, e passo final de agendamento
   (estilo Calendly, simulado). Estados: editando / loading / success. */
(function () {
  function dsNS() { return window.ElevemSeDesignSystem_00d476 || {}; }

  const DESAFIOS = [
    'Comunicação e conflitos recorrentes',
    'Falta de tempo e conexão',
    'Dinheiro e visão financeira',
    'Sociedade / empresa do casal',
    'Intimidade e admiração',
    'Criação dos filhos',
  ];
  const SLOTS = ['Ter · 09:00', 'Ter · 14:00', 'Qua · 10:00', 'Qui · 16:00', 'Sex · 09:00', 'Sex · 15:00'];

  function Progress({ step, total }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-7)' }}>
        {Array.from({ length: total }).map((_, i) => (
          <React.Fragment key={i}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)', background: i <= step ? 'var(--wine-600)' : 'transparent', color: i <= step ? 'var(--white-warm)' : 'var(--text-muted)', border: `1px solid ${i <= step ? 'var(--wine-600)' : 'var(--border-hairline)'}`, transition: 'all var(--duration-base) var(--ease-standard)' }}>{i + 1}</span>
            {i < total - 1 ? <span style={{ flex: 1, height: 1, background: i < step ? 'var(--gold-500)' : 'var(--border-hairline)', transition: 'background var(--duration-base)' }} /> : null}
          </React.Fragment>
        ))}
      </div>
    );
  }

  function Lbl({ children, required }) {
    return <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', marginBottom: 'var(--space-2)' }}>{children}{required ? <span style={{ color: 'var(--gold-600)', marginLeft: 4 }}>*</span> : null}</label>;
  }
  function ctrl(invalid) {
    return { width: '100%', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: `1px solid ${invalid ? 'var(--danger)' : 'var(--nude)'}`, background: 'var(--white-warm)', color: 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', outline: 'none', transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base)' };
  }
  function Err({ children }) { return children ? <span className="elv-sans" style={{ display: 'block', marginTop: 6, fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{children}</span> : null; }

  function ApplicationForm() {
    const { Button } = dsNS();
    const [step, setStep] = React.useState(0);
    const [data, setData] = React.useState({ nome1: '', nome2: '', email: '', whats: '', tempo: '', empresa: '', desafios: [], porque: '', slot: '' });
    const [touched, setTouched] = React.useState({});
    const [submitting, setSubmitting] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const total = 3;
    const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
    const toggleDesafio = (d) => setData((s) => ({ ...s, desafios: s.desafios.includes(d) ? s.desafios.filter((x) => x !== d) : [...s.desafios, d] }));

    const errors = {};
    if (step === 0) {
      if (!data.nome1.trim()) errors.nome1 = 'Informe o nome.';
      if (!data.nome2.trim()) errors.nome2 = 'Informe o nome.';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errors.email = 'E-mail inválido.';
      if (data.whats.replace(/\D/g, '').length < 10) errors.whats = 'WhatsApp com DDD.';
    }
    if (step === 1) {
      if (!data.tempo) errors.tempo = 'Selecione uma opção.';
      if (!data.empresa) errors.empresa = 'Selecione uma opção.';
      if (data.desafios.length === 0) errors.desafios = 'Escolha ao menos um.';
    }
    if (step === 2) {
      if (data.porque.trim().length < 12) errors.porque = 'Conte um pouco mais (mín. 12 caracteres).';
      if (!data.slot) errors.slot = 'Escolha um horário para a conversa.';
    }

    const stepFields = [['nome1', 'nome2', 'email', 'whats'], ['tempo', 'empresa', 'desafios'], ['porque', 'slot']];
    const next = () => {
      const fields = stepFields[step];
      if (fields.some((f) => errors[f])) { setTouched((t) => ({ ...t, ...Object.fromEntries(fields.map((f) => [f, true])) })); return; }
      if (step < total - 1) setStep(step + 1);
      else { setSubmitting(true); setTimeout(() => { setSubmitting(false); setDone(true); }, 1300); }
    };
    const show = (f) => touched[f] ? errors[f] : null;

    if (done) {
      return (
        <div className="elv-reveal is-in elv-center" style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
          <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: 'var(--gold-800)', marginBottom: 'var(--space-5)' }} aria-hidden="true">✓</span>
          <h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 0 }}>Aplicação recebida.</h3>
          <p className="elv-sans" style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', maxWidth: '42ch', marginTop: 'var(--space-4)', lineHeight: 'var(--leading-relaxed)' }}>
            Reservamos <strong style={{ color: 'var(--wine-700)' }}>{data.slot}</strong> para a conversa de diagnóstico. Enviamos a confirmação para <strong>{data.email}</strong>. Se houver alinhamento, vocês entram no ciclo.
          </p>
          <span className="elv-tick" style={{ width: 44, marginTop: 'var(--space-6)' }} />
        </div>
      );
    }

    const titles = ['Sobre vocês', 'O momento de vocês', 'O compromisso'];
    const subs = ['Para chamarmos vocês pelo nome.', 'Onde o relacionamento está hoje.', 'Por que agora — e quando conversamos.'];

    return (
      <div>
        <Progress step={step} total={total} />
        <div key={step} className="elv-reveal is-in">
          <h3 className="elv-serif" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', margin: 0 }}>{titles[step]}</h3>
          <p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-sm)', margin: 'var(--space-2) 0 var(--space-7)' }}>{subs[step]}</p>

          {step === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div className="elv-grid-2-sm" style={{ display: 'grid', gap: 'var(--space-5)' }}>
                <div><Lbl required>Nome dele(a)</Lbl><input value={data.nome1} onChange={(e) => set('nome1', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, nome1: true }))} style={ctrl(show('nome1'))} placeholder="Ex.: Maycko" /><Err>{show('nome1')}</Err></div>
                <div><Lbl required>Nome dele(a)</Lbl><input value={data.nome2} onChange={(e) => set('nome2', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, nome2: true }))} style={ctrl(show('nome2'))} placeholder="Ex.: Marcela" /><Err>{show('nome2')}</Err></div>
              </div>
              <div><Lbl required>Melhor e-mail</Lbl><input type="email" value={data.email} onChange={(e) => set('email', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, email: true }))} style={ctrl(show('email'))} placeholder="nome@empresa.com" /><Err>{show('email')}</Err></div>
              <div><Lbl required>WhatsApp</Lbl><input value={data.whats} onChange={(e) => set('whats', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, whats: true }))} style={ctrl(show('whats'))} placeholder="(11) 90000-0000" /><Err>{show('whats')}</Err></div>
            </div>
          ) : null}

          {step === 1 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div>
                <Lbl required>Há quanto tempo estão juntos?</Lbl>
                <div className="elv-row" style={{ gap: 'var(--space-2)' }}>
                  {['Até 5 anos', '5 a 12 anos', '+12 anos'].map((o) => (
                    <button key={o} type="button" onClick={() => set('tempo', o)} className={`elv-chip ${data.tempo === o ? 'is-active' : ''}`} style={{ textTransform: 'none', letterSpacing: '0.01em' }}>{o}</button>
                  ))}
                </div>
                <Err>{show('tempo')}</Err>
              </div>
              <div>
                <Lbl required>Empreendem juntos?</Lbl>
                <div className="elv-row" style={{ gap: 'var(--space-2)' }}>
                  {['Sócios no mesmo negócio', 'Negócios separados', 'Um empreende', 'Ainda não'].map((o) => (
                    <button key={o} type="button" onClick={() => set('empresa', o)} className={`elv-chip ${data.empresa === o ? 'is-active' : ''}`} style={{ textTransform: 'none', letterSpacing: '0.01em' }}>{o}</button>
                  ))}
                </div>
                <Err>{show('empresa')}</Err>
              </div>
              <div>
                <Lbl required>O que mais pesa hoje? <span style={{ textTransform: 'none', letterSpacing: 0, color: 'var(--text-muted)' }}>(pode marcar vários)</span></Lbl>
                <div style={{ display: 'grid', gap: 'var(--space-2)' }} className="elv-grid-2-sm">
                  {DESAFIOS.map((o) => {
                    const on = data.desafios.includes(o);
                    return (
                      <button key={o} type="button" onClick={() => toggleDesafio(o)} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: `1px solid ${on ? 'var(--wine-600)' : 'var(--border-hairline)'}`, background: on ? 'var(--wine-50)' : 'var(--white-warm)', cursor: 'pointer', transition: 'all var(--duration-fast) var(--ease-standard)' }}>
                        <span style={{ width: 18, height: 18, flex: 'none', borderRadius: 4, border: `1px solid ${on ? 'var(--wine-600)' : 'var(--nude)'}`, background: on ? 'var(--wine-600)' : 'transparent', color: 'var(--white-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{on ? '✓' : ''}</span>
                        <span className="elv-sans" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{o}</span>
                      </button>
                    );
                  })}
                </div>
                <Err>{show('desafios')}</Err>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div>
                <Lbl required>Por que agora?</Lbl>
                <textarea value={data.porque} onChange={(e) => set('porque', e.target.value)} onBlur={() => setTouched((t) => ({ ...t, porque: true }))} rows={4} style={{ ...ctrl(show('porque')), resize: 'vertical', lineHeight: 'var(--leading-relaxed)' }} placeholder="Em poucas linhas, o que fez vocês decidirem que é o momento." />
                <Err>{show('porque')}</Err>
              </div>
              <div>
                <Lbl required>Escolham um horário para a conversa de diagnóstico</Lbl>
                <div style={{ display: 'grid', gap: 'var(--space-2)' }} className="elv-grid-3-slots">
                  {SLOTS.map((s) => (
                    <button key={s} type="button" onClick={() => set('slot', s)} style={{ padding: '14px 10px', borderRadius: 'var(--radius-md)', border: `1px solid ${data.slot === s ? 'var(--wine-600)' : 'var(--border-hairline)'}`, background: data.slot === s ? 'var(--wine-600)' : 'var(--white-warm)', color: data.slot === s ? 'var(--white-warm)' : 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', cursor: 'pointer', transition: 'all var(--duration-fast) var(--ease-standard)' }}>{s}</button>
                  ))}
                </div>
                <Err>{show('slot')}</Err>
                <p className="elv-sans elv-muted" style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-3)' }}>Conversa de 30 min, por vídeo. Sem compromisso — é onde vemos se faz sentido para os dois lados.</p>
              </div>
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
          {step > 0 ? <Button variant="ghost" size="md" onClick={() => setStep(step - 1)} disabled={submitting}>← Voltar</Button> : <span />}
          <Button variant="primary" size="lg" onClick={next} disabled={submitting}>{submitting ? 'Enviando…' : step < total - 1 ? 'Continuar' : 'Enviar aplicação'}</Button>
        </div>
      </div>
    );
  }

  window.ElevemApplicationForm = ApplicationForm;
})();
