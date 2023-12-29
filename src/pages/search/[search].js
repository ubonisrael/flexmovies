import React from "react";
import { DisplayPage } from "@/components/displayPage";

export default function Search({ 
  pageCat,
  pageType,
  dataURL }) {

  return (
    <>
      <DisplayPage title={''} dataURL={dataURL} pageCat={pageCat} pageType={pageType} />
    </>
  );
}

export async function getServerSideProps(context) {
  const search = context?.query.search;
  const page = context?.query.page;
  const pageCat = 'search'
  const dataURL =  `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
   
  return {
    props: {
      pageCat,
      pageType: search,
      dataURL
    },
  };
}