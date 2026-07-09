# Elevem-se — Design System

> **Elevem-se** é uma mentoria premium para **casais empreendedores**, conduzida pelo casal
> **Maycko Alves & Marcela Zanardo**. Une relacionamento, desenvolvimento pessoal, empreendedorismo
> e propósito em um único método. Atuação 100% digital, em português (Brasil).
> Tagline oficial: **"Mentoria para casais."**

This is the brand's design system: tokens, fonts, the recreated logo, reusable React components,
and product UI kits. The mood is **"luxo leve"** — sophisticated, refined, timeless: **vinho + dourado
sobre neutros claros**, with lots of breathing room and a subtle shine. No heavy dark backgrounds,
no vibrant colors, no therapy / motivational-guru clichés, no explicit religious motifs.

> **Brand architecture (endorsed model):** *Elevem-se* is the product/method; *Maycko & Marcela* are
> the mentors who sign it. Keep that relationship in every artifact.

## Sources
This system was built **from scratch** from the client brief "PROJETO ELEVEM-SE — ESTRUTURA COMPLETA"
(positioning, persona, tone, visual direction) provided by Maycko & Marcela. There was **no prior
codebase, Figma file, or logo** — the previous identity is being fully recreated (the old logo was
intentionally not preserved; only its concepts — union, growth, family/legacy, elevation — carry over).
No brand font files or photography were supplied (see *Caveats*).

---

## CONTENT FUNDAMENTALS

**Language:** Portuguese (Brazil), always. **Voice:** firm and secure, yet warm, close and direct —
*de igual para igual*. Authority without arrogance; closeness without losing sophistication. It reads
like trusted counsel from a couple who has lived it.

- **Pronouns:** address the reader as **"você"** and **"vocês"** (the couple). The brand speaks as
  **"nós"** (Maycko & Marcela). Never corporate "a empresa".
- **Casing:** sentence case for **product** long-form (site/app reading-first body). **Produced pieces
  (posts, criativos, slides, anúncios) follow the CAIXA-ALTA rule** — the impact headline is uppercase,
  large and legible ("grita"), no lowercase titles, no script/cursive, no tiny illegible text. Elegance
  comes from tracking, line-spacing and hierarchy (size/weight/colour), not decoration. Eyebrows,
  taglines, labels and buttons are always UPPERCASE with wide letter-spacing. Use `.elv-impact` +
  `.elv-impact-kicker` (see `tokens/typography.css` and the "Caixa-alta" card).
- **Sentence length:** short, declarative, confident. One idea per line. Comfortable with a pause.
- **Punctuation:** restrained. Avoid exclamation marks and hype. Em-dashes and ellipses for rhythm.
- **No emoji** in brand copy. No hashtags in formal pages (light, tasteful use is fine in social captions).
- **Signature phrases / pillars to draw from:**
  - "Ter o CNPJ e o CPF sintonizados."
  - "Vivemos o que ensinamos." (mais de 20 anos)
  - "Relacionamentos não terminam da noite para o dia, mas por pequenos desgastes diários…"
  - "Sair do modo automático" · "reconstruir os pilares da vida a dois" · "conexão, parceria e prosperidade".
- **Never:** promessas milagrosas, frases motivacionais vazias, tom de guru, jargão de terapia, or
  explicit religious language. Faith shows up only as *values* (ethics, purpose) — never named.

**Examples**
- Eyebrow: `MENTORIA PARA CASAIS` · `O MÉTODO INTEGRADO` · `QUEM CONDUZ`
- Headline: *"Vocês construíram resultados. Agora construam a vida a dois."*
- Button: `QUERO A MENTORIA` · `CONHECER O MÉTODO` · `ENTRAR NA LISTA`
- Reassurance: *"Sem promessas milagrosas. Princípios, método e a verdade de quem vive a dois há 20 anos."*

---

## PERSONALITY & ARCHETYPES

The brand's personality is **transformation + sophistication *with warmth*** — elegant, premium and
welcoming, never cold, generic or obvious. Three archetypes drive every design decision:

- **Mago (primary) — transformation & elevation.** The heart of the brand ("Elevem-se"). Expressed by
  the rising monogram (two strands → one leaf), wine as the soul, and an upward gesture; the promise of
  leaving the "modo automático".
- **Governante / Sábio (support) — authority, structure, teaching.** The premium, credible air.
  Expressed by the editorial serif, the disciplined grid and generous respiro, the signature gold rule,
  and method shown as numbered pillars.
- **Amante / Explorador (warmth) — intimacy, connection, authenticity.** The human heat. Expressed by
  **warm, candlelit neutrals**, the quiet **clay/rosé accent** (`--accent-warm`), the soft **marca-texto**
  highlight behind an emphasised word, a close voice, and warm photography of the couple.

> Balance, not literalism: lead with Mago's transformation and Governante's structure, and let Amante's
> warmth keep it human. Never frio, never óbvio.

---

## VISUAL FOUNDATIONS

