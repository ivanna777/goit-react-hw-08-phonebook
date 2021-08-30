import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserError
} from "./auth-actions"

const initialUserState = {
    name: null,
    mail: null
}

const user = createReducer(initialUserState, {
    [registerSuccess]:(_, {payload}) => payload.user,
    [loginSuccess]:(_, {payload}) => payload.user,
    [logoutSuccess]:()=>initialUserState,
    [getCurrentUserSuccess]:(_, {payload}) => payload
})

const token = createReducer(null, {
    [registerSuccess]:(_, {payload}) => payload.token,
    [loginSuccess]:(_, {payload}) => payload.token,
    [logoutSuccess]:()=> null
})

const error = createReducer(null, {
    [registerError]:(_, {payload})=>payload,
    [loginError]:(_, {payload})=>payload,
    [logoutError]:(_, {payload})=>payload,
    [getCurrentUserError]:(_, {payload})=>payload
})

export default combineReducers({
    user,
    token,
    error
})