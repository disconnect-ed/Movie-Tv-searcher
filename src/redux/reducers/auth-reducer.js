
export const SET_AUTH_REQUEST = 'SET_AUTH_REQUEST';
export const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
export const SET_SESSION_DATA = 'SET_SESSION_DATA';
export const DELETE_SESSION_DATA = 'DELETE_SESSION_DATA';
export const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    username: null,
    success: false,
    session_id: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_REQUEST:
            return {
                ...state,
                request: action.request
            }
        case SET_LOGIN_DATA:
            return {
                ...state,
                username: action.username
            }
        case SET_SESSION_DATA:
            return {
                ...state,
                ...action.payload
            }
        case DELETE_SESSION_DATA:
            return {
                username: null,
                success: false,
                session_id: null,
            }
        case SET_AUTH_DATA:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;