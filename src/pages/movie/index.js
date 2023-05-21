import { Collection } from "@/components/collection";
import { useState } from "react";

export default function Movies({ data }) {
  const [checked, setChecked] = useState(false);

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };
  
  return (
    <>
    <Collection
        data={checked ? data.moviesTrendingWeek.results : data.moviesTrendingDay.results}
        type={"trending movies"}
        checked={checked}
        setCheckBox={setCheckBox}
        linkPath={checked ? '/movie/trending/week': '/movie/trending/day'}
      />
      <Collection data={data.moviesTopRated.results} type={"top rated movies"} linkPath='movie/toprated/1' />
      <Collection data={data.moviesUpcoming.results} type={"upcoming movies"} linkPath='movie/upcoming/1' />
      <Collection data={data.moviesNowPlaying.results} type={"movies now playing"} linkPath='movie/nowplaying/1' />
      <Collection data={data.moviesPopular.results} type={"popular movies"} linkPath='movie/popular/1' />
    </>
  );
}
