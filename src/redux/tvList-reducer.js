import {movieAPI} from "../api/api";

const SET_TV_LIST = 'SET_MOVIE_LIST';
const UPDATE_TV_TITLE = 'UPDATE_MOVIE_TITLE';

let initialState = {
    tvTitle: '',
    tvList: null,
}

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV_LIST:
            return {
                ...state,
                tvList: action.tv
            };
        case UPDATE_TV_TITLE:
            return {
                ...state,
                tvTitle: action.tvTitle
            }
        default:
            return state;
    }
}

export const setTvList = (tv) => ({type: SET_TV_LIST, tv});
export const updateTvTitle = (tvTitle) => ({type: UPDATE_TV_TITLE, tvTitle});

export const getTv = (tv) => {
    return (dispatch) => {
        movieAPI.getTvList(tv).then(response => {
            dispatch(setTvList(response))
        })
    }
}

export default tvReducer;