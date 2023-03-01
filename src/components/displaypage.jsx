import React from "react";
import { Card } from "./card";
import styles from "@/styles/DisplayPage.module.scss";

export const DisplayPage = ({ data, title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <section className={styles.display}>
        {data.map((dat) => (
          <Card key={dat.id} item={dat} />
        ))}
      </section>
    </>
  );
};
