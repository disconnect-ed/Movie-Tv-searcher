
export const SET_TOP_TV_LIST = 'SET_TOP_TV_LIST';
export const TOP_TV_LIST_IS_LOADING = 'TOP_TV_LIST_IS_LOADING';
export const SET_TOP_TV_LIST_ERROR = 'SET_TOP_TV_LIST_ERROR';

let initialState = {
    topTvList: null,
    page: 1,
    totalPages: null,
    topTvListIsLoading: false,
    topTvListError: false,
}

const topTvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_TV_LIST:
            return {
                ...state,
                topTvList: action.topTvList,
                page: action.topTvList.data.page,
                totalPages: action.topTvList.data.total_pages,
            }
        case TOP_TV_LIST_IS_LOADING:
            return {
                ...state,
                topTvListIsLoading: action.bool
            }
        case SET_TOP_TV_LIST_ERROR:
            return {
                ...state,
                topTvListError: action.bool
            }
        default:
            return state;
    }
}

export default topTvListReducer;