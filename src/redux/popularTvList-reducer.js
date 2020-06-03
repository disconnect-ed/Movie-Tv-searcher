import {tvAPI} from "../api/api";

const SET_POPULAR_TV_LIST = 'SET_POPULAR_TV_LIST';

let initialState = {
    popularTvList: null,
    page: 1,
    totalPages: null
}

const popularTvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_TV_LIST:
            return {
                popularTvList: action.popularTvList,
                page: action.popularTvList.data.page,
                totalPages: action.popularTvList.data.total_pages,
            }
        default:
            return state;
    }
}

export const setPopularTvList = (popularTvList) => ({type: SET_POPULAR_TV_LIST, popularTvList});

export const getPopularTv = (page) => {
    return (dispatch) => {
        tvAPI.getPopularTvList(page).then(response => {
            dispatch(setPopularTvList(response))
        })
    }
}


export default popularTvListReducer;