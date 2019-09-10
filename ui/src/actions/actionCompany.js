import * as types from "../actions/actionsTypes";
import { base_URL } from '../_utils/config.js';

import axios from "axios";

const getCompanies                         = payload => ({type: types.GET_COMPANIES, payload});
const getCompaniesSuccess                  = payload => ({type: types.GET_COMPANIES_SUCCESS, payload});
const getCompaniesFail                     = payload => ({type: types.GET_COMPANIES_FAIL, payload});

const getCompaniesById                     = payload => ({type: types.GET_COMPANIES_BY_ID, payload});
const getCompaniesByIdSuccess              = payload => ({type: types.GET_COMPANIES_BY_ID_SUCCESS, payload});
const getCompaniesByIdFail                 = payload => ({type: types.GET_COMPANIES_BY_ID_FAIL, payload});

const putCompaniesById                     = payload => ({type: types.PUT_COMPANIES_BY_ID, payload});
const putCompaniesByIdSuccess              = payload => ({type: types.PUT_COMPANIES_BY_ID_SUCCESS, payload});
const putCompaniesByIdFail                 = payload => ({type: types.PUT_COMPANIES_BY_ID_FAIL, payload});

const postNewCompany                       = payload => ({type: types.POST_NEW_COMPANY, payload});
const postNewCompanySuccess                = payload => ({type: types.POST_NEW_COMPANY_SUCCESS, payload});
const postNewCompanyFail                   = payload => ({type: types.POST_NEW_COMPANY_FAIL, payload});

const deleteCompany                         = payload => ({type: types.DELETE_COMPANY, payload});
const deleteCompanySuccess                  = payload => ({type: types.DELETE_COMPANY_SUCCESS, payload});
const deleteCompanyFail                     = payload => ({type: types.DELETE_COMPANY_FAIL, payload});


/* --- SORT ---  */
const getCompaniesSortByNameUp             = payload => ({type: types.GET_COMPANIES_SORT_BY_NAME_UP, payload});
const getCompaniesSortByNameUpSuccess      = payload => ({type: types.GET_COMPANIES_SORT_BY_NAME_UP_SUCCESS, payload});
const getCompaniesSortByNameUpFail         = payload => ({type: types.GET_COMPANIES_SORT_BY_NAME_UP_FAIL, payload});

const getCompaniesSortByNameDesc           = payload => ({type: types.GET_COMPANIES_SORT_BY_NAME_DESC, payload});
const getCompaniesSortByNameDescSuccess    = payload => ({type: types.GET_COMPANIES_SORT_BY_NAME_DESC_SUCCESS, payload});
const getCompaniesSortByNameDescFail       = payload => ({type: types.GET_COMPANIES_SORT_BY_NAME_DESC_FAIL, payload});

const getCompaniesSortByServesUp           = payload => ({type: types.GET_COMPANIES_SORT_BY_SERVES_UP, payload});
const getCompaniesSortByServesUpSuccess    = payload => ({type: types.GET_COMPANIES_SORT_BY_SERVES_UP_SUCCESS, payload});
const getCompaniesSortByServesUpFail       = payload => ({type: types.GET_COMPANIES_SORT_BY_SERVES_UP_FAIL, payload});

const getCompaniesSortByServesDesc         = payload => ({type: types.GET_COMPANIES_SORT_BY_SERVES_DESC, payload});
const getCompaniesSortByServesDescSuccess  = payload => ({type: types.GET_COMPANIES_SORT_BY_SERVES_DESC_SUCCESS, payload});
const getCompaniesSortByServesDescFail     = payload => ({type: types.GET_COMPANIES_SORT_BY_SERVES_DESC_FAIL, payload});

const getCompaniesSortByNumberUp           = payload => ({type: types.GET_COMPANIES_SORT_BY_NUMBER_UP, payload});
const getCompaniesSortByNumberUpSuccess    = payload => ({type: types.GET_COMPANIES_SORT_BY_NUMBER_UP_SUCCESS, payload});
const getCompaniesSortByNumberUpFail       = payload => ({type: types.GET_COMPANIES_SORT_BY_NUMBER_UP_FAIL, payload});

