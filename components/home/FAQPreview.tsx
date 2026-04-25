import Link from 'next/link'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import styles from './FAQPreview.module.css'

const faqs = [
  {
    q: 'Özel yazılım ile hazır site arasındaki fark nedir?',
    a: 'Hazır temalar genel amaçlıdır; herkes için tasarlanmıştır. Özel yazılım ise yalnızca sizin işletmenizin süreçlerine göre geliştirilir. Daha hızlı, daha güvenli ve tam olarak ihtiyacınıza uyar — fazladan hiçbir özellik olmaz, eksik hiçbir özellik de.',
  },
  {
    q: 'Web sitesi ne kadar sürede teslim edilir?',
    a: 'Projenin kapsamına göre değişir. Kurumsal tanıtım siteleri genellikle 2-3 haftada, yönetim paneli gibi karmaşık sistemler 6-12 haftada teslim edilir. Her proje için başlangıçta net bir zaman planı oluşturulur.',
  },
  {
    q: 'Yönetim paneli eklenebilir mi?',
    a: 'Evet, geliştirdiğim sistemlerin büyük bölümü yönetim panellidir. İçerik yönetimi, form yanıtları, müşteri takibi gibi tüm verileri kolayca yönetebilirsiniz — teknik bilgi gerektirmez.',
  },
  {
    q: 'Projeye sonradan yeni özellik eklenebilir mi?',
    a: 'Kesinlikle. Modüler mimariyle geliştirilen sistemlere her zaman yeni özellik eklemek mümkündür. Uzun vadeli destek hizmetimle projeniz sürekli büyüyebilir.',
  },
  {
    q: 'Google Ads için özel açılış sayfası yapılıyor mu?',
    a: 'Evet. Dönüşüm odaklı, hızlı yüklenen ve reklam trafiğini müşteriye çeviren landing page\'ler geliştiriyorum. Google Ads ve Meta Ads kampanyalarınıza özel, A/B test uyumlu yapılar.',
  },
]

export default function FAQPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className="section-label">Sık Sorulan Sorular</div>
            <h2 className="section-title">Aklınızdaki <span>Soruların</span> Cevabı</h2>
            <p className="section-desc">
              Daha fazla sorunuz mu var? Hepsini cevaplamaktan memnuniyet duyarım.
            </p>
            <div className={styles.leftCtas}>
              <Link href="/sss" className="btn btn-outline">
                Tüm Sorular <ArrowRight size={16} />
              </Link>
              <Link href="/teklif-al" className="btn btn-primary">
                Projenizi Konuşalım
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            {faqs.map((faq, i) => (
              <details key={i} className={styles.item}>
                <summary className={styles.q}>
                  {faq.q}
                  <span className={styles.icon}><Plus size={16} className={styles.plus} /><Minus size={16} className={styles.minus} /></span>
                </summary>
                <p className={styles.a}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
