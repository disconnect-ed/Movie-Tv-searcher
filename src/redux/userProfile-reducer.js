import {userProfileAPI} from "../api/api";

const SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES';
const SET_MOVIE_STATES = 'SET_MOVIE_STATES';
const SET_TV_STATES = 'SET_TV_STATES';
const SET_FAVORITE_TV = 'SET_FAVORITE_TV';

let initialState = {
    favoriteMovies: null,
    // favoriteMoviePage: null,
    // favoriteMovieTotalPages: null,

    favoriteTv: null,
    // favoriteTvPage: null,
    // favoriteTvTotalPages: null,


    movieStates: null,
    tvStates: null,
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE_MOVIES:
            return {
                ...state,
                favoriteMovies: action.favoriteMovies,
            }
        case SET_FAVORITE_TV:
            return {
                ...state,
                favoriteTv: {...action.favoriteTv}
            }
        case SET_MOVIE_STATES:
            return {
                ...state,
                movieStates: action.states
            }
        case SET_TV_STATES:
            return {
                ...state,
                tvStates: action.states
            }
        default:
            return state;
    }
}

export const setFavoriteMovies = (favoriteMovies) => ({type: SET_FAVORITE_MOVIES, favoriteMovies})
export const setFavoriteTv = (favoriteTv) => ({type: SET_FAVORITE_TV, favoriteTv})
export const setMovieAccountStates = (states) => ({type: SET_MOVIE_STATES, states})
export const setTvAccountStates = (states) => ({type: SET_TV_STATES, states})

export const getFavoriteMovies = (session_id, page) => {
    return (dispatch) => {
        userProfileAPI.getFavoriteMovies(session_id, page).then(response => {
            dispatch(setFavoriteMovies(response.data))
        })
    }
}

export const getFavoriteTv = (session_id, page) => {
    return (dispatch) => {
        userProfileAPI.getFavoriteTv(session_id, page).then(response => {
            dispatch(setFavoriteTv(response.data))
        })
    }
}

export const markFavorite = (media_id, session_id, favorite, type) => {
    return (dispatch) => {
        userProfileAPI.markFavorite(media_id, session_id, favorite, type)
    }
}

export const getMovieAccountStates = (movieId, sessionId) => {
    return (dispatch) => {
        userProfileAPI.getMovieAccountStates(movieId, sessionId).then(response => {
                dispatch(setMovieAccountStates(response.data))
            }
        )
    }
}

export const getTvAccountStates = (tvId, sessionId) => {
    return (dispatch) => {
        userProfileAPI.getTvAccountStates(tvId, sessionId).then(response => {
                dispatch(setTvAccountStates(response.data))
            }
        )
    }
}


export default userProfileReducer;