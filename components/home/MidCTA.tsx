import Link from 'next/link'
import { MessageCircle, ArrowRight, Phone } from 'lucide-react'
import styles from './MidCTA.module.css'

interface MidCTAProps {
  headline?: string
  sub?: string
  variant?: 'default' | 'urgent' | 'soft'
}

export default function MidCTA({
  headline = 'Sisteminizi haftalarca ertelemek zorunda değilsiniz.',
  sub = 'Yarın hâlâ Excel ile uğraşıyor olacaksınız — ya da bugün bir adım atıyorsunuz.',
  variant = 'default',
}: MidCTAProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.urgencyDot} />
            <div>
              <h2 className={styles.headline}>{headline}</h2>
              <p className={styles.sub}>{sub}</p>
            </div>
          </div>
          <div className={styles.ctas}>
            <Link href="/teklif-al" className="btn btn-primary btn-lg">
              Ücretsiz Planlama <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/905384714674?text=Merhaba%2C%20proje%20hakk%C4%B1nda%20konu%C5%9Fmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="tel:+905384714674" className="btn btn-ghost btn-lg">
              <Phone size={16} /> Hemen Ara
            </a>
          </div>
        </div>
        <div className={styles.guarantee}>
          ✓ İlk görüşme tamamen ücretsiz &nbsp;&nbsp; ✓ 24 saat içinde yanıt &nbsp;&nbsp; ✓ Taahhüt yok
        </div>
      </div>
    </section>
  )
}
