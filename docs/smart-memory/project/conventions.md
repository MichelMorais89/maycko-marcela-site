---
title: Convenções de Código — ELEVEM-SE Site
type: conventions
status: active
agent: sites-analyst
created: 2026-07-08
updated: 2026-07-08
tags: [conventions, nextjs, typescript, tailwind]
related: ["[[tech-stack]]", "[[overview]]", "[[handoff-bundles]]"]
---

# Convenções de Código — ELEVEM-SE Site

Referência normativa para toda implementação. Em conflito, este arquivo + `[[tech-stack]]` ganham do protótipo do bundle.

---

## Naming

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes React | PascalCase | `HeroSection.tsx`, `QuoteBlock.tsx` |
| Arquivos de rota (App Router) | kebab-case | `app/sobre/page.tsx`, `app/application-form/page.tsx` |
| Funções e hooks | camelCase | `useScrollReveal`, `formatCurrency` |
| Variáveis e props | camelCase | `mentorName`, `isOpen` |
| Constantes de módulo | SCREAMING_SNAKE_CASE | `MAX_APPLICATIONS`, `SITE_URL` |
| Arquivos de util/lib | kebab-case | `format-date.ts`, `cn.ts` |
| CSS/Tailwind vars customizadas | kebab-case (mesma convenção do DS) | `--wine-600`, `--font-display` |

---

## Estrutura de diretórios

```
site/
├── app/                    # App Router
│   ├── layout.tsx          # Root layout (fonts, providers, metadata)
│   ├── page.tsx            # Home (1º ciclo)
│   ├── globals.css         # Tailwind @import + tokens do DS
│   └── [rota]/
│       └── page.tsx
├── components/
│   ├── brand/              # Logo, Signature, Quote (do DS)
│   ├── core/               # Button, Card, Badge, Avatar (do DS)
│   ├── forms/              # Field, Input (do DS)
│   ├── layout/             # Header, Footer, Section
│   └── sections/           # HeroSection, MetodoSection, etc.
├── lib/
│   └── utils.ts            # cn() e outros helpers
├── public/
│   ├── images/             # Fotos dos mentores e assets
│   └── icons/              # SVGs proprietários da marca (chama)
└── docs/                   # Bundles do Claude Design (somente leitura)
```

---

## Ordem de imports

Sempre nesta sequência, com linha em branco entre grupos:

```ts
// 1. React core
import { useState, useEffect } from 'react'

// 2. Next.js
import Image from 'next/image'
import Link from 'next/link'

// 3. Bibliotecas externas
import { motion } from 'framer-motion'
import { z } from 'zod'

// 4. Paths absolutos (@/)
import { Button } from '@/components/core/Button'
import { cn } from '@/lib/utils'

// 5. Relativos
import styles from './Hero.module.css'
```

---

## Formatadores e linters

| Ferramenta | Config | Observação |
|-----------|--------|------------|
| Prettier | `.prettierrc` | `singleQuote: true`, `semi: false`, `tabWidth: 2`, `printWidth: 100` |
| ESLint | `eslint.config.mjs` | Extender `next/core-web-vitals` + `@typescript-eslint/recommended` |
| eslint-plugin-tailwindcss | — | Ordena classes Tailwind automaticamente |
| oxlint | `_adherence.oxlintrc.json` | Config já presente no bundle DS — usar como referência de regras |

O arquivo `_adherence.oxlintrc.json` do DS (`docs/elevem-se-design-system/project/`) contém regras de adesão ao padrão do bundle. Revisar antes de configurar o ESLint final.

---

## Commits — Conventional Commits

```
feat: adiciona seção de depoimentos na home
fix: corrige overflow no mobile da seção hero
chore: adiciona dependência framer-motion
docs: atualiza conventions com regras de import
refactor: extrai lógica de scroll para hook useScrollReveal
style: ajusta espaçamento da seção método
```

**Escopo opcional:** `feat(hero): ...`, `fix(form): ...`

---

## Branches

| Branch | Uso |
|--------|-----|
| `main` | Protegida. Só via PR aprovado. |
| `feature/*` | Novas funcionalidades (`feature/hero-section`) |
| `fix/*` | Correções (`fix/mobile-overflow`) |
| `chore/*` | Config, deps, infra |

---

## Testes

**A definir com o time.** Recomendação dos dados:

| Tipo | Ferramenta | Escopo |
|------|-----------|--------|
| Unit | Vitest | `lib/utils.ts`, validações Zod, helpers |
| Component | React Testing Library | Componentes do DS reimplementados |
| E2E | Playwright | Fluxo crítico: `application-form` → submit |

Não implementar testes automatizados até confirmação de escopo.

---

## Copy / i18n

- **Idioma único:** pt-BR. Sem framework de i18n (next-intl, i18next, etc.).
- Copy vive nos componentes ou em arquivos de constantes locais (`lib/copy.ts` por seção se necessário).
- Não usar `en-US` em nenhuma string visível ao usuário.

---

## Regras do playbook ELEVEM-SE que impactam código

Estas regras do `docs/playbook-conteudo-elevem-se.md` (raiz do projeto pai) **devem ser checadas durante code review de qualquer componente com copy hardcoded:**

### 1. Fé 100% implícita
Nenhuma string no código pode conter: versículos, "amém", denominações religiosas, ou referências explícitas a fé/Deus.

**Onde revisar no código:**
- `components/sections/` — qualquer `<p>`, `<h2>`, `<span>` com copy inline
- `lib/copy.ts` se existir
- Atributos `alt` de imagens dos mentores

### 2. Zero vocabulário de crise
Proibido nas strings: `superar`, `salvar`, `restaurar`, `reconciliar`, `crise`, `dor`, `sofrimento`.

A promessa é sempre **construção / elevação**.

**Onde revisar:** Mesmos arquivos acima + `<title>` e `<meta description>` em `app/layout.tsx` e em cada `page.tsx`.

### 3. CTA direto
Todo componente de seção que termina uma "etapa de convencimento" deve fechar com CTA explícito (botão ou link para `application-form`).

### 4. Paleta
Não usar cores fora dos tokens do DS. Nenhum hex hardcoded — sempre via CSS variable ou classe Tailwind mapeada ao token.

```tsx
// Errado
<div style={{ backgroundColor: '#6E2A36' }}>

// Certo
<div className="bg-wine-600">
// ou
<div style={{ backgroundColor: 'var(--wine-600)' }}>
```

### 5. Caixa-alta em headlines de impacto
Headlines display (`--type-impact-*`) devem usar `uppercase` via Tailwind ou CSS. Nunca escrita manual em maiúsculas no JSX (impede alteração futura sem reescrita).

```tsx
// Errado
<h1>ELEVE SEU CASAMENTO</h1>

// Certo
<h1 className="uppercase tracking-widest font-display">Eleve seu casamento</h1>
```
