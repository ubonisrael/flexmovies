import React from "react";
import { Card } from "./card";
import styles from "@/styles/Collection.module.scss";
import Link from "next/link";

export const Collection = ({
  data,
  type,
  checked,
  setCheckBox,
  rec,
  linkPath,
}) => {
  return (
    <section>
      <article className={styles.collection_type}>
        {linkPath ? (
          <Link href={linkPath} className={styles.links}>
            <h2>{type}</h2>
          </Link>
        ) : (
          <h2>{type}</h2>
        )}
        {type === "trending" ? (
          <div className={styles.switchButton}>
            <input
              className={styles.switchButtonCheckbox}
              name="window"
              type="checkbox"
              checked={checked}
              onChange={setCheckBox}
            ></input>
            <label className={styles.switchButtonLabel} htmlFor="window">
              <span className={styles.switchButtonLabelSpan}>Day</span>
            </label>
          </div>
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
