import { Moviepage } from "@/components/moviepage";
import { fetchMovie, fetchMovieCast } from "@/utils/fetch";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

const MoviePage = ({ movie, movieCast, img, svg}) =>  (
      <Moviepage item={movie} casts={movieCast} img={img} svg={svg} />
  );

export default MoviePage

export async function getServerSideProps(context) {
  const movieId = context.query.movie
  const [movie, movieCast] = await Promise.all([fetchMovie(movieId, process.env.NEXT_PUBLIC_TMDB_API_KEY), fetchMovieCast(movieId, process.env.NEXT_PUBLIC_TMDB_API_KEY)])
  const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)


  return {
    props: {
      movie,
      movieCast,
      img,
      svg
    },
  };
}