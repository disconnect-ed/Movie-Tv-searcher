
export const SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES';
export const SET_MOVIE_STATES = 'SET_MOVIE_STATES';
export const SET_TV_STATES = 'SET_TV_STATES';
export const SET_FAVORITE_TV = 'SET_FAVORITE_TV';

let initialState = {
    favoriteMovies: null,
    favoriteTv: null,
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

export default userProfileReducer;