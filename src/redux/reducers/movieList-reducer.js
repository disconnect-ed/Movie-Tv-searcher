
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const UPDATE_MOVIE_TITLE = 'UPDATE_MOVIE_TITLE';
export const MOVIE_LIST_IS_LOADING = 'MOVIE_LIST_IS_LOADING';
export const SET_MOVIE_LIST_ERROR = 'SET_MOVIE_LIST_ERROR'

let initialState = {
    movieTitle: '',
    movieList: null,
    page: 1,
    totalPages: null,
    movieListIsLoading: false,
    movieListError: false
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
        case MOVIE_LIST_IS_LOADING:
            return {
                ...state,
                movieListIsLoading: action.bool
            };
        case SET_MOVIE_LIST_ERROR:
            return {
                ...state,
                movieListError: action.bool
            };
        default:
            return state;
    }
}

export default movieListReducer;