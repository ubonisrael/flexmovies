import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import Link from "next/link";

export const Card = ({ item, rec, linkPath }) => {
  const divStyle = {
    borderRadius: "16px",
  };
  const imagePath = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
  // let linkPath = `/${item.media ||item.media_type}/${item.id}`

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={linkPath}>
          <Image
            src={imagePath}
            alt={item.title ? item.title : item.name}
            style={divStyle}
            fill
            sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
          />
        </Link>
      </div>
      <h3 className={styles.title}>{item.title ? item.title : item.name}</h3>
      <p>{item.release_date ? item.release_date : item.first_air_date}</p>
    </article>
  );
};