**Palette.** Four roles, in balance — this balance is the brand's essence, not decoration:
**vinho** (#6E2A36 — emoção, romance, profundidade) · **azul-marinho/grafite** (#21314F — *âncora de
força*: estrutura, autoridade, estratégia; Maycko's colour) · **dourado** (#C2A14D — prosperidade) ·
**neutros claros** (#F4EEE2 — respiro). A quiet **clay/rosé** accent (`--warm-*`) adds intimacy (Amante),
**never pink/magenta**. Proportion: **~70% light · ~15% wine · ~10% navy/graphite · ~5% gold**. Gold is
decorative — never body text. Soft graphite replaces pure black.

> **Support colours stay subordinate.** Clay/warm (`--warm-*`) and steel (`--ink-300/400`) are quiet
> bridges and accents only — they never lead a layout and never compete with the core. The brand reads,
> always, as **vinho + dourado + navy over light**. Clay is a candlelit whisper (intimacy); steel is the
> cool side of the navy anchor. If a support colour starts to feel like a brand colour, pull it back.

**Two modes (keep the drama).** The system ships a **light/elegant** mode (default — luxo leve, airy)
and a **dark/dramatic** "noturno" mode (deep graphite-navy + gold, cinematic — for impact pieces and the
studio ensaio). Don't abandon the dark drama that already works in their posts — it's the *forte/escuro*
register. See `tokens/colors.css`.

> **Guardrail — leveza com peso, não fragilidade.** Refining and lightening must never cost the brand its
> structure, force and authority. Keep strong type (uppercase eyebrows/labels/buttons), structured grids,
> the navy/graphite anchor beside the wine, and the dramatic dark mode. Leve ≠ frágil.

**Type.** Two families:
- **Spectral** (display/editorial serif) — sober, timeless, with **well-proportioned PT-BR diacritics**
  (the acute/circumflex/tilde stay discreet); for titles, the logotype and italic quotes.
- **Mulish** (sans) — soft, warm, clean accents; for body, labels and wide-tracking taglines.
Headlines are sentence-case serif; eyebrows/labels are uppercase Mulish with `0.2–0.3em` tracking.
Warm alternative for the serif: **Lora** (swap `--font-display`).

**Backgrounds.** Predominantly flat **ivory/cream** — light and airy. Wine sections are used sparingly
as inverted highlights (mentors, featured offer, quote slides). **No gradients**, no textures, no
heavy dark fields. Imagery is treated warm and light (marfim/champagne tones, wine & gold accents,
neutral/light wardrobe) — avoid pink/magenta.

**The gold rule.** A short 1px gold hairline (`--rule-gold`) is the signature graphic element: above
headings, under eyebrows, separating ideas. Used as a small tick (≈28px) or a thin divider.

**Borders & cards.** Cards are warm off-white (`--white-warm`) with either a hairline (`--ring-hairline`)
or a soft warm shadow. Radii are **restrained** — default `8px`; pills only for buttons/chips. Corners
are never fully rounded on content blocks.

**Shadows.** Soft, warm-tinted (wine-based rgba), low spread, generous blur — they suggest light, not
weight. Never harsh or neutral-gray. See `--shadow-xs…lg`.

**Motion.** Calm and refined. Standard ease `cubic-bezier(0.4,0,0.2,1)`, entrance `(0.16,1,0.3,1)`.
Durations 140–420ms. **No bounce, no spring.** Fades and gentle rises only; never decorative loops.

**Hover / press.** Hover = a quiet shift to the next-darker brand step (wine 600→700) or a soft fill
(ghost → wine-50; secondary outline → solid wine). Press = a barely-there `scale(0.99)` + 0.5px nudge.
Focus = soft gold ring (`--gold-100`) + gold border. No glow, no large color jumps.

**Transparency & blur.** Used only for the sticky nav (blurred ivory) and small overlay chrome
(carousel count pill). Otherwise surfaces are opaque.

**Spacing & layout.** Base-4 scale, generous. Site max-width `--container-xl` (1200px), prose `36rem`.
Sections breathe with `--space-11`(104px) vertical rhythm. Center-aligned eyebrow→heading→lead for
key moments; two-column splits for hero/mentors.

---

## QUALITY CHECKLIST (self-audit)

Audited against the six criteria — all passing:

1. **Personalidade visível (não template).** Flame mark (união + elevação + paixão), wine+gold+navy
   palette, Spectral editorial serif, the gold rule, marca-texto, two modes, archetype-driven. A generic
   template has none of these.
2. **Componentes da mesma família.** Every component (Button, Badge, Card, Input, Field, Avatar, Logo,
   Quote, Signature) draws from the same tokens — same pill/8px radii, same Mulish/Spectral type, same
   gold rule, same wine/navy/gold roles. They compose without visual seams (see the Components cards).
3. **Consistência de peso, ritmo e proporção.** One 4px spacing scale, one type scale, one radius set,
   one shadow set — all token-driven. Eyebrow→heading→body rhythm is repeated across every surface.
4. **Dark mode.** Full `noturno` theme (deep graphite-navy + gold) — surfaces, text, borders and actions
   all flip via semantic tokens; components (incl. secondary/ghost buttons) stay legible in both modes.
5. **Acessibilidade WCAG AA.** Verified contrast on all core pairs — light: strong 12.3, body 7.9, wine
   heading 8.9, gold label 6.0, button 10.1; dark: strong 16.3, body 12.0, gold 10.4, steel 7.9. (See the
   "Acessibilidade — WCAG AA" card.) Rules enforced: gold never in small body text; muted never on sand.
6. **Cobertura.** Documented palette (wine/gold/navy/neutrals/clay + semantic aliases), scaled typography
   (display→caption), core components, 4px spacing/radii/shadow system, and iconography (Lucide line set).

---

## ICONOGRAPHY

Elevem-se is **type- and rule-led**, not icon-heavy — restraint reinforces the premium tone.

- **Line icon set: [Lucide](https://lucide.dev)** — thin, even-weight strokes (`stroke-width: 1.6`),
  rounded caps. Chosen for its quiet elegance, which matches "luxo leve". Loaded from CDN
  (`https://unpkg.com/lucide`), rendered via `data-lucide` attributes + `lucide.createIcons()`.
  Used in the social UI kit (Instagram chrome: `heart`, `message-circle`, `send`, `bookmark`,
  `chevron-left/right`, `more-horizontal`).
- **Numerals as ornament.** Big Spectral numerals (`01`, `02`…) + a gold rule are the preferred way
  to enumerate pillars/steps — more on-brand than icons.
- **The monogram** (`assets/elevemse-monogram*.svg`) doubles as the avatar / favicon glyph.
- **No emoji. No clip-art. No religious symbols.** Don't hand-draw decorative icons; if a glyph is
  needed beyond Lucide, pick the nearest Lucide equivalent and keep the 1.6 stroke.

> Substitution flag: Lucide is a **proposed** icon system (no client-specified set existed). Easy to
> swap for a licensed/custom set later.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (consumers link this one file; `@import`s only).
- `readme.md` — this guide.
- `SKILL.md` — portable skill front-matter for Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — Google Fonts import + family + tracking vars. *(font substitution flagged)*
- `colors.css` — wine / gold / neutral / graphite scales + semantic aliases.
- `typography.css` — type scale, weights, leading, semantic roles + helper classes.
- `spacing.css` — spacing, radii, hairlines, shadows, layout containers, motion.

**Assets** (`assets/`)
- `elevemse-monogram.svg` — symbol, wine on light.
- `elevemse-monogram-light.svg` — symbol, ivory/gold on wine.

**Components** (`components/`)
- `brand/` — **Logo**, **Quote**
- `core/` — **Button**, **Badge** (eyebrow), **Card**, **Avatar**
- `forms/` — **Input**, **Field**
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; one `@dsCard` HTML per group.
- Runtime namespace: `window.ElevemSeDesignSystem_00d476`.

**Foundation cards** (`guidelines/cards/`) — Colors (5), Type (3), Spacing (3), Brand (2). These
populate the Design System tab.

**UI kits** (`ui_kits/`) — canonical JSX + Design System tab showcase
- `landing/` — sales page for the mentoria (`index.html` + `Landing.jsx`).
- `social/` — Instagram carousel with post chrome (`index.html` + `Social.jsx`).

**Templates** (`templates/`) — consumer starting points (shown in the Templates picker)
- `landing/` — "Página de vendas" — loads the design system via `ds-base.js` and reuses `Landing.jsx`.
- `social/` — "Carrossel de Instagram" — same pattern, reuses `Social.jsx` + Lucide.
- `post-impacto/` — "Post de impacto (Instagram)" — feed 4:5, foto duotone navy + headline CAIXA-ALTA.
- `headline-impacto/` — "Headline de impacto (Instagram)" — statement tipográfico 4:5 que "grita".
- Each has `index.html` (`<!-- @template … -->`) + `ds-base.js` (one-line `base` to repoint when consumed).

---

## CAVEATS — needs the couple's input
- **Fonts are substitutions.** Spectral + Mulish (Google Fonts) are the chosen text/editorial direction,
  picked for clean PT-BR diacritics. Lora is the warm serif alternative. Send licensed/preferred brand
  fonts to swap in.
- **Logo — flame, client-favoured direction.** Two intertwined licks (vinho + dourado) rising as a flat
  flame = união + elevação + calor. Recreated as a clean vector from the couple's chosen reference;
  send the original vector for production-grade fidelity.
- **Exact HEX confirmed-ish.** Palette anchored on the couple's swatches (wine #6E2A36, gold #C2A14D,
  ivory #F4EEE2, sand #D9C4A3, graphite #2E2A2B); the clay "calor" accent is an addition to validate.
- **Imagery is placeholdered.** Drop in the real studio/lifestyle photos (treated warm/light).
- **Prices/positioning** shown on the landing are from the brief and marked *a confirmar*.
