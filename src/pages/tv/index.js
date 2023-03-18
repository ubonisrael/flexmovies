import { Collection } from "@/components/collection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { useState } from "react";

export default function TvShows({ data }) {

  const [checked, setChecked] = useState(false);

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
    <Navbar />
      <Header />
    <Collection
        data={checked ? data.tvTrendingWeek.results : data.tvTrendingDay.results}
        type={"trending TV shows"}
        checked={checked}
        setCheckBox={setCheckBox}
        linkPath={checked ? '/tv/trending/week': '/tv/trending/day'}
      />
      <Collection data={data.tvPopular.results} type={"popular TV shows"} linkPath='tv/popular/1' />
      <Collection data={data.tvTopRated.results} type={"top rated TV shows"} linkPath='tv/rated/1' />
      <Collection data={data.tvOnTheAir.results} type={"TV on the air"} linkPath='tv/air/1' />
      <Collection data={data.tvAiringToday.results} type={"TV airing today"} linkPath='tv/today/1' />
      <Footer />
    </>
  );
}
