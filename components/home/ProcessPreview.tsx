import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import styles from './ProcessPreview.module.css'

const steps = [
  {
    num: '01',
    title: 'İhtiyacınızı Anlıyoruz',
    desc: 'Teknik değil, iş odaklı konuşuyoruz. Neye ihtiyacınız olduğunu, hangi sorunları yaşadığınızı, hedeflerinizi öğreniyorum. Herhangi bir teknik bilgi gerekmez.',
    badge: 'Ücretsiz',
  },
  {
    num: '02',
    title: 'Size Özel Plan Çıkarıyoruz',
    desc: 'Görüşme sonrası; proje kapsamı, özellik listesi, zaman takvimi ve net fiyat içeren yazılı teklif sunuyorum. Sürpriz yok.',
    badge: 'Yazılı teklif',
  },
  {
    num: '03',
    title: 'Sistemi Geliştiriyoruz',
    desc: 'Onayınızın ardından geliştirme başlıyor. Haftalık ilerleme raporu alıyorsunuz. İlerlemeyi canlı izleyebiliyorsunuz.',
    badge: 'Şeffaf süreç',
  },
  {
    num: '04',
    title: 'Test Edip Yayına Alıyoruz',
    desc: 'Gerçek verilerle kapsamlı test. Sistemi size gösteriyorum, onayınızı alıyorum. Sonra canlıya alıyoruz. Eğitim ve dokümantasyon dahil.',
    badge: 'Eğitim dahil',
  },
  {
    num: '05',
    title: 'Yanınızda Olmaya Devam Ediyoruz',
    desc: 'Proje teslimi son değil, başlangıç. Yeni özellik, güncelleme, sorun — hepsinde ulaşabilirsiniz. Uzun vadeli destek garantisi.',
    badge: 'Uzun vadeli destek',
  },
]

export default function ProcessPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Çalışma Süreci</div>
          <h2 className="section-title">
            Projeniz Nasıl <span>Hayata Geçiyor?</span>
          </h2>
          <p className="section-desc">
            5 adımda öngörülebilir, şeffaf ve sonuç odaklı proje yönetimi.
            Her adımda ne olduğunu biliyorsunuz.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.numWrap}>
                  <span className={styles.num}>{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <span className={styles.stepBadge}>{step.badge}</span>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div>
            <h3>Başlamak için ne yapmalısınız?</h3>
            <p>Sadece birinci adımı atın — benim için ücretsiz, sizi hiçbir taahhüde bağlamaz.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/teklif-al" className="btn btn-primary btn-lg">1. Adımı Başlat <ArrowRight size={18} /></Link>
            <Link href="/surec" className="btn btn-outline">Tüm Süreci Gör</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
