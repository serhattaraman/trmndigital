'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, AlertCircle } from 'lucide-react'
import { ImageUploader } from './ImageUploader'
import styles from './ProjectForm.module.css'

export function ProjectForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    category: initialData?.category || 'Diğer',
    status: initialData?.status || 'draft',
    featured: initialData?.featured || false,
    short_description: initialData?.short_description || '',
    full_description: initialData?.full_description || '',
    problem: initialData?.problem || '',
    solution: initialData?.solution || '',
    result: initialData?.result || '',
    technologies: initialData?.technologies?.join(', ') || '',
    tags: initialData?.tags?.join(', ') || '',
    client_name: initialData?.client_name || '',
    client_company: initialData?.client_company || '',
    review_title: initialData?.review_title || '',
    review_text: initialData?.review_text || '',
    review_rating: initialData?.review_rating || 5,
    sort_order: initialData?.sort_order || 0
  })

  // To handle multiple images we will just keep an array of URLs for simplicity in this version, 
  // or a more complex uploader. We'll pass it to ImageUploader.
  const [images, setImages] = useState<{ url: string, isCover: boolean }[]>(
    initialData?.project_images?.map((img: any) => ({ url: img.image_url, isCover: img.image_url === initialData.cover_image })) || []
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      if (name === 'title' && !initialData) {
        setFormData(prev => ({
          ...prev,
          slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const coverImage = images.find(img => img.isCover)?.url || images[0]?.url || null

    const payload = {
      ...formData,
      technologies: formData.technologies.split(',').map((s: string) => s.trim()).filter(Boolean),
      tags: formData.tags.split(',').map((s: string) => s.trim()).filter(Boolean),
      cover_image: coverImage,
      images: images.map((img, index) => ({ url: img.url, sort_order: index }))
    }

    try {
      const url = initialData ? `/api/projeler/${initialData.id}` : '/api/projeler'
      const method = initialData ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Kaydetme başarısız')
      }

      router.push('/admin/projeler')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        
        {/* Sol Kolon - İçerik */}
        <div className={styles.colMain}>
          <div className={styles.card}>
            <h3>Temel Bilgiler</h3>
            <div className={styles.field}>
              <label>Proje Adı</label>
              <input name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className={styles.field}>
              <label>Slug (URL Bölümü)</label>
              <input name="slug" value={formData.slug} onChange={handleChange} required />
            </div>
            <div className={styles.field}>
              <label>Kısa Açıklama</label>
              <textarea name="short_description" value={formData.short_description} onChange={handleChange} rows={3} required />
            </div>
          </div>

          <div className={styles.card}>
            <h3>Detay İçerik (Modal İçin)</h3>
            <div className={styles.field}>
              <label>Detaylı Açıklama (Proje Detayı)</label>
              <textarea name="full_description" value={formData.full_description} onChange={handleChange} rows={5} />
            </div>
            <div className={styles.field}>
              <label>Problem</label>
              <textarea name="problem" value={formData.problem} onChange={handleChange} rows={4} />
            </div>
            <div className={styles.field}>
              <label>Çözüm</label>
              <textarea name="solution" value={formData.solution} onChange={handleChange} rows={4} />
            </div>
            <div className={styles.field}>
              <label>Sonuç</label>
              <input name="result" value={formData.result} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.card}>
            <h3>Müşteri Değerlendirmesi (Social Proof)</h3>
            <div className={styles.field}>
              <label>Puan (1-5)</label>
              <input type="number" name="review_rating" value={formData.review_rating} min="1" max="5" onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label>Müşteri Adı Soyadı</label>
              <input name="client_name" value={formData.client_name} onChange={handleChange} placeholder="Örn: Ahmet Yılmaz" />
            </div>
            <div className={styles.field}>
              <label>Şirket / Kurum Adı</label>
              <input name="client_company" value={formData.client_company} onChange={handleChange} placeholder="Örn: ABC Lojistik" />
            </div>
            <div className={styles.field}>
              <label>Yorum Başlığı</label>
              <input name="review_title" value={formData.review_title} onChange={handleChange} placeholder="Örn: Süreçlerimiz çok hızlandı" />
            </div>
            <div className={styles.field}>
              <label>Müşteri Yorumu</label>
              <textarea name="review_text" value={formData.review_text} onChange={handleChange} rows={4} placeholder="Eskiden Excel'de kaybettiğimiz zamanı..." />
            </div>
          </div>

          <div className={styles.card}>
            <h3>Görseller</h3>
            <ImageUploader images={images} setImages={setImages} />
          </div>
        </div>

        {/* Sağ Kolon - Ayarlar */}
        <div className={styles.colSidebar}>
          <div className={styles.card}>
            <h3>Yayın Durumu</h3>
            <div className={styles.field}>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="draft">Taslak</option>
                <option value="published">Yayında</option>
              </select>
            </div>
            <div className={styles.checkboxField}>
              <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} />
              <label htmlFor="featured">Ana Sayfada Öne Çıkar</label>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Kategori ve Etiketler</h3>
            <div className={styles.field}>
              <label>Kategori (Filtre için)</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="CRM">CRM</option>
                <option value="Dashboard">Dashboard</option>
                <option value="Eğitim Sistemleri">Eğitim Sistemleri</option>
                <option value="Web Siteleri">Web Siteleri</option>
                <option value="Otomasyon">Otomasyon</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Etiketler (Virgülle ayırın)</label>
              <input name="tags" value={formData.tags} onChange={handleChange} placeholder="CRM, İK, Otomasyon" />
            </div>
            <div className={styles.field}>
              <label>Teknolojiler (Virgülle ayırın)</label>
              <input name="technologies" value={formData.technologies} onChange={handleChange} placeholder="Next.js, PostgreSQL" />
            </div>
            <div className={styles.field}>
              <label>Sıralama (Küçük olan önce çıkar)</label>
              <input type="number" name="sort_order" value={formData.sort_order} onChange={handleChange} />
            </div>
          </div>
          
          {error && <div className={styles.error}><AlertCircle size={16} /> {error}</div>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            <Save size={18} /> {loading ? 'Kaydediliyor...' : 'Projeyi Kaydet'}
          </button>
        </div>

      </div>
    </form>
  )
}
