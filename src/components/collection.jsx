import React from "react";
import { Card } from "./card";
import styles from "@/styles/Collection.module.scss";
import Link from "next/link";
import { Timewindow } from "./timewindow";
import useSWR from 'swr'
import { fetcher } from "@/utils/fetch";
import { CollectionSkeleton } from "./collectionskeleton";


export const Collection = ({
  type,
  checked,
  setCheckBox,
  dataURL,
  linkPath,
  mediatype,
  userlist
}) => {

  
  const {data} = useSWR(dataURL, fetcher)
  
  if (!data && dataURL ) {
    return <CollectionSkeleton />
  }


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
        {data ? data.results.map((item) => 
          <Card key={item.id} item={item} mediatype={mediatype}/>
        ): null}
        {userlist ? userlist.map((item) => 
          <Card key={item.id} item={item} mediatype={mediatype}/>
        ): null}
      </section>
    </section>
  );
};

