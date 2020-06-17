
export const SET_MOVIE = 'SET_MOVIE';
export const SET_MOVIE_ID = 'SET_MOVIE_ID';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_SIMILAR = 'SET_SIMILAR';
export const MOVIE_IS_LOADING = 'MOVIE_IS_LOADING';
export const MOVIE_SIMILAR_IS_LOADING = 'MOVIE_SIMILAR_IS_LOADING';
export const MOVIE_TRAILERS_IS_LOADING = 'MOVIE_TRAILERS_IS_LOADING';
export const SET_MOVIE_ERROR = 'SET_MOVIE_ERROR';
export const SET_MOVIE_SIMILAR_ERROR = 'SET_MOVIE_SIMILAR_ERROR';
export const SET_MOVIE_TRAILERS_ERROR = 'SET_MOVIE_TRAILERS_ERROR';
// const UPDATE_MOVIE_TITLE = 'UPDATE_MOVIE_TITLE';
// const SET_MOVIE_GENRE_LIST = 'SET_MOVIE_GENRE_LIST';

let initialState = {
    movieId: '',
    movie: null,
    videos: null,
    similar: null,
    movieIsLoading: true,
    movieSimilarIsLoading: true,
    movieTrailersIsLoading: true,
    movieError: false,
    movieSimilarError: false,
    movieTrailersError: false,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movie: action.movie
            };
        case SET_MOVIE_ERROR:
            return {
                ...state,
                movieError: action.bool
            };
        case SET_MOVIE_SIMILAR_ERROR:
            return {
                ...state,
                movieSimilarError: action.bool
            };
        case SET_MOVIE_TRAILERS_ERROR:
            return {
                ...state,
                movieTrailersError: action.bool
            };
        case SET_MOVIE_ID:
            return {
                ...state,
                movieId: action.movieId
            };
        case MOVIE_IS_LOADING:
            return {
                ...state,
                movieIsLoading: action.bool
            };
        case MOVIE_SIMILAR_IS_LOADING:
            return {
                ...state,
                movieSimilarIsLoading: action.bool
            };
        case MOVIE_TRAILERS_IS_LOADING:
            return {
                ...state,
                movieTrailersIsLoading: action.bool
            };
        case SET_VIDEOS:
            return {
                ...state,
                videos: action.videos
            };
        case SET_SIMILAR:
            return {
                ...state,
                similar: action.similar
            }

        default:
            return state;
    }
}

export default movieReducer;