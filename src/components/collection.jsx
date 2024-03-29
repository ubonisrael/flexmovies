import React, { useEffect, useRef, useState } from "react";
import { Card } from "./card";
import styles from "@/styles/Collection.module.scss";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/utils/fetch";
import { CollectionSkeleton } from "./collectionSkeleton";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export const Collection = ({
  type,
  dataURL,
  linkPath,
  mediatype,
  userlist,
}) => {
  const [x, setX] = useState(0); // position of scroll on the horizontal axis
  const [width, setWidth] = useState(null); // the width of the collection
  const [showBtns, setShowBtns] = useState(false);

  const { data } = useSWR(dataURL, fetcher);

  // set the value of width, which is based on the viewport's width
  useEffect(() => {
    if (widthRef.current) {
      const w = widthRef.current.offsetWidth;
      if (w < 425) setWidth(1500);
      else if (w < 768) setWidth(2250);
      else if (w < 1024) setWidth(3000);
      else setWidth(4000);
    }
  }, [data]);

  // when x changes, scroll to the new value of x
  useEffect(() => {
    if (widthRef.current) widthRef.current.scroll(x, 0);
  }, [x]);

  const widthRef = useRef(null);

  // while data is being fetched, show a loading skeleton
  if (!data && dataURL) {
    return <CollectionSkeleton />;
  }

  // toggle button visibility on mouse enter and leave
  const handleEnter = () => setShowBtns(true);
  const handleLeave = () => setShowBtns(false);

  // computes the value of x when collection is scrolled to the left or right
  const handleLeftScroll = () => {
    const z = 0.5 * widthRef.current.offsetWidth;
    if (x - (z / width) * width >= 0)
      setX((prev) => prev - (z / width) * width);
    else setX(0);
  };

  const handleRightScroll = () => {
    const z = 0.5 * widthRef.current.offsetWidth;
    if (x + ((2 * z) / width) * width < width)
      setX((prev) => prev + (z / width) * width);
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
      <section ref={widthRef} className={styles.collection}>
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
