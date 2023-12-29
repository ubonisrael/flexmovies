import { Moviepage } from "@/components/moviePage";
import { fetchTv, fetchTvCast } from "@/utils/fetch";
import React from "react";

const TvPage = ({ show, showCasts }) => (
    <>
      <Moviepage item={show} casts={showCasts} />
    </>
  );

export default TvPage

export async function getServerSideProps(context) {
  const showId = context.query.tv
  const [show, showCasts] = await Promise.all([fetchTv(showId, process.env.NEXT_PUBLIC_TMDB_API_KEY), fetchTvCast(showId, process.env.NEXT_PUBLIC_TMDB_API_KEY)])

  return {
    props: {
      show,
      showCasts
    },
  };
}