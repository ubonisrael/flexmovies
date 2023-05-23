import { Collection } from "@/components/collection";
import { mNowPlaying, mPopular, mTopRated, mUpcoming } from "@/utils/fetch";
import { getPlaiceholder } from "plaiceholder";

const Movies = ({ data }) => (
  <>
    <Collection
      data={data.moviesTopRated.results}
      type={"top rated movies"}
      linkPath="movie/toprated/1"
    />
    <Collection
      data={data.moviesUpcoming.results}
      type={"upcoming movies"}
      linkPath="movie/upcoming/1"
    />
    <Collection
      data={data.moviesNowPlaying.results}
      type={"movies now playing"}
      linkPath="movie/nowplaying/1"
    />
    <Collection
      data={data.moviesPopular.results}
      type={"popular movies"}
      linkPath="movie/popular/1"
    />
  </>
);

export default Movies;

export async function getServerSideProps(context) {
  const [moviesNowPlaying, moviesPopular, moviesTopRated, moviesUpcoming] =
    await Promise.all([
      mNowPlaying(process.env.NEXT_PUBLIC_TMDB_API_KEY),
      mPopular(process.env.NEXT_PUBLIC_TMDB_API_KEY),
      mTopRated(process.env.NEXT_PUBLIC_TMDB_API_KEY),
      mUpcoming(process.env.NEXT_PUBLIC_TMDB_API_KEY),
    ]);

  //movies
  const mnpResults = moviesNowPlaying.results.map(async(data) => {
    data.media = 'movie'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const mnpr = await Promise.all(mnpResults)

  const mpResults = moviesPopular.results.map(async(data) => {
    data.media = 'movie'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const mpr = await Promise.all(mpResults)

  const mtResults = moviesTopRated.results.map(async(data) => {
    data.media = 'movie'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const mtr = await Promise.all(mtResults)

  const mupResults = moviesUpcoming.results.map(async(data) => {
    data.media = 'movie'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const mup = await Promise.all(mupResults)

  const data = {
    moviesNowPlaying: {...moviesNowPlaying, results: mnpr},
    moviesPopular: {...moviesPopular, results: mpr},
    moviesTopRated: {...moviesTopRated, results: mtr},
    moviesUpcoming: {...moviesUpcoming, results: mup},
  };

  return {
    props: {
      data,
    },
  };
}
