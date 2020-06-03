import {tvAPI} from "../api/api";

const SET_TV = 'SET_TV';
const SET_TV_ID = 'SET_TV_ID';
const SET_VIDEOS = 'SET_VIDEOS';
const SET_SIMILAR = 'SET_SIMILAR';


let initialState = {
    tvId: '',
    tv: null,
    videos: null,
    similar: null,

}

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV:
            return {
                ...state,
                tv: action.tv
            }
        case SET_TV_ID:
            return {
                ...state,
                tvId: action.tvId
            }
        case SET_VIDEOS:
            return {
                ...state,
                videos: action.videos
            }
        case SET_SIMILAR:
            return {
                ...state,
                similar: action.similar
            }

        default:
            return state
    }
}

export const setTv = (tv) => ({type: SET_TV, tv});
export const setTvId = (tvId) => ({type: SET_TV_ID, tvId});
export const setVideos = (videos) => ({type: SET_VIDEOS, videos});
export const setSimilar = (similar) => ({type: SET_SIMILAR, similar});


export const getTvId = (tvId) => {
    return (dispatch) => {
        dispatch(setTvId(tvId))
    }
};

export const getTv = (tvId) => {
    return (dispatch) => {
        tvAPI.getTv(tvId).then(response => {
            dispatch(setTv(response.data))
        })
    }
}

export const getVideos = (tvId) => {
    return (dispatch) => {
        tvAPI.getVideos(tvId).then(response => {
            dispatch(setVideos(response.data))
        })
    }
}

export const getSimilar = (tvId) => {
    return (dispatch) => {
        tvAPI.getSimilar(tvId).then(response => {
            dispatch(setSimilar(response.data))
        })
    }
}



export default tvReducer;