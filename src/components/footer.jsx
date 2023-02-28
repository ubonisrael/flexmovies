import React from 'react'
import styles from '@/styles/Footer.module.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>Developed by Ubonisrael Akpanudoh {currentYear}</footer>
  )
}
