import React from 'react'

import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className={styles.header}>
          <Link href='/'>
          <p className={styles.links}>All</p>
          </Link>
          <Link href='/movie'>
          <p className={styles.links}>Movies</p>
          </Link>
          <Link href='/tv'>
          <p className={styles.links}>TV</p>
          </Link>
    </div>
  )
}
