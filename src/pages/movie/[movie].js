import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Moviepage } from "@/components/moviepage";
import { Navbar } from "@/components/navbar";
import React from "react";

export default function MoviePage({ movie, casts, recommendations }) {
  recommendations.results.forEach((dat) => dat.media = 'movie')
  return (
    <>
    <Navbar />
      <Header />
      <Moviepage item={movie} casts={casts} rec={recommendations} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const movieId = context.query.movie
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
  const casts = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
  const recommendations = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      movie,
      casts,
      recommendations
    },
  };
}