import initialState from "../store/initialState";
import * as types from '../actions/actionsTypes';

export default (state = initialState.user, {type, payload}) => {
    switch (type) {
        case types.GET_USER_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.GET_USER_BY_ID_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_USER_BY_ID_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.PUT_USER_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.PUT_USER_BY_ID_SUCCESS: {
            return { ...state, payload, isFetching: false };
        }
        case types.PUT_USER_BY_ID_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};
