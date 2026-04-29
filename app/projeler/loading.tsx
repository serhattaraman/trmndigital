'use client'
import { motion } from 'framer-motion'
import styles from './page.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div className={styles.loaderRing} />
        <div className={styles.loaderCenter}>
          <div className={styles.loaderLogo}>T</div>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
        className={styles.loadingText}
      >
        Projeler Yükleniyor...
      </motion.p>
    </div>
  )
}
