// templates/social — one-file loader for the Elevem-se design system.
// Consuming projects: point `base` at the bound _ds/<folder> tree relative
// to this page (e.g. '_ds/elevem-se' at the project root, '../_ds/elevem-se'
// one level down). In this design system itself, '../..' is the project root.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — point the base line at the bound _ds/<folder> tree relative to this page, or (in a fresh design system) wait for the bundle to compile.');
  document.head.appendChild(s);
})();
