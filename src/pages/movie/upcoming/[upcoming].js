import { DisplayPage } from "@/components/displayPage";

export default function Upcoming({ pageType,
  pageCat,
  dataURL  }) {

  return (
      <DisplayPage title={'Upcoming Movies'} dataURL={dataURL} pageCat={pageCat} pageType={pageType}  />
  );
}

export async function getServerSideProps(context) {
  const pgNo = context.query.upcoming ? context.query.upcoming : '1'
  const pageCat = 'movie'
  const pageType = 'popular'
  const dataURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pgNo}`
  return {
    props: {
      pageType,
      pageCat,
      dataURL
    },
  };
}