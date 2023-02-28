import React from "react";

import Image from "next/image";
import styles from "@/styles/Moviepage.module.scss";
import { Collection } from "./collection";

export const Moviepage = ({ item, casts, rec }) => {
  const divStyle = {
    borderRadius: "16px",
  };
  const imagePath = `https://image.tmdb.org/t/p/original/${item.poster_path}`;

  return (
    <>
      <h2 className={styles.title}>{item.title ? item.title : item.name}</h2>
      <section className={styles.movie_info}>
        <article>
          <div className={styles.imageContainer}>
            <Image
              src={imagePath}
              alt={item.title ? item.title : item.name}
              style={divStyle}
              fill
              sizes="(max-width: 600px) 100vw,
              (max-width: 400px) 50vw,
              (max-width: 200px) 33vw"
            />
          </div>
        </article>
        <article className={styles.movie_details}>
          <div>
          <p>
            Release Date:{" "}
            {item.release_date ? item.release_date : item.first_air_date}
          </p>
          <p>
            Genre(s) :{" "}
            {item.genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
          {
            item.runtime ?
            <p>Runtime: {item.runtime} minutes</p>
            : <p>Runtime: N/A</p>
          }
          {/* <p>Budget: {item.budget}</p>
          <p>Revenue: {item.revenue}</p>
          <p>Status: {item.status}</p>
          <p>IMDB ID: {item.imdb_id}</p> */}
          </div>
          <div className={styles.underline}></div>
          <div className={styles.summary_container}>
            <h3 className={styles.subheader}>Summary</h3>
            <p>{item.overview}</p>
          </div>
          <div className={styles.underline}></div>
          <h3 className={styles.subheader}>Casts</h3>
          <article className={styles.movie_details_casts}>
            {casts.cast.map((cast) => (
              <span key={cast.id} className={styles.cast}>
                {cast.name}{" "}
              </span>
            ))}
          </article>
        </article>
      </section>
      <section>
        <Collection data={rec.results} type={"Recommendations"} rec={true}/>
      </section>
    </>
  );
};
