import type { Metadata } from 'next'
import { SobreHero } from '@/components/sobre/SobreHero'
import { SobreHistoria } from '@/components/sobre/SobreHistoria'
import { SobreMarcela } from '@/components/sobre/SobreMarcela'
import { SobreMaycko } from '@/components/sobre/SobreMaycko'
import { SobrePrincipios } from '@/components/sobre/SobrePrincipios'
import { SobreVideo } from '@/components/sobre/SobreVideo'
import { SobreLegado } from '@/components/sobre/SobreLegado'
import { SobreCTA } from '@/components/sobre/SobreCTA'

export const metadata: Metadata = {
  title: 'Sobre — Maycko & Marcela | Elevem-se',
  description:
    'Há mais de vinte anos caminhando juntos. Conheça a história de Maycko e Marcela, os mentores por trás do programa Elevem-se.',
  openGraph: {
    title: 'Sobre — Maycko & Marcela | Elevem-se',
    description:
      'Casados há treze anos, pais de três filhos. Ensinamos aquilo que construímos.',
    images: [{ url: '/photos/mentores-couple.jpg', width: 1200, height: 630 }],
  },
}

export default function SobrePage() {
  return (
    <>
      <SobreHero />
      <SobreHistoria />
      <SobreMarcela />
      <SobreMaycko />
      <SobrePrincipios />
      <SobreVideo />
      <SobreLegado />
      <SobreCTA />
    </>
  )
}
