import { Moviepage } from "@/components/moviepage";
import React from "react";

export default function MoviePage({ show, casts, recommendations }) {
    recommendations.results.forEach((dat) => dat.media = 'tv')
  return (
    <>
      <Moviepage item={show} casts={casts} rec={recommendations} />
    </>
  );
}

export async function getStaticPaths() {
    const tvPopular = await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
      ).then(res => res.json());
      const tvTopRated = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
      ).then(res => res.json());
      const tvOnTheAir = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
      ).then(res => res.json());
      const tvAiringToday = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
      ).then(res => res.json());

  const alltv = [
    ...tvPopular.results,
    ...tvTopRated.results,
    ...tvAiringToday.results,
    ...tvOnTheAir.results,
  ];

  const tvMap = new Map();

  for (let tv of alltv) {
    tvMap.set(tv.id, tv);
  }

  const iteratorValues = tvMap.values();

  const tvshows = [...iteratorValues];

  return {
    paths: tvshows.map((show) => {
      return {
        params: {
            tv: show.id.toString()
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const showId = params.tv;
  const show = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US`
  ).then((res) => res.json());
  const casts = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US`
  ).then((res) => res.json());
  const recommendations = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/recommendations?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      show,
      casts,
      recommendations
    },
  };
}
