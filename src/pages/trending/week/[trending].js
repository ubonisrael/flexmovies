import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { useRouter } from "next/router";
import { getPlaiceholder } from "plaiceholder";

export default function TrendingDay({ res }) {
  
  const router = useRouter();
  
  let pageNumber = Number(res.page);

  const nextPage = () => {
    pageNumber++;
    router.push(`/trending/week/${pageNumber}`);
  };

  const prevPage = () => {
    pageNumber--;
    router.push(`/trending/week/${pageNumber}`);
  };

  return (
    <>
      <DisplayPage data={res.results} title={"Trending This Week"} />
      <Pagination
        page={res.page}
        totalPages={res.total_pages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.trending ? context.query.trending : "1";
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
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