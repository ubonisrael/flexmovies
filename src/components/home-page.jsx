import React, { useState} from "react";
import { Collection } from "./collection";

export const HomePage = ({ data }) => {
  const [checked, setChecked] = useState(false);

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <main>
      <Collection
        data={checked ? data.trendWeek.results : data.trendDay.results}
        type={"trending"}
        checked={checked}
        setCheckBox={setCheckBox}
        linkPath={checked ? '/trending/week/1' : '/trending/day/1'}
      />
      <Collection data={data.moviesTopRated.results} type={"top rated movies"} linkPath='movie/toprated/1' />
      <Collection data={data.moviesUpcoming.results} type={"upcoming movies"} linkPath='movie/upcoming/1' />
      <Collection data={data.moviesNowPlaying.results} type={"movies now playing"} linkPath='movie/nowplaying/1' />
      <Collection data={data.moviesPopular.results} type={"popular movies"} linkPath='movie/popular/1' />
      <Collection data={data.tvPopular.results} type={"popular TV shows"} linkPath='tv/popular/1' />
      <Collection data={data.tvTopRated.results} type={"top rated TV shows"} linkPath='tv/rated/1' />
      <Collection data={data.tvOnTheAir.results} type={"TV on the air"} linkPath='tv/air/1' />
      <Collection data={data.tvAiringToday.results} type={"TV airing today"} linkPath='tv/today/1' />
    </main>
  );
};
