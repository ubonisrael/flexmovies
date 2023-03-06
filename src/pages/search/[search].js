import React from "react";
import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { apikey } from "@/config/apikey";
import { useRouter } from "next/router";

export default function Search({ search, searchResult }) {

  const router = useRouter()
  let pageNumber = Number(searchResult.page)

  const nextPage = () => {
    pageNumber++
    router.push({
      pathname: `/search/${search}`,
      query: { search, page: pageNumber }})
  }

  const prevPage = () => {
    pageNumber--
    if (pageNumber < 2) return
    router.push({
      pathname: `/search/${search}`,
      query: { search, page: pageNumber }})
  }

  return (
    <>
      <h2>{`Found ${searchResult.total_results} results for '${search}'`}</h2>
      <DisplayPage data={searchResult.results} title={''} />
      <Pagination
        page={searchResult.page}
        totalPages={searchResult.total_pages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const search = context?.query.search;
  const page = context?.query.page;
  const searchResult = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      search,
      searchResult,
    },
  };
}
