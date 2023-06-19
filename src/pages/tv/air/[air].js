import { DisplayPage } from "@/components/displaypage";

export default function OnTheAir({ pageType, pageCat, dataURL }) {
  return (
    <DisplayPage
      title={"TV Shows On The Air"}
      dataURL={dataURL}
      pageCat={pageCat}
      pageType={pageType}
    />
  );
}

export async function getServerSideProps(context) {
  const page = context.query.upcoming ? context.query.upcoming : "1";
  const pageCat = "tv";
  const pageType = "air";
  const dataURL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`;
  return {
    props: {
      pageType,
      pageCat,
      dataURL,
    },
  };
}
