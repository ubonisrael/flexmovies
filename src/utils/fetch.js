import { getPlaiceholder } from "plaiceholder";

//fetch movie, cast
export async function fetchMovie(movieId, apikey) {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US`
    ).then((res) => res.json());
    return movie
}
export async function fetchMovieCast(movieId, apikey) {
    const movieCast = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apikey}&language=en-US`
    ).then((res) => res.json());
    return movieCast
}


//fetch tv, cast
export async function fetchTv(tvId, apikey) {
    const tv = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apikey}&language=en-US`
    ).then((res) => res.json());
    return tv
}
export async function fetchTvCast(tvId, apikey) {
    const tvCast = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${apikey}&language=en-US`
    ).then((res) => res.json());
    return tvCast
}


//fetch trending movies and tv shows, day and week
export async function fetchTrendingDay(page = '1', apikey) {
    const TrendingDay = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?&api_key=${apikey}&language=en-US&page=${page}`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return TrendingDay
}
export async function fetchTrendingWeek(page = '1', apikey) {
    const TrendingWeek = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?&api_key=${apikey}&language=en-US&page=${page}`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return TrendingWeek
}


//fetch data for home page
export async function mNowPlaying(apikey) {
    const moviesNowPlaying = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
    ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    
    return moviesNowPlaying
}
export async function mPopular(apikey) {
    const moviesPopular = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return moviesPopular
}

export async function mTopRated(apikey) {
    const moviesTopRated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return moviesTopRated
}

export async function mUpcoming(apikey) {
    const moviesUpcoming = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
    ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return moviesUpcoming
}

export async function mTrendingDay(apikey) {
    const moviesTrendingDay = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return moviesTrendingDay
}

export async function mTrendingWeek(apikey) {
    const moviesTrendingWeek = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return moviesTrendingWeek
}

export async function tPopular(apikey) {
    const tvPopular = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return tvPopular
}

export async function tTopRated(apikey) {
    const tvTopRated = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return tvTopRated
}

export async function tOnTheAir(apikey) {
    const tvOnTheAir = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return tvOnTheAir
}

export async function tAiringToday(apikey) {
    const tvAiringToday = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return tvAiringToday
}

export async function tTrendingDay(apikey) {
    const tvTrendingDay = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
    return tvTrendingDay
}

export async function tTrendingWeek(apikey) {
    const tvTrendingWeek = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?&api_key=${apikey}&language=en-US&page=1`
      ).then((res) => res.json()).then(async(data) => {
      const {results} = data
      const newResPromises = results.map(async(data) => {
        data.media = 'movie'
        const {img, svg} = await getPlaiceholder(`https://image.tmdb.org/t/p/original/${data.poster_path}`)
        return {...data, img, svg}
      })
      const newResults = await Promise.all(newResPromises)
      return {...data, results: newResults}
    });
      return tvTrendingWeek
}