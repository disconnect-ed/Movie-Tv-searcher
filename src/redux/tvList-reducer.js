import {tvAPI} from "../api/api";

const SET_TV_LIST = 'SET_TV_LIST';
const UPDATE_TV_TITLE = 'UPDATE_TV_TITLE';

let initialState = {
    tvTitle: '',
    tvList: null,
    page: 1,
    totalPages: null
}

const tvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV_LIST:
            debugger
            return {
                ...state,
                tvList: action.tv,
                page: action.tv.data.page,
                totalPages: action.tv.data.total_pages,
            };
        case UPDATE_TV_TITLE:
            debugger
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


export const getTv = (tv, page) => {
    return (dispatch) => {
        tvAPI.getTvList(tv, page).then(response => {
            dispatch(setTvList(response))
        })
    }
}

export default tvListReducer;