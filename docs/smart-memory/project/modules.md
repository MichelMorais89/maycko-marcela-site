---
title: Mapa de Módulos — KV Site ELEVEM-SE
type: project
status: draft
agent: sites-architect
created: 2026-07-08
updated: 2026-07-08
tags: [modules, kv, pages, components, assets]
related:
  - [[project/architecture]]
  - [[project/handoff-bundles]]
---

# Mapa de Módulos — KV Site ELEVEM-SE

> Fonte: bundle Claude Design em `site/docs/elevem-se-kv-site/project/site/`.
> Ciclo 1: análise COMPLETA de todas as páginas; **produção em código só da HOME**.

---

## Estrutura raiz do bundle

```
elevem-se-kv-site/project/
  site/           — protótipos HTML + JSX (8 páginas + kv-hub)
  _ds/            — Design System (tokens, bundle JS, CSS)
  screens/        — screenshots de referência JPG
```

---

## Páginas

### 1. Home (`home.html` / `home.jsx`)

**Propósito:** Página principal de entrada e captação. Apresenta a proposta de valor, o método resumido, o casal e CTAs para aplicação.

**Seções (em ordem):**
| # | Componente interno | Descrição |
|---|---|---|
| 1 | `Hero` | Split editorial: texto + foto emoldurada. H1 vinho. Dois CTAs: "Quero aplicar" + "Conhecer o método". |
| 2 | `Prova` | Faixa de stats (grid 2×2): +20 anos juntos, 13 de casamento, 3 filhos, 100% digital. |
| 3 | `Dores` | Split: SectionHead à esquerda + lista numerada de 5 dores à direita. |
| 4 | `Conceito` | Seção vinho escura. H2 centralizado. Três sub-frases. Frase em itálico serifado. |
| 5 | `MetodoResumo` | Dois cards ink/wine com as 2 fases do método. Link "Ver o método completo". |
| 6 | `Mentores` | Split cream: foto esquerda + texto + Signature + link "Conhecer a história". |
| 7 | `Depoimentos` | Grid 3 cards de testemunhos com Avatar + nome + papel. |
| 8 | `Legado` | Full-bleed foto P&B com overlay gradiente vinho. H2 claro. |
| 9 | `FinalCta` | Logo mark + eyebrow + H2 + lead + CTA primário. |

**Assets consumidos:**
- `assets/photos/casal-01-web.jpg` — Hero e Mentores
- `assets/photos/casal-02-web.jpg` — Mentores
- `assets/photos/casal-bw-web.jpg` — Legado (full-bleed P&B)

**Componentes do DS:**
`Logo`, `Badge`, `Button`, `Card`, `Quote`, `Signature`, `Avatar`

**Shared importados:**
`Page` (shell), `Reveal`, `Eyebrow`, `Photo`, `SectionHead` (de `site-kit.jsx`)

**Screens de referência:**
`screens/01-home-scroll.jpg`, `screens/02-home-scroll.jpg`, `screens/03-home-scroll.jpg`, `screens/04-home-scroll.jpg`, `screens/01-home-sec.jpg`, `screens/02-home-sec.jpg`, `screens/03-home-sec.jpg`, `screens/04-home-sec.jpg`, `screens/05-home-sec.jpg`

---

### 2. Manifesto (`manifesto.html` / `manifesto.jsx`)

**Propósito:** Página de impacto editorial no modo NOTURNO (`data-theme="noturno"`). Registro dramático/escuro da marca. Não usa o `Page` shell padrão — tem `DarkBar` própria.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | `DarkBar` | Header escuro minimalista: logo light + link "Voltar ao site" + CTA dourado. |
| 2 | Hero | 92vh. Glow radial vinho. H1 7rem fluido. Lead 48ch. |
| 3 | `Statement` (A verdade) | Full-screen statement. "Fracassam por falta de estrutura." |
| 4 | Full-bleed foto | casal-bw-web.jpg com overlay gradiente. "Vivemos o que ensinamos." |
| 5 | `Pilares` | Três pilares numerados (01/02/03) com numerais grandes serifados em ouro. |
| 6 | `Statement` (A decisão) | "Saiam do automático. Construam com método." |
| 7 | CTA final | Logo mark + H2 + CTA dourado "Quero aplicar para o Elevem-se" + Signature. |

**Assets consumidos:**
- `assets/photos/casal-bw-web.jpg`

**Componentes do DS:**
`Logo`, `Badge`, `Button`, `Quote`, `Signature`

