import React, { useState} from "react";
import { Collection } from "./collection";
import styles from '@/styles/homepage.module.scss'

export const HomePage = ({ data }) => {
  const [checked, setChecked] = useState(false);

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      <Collection
        data={checked ? data.trendWeek.results : data.trendDay.results}
        type={"trending"}
        checked={checked}
        setCheckBox={setCheckBox}
        linkPath={checked ? '/trending/week/1' : '/trending/day/1'}
      />
      <Collection data={data.moviesNowPlaying.results} type={"movies now playing"} linkPath='movie/nowplaying/1' />
      <Collection data={data.moviesTopRated.results} type={"top rated movies"} linkPath='movie/toprated/1' />
      <Collection data={data.tvAiringToday.results} type={"TV airing today"} linkPath='tv/today/1' />
      <Collection data={data.tvTopRated.results} type={"top rated TV shows"} linkPath='tv/rated/1' />
    </main>
  );
};
