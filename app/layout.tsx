import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import dynamic from 'next/dynamic'
import { Inter, Syne } from 'next/font/google'
const Chatbot = dynamic(() => import('@/components/Chatbot/Chatbot'), { ssr: false })
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'), { ssr: false })
const StickyBar = dynamic(() => import('@/components/StickyBar'), { ssr: false })

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://trmndigital.com'),
  title: {
    default: 'TRMN Digital | Diyarbakır Yazılım Şirketi & Web Tasarım',
    template: '%s | TRMN Digital',
  },
  description: 'Diyarbakır yazılım şirketi TRMN Digital; özel yazılım çözümleri, kurumsal web tasarımı, CRM ve otomasyon sistemleri sunar. İşletmenizi dijitalle büyütün.',
  keywords: ['Diyarbakır yazılım şirketi', 'Diyarbakır web tasarım', 'Diyarbakır özel yazılım', 'kurumsal web sitesi Diyarbakır', 'Diyarbakır SEO ajansı', 'CRM yazılımı Diyarbakır', 'yazılım ajansı Türkiye'],
  authors: [{ name: 'TRMN Digital' }],
  creator: 'TRMN Digital',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://trmndigital.com',
    siteName: 'TRMN Digital',
    title: 'TRMN Digital | Özel Yazılım & Dijital Çözümler',
    description: 'İşletmenize özel dijital sistemler geliştiriyoruz. Yönetim paneli, CRM, raporlama sistemleri ve kurumsal web tasarımı.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TRMN Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRMN Digital | Özel Yazılım & Dijital Çözümler',
    description: 'İşletmenize özel dijital sistemler geliştiriyoruz.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'google-site-verification-code' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "TRMN Digital",
              "description": "Diyarbakır merkezli özel yazılım geliştirme, yönetim paneli, CRM ve kurumsal web tasarımı ajansı.",
              "url": "https://trmndigital.com",
              "telephone": "+90-538-471-46-74",
              "email": "info@trmndigital.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bağlar",
                "addressRegion": "Diyarbakır",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.9144,
                "longitude": 40.2306
              },
              "areaServed": ["Diyarbakır", "Türkiye"],
              "priceRange": "₺₺₺",
              "serviceType": ["Web Tasarım", "Özel Yazılım", "Yönetim Paneli", "CRM", "SEO"],
              "sameAs": []
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <StickyBar />
          <Chatbot />
          <ExitIntentPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}
