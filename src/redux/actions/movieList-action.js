import {movieAPI} from "../../api/api";
import {
    MOVIE_LIST_IS_LOADING,
    SET_MOVIE_LIST,
    SET_MOVIE_LIST_ERROR,
    UPDATE_MOVIE_TITLE
} from "../reducers/movieList-reducer";

export const setMovieList = (movie) => ({type: SET_MOVIE_LIST, movie});
export const updateMovieTitle = (movieTitle) => ({type: UPDATE_MOVIE_TITLE, movieTitle});
export const movieListIsLoading = (bool) => ({type: MOVIE_LIST_IS_LOADING, bool});
export const setMovieListError = (bool) => ({type: SET_MOVIE_LIST_ERROR, bool});

export const getMovie = (movie, page) => {
    return (dispatch) => {
        dispatch(movieListIsLoading(true))
        movieAPI.getMovieList(movie, page).then(
            response => {
                dispatch(setMovieListError(false))
                dispatch(setMovieList(response))
                dispatch(movieListIsLoading(false))
            },
            error => {
                dispatch(setMovieListError(true))
                dispatch(movieListIsLoading(false))
            })
    }
}