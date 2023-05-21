import { Collection } from "@/components/collection";

export default function Movies({ data }) {
  
  return (
    <>
      <Collection data={data.moviesTopRated.results} type={"top rated movies"} linkPath='movie/toprated/1' />
      <Collection data={data.moviesUpcoming.results} type={"upcoming movies"} linkPath='movie/upcoming/1' />
      <Collection data={data.moviesNowPlaying.results} type={"movies now playing"} linkPath='movie/nowplaying/1' />
      <Collection data={data.moviesPopular.results} type={"popular movies"} linkPath='movie/popular/1' />
    </>
  );
}
