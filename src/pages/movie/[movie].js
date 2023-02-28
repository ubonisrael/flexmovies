import { Moviepage } from "@/components/moviepage";
import React from "react";

export default function MoviePage({ movie, casts, recommendations }) {
  recommendations.results.forEach((dat) => dat.media = 'movie')
  return (
    <>
      <Moviepage item={movie} casts={casts} rec={recommendations} />
    </>
  );
}

export async function getStaticPaths() {
  const mNowPlaying = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
  ).then((res) => res.json());
  const mPopular = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
  ).then((res) => res.json());
  const mTopRated = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
  ).then((res) => res.json());
  const mUpcoming = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US&page=1"
  ).then((res) => res.json());

  const allmovies = [
    ...mNowPlaying.results,
    ...mPopular.results,
    ...mTopRated.results,
    ...mUpcoming.results,
  ];

  const movieMap = new Map();

  for (let movie of allmovies) {
    movieMap.set(movie.id, movie);
  }

  const iteratorValues = movieMap.values();

  const movies = [...iteratorValues];

  return {
    paths: movies.map((movie) => {
      return {
        params: {
            movie: movie.id.toString()
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const movieId = params.movie;
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US`
  ).then((res) => res.json());
  const casts = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US`
  ).then((res) => res.json());
  const recommendations = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=8a2782e79632aea9f11727ccc210744f&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      movie,
      casts,
      recommendations
    },
  };
}
