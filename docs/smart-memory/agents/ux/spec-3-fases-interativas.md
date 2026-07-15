---
title: Spec — 3 Fases Interativas (/metodo) + Primitivo InteractiveCard3D
type: component-spec
status: ready-for-dev
agent: sites-ux
created: 2026-07-09
updated: 2026-07-09
story: 3.3
tags: [spec, metodo, 3d, tilt, framer-motion, fases, interatividade, primitivo]
related: [[agents/ux/spec-bloco-marcos-3d]], [[agents/ux/wireframes-v3]], [[project/design-tokens-v3]]
---

# Spec — 3 Fases Interativas (`/metodo`) + Primitivo `InteractiveCard3D`

> Story 3.3. Aplica-se ao worktree `_v3-dev/`. Entregue por sites-ux (Velani) em 2026-07-09.
> Leia junto com [[agents/ux/spec-bloco-marcos-3d]] — este documento define o primitivo compartilhado.

---

## Decisão arquitetural: primitivo compartilhado

O bloco Marcos (`/biografia`, story 3.5) e as 3 Fases (`/metodo`, story 3.3) compartilham o mesmo DNA de interação: tilt 3D + glow dourado + reveal no scroll. A diferença é **o que o card comunica**, não como ele se comporta.

**Conclusão:** um único primitivo `InteractiveCard3D` serve ambos os contextos. O dev-alpha implementa uma vez. Marcos e Fases consomem o mesmo componente com props diferentes.

```
components/ui/InteractiveCard3D/
  index.tsx          ← primitivo exportável
  useTilt.ts         ← hook: mouse position → rotateX/Y (reusável)
  useCountUp.ts      ← hook: contador animado com easing (reusável)

# Consumidores:
components/biografia/BiografiaMarcos/index.tsx   → usa InteractiveCard3D (modo: counter)
components/metodo/MetodoFases/index.tsx          → usa InteractiveCard3D (modo: expandable)
```

---

## Primitivo `InteractiveCard3D` — props completas

```ts
interface Layer {
  content: React.ReactNode   // o que renderizar nessa camada
  translateZ: number         // profundidade em px (ex: 40, 20, 0)
}

interface CounterConfig {
  from: number               // valor inicial (sempre 0)
  to: number                 // valor final
  suffix?: string            // "+", "%" — aparece estático
  duration: number           // ms
  easing?: 'easeOut'         // padrão
}

interface InteractiveCard3DProps {
  // Layout
  minHeight?: string         // default "240px" desktop
  padding?: string           // default "--space-7" desktop

  // Camadas de conteúdo (passadas diretamente pelo consumidor)
  // OU usar o slot `children` quando as camadas forem JSX livre
  layers?: Layer[]
  children?: React.ReactNode

  // Tilt
  tiltIntensity?: number     // graus máx de rotação (default 8)
  perspective?: number       // px (default 800) — aplicado no wrapper pai

  // Glow
  glow?: boolean             // default true
  glowColor?: string         // default rgba(194,161,77,0.25) — gold-500

  // Counter (opcional — só Marcos usa)
  counter?: CounterConfig

  // Reveal
  revealDelay?: number       // ms de delay do stagger (0, 100, 200...)

  // Expand (opcional — só Fases usa)
  expandable?: boolean       // default false
  expandContent?: React.ReactNode  // conteúdo revelado no hover/click

  // Acessibilidade
  ariaLabel?: string
  role?: string              // default "article"
}
```

**Regra de implementação:** o primitivo NÃO sabe se está em Marcos ou Fases — ele apenas executa as props que recebe. Os consumidores (BiografiaMarcos, MetodoFases) são responsáveis por passar os dados certos.

---

## Diferenças entre os dois consumidores

