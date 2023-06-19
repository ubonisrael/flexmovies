// pages/404.js
import style from '@/styles/Errorpage.module.scss'

export default function Custom404() {
    return (
      <main className={style.main}>
        <section>
        <article>
        <h2>404 - Page Not Found</h2>
        <p> This page does not exist, has been moved, or has a dead or broken link.</p>
        </article>
        </section>
      </main>
    )
  }