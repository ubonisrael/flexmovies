import React from "react";
import styles from "@/styles/Cardskeleton.module.scss";


export const CardSkeleton = () => {

  return (
    <article className={styles.card}>
        <div className={styles.image}></div>
        <div className={styles.linecontainer}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        </div>
    </article>
  );
};
