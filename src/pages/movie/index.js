import { Collection } from "@/components/collection";
import { mNowPlaying, mPopular, mTopRated, mUpcoming } from "@/utils/fetch";

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
  moviesNowPlaying.results.forEach((dat) => (dat.media = "movie"));
  moviesPopular.results.forEach((dat) => (dat.media = "movie"));
  moviesTopRated.results.forEach((dat) => (dat.media = "movie"));
  moviesUpcoming.results.forEach((dat) => (dat.media = "movie"));

  const data = {
    moviesNowPlaying,
    moviesPopular,
    moviesTopRated,
    moviesUpcoming,
  };

  return {
    props: {
      data,
    },
  };
}
