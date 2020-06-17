import {tvAPI} from "../../api/api";
import {
    POPULAR_TV_LIST_IS_LOADING,
    SET_POPULAR_TV_LIST,
    SET_POPULAR_TV_LIST_ERROR
} from "../reducers/popularTvList-reducer";

export const setPopularTvList = (popularTvList) => ({type: SET_POPULAR_TV_LIST, popularTvList});
export const popularTvListIsLoading = (bool) => ({type: POPULAR_TV_LIST_IS_LOADING, bool});
export const setPopularTvListError = (bool) => ({type: SET_POPULAR_TV_LIST_ERROR, bool});

export const getPopularTv = (page) => {
    return (dispatch) => {
        dispatch(popularTvListIsLoading(true))
        tvAPI.getPopularTvList(page).then(
            response => {
                dispatch(setPopularTvListError(false))
                dispatch(setPopularTvList(response))
                dispatch(popularTvListIsLoading(false))
            },
            error => {
                dispatch(setPopularTvListError(true))
                dispatch(popularTvListIsLoading(false))
            })
    }
}