import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Chatbot from '@/components/Chatbot/Chatbot'
import StickyBar from '@/components/StickyBar'

export const metadata: Metadata = {
  metadataBase: new URL('https://trmndigital.com'),
  title: {
    default: 'Serhat Taraman | Özel Yazılım & Web Geliştirme — Diyarbakır',
    template: '%s | TRMN Dijital',
  },
  description: 'Diyarbakır merkezli özel yazılım geliştirici. Yönetim paneli, CRM, iş takip sistemleri, kurumsal web sitesi ve işletmeye özel dijital çözümler. Ücretsiz keşif görüşmesi için hemen iletişime geçin.',
  keywords: ['özel yazılım geliştirme', 'web tasarım Diyarbakır', 'yönetim paneli', 'kurumsal web sitesi', 'CRM yazılım', 'iş takip sistemi', 'Diyarbakır yazılım', 'özel yazılım Türkiye'],
  authors: [{ name: 'Serhat Taraman' }],
  creator: 'Serhat Taraman',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://trmndigital.com',
    siteName: 'TRMN Dijital — Serhat Taraman',
    title: 'Serhat Taraman | Özel Yazılım & Web Geliştirme — Diyarbakır',
    description: 'İşletmenize özel dijital sistemler geliştiriyorum. Yönetim paneli, CRM, raporlama sistemleri ve kurumsal web sitesi.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TRMN Dijital — Serhat Taraman' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serhat Taraman | Özel Yazılım & Web Geliştirme',
    description: 'İşletmenize özel dijital sistemler geliştiriyorum.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'google-site-verification-code' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TRMN Dijital — Serhat Taraman",
              "description": "Özel yazılım geliştirme, yönetim paneli, CRM ve kurumsal web sitesi hizmetleri",
              "url": "https://trmndigital.com",
              "telephone": "+90-538-471-46-74",
              "email": "serhat_212048@hotmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bağlar",
                "addressRegion": "Diyarbakır",
                "streetAddress": "Şeyh Şamil, 21080",
                "addressCountry": "TR"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 37.9144, "longitude": 40.2306 },
              "areaServed": { "@type": "Country", "name": "Türkiye" },
              "priceRange": "₺₺₺",
              "serviceType": ["Web Geliştirme", "Özel Yazılım", "Yönetim Paneli", "CRM"],
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
        </ThemeProvider>
      </body>
    </html>
  )
}
