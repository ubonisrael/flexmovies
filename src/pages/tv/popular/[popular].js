import { DisplayPage } from "@/components/displaypage";

export default function PopularTV({ pageType, pageCat, dataURL }) {
  return (
    <DisplayPage
      title={"Popular TV Shows"}
      dataURL={dataURL}
      pageCat={pageCat}
      pageType={pageType}
    />
  );
}

export async function getServerSideProps(context) {
  const page = context.query.upcoming ? context.query.upcoming : "1";
  const pageCat = "tv";
  const pageType = "popular";
  const dataURL = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`;
  return {
    props: {
      pageType,
      pageCat,
      dataURL,
    },
  };
}