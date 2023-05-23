import { Collection } from "@/components/collection";
import {
  tAiringToday,
  tOnTheAir,
  tPopular,
  tTopRated,
} from "@/utils/fetch";

export default function TvShows({ data }) {

  return (
    <>
      <Collection data={data.tvPopular.results} type={"popular TV shows"} linkPath='tv/popular/1' />
      <Collection data={data.tvTopRated.results} type={"top rated TV shows"} linkPath='tv/rated/1' />
      <Collection data={data.tvOnTheAir.results} type={"TV on the air"} linkPath='tv/air/1' />
      <Collection data={data.tvAiringToday.results} type={"TV airing today"} linkPath='tv/today/1' />
    </>
  );
}

export async function getServerSideProps(context) {
  const [
    tvPopular,
    tvTopRated,
    tvOnTheAir,
    tvAiringToday,
  ] = await Promise.all([
    tPopular(process.env.NEXT_PUBLIC_TMDB_API_KEY),
    tTopRated(process.env.NEXT_PUBLIC_TMDB_API_KEY),
    tOnTheAir(process.env.NEXT_PUBLIC_TMDB_API_KEY),
    tAiringToday(process.env.NEXT_PUBLIC_TMDB_API_KEY),
  ]);

  //tv shows
  tvPopular.results.forEach((dat) => (dat.media = "tv"));
  tvTopRated.results.forEach((dat) => (dat.media = "tv"));
  tvOnTheAir.results.forEach((dat) => (dat.media = "tv"));
  tvAiringToday.results.forEach((dat) => (dat.media = "tv"));

  const data = {
    tvPopular,
    tvTopRated,
    tvOnTheAir,
    tvAiringToday,
  };

  return {
    props: {
      data,
    },
  };
}
