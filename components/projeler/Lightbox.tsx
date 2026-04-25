'use client'
import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Lightbox.module.css'

interface LightboxImage {
  url: string
  alt?: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onChangeIndex: (index: number) => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onChangeIndex }: LightboxProps) {
  const handlePrevious = useCallback(() => {
    onChangeIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }, [currentIndex, images.length, onChangeIndex])

  const handleNext = useCallback(() => {
    onChangeIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }, [currentIndex, images.length, onChangeIndex])

  // Klavye olayları
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    // Body scroll engelleme
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, handlePrevious, handleNext])

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex]

  // Swipe gesture variables
  let touchStartX = 0
  let touchEndX = 0
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX = e.changedTouches[0].screenX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX
    if (touchStartX - touchEndX > 50) handleNext()
    if (touchEndX - touchStartX > 50) handlePrevious()
  }

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Main Image Container */}
        <div 
          className={styles.mainArea}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.length > 1 && (
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>
              <ChevronLeft size={40} />
            </button>
          )}

          <motion.div 
            key={currentIndex}
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={currentImage.url} alt={currentImage.alt || 'Görsel'} className={styles.image} />
            {currentImage.alt && (
              <div className={styles.caption}>{currentImage.alt}</div>
            )}
          </motion.div>

          {images.length > 1 && (
            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); handleNext(); }}>
              <ChevronRight size={40} />
            </button>
          )}
        </div>

        {/* Thumbnails Strip */}
        {images.length > 1 && (
          <div className={styles.thumbnailsContainer}>
            <div className={styles.thumbnailsStrip}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`${styles.thumbnail} ${idx === currentIndex ? styles.active : ''}`}
                  onClick={() => onChangeIndex(idx)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={img.alt || `Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
