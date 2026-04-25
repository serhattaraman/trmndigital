'use client'
import { MessageCircle } from 'lucide-react'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905384714674?text=Merhaba%2C%20i%C5%9Fletmem%20i%C3%A7in%20sistem%20yapt%C4%B1rmak%20istiyorum.%20Bilgi%20alabilir%20miyim%3F"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle size={24} />
      <span className={styles.tooltip}>WhatsApp&apos;tan Yaz</span>
    </a>
  )
}
