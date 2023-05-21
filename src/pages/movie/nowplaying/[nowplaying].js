import { DisplayPage } from "@/components/displaypage";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Pagination } from "@/components/pagination";
import { useRouter } from "next/router";

export default function NowPlaying({ res }) {

  const router = useRouter()
  let pageNumber = Number(res.page)

  const nextPage = () => {
    pageNumber++
    router.push(`/movie/nowplaying/${pageNumber}`)
  }

  const prevPage = () => {
    pageNumber--
    if (pageNumber < 2) return
    router.push(`/movie/nowplaying/${pageNumber}`)
  }

  res.results.forEach(item => item.media = 'movie')

  return (
    <>
    <Navbar />
      <Header />
      <DisplayPage data={res.results} title={'Movies Now Playing'}/>
      <Pagination page={res.page} totalPages={res.total_pages} nextPage={nextPage} prevPage={prevPage}/>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.nowplaying ? context.query.nowplaying : '1'
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}