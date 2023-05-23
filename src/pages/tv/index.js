import { Collection } from "@/components/collection";
import {
  tAiringToday,
  tOnTheAir,
  tPopular,
  tTopRated,
} from "@/utils/fetch";
import { getPlaiceholder } from "plaiceholder";

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

  //tv shows
  const tpResults = tvPopular.results.map(async(data) => {
    data.media = 'tv'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const tp = await Promise.all(tpResults)

  const ttrResults = tvTopRated.results.map(async(data) => {
    data.media = 'tv'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const ttr = await Promise.all(ttrResults)

  const totaResults = tvOnTheAir.results.map(async(data) => {
    data.media = 'tv'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const tota = await Promise.all(totaResults)

  const tatResults = tvAiringToday.results.map(async(data) => {
    data.media = 'tv'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const tat = await Promise.all(tatResults)

  const data = {
    tvPopular: {...tvPopular, results: tp},
    tvTopRated: {...tvTopRated, results: ttr},
    tvOnTheAir: {...tvOnTheAir, results: tota},
    tvAiringToday: {...tvAiringToday, results: tat},
  };

  return {
    props: {
      data,
    },
  };
}
