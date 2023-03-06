import React from 'react'
import { Collection } from './collection'
import styles from '@/styles/Userpage.module.scss'

export const User = ({favorites, watchlist}) => {
  return (
    <section>
        {favorites.length > 0 ? (
          <Collection data={favorites} type={"Favorites"} />
        ) : (
          <div className={styles.div}>
            <h3>Favorites</h3>
            <p>
              You currently have no favorites. Click on the heart icon to add
              movies to your list of favorites.
            </p>
          </div>
        )}
        {watchlist.length > 0 ? (
          <Collection data={watchlist} type={"Watch List"} />
        ) : (
          <div className={styles.div}>
            <h3>Watch List</h3>
            <p>
              You currently have no movies on your watch list. Click on the plus
              icon to add movies to your watch list.
            </p>
          </div>
        )}
      </section>
  )
}
