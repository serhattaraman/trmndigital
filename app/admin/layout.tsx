import type { Metadata } from 'next'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Admin Panel | TRMN Dijital',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell} data-theme="dark">
      <AdminSidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
