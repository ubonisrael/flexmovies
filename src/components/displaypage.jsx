import React from "react";
import { Card } from "./card";
import styles from "@/styles/DisplayPage.module.scss";

export const DisplayPage = ({ data, title }) => {
  return (
    <div className={styles.display}>
      <h2>{title}</h2>
      <section>
        {data.map((dat) => (
          <Card key={dat.id} item={dat} />
        ))}
      </section>
    </div>
  );
};
