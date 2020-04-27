import {movieAPI} from "../api/api";

const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
const UPDATE_MOVIE_TITLE = 'UPDATE_MOVIE_TITLE';
const SET_MOVIE_GENRE_LIST = 'SET_MOVIE_GENRE_LIST';

let initialState = {
    movieTitle: '',
    movieList: null,
    movieGenreList: null
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.movie
            };
        case UPDATE_MOVIE_TITLE:
            return {
                ...state,
                movieTitle: action.movieTitle
            }
        default:
            return state;
    }
}

export const setMovieList = (movie) => ({type: SET_MOVIE_LIST, movie});
export const setMovieGenreList = (genre) => ({type: SET_MOVIE_GENRE_LIST, genre})
export const updateMovieTitle = (movieTitle) => ({type: UPDATE_MOVIE_TITLE, movieTitle});

export const getMovie = (movie) => {
    return (dispatch) => {
        movieAPI.getMovieList(movie).then(response => {
            dispatch(setMovieList(response))
        })
    }
}

export default moviesReducer;