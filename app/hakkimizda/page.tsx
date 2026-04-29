import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Code2, BarChart3, Shield, Clock, MessageSquare, CheckCircle2, ArrowRight, Users, Target, Rocket } from 'lucide-react'

import styles from './hakkimizda.module.css'

export const metadata: Metadata = {
  title: 'Hakkımızda | TRMN Digital — Profesyonel Dijital Çözüm Ajansı',
  description: 'TRMN Digital, işletmelerin dijitalde daha profesyonel görünmesi ve süreçlerini verimli yönetmesi için web tasarım, özel yazılım ve dijital reklam çözümleri sunan bir ajanstır.',
  alternates: { canonical: 'https://trmndigital.com/hakkimizda' },
}

const strengths = [
  { icon: Code2, title: 'Özel Yazılım ve Sistem Geliştirme', desc: 'Her projeyi kurumunuza özgün bir çözüm olarak ele alıyoruz. Hazır kalıplar yerine, tamamen iş akışınıza uygun, sürdürülebilir ve performanslı sistemler inşa ediyoruz.' },
  { icon: BarChart3, title: 'Veri ve Strateji Odaklılık', desc: 'Sadece tasarım değil, iş sonuçları odaklıyız. Google Ads yönetiminden CRM sistemlerine kadar her adımda veriyi analiz ediyor, büyümenizi destekleyecek stratejiler kuruyoruz.' },
  { icon: Shield, title: 'Güvenilir ve Ölçeklenebilir Yapı', desc: 'Projelerimizde en güncel ve güvenli teknolojileri kullanıyoruz. İşletmeniz büyüdükçe sizinle birlikte büyüyebilen, esnek ve güvenli bir dijital altyapı sağlıyoruz.' },
  { icon: Clock, title: 'Zamanında ve Şeffaf Teslimat', desc: 'Proje başlangıcında belirlenen takvime sadık kalarak ilerliyoruz. Süreç boyunca düzenli bilgilendirmeler yaparak projenin her aşamasında şeffaflık sağlıyoruz.' },
  { icon: MessageSquare, title: 'Kurumsal İletişim Dili', desc: 'Teknik süreçleri sizin anlayacağınız dilde paylaşıyoruz. Sorularınıza hızlı yanıt alabileceğiniz, çözüm odaklı bir iletişim köprüsü kuruyoruz.' },
  { icon: CheckCircle2, title: 'Sürekli Destek ve Gelişim', desc: 'Proje tesliminden sonra da çözüm ortağınız olmaya devam ediyoruz. Bakım, güncelleme ve yeni özellik ekleme süreçlerinde her zaman yanınızdayız.' },
]

const skills = [
  'Kurumsal Web Tasarım', 'Google Ads Yönetimi',
  'Özel Yazılım Çözümleri', 'CRM & ERP Sistemleri',
  'Süreç Otomasyonları', 'API Entegrasyonları',
  'E-Ticaret Çözümleri', 'Dönüşüm Optimizasyonu',
  'SEO Stratejileri', 'Raporlama Sistemleri',
  'Dijital Kimlik Oluşturma', 'SaaS Geliştirme',
]

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav className="breadcrumb">
              <Link href="/">Anasayfa</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Hakkımızda</span>
            </nav>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.grid}>
              {/* Agency Profile */}
              <div className={styles.sidebar}>
                <div className={styles.profileCard}>
                  <div className={styles.profileIconWrap}>
                    <Users size={48} />
                  </div>
                  <h1 className={styles.profileTitle}>TRMN Digital</h1>
                  <p className={styles.profileTag}>Dijital Çözüm Ajansı</p>
                  <p className={styles.profileDesc}>Kurumsal Büyüme Ortağınız</p>
                  
                  <div className={styles.statsGrid}>
                    {[['2024+', 'Kuruluş'], ['40+', 'Mutlu Marka'], ['100%', 'Başarı Oranı']].map(([n, l]) => (
                      <div key={l} className={styles.statItem}>
                        <div className={styles.statNum}>{n}</div>
                        <div className={styles.statLabel}>{l}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/teklif-al" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Teklif Alın <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className="section-label">Biz Kimiz?</div>
                <h2 className="section-title" style={{ marginBottom: 24 }}>
                  Dijitalde Sadece Varlık Değil,<br /><span>Güçlü Sistemler İnşa Ediyoruz</span>
                </h2>
                <div className={styles.mainText}>
                  <p>
                    TRMN Digital, işletmelerin dijital dünyada daha profesyonel görünmesi, daha fazla müşteriye ulaşması ve operasyonel süreçlerini verimli yönetmesi için uçtan uca çözümler üreten bir dijital çözüm markasıdır.
                  </p>
                  <p>
                    Ekibimiz; kurumsal web tasarım, özel yazılım geliştirme, Google Ads yönetimi ve otomasyon sistemleri konularında uzmanlaşmış profesyonellerden oluşmaktadır. "Her markaya aynı tasarım" anlayışını reddediyor, her işletmenin kendine has ihtiyaçlarına ve hedef kitlesine özel stratejiler geliştiriyoruz.
                  </p>
                  <p>
                    Amacımız; işletmenizin sadece bir web sitesine sahip olması değil, bu sitenin bir satış ve verimlilik makinesine dönüşmesidir. Teknik altyapıdan reklam yönetimine kadar tüm süreçleri bir bütün olarak ele alıyor, markanızın dijital kimliğini geleceğe hazırlıyoruz.
                  </p>
                </div>

                <h3 className={styles.skillsTitle}>
                  Çözüm Odaklı Hizmetlerimiz
                </h3>
                <div className={styles.skillsList}>
                  {skills.map(s => (
                    <span key={s} className={styles.skillBadge}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="section-label" style={{ marginBottom: 20 }}>Neden Farklıyız?</div>
            <h2 className="section-title" style={{ marginBottom: 40 }}>İşletmeniz İçin <span>Güvenli Bir Adım</span></h2>
            <div className="grid-3">
              {strengths.map(s => (
                <div key={s.title} className="card">
                  <div className="feature-icon"><s.icon size={20} /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Sizin İçin Neler Yapabiliriz?</h2>
              <p className={styles.ctaDesc}>
                Gelin, markanızın dijital potansiyelini birlikte keşfedelim. İhtiyaçlarınıza özel stratejilerimizi dinlemek için bir görüşme planlayın.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Teklif İsteyin <ArrowRight size={18} />
                </Link>
                <Link href="/iletisim" className="btn btn-outline btn-lg">
                  Bizimle Tanışın
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
