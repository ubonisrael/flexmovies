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
      />
      <Collection data={data.moviesTopRated.results} type={"top rated movies"} />
      <Collection data={data.moviesUpcoming.results} type={"upcoming movies"} />
      <Collection data={data.moviesNowPlaying.results} type={"movies now playing"} />
      <Collection data={data.moviesPopular.results} type={"popular movies"} />
      <Collection data={data.tvPopular.results} type={"popular TV shows"} />
      <Collection data={data.tvTopRated.results} type={"top rated TV shows"} />
      <Collection data={data.tvOnTheAir.results} type={"on the air"} />
      <Collection data={data.tvAiringToday.results} type={"airing today"} />
    </main>
  );
};
