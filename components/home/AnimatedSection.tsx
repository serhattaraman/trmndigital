'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({ 
  children, 
  className, 
  style, 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) {
  const directions = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 }
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={{
        initial: { opacity: 0 },
        whileInView: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      {children}
    </motion.div>
  )
}
