'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import styles from './page.module.css'

export default function IletisimPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('ad_soyad'),
      phone: formData.get('telefon'),
      email: formData.get('eposta'),
      service: formData.get('hizmet'),
      description: formData.get('mesaj'),
      source: 'İletişim Formu'
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push('/tesekkurler')
      } else {
        const result = await response.json()
        setError(result.error || 'Bir hata oluştu, lütfen tekrar deneyin.')
      }
    } catch (err) {
      setError('Sistem hatası oluştu. Lütfen WhatsApp üzerinden ulaşın.')
    } finally {
      setLoading(false)
    }
  }

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
              <span>İletişim</span>
            </nav>
            <div className="section-label">İletişim</div>
            <h1 className="section-title">Projenizi <span>Konuşalım</span></h1>
            <p className="section-desc">
              Aklınızdaki projeyi anlatın. 24 saat içinde geri dönüş garantisi veriyoruz.
            </p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.grid}>
              {/* Contact Info */}
              <div className={styles.info}>
                <div className={styles.infoCards}>
                  <a href="tel:+905384714674" className={styles.infoCard}>
                    <div className={styles.infoIcon}><Phone size={20} /></div>
                    <div>
                      <div className={styles.infoLabel}>Telefon</div>
                      <div className={styles.infoValue}>+90 538 471 46 74</div>
                      <div className={styles.infoNote}>Haf. içi 09:00–18:00</div>
                    </div>
                  </a>
                  <a href="mailto:info@trmndigital.com" className={styles.infoCard}>
                    <div className={styles.infoIcon}><Mail size={20} /></div>
                    <div>
                      <div className={styles.infoLabel}>E-posta</div>
                      <div className={styles.infoValue}>info@trmndigital.com</div>
                      <div className={styles.infoNote}>24 saat içinde yanıt</div>
                    </div>
                  </a>
                  <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
                    <div className={styles.infoIcon} style={{ background: 'rgba(37,211,102,0.12)', borderColor: 'rgba(37,211,102,0.25)', color: '#25D366' }}><MessageCircle size={20} /></div>
                    <div>
                      <div className={styles.infoLabel}>WhatsApp</div>
                      <div className={styles.infoValue}>+90 538 471 46 74</div>
                      <div className={styles.infoNote}>Hızlı yanıt için ideal</div>
                    </div>
                  </a>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><MapPin size={20} /></div>
                    <div>
                      <div className={styles.infoLabel}>Merkez Ofis</div>
                      <div className={styles.infoValue}>Bağlar, Diyarbakır</div>
                      <div className={styles.infoNote}>Tüm Türkiye&apos;ye dijital hizmet</div>
                    </div>
                  </div>
                </div>

                <div className={styles.promiseBox}>
                  <h3>Yanıt Garantisi</h3>
                  {[
                    'Form ile başvuru → 24 saat içinde yanıt',
                    'WhatsApp → Genellikle 1–2 saat içinde',
                    'Telefon → Mesai saatlerinde hemen',
                    'İlk görüşme tamamen ücretsiz',
                  ].map(p => (
                    <div key={p} className={styles.promise}>
                      <CheckCircle2 size={14} /> {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.formWrap}>
                <h2 className={styles.formTitle}>Mesaj Gönderin</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input name="honeypot" type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ad-soyad">Ad Soyad *</label>
                      <input id="ad-soyad" name="ad_soyad" type="text" className="form-input" placeholder="Adınız Soyadınız" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="telefon">Telefon *</label>
                      <input id="telefon" name="telefon" type="tel" className="form-input" placeholder="+90 538 471 46 74" required />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="eposta">E-posta *</label>
                      <input id="eposta" name="eposta" type="email" className="form-input" placeholder="ornek@firma.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="firma">Firma Adı</label>
                      <input id="firma" name="firma" type="text" className="form-input" placeholder="Firma adınız (opsiyonel)" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="hizmet">İlgilendiğiniz Hizmet</label>
                    <select id="hizmet" name="hizmet" className="form-input">
                      <option value="">Hizmet seçin</option>
                      <option>Kurumsal Web Tasarım</option>
                      <option>Google Ads Yönetimi</option>
                      <option>Özel Yönetim Paneli</option>
                      <option>CRM / ERP Sistemleri</option>
                      <option>Otomasyon & Entegrasyon</option>
                      <option>Bakım & Teknik Destek</option>
                      <option>Diğer / Bilmiyorum</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="mesaj">Proje Detayı *</label>
                    <textarea id="mesaj" name="mesaj" className="form-input" placeholder="Projenizi kısaca anlatın. Ne tür bir sistem istiyorsunuz?" rows={5} required />
                  </div>

                  {error && <p className={styles.error}>{error}</p>}

                  <button type="submit" disabled={loading} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    {loading ? <><Loader2 size={18} className="animate-spin" /> Gönderiliyor...</> : 'Mesaj Gönder →'}
                  </button>
                  <p className={styles.formNote}>
                    Form bilgileriniz yalnızca proje görüşmesi amacıyla kullanılır.
                    <Link href="/gizlilik-politikasi"> Gizlilik Politikası</Link>
                  </p>
                </form>
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
