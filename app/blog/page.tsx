import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import BlogClient from '@/components/blog/BlogClient'

const posts = [
  {
    slug: 'kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli',
    title: 'Kurumsal Web Sitesi Yaptırırken Nelere Dikkat Edilmeli?',
    excerpt: 'Kurumsal web siteniz firmanızın dijital vitrindir. Yanlış bir tercih, rakiplerinize müşteri kaybettirmenize yol açabilir. İşte dikkat etmeniz gereken kritik noktalar.',
    category: 'Kurumsal Web Sitesi',
    date: '15 Nisan 2025',
    readTime: '7 dk okuma',
    featured: true,
  },
  {
    slug: 'ozel-yazilim-mi-hazir-sistem-mi',
    title: 'Özel Yazılım mı, Hazır Sistem mi? Doğru Seçimi Yapın',
    excerpt: 'WordPress, hazır CRM veya özel yazılım — hangisi işletmeniz için daha avantajlı? Her iki seçeneği gerçek senaryolarla karşılaştırıyoruz.',
    category: 'Özel Yazılım',
    date: '8 Nisan 2025',
    readTime: '9 dk okuma',
    featured: true,
  },
  {
    slug: 'google-ads-icin-donusum-odakli-site-nasil-hazirlanir',
    title: 'Google Ads İçin Dönüşüm Odaklı Site Nasıl Hazırlanır?',
    excerpt: 'Reklam harcamanız yüksek ama dönüşüm düşük mü? Sorun genellikle reklamda değil, açılış sayfasındadır. Landing page optimizasyonunun tam kılavuzu.',
    category: 'Google Ads Landing Page',
    date: '1 Nisan 2025',
    readTime: '11 dk okuma',
    featured: false,
  },
  {
    slug: 'kucuk-isletmeler-icin-profesyonel-web-sitesi-neden-onemlidir',
    title: 'Küçük İşletmeler İçin Profesyonel Web Sitesi Neden Önemlidir?',
    excerpt: 'Sosyal medya hesabı yeterli değil mi? Müşterilerinizin %63\'ü satın almadan önce web sitesi araştırıyor.',
    category: 'İşletmeler için Dijital Çözümler',
    date: '22 Mart 2025',
    readTime: '6 dk okuma',
    featured: false,
  },
  {
    slug: 'yonetim-panelli-site-isletmelere-ne-kazandirir',
    title: 'Yönetim Panelli Site İşletmelere Ne Kazandırır?',
    excerpt: 'Müşteri bilgilerini Excel\'de tutmaktan, form yanıtlarını e-postada aramaktan bıktınız mı? Özel yönetim paneli tam bu sorunu çözer.',
    category: 'Özel Yazılım',
    date: '15 Mart 2025',
    readTime: '8 dk okuma',
    featured: false,
  },
  {
    slug: 'diyarbakirdaki-isletmeler-icin-dijital-donusum-rehberi',
    title: 'Diyarbakır\'daki İşletmeler İçin Dijital Dönüşüm Rehberi',
    excerpt: 'Diyarbakır\'da faaliyet gösteren KOBİ ve kurumsal firmalar için dijitalleşmenin yol haritası. Nereden başlamalı? Hangi araçları kullanmalı?',
    category: 'Dijital Strateji',
    date: '5 Mayıs 2025',
    readTime: '10 dk okuma',
    featured: true,
  },
  {
    slug: 'web-tasarim-fiyatlarini-belirleyen-5-kritik-faktor',
    title: 'Web Tasarım Fiyatlarını Belirleyen 5 Kritik Faktör',
    excerpt: 'Bir web sitesi neden 5.000 TL iken diğeri 50.000 TL? Maliyetleri ve kalite farkını belirleyen detayları şeffaflıkla açıklıyoruz.',
    category: 'Web Tasarım',
    date: '3 Mayıs 2025',
    readTime: '6 dk okuma',
    featured: false,
  },
  {
    slug: 'dogru-web-tasarim-ajansi-nasil-secilir',
    title: 'Doğru Web Tasarım Ajansı Nasıl Seçilir?',
    excerpt: 'Web tasarım hizmeti alırken nelere dikkat etmelisiniz? Yerel ve global hizmet sağlayıcılar arasında nasıl seçim yaparsınız?',
    category: 'Dijital Strateji',
    date: '8 Mart 2025',
    readTime: '7 dk okuma',
    featured: false,
  },
]

const categories = ['Tümü', 'Web Tasarım', 'Özel Yazılım', 'SEO', 'Google Ads Landing Page', 'Dijital Strateji', 'İşletmeler için Dijital Çözümler', 'Kurumsal Web Sitesi']

export const metadata = {
  title: 'Blog & Rehberler | TRMN Digital',
  description: 'Web tasarımı, özel yazılım geliştirme ve dijital strateji üzerine uzman görüşleri ve rehberler.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label">Blog & İçerik</div>
            <h1 className="section-title">Web, Yazılım ve <span>Dijital Dönüşüm</span> Rehberleri</h1>
            <p className="section-desc">Gerçekten faydalı, uzmanlık odaklı içerikler. Kararlarınızı doğru vermenize yardımcı olmak için.</p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <BlogClient posts={posts} categories={categories} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
