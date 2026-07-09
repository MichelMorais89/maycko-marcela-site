// Elevem-se — loader do Design System para o KV de Site.
// As páginas vivem em /site/*.html; o DS está ligado em /_ds/<folder> na raiz
// do projeto — portanto base = '../_ds/<folder>' relativo a cada página.
(() => {
  // Elimina o aviso benigno "ResizeObserver loop completed…" na origem:
  // envolve o callback do ResizeObserver em requestAnimationFrame (fix canônico),
  // o que quebra o laço síncrono que dispara o aviso. + supressão defensiva.
  const RO = 'ResizeObserver loop';
  if (window.ResizeObserver) {
    const Native = window.ResizeObserver;
    window.ResizeObserver = class extends Native {
      constructor(cb) {
        super((entries, obs) => { window.requestAnimationFrame(() => { try { cb(entries, obs); } catch (_) {} }); });
      }
    };
  }
  window.addEventListener('error', (e) => {
    if (e && e.message && e.message.indexOf(RO) !== -1) { e.stopImmediatePropagation(); e.preventDefault(); }
  }, true);
  const _err = console.error.bind(console);
  console.error = (...a) => { if (a.some((x) => typeof x === 'string' && x.indexOf(RO) !== -1)) return; _err(...a); };
  const base = '../_ds/elevem-se-design-system-00d47641-2f49-4aa2-bc49-9108f436638f';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: falhou ao carregar ' + s.src);
  document.head.appendChild(s);
})();