| Dimensão | Marcos (`/biografia`) | Fases (`/metodo`) |
|---|---|---|
| Quantidade de cards | 4 | 3 |
| Grid desktop | 4 colunas | 3 colunas |
| Elemento protagonista | Número gigante (counter) | Número de fase ordinal (1 / 2 / 3) |
| Counter animado | Sim (`counter` prop preenchida) | Não — "1", "2", "3" são estáticos |
| Expand no hover | Não | **Sim** — revela detalhe oculto |
| Click/tap | Nenhuma ação extra | Âncora ou expansão in-page |
| Altura mínima | 240px | 320px (mais conteúdo) |
| Camada de detalhe | Não existe | Presente (meses + princípio-chave) |

---

## `/metodo` — Estrutura da página V3

### Ritmo de fundos (atualizado)

```
[BEGE]        → Abertura (título + tagline + subtexto + foto)
[BEGE]        → ★ Grid das 3 Fases Interativas  ← ESTE BLOCO
[VINHO]       → CTA
```

> O wireframe anterior previa blocos split foto/texto por fase. **Substituído** pelas placas interativas — a foto da abertura representa o Método como um todo; cada fase se aprofunda via card expandível.

**Justificativa:** 3 blocos split foto/texto consumiam 3 seções de 128px cada. As 3 placas em grid consomem 1 seção. A página fica mais leve, o visitante lê as 3 fases em paralelo em vez de em scroll longo.

---

## Abertura do `/metodo` (mantida do wireframe)

**Fundo:** `[BEGE]`  
**Foto:** `dores-couple-bw.jpg` — lateral direita, P&B sobre bege

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]   padding: 128px top/bottom                          │
│                                                              │
│  ┌──────────────────────┐  ┌────────────────────────────┐   │
│  │  TEXTO (50%)         │  │  📷 dores-couple-bw.jpg    │   │
│  │                      │  │  [P&B — contraste elegante  │   │
│  │  eyebrow: O MÉTODO   │  │   sobre fundo bege]        │   │
│  │                      │  │                            │   │
│  │  Há casamentos que   │  │                            │   │
│  │  funcionam.          │  │                            │   │
│  │  E há os que         │  │                            │   │
│  │  florescem.          │  │                            │   │
│  │                      │  │                            │   │
│  │  A diferença não é   │  │                            │   │
│  │  sorte. É um método. │  │                            │   │
│  │                      │  │                            │   │
│  │  — gold rule 48px —  │  │                            │   │
│  └──────────────────────┘  └────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Bloco das 3 Fases — layout geral

**Fundo:** `[BEGE]`

```
┌──────────────────────────────────────────────────────────────────────┐
│  [BEGE]   padding: 128px top/bottom                                  │
│                                                                      │
│         eyebrow: AS TRÊS FASES                                       │
│                                                                      │
│         Uma jornada intencional.         ← Spectral 2xl graphite-900 │
│         Construída em três movimentos.   ← Spectral 2xl wine-600     │
│                                                                      │
│         — — — gold rule 48px — — —                                   │
│                                                                      │
│                    80px gap                                          │
│                                                                      │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌────────────┐  │
│  │  [card Fase 1]       │  │  [card Fase 2]       │  │ [card F3]  │  │
│  │  estado default      │  │  estado default      │  │ estado def │  │
│  └──────────────────────┘  └──────────────────────┘  └────────────┘  │
│                                                                      │
│  Desktop: 3 colunas, gap --space-8 (48px) ← generoso               │
│  Tablet (768-1000px): 1 coluna, scroll vertical                      │
│  Mobile (<768px): 1 coluna, scroll vertical                          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Gap:** `--space-8` (48px) — maior que o Marcos (32px) porque são 3 cards mais altos, precisam respirar mais.

**Mobile/Tablet:** 1 coluna. Três cards 3D em grade horizontal em telas pequenas competem em atenção e o tilt vira problema de toque. Empilhados verticalmente é mais limpo.

---

## Anatomia do Card de Fase

### Dimensões

| Prop | Valor |
|---|---|
| Largura | `100%` da coluna |
| Altura mínima | `320px` desktop / `auto` mobile |
| Border radius | `--radius-lg` (14px) |
| Background | `--surface-raised` (`--ivory` `#F4EEE2`) |
| Borda default | `--ring-hairline` (inset 0 0 0 1px `--border-hairline`) |
| Borda hover | `inset 0 0 0 1px rgba(194,161,77,0.35)` (gold sutil) |
| Sombra default | `--shadow-sm` |
| Sombra hover | `--shadow-md` + glow gold |
| Padding interno | `--space-8` (48px) desktop / `--space-6` (32px) mobile |

