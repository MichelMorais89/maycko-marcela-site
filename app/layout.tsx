import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { spectral, mulish } from './fonts'
import { SiteNav } from '@/components/layout/SiteNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { MobileCTABar } from '@/components/layout/MobileCTABar'
import { Aurora } from '@/components/motion/Aurora'
import { DottedGrid } from '@/components/motion/DottedGrid'
import { GrainOverlay } from '@/components/motion/GrainOverlay'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import { FlameCursor } from '@/components/motion/FlameCursor'
import { LenisProvider } from '@/components/motion/LenisProvider'
import { NarrativeThread } from '@/components/motion/NarrativeThread'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais',
  description:
    'Mentoria exclusiva para casais empreendedores. 12 meses, duas fases, um método. Saia do automático com estrutura.',
  openGraph: {
    title: 'Elevem-se — Mentoria para Casais',
    description:
      'Para casais que já conquistaram muito e decidiram que o casamento também precisa evoluir no mesmo nível.',
    images: [{ url: '/photos/hero-couple.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${spectral.variable} ${mulish.variable}`}
    >
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" disableTransitionOnChange>
          <LenisProvider>
            {/* Global ambient layers */}
            <Aurora />
            <DottedGrid />
            <GrainOverlay />
            <ScrollProgress />
            <FlameCursor />
            <NarrativeThread />

            <a href="#conteudo" className="elv-skip">
              Pular para o conteúdo
            </a>
            <SiteNav active="/" />
            <main id="conteudo">{children}</main>
            <SiteFooter />
            <MobileCTABar />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
