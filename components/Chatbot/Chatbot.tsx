'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, RotateCcw, CheckCircle, MessageCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import styles from './Chatbot.module.css'
import { Message, LeadData, ProjectType, ProjectGoal, BudgetRange, StartTime } from './types'

const BOT_NAME = 'TRMN Digital Asistanı'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [leadData, setLeadData] = useState<LeadData>({})
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const supabase = createClient()

  // Persistent state
  useEffect(() => {
    const saved = localStorage.getItem('trmn_chatbot_state')
    if (saved) {
      const { messages, currentStep, leadData } = JSON.parse(saved)
      setMessages(messages)
      setCurrentStep(currentStep)
      setLeadData(leadData)
    } else {
      initChat()
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('trmn_chatbot_state', JSON.stringify({ messages, currentStep, leadData }))
    }
    scrollToBottom()
  }, [messages, currentStep, leadData])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const initChat = () => {
    const welcome: Message = {
      id: '1',
      role: 'bot',
      content: 'Merhaba, ben TRMN Digital asistanı. Size en uygun çözümü önerebilmem için birkaç kısa soru soracağım.',
      timestamp: Date.now(),
    }
    setMessages([welcome])
    setCurrentStep(1)
    setTimeout(() => askStep1(), 1000)
  }

  const addMessage = (role: 'bot' | 'user', content: string | React.ReactNode) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const typeEffect = (fn: () => void) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      fn()
    }, 1500)
  }

  // FLOW STEPS
  const askStep1 = () => {
    typeEffect(() => {
      addMessage('bot', 'Ne yaptırmak istiyorsunuz?')
      setCurrentStep(1)
    })
  }

  const handleStep1 = (type: ProjectType) => {
    addMessage('user', type)
    setLeadData((prev) => ({ ...prev, project_type: type }))
    typeEffect(() => {
      addMessage('bot', 'Kısaca ihtiyacınızı anlatır mısınız?')
      setCurrentStep(2)
    })
  }

  const handleStep2 = (desc: string) => {
    if (!desc.trim()) return
    addMessage('user', desc)
    setLeadData((prev) => ({ ...prev, project_description: desc }))
    setInputValue('')
    typeEffect(() => {
      addMessage('bot', 'Bu proje hangi amaçla yapılacak?')
      setCurrentStep(3)
    })
  }

  const handleStep3 = (goal: ProjectGoal) => {
    addMessage('user', goal)
    setLeadData((prev) => ({ ...prev, project_goal: goal }))
    typeEffect(() => {
      addMessage('bot', 'Tahmini bütçe aralığınız nedir?')
      setCurrentStep(4)
    })
  }

  const handleStep4 = (budget: BudgetRange) => {
    addMessage('user', budget)
    setLeadData((prev) => ({ ...prev, budget_range: budget }))
    typeEffect(() => {
      addMessage('bot', 'Ne zaman başlamak istiyorsunuz?')
      setCurrentStep(5)
    })
  }

  const handleStep5 = (time: StartTime) => {
    addMessage('user', time)
    setLeadData((prev) => ({ ...prev, start_time: time }))
    typeEffect(() => {
      addMessage('bot', 'Size dönüş yapabilmemiz için adınızı ve iletişim bilginizi paylaşır mısınız?')
      setCurrentStep(6)
    })
  }

  const handleFinal = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      full_name: formData.get('full_name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
    }

    if (!data.full_name || !data.phone) return

    const finalLead = { ...leadData, ...data, source: 'Chatbot' }
    addMessage('user', `Adım: ${data.full_name}, Tel: ${data.phone}`)
    
    setIsTyping(true)
    
    try {
      // 1. Save to Supabase (Existing logic)
      await supabase.from('leads').insert([{
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        project_type: leadData.project_type,
        project_description: leadData.project_description,
        project_goal: leadData.project_goal,
        budget_range: leadData.budget_range,
        start_time: leadData.start_time,
        source: 'Chatbot'
      }])

      // 2. Send to Telegram via our new API
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.full_name,
          phone: data.phone,
          email: data.email,
          service: leadData.project_type,
          budget: leadData.budget_range,
          description: leadData.project_description,
          timeline: leadData.start_time,
          source: 'Chatbot'
        }),
      })
      
      setIsTyping(false)
      addMessage('bot', (
        <div className={styles.finalMessage}>
          <p>Talebiniz alındı! Projenizi ekibimizle birlikte inceleyip size en kısa sürede dönüş yapacağız.</p>
          <a 
            href={`https://wa.me/905384714674?text=Merhaba%2C%20chatbot%20üzerinden%20teklif%20talebi%20bıraktım.%20Adım%3A%20${data.full_name}`} 
            target="_blank" 
            rel="noreferrer" 
            className={styles.waBtn}
          >
            <MessageCircle size={20} /> WhatsApp&apos;tan Devam Et
          </a>
        </div>
      ))
      setCurrentStep(7)
    } catch (err) {
      console.error('Error saving lead:', err)
      setIsTyping(false)
      addMessage('bot', 'Bir hata oluştu, ancak bilgileriniz kaydedilmiş olabilir. Sizinle en kısa sürede iletişime geçeceğiz.')
    }
  }

  const restartChat = () => {
    localStorage.removeItem('trmn_chatbot_state')
    setMessages([])
    setLeadData({})
    setCurrentStep(0)
    initChat()
  }

  return (
    <div className={styles.chatbotContainer}>
      {/* Trigger Button */}
      <button 
        className={`${styles.trigger} ${isOpen ? styles.triggerActive : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Yardım masasını aç"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={styles.panel}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <div className={styles.avatar}>
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className={styles.title}>{BOT_NAME}</div>
                  <div className={styles.status}>Aktif</div>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className={styles.messages}>
              {messages.map((msg) => (
                <div key={msg.id} className={`${styles.message} ${msg.role === 'bot' ? styles.botMessage : styles.userMessage}`}>
                  {msg.content}
                </div>
              ))}
              
              {isTyping && (
                <div className={styles.typing}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              )}

              {/* Step Options */}
              {!isTyping && currentStep === 1 && (
                <div className={styles.options}>
                  {(['Web sitesi', 'Özel yazılım', 'Otomasyon sistemi', 'Mevcut siteyi yenileme', 'Henüz emin değilim'] as ProjectType[]).map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleStep1(opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {!isTyping && currentStep === 3 && (
                <div className={styles.options}>
                  {(['Daha fazla müşteri almak', 'Daha profesyonel görünmek', 'İş süreçlerini kolaylaştırmak', 'Satış / başvuru toplamak', 'İç sistemi düzenlemek'] as ProjectGoal[]).map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleStep3(opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {!isTyping && currentStep === 4 && (
                <div className={styles.options}>
                  {(['10.000 TL altı', '10.000 - 25.000 TL', '25.000 - 50.000 TL', '50.000 TL üzeri', 'Henüz net değil'] as BudgetRange[]).map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleStep4(opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {!isTyping && currentStep === 5 && (
                <div className={styles.options}>
                  {(['Hemen', 'Bu hafta', 'Bu ay', 'Daha sonra'] as StartTime[]).map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleStep5(opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {!isTyping && currentStep === 6 && (
                <div className={styles.botMessage} style={{ width: '100%', maxWidth: '100%', alignSelf: 'stretch' }}>
                  <form onSubmit={handleFinal} className={styles.contactForm}>
                    <input name="full_name" placeholder="Ad Soyad" required className={styles.input} />
                    <input name="phone" placeholder="Telefon" required className={styles.input} />
                    <input name="email" type="email" placeholder="E-posta" className={styles.input} />
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Gönder</button>
                  </form>
                </div>
              )}

              {currentStep > 1 && (
                <div className={styles.restartBtn} onClick={restartChat}>
                  <RotateCcw size={12} style={{ marginRight: 4 }} /> Baştan Başla
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Only for step 2) */}
            {currentStep === 2 && !isTyping && (
              <div className={styles.inputArea}>
                <form 
                  className={styles.formGroup}
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleStep2(inputValue)
                  }}
                >
                  <input 
                    className={styles.input}
                    placeholder="İhtiyacınızı yazın..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" className={styles.sendBtn} disabled={!inputValue.trim()}>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            )}

            <div className={styles.footer}>
              TRMN Digital &copy; {new Date().getFullYear()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
