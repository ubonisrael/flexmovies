import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { useRouter } from "next/router";

export default function TopRatedTV({ res }) {

  const router = useRouter()
  let pageNumber = Number(res.page)

  const nextPage = () => {
    pageNumber++
    router.push(`/tv/rated/${pageNumber}`)
  }

  const prevPage = () => {
    pageNumber--
    if (pageNumber < 2) return
    router.push(`/tv/rated/${pageNumber}`)
  }

  res.results.forEach(item => item.media = 'tv')

  return (
    <>
      <DisplayPage data={res.results} title={'top rated TV shows'}/>
      <Pagination page={res.page} totalPages={res.total_pages} nextPage={nextPage} prevPage={prevPage}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.rated ? context.query.rated : '1'
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}