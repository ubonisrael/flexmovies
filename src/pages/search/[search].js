import { Card } from "@/components/card";
import { apikey } from "@/config/apikey";
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
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${apikey}`
  ).then((res) => res.json());
  return {
    props: {
      searchResult,
    },
  };
}
