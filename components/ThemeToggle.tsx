'use client'
import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const [toast, setToast] = useState<string | null>(null)

  const handleToggle = () => {
    toggle()
    const msg = theme === 'dark' ? '☀️ Aydınlık moda geçildi' : '🌙 Koyu moda geçildi'
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className={styles.toggle}
        aria-label={theme === 'dark' ? 'Aydınlık moda geç' : 'Koyu moda geç'}
        title={theme === 'dark' ? 'Aydınlık Mod' : 'Koyu Mod'}
      >
        <span className={`${styles.track} ${theme === 'light' ? styles.light : ''}`}>
          <span className={styles.thumb}>
            {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
          </span>
        </span>
      </button>

      {toast && (
        <div className={styles.toast}>
          {toast}
        </div>
      )}
    </>
  )
}
