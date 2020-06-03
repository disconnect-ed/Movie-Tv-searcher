import {authAPI} from "../api/api";

const SET_AUTH_REQUEST = 'SET_AUTH_REQUEST';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_SESSION_DATA = 'SET_SESSION_DATA';
const DELETE_SESSION_DATA = 'DELETE_SESSION_DATA';
const SET_AUTH_DATA = 'SET_AUTH_DATA';

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

export const setAuthRequest = (request) => ({type: SET_AUTH_REQUEST, request});
export const setLoginData = (username) => ({type: SET_LOGIN_DATA, username})
export const setSessionData = (session_id, success) => ({type: SET_SESSION_DATA, payload: {session_id, success}})
export const deleteSessionData = () => ({type: DELETE_SESSION_DATA})
export const setAuthData = (session_id, username, success) => ({type: SET_AUTH_DATA, payload: {username, success, session_id}})

export const getAuthRequest = (formData) => {
    debugger
    return (dispatch) => {
        authAPI.createRequestToken().then(response => {
            if (response.data.success === true) {
                // dispatch(setAuthRequest(response));
                dispatch(getLoginData(formData, response.data.request_token));
            }
        })

    }
}

export const getLoginData = (formData, request_token) => {
    return (dispatch) => {
        let {username, password} = formData;
        authAPI.login(username, password, request_token).then(response => {
            if (response.data.success === true) {
                dispatch(setLoginData(username));
                dispatch(getSessionData(request_token, username));
            }
        })
    }
}

export const getSessionData = (request_token, username) => {
    debugger
    return (dispatch) => {
        authAPI.createSession(request_token).then(response => {
            if (response.data.success === true) {
                localStorage.setItem('movieSearcherSessionId', response.data.session_id);
                localStorage.setItem('movieSearcherUsername', username);
                localStorage.setItem('movieSearcherSuccess', 'true');
                dispatch(setSessionData(response.data.session_id, response.data.success));
            }
        })
    }
}

export const logout = (session_id) => {
    debugger
    return (dispatch) => {
        authAPI.logout(session_id).then(response => {
            if (response.data.success === true) {
                localStorage.removeItem('movieSearcherSessionId');
                localStorage.removeItem('movieSearcherUsername');
                localStorage.removeItem('movieSearcherSuccess');
                dispatch(deleteSessionData())
            }
            }
        )
    }
}

export default authReducer;