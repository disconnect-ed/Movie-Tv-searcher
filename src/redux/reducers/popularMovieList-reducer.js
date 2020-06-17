
export const SET_POPULAR_MOVIE_LIST = 'SET_POPULAR_MOVIE_LIST';
export const POPULAR_MOVIE_LIST_IS_LOADING = 'POPULAR_MOVIE_LIST_IS_LOADING';
export const SET_POPULAR_MOVIE_LIST_ERROR = 'SET_POPULAR_MOVIE_LIST_ERROR';

let initialState = {
    popularMovieList: null,
    page: 1,
    totalPages: null,
    popularMovieListIsLoading: false,
    popularMovieListError: false
}

const popularMovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIE_LIST:
            return {
                ...state,
                popularMovieList: action.popularMovieList,
                page: action.popularMovieList.data.page,
                totalPages: action.popularMovieList.data.total_pages,
            };
        case POPULAR_MOVIE_LIST_IS_LOADING:
            return {
                ...state,
                popularMovieListIsLoading: action.bool
            };
        case SET_POPULAR_MOVIE_LIST_ERROR:
            return {
                ...state,
                popularMovieListError: action.bool
            };
        default:
            return state;
    }
}

export default popularMovieListReducer;