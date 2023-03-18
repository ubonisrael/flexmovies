import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Moviepage } from "@/components/moviepage";
import { Navbar } from "@/components/navbar";
import React from "react";

export default function MoviePage({ show, casts, recommendations }) {
    recommendations.results.forEach((dat) => dat.media = 'tv')
  return (
    <>
    <Navbar />
      <Header />
      <Moviepage item={show} casts={casts} rec={recommendations} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const showId = context.query.tv
  const show = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
  const casts = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
  const recommendations = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      show,
      casts,
      recommendations
    },
  };
}