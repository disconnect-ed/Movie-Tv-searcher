import {movieAPI} from "../../api/api";
import {
    POPULAR_MOVIE_LIST_IS_LOADING,
    SET_POPULAR_MOVIE_LIST,
    SET_POPULAR_MOVIE_LIST_ERROR
} from "../reducers/popularMovieList-reducer";

export const setPopularMovieList = (popularMovieList) => ({type: SET_POPULAR_MOVIE_LIST, popularMovieList})
export const popularMovieListIsLoading = (bool) => ({type: POPULAR_MOVIE_LIST_IS_LOADING, bool})
export const setPopularMovieListError = (bool) => ({type: SET_POPULAR_MOVIE_LIST_ERROR, bool})

export const getPopularMovie = (page) => {
    return (dispatch) => {
        dispatch(popularMovieListIsLoading(true))
        movieAPI.getPopularMovieList(page).then(
            response => {
                dispatch(setPopularMovieListError(false))
                dispatch(setPopularMovieList(response))
                dispatch(popularMovieListIsLoading(false))
            },
            error => {
                dispatch(setPopularMovieListError(true))
                dispatch(popularMovieListIsLoading(false))
            })
    }
}