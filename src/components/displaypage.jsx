import React, { useEffect, useState } from "react";
import { Card } from "./card";
import styles from "@/styles/Displaypage.module.scss";
import style from "@/styles/homepage.module.scss";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Pagination } from "./pagination";
import { fetcher } from "@/utils/fetch";
import { Timewindow } from "./timewindow";

export const DisplayPage = ({ title, pageType, pageCat, dataURL, window }) => {
  const [checked, setChecked] = useState(false);
  const { data } = useSWR(dataURL, fetcher);
  const router = useRouter();

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    //when user switches between day or week, set window
    if (window) {
      const win = checked ? "week" : "day";

      router.push({
        pathname: `/${pageCat}/${pageType}/${win}`,
        query: { win, page: "1" },
      });
    }
  }, [checked]);

  if (!data) return;

  console.log(data);

  let pageNumber = Number(data.page);

  const nextPage = () => {
    pageNumber++;
    if (window) {
      const window = checked ? "week" : "day";
      router.push({
        pathname: `/${pageCat}/${pageType}/${window}`,
        query: { window, page: pageNumber },
      });
    } else if (pageCat === "search") {
      router.push({
        pathname: `/${pageCat}/${pageType}`,
        query: { pageType, page: pageNumber },
      });
    } else {
      router.push(`/${pageCat}/${pageType}/${pageNumber}`);
    }
  };

  const prevPage = () => {
    pageNumber--;
    if (pageNumber < 1) return;
    if (window) {
      const window = checked ? "week" : "day";
      router.push({
        pathname: `/${pageCat}/${pageType}/${window}`,
        query: { window, page: pageNumber },
      });
    } else if (pageCat === "search") {
      router.push({
        pathname: `/${pageCat}/${pageType}`,
        query: { pageType, page: pageNumber },
      });
    } else {
      router.push(`/${pageCat}/${pageType}/${pageNumber}`);
    }
  };

  return (
    <main>
      {window ? (
        <Timewindow checked={checked} setCheckBox={setCheckBox} />
      ) : null}
      <div className={styles.display}>
        <h2>{title}</h2>
        <section>
          {data.results.map((dat) => (
            <Card
              key={dat.id}
              item={dat}
              mediatype={
                pageCat === "movie" ? "movie" : pageCat === "tv" ? "tv" : ""
              }
            />
          ))}
        </section>
      </div>
      <Pagination
        page={data.page}
        totalPages={data.total_pages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </main>
  );
};
