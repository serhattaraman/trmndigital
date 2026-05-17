'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Code2 } from 'lucide-react'
import styles from './Navbar.module.css'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

const navLinks = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { 
    label: 'Hizmetler', 
    href: '/hizmetler', 
    hasDropdown: true,
    children: [
      { label: 'Kurumsal Web Tasarım', href: '/kurumsal-web-tasarim' },
      { label: 'Google Ads Yönetimi', href: '/google-ads' },
      { label: 'Özel Yazılım Çözümleri', href: '/hizmetler/ozel-yazilim' },
      { label: 'Otomasyon & Entegrasyon', href: '/hizmetler/otomasyon' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss' },
    ]
  },
  { label: 'Google Ads', href: '/google-ads' },
  { label: 'Kurumsal Web Tasarım', href: '/kurumsal-web-tasarim' },
  { label: 'Blog', href: '/blog' },
  { label: 'Süreç', href: '/surec' },
  { label: 'Projelerimiz', href: '/projeler' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href
  const isChildActive = (children?: { href: string }[]) => 
    children?.some(child => pathname === child.href)

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo.png" 
                alt="TRMN Digital" 
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
                  <button className={`${styles.navLink} ${(isActive(link.href) || isChildActive(link.children)) ? styles.active : ''}`}>
                    {link.label} <ChevronDown size={14} className={dropdownOpen ? styles.chevronOpen : ''} />
                  </button>
                  {dropdownOpen && (
                    <div className={styles.dropdown}>
                      {link.children!.map(child => (
                        <Link 
                          key={child.href} 
                          href={child.href} 
                          className={`${styles.dropdownItem} ${isActive(child.href) ? styles.active : ''}`}
                        >
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
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.ctas}>
              <ThemeToggle />
              <Link href="/iletisim" className={`btn btn-ghost btn-sm ${isActive('/iletisim') ? 'active' : ''}`}>İletişim</Link>
              <Link href="/teklif-al" className={`btn btn-primary btn-sm ${isActive('/teklif-al') ? 'active' : ''}`}>Teklif Al</Link>
            </div>

            {/* Mobilde hamburger yanında her zaman görünür toggle */}
            <div className={styles.mobileThemeWrap}>
              <ThemeToggle />
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
                <Link 
                  href={link.href} 
                  className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ''}`} 
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && link.children?.map(child => (
                  <Link 
                    key={child.href} 
                    href={child.href} 
                    className={`${styles.mobileSubLink} ${isActive(child.href) ? styles.active : ''}`} 
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            {/* Tema geçişi — mobil menü içi */}
            <div className={styles.mobileThemeRow}>
              <span className={styles.mobileThemeLabel}>
                Tema
              </span>
              <ThemeToggle />
            </div>

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
