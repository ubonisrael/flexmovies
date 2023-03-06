import React from "react";
import { Card } from "./card";
import styles from "@/styles/Collection.module.scss";
import Link from "next/link";
import { Timewindow } from "./timewindow";

export const Collection = ({
  data,
  type,
  checked,
  setCheckBox,
  rec,
  linkPath,
}) => {
  return (
    <section className={styles.collection_container}>
      <article className={styles.collection_type}>
        {linkPath ? (
          <Link href={linkPath} className={styles.links}>
            <h3>{type}</h3>
          </Link>
        ) : (
          <h3>{type}</h3>
        )}
        {type.match(/trending/gi) ? (
          <Timewindow checked={checked} setCheckBox={setCheckBox} />
        ) : null}
      </article>
      <section className={styles.collection}>
        {data.map((item) => (
          <Card key={item.id} item={item} rec={rec} />
        ))}
      </section>
    </section>
  );
};
