
export const SET_TV = 'SET_TV';
export const SET_TV_ID = 'SET_TV_ID';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_SIMILAR = 'SET_SIMILAR';
export const TV_IS_LOADING = 'TV_IS_LOADING'
export const TV_SIMILAR_IS_LOADING = 'TV_SIMILAR_IS_LOADING'
export const TV_TRAILERS_IS_LOADING = 'TV_TRAILERS_IS_LOADING'
export const SET_TV_ERROR = 'SET_TV_ERROR'
export const SET_TV_SIMILAR_ERROR = 'SET_TV_SIMILAR_ERROR'
export const SET_TV_TRAILERS_ERROR = 'SET_TV_TRAILERS_ERROR'

let initialState = {
    tvId: '',
    tv: null,
    videos: null,
    similar: null,
    tvIsLoading: true,
    tvSimilarIsLoading: true,
    tvTrailersIsLoading: true,
    tvError: false,
    tvSimilarError: false,
    tvTrailersError: false,
}

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV_ERROR:
            return {
                ...state,
                tvError: action.bool
            }
        case SET_TV_SIMILAR_ERROR:
            return {
                ...state,
                tvSimilarError: action.bool
            }
        case SET_TV_TRAILERS_ERROR:
            return {
                ...state,
                tvTrailersError: action.bool
            }
        case TV_IS_LOADING:
            return {
                ...state,
                tvIsLoading: action.bool
            }
        case TV_SIMILAR_IS_LOADING:
            return {
                ...state,
                tvSimilarIsLoading: action.bool
            }
        case TV_TRAILERS_IS_LOADING:
            return {
                ...state,
                tvTrailersIsLoading: action.bool
            }
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

export default tvReducer;