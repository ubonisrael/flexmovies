import React from "react";
import { Card } from "./card";
import styles from "@/styles/Collection.module.scss";
import Link from "next/link";
import useSWR from 'swr'
import { fetcher } from "@/utils/fetch";
import { CollectionSkeleton } from "./collectionskeleton";


export const Collection = ({
  type,
  dataURL,
  linkPath,
  mediatype,
  userlist
}) => {

  const { data } = useSWR(dataURL, fetcher)

  if (!data && dataURL) {
    return <CollectionSkeleton />
  }


  return (
    <section className={styles.collection_container}>
      <article className={styles.collection_type}>
        {linkPath ? (
          <Link href={linkPath} className={styles.links}>
            <h2>{type}</h2>
          </Link>
        ) : (
          <h2>{type}</h2>
        )}
      </article>
      <section className={styles.collection}>
        {data ? data.results.slice(0, 10).map((item) =>
          <Card key={item.id} item={item} mediatype={mediatype} />
        ) : null}
        {userlist ? userlist.map((item) =>
          <Card key={item.id} item={item} mediatype={mediatype} />
        ) : null}
      </section>
    </section>
  );
};

