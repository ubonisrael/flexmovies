import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { apikey } from "@/config/apikey";
import { useRouter } from "next/router";

export default function AirinToday({ res }) {

  const router = useRouter()
  let pageNumber = Number(res.page)

  const nextPage = () => {
    pageNumber++
    router.push(`/tv/today/${pageNumber}`)
  }

  const prevPage = () => {
    pageNumber--
    if (pageNumber < 2) return
    router.push(`/tv/today/${pageNumber}`)
  }

  res.results.forEach(item => item.media = 'tv')

  return (
    <>
      <DisplayPage data={res.results} title={'TV Airing Today'}/>
      <Pagination page={res.page} totalPages={res.total_pages} nextPage={nextPage} prevPage={prevPage}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.today ? context.query.today : '1'
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?&api_key=${apikey}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}