import React, { useEffect, useRef, useState } from "react";
import { Card } from "./card";
import styles from "@/styles/Collection.module.scss";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/utils/fetch";
import { CollectionSkeleton } from "./collectionskeleton";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export const Collection = ({
  type,
  dataURL,
  linkPath,
  mediatype,
  userlist,
}) => {
  const [x, setX] = useState(0);
  const [showBtns, setShowBtns] = useState(false);
  const { data } = useSWR(dataURL, fetcher);

  const widthRef = useRef(null);

  if (!data && dataURL) {
    return <CollectionSkeleton />;
  }

  const handleEnter = () => setShowBtns(true);
  const handleLeave = () => setShowBtns(false);

  const handleLeftScroll = () => {
    const y = widthRef.current.offsetWidth;
    if (x - 0.25 * y >= 0) setX((prev) => prev - 0.25 * y);
  };

  const handleRightScroll = () => {
    const y = widthRef.current.offsetWidth;
    if (x + 0.25 * y < y) setX((prev) => prev + 0.25 * y);
  };

  return (
    <section
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={styles.collection_container}
    >
      <article className={styles.collection_type}>
        {linkPath ? (
          <Link href={linkPath} className={styles.links}>
            <h2>{type}</h2>
          </Link>
        ) : (
          <h2>{type}</h2>
        )}
      </article>
      {showBtns && (
        <>
          <button
            aria-hidden
            className={styles.carousel_btns_left}
            onClick={handleLeftScroll}
          >
            <FaAnglesLeft />
          </button>
          <button
            aria-hidden
            className={styles.carousel_btns_right}
            onClick={handleRightScroll}
          >
            <FaAnglesRight />
          </button>
        </>
      )}
      <section
        ref={widthRef}
        className={styles.collection}
        style={{
          transform: `translateX(-${
            widthRef.current && x == 0.75 * widthRef.current.offsetWidth ? x + 4 * 16 : x
          }px)`,
        }}
      >
        {data
          ? data.results
              .slice(0, 10)
              .map((item) => (
                <Card key={item.id} item={item} mediatype={mediatype} />
              ))
          : null}
        {userlist
          ? userlist.map((item) => (
              <Card key={item.id} item={item} mediatype={mediatype} />
            ))
          : null}
      </section>
    </section>
  );
};
