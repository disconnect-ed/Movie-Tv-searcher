import {movieAPI} from "../api/api";

const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
const UPDATE_MOVIE_TITLE = 'UPDATE_MOVIE_TITLE';

let initialState = {
    movieTitle: '',
    movieList: null,
    page: 1,
    totalPages: null
}

const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.movie,
                totalPages: action.movie.data.total_pages,
                page: action.movie.data.page
            };
        case UPDATE_MOVIE_TITLE:
            return {
                ...state,
                movieTitle: action.movieTitle
            };
        default:
            return state;
    }
}

export const setMovieList = (movie) => ({type: SET_MOVIE_LIST, movie});
export const updateMovieTitle = (movieTitle) => ({type: UPDATE_MOVIE_TITLE, movieTitle});

export const getMovie = (movie, page) => {
    return (dispatch) => {
        movieAPI.getMovieList(movie, page).then(response => {
            dispatch(setMovieList(response))
        })
    }
}

// export const getPopularMovie = (page) => {
//     return (dispatch) => {
//         movieAPI.getPopularMovieList(page).then(response => {
//             dispatch(setPopularMovieList(response))
//         })
//     }
// }

// export const getTopMovie = (page) => {
//     return (dispatch) => {
//         movieAPI.getTopTvList(page).then(response => {
//             dispatch(setTopMovieList(response))
//         })
//     }
// }

export default movieListReducer;