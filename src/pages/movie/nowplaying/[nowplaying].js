import { DisplayPage } from "@/components/displaypage";

export default function NowPlaying({
  pageType,
  pageCat,
  dataURL }) {

  return (
      <DisplayPage title={'Movies Now Playing'} dataURL={dataURL} pageCat={pageCat} pageType={pageType} />
  );
}

export async function getServerSideProps(context) {
  const pgNo = context.query.nowplaying ? context.query.nowplaying : '1'
  const pageCat = 'movie'
  const pageType = 'nowplaying'
  const dataURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pgNo}`
  return {
    props: {
      pageType,
      pageCat,
      dataURL
    },
  };
}