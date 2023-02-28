import { Collection } from "@/components/collection";

export default function TvShows({ data }) {
  data.tRated.results.forEach((dat) => dat.media = 'tv')
  data.tAir.results.forEach((dat) => dat.media = 'tv')
  data.tToday.results.forEach((dat) => dat.media = 'tv')
  data.tPopular.results.forEach((dat) => dat.media = 'tv')
  return (
    <>
      <Collection data={data.tPopular.results} type={"top rated movies"} />
      <Collection data={data.tRated.results} type={"upcoming movies"} />
      <Collection data={data.tAir.results} type={"movies now playing"} />
      <Collection data={data.tToday.results} type={"popular movies"} />
    </>
  );
}
