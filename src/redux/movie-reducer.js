import {movieAPI} from "../api/api";

const SET_MOVIE = 'SET_MOVIE';
const SET_MOVIE_ID = 'SET_MOVIE_ID';
const SET_VIDEOS = 'SET_VIDEOS';
const SET_SIMILAR = 'SET_SIMILAR';
// const UPDATE_MOVIE_TITLE = 'UPDATE_MOVIE_TITLE';
// const SET_MOVIE_GENRE_LIST = 'SET_MOVIE_GENRE_LIST';

let initialState = {
    movieId: '',
    movie: null,
    videos: null,
    similar: null,
    movieStates: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movie: action.movie
            };
        case SET_MOVIE_ID:
            return {
                ...state,
                movieId: action.movieId
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

export const setMovie = (movie) => ({type: SET_MOVIE, movie});
export const setMovieId = (movieId) => ({type: SET_MOVIE_ID, movieId});
export const setVideos = (videos) => ({type: SET_VIDEOS, videos});
export const setSimilar = (similar) => ({type: SET_SIMILAR, similar});


export const getMovieId = (movieId) => {
    return (dispatch) => {
        dispatch(setMovieId(movieId));
    }
}

export const getMovie = (movieId) => {
    return (dispatch) => {
        movieAPI.getMovie(movieId).then(response => {
            dispatch(setMovie(response.data))
        })
    }
}

export const getVideos = (movieId) => {
    return (dispatch) => {
        movieAPI.getVideos(movieId).then(response => {
            dispatch(setVideos(response.data))
        })
    }
}

export const getSimilar = (movieId) => {
    return (dispatch) => {
        movieAPI.getSimilar(movieId).then(response => {
            dispatch(setSimilar(response.data))
        })
    }
}






export default movieReducer;