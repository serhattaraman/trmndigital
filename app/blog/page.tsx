'use client'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import styles from './page.module.css'

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
    slug: 'diyarbakir-web-site-yaptirirken-dogru-secim-nasil-yapilir',
    title: 'Diyarbakır\'da Web Site Yaptırırken Doğru Seçim Nasıl Yapılır?',
    excerpt: 'Diyarbakır\'da web tasarım hizmeti alırken nelere dikkat etmelisiniz? Yerel ve uzak hizmet sağlayıcılar arasında nasıl seçim yaparsınız?',
    category: 'Diyarbakır Web Tasarım',
    date: '8 Mart 2025',
    readTime: '7 dk okuma',
    featured: false,
  },
]

const categories = ['Tümü', 'Web Tasarım', 'Özel Yazılım', 'SEO', 'Google Ads Landing Page', 'Diyarbakır Web Tasarım', 'İşletmeler için Dijital Çözümler', 'Kurumsal Web Sitesi']

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const rest = posts.filter(p => !p.featured)

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
          <div className="container">
            <div className={styles.categories}>
              {categories.map((c, i) => (
                <span key={c} className={`${styles.catChip} ${i === 0 ? styles.catActive : ''}`}>{c}</span>
              ))}
            </div>

            <div className={styles.featuredGrid}>
              {featured.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.featuredCard}>
                  <div className={styles.featuredImg}>
                    <span>📝</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.catBadge}>{post.category}</span>
                      <span className={styles.featBadge}>ÖNE ÇIKAN</span>
                    </div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <div className={styles.cardInfo}>
                        <span><Clock size={12} />{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <span className={styles.readMore}>Okumaya Devam <ArrowRight size={13} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.postGrid}>
              {rest.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                  <div className={styles.postCat}>
                    <Tag size={12} /> {post.category}
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postInfo}>
                    <span><Clock size={12} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
