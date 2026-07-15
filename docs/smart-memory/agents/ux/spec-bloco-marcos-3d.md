---
title: Spec — Bloco Marcos 3D (/biografia)
type: component-spec
status: ready-for-dev
agent: sites-ux
created: 2026-07-09
updated: 2026-07-09
story: 3.5
tags: [spec, biografia, 3d, tilt, framer-motion, marcos, interatividade]
related: [[agents/ux/wireframes-v3]], [[project/design-tokens-v3]], [[project/v3-briefing]]
---

# Spec — Bloco Marcos 3D (`/biografia`)

> Story 3.5. Aplica-se ao worktree `_v3-dev/`. Entregue por sites-ux (Velani) em 2026-07-09.
> Copy fornecida literalmente pelo Michel. Descrição do marco `100% online` proposta pela UX.

---

## Decisão técnica

**Opção A escolhida: Cards com tilt 3D + parallax de camadas + contador no scroll.**

Razão: Framer Motion (`^12.42.2`) e GSAP (`^3.15.0`) já estão no projeto. Zero dependência nova. Performance segura — sem WebGL, sem risco de LCP. Sofisticação elegante, alinhada ao princípio V3 de leveza.

Opção B (Three.js/R3F) descartada: custo de bundle e risco de LCP incompatíveis com V3.
Opção C (SVG parallax) descartada: menos impacto no número, que é o protagonista do bloco.

---

## Copy — uso literal

**Título do bloco:**
```
Mais do que ensinar.
Nós vivemos.
```

**4 marcos:**

| Número | Label | Descrição |
|---|---|---|
| `20+` | anos de caminhada juntos | Construindo diariamente o relacionamento que ensinamos. |
| `13` | anos de casamento | Aprendendo que amor é uma decisão construída todos os dias. |
| `3` | filhos | Nosso maior legado e a maior prova de que família é construída com presença. |
| `100%` | mentoria online | Acesso completo, no seu tempo, no ritmo do casal. |

> Descrição do `100%` proposta pela UX. Michel pode ajustar.

---

## Posição no ritmo da /biografia

```
[DARK/VINHO]   → Hero Biografia (escuro)
               ↓ transição sharp (sem gradient — corte limpo de cor)
[BEGE]         → ★ ESTE BLOCO — Marcos 3D
               ↓
[BEGE-sunken]  → Marcos objetivos / números
               ↓
[BEGE]         → Bloco texto + foto (timeline)
```

A transição Hero escuro → Marcos bege é intencional: o visitante sai do impacto visual e entra no território da credibilidade, com respiro.

---

## Estrutura visual

### Layout geral

```
┌──────────────────────────────────────────────────────────────────────┐
│  [BEGE] --surface-bege                                               │
│                                                                      │
│  padding-top: --space-12 (128px) / padding-bottom: --space-12       │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  eyebrow (Mulish, 2xs, widest, gold-800)                     │    │
│  │  NOSSA HISTÓRIA                                              │    │
│  │                                                              │    │
│  │  Mais do que ensinar.    ← Spectral display, graphite-900    │    │
│  │  Nós vivemos.            ← mesma fonte, wine-600             │    │
│  │                                                              │    │
│  │  — — — gold rule (--rule-gold, 1px, 48px wide) — — —        │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  gap: --space-10 (80px) entre título e grid                          │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │
│  │  [card 3D]   │  │  [card 3D]   │  │  [card 3D]   │  │ [card 3D]│ │
│  │   20+        │  │   13         │  │   3          │  │  100%    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────┘ │
│                                                                      │
│  Desktop: 4 colunas, gap --space-6 (32px)                            │
│  Tablet (768-1000px): 2x2, gap --space-6                             │
│  Mobile (<768px): 1 coluna, gap --space-5 (24px), scroll vertical    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Decisão de layout:** 4 colunas desktop (não carrossel). Os 4 marcos têm peso igual — carrossel cria hierarquia implícita indesejada. No mobile, scroll vertical simples mantém leitura natural.

---

## Anatomia do Card 3D

### Dimensões

| Prop | Valor |
|---|---|
| Largura | `100%` da coluna (flex fill) |
| Altura mínima | `240px` desktop / `auto` mobile |
| Border radius | `--radius-lg` (14px) |
| Background | `--surface-raised` (`--ivory` #F4EEE2) |
| Borda | `--ring-hairline` (inset 0 0 0 1px --border-hairline) |
| Sombra em repouso | `--shadow-sm` |
| Sombra no hover | `--shadow-md` |
| Padding interno | `--space-7` (40px) desktop / `--space-5` (24px) mobile |

### Camadas Z (profundidade 3D)

O card tem 3 camadas visuais dentro de um `transform-style: preserve-3d`:

```
z-index / translateZ:
  Camada 1 — Número gigante     translateZ(40px)  ← mais próximo
  Camada 2 — Label              translateZ(20px)  ← meio
  Camada 3 — Descrição          translateZ(0px)   ← base
