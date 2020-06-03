import * as axios from 'axios';

const key = '52fe61fd3579fa68fb24e9f3ea5690e1';

export const movieAPI = {
    getMovieList(movie, page = 1) {
        return (
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ru-RU&query=${movie}&page=${page}&include_adult=false`)
        )
    },
    getMovie(movieId) {
        return (
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ru-RU`)
        )
    },
    getVideos(movieId) {
        return (
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=ru-RU`)
        )
    },
    getSimilar(movieId) {
        return (
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${key}&language=ru-RU&page=1`)
        )
    },
    getPopularMovieList(page = 1) {
        return (
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=${page}`)
        )
    },
    getTopMovieList(page = 1) {
        return (
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-RU&page=${page}`)
        )
    },

}

export const tvAPI = {
    getTvList(tv, page = 1) {
        return (
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&language=ru-RU&query=${tv}&page=${page}&include_adult=false`)
        )
    },
    getTv(tvId) {
        return (
            axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${key}&language=ru-RU`)
        )
    },
    getVideos(tvId) {
        return (
            axios.get(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${key}&language=ru-RU`)
        )
    },
    getSimilar(tvId) {
        return (
            axios.get(`https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=${key}&language=ru-RU&page=1`)
        )
    },
    getPopularTvList(page = 1) {
        debugger
        return (
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=ru-RU&page=${page}`)
        )
    },
    getTopTvList(page = 1) {
        debugger
        return (
            axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=ru-RU&page=${page}`)
        )
    }
}

export const authAPI = {
    createRequestToken() {
        return (
            axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`)
        )
    },
    login(username, password, request_token) {
        debugger
        return (
            axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${key}`,
                {username, password, request_token})
        )
    },
    createSession(request_token) {
        return (
            axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${key}`,
                {request_token})
        )
    },
    logout(session_id) {
        return (
            axios.delete(`https://api.themoviedb.org/3/authentication/session?api_key=52fe61fd3579fa68fb24e9f3ea5690e1`,
                { data: {session_id}})
        )
    },
}

export const userProfileAPI = {
    getFavoriteMovies(session_id, page = 1) {
        return (
            axios.get(`https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${key}&session_id=${session_id}&language=ru-RU&sort_by=created_at.asc&page=${page}`)
        )
    },
    getFavoriteTv(session_id, page = 1) {
        return (
            axios.get(`https://api.themoviedb.org/3/account/{account_id}/favorite/tv?api_key=${key}&language=ru-RU&session_id=${session_id}&sort_by=created_at.asc&page=${page}`)
        )
    },
    markFavorite(media_id, session_id, favorite, media_type = 'movie') {
        return (
            axios.post(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${key}&session_id=${session_id}`,
                {media_id, media_type, favorite }
                )
        )
    },
    getMovieAccountStates(movieId, session_id) {
        return (
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${key}&session_id=${session_id}`)
        )
    },
    getTvAccountStates(tvId, session_id) {
        return (
            axios.get(`https://api.themoviedb.org/3/tv/${tvId}/account_states?api_key=${key}&language=ru-RU&session_id=${session_id}`)
        )
    }
}

