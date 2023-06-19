// pages/500.js
import style from '@/styles/Errorpage.module.scss'
import {MdRefresh, MdEmail} from 'react-icons/md'
import {BsClock} from 'react-icons/bs'

export default function Custom500() {
    return (
      <main className={style.main}>
        <section>
        <article>
        <h2>Well, this is embarrasing...</h2>
        <p>Sorry, this is not working properly. We know about this and are working to fix it</p>
        </article>
        <article>
          <h3>In the meantime, try these:</h3>
          <p><MdRefresh />Refreshing the page.</p>
          <p><BsClock />Try again later (e.g 30mins).</p>
          <p><MdEmail />Contact as support@flexmovies.com and tell us what happened.</p>
        </article>
        </section>
      </main>
    )
  }