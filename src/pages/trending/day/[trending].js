import { DisplayPage } from "@/components/displaypage";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Pagination } from "@/components/pagination";
import { useRouter } from "next/router";

export default function TrendingDay({ res }) {
  
  const router = useRouter();
  
  let pageNumber = Number(res.page);

  const nextPage = () => {
    pageNumber++;
    router.push(`/trending/day/${pageNumber}`);
  };

  const prevPage = () => {
    pageNumber--;
    router.push(`/trending/day/${pageNumber}`);
  };

  return (
    <>
    <Navbar />
      <Header />
      <DisplayPage data={res.results} title={"Trending Today"} />
      <Pagination
        page={res.page}
        totalPages={res.total_pages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.trending ? context.query.trending : "1";
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}