import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { apikey } from "@/config/apikey";
import { useRouter } from "next/router";

export default function Upcoming({ res }) {

  const router = useRouter()
  let pageNumber = Number(res.page)

  const nextPage = () => {
    pageNumber++
    router.push(`/movie/toprated/${pageNumber}`)
  }

  const prevPage = () => {
    pageNumber--
    if (pageNumber < 2) return
    router.push(`/movie/toprated/${pageNumber}`)
  }

  res.results.forEach(item => item.media = 'movie')

  return (
    <>
      <DisplayPage data={res.results} title={'Popular Movies'}/>
      <Pagination page={res.page} totalPages={res.total_pages} nextPage={nextPage} prevPage={prevPage}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.upcoming ? context.query.upcoming : '1'
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?&api_key=${apikey}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}