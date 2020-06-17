import {tvAPI} from "../../api/api";
import {
    SET_SIMILAR,
    SET_TV, SET_TV_ERROR,
    SET_TV_ID, SET_TV_SIMILAR_ERROR, SET_TV_TRAILERS_ERROR,
    SET_VIDEOS,
    TV_IS_LOADING,
    TV_SIMILAR_IS_LOADING,
    TV_TRAILERS_IS_LOADING
} from "../reducers/tv-reducer";

export const setTv = (tv) => ({type: SET_TV, tv});
export const setTvId = (tvId) => ({type: SET_TV_ID, tvId});
export const setVideos = (videos) => ({type: SET_VIDEOS, videos});
export const setSimilar = (similar) => ({type: SET_SIMILAR, similar});
export const tvIsLoading = (bool) => ({type: TV_IS_LOADING, bool})
export const tvSimilarIsLoading = (bool) => ({type: TV_SIMILAR_IS_LOADING, bool})
export const tvTrailersIsLoading = (bool) => ({type: TV_TRAILERS_IS_LOADING, bool})
export const setTvError = (bool) => ({type: SET_TV_ERROR, bool})
export const setTvSimilarError = (bool) => ({type: SET_TV_SIMILAR_ERROR, bool})
export const setTvTrailersError = (bool) => ({type: SET_TV_TRAILERS_ERROR, bool})

export const getTvId = (tvId) => {
    return (dispatch) => {
        dispatch(setTvId(tvId))
    }
};

export const getTv = (tvId) => {
    return (dispatch) => {
        dispatch(tvIsLoading(true))
        tvAPI.getTv(tvId).then(
            response => {
                dispatch(setTvError(false))
                dispatch(setTv(response.data))
                dispatch(tvIsLoading(false))
            },
            error => {
                dispatch(setTvError(true))
                dispatch(tvIsLoading(false))
            })
    }
}

export const getVideos = (tvId) => {
    return (dispatch) => {
        dispatch(tvTrailersIsLoading(true))
        tvAPI.getVideos(tvId).then(
            response => {
                dispatch(setTvTrailersError(false))
                dispatch(setVideos(response.data))
                dispatch(tvTrailersIsLoading(false))
            },
            error => {
                dispatch(setTvTrailersError(true))
                dispatch(tvTrailersIsLoading(false))
            })
    }
}

export const getSimilar = (tvId) => {
    return (dispatch) => {
        dispatch(tvSimilarIsLoading(true))
        tvAPI.getSimilar(tvId).then(
            response => {
                dispatch(setTvSimilarError(false))
                dispatch(setSimilar(response.data))
                dispatch(tvSimilarIsLoading(false))
            },
            error => {
                dispatch(setTvSimilarError(true))
                dispatch(tvSimilarIsLoading(false))
            })
    }
}