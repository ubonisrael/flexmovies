import { Moviepage } from "@/components/moviepage";
import { apikey } from "@/config/apikey";
import React from "react";

export default function MoviePage({ show, casts, recommendations }) {
    recommendations.results.forEach((dat) => dat.media = 'tv')
  return (
    <>
      <Moviepage item={show} casts={casts} rec={recommendations} />
    </>
  );
}

export async function getServerSideProps(context) {
  const showId = context.query.tv
  const show = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${apikey}&language=en-US`
  ).then((res) => res.json());
  const casts = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${apikey}&language=en-US`
  ).then((res) => res.json());
  const recommendations = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/recommendations?api_key=${apikey}&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      show,
      casts,
      recommendations
    },
  };
}