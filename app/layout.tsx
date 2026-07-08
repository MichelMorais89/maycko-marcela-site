import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { spectral, mulish } from './fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais',
  description:
    'Mentoria exclusiva para casais empreendedores. 12 meses, duas fases, um método. Saia do automático com estrutura.',
  openGraph: {
    title: 'Elevem-se — Mentoria para Casais',
    description:
      'Para casais que já conquistaram muito e decidiram que o casamento também precisa evoluir no mesmo nível.',
    images: [{ url: '/photos/casal-01-web.jpg', width: 1200, height: 630 }],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
