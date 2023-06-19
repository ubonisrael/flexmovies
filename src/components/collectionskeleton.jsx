import React from "react";
import styles from "@/styles/Collectionskeleton.module.scss";


export const CollectionSkeleton = () => {

  return (
    <section className={styles.container}>
      <div className={styles.type}></div>
      <section className={styles.collection}>
      </section>
    </section>
  );
};
