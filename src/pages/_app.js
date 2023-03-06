import { MainLayout } from "@/components/main-layout";
import { apikey } from "@/config/apikey";
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

export default function App({ Component, pageProps, data }) {
  
  return (
      <AuthUserProvider>
        <MainLayout>
        <Component {...pageProps} data={data} />
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
        moviesTrendingDay,
        moviesTrendingWeek,
        tvPopular,
        tvTopRated,
        tvOnTheAir,
        tvAiringToday,
        tvTrendingDay,
        tvTrendingWeek,
      ] = await Promise.all([
        fetchTrendingDay("1", apikey),
        fetchTrendingWeek("1", apikey),
        mNowPlaying(apikey),
        mPopular(apikey),
        mTopRated(apikey),
        mUpcoming(apikey),
        mTrendingDay(apikey),
        mTrendingWeek(apikey),
        tPopular(apikey),
        tTopRated(apikey),
        tOnTheAir(apikey),
        tAiringToday(apikey),
        tTrendingDay(apikey),
        tTrendingWeek(apikey),
      ]);

      //movies
      moviesNowPlaying.results.forEach((dat) => (dat.media = "movie"));
      moviesPopular.results.forEach((dat) => (dat.media = "movie"));
      moviesTopRated.results.forEach((dat) => (dat.media = "movie"));
      moviesUpcoming.results.forEach((dat) => (dat.media = "movie"));
      moviesTrendingDay.results.forEach((dat) => (dat.media = "movie"));
      moviesTrendingWeek.results.forEach((dat) => (dat.media = "movie"));
      //tv shows
      tvPopular.results.forEach((dat) => (dat.media = "tv"));
      tvTopRated.results.forEach((dat) => (dat.media = "tv"));
      tvOnTheAir.results.forEach((dat) => (dat.media = "tv"));
      tvAiringToday.results.forEach((dat) => (dat.media = "tv"));
      tvTrendingDay.results.forEach((dat) => (dat.media = "tv"));
      tvTrendingWeek.results.forEach((dat) => (dat.media = "tv"));

      const data = {
        trendDay,
        trendWeek,
        moviesNowPlaying,
        moviesPopular,
        moviesTopRated,
        moviesUpcoming,
        moviesTrendingDay,
        moviesTrendingWeek,
        tvPopular,
        tvTopRated,
        tvOnTheAir,
        tvAiringToday,
        tvTrendingDay,
        tvTrendingWeek,
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