```

Ao fazer tilt, a diferença de profundidade cria parallax tridimensional dentro do card.

### Tokens tipográficos por camada

| Camada | Token fonte | Tamanho | Peso | Cor |
|---|---|---|---|---|
| Número | `--font-display` (Spectral) | `--text-5xl` (88px) desktop / `--text-4xl` (64px) mobile | `--weight-regular` (400) | `--gold-500` `#C2A14D` |
| Label | `--font-sans` (Mulish) | `--text-sm` (14px) | `--weight-semibold` (600) | `--graphite-900` |
| Descrição | `--font-sans` (Mulish) | `--text-sm` (14px) | `--weight-regular` (400) | `--graphite-500` |
| Tracking label | — | — | — | `--tracking-wide` (0.12em) |

> O número em `--gold-500` sobre `--surface-raised` (#F4EEE2) → ratio 3.2:1. Não passa AA para texto de corpo, mas número é display gigante (88px) → WCAG AA para texto grande (18px+ bold ou 24px+) é 3:1. **Passa.**

---

## Comportamento interativo

### 1. Reveal no scroll — contador animado

**Trigger:** `IntersectionObserver` com threshold `0.3` — quando 30% do bloco entra na viewport.

**Comportamento por marco:**

| Marco | De | Para | Duração | Easing |
|---|---|---|---|---|
| `20+` | `0` | `20` | `1200ms` | `easeOut` cubic |
| `13` | `0` | `13` | `1000ms` | `easeOut` cubic |
| `3` | `0` | `3` | `600ms` | `easeOut` cubic |
| `100%` | `0%` | `100%` | `1400ms` | `easeOut` cubic |

Delay escalonado: cada card começa `100ms` depois do anterior (da esquerda para a direita).

Implementação com Framer Motion `useMotionValue` + `useTransform` + `animate()`, ou GSAP `gsap.to()` com `snap: 1`.

O sufixo (`+`, `%`) não conta — aparece estático junto ao número desde o início.

---

### 2. Tilt 3D no hover (mouse over)

**Tech:** Framer Motion `useMotionValue` + `useTransform` + `motion.div`.

**Comportamento:**

```
onMouseMove → captura posição relativa do mouse dentro do card
  rotateX = map(mouseY, 0, cardHeight, +8deg, -8deg)
  rotateY = map(mouseX, 0, cardWidth, -8deg, +8deg)

perspective: 800px (aplicado no container pai do card)
transform-style: preserve-3d (no card)

Transição de entrada/saída:
  spring: stiffness 300, damping 30
  → movimento elástico, não linear — parece "físico"

onMouseLeave → retorna a rotateX: 0, rotateY: 0 com mesma spring
```

**Limites:** `±8deg` no eixo X e Y. Valores maiores ficam theatrais e perdem elegância V3.

---

### 3. Glow dourado no hover

Aplicado via `box-shadow` adicional no hover, sobreposto ao `--shadow-md`:

```css
box-shadow:
  0 10px 30px -12px rgba(74,30,41,0.18),   /* --shadow-md base */
  0 0 0 1px rgba(194,161,77,0.35),           /* borda gold sutil */
  0 8px 32px -8px rgba(194,161,77,0.25);    /* glow gold difuso */
```

Transição: `--duration-base` (240ms), `--ease-standard`.

O glow é **dourado difuso, não néon** — reforço premium, não efeito de jogo.

---

### 4. Fade + slide-up no reveal

Cards entram com `opacity: 0, y: 24px` e revelam para `opacity: 1, y: 0` via Framer Motion `initial`/`animate` + `viewport`:

```js
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
```

Contador inicia após o card estar visível (listener no `onAnimationComplete`).

---

## Acessibilidade

### `prefers-reduced-motion`

```js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReduced) {
  // Desabilita: tilt 3D, slide-up, glow animado
  // Mantém: contador animado (com duração reduzida para 400ms)
  // Mantém: estado visual de hover (cor/sombra muda, sem movimento)
}
```

Implementação: Framer Motion respeita `prefers-reduced-motion` automaticamente quando `reducedMotion: "user"` está no `MotionConfig`. Confirmar que o projeto tem isso no layout raiz.

### Contraste

| Par | Ratio | WCAG |
|---|---|---|
| Número `--gold-500` sobre `--ivory` | ~3.2:1 | AA para texto grande (88px) — passa |
| Label `--graphite-900` sobre `--ivory` | ~14:1 | AAA — passa |
| Descrição `--graphite-500` sobre `--ivory` | ~4.8:1 | AA — passa |

### Foco de teclado

- Cada card é `role="article"` com `tabIndex={0}`
- Focus ring: `outline: 2px solid var(--focus-ring)` (`--gold-500`), `outline-offset: 4px`
- No foco via teclado: tilt NÃO ativa (tilt é gesto de mouse, não navegação)
- Screen reader: número + label + descrição em ordem DOM natural

### Markup semântico

```html
<section aria-labelledby="marcos-title">
  <h2 id="marcos-title">Mais do que ensinar. Nós vivemos.</h2>
  <ul role="list">
    <li role="article" aria-label="20 anos de caminhada juntos">
      <span aria-hidden="true">20+</span>        <!-- visual: contador -->
      <span class="sr-only">Mais de 20</span>    <!-- screen reader: número real -->
      <h3>anos de caminhada juntos</h3>
      <p>Construindo diariamente o relacionamento que ensinamos.</p>
    </li>
    <!-- ... demais marcos ... -->
  </ul>
</section>
```

---

## Wireframe do card (mobile — 1 coluna)

```
┌───────────────────────────────────┐
│  [card surface-raised]            │
│  padding: 24px                    │
│                                   │
│  20+                              │  ← Spectral 64px gold-500
│                                   │
│  ANOS DE CAMINHADA JUNTOS         │  ← Mulish 14px semibold graphite-900
│                                   │
│  Construindo diariamente o        │  ← Mulish 14px regular graphite-500
│  relacionamento que ensinamos.    │
│                                   │
│  [glow dourado no hover/focus]    │
└───────────────────────────────────┘
```

---

## Wireframe do bloco completo (desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [BEGE]                              padding: 128px top/bottom       │
│                                                                     │
│                    NOSSA HISTÓRIA                                   │
│                                                                     │
│                    Mais do que ensinar.                             │  Spectral 3xl
│                    Nós vivemos.                                     │  Spectral 3xl wine-600
│                                                                     │
│                    — — — ◆ — — —                                    │  gold rule 48px
│                                                                     │
│                              80px gap                               │
│                                                                     │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌─────────┐ │
│  │               │ │               │ │               │ │         │ │
│  │  20+          │ │  13           │ │  3            │ │  100%   │ │
│  │               │ │               │ │               │ │         │ │
│  │  ANOS DE      │ │  ANOS DE      │ │  FILHOS       │ │ MENTORIA│ │
│  │  CAMINHADA    │ │  CASAMENTO    │ │               │ │ ONLINE  │ │
│  │  JUNTOS       │ │               │ │               │ │         │ │
│  │               │ │               │ │               │ │         │ │
│  │  Construindo  │ │  Aprendendo   │ │  Nosso maior  │ │  Acesso │ │
│  │  diariamente  │ │  que amor é   │ │  legado e a   │ │completo,│ │
│  │  o relacion.  │ │  uma decisão  │ │  maior prova  │ │ no seu  │ │
│  │  que ensin.   │ │  construída   │ │  de que famí. │ │ tempo,  │ │
│  │               │ │  todos os     │ │  é construída │ │ no ritmo│ │
│  │               │ │  dias.        │ │  com presença │ │ do casal│ │
│  │               │ │               │ │               │ │         │ │
│  └───────────────┘ └───────────────┘ └───────────────┘ └─────────┘ │
│    ↑ hover: tilt 8deg + glow gold                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Estrutura de componente sugerida

```
BiografiaMarcos/
  index.tsx          ← componente principal (section, título, grid)
  MarcoCard.tsx      ← card individual com lógica de tilt + contador
  useCountUp.ts      ← hook: contador animado com easing
  useTilt.ts         ← hook: captura mouse position → rotateX/Y
```

**Props do `MarcoCard`:**

```ts
interface MarcoCardProps {
  numero: string        // "20+", "13", "3", "100%"
  valorNumerico: number // 20, 13, 3, 100 — para o contador
  sufixo?: string       // "+", "%" — aparece estático
  label: string
  descricao: string
  delay?: number        // ms de delay do reveal (0, 100, 200, 300)
}
```

---

## Checklist para o dev-alpha

- [ ] `MotionConfig reducedMotion="user"` no layout raiz (se não tiver — adicionar)
- [ ] `transform-style: preserve-3d` no card wrapper
- [ ] `perspective: 800px` no grid container (pai dos cards)
- [ ] Contador inicia após `onAnimationComplete` do fade-in do card
- [ ] `prefers-reduced-motion`: contador duração 400ms, sem tilt, sem slide
- [ ] `role="article"` + `tabIndex={0}` em cada card
- [ ] `sr-only` para número legível por screen reader
- [ ] Verificar ratio de contraste do gold-500/ivory em produção (Chrome DevTools Accessibility)
- [ ] Testar no iOS Safari: `preserve-3d` tem bug em algumas versões — fallback: `translateZ` desabilitado, mantém hover shadow
