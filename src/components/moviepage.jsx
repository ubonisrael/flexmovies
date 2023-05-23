import React from "react";
import styles from "@/styles/Moviepage.module.scss";
import Link from "next/link";
import { MdFavorite, MdFavoriteBorder, MdOutlinePlaylistAdd, MdOutlinePlaylistAddCheck } from "react-icons/md";
import { CheckList } from "@/lib/checkList";
import { useFavContext } from "@/context/FavouriteContext";
import { useWatchContext } from "@/context/WatchListContext";
import { List } from "@/lib/addToList";
import { CheckUser } from "@/lib/checkuser";
import { useAuth } from "@/context/AuthUserContext";
import { Placeholder } from "./placeholder";

export const Moviepage = ({ item, casts, img, svg }) => {

  const {user} = useAuth

  const fav = useFavContext()
  const watch = useWatchContext()

  const checkedFave = CheckList(fav, item.id)
  const checkedWList = CheckList(watch, item.id)

  const handleFav = (e) => {
    e.stopPropagation()

    if (user) {
      List(item, fav, user.uid, 'favorites')
      return
    }
    CheckUser()
  }
  const handleWatchlist = (e) => {
    e.stopPropagation()

    if (user) {
      List(item, watch, user.uid, 'watchlist')
      return
    }
    CheckUser()
  }

  const style = { fontSize: "1.5rem" }

  return (
    <>
      <h2 className={styles.title}>{item.title ? item.title : item.name}</h2>
      <section className={styles.movie_info}>
        <article>
          <div className={styles.imageContainer}>
            <Placeholder svg={svg} img={img} blur={4} />
          </div>
          <Link href={item.homepage} className={styles.visit}>
            <div>Visit HomePage</div>
          </Link>
        </article>
        <article className={styles.movie_details}>
          <article className={styles.info}>
            <div>
              <p>{item.tagline}</p>
            </div>
            <div>
              <h4>Release Date</h4>
              <p>
                {item.release_date ? item.release_date : item.first_air_date}
              </p>
            </div>
            <div>
              {item.runtime ? (
                <>
                  <h4>Runtime</h4>
                  <p>{item.runtime} minutes</p>
                </>
              ) : (
                <>
                  <h4>Runtime</h4>
                  <p>N/A</p>
                </>
              )}
            </div>
            <div>
              <h4>Rating</h4>
              <p>{item.vote_average.toFixed(1)}</p>
            </div>
            <div>
              <h4>Language(s)</h4>
              <p>
                {item.spoken_languages.map((lang, i) => (
                  <span key={i}>{lang.name} </span>
                ))}
              </p>
            </div>
            <div>
              <h4>Status</h4>
              <p>{item.status}</p>
            </div>
            <div>
              <h4>Genre(s)</h4>
              <p>
                {item.genres.map((genre) => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </p>
            </div>
            <div>
              <button className={styles.btn} onClick={handleFav} >Add To Favourites {checkedFave ? <MdFavorite style={style} /> : <MdFavoriteBorder style={style} />}</button>
            </div>
            <div>
              <button className={styles.btn} onClick={handleWatchlist} >Add to WatchList {checkedWList ? <MdOutlinePlaylistAddCheck style={style} /> : <MdOutlinePlaylistAdd style={style} />}</button>
            </div>
          </article>
          <div className={styles.underline}></div>
          <div className={styles.summary_container}>
            <h3 className={styles.subheader}>Summary</h3>
            <p>{item.overview}</p>
          </div>
          <div className={styles.underline}></div>
          {casts.cast.length ? (
            <h3 className={styles.subheader}>Casts</h3>
          ) : (
            <h3>Casts Not Available</h3>
          )}
          <article className={styles.movie_details_casts}>
            {casts.cast.map((cast, i) => (
              <span key={cast.id + cast.name + i} className={styles.cast}>
                {cast.name}{" "}
              </span>
            ))}
          </article>
        </article>
      </section>
    </>
  );
};
