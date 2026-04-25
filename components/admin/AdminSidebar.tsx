'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard, FolderOpen, PlusCircle, Image, Settings,
  LogOut, Code2, ChevronRight
} from 'lucide-react'
import styles from './AdminSidebar.module.css'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/projeler', label: 'Projeler', icon: FolderOpen },
  { href: '/admin/projeler/yeni', label: 'Yeni Proje', icon: PlusCircle },
  { href: '/admin/medya', label: 'Medya', icon: Image },
  { href: '/admin/ayarlar', label: 'Ayarlar', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}><Code2 size={20} /></div>
        <div>
          <div className={styles.brandName}>TRMN Admin</div>
          <div className={styles.brandSub}>Proje Yönetim Paneli</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {navItems.map(item => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href) && !(item.exact === false && pathname === '/admin')
          return (
            <Link key={item.href} href={item.href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
              <item.icon size={18} />
              <span>{item.label}</span>
              {isActive && <ChevronRight size={14} className={styles.chevron} />}
            </Link>
          )
        })}
      </nav>

      <div className={styles.footer}>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <LogOut size={16} /> Çıkış Yap
        </button>
        <Link href="/" target="_blank" className={styles.siteLink}>
          Siteyi Görüntüle →
        </Link>
      </div>
    </aside>
  )
}
