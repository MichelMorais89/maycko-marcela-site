# Social / Instagram carousel — UI kit

A branded Instagram carousel (4:5) inside a realistic post frame — the brand is 100% digital,
so this is a primary surface.

## Files
- `index.html` — React + `_ds_bundle.js` + Lucide + `Social.jsx`, mounts `SocialApp`.
- `Social.jsx` — the four carousel slides (`CoverSlide`, `PrincipleSlide`, `QuoteSlide`, `CtaSlide`),
  the `PostFrame` chrome (header, actions, dots, caption), and `SocialApp`.

## Interactions
- Arrows / dots navigate the carousel (fade between slides).
- Heart and bookmark toggle (wine / gold filled) to show interaction states.

## Slide system (reuse for any carousel)
1. **Cover** — mark, eyebrow, serif hook, "arraste →".
2. **Principle** — big number, gold rule, principle statement + support.
3. **Quote** — wine slide, Spectral italic, mentor attribution.
4. **CTA** — lockup + soft call to action + @handle.

## Icons
Line icons are **Lucide** (`stroke-width: 1.6`) — thin, elegant, on-brand for "luxo leve".
Loaded from CDN; rendered via `data-lucide` + `lucide.createIcons()`.
