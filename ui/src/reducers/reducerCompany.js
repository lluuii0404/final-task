import initialState from "../store/initialState";
import * as types from '../actions/actionsTypes';

export default (state = initialState.companies, {type, payload}) => {
    switch (type) {
        case types.GET_COMPANIES: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.GET_COMPANIES_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_BY_ID_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_BY_ID_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.PUT_COMPANIES_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.PUT_COMPANIES_BY_ID_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.PUT_COMPANIES_BY_ID_FAIL: {
            return { ...state, message: payload, isFetching: false };
        }

        case types.POST_NEW_COMPANY: {
            return { ...state, isFetching: true };
        }
        case types.POST_NEW_COMPANY_SUCCESS: {
            return { ...state, data: [...state, payload], isFetching: false };
        }
        case types.POST_NEW_COMPANY_FAIL: {
            return { ...state, error: "Company already exists", isFetching: false };
        }

        case types.DELETE_COMPANY: {
            return { ...state, isFetching: true };
        }
        case types.DELETE_COMPANY_SUCCESS: {
            return { ...state, message: payload, isFetching: false };
        }
        case types.DELETE_COMPANY_FAIL: {
            return { ...state, isFetching: false };
        }

        /* --- SORT ---  */
        case types.GET_COMPANIES_SORT_BY_NAME_UP: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SORT_BY_NAME_UP_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_NAME_UP_FAIL: {
            return { ...state, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_NAME_DESC: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SORT_BY_NAME_DESC_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_NAME_DESC_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.GET_COMPANIES_SORT_BY_SERVES_UP: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SORT_BY_SERVES_UP_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_SERVES_UP_FAIL: {
            return { ...state, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_SERVES_DESC: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SORT_BY_SERVES_DESC_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_SERVES_DESC_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.GET_COMPANIES_SORT_BY_NUMBER_UP: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SORT_BY_NUMBER_UP_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_NUMBER_UP_FAIL: {
            return { ...state, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_NUMBER_DESC: {
            return { ...state, isFetching: true };
        }
        case types.GET_COMPANIES_SORT_BY_NUMBER_DESC_SUCCESS: {
            return { ...state, data: payload, isFetching: false };
        }
        case types.GET_COMPANIES_SORT_BY_NUMBER_DESC_FAIL: {
            return { ...state, isFetching: false };
        }

        default:
            return state;
    }
};
