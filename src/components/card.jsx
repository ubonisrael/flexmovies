import React from "react";
import styles from "@/styles/Card.module.scss";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { useFavContext } from "@/context/FavouriteContext";
import { CheckList } from "@/lib/checkList";
import { useWatchContext } from "@/context/WatchListContext";
import { List } from "@/lib/addToList";
import { CheckUser } from "@/lib/checkuser";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/router";
import { ImageLoader } from "./imageLoader";

export const Card = ({ item, mediatype }) => {
  const { user } = useAuth();

  const router = useRouter();

  const fav = useFavContext();
  const watch = useWatchContext();

  const checkedFave = CheckList(fav, item.id);
  const checkedWList = CheckList(watch, item.id);

  let linkPath = `/${item.media || item.media_type || mediatype}/${item.id}`;

  const handleLink = () => {
    router.push(linkPath);
  };

  const handleFav = (e) => {
    e.stopPropagation();

    if (user) {
      List(item, fav, user.uid, "favorites");
      return;
    }
    CheckUser();
  };
  const handleWatchlist = (e) => {
    e.stopPropagation();

    if (user) {
      List(item, watch, user.uid, "watchlist");
      return;
    }
    CheckUser();
  };

  const imagePath = `https://image.tmdb.org/t/p/original/${item.poster_path}`

  return (
    <article onClick={handleLink} className={styles.card}>
        <div className={styles.imageContainer}>
          <ImageLoader path={imagePath} />
          <div className={styles.overlay_rating}>
            <p>{item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <div className={styles.overlay}>
            <div className={styles.overlay_icons}>
              <button onClick={handleFav}>
                {checkedFave ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
              <button onClick={handleWatchlist}>
                {checkedWList ? (
                  <MdOutlinePlaylistAddCheck />
                ) : (
                  <MdOutlinePlaylistAdd />
                )}
              </button>
            </div>
            <p className={styles.title}>{item.title ? item.title : item.name}</p>
            <p>{item.release_date ? item.release_date : item.first_air_date}</p>
          </div>
        </div>
    </article>
  );
};
