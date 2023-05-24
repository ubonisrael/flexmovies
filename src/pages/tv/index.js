import { Collection } from "@/components/collection";
import {
  tAiringToday,
  tOnTheAir,
  tPopular,
  tTopRated,
} from "@/utils/fetch";

const TvShows = ({ data }) => (
    <>
      <Collection data={data.tvPopular.results} type={"popular TV shows"} linkPath='tv/popular/1' />
      <Collection data={data.tvTopRated.results} type={"top rated TV shows"} linkPath='tv/rated/1' />
      <Collection data={data.tvOnTheAir.results} type={"TV on the air"} linkPath='tv/air/1' />
      <Collection data={data.tvAiringToday.results} type={"TV airing today"} linkPath='tv/today/1' />
    </>
  );

export default TvShows

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