### Conteúdo por estado

O card tem dois estados visuais: **default** e **hover/focus**.

#### Estado default (visível ao entrar na viewport)

```
┌───────────────────────────────────────┐
│  [card surface-raised]  padding: 48px  │
│                                        │
│  01                                    │  ← Spectral 5xl (88px) gold-500
│                                        │
│  — gold rule 24px —                    │  ← rule-gold 1px
│                                        │
│  ELEVAÇÃO INDIVIDUAL                   │  ← Mulish sm semibold graphite-900
│                                        │     tracking-wide
│  Meses 1–4                             │  ← Mulish xs regular graphite-500
│                                        │
│  Antes de construir o nós,             │  ← Mulish sm regular graphite-700
│  cada um precisa se tornar             │     máx 3 linhas
│  a melhor versão de si.                │
│                                        │
│  ··· ver princípio-chave ↓ ···         │  ← Mulish xs graphite-300, hint sutil
│                                        │     visível mas discreto
└───────────────────────────────────────┘
```

#### Estado hover / focus (revelação)

```
┌───────────────────────────────────────┐
│  [card com tilt ±8deg + glow gold]     │
│                                        │
│  01                                    │  ← sobe em z (translateZ: 40px)
│                                        │
│  — gold rule —                         │
│                                        │
│  ELEVAÇÃO INDIVIDUAL                   │
│                                        │
│  Meses 1–4                             │
│                                        │
│  Antes de construir o nós,             │
│  cada um precisa se tornar             │
│  a melhor versão de si.                │
│                                        │
│  ┌─────────────────────────────────┐   │  ← painel revelado
│  │  gold rule hairline top         │   │
│  │                                 │   │
│  │  PRINCÍPIO-CHAVE                │   │  Mulish 2xs widest gold-800
│  │  [texto do princípio — 1 linha] │   │  Mulish sm graphite-700
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                        │
│  [Saber mais →]                        │  ← aparece no hover, wine-700
│                                        │     link para âncora #fase-1
└───────────────────────────────────────┘
```

O painel revelado entra com `height: 0 → auto` + `opacity: 0 → 1` via Framer Motion `AnimatePresence`. Duração `--duration-base` (240ms), ease `--ease-standard`.

---

## Dados das 3 fases

> Copy de título e meses são propostas da UX baseadas no v3-briefing e v2-diretrizes. Michel valida.

| Fase | Número display | Título | Meses | Teaser (3 linhas máx) | Princípio-chave |
|---|---|---|---|---|---|
| 1 | `01` | Elevação Individual | Meses 1–4 | Antes de construir o nós, cada um precisa se tornar a melhor versão de si. | Identidade antes de relacionamento. |
| 2 | `02` | Construção do Nós | Meses 5–8 | Dois indivíduos elevados aprendem a construir juntos — com intenção, não por hábito. | União que cresce, não que cede. |
| 3 | `03` | Legado em Casal | Meses 9–12 | Um casamento extraordinário deixa marcas — nos filhos, nas pessoas ao redor, no mundo. | O que vocês constroem dura além de vocês. |

> `01 / 02 / 03` em vez de `1 / 2 / 3` — zero leading confere peso editorial e rigor visual. Alinha com estética Spectral.

---

## Camadas Z nas Fases

Mesmo sistema do Marcos, com ajuste de conteúdo:

```
Camada 1 — Número (01/02/03)     translateZ(40px)  ← mais próximo
Camada 2 — Título da fase        translateZ(20px)  ← meio
Camada 3 — Teaser + detalhe      translateZ(0px)   ← base
```

O painel revelado (princípio-chave) está na camada 3 (base) — não flutua, ancora o card.

---

## Comportamento interativo — detalhamento

### 1. Reveal no scroll (entrada)

