'use client'
import { useState, useRef } from 'react'
import { UploadCloud, X, Star, Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import styles from './ImageUploader.module.css'

export function ImageUploader({ 
  images, 
  setImages 
}: { 
  images: { url: string, isCover: boolean }[],
  setImages: React.Dispatch<React.SetStateAction<{ url: string, isCover: boolean }[]>>
}) {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    const files = Array.from(e.target.files)
    
    setUploading(true)
    const supabase = createClient()
    const uploadedImages: { url: string, isCover: boolean }[] = []

    for (const file of files) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        })

        if (!res.ok) {
          const errData = await res.json()
          throw new Error(errData.error || 'Bilinmeyen hata')
        }

        const data = await res.json()
        uploadedImages.push({ url: data.url, isCover: false })
      } catch (err: any) {
        alert('Görsel yüklenirken hata: ' + err.message)
      }
    }

    setImages(prev => {
      const newImages = [...prev, ...uploadedImages]
      // Eğer hiç cover yoksa, ilkini cover yap
      if (newImages.length > 0 && !newImages.some(img => img.isCover)) {
        newImages[0].isCover = true
      }
      return newImages
    })
    setUploading(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const removeImage = (urlToRemove: string) => {
    setImages(prev => {
      const newImages = prev.filter(img => img.url !== urlToRemove)
      // Eğer silinen cover idiyse, ilk kalanı cover yap
      if (newImages.length > 0 && !newImages.some(img => img.isCover)) {
        newImages[0].isCover = true
      }
      return newImages
    })
  }

  const setCover = (url: string) => {
    setImages(prev => prev.map(img => ({
      ...img,
      isCover: img.url === url
    })))
  }

  return (
    <div className={styles.uploader}>
      <div 
        className={styles.dropzone} 
        onClick={() => fileInputRef.current?.click()}
      >
        {uploading ? (
          <div className={styles.uploadingState}>
            <Loader2 className={styles.spin} size={28} />
            <p>Yükleniyor...</p>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <UploadCloud size={32} />
            <p><strong>Görselleri seçmek için tıklayın</strong> veya sürükleyip bırakın.</p>
            <span>PNG, JPG, WEBP (Çoklu seçim yapabilirsiniz)</span>
          </div>
        )}
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          style={{ display: 'none' }} 
        />
      </div>

      {images.length > 0 && (
        <div className={styles.gallery}>
          {images.map((img, idx) => (
            <div key={img.url} className={`${styles.imageCard} ${img.isCover ? styles.isCover : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={`Upload ${idx}`} />
              
              <div className={styles.imageActions}>
                <button 
                  type="button" 
                  onClick={() => setCover(img.url)}
                  className={styles.coverBtn}
                  title="Kapak Görseli Yap"
                >
                  <Star size={14} fill={img.isCover ? "currentColor" : "none"} />
                  {img.isCover ? 'Kapak' : 'Kapak Yap'}
                </button>
                <button 
                  type="button" 
                  onClick={() => removeImage(img.url)}
                  className={styles.removeBtn}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
