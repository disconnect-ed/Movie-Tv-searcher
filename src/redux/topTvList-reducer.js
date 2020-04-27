import {tvAPI} from "../api/api";

const SET_TV_LIST = 'SET_TV_LIST';
const UPDATE_TV_TITLE = 'UPDATE_TV_TITLE';
// const SET_POPULAR_TV_LIST = 'SET_POPULAR_TV';
const SET_TOP_TV_LIST = 'SET_TOP_TV_LIST';

let initialState = {
    tvTitle: '',
    tvList: null,
    popularTvList: null,
    topTvList: null
}

const tvListReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_TV_LIST:
            return {
                ...state,
                tvList: action.tv
            };
        case UPDATE_TV_TITLE:
            debugger
            return {
                ...state,
                tvTitle: action.tvTitle
            }
        // case SET_POPULAR_TV_LIST:
        //     debugger
        //     return {
        //         ...state,
        //         popularTvList: action.popularTvList
        //     }
        case SET_TOP_TV_LIST:
            debugger
            return {
                ...state,
                topTvList: action.topTvList
            }
        default:
            return state;
    }
}

export const setTvList = (tv) => ({type: SET_TV_LIST, tv});
export const updateTvTitle = (tvTitle) => ({type: UPDATE_TV_TITLE, tvTitle});
// export const setPopularTvList = (popularTvList) => ({type: SET_POPULAR_TV_LIST, popularTvList});
export const setTopTvList = (topTvList) => ({type: SET_TOP_TV_LIST, topTvList});

export const getTv = (tv) => {
    return (dispatch) => {
        tvAPI.getTvList(tv).then(response => {
            dispatch(setTvList(response))
        })
    }
}

// export const getPopularTv = () => {
//     return (dispatch) => {
//         tvAPI.getPopularTvList().then(response => {
//             dispatch(setPopularTvList(response))
//         })
//     }
// }

export const getTopTv = () => {
    return (dispatch) => {
        tvAPI.getTopTvList().then(response => {
            dispatch(setTopTvList(response))
        })
    }
}

export default tvListReducer;