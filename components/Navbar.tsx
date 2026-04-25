'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Code2 } from 'lucide-react'
import styles from './Navbar.module.css'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

const navLinks = [
  { label: 'Hizmetler', href: '/hizmetler', hasDropdown: true,
    children: [
      { label: 'İş Takip Sistemi (Yeni)', href: '/is-takip-sistemi' },
      { label: 'Kurumsal Web Sitesi', href: '/kurumsal-web-sitesi' },
      { label: 'Özel Yönetim Paneli', href: '/hizmetler/yonetim-paneli' },
      { label: 'CRM & Operasyon Paneli', href: '/hizmetler/crm-operasyon' },
      { label: 'Eğitim Yönetim Sistemi', href: '/hizmetler/egitim-yonetim' },
      { label: 'Otomasyon & Entegrasyon', href: '/hizmetler/otomasyon' },
    ]
  },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Süreç', href: '/surec' },
  { label: 'Blog', href: '/blog' },
  { label: 'SSS', href: '/sss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo.png" 
                alt="TRMN Dijital" 
                width={120} 
                height={32} 
                className={styles.logoImg} 
                priority 
              />
            </Link>

            <div className={styles.links}>
              {navLinks.map(link => link.hasDropdown ? (
                <div key={link.label} className={styles.dropdownWrapper}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  <button className={styles.navLink}>
                    {link.label} <ChevronDown size={14} className={dropdownOpen ? styles.chevronOpen : ''} />
                  </button>
                  {dropdownOpen && (
                    <div className={styles.dropdown}>
                      {link.children!.map(child => (
                        <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                          {child.label}
                        </Link>
                      ))}
                      <Link href="/hizmetler" className={styles.dropdownAll}>
                        Tüm Hizmetleri Gör →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={styles.navLink}>{link.label}</Link>
              ))}
            </div>

            <div className={styles.ctas}>
              <ThemeToggle />
              <Link href="/iletisim" className="btn btn-ghost btn-sm">İletişim</Link>
              <Link href="/teklif-al" className="btn btn-primary btn-sm">Teklif Al</Link>
            </div>

            <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLinks}>
            {navLinks.map(link => (
              <div key={link.label}>
                <Link href={link.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.hasDropdown && link.children?.map(child => (
                  <Link key={child.href} href={child.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className={styles.mobileCtas}>
              <Link href="/iletisim" className="btn btn-outline" onClick={() => setMobileOpen(false)}>İletişim</Link>
              <Link href="/teklif-al" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Teklif Al</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
