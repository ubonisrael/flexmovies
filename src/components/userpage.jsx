import React, { useEffect, useState } from 'react'
import styles from '@/styles/Userpage.module.scss'
import { useFavContext } from "@/context/FavouriteContext";
import { useWatchContext } from "@/context/WatchListContext";
import { Collection } from './collection'
import { EmptyList } from './emptylist'

export const User = () => {

  const [password, setWord] = useState({one: '', two: ''})

  const handleChange = (e, val) => {
    if (val === 'one') {
      setWord({...password, one: e.target.value})
    } else {
      setWord({...password, two: e.target.value})
    }
  }

  useEffect(() => {
    console.log(password);
  }, [password])

  const fav = useFavContext();

  const watch = useWatchContext();

  return (
    <main className={styles.userpage}>
      {/* <section>
        <label htmlFor="password">
        <input type="password" value={password.one} onChange={(e) => handleChange(e, 'one')}/>
        </label>
        <label htmlFor="">
        <input type="password" value={password.two} onChange={(e) => handleChange(e, 'two')}/>
        </label>
      </section> */}
      <section>
        {fav.length > 0 ? (
          <Collection userlist={fav} type={"Favorites"} />
        ) : (
          <EmptyList type='favorites' icon='heart' />
          )}
        {watch.length > 0 ? (
          <Collection userlist={watch} type={"Watch List"} />
          ) : (
          <EmptyList type='watch list' icon='plus' />
        )}
      </section>
    </main>
  )
}
