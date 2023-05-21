import React from 'react'
import { Collection } from './collection'
import { EmptyList } from './emptylist'
import styles from '@/styles/Userpage.module.scss'

export const User = ({favorites, watchlist}) => {
  return (
    <section className={styles.userpage}>
        {favorites.length > 0 ? (
          <Collection data={favorites} type={"Favorites"} />
        ) : (
          <EmptyList type='favorites' icon='heart' />
          )}
        {watchlist.length > 0 ? (
          <Collection data={watchlist} type={"Watch List"} />
          ) : (
          <EmptyList type='watch list' icon='plus' />
        )}
      </section>
  )
}