**Shared importados:**
`Reveal`, `bindDS` (de `site-kit.jsx`)

**Screens de referência:**
`screens/manifesto-hero.jpg`, `screens/01-manifesto-final.jpg`, `screens/02-manifesto-final.jpg`, `screens/03-manifesto-final.jpg`, `screens/04-manifesto-final.jpg`, `screens/05-manifesto-final.jpg`

---

### 3. A Mentoria (`mentoria.html` / `mentoria.jsx`)

**Propósito:** Página de vendas/conversão principal. Apresenta a oferta, investimento, FAQ e formulário de aplicação multi-step.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | `Hero` | Centralizado. H1 vinho. Lead. Dois CTAs: "Quero aplicar" + "O que inclui". |
| 2 | `Oferta` | Grid 3 cols. 6 itens de ecossistema (14 encontros, 12 meses, grupo, planner, livros, hipnose). `id="oferta"` |
| 3 | `Investimento` | Dois cards de pricing (À vista / Parcelado). Valores "a confirmar". `id="investimento"` |
| 4 | `Exclusividade` | Dois cards: card ink (exclusividade) + card plain (garantia 30 dias). |
| 5 | `Faq` | Accordion com 6 perguntas. `id="faq"` |
| 6 | `Aplicar` | Split: texto esquerda + Card raised com `ElevemApplicationForm`. `id="aplicar"` |

**Assets consumidos:** nenhuma foto própria (usa DS)

**Componentes do DS:**
`Badge`, `Button`, `Card`, `Quote`, `Signature`

**Shared importados:**
`Page` (mobileCta=false), `Reveal`, `Eyebrow`, `SectionHead`, `Accordion` (de `blocks.jsx`), `ElevemApplicationForm` (de `application-form.jsx`)

**Screens de referência:**
`screens/01-ment.jpg`, `screens/02-ment.jpg`, `screens/03-ment.jpg`, `screens/04-ment.jpg`

---

### 4. O Método (`metodo.html` / `metodo.jsx`)

**Propósito:** Explicação detalhada do método em duas fases, com tabs interativas, timeline e comparativo para quem é/não é.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | `Hero` | Split: texto + foto marcela-poltrona. H1 "Primeiro cada um se eleva…" |
| 2 | `FasesTabs` | Tabs (Fase 01 / Fase 02) com split foto + lista de itens. |
| 3 | `Jornada` | Timeline com 5 etapas dos 12 meses. |
| 4 | `ParaQuem` | Dois cards: "É para vocês se…" (ok) / "Não é o momento se…" (outline). |
| 5 | `Cta` | Seção vinho. H2 + CTA dourado. |

**Assets consumidos:**
- `assets/photos/marcela-poltrona-web.jpg`
- `assets/photos/marcela-sorriso-web.jpg`
- `assets/photos/casal-02-web.jpg`

**Componentes do DS:**
`Badge`, `Button`, `Card`, `Quote`, `Signature`

**Shared importados:**
`Page`, `Reveal`, `Eyebrow`, `Photo`, `SectionHead`, `Tabs`, `Timeline` (de `blocks.jsx`)

---

### 5. Sobre (`sobre.html` / `sobre.jsx`)

**Propósito:** Página "Quem conduz" — a história do casal, os valores da marca e citação-assinatura.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | `Hero` | Split: texto + casal-01. H1 "Marcela & Maycko". Signature wine. |
| 2 | `Historia` | Split cream: foto marcela-poltrona + 2 parágrafos de história. |
| 3 | `Valores` | Grid 4 cards plain. 4 valores: Verdade, Estrutura, Profundidade, Propósito. |
| 4 | `QuoteSec` | Seção vinho. Quote component centralizado. |
| 5 | `Cta` | H2 + dois botões: "Conhecer o método" + "Quero aplicar". |

**Assets consumidos:**
- `assets/photos/casal-01-web.jpg`
- `assets/photos/marcela-poltrona-web.jpg`

**Componentes do DS:**
`Badge`, `Button`, `Card`, `Quote`, `Signature`, `Avatar`

**Shared importados:**
`Page`, `Reveal`, `Eyebrow`, `Photo`, `SectionHead`

---

### 6. Blog (`blog.html` / `blog.jsx`)

**Propósito:** Listagem de artigos com filtro por categoria, post em destaque e grid de cards. Estado vazio por categoria.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | Header | SectionHead centralizado + chips de filtro por categoria (6 cats). |
| 2 | `Featured` | (só em "Todos") Destaque split: thumbnail + título + lead + meta. |
| 3 | Grid / `Empty` | Grid 3 cols de `PostCard` ou estado vazio com `LeadCapture`. |

