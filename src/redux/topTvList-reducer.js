import {tvAPI} from "../api/api";

const SET_TOP_TV_LIST = 'SET_TOP_TV_LIST';

let initialState = {
    topTvList: null,
    page: 1,
    totalPages: null
}

const topTvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_TV_LIST:
            return {
                topTvList: action.topTvList,
                page: action.topTvList.data.page,
                totalPages: action.topTvList.data.total_pages,
            }
        default:
            return state;
    }
}

export const setTopTvList = (topTvList) => ({type: SET_TOP_TV_LIST, topTvList});

export const getTopTv = (page) => {
    return (dispatch) => {
        tvAPI.getTopTvList(page).then(response => {
            dispatch(setTopTvList(response))
        })
    }
}

export default topTvListReducer;