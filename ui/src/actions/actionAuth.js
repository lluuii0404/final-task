import * as types from "./actionsTypes";
import { base_URL } from '../_utils/config.js';

import axios from "axios";

export const setToken            = payload => ({ type: types.SET_TOKEN, payload});

const authLoginRequest           = payload => ({ type: types.AUTH_LOG_IN_REQUEST, payload});
const authLoginRequestSuccess    = payload => ({ type: types.AUTH_LOG_IN_REQUEST_SUCCESS, payload});
const authLoginRequestFail       = payload => ({ type: types.AUTH_LOG_IN_REQUEST_FAIL, payload});

const authSignUpRequest          = payload => ({ type: types.AUTH_SIGN_UP_REQUEST, payload});
const authSignUpRequestSuccess   = payload => ({ type: types.AUTH_SIGN_UP_REQUEST_SUCCESS, payload});
const authSignUpRequestFail      = payload => ({ type: types.AUTH_SIGN_UP_REQUEST_FAIL, payload});

const authLogOutRequest          = payload => ({ type: types.AUTH_LOG_OUT_REQUEST, payload});
const authLogOutRequestSuccess   = payload => ({ type: types.AUTH_LOG_OUT_REQUEST_SUCCESS, payload});
const authLogOutRequestFail      = payload => ({ type: types.AUTH_LOG_OUT_REQUEST_FAIL, payload});


export const postSignInRequest = payload => async dispatch => {
    // console.log(' postSignInRequest payload---> ', payload);
    dispatch(authLoginRequest());
    try {
        const { data } = await axios({
            method: "POST",
            url: `${base_URL}/signin`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: payload
        });
        localStorage.setItem("token", data.token);

        // console.log(' postSignInRequest data---> ', data);
        dispatch(authLoginRequestSuccess(data));
    } catch (err) {
        dispatch(authLoginRequestFail(err));
    }
};


export const postSignUpAuthRequest = payload => async dispatch => {
    dispatch(authSignUpRequest());
    try {
        const { data } = await axios({
            method: "POST",
            url: `${base_URL}/signup`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: payload
        });
        // console.log(' -----postSignUpAuthRequest data', data);
        dispatch(authSignUpRequestSuccess(data));

        if (data.message === 'User successfully saved.')
            dispatch(postSignInRequest({
                    email: payload.email,
                    password: payload.password
                }
            ))
    } catch (err) {
        dispatch(authSignUpRequestFail(err));
    }
};


export const getLogOutAuthRequest = () => async dispatch => {
    dispatch(authLogOutRequest());
    try {
        const { data } = await axios({
            method: "GET",
            url: `${base_URL}/logout`,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        dispatch(authLogOutRequestSuccess(data));
        localStorage.removeItem ( "token" );
    } catch (err) {
        dispatch(authLogOutRequestFail(err));
    }
};
