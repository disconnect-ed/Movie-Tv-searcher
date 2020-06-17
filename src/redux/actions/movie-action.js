import {movieAPI} from "../../api/api";
import {
    MOVIE_IS_LOADING,
    MOVIE_SIMILAR_IS_LOADING, MOVIE_TRAILERS_IS_LOADING,
    SET_MOVIE, SET_MOVIE_ERROR,
    SET_MOVIE_ID, SET_MOVIE_SIMILAR_ERROR, SET_MOVIE_TRAILERS_ERROR,
    SET_SIMILAR,
    SET_VIDEOS
} from "../reducers/movie-reducer";

export const setMovie = (movie) => ({type: SET_MOVIE, movie});
export const setMovieId = (movieId) => ({type: SET_MOVIE_ID, movieId});
export const setVideos = (videos) => ({type: SET_VIDEOS, videos});
export const setSimilar = (similar) => ({type: SET_SIMILAR, similar});
export const movieIsLoading = (bool) => ({type: MOVIE_IS_LOADING, bool});
export const movieSimilarIsLoading = (bool) => ({type: MOVIE_SIMILAR_IS_LOADING, bool});
export const movieTrailersIsLoading = (bool) => ({type: MOVIE_TRAILERS_IS_LOADING, bool});
export const setMovieError = (bool) => ({type: SET_MOVIE_ERROR, bool});
export const movieSimilarError = (bool) => ({type: SET_MOVIE_SIMILAR_ERROR, bool});
export const movieTrailersError = (bool) => ({type: SET_MOVIE_TRAILERS_ERROR, bool});

export const getMovieId = (movieId) => {
    return (dispatch) => {
        dispatch(setMovieId(movieId));
    }
}

export const getMovie = (movieId) => {
    return (dispatch) => {
        dispatch(movieIsLoading(true))
        movieAPI.getMovie(movieId).then(
            response => {
                dispatch(setMovieError(false))
                dispatch(setMovie(response.data))
                dispatch(movieIsLoading(false))
            },
            error => {
                dispatch(setMovieError(true))
                dispatch(movieIsLoading(false))
            }
        )
    }
}

export const getVideos = (movieId) => {
    return (dispatch) => {
        dispatch(movieTrailersIsLoading(true))
        movieAPI.getVideos(movieId).then(
            response => {
                dispatch(movieTrailersError(false))
                dispatch(setVideos(response.data))
                dispatch(movieTrailersIsLoading(false))
            },
            error => {
                dispatch(movieTrailersError(true))
                dispatch(movieTrailersIsLoading(false))
            })
    }
}

export const getSimilar = (movieId) => {
    return (dispatch) => {
        dispatch(movieSimilarIsLoading(true))
        movieAPI.getSimilar(movieId).then(
            response => {
                dispatch(movieSimilarError(false))
                dispatch(setSimilar(response.data))
                dispatch(movieSimilarIsLoading(false))
            },
            error => {
                dispatch(movieSimilarError(true))
                dispatch(movieSimilarIsLoading(false))
            }
        )
    }
}