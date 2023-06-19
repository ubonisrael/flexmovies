import { DisplayPage } from "@/components/displaypage";

export default function TrendingWeek({ pageType, pageCat, dataURL }) {
  return (
    <DisplayPage
      title={"Trending This Week"}
      dataURL={dataURL}
      pageCat={pageCat}
      pageType={pageType}
    />
  );
}

export async function getServerSideProps(context) {
  const page = context.query.trending ? context.query.trending : "1";
  const pageCat = "trending";
  const pageType = "week";
  const dataURL = `https://api.themoviedb.org/3/trending/all/${pageType}?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`;
  return {
    props: {
      pageType,
      pageCat,
      dataURL,
    },
  };
}