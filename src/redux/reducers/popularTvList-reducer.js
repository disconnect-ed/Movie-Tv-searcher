
export const SET_POPULAR_TV_LIST = 'SET_POPULAR_TV_LIST';
export const POPULAR_TV_LIST_IS_LOADING = 'POPULAR_TV_LIST_IS_LOADING';
export const SET_POPULAR_TV_LIST_ERROR = 'SET_POPULAR_TV_LIST_ERROR';

let initialState = {
    popularTvList: null,
    page: 1,
    totalPages: null,
    popularTvListIsLoading: false,
    popularTvListError: false,
}

const popularTvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_TV_LIST:
            return {
                ...state,
                popularTvList: action.popularTvList,
                page: action.popularTvList.data.page,
                totalPages: action.popularTvList.data.total_pages,
            }
        case POPULAR_TV_LIST_IS_LOADING:
            return {
                ...state,
                popularTvListIsLoading: action.bool
            }
        case SET_POPULAR_TV_LIST_ERROR:
            return {
                ...state,
                popularTvListError: action.bool
            }
        default:
            return state;
    }
}

export default popularTvListReducer;