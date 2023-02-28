import { Collection } from "@/components/collection";

export default function Movies({ data }) {

  data.mTopRated.results.forEach((dat) => dat.media = 'movie')
  data.mUpcoming.results.forEach((dat) => dat.media = 'movie')
  data.mNowPlaying.results.forEach((dat) => dat.media = 'movie')
  data.mPopular.results.forEach((dat) => dat.media = 'movie')

  console.log(data.mTopRated.results);
  return (
    <>
      <Collection data={data.mTopRated.results} type={"top rated movies"} />
      <Collection data={data.mUpcoming.results} type={"upcoming movies"} />
      <Collection data={data.mNowPlaying.results} type={"movies now playing"} />
      <Collection data={data.mPopular.results} type={"popular movies"} />
    </>
  );
}
