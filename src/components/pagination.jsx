import React from 'react'
import styles from '@/styles/Pagination.module.scss'

export const Pagination = ({page, totalPages, nextPage, prevPage }) => {

  return (
    <div className={styles.pagination}>
        <button onClick={prevPage} className={styles.links}>Prev</button>
        <p> {page} / {totalPages} </p>
        <button onClick={nextPage} className={styles.links}>Next</button>
    </div>
  )
}
