import {movieAPI} from "../api/api";

const SET_POPULAR_MOVIE_LIST = 'SET_POPULAR_MOVIE_LIST';

let initialState = {
    popularMovieList: null,
    page: 1,
    totalPages: null
}

const popularMovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIE_LIST:
            return {
                popularMovieList: action.popularMovieList,
                page: action.popularMovieList.data.page,
                totalPages: action.popularMovieList.data.total_pages,
            };
        default:
            return state;
    }
}

export const setPopularMovieList = (popularMovieList) => ({type: SET_POPULAR_MOVIE_LIST, popularMovieList})

export const getPopularMovie = (page) => {
    return (dispatch) => {
        movieAPI.getPopularMovieList(page).then(response => {
            dispatch(setPopularMovieList(response))
        })
    }
}

export default popularMovieListReducer;