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
  const { user } = useAuth(); // get the status of the user

  const router = useRouter();

  const fav = useFavContext();
  const watch = useWatchContext();

  const checkedFave = CheckList(fav, item.id);
  const checkedWList = CheckList(watch, item.id);

  let linkPath = `/${item.media || item.media_type || mediatype}/${item.id}`; // craft the path to the movie or show's page

  // reroute to the item's page
  const handleLink = () => {
    router.push(linkPath);
  };

  // add item to favorite list
  const handleFav = (e) => {
    e.stopPropagation();

    // check if user is true ie logged in
    if (user) {
      List(item, fav, user.uid, "favorites");
      return;
    }
    // else, inform user that user has to be logged in to perform this action
    CheckUser();
  };

  // add item to watch list
  const handleWatchlist = (e) => {
    e.stopPropagation();

    // check if user is true ie logged in
    if (user) {
      List(item, watch, user.uid, "watchlist");
      return;
    }
    // else, inform user that user has to be logged in to perform this action
    CheckUser();
  };

  const imagePath = `https://image.tmdb.org/t/p/original/${item.poster_path}` // craft path to url of movie or show's poster

  return (
    <article onClick={handleLink} className={styles.card}>
        <div className={styles.imageContainer}>
          <ImageLoader path={imagePath} />
          <div className={styles.overlay_rating}>
            <p>{item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <div className={styles.overlay}>
            <div className={styles.overlay_icons}>
              <button aria-label="add to favorites" onClick={handleFav}>
                {checkedFave ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
              <button aria-label="add to watchlist" onClick={handleWatchlist}>
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
