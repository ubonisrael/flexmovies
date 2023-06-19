import { DisplayPage } from "@/components/displaypage";

export default function TopRated({  pageType,
  pageCat,
  dataURL  }) {

  return (
      <DisplayPage title={'Top Rated Movies'} dataURL={dataURL} pageCat={pageCat} pageType={pageType} />
  );
}

export async function getServerSideProps(context) {
  const pgNo = context.query.toprated ? context.query.toprated : '1'
  const pageCat = 'movie'
  const pageType = 'toprated'
  const dataURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pgNo}`
  return {
    props: {
      pageType,
      pageCat,
      dataURL
    },
  };
}