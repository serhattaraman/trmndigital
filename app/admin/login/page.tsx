'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Mail, Lock, LogIn, Code2, AlertCircle } from 'lucide-react'
import styles from './page.module.css'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('E-posta veya şifre hatalı. Lütfen tekrar deneyin.')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brandLogo}>
          <Code2 size={28} />
        </div>
        <h1 className={styles.title}>Admin Girişi</h1>
        <p className={styles.sub}>TRMN Dijital Yönetim Paneli</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email"><Mail size={14} /> E-posta</label>
            <input
              id="email" type="email" value={email} required
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@trmndigital.com"
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password"><Lock size={14} /> Şifre</label>
            <input
              id="password" type="password" value={password} required
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className={styles.error}>
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? (
              <><span className={styles.spinner} /> Giriş yapılıyor...</>
            ) : (
              <><LogIn size={16} /> Giriş Yap</>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
