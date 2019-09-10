import * as types from "../actions/actionsTypes";
import { base_URL } from '../_utils/config.js';

import axios from "axios";

const getUserById         = payload => ({type: types.GET_USER_BY_ID, payload});
const getUserByIdSuccess  = payload => ({type: types.GET_USER_BY_ID_SUCCESS, payload});
const getUserByIdFail     = payload => ({type: types.GET_USER_BY_ID_FAIL, payload});

const putUserById         = payload => ({type: types.PUT_USER_BY_ID, payload});
const putUserByIdSuccess  = payload => ({type: types.PUT_USER_BY_ID_SUCCESS, payload});
const putUserByIdFail     = payload => ({type: types.PUT_USER_BY_ID_FAIL, payload});

export const getUserByIdRequest = id => async dispatch => {

    const token = localStorage.getItem("token");

    dispatch(getUserById());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/users/${id}`
        });
        // console.log(' getUserByIdRequest data ',data);
        dispatch(getUserByIdSuccess(data))
    }
    catch (err) {
        dispatch(getUserByIdFail(err));
    }
};

export const updateUserByIdRequest = payload => async dispatch => {
    const token = localStorage.getItem("token");
    const { id, values } = payload;

    dispatch(putUserById());
    try {
        const { data } = await axios({
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/users/${id}`,
            data: values
        });
        dispatch(putUserByIdSuccess(data))
    }
    catch (err) {
        dispatch(putUserByIdFail(err));
    }
};
