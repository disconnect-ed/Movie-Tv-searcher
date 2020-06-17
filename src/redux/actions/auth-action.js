import {authAPI} from "../../api/api";
import {DELETE_SESSION_DATA, SET_AUTH_DATA, SET_LOGIN_DATA, SET_SESSION_DATA} from "../reducers/auth-reducer";

export const setLoginData = (username) => ({type: SET_LOGIN_DATA, username})
export const setSessionData = (session_id, success) => ({type: SET_SESSION_DATA, payload: {session_id, success}})
export const deleteSessionData = () => ({type: DELETE_SESSION_DATA})
export const setAuthData = (session_id, username, success) => ({type: SET_AUTH_DATA, payload: {username, success, session_id}})

export const getAuthRequest = (formData) => {
    return (dispatch) => {
        authAPI.createRequestToken().then(response => {
            if (response.data.success === true) {
                dispatch(getLoginData(formData, response.data.request_token));
            }
        })

    }
}

const getLoginData = (formData, request_token) => {
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

const getSessionData = (request_token, username) => {
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
