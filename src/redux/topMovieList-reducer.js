import {movieAPI} from "../api/api";

const SET_TOP_MOVIE_LIST = 'SET_TOP_MOVIE_LIST';

let initialState = {
    topMovieList: null,
    page: 1,
    totalPages: null
}

const topMovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_MOVIE_LIST:
            return {
                topMovieList: action.topMovieList,
                page: action.topMovieList.data.page,
                totalPages: action.topMovieList.data.total_pages,
            }
        default:
            return state;
    }
}

export const setTopMovieList = (topMovieList) => ({type: SET_TOP_MOVIE_LIST, topMovieList})

export const getTopMovie = (page) => {
    return (dispatch) => {
        movieAPI.getTopMovieList(page).then(response => {
            dispatch(setTopMovieList(response))
        })
    }
}

export default topMovieListReducer;