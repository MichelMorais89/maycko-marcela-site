import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Prova } from '@/components/home/Prova'
import { Dores } from '@/components/home/Dores'
import { Conceito } from '@/components/home/Conceito'
import { MetodoResumo } from '@/components/home/MetodoResumo'
import { Mentores } from '@/components/home/Mentores'
import { Depoimentos } from '@/components/home/Depoimentos'
import { Legado } from '@/components/home/Legado'
import { FinalCta } from '@/components/home/FinalCta'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais Empreendedores',
  description:
    'Mentoria exclusiva para casais empreendedores. 12 meses, duas fases, um método. Saia do automático e construa um relacionamento estruturado, consciente e próspero.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Prova />
      <Dores />
      <Conceito />
      <MetodoResumo />
      <Mentores />
      <Depoimentos />
      <Legado />
      <FinalCta />
    </>
  )
}
