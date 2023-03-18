import { useEffect, useState } from "react";
import { DisplayPage } from "@/components/displaypage";
import { Pagination } from "@/components/pagination";
import { Timewindow } from "@/components/timewindow";
import { useRouter } from "next/router";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";

export default function TrendingMovies({ res }) {
  const [checked, setChecked] = useState(false);
  
  const router = useRouter();
  
  let pageNumber = Number(res.page);

  const setCheckBox = () => {
    setChecked((prev) => !prev);
  };
  
  useEffect(() => {
//when user switches between day or week, set window
    const window = checked ? 'week' : 'day'

    router.push({
      pathname: `/movie/trending/${window}`,
      query: { window, page: pageNumber },
    });
  
  }, [checked])

  const nextPage = () => {
    pageNumber++;
    const window = checked ? 'week' : 'day'
    router.push({
      pathname: `/movie/trending/${window}`,
      query: { window, page: pageNumber },
    });
  };

  const prevPage = () => {
    pageNumber--;
    const window = checked ? 'week' : 'day'
    if (pageNumber < 2) return;
    router.push({
      pathname: `/movie/trending/${window}`,
      query: { window, page: pageNumber },
    });
  };

  return (
    <>
    <Navbar />
      <Header />
      <Timewindow checked={checked} setCheckBox={setCheckBox} />
      <DisplayPage data={res.results} title={"Trending Movies"} />
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
  const page = context.query.page ? context.query.page : "1";
  const window = context.query.window ? context.query.window : "day";
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/${window}?&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());
  return {
    props: {
      res,
    },
  };
}
