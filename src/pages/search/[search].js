import { Card } from "@/components/card";
import React from "react";

export default function Search({ searchResult }) {
  return (
    <>
      <h2>Search results</h2>
      <section>
        {searchResult.results
          .filter((result) => result.media_type !== "person")
          .map((result) => (
            <Card
              key={result.id}
              item={result}
              linkPath={`/search/${media_type}/${item.title}`}
            />
          ))}
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const query = context?.query.search;
  const searchResult = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=8a2782e79632aea9f11727ccc210744f`
  ).then((res) => res.json());
  return {
    props: {
      searchResult,
    },
  };
}