**Posts hardcoded (protótipo):** 6 posts com slugs definidos.
**Categorias:** Todos, Relacionamento, Empreendedorismo, Finanças do casal, Propósito, Eventos.

**Assets consumidos:** nenhum (thumbnails são placeholders coloridos com letra "e").

**Componentes do DS:**
`Badge`, `Button`, `Card`

**Shared importados:**
`Page`, `Reveal`, `Eyebrow`, `SectionHead`, `LeadCapture` (de `blocks.jsx`)

---

### 7. Blog Post (`blog-post.html` / `blog-post.jsx`)

**Propósito:** Leitura long-form de artigo. Rota por `?p=slug`. Inclui barra de progresso de leitura, card de autor e artigos relacionados.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | `ReadingBar` | Barra dourada fixa no topo com progresso do scroll. |
| 2 | Header | Breadcrumb + Badge categoria + H1 + meta (autores, data, tempo). |
| 3 | Hero img | 16:7 aspect ratio. Foto do post com borda inset dourada. |
| 4 | `Body` | Artigo long-form: parágrafos, H2s, blockquotes, listas. |
| 5 | Card autor | Avatar + nome + bio + CTA "Conhecer a mentoria". |
| 6 | Relacionados | Grid 3 cards de navegação para outros artigos. |

**Posts hardcoded:** 6 artigos com corpo completo (estrutura-vs-sorte, cnpj-cpf, modo-automatico, dinheiro-a-dois, admiracao, proposito-legado).

**Assets consumidos:** foto varia por post (usa todas as 6 fotos da pasta).

**Componentes do DS:**
`Badge`, `Button`, `Card`, `Avatar`

**Shared importados:**
`Page` (mobileCta=false), `Reveal`, `SectionHead`

**Screens de referência:**
`screens/post-admiracao.jpg`

---

### 8. Contato (`contato.html` / `contato.jsx`)

**Propósito:** Formulário de contato com estados completos (idle/loading/success/error) + listagem de canais de atendimento.

**Seções:**
| # | Componente | Descrição |
|---|---|---|
| 1 | `Hero` | Split: canais esquerda + `ContactForm` em Card raised direita. |

**Campos do form:** nome, e-mail, assunto (select), mensagem. Validação inline.
**Canais:** E-mail, WhatsApp, Instagram, Atendimento.

**Assets consumidos:** nenhum.

**Componentes do DS:**
`Button`, `Card`

**Shared importados:**
`Page`, `Reveal`, `Eyebrow`

**Screens de referência:**
`screens/contato.jpg`

---

### 9. Application Form (componente autônomo — `application-form.jsx`)

**Propósito:** Formulário multi-step de aplicação para a mentoria. Exportado como `window.ElevemApplicationForm` e embutido na página Mentoria.

**Steps:**
| Step | Título | Campos |
|---|---|---|
| 0 | Sobre vocês | Nome 1, Nome 2, E-mail, WhatsApp |
| 1 | O momento de vocês | Tempo juntos (chips), Empreendem (chips), Desafios (checkboxes múltiplas) |
| 2 | O compromisso | Por que agora (textarea), Horário de diagnóstico (grid de slots) |

**Estado final:** confirmação com slot escolhido + e-mail.

---

### 10. KV Hub (`kv-hub.jsx` + `index.html`)

**Propósito:** Documentação interna do KV — índice de páginas, styleguide de tokens, biblioteca de blocos, heróis, CTAs, estados e microinterações. Não é página de produção.

---

## Componentes Compartilhados (`shared/`)

### `shared/site-kit.jsx`

Exporta via `window.*`:

| Componente | Descrição |
|---|---|
| `Page` | Shell de página: `SiteNav` + `<main>` + `SiteFooter` + `MobileCTABar` |
| `SiteNav` | Nav sticky com logo + links desktop/mobile drawer. Mobile breakpoint: 1000px. |
| `SiteFooter` | Footer vinho-deep: brand + newsletter inline + 4 colunas de links. |
| `MobileCTABar` | Barra fixa mobile de conversão (aparece após 560px de scroll). |
| `Reveal` | Wrapper com IntersectionObserver para fade+rise. Respeita `prefers-reduced-motion`. |
| `Eyebrow` | Badge com `tone="gold"` e rule. Fallback span. |
| `Photo` | Div com aspect-ratio + `img` + borda inset dourada opcional. |
| `SectionHead` | Bloco eyebrow→H2→lead com alinhamento e tone configuráveis. |
| `useMediaQuery` | Hook React para breakpoints. |
| `NAV_LINKS` | Array de rotas da nav (Home, Sobre, O Método, A Mentoria, Blog, Contato). |

