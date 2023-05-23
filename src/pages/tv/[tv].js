import { Moviepage } from "@/components/moviepage";
import { fetchTv, fetchTvCast } from "@/utils/fetch";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

const TvPage = ({ show, showCasts, svg, img }) => (
    <>
      <Moviepage item={show} casts={showCasts} svg={svg} img={img}/>
    </>
  );

export default TvPage

export async function getServerSideProps(context) {
  const showId = context.query.tv
  const [show, showCasts] = await Promise.all([fetchTv(showId, process.env.NEXT_PUBLIC_TMDB_API_KEY), fetchTvCast(showId, process.env.NEXT_PUBLIC_TMDB_API_KEY)])
  const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${show.poster_path}`)

  return {
    props: {
      show,
      showCasts,
      img,
      svg
    },
  };
}