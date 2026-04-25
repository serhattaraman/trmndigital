'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, Users, BarChart3, Settings, 
  Search, Bell, CheckCircle2, Clock, 
  ArrowUpRight, MoreVertical, Plus, MessageCircle
} from 'lucide-react'
import styles from './InteractiveDemo.module.css'

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label" style={{ color: 'var(--accent)', background: 'var(--accent-glow)', borderColor: 'var(--border-accent)' }}>
            Canlı Sistem Örneği
          </div>
          <h2 className="section-title">İşletmenizi <span>Böyle Yöneteceksiniz</span></h2>
          <p className="section-desc">
            Bu gördüğünüz panel, tamamen sizin süreçlerinize göre sıfırdan geliştirilebilir. 
            Hazır tema değil, %100 size özel bir dijital merkez.
          </p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <div className={styles.dots}><span /><span /><span /></div>
            <div className={styles.address}>panel.isletmeniz.com</div>
          </div>
          
          <div className={styles.panelContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sideBrand}>TRMN Admin</div>
              <nav className={styles.sideNav}>
                <button className={`${styles.sideItem} ${activeTab === 'dashboard' ? styles.active : ''}`} onClick={() => setActiveTab('dashboard')}>
                  <LayoutDashboard size={18} /> Dashboard
                </button>
                <button className={`${styles.sideItem} ${activeTab === 'musteri' ? styles.active : ''}`} onClick={() => setActiveTab('musteri')}>
                  <Users size={18} /> Müşteriler
                </button>
                <button className={`${styles.sideItem} ${activeTab === 'analiz' ? styles.active : ''}`} onClick={() => setActiveTab('analiz')}>
                  <BarChart3 size={18} /> Analiz
                </button>
                <div className={styles.navSep} />
                <button className={styles.sideItem}><Settings size={18} /> Ayarlar</button>
              </nav>
            </aside>

            {/* Main Panel */}
            <main className={styles.mainPanel}>
              <header className={styles.panelHeader}>
                <div className={styles.search}>
                  <Search size={16} /> <input type="text" placeholder="Sistemde ara..." readOnly />
                </div>
                <div className={styles.headerActions}>
                  <div className={styles.bell}><Bell size={18} /><span className={styles.notifBadge} /></div>
                  <div className={styles.userProfile}>ST</div>
                </div>
              </header>

              <div className={styles.panelContent}>
                <div className={styles.statsRow}>
                  {[
                    { label: 'Toplam Satış', val: '₺124,500', trend: '+12%', color: 'var(--accent)' },
                    { label: 'Yeni Başvuru', val: '84', trend: '+5%', color: '#10B981' },
                    { label: 'Aktif Proje', val: '12', trend: '0%', color: '#8B5CF6' },
                  ].map(s => (
                    <div key={s.label} className={styles.statCard}>
                      <div className={styles.statLabel}>{s.label}</div>
                      <div className={styles.statVal} style={{ color: s.color }}>{s.val}</div>
                      <div className={styles.statTrend}><ArrowUpRight size={12} /> {s.trend}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.mainGrid}>
                  <div className={styles.tableCard}>
                    <div className={styles.cardHead}>
                      <h3>Son İşlemler</h3>
                      <button className={styles.addBtn}><Plus size={14} /> Yeni Ekle</button>
                    </div>
                    <div className={styles.fakeTable}>
                      {[
                        { name: 'Ahmet Yılmaz', type: 'Eğitim Seti', status: 'Onaylandı', color: '#10B981' },
                        { name: 'Zeynep Kaya', type: 'Danışmanlık', status: 'Beklemede', color: '#F59E0B' },
                        { name: 'Murat Demir', type: 'Yazılım', status: 'İşlemde', color: '#3B82F6' },
                      ].map(row => (
                        <div key={row.name} className={styles.tableRow}>
                          <div className={styles.rowInfo}>
                            <div className={styles.rowAvatar}>{row.name[0]}</div>
                            <div>
                              <div className={styles.rowName}>{row.name}</div>
                              <div className={styles.rowSub}>{row.type}</div>
                            </div>
                          </div>
                          <div className={styles.rowStatus} style={{ background: `${row.color}15`, color: row.color }}>
                            {row.status}
                          </div>
                          <MoreVertical size={14} className={styles.rowMore} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.notifCard}>
                    <div className={styles.cardHead}><h3>Aktivite Akışı</h3></div>
                    <div className={styles.timeline}>
                      {[
                        { icon: CheckCircle2, text: 'Ödeme onaylandı', time: '5 dk önce', color: '#10B981' },
                        { icon: Clock, text: 'Yeni teklif iletildi', time: '1 saat önce', color: '#3B82F6' },
                        { icon: Users, text: 'Yeni müşteri kaydı', time: '3 saat önce', color: '#8B5CF6' },
                      ].map((item, i) => (
                        <div key={i} className={styles.timeItem}>
                          <div className={styles.timeLine} />
                          <div className={styles.timeIcon} style={{ color: item.color }}><item.icon size={14} /></div>
                          <div className={styles.timeContent}>
                            <div className={styles.timeText}>{item.text}</div>
                            <div className={styles.timeAgo}>{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className={styles.footer}>
          <p>Bu paneldeki her buton, her grafik ve her akış sizin ihtiyacınıza göre kodlanır.</p>
          <div className={styles.ctaRow}>
            <a href="/teklif-al" className="btn btn-primary btn-lg">Kendi Panelini Planla</a>
            <a href="https://wa.me/905384714674?text=Merhaba%2C%20demo%20paneli%20inceledim.%20%C4%B0%C5%9Fletmeme%20%C3%B6zel%20b%C3%B6yle%20bir%20yaz%C4%B1l%C4%B1m%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              <MessageCircle size={18} /> WhatsApp ile Sor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