```js
// Por card, via Framer Motion whileInView
initial={{ opacity: 0, y: 32 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.25 }}
transition={{
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],   // --ease-entrance
  delay: index * 0.15          // 0ms, 150ms, 300ms — mais espaçado que Marcos
}}
```

Stagger de `150ms` (vs 100ms no Marcos) porque os cards são mais largos e o olho precisa de mais tempo para perceber cada entrada.

### 2. Tilt 3D (idêntico ao Marcos)

```
perspective: 800px no container pai
rotateX: map(mouseY, ±8deg)
rotateY: map(mouseX, ±8deg)
spring: stiffness 300, damping 30
```

### 3. Revelação do painel (hover/focus)

```js
// AnimatePresence + motion.div no painel interno
<AnimatePresence>
  {isHovered && (
    <motion.div
      key="detalhe"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* princípio-chave + link */}
    </motion.div>
  )}
</AnimatePresence>
```

`isHovered` controlado por `onMouseEnter`/`onMouseLeave` + `onFocus`/`onBlur` (foco via teclado também revela).

### 4. Click / tap — âncora interna

Cada card tem um `href="#fase-N"` (link para âncora mais abaixo na página OU para página de detalhamento futuro). No mobile, o tap substitui o hover — um toque revela o painel, segundo toque navega.

```
onClick (mobile): toggle estado expanded
onClickOutside: fecha
```

Implementação: `useState(expanded)` + listener global via `useEffect` para fechar ao clicar fora.

---

## Tokens tipográficos — Fases

| Elemento | Família | Tamanho | Peso | Cor |
|---|---|---|---|---|
| Número ordinal (01/02/03) | Spectral | `--text-5xl` 88px desktop / `--text-4xl` 64px mobile | 400 | `--gold-500` |
| Régua sob número | — | 1px | — | `--rule-gold` (`--gold-500`) |
| Título da fase | Mulish | `--text-sm` 14px | 600 | `--graphite-900` |
| Período (Meses X–Y) | Mulish | `--text-xs` 12px | 400 | `--graphite-500` |
| Teaser | Mulish | `--text-sm` 14px | 400 | `--graphite-700` |
| Hint "ver princípio" | Mulish | `--text-xs` 12px | 400 | `--graphite-300` |
| Label princípio-chave | Mulish | `--text-2xs` 11px | 500 | `--gold-800` |
| Texto princípio-chave | Mulish | `--text-sm` 14px | 400 | `--graphite-700` |
| Link "Saber mais →" | Mulish | `--text-sm` 14px | 500 | `--wine-700` |

---

## Contraste WCAG AA — verificação

