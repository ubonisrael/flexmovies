import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { useRouter } from "next/router";
import { getPlaiceholder } from "plaiceholder";

export default function TopRated({ res }) {

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
      <DisplayPage data={res.results} title={'Top Rated Movies'}/>
      <Pagination page={res.page} totalPages={res.total_pages} nextPage={nextPage} prevPage={prevPage}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.toprated ? context.query.toprated : '1'
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
  
  const resResults = res.results.map(async(data) => {
    data.media = 'movie'
    const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
    return {...data, img, svg}
  })

  const newResults = await Promise.all(resResults)
  return {
    props: {
      res: {...res, results: newResults},
    },
  };
}