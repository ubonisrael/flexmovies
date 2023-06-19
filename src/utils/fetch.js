export const fetcher = (url) => fetch(url).then(res => res.json())

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