import { DisplayPage } from "@/components/displaypage";

export default function TrendingDay({ pageType, pageCat, dataURL }) {
  return (
    <DisplayPage
      title={"Trending Today"}
      dataURL={dataURL}
      pageCat={pageCat}
      pageType={pageType}
    />
  );
}

export async function getServerSideProps(context) {
  const page = context.query.trending ? context.query.trending : "1";
  const pageCat = "trending";
  const pageType = "day";
  const dataURL = `https://api.themoviedb.org/3/trending/all/${pageType}?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`;
  return {
    props: {
      pageType,
      pageCat,
      dataURL,
    },
  };
}
