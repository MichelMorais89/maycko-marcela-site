---
title: Handoff Bundles do Claude Design
type: reference
status: active
agent: team-os
created: 2026-07-08
updated: 2026-07-08
tags: [project, design, handoff]
---

# Handoff Bundles — Claude Design

Bundles exportados do Claude Design (claude.ai/design), consolidados em `site/docs/`.

## 1. KV | SITE — `site/docs/elevem-se-kv-site/`

Páginas do site prototipadas em HTML/JSX.

**Entry point recomendado:** `project/site/manifesto.html` (indicado no README do bundle).

**Páginas:**
- home
- manifesto
- mentoria
- metodo
- sobre
- contato
- blog
- blog-post
- application-form
- kv-hub

Cada página existe em duas versões: `.html` (protótipo standalone) e `.jsx` (componente).

**Assets:**
- `project/site/assets/` — imagens e mídias
- `project/site/shared/` — componentes compartilhados
- `project/site/ds-base.js` — base do design system em runtime
- `project/screens/` — screenshots numerados de referência visual

## 3. Ensaio Fotográfico Marcela e Maycko — `site/docs/fotos-ensaio-mm/`

Material fotográfico oficial em alta resolução para uso no site (hero, retratos, blocos institucionais, blog cover, etc).

- **68 arquivos JPG** em alta resolução
- Origem: entrega WhatsApp em 2026-07-08 (ensaio realizado 2026-01-17)
- Nomenclatura: `Ensaio - Marcela e Mayko - Alta Resolução-{N}.jpg` (N = 1..68)
- Uso previsto:
  - Substituir fotos do bundle KV (`elevem-se-kv-site/project/site/assets/photos/`) quando forem versões preliminares
  - Servir de banco pra retratos, hero de home, sobre, mentoria, manifesto
- Antes de usar no site: **curadoria + tratamento + rename semântico** (ex: `hero-home-01.jpg`, `retrato-maycko-01.jpg`)

## 2. Design System — `site/docs/elevem-se-design-system/`

Design system + brand book exportado.

**Contém:**
- `Brand Book - Elevem-se.html` — brand book em HTML
- `brand-book/` — assets do brand book
- `tokens/` — tokens de design (cores, tipografia, spacing)
- `components/` — componentes do DS
- `guidelines/` — guidelines de uso
- `ui_kits/` — kits UI
- `templates/` — templates prontos
- `_ds_bundle.js` + `_ds_manifest.json` — bundle programático + manifesto
- `overview.html` — overview visual do DS
- `styles.css` — CSS base
- `netlify-deploy/` — configuração de deploy do preview
- `Post Impacto - Modo Claro.html` / `Post Impacto - Modo Escuro.html` — samples
- `type-specimen-acentos.html` — spécimen tipográfico
- `SKILL.md` — skill/instrução do bundle

## Regras de uso (do README do bundle KV)

1. **Ler `manifesto.html` primeiro** — página que o usuário tinha aberta ao acionar handoff.
2. **Seguir imports** — abrir todos os arquivos que ele puxa antes de implementar.
3. **Recriar pixel-perfect** — em stack de produção (React/Next/etc), não copiar estrutura interna do protótipo.
4. **Não renderizar em browser / não tirar screenshots** — a menos que o usuário peça. Dimensões/cores/regras estão no source.

## Alinhamento com o playbook ELEVEM-SE

Toda implementação visual deve respeitar as regras inegociáveis do
`docs/playbook-conteudo-elevem-se.md` (raiz do projeto pai):
- Paleta: vinho + dourado + navy + claros
- Caixa-alta, texto que grita
- Fé implícita, promessa de construção/elevação (nunca crise/superar)
- CTA direto ao fim
