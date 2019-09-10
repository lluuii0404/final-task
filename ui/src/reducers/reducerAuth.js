import * as types from "../actions/actionsTypes";

import initialState from "../store/initialState";

export default (state = initialState.auth, { type, payload }) => {
    switch (type) {
        case types.AUTH_LOG_IN_REQUEST: {
            return { ...state, isFetching: true };
        }
        case types.AUTH_LOG_IN_REQUEST_SUCCESS: {
            const { token } = payload;
            return { ...state, token, isFetching: false };
        }
        case types.AUTH_LOG_IN_REQUEST_FAIL: {
            return {...state, isFetching: false, error: payload, message: "Неверный пароль или  e-mail"};
        }
        case types.SET_TOKEN: {
            return { ...state, token: payload };
        }

        case types.AUTH_SIGN_UP_REQUEST: {
            return { ...state, isFetching: true };
        }
        case types.AUTH_SIGN_UP_REQUEST_SUCCESS: {
            const { message } = payload;
            return { ...state, message, isFetching: false };
        }
        case types.AUTH_SIGN_UP_REQUEST_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.AUTH_LOG_OUT_REQUEST: {
            return { ...state, isFetching: true };
        }
        case types.AUTH_LOG_OUT_REQUEST_SUCCESS: {
            const { token, message } = payload;
            return { ...state, token, message: message, isFetching: false, };
        }
        case types.AUTH_LOG_OUT_REQUEST_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state
    }
};
