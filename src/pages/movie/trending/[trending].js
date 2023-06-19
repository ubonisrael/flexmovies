import { DisplayPage } from "@/components/displaypage";

export default function TrendingMovies({
  window,
  pageType,
  pageCat,
  dataURL }) {

  return (
      <DisplayPage title={'Trending Movies'} dataURL={dataURL} pageCat={pageCat} pageType={pageType} window={window} />  );
}

export async function getServerSideProps(context) {
  const pgNo = context.query.page ? context.query.page : "1";
  const window = context.query.window ? context.query.window : "day";
  const pageCat = 'movie'
  const pageType = 'trending'
  const dataURL = `https://api.themoviedb.org/3/trending/movie/${window}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pgNo}`
  return {
    props: {
      window,
      pageType,
      pageCat,
      dataURL
    },
  };
}
