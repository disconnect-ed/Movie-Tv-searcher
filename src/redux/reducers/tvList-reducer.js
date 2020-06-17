
export const SET_TV_LIST = 'SET_TV_LIST';
export const UPDATE_TV_TITLE = 'UPDATE_TV_TITLE';
export const TV_LIST_IS_LOADING = 'TV_LIST_IS_LOADING';
export const SET_TV_LIST_ERROR = 'SET_TV_LIST_ERROR';

let initialState = {
    tvTitle: '',
    tvList: null,
    page: 1,
    totalPages: null,
    tvListIsLoading: false,
    tvListError: false
}

const tvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TV_LIST:
            return {
                ...state,
                tvList: action.tv,
                page: action.tv.data.page,
                totalPages: action.tv.data.total_pages,
            };
        case UPDATE_TV_TITLE:
            return {
                ...state,
                tvTitle: action.tvTitle
            }
        case TV_LIST_IS_LOADING:
            return {
                ...state,
                tvListIsLoading: action.bool
            }
        case SET_TV_LIST_ERROR:
            return {
                ...state,
                tvListError: action.bool
            }
        default:
            return state;
    }
}

export default tvListReducer;