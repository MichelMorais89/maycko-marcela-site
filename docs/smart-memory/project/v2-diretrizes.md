---
title: V2 — Diretrizes estratégicas Michel Morais
type: strategic
status: canonical
agent: team-lead
created: 2026-07-08
updated: 2026-07-08
tags: [v2, estrategia, canonical, brand]
related:
  - [[conceito-central-marca]]
  - [[overview]]
---

# V2 — Diretrizes estratégicas

Definidas pelo diretor Michel Morais em 2026-07-08 após auditoria da V1.
**V1 congelada** em commit `c2a1f79` + tag `v1.0` — rollback via `git reset --hard v1.0`.

## Princípio-mestre

O objetivo não é apenas "tirar repetição" — é garantir que **cada seção tenha uma função clara na jornada de decisão do visitante**.

## Reposicionamento fundamental

- ❌ ELEVEM-SE **não vende restauração**
- ✅ ELEVEM-SE **vende evolução**

A promessa não é resgatar o casamento em crise. É elevá-lo mesmo quando está bom.

## Papel de cada página (nenhuma compete com outra)

| Página | Pergunta que responde |
|---|---|
| **HOME** | O que é a Elevem-se? Por que ela existe? Por que isso importa? |
| **/metodo** | Como vocês conduzem essa transformação? |
| **/mentoria** | Como é viver isso na prática? |
| **/sobre** | Quem conduz? (biografia detalhada) |

## Nova estrutura HOME

Em ordem:

1. **Hero** — desperta identificação (visitante, não casal)
2. **A verdade que poucos casais percebem** *(substitui o Manifesto atual — AVANÇA a narrativa, não repete)*
3. **Dores** — reconhecimento específico
4. **"O casamento não precisa estar em crise para precisar evoluir"** *(NOVO — bloco pós-Dores. Reposiciona: evolução, não restauração)*
5. **Filosofia Elevem-se** *(refazer — aprofundar identidade da marca, não do casal)*
6. **O Método** — visão geral (o detalhe fica em /metodo)
7. **Resultados esperados** — o que vocês constroem
8. **Quem conduz** *(enxuto — nomes + foto + 1 linha + CTA "Conheça nossa história")*
9. **Depoimentos**
10. **CTA Final**

## Copies definidas por Michel

### Bloco 2 — "A verdade que poucos casais percebem"

> O sucesso profissional costuma receber planejamento.
> O patrimônio recebe investimento.
> Os filhos recebem atenção.
> Mas muitos casamentos acabam sendo deixados para quando "sobrar tempo".
>
> **Acreditamos que o relacionamento deve crescer na mesma velocidade que a vida de vocês cresce.**

### Bloco 4 — pós-Dores

> **O casamento de vocês não precisa estar em crise para precisar evoluir.**

Diferencia posicionamento: evolução ≠ restauração.

### Bloco 5 — Filosofia Elevem-se (marca)

> **O que significa Elevem-se?**
>
> Elevar-se é decidir crescer antes que os problemas obriguem vocês a mudar.
>
> É entender que um relacionamento saudável não nasce pronto.
> Ele é construído.
> Com intenção.
> Com maturidade.
> Com escolhas diárias.
>
> **Essa é a essência da Elevem-se.**

### Bloco 8 — Quem conduz (enxuto)

> **Quem conduz essa jornada**
>
> *(Foto do casal)*
>
> **Maycko & Marcela**
>
> Há mais de duas décadas construindo aquilo que hoje ensinam para outros casais.
>
> [Botão: Conheça nossa história →]

## Ajustes em outras páginas

### /metodo
- Cortar/reduzir bloco **FormatoEncontros** (detalhes operacionais — mover pra FAQ da /mentoria ou depois da aplicação)
- Focar em **"como conduzimos a transformação"** — processo, não features

### /mentoria
- Focar em **"como é viver isso na prática"** — depoimentos, calculadora, investimento, garantia

### /sobre
- Já enxugado. Manter estrutura atual da V1.

## O que NÃO fazer

- Não copiar Home Mentores em /sobre (bio completa fica só em /sobre)
- Não copiar seção de método detalhada na Home (fica só em /metodo)
- Não usar "salvar / restaurar / superar" — é vocabulário de crise
- Não centrar tudo em Maycko e Marcela — construir a marca ELEVEM-SE

## Impacto técnico previsto

Componentes que mudarão:
- `Hero.tsx` — mantém (já foi refeito na V1 pra falar do visitante)
- **`Manifesto.tsx`** — REESCREVER (vira "A verdade que poucos casais percebem")
- Novo componente `EvolucaoSemCrise.tsx` — bloco pós-Dores
- **`Conceito.tsx`** — REESCREVER como "Filosofia Elevem-se" (foco na marca, não nos 3 pilares atuais)
- **`Mentores.tsx`** — ENXUGAR pra apresentação curta + CTA sobre
- `Transformacao.tsx` — manter ou fundir com "Resultados esperados"
- `MetodoResumo.tsx` — revisar copy pra alinhar com "visão geral" (não detalhes)
- `FormatoEncontros.tsx` (em /metodo) — REDUZIR ou MOVER pra FAQ

## Rollback

Se V2 não convencer:
```bash
git reset --hard v1.0
```

V1 sobrevive intacta como snapshot canônico.
