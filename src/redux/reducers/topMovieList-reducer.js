
export const SET_TOP_MOVIE_LIST = 'SET_TOP_MOVIE_LIST';
export const TOP_MOVIE_LIST_IS_LOADING = 'TOP_MOVIE_LIST_IS_LOADING';
export const SET_TOP_MOVIE_LIST_ERROR = 'SET_TOP_MOVIE_LIST_ERROR';

let initialState = {
    topMovieList: null,
    page: 1,
    totalPages: null,
    topMovieListIsLoading: false,
    topMovieListError: false,
}

const topMovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_MOVIE_LIST:
            return {
                ...state,
                topMovieList: action.topMovieList,
                page: action.topMovieList.data.page,
                totalPages: action.topMovieList.data.total_pages,
            }
        case TOP_MOVIE_LIST_IS_LOADING:
            return {
                ...state,
                topMovieListIsLoading: action.bool,
            }
        case SET_TOP_MOVIE_LIST_ERROR:
            return {
                ...state,
                topMovieListError: action.bool,
            }
        default:
            return state;
    }
}

export default topMovieListReducer;