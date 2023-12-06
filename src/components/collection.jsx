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

  useEffect(() => {
    if (widthRef.current) {
      console.log(widthRef.current.offsetWidth, window.innerWidth, x)
      console.log(widthRef.current.parentElement.offsetWidth);
    }
  }, [x])
  const widthRef = useRef(null);

  if (!data && dataURL) {
    return <CollectionSkeleton />;
  }

  const handleEnter = () => setShowBtns(true);
  const handleLeave = () => setShowBtns(false);

  const handleLeftScroll = () => {
    const y = widthRef.current.offsetWidth;
    const z = 0.5 * widthRef.current.parentElement.offsetWidth
    if (x - (z / y) * y >= 0) setX((prev) => prev - (z / y) * y);
    else setX(0)
  };

  const handleRightScroll = () => {
    const y = widthRef.current.offsetWidth;
    const z = 0.5 * widthRef.current.parentElement.offsetWidth
    if (x + ((2 * z) / y) * y < y) setX((prev) => prev + (z / y) * y);
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
            widthRef.current && x >= (1 - (widthRef.current.parentElement.offsetWidth / (widthRef.current.offsetWidth))) * widthRef.current.offsetWidth
              ? (1 - (widthRef.current.parentElement.offsetWidth / (widthRef.current.offsetWidth))) * widthRef.current.offsetWidth
              : x
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