### `shared/blocks.jsx`

Exporta via `window.*`:

| Bloco | Descrição |
|---|---|
| `Accordion` | FAQ com toggle single/multi, animação max-height, ícone +/× dourado. |
| `Tabs` | Tab bar com active dourado + painel intercambiável. |
| `Timeline` | Lista numerada com linha vertical hairline e círculos sequenciais. |
| `LeadCapture` | Form de captura de e-mail (idle/loading/success/error). Usado no footer e blog empty. |

### `shared/site.css`

CSS específico de web (complementa o DS):
- Containers: `.elv-wrap`, `.elv-wrap--md`, `.elv-wrap--prose`
- Seções: `.elv-sec`, variantes `--wine`, `--deep`, `--ink`, `--cream`, `--page`
- Tipografia fluida: `.elv-fluid-hero`, `h1`, `h2`, `h3`, `lead`, `post` (todos com `clamp()`)
- Grids responsivos: `.elv-grid-2`, `.elv-grid-3`, `.elv-grid-4`, `.elv-split`
- Reveal on scroll: `.elv-reveal` + `.is-in` + `data-delay`
- Microinterações: lift de card, link com underline dourado, chips/pills
- Footer e skip link

### `ds-base.js`

Loader do DS para as páginas do KV. Injeta `styles.css` e `_ds_bundle.js` do diretório `../_ds/`.

---

## Design System (`_ds/elevem-se-design-system-00d476.../`)

**Namespace runtime:** `window.ElevemSeDesignSystem_00d476`

**Componentes exportados:**
| Componente | Categoria |
|---|---|
| `Logo` | Brand |
| `Quote` | Brand |
| `Signature` | Brand |
| `Avatar` | Core |
| `Badge` | Core |
| `Button` | Core |
| `Card` | Core |
| `Field` | Forms |
| `Input` | Forms |

**Tokens globais (arquivos CSS):**
- `tokens/fonts.css` — Spectral (display/serif) + Mulish (sans). Google Fonts.
- `tokens/colors.css` — Paleta wine/gold/neutral/graphite/ink + aliases semânticos + tema `noturno`.
- `tokens/typography.css` — Escala de tamanhos, pesos, leadings, roles semânticos.
- `tokens/spacing.css` — Escala base-4, radii, sombras warm, containers, motion tokens.

**Temas:**
- Default (claro) — base ivory/cream + vinho + dourado.
- `noturno` (`data-theme="noturno"`) — graphite-navy profundo + dourado. Usado só na página Manifesto.

---

## Assets (`site/assets/photos/`)

| Arquivo | Uso nas páginas |
|---|---|
| `casal-01-web.jpg` | Home (Hero, Depoimentos), Sobre (Hero), Blog-post (cnpj-cpf) |
| `casal-02-web.jpg` | Home (Mentores), Método (Fase 02), Sobre (História), Blog-post (modo-automatico) |
| `casal-bw-web.jpg` | Home (Legado), Manifesto (full-bleed), Blog-post (estrutura-vs-sorte, proposito-legado) |
| `marcela-01-web.jpg` | Disponível, sem referência explícita nas páginas atuais |
| `marcela-poltrona-web.jpg` | Método (Hero), Sobre (História), Blog-post (dinheiro-a-dois) |
| `marcela-sorriso-web.jpg` | Método (Fase 01), Blog-post (admiracao), KV Hub (Card pessoa) |

---

## Screens de Referência (`project/screens/`)

| Arquivo(s) | Página |
|---|---|
| `01-home-scroll.jpg` … `04-home-scroll.jpg` | Home — scroll completo |
| `01-home-sec.jpg` … `05-home-sec.jpg` | Home — seções individuais |
| `01-ment.jpg` … `04-ment.jpg` | Mentoria |
| `manifesto-hero.jpg`, `01-manifesto-final.jpg` … `05-manifesto-final.jpg` | Manifesto |
| `hub-pages.jpg`, `01-hub.jpg` … `06-hub.jpg` | KV Hub |
| `contato.jpg` | Contato |
| `blog-empty.jpg` | Blog — estado vazio |
| `post-admiracao.jpg` | Blog Post |
