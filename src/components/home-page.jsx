import React, { useState } from "react";
import { Collection } from "./collection";
import styles from "@/styles/homepage.module.scss";
import Image from "next/image";

export const HomePage = ({ page }) => {
  const [checked, setChecked] = useState(false);

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      <section className={styles.bg_images}>
          <Image src={`https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`} alt="background image 1" fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
              priority
              className={styles.bg_img}/>
          <Image src={`https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`} alt="background image 2" fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
              priority
              className={styles.bg_img}/>
          <Image src={`https://image.tmdb.org/t/p/original/qNz4l8UgTkD8rlqiKZ556pCJ9iO.jpg`} alt="background image 3" fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
              priority
              className={styles.bg_img}/>

          <Image src={`https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg`} alt="background image 4" fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
              priority
              className={styles.bg_img}/>
          <Image src={`https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg`} alt="background image 5" fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
              priority
              className={styles.bg_img}/>
      </section>
      {checked ? (
        <Collection
          type={"trending"}
          checked={checked}
          setCheckBox={setCheckBox}
          dataURL={`https://api.themoviedb.org/3/trending/${page}/${
            checked ? "week" : "day"
          }?&api_key=${
            process.env.NEXT_PUBLIC_TMDB_API_KEY
          }&language=en-US&page=1`}
          linkPath={page === "all" ? "/trending/day/1" : page === "movie" ? "/movie/trending/day" : "/tv/trending/day"}
        />
      ) : (
        <Collection
          type={"trending"}
          checked={checked}
          setCheckBox={setCheckBox}
          dataURL={`https://api.themoviedb.org/3/trending/${page}/${
            checked ? "week" : "day"
          }?&api_key=${
            process.env.NEXT_PUBLIC_TMDB_API_KEY
          }&language=en-US&page=1`}
          linkPath={page === "all" ? "/trending/week/1" : page === "movie" ? "/movie/trending/week" : "/tv/trending/week"}
        />
      )}
      {page === "all" || page === "movie" ? (
        <>
          <Collection
            dataURL={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"movies now playing"}
            linkPath="movie/nowplaying/1"
            mediatype="movie"
          />
          <Collection
            dataURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"upcoming movies"}
            linkPath="movie/upcoming/1"
            mediatype="movie"
          />
          <Collection
            dataURL={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"popular movies"}
            linkPath="movie/popular/1"
            mediatype="movie"
          />
          <Collection
            dataURL={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"top rated movies"}
            linkPath="movie/toprated/1"
            mediatype="movie"
          />
        </>
      ) : null}
      {page === "all" || page === "tv" ? (
        <>
          <Collection
            dataURL={`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"popular TV shows"}
            linkPath="tv/popular/1"
            mediatype="tv"
          />
          <Collection
            dataURL={`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"top rated TV shows"}
            linkPath="tv/rated/1"
            mediatype="tv"
          />
          <Collection
            dataURL={`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"TV airing today"}
            linkPath="tv/today/1"
            mediatype="tv"
          />
          <Collection
            dataURL={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`}
            type={"TV on the air"}
            linkPath="tv/air/1"
            mediatype="tv"
          />
        </>
      ) : null}
    </main>
  );
};
