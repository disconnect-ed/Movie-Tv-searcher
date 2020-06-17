import {userProfileAPI} from "../../api/api";
import {SET_FAVORITE_MOVIES, SET_FAVORITE_TV, SET_MOVIE_STATES, SET_TV_STATES} from "../reducers/userProfile-reducer";

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