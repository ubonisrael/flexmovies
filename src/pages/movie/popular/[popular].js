import { DisplayPage } from "@/components/displaypage";

const Popular = ({ pageType,
  pageCat,
  dataURL }) => {


  return (
      <DisplayPage title={'Popular Movies'} dataURL={dataURL} pageCat={pageCat} pageType={pageType}  />
  );
};

export default Popular;

export async function getServerSideProps(context) {
  const pgNo = context.query.popular ? context.query.popular : '1'
  const pageCat = 'movie'
  const pageType = 'popular'
  const dataURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${pgNo}`
  return {
    props: {
      pageType,
      pageCat,
      dataURL
    },
  };
}