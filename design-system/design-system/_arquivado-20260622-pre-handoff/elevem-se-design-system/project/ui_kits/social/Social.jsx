/* Elevem-se — Social / Instagram carousel UI kit.
   Composes design-system primitives + Lucide line icons.
   DS primitives bound at render (load-order-safe). App -> window.ElevemSocialApp. */

let Logo, Badge, Button;
function bindDS() {
  const NS = window.ElevemSeDesignSystem_00d476;
  ({ Logo, Badge, Button } = NS);
}
const { useState, useEffect, useRef } = React;

function useLucide(dep) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({ attrs: { 'stroke-width': 1.6 }, nameAttr: 'data-lucide' });
  }, [dep]);
  return ref;
}

/* ---------- carousel slides (4:5) -------------------------------------- */

const slideBase = {
  position: 'absolute', inset: 0, padding: '46px 42px',
  display: 'flex', flexDirection: 'column',
  transition: 'opacity 360ms var(--ease-standard)',
};

function CoverSlide() {
  return (
    <div style={{ ...slideBase, background: 'var(--ivory)', justifyContent: 'space-between' }}>
      <Logo variant="mark" tone="wine" size={46} />
      <div>
        <Badge tone="gold" rule>Mentoria para casais</Badge>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 42, lineHeight: 1.06, color: 'var(--wine-700)', margin: '16px 0 0', letterSpacing: '-0.01em' }}>
          Casais que crescem juntos não dependem da sorte.<br /><em style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--highlight-warm) 60%)', padding: '0 .06em' }}>Dependem de estrutura.</em>
        </h2>
      </div>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--text-gold)' }}>Arraste &rarr;</span>
    </div>
  );
}

function PrincipleSlide() {
  return (
    <div style={{ ...slideBase, background: 'var(--cream)', justifyContent: 'center', gap: 22 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, color: 'var(--gold-600)' }}>01</span>
      <span style={{ width: 34, height: 1, background: 'var(--rule-gold)' }} />
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 33, lineHeight: 1.12, color: 'var(--text-strong)', margin: 0 }}>
        Casamentos não fracassam por falta de amor.
      </h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: 'var(--text-body)', margin: 0, maxWidth: '30ch' }}>
        Fracassam por falta de <strong style={{ fontWeight: 600, color: 'var(--wine-600)' }}>estrutura</strong>. Amor sem direção vira desgaste; boa intenção sem alinhamento vira conflito.
      </p>
    </div>
  );
}

function StructureSlide() {
  const lines = ['Comunicação madura', 'Admiração reconstruída', 'Visão financeira conjunta', 'Propósito e legado'];
  return (
    <div data-theme="noturno" style={{ ...slideBase, background: 'var(--ink-900)', justifyContent: 'center', gap: 18 }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gold-300)' }}>O método · 12 meses</span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: 32, lineHeight: 1.1, color: 'var(--white-warm)', margin: 0 }}>
        Estrutura se constrói com método.
      </h3>
      <ul style={{ listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
        {lines.map((l, j) => (
          <li key={j} style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 16, color: 'var(--ink-100)', paddingLeft: 18, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: 8, width: 5, height: 5, borderRadius: '50%', background: 'var(--gold-400)' }} />
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuoteSlide() {
  return (
    <div style={{ ...slideBase, background: 'var(--surface-wine)', justifyContent: 'center', gap: 26 }}>
      <span style={{ width: 40, height: 1, background: 'var(--rule-gold-on-wine)' }} />
      <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 'var(--weight-medium)', fontSize: 38, lineHeight: 1.16, color: 'var(--white-warm)', margin: 0 }}>
        Ensinamos o que vivemos e estruturamos.
      </blockquote>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, letterSpacing: '0.08em', color: 'var(--white-warm)' }}>Maycko &amp; Marcela</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Mentores</span>
      </div>
    </div>
  );
}

function CtaSlide() {
  return (
    <div style={{ ...slideBase, background: 'var(--ivory)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 24 }}>
      <Logo variant="lockup" tone="wine" size={58} />
      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: 'var(--text-body)', margin: 0, maxWidth: '26ch' }}>
        Poucos casais por ciclo, por aplicação. Se houver alinhamento, vou chamar vocês para conversar. Toque em <strong style={{ fontWeight: 500, color: 'var(--wine-700)' }}>salvar</strong> e me chame no direct.
      </p>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--text-gold)' }}>Processo seletivo aberto</span>
    </div>
  );
}

const SLIDES = [CoverSlide, PrincipleSlide, StructureSlide, QuoteSlide, CtaSlide];

/* ---------- instagram post frame --------------------------------------- */

function PostFrame() {
  const [i, setI] = useState(0);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const ref = useLucide(`${i}-${saved}-${liked}`);
  const go = (d) => setI((p) => Math.min(SLIDES.length - 1, Math.max(0, p + d)));

  return (
    <div ref={ref} style={{ width: 'min(440px, 92vw)', background: 'var(--white-warm)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', fontFamily: 'var(--font-sans)' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 15px' }}>
        <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--wine-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px var(--gold-500)' }}>
          <img src="../../assets/elevemse-monogram-light.svg" width="26" height="26" alt="" />
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>elevem.se</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Mentoria para casais</span>
        </div>
        <i data-lucide="more-horizontal" style={{ marginLeft: 'auto', width: 20, height: 20, color: 'var(--graphite-700)' }}></i>
      </div>

      {/* media / carousel */}
      <div style={{ position: 'relative', aspectRatio: '4 / 5', background: 'var(--ivory)' }}>
        {SLIDES.map((S, idx) => (
          <div key={idx} style={{ position: 'absolute', inset: 0, opacity: idx === i ? 1 : 0, pointerEvents: idx === i ? 'auto' : 'none', transition: 'opacity 360ms var(--ease-standard)' }}>
            <S />
          </div>
        ))}
        {/* count pill */}
        <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(42,35,38,0.55)', color: '#fff', fontSize: 11, padding: '3px 9px', borderRadius: 'var(--radius-pill)', backdropFilter: 'blur(4px)' }}>{i + 1}/{SLIDES.length}</div>
        {/* arrows */}
        {i > 0 && <button onClick={() => go(-1)} aria-label="Anterior" style={navBtn('left')}><i data-lucide="chevron-left" style={{ width: 18, height: 18 }}></i></button>}
        {i < SLIDES.length - 1 && <button onClick={() => go(1)} aria-label="Próximo" style={navBtn('right')}><i data-lucide="chevron-right" style={{ width: 18, height: 18 }}></i></button>}
      </div>

      {/* actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 15px 6px' }}>
        <button onClick={() => setLiked((v) => !v)} style={iconBtn} aria-label="Curtir">
          <i data-lucide="heart" style={{ width: 24, height: 24, color: liked ? 'var(--wine-600)' : 'var(--graphite-900)', fill: liked ? 'var(--wine-600)' : 'none' }}></i>
        </button>
        <i data-lucide="message-circle" style={{ width: 24, height: 24, color: 'var(--graphite-900)' }}></i>
        <i data-lucide="send" style={{ width: 24, height: 24, color: 'var(--graphite-900)' }}></i>
        <button onClick={() => setSaved((v) => !v)} style={{ ...iconBtn, marginLeft: 'auto' }} aria-label="Salvar">
          <i data-lucide="bookmark" style={{ width: 24, height: 24, color: saved ? 'var(--gold-700)' : 'var(--graphite-900)', fill: saved ? 'var(--gold-600)' : 'none' }}></i>
        </button>
      </div>

      {/* dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, paddingBottom: 8 }}>
        {SLIDES.map((_, idx) => (
          <span key={idx} onClick={() => setI(idx)} style={{ width: 6, height: 6, borderRadius: '50%', cursor: 'pointer', background: idx === i ? 'var(--wine-600)' : 'var(--graphite-100)' }} />
        ))}
      </div>

      {/* caption */}
      <div style={{ padding: '4px 15px 16px', fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-body)' }}>
        <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>elevem.se</span>{' '}
        O casamento de vocês está funcionando — ou está apenas no automático? Salve este carrossel e leia até o fim. <span style={{ color: 'var(--wine-600)' }}>#casalestruturado #mentoriaparacasais</span>
      </div>
    </div>
  );
}

function navBtn(side) {
  return { position: 'absolute', top: '50%', [side]: 10, transform: 'translateY(-50%)', width: 32, height: 32, borderRadius: '50%', border: 'none', background: 'rgba(251,248,242,0.82)', color: 'var(--wine-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', backdropFilter: 'blur(4px)' };
}
const iconBtn = { border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex' };

/* ---------- app -------------------------------------------------------- */

function SocialApp() {
  bindDS();
  const ref = useLucide('app');
  return (
    <div ref={ref} style={{ minHeight: '100vh', background: 'var(--surface-sunken)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, padding: '40px 16px 56px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Badge tone="gold" rule>Conteúdo · carrossel</Badge>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>Use as setas ou os pontos para navegar pelo carrossel.</p>
      </div>
      <PostFrame />
    </div>
  );
}

window.ElevemSocialApp = SocialApp;
