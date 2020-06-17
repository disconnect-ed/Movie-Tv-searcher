import {movieAPI} from "../../api/api";
import {
    SET_TOP_MOVIE_LIST,
    SET_TOP_MOVIE_LIST_ERROR,
    TOP_MOVIE_LIST_IS_LOADING
} from "../reducers/topMovieList-reducer";

export const setTopMovieList = (topMovieList) => ({type: SET_TOP_MOVIE_LIST, topMovieList})
export const topMovieListIsLoading = (bool) => ({type: TOP_MOVIE_LIST_IS_LOADING, bool})
export const setTopMovieListError = (bool) => ({type: SET_TOP_MOVIE_LIST_ERROR, bool})

export const getTopMovie = (page) => {
    return (dispatch) => {
        dispatch(topMovieListIsLoading(true))
        movieAPI.getTopMovieList(page).then(response => {
                dispatch(setTopMovieListError(false))
                dispatch(setTopMovieList(response))
                dispatch(topMovieListIsLoading(false))
            },
            error => {
                dispatch(setTopMovieListError(true))
                dispatch(topMovieListIsLoading(false))

            })
    }
}