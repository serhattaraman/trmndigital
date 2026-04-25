import Link from 'next/link'
import { MessageCircle, ArrowRight, Phone, Clock } from 'lucide-react'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.label}>Son Bir Şey</div>
          <h2 className={styles.headline}>
            Sisteminiz yarın çalışmıyor.<br />
            <span>Bugün konuşalım.</span>
          </h2>
          <p className={styles.sub}>
            İlk görüşme tamamen ücretsiz. Projenizi anlıyorum, çözüm önerim ve net fiyatı
            <strong> 24 saat içinde</strong> sunuyorum. Hiçbir taahhüde gerek yok.
          </p>

          <div className={styles.options}>
            <Link href="/teklif-al" className={styles.optionCard}>
              <div className={styles.optionIcon}>📋</div>
              <div>
                <div className={styles.optionTitle}>Form ile Teklif Al</div>
                <div className={styles.optionDesc}>Proje detaylarını anlatın, size özel plan çıkarayım</div>
              </div>
              <ArrowRight size={20} className={styles.optionArrow} />
            </Link>
            <a
              href="https://wa.me/905384714674?text=Merhaba%20Serhat%20Bey%2C%20i%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20geli%C5%9Ftirmek%20istiyorum.%20Konu%C5%9Fabilir%20miyiz%3F"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.optionCard} ${styles.optionWa}`}
            >
              <div className={styles.optionIcon}>💬</div>
              <div>
                <div className={styles.optionTitle}>WhatsApp&apos;tan Yaz</div>
                <div className={styles.optionDesc}>Hızlı yanıt için ideal — genellikle 1-2 saat içinde</div>
              </div>
              <ArrowRight size={20} className={styles.optionArrow} />
            </a>
            <a href="tel:+905384714674" className={styles.optionCard}>
              <div className={styles.optionIcon}>📞</div>
              <div>
                <div className={styles.optionTitle}>Hemen Arayın</div>
                <div className={styles.optionDesc}>Mesai saatlerinde doğrudan konuşalım</div>
              </div>
              <ArrowRight size={20} className={styles.optionArrow} />
            </a>
          </div>

          <div className={styles.guarantees}>
            <div className={styles.gItem}><Clock size={14} /> 24 saat içinde yanıt garantisi</div>
            <div className={styles.gItem}>✓ İlk görüşme tamamen ücretsiz</div>
            <div className={styles.gItem}>✓ Hiçbir taahhüt yok</div>
            <div className={styles.gItem}>✓ Gizlilik politikası</div>
          </div>
        </div>
      </div>
    </section>
  )
}
