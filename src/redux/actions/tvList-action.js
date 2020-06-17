import {tvAPI} from "../../api/api";
import {SET_TV_LIST, SET_TV_LIST_ERROR, TV_LIST_IS_LOADING, UPDATE_TV_TITLE} from "../reducers/tvList-reducer";

export const setTvList = (tv) => ({type: SET_TV_LIST, tv});
export const updateTvTitle = (tvTitle) => ({type: UPDATE_TV_TITLE, tvTitle});
export const tvListIsLoading = (bool) => ({type: TV_LIST_IS_LOADING, bool});
export const setTvListError = (bool) => ({type: SET_TV_LIST_ERROR, bool});

export const getTv = (tv, page) => {
    return (dispatch) => {
        dispatch(tvListIsLoading(true))
        tvAPI.getTvList(tv, page).then(
            response => {
                dispatch(setTvListError(false))
                dispatch(setTvList(response))
                dispatch(tvListIsLoading(false))
            },
            error => {
                dispatch(setTvListError(true))
                dispatch(tvListIsLoading(false))
            })
    }
}