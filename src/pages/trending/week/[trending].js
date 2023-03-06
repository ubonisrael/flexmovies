import { useEffect, useState } from "react";
import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { apikey } from "@/config/apikey";
import { useRouter } from "next/router";

export default function TrendingDay({ res }) {
  
  const router = useRouter();
  
  let pageNumber = Number(res.page);

  const nextPage = () => {
    pageNumber++;
    router.push(`/trending/week/${pageNumber}`);
  };

  const prevPage = () => {
    pageNumber--;
    router.push(`/trending/week/${pageNumber}`);
  };

  return (
    <>
      <DisplayPage data={res.results} title={"Trending This Week"} />
      <Pagination
        page={res.page}
        totalPages={res.total_pages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.trending ? context.query.trending : "1";
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?&api_key=${apikey}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}