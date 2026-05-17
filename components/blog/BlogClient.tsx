'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import styles from '@/app/blog/page.module.css'

export default function BlogClient({ posts, categories }: { posts: any[], categories: string[] }) {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('Tümü')

  const filteredPosts = posts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                         p.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeCat === 'Tümü' || p.category === activeCat
    return matchesSearch && matchesCat
  })

  const featured = filteredPosts.filter(p => p.featured)
  const rest = filteredPosts.filter(p => !p.featured)

  return (
    <div className="container">
      <div className={styles.blogControls}>
        <div className={styles.searchWrap}>
          <input 
            type="text" 
            placeholder="Yazılarda ara..." 
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.categories}>
          {categories.map((c) => (
            <button 
              key={c} 
              className={`${styles.catChip} ${activeCat === c ? styles.catActive : ''}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.featuredGrid}>
        {featured.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImg}>
              <span>📝</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span className={styles.catBadge}>{post.category}</span>
                <span className={styles.featBadge}>ÖNE ÇIKAN</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                <div className={styles.cardInfo}>
                  <span><Clock size={12} />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <span className={styles.readMore}>Okumaya Devam <ArrowRight size={13} /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.postGrid}>
        {rest.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
            <div className={styles.postCat}>
              <Tag size={12} /> {post.category}
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.postInfo}>
              <span><Clock size={12} /> {post.readTime}</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
