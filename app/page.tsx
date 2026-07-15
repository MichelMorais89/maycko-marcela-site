import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { BlocoElevarSe } from '@/components/home/BlocoElevarSe'
import { Dores } from '@/components/home/Dores'
import { Manifesto } from '@/components/home/Manifesto'
import { Depoimentos } from '@/components/home/Depoimentos'
import { FinalCta } from '@/components/home/FinalCta'

export const metadata: Metadata = {
  title: 'Elevem-se, Mentoria para Casais',
  description:
    'Elevar-se é escolher crescer antes que a rotina escolha por vocês. Mentoria de casais Maycko e Marcela, 12 meses, 3 fases, um casamento extraordinário.',
}

export default function HomePage() {
  return (
    <>
      {/* Bloco 1, Hero (escuro + foto + marca d'água breathing dourado) */}
      <Hero />

      {/* Bloco 2, O que é elevar-se? (bege, editorial, zoom vinho) */}
      <BlocoElevarSe />

      {/* Bloco 3, Dores (escuro + foto casal) */}
      <Dores />

      {/* Bloco 4, Manifesto EvolucaoSemCrise em fundo bege */}
      <Manifesto />

      {/* Bloco 5, Depoimentos (ivory) */}
      <Depoimentos />

      {/* Bloco 7, Final CTA (escuro + foto) */}
      <FinalCta />
    </>
  )
}
