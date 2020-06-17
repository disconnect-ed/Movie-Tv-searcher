import {tvAPI} from "../../api/api";
import {SET_TOP_TV_LIST, SET_TOP_TV_LIST_ERROR, TOP_TV_LIST_IS_LOADING} from "../reducers/topTvList-reducer";

export const setTopTvList = (topTvList) => ({type: SET_TOP_TV_LIST, topTvList});
export const topTvListIsLoading = (bool) => ({type: TOP_TV_LIST_IS_LOADING, bool});
export const setTopTvListError = (bool) => ({type: SET_TOP_TV_LIST_ERROR, bool});

export const getTopTv = (page) => {
    return (dispatch) => {
        dispatch(topTvListIsLoading(true))
        tvAPI.getTopTvList(page).then(
            response => {
                dispatch(setTopTvListError(false))
                dispatch(setTopTvList(response))
                dispatch(topTvListIsLoading(false))
            },
            error => {
                dispatch(setTopTvListError(true))
                dispatch(topTvListIsLoading(false))
            })
    }
}