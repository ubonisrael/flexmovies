//fetch movie, cast and recommendations
export async function fetchMovie(movieId, apikey) {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US`
    ).json()
    return movie
}
export async function fetchMovieCast(movieId, apikey) {
    const movieCast = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US`
    ).json()
    return movieCast
}
export async function fetchMovieRecommendations(movieId, apikey) {
    const movieRecommendations = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US`
    ).json()
    return movieRecommendations
}

//fetch tv, cast and recommendations
export async function fetchTv(tvId, apikey) {
    const tv = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apikey}&language=en-US`
    ).json()
    return tv
}
export async function fetchTvCast(tvId, apikey) {
    const tvCast = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apikey}&language=en-US`
    ).json()
    return tvCast
}
export async function fetchTvRecommendations(tvId, apikey) {
    const tvRecommendations = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apikey}&language=en-US`
    ).json()
    return tvRecommendations
}

//fetch trending movies and tv shows, day and week
export async function fetchTrendingDay(page = '1', apikey) {
    const TrendingDay = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?&api_key=${apikey}&language=en-US&page=${page}`
      ).then((res) => res.json());
    return TrendingDay
}
export async function fetchTrendingWeek(page = '1', apikey) {
    const TrendingWeek = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?&api_key=${apikey}&language=en-US&page=${page}`
      ).then((res) => res.json());
    return TrendingWeek
}


//fetch data for home page
export async function mNowPlaying(apikey) {
    const moviesNowPlaying = fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
    ).then((res) => res.json());
    return moviesNowPlaying
}
export async function mPopular(apikey) {
    const moviesPopular = fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return moviesPopular
}

export async function mTopRated(apikey) {
    const moviesTopRated = fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return moviesTopRated
}

export async function mUpcoming(apikey) {
    const moviesUpcoming = fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
    ).then((res) => res.json());
    return moviesUpcoming
}

export async function mTrendingDay(apikey) {
    const moviesTrendingDay = fetch(
        `https://api.themoviedb.org/3/trending/movie/day?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return moviesTrendingDay
}

export async function mTrendingWeek(apikey) {
    const moviesTrendingWeek = fetch(
        `https://api.themoviedb.org/3/trending/movie/week?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return moviesTrendingWeek
}

export async function tPopular(apikey) {
    const tvPopular = fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return tvPopular
}

export async function tTopRated(apikey) {
    const tvTopRated = fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return tvTopRated
}

export async function tOnTheAir(apikey) {
    const tvOnTheAir = fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return tvOnTheAir
}

export async function tAiringToday(apikey) {
    const tvAiringToday = fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return tvAiringToday
}

export async function tTrendingDay(apikey) {
    const tvTrendingDay = fetch(
        `https://api.themoviedb.org/3/trending/tv/day?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
    return tvTrendingDay
}

export async function tTrendingWeek(apikey) {
    const tvTrendingWeek = fetch(
        `https://api.themoviedb.org/3/trending/tv/week?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json());
      return tvTrendingWeek
}