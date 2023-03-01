import { Collection } from "@/components/collection";

export default function TvShows({ data }) {
  return (
    <>
      <Collection data={data.tvPopular.results} type={"popular TV shows"} linkPath='tv/popular/1' />
      <Collection data={data.tvRated.results} type={"top rated TV shows"} linkPath='tv/rated/1' />
      <Collection data={data.tvAir.results} type={"TV on the air"} linkPath='tv/air/1' />
      <Collection data={data.tvToday.results} type={"TV airing today"} linkPath='tv/today/1' />
    </>
  );
}
