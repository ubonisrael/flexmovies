import { MainLayout } from "@/components/main-layout";
import { AuthUserProvider } from "@/context/AuthUserContext";
import "@/styles/globals.css";
import {
  fetchTrendingDay,
  fetchTrendingWeek,
  mNowPlaying,
  mPopular,
  mTopRated,
  mTrendingDay,
  mTrendingWeek,
  mUpcoming,
  tAiringToday,
  tOnTheAir,
  tPopular,
  tTopRated,
  tTrendingDay,
  tTrendingWeek,
} from "@/utils/fetch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, data }) {
  
  return (
      <AuthUserProvider>
        <MainLayout>
        <Component {...pageProps} data={data} />
        <ToastContainer />
      </MainLayout>
      </AuthUserProvider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {

  async function getData() {
    try {
      const [
        trendDay,
        trendWeek,
        moviesNowPlaying,
        moviesPopular,
        moviesTopRated,
        moviesUpcoming,
        tvPopular,
        tvTopRated,
        tvOnTheAir,
        tvAiringToday,
      ] = await Promise.all([
        fetchTrendingDay("1", process.env.NEXT_PUBLIC_TMDB_API_KEY),
        fetchTrendingWeek("1", process.env.NEXT_PUBLIC_TMDB_API_KEY),
        mNowPlaying(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        mPopular(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        mTopRated(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        mUpcoming(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        tPopular(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        tTopRated(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        tOnTheAir(process.env.NEXT_PUBLIC_TMDB_API_KEY),
        tAiringToday(process.env.NEXT_PUBLIC_TMDB_API_KEY),
      ]);

      //movies
      moviesNowPlaying.results.forEach((dat) => (dat.media = "movie"));
      moviesPopular.results.forEach((dat) => (dat.media = "movie"));
      moviesTopRated.results.forEach((dat) => (dat.media = "movie"));
      moviesUpcoming.results.forEach((dat) => (dat.media = "movie"));
      //tv shows
      tvPopular.results.forEach((dat) => (dat.media = "tv"));
      tvTopRated.results.forEach((dat) => (dat.media = "tv"));
      tvOnTheAir.results.forEach((dat) => (dat.media = "tv"));
      tvAiringToday.results.forEach((dat) => (dat.media = "tv"));

      const data = {
        trendDay,
        trendWeek,
        moviesNowPlaying,
        moviesPopular,
        moviesTopRated,
        moviesUpcoming,
        tvPopular,
        tvTopRated,
        tvOnTheAir,
        tvAiringToday,
      };

      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return { pageProps, data };
    } catch (e) {
      console.log(e);
    }
  }

  
  return getData();
};
