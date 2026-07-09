import type { Metadata } from 'next'
import { HeroMetodo } from '@/components/metodo/HeroMetodo'
import { FilosofiaMetodo } from '@/components/metodo/FilosofiaMetodo'
import { TimelineMetodo } from '@/components/metodo/TimelineMetodo'
import { ResultadoMetodo } from '@/components/metodo/ResultadoMetodo'

export const metadata: Metadata = {
  title: 'O Método — Elevem-se',
  description:
    'Doze meses estruturados em duas fases: Elevação Individual e Construção do Nós. Um caminho com começo, meio e resultado.',
  openGraph: {
    title: 'O Método Elevem-se — 12 meses que constroem um casamento para a vida toda',
    description:
      'Conheça cada mês do método: temas, exercícios e princípios que transformam casamentos comuns em casamentos extraordinários.',
    images: [{ url: '/photos/stock/casal-montanha-bw.jpg', width: 1200, height: 630 }],
  },
}

export default function MetodoPage() {
  return (
    <>
      <HeroMetodo />
      <FilosofiaMetodo />
      <TimelineMetodo />
      <ResultadoMetodo />
    </>
  )
}