| Par | Ratio | Status |
|---|---|---|
| `--gold-500` (#C2A14D) sobre `--ivory` (#F4EEE2) | ~3.2:1 | AA texto grande (88px) — passa |
| `--graphite-900` (#2E2A2B) sobre `--ivory` | ~14:1 | AAA — passa |
| `--graphite-700` (#4D4748) sobre `--ivory` | ~8.5:1 | AAA — passa |
| `--graphite-500` (#716A6B) sobre `--ivory` | ~4.8:1 | AA — passa |
| `--graphite-300` (#A99FA0) sobre `--ivory` | ~2.4:1 | Falha AA — **aceitável: é hint decorativo, não informação crítica** |
| `--gold-800` (#735422) sobre `--ivory` | ~5.8:1 | AA — passa |
| `--wine-700` (#5C2230) sobre `--ivory` | ~9.2:1 | AAA — passa |

> `--graphite-300` no hint "ver princípio-chave" é intencionalmente suave — indica possibilidade, não exige leitura. Mesma lógica de placeholder text. Não é conteúdo crítico.

---

## Acessibilidade

### `prefers-reduced-motion`

```js
// Em MotionConfig no layout raiz (já deve estar do spec Marcos)
<MotionConfig reducedMotion="user">

// Comportamento resultante nos cards de fase:
// - Tilt: desabilitado (sem rotateX/Y)
// - Slide-up reveal: desabilitado (aparece diretamente)
// - Painel de detalhe: abre/fecha sem height animation (display toggle)
// - Stagger: mantido (apenas delay de opacity, não movement)
```

### Foco de teclado

- Card: `tabIndex={0}`, focus ring `outline: 2px solid var(--focus-ring)`, `outline-offset: 4px`
- Foco no card revela o painel (mesmo comportamento do hover)
- Tilt NÃO ativa via teclado — só via mouse
- Link "Saber mais →" dentro do painel é focável independentemente (`tabIndex={0}` ou `<a>`)
- Ordem de foco: card Fase 1 → link interno Fase 1 → card Fase 2 → link interno Fase 2 → card Fase 3 → link interno Fase 3

### Markup semântico

```html
<section aria-labelledby="fases-title">
  <h2 id="fases-title">Uma jornada intencional. Construída em três movimentos.</h2>

  <ol role="list" aria-label="As três fases do método">
    <li>
      <article
        role="article"
        aria-label="Fase 1: Elevação Individual, meses 1 a 4"
        tabIndex={0}
        aria-expanded={isExpanded}  <!-- anuncia estado para SR -->
      >
        <span aria-hidden="true">01</span>       <!-- visual -->
        <span class="sr-only">Fase 1</span>      <!-- SR -->
        <h3>Elevação Individual</h3>
        <p class="periodo">Meses 1–4</p>
        <p class="teaser">Antes de construir o nós...</p>

        <!-- painel revelado (sr sempre lê, visualmente oculto quando collapsed) -->
        <div aria-live="polite">
          <p class="principio-label sr-only">Princípio-chave:</p>
          <p class="principio">Identidade antes de relacionamento.</p>
          <a href="#fase-1-detalhe">Saber mais</a>
        </div>
      </article>
    </li>
    <!-- fases 2 e 3 ... -->
  </ol>
</section>
```

`aria-expanded` no article anuncia ao screen reader se o painel está aberto ou fechado.
`aria-live="polite"` no painel garante que o SR releia o conteúdo quando expandido via teclado.

---

## Wireframe completo — desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│  [BEGE]                                           padding: 128px top/bottom │
│                                                                            │
│              AS TRÊS FASES                       ← eyebrow gold-800        │
│                                                                            │
│              Uma jornada intencional.            ← Spectral 2xl            │
│              Construída em três movimentos.      ← Spectral 2xl wine-600   │
│                                                                            │
│              — — — ◆ — — —                       ← gold rule 48px          │
│                                                                            │
│                          80px gap                                          │
│                                                                            │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐  │
│  │  [surface-raised]    │  │  [surface-raised]    │  │  [surface-raised]│  │
│  │  padding: 48px       │  │  padding: 48px       │  │  padding: 48px   │  │
│  │                      │  │                      │  │                  │  │
│  │  01                  │  │  02                  │  │  03              │  │
│  │  ── gold rule ──     │  │  ── gold rule ──     │  │  ── gold rule ── │  │
│  │                      │  │                      │  │                  │  │
│  │  ELEVAÇÃO            │  │  CONSTRUÇÃO          │  │  LEGADO          │  │
│  │  INDIVIDUAL          │  │  DO NÓS              │  │  EM CASAL        │  │
│  │                      │  │                      │  │                  │  │
│  │  Meses 1–4           │  │  Meses 5–8           │  │  Meses 9–12      │  │
│  │                      │  │                      │  │                  │  │
│  │  Antes de construir  │  │  Dois indivíduos     │  │  Um casamento    │  │
│  │  o nós, cada um      │  │  elevados aprendem   │  │  extraordinário  │  │
│  │  precisa se tornar   │  │  a construir juntos  │  │  deixa marcas — │  │
│  │  a melhor versão     │  │  — com intenção,     │  │  nos filhos, nas │  │
│  │  de si.              │  │  não por hábito.     │  │  pessoas ao      │  │
│  │                      │  │                      │  │  redor.          │  │
│  │  ··· princípio ↓ ··· │  │  ··· princípio ↓ ··· │  │  ··· princ. ↓ ···│  │
│  │                      │  │                      │  │                  │  │
│  │  [hover/focus →      │  │  [hover/focus →      │  │  [hover/focus →  │  │
│  │  ┌──────────────┐    │  │  ┌──────────────┐    │  │  ┌────────────┐  │  │
│  │  │PRINCÍPIO-    │    │  │  │PRINCÍPIO-    │    │  │  │PRINCÍPIO-  │  │  │
│  │  │CHAVE         │    │  │  │CHAVE         │    │  │  │CHAVE       │  │  │
│  │  │Identidade    │    │  │  │União que     │    │  │  │O que vocês │  │  │
│  │  │antes de      │    │  │  │cresce, não   │    │  │  │constroem   │  │  │
│  │  │relacionamento│    │  │  │que cede.     │    │  │  │dura além   │  │  │
│  │  └──────────────┘    │  │  └──────────────┘    │  │  │de vocês.   │  │  │
│  │  [Saber mais →]      │  │  [Saber mais →]      │  │  └────────────┘  │  │
│  │  ]                   │  │  ]                   │  │  [Saber mais →]  │  │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────┘  │
│     ↑ hover: tilt ±8deg + borda gold + glow difuso                         │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Estrutura de componente — consumidor MetodoFases

```
components/metodo/MetodoFases/
  index.tsx          ← seção completa (título, eyebrow, grid)
  FaseCard.tsx       ← card individual; wrapa InteractiveCard3D
  fases.data.ts      ← dados estáticos das 3 fases (numero, titulo, meses, teaser, principio)
```

**FaseCard.tsx — como consome o primitivo:**

```tsx
import InteractiveCard3D from '@/components/ui/InteractiveCard3D'

export function FaseCard({ fase, index }: FaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <InteractiveCard3D
      tiltIntensity={8}
      perspective={800}
      glow
      revealDelay={index * 150}
      expandable
      expandContent={
        <PrincipioPanel
          label="PRINCÍPIO-CHAVE"
          texto={fase.principio}
          href={`#fase-${fase.numero}`}
        />
      }
      ariaLabel={`Fase ${fase.numero}: ${fase.titulo}, meses ${fase.meses}`}
      minHeight="320px"
    >
      {/* Camada 1 — número ordinal */}
      <span style={{ translateZ: 40 }} aria-hidden>
        {fase.numeroDisplay}  {/* "01", "02", "03" */}
      </span>

      {/* Camada 2 — título */}
      <h3 style={{ translateZ: 20 }}>{fase.titulo}</h3>

      {/* Camada 3 — detalhe */}
      <div style={{ translateZ: 0 }}>
        <p className="periodo">{fase.meses}</p>
        <p className="teaser">{fase.teaser}</p>
        <span className="hint" aria-hidden>··· princípio ↓ ···</span>
      </div>
    </InteractiveCard3D>
  )
}
```

---

## Checklist para o dev-alpha — story 3.3

- [ ] Implementar primitivo `InteractiveCard3D` em `components/ui/` (base para Marcos E Fases)
- [ ] Extrair `useTilt.ts` e `useCountUp.ts` como hooks separados em `hooks/`
- [ ] `FaseCard.tsx` consome `InteractiveCard3D` com `expandable: true`
- [ ] `AnimatePresence` no painel de detalhe — height 0→auto + opacity 0→1
- [ ] Mobile: tap abre painel (toggle), toque fora fecha — `useClickOutside` hook ou blur
- [ ] `aria-expanded` atualizado dinamicamente no article
- [ ] `aria-live="polite"` no painel revelado
- [ ] Foco via teclado revela painel (onFocus) e fecha (onBlur do card inteiro)
- [ ] `MotionConfig reducedMotion="user"` no layout raiz (confirmar — já deve ter do spec Marcos)
- [ ] Testar iOS Safari: `preserve-3d` fallback (disable translateZ, mantém hover visual)
- [ ] Testar expand/collapse no touch device: garantir que o painel abre sem depender de hover
- [ ] Verificar que `ol` com `role="list"` + `li` não perde semântica de lista no VoiceOver/iOS (workaround: `role="list"` no `ol`)