const getCompaniesSortByNumberDesc         = payload => ({type: types.GET_COMPANIES_SORT_BY_NUMBER_DESC, payload});
const getCompaniesSortByNumberDescSuccess  = payload => ({type: types.GET_COMPANIES_SORT_BY_NUMBER_DESC_SUCCESS, payload});
const getCompaniesSortByNumberDescFail     = payload => ({type: types.GET_COMPANIES_SORT_BY_NUMBER_DESC_FAIL, payload});


export const getCompaniesRequest = () => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompanies());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies`
        });
        // console.log("getCompanyRequest data --- ", data);
        dispatch(getCompaniesSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesFail(err));
    }
};

export const getCompaniesByIdRequest = id => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesById());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies/${id}`
        });
        // console.log("getCompaniesByIdRequest data --- ", data);

        dispatch(getCompaniesByIdSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesByIdFail(err));
    }
};

export const updateCompanyByIdRequest = payload => async dispatch => {
    const token = localStorage.getItem("token");
    const { id, values } = payload;

    dispatch(putCompaniesById());
    try {
        const { data } = await axios({
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies/${id}`,
            data: values
        });
        dispatch(putCompaniesByIdSuccess(data))
    }
    catch (err) {
        dispatch(putCompaniesByIdFail(err));
    }
};

export const postNewCompanyRequest = payload => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(postNewCompany());
    try {
        const { data } = await axios({
            method: "POST",
            url: `${base_URL}/companies`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: payload
        });
        // console.log(' -----postNewCompanyRequest data -------> ', data);
        dispatch(postNewCompanySuccess(data));
    } catch (err) {
        dispatch(postNewCompanyFail(err));
    }
};

export const deleteCompanyRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    console.log('ID', id);
    dispatch(deleteCompany());
    try {
        const { data } = await axios({
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies/${id}`
        });
        // console.log("deleteCompanyRequest data --- ", data);

        dispatch(deleteCompanySuccess(data))
    }
    catch (err) {
        dispatch(deleteCompanyFail(err));
    }
};


/* --- SORT ---  */
export const getCompaniesSortByNameUpRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesSortByNameUp());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies_sort_by_name_up/${id}`
        });
        // console.log("getCompaniesSortByNameUpRequest data --- ", data);

        dispatch(getCompaniesSortByNameUpSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesSortByNameUpFail(err));
    }
};
export const getCompaniesSortByNameDescRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesSortByNameDesc());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies_sort_by_name_desc/${id}`
        });
        // console.log("getCompaniesSortByNameDescRequest data --- ", data);

        dispatch(getCompaniesSortByNameDescSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesSortByNameDescFail(err));
    }
};

export const getCompaniesSortByServesUpRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesSortByServesUp());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies_sort_by_serves_up/${id}`
        });
        // console.log("UP Request data --- ", data);

        dispatch(getCompaniesSortByServesUpSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesSortByServesUpFail(err));
    }
};
export const getCompaniesSortByServesDescRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesSortByServesDesc());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies_sort_by_serves_desc/${id}`
        });
        // console.log("DESC data --- ", data);

        dispatch(getCompaniesSortByServesDescSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesSortByServesDescFail(err));
    }
};

export const getCompaniesSortByNumberUpRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesSortByNumberUp());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies_sort_by_number_up/${id}`
        });
        // console.log("UP Request data --- ", data);

        dispatch(getCompaniesSortByNumberUpSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesSortByNumberUpFail(err));
    }
};
export const getCompaniesSortByNumberDescRequest = (id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch(getCompaniesSortByNumberDesc());
    try {
        const { data } = await axios({
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${base_URL}/companies_sort_by_number_desc/${id}`
        });
        // console.log("DESC data --- ", data);

        dispatch(getCompaniesSortByNumberDescSuccess(data))
    }
    catch (err) {
        dispatch(getCompaniesSortByNumberDescFail(err));
    }
};
