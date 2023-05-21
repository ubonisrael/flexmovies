import React from "react";
import Image from "next/image";
import styles from "@/styles/Card.module.scss";
import { MdFavorite, MdFavoriteBorder, MdOutlinePlaylistAdd, MdOutlinePlaylistAddCheck } from 'react-icons/md'
import { useFavContext } from "@/context/FavouriteContext";
import { CheckList } from "@/lib/checkList";
import { useWatchContext } from "@/context/WatchListContext";
import {List} from "@/lib/addToList";
import { CheckUser } from "@/lib/checkuser";
import { useAuth } from "@/context/AuthUserContext";

export const Card = ({ item }) => {
  
  const {user} = useAuth()

  const fav = useFavContext()
  const watch = useWatchContext()

  const checkedFave = CheckList(fav, item.id)
  const checkedWList = CheckList(watch, item.id)

  let linkPath = `/${item.media || item.media_type}/${item.id}`;

  const handleLink = () => {
    router.push(linkPath)
  }

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
  
  const divStyle = {
    borderRadius: "16px",
  };
  
  const imagePath = `https://image.tmdb.org/t/p/original/${item.poster_path}`;

  return (
    <article className={styles.card}>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={imagePath}
            alt={item.title ? item.title : item.name}
            style={divStyle}
            fill
            sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
          />
          <div className={styles.overlay_rating}>
            <p>{item.vote_average.toFixed(1)}</p>
          </div>
          <div onClick={handleLink} className={styles.overlay_icons}>
            <button onClick={
              handleFav
            }>{checkedFave ? <MdFavorite /> : <MdFavoriteBorder />}</button>
            <button onClick={
              handleWatchlist
            }>{checkedWList ? <MdOutlinePlaylistAddCheck /> : <MdOutlinePlaylistAdd />}</button>
          </div>
        </div>
      </div>
      <h4 className={styles.title}>{item.title ? item.title : item.name}</h4>
      <p>{item.release_date ? item.release_date : item.first_air_date}</p>
    </article>
  );
};
