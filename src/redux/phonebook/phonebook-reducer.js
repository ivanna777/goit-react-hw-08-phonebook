import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    fetchEntriesSuccess,
    handleSubmitSuccess,
    deleteContactSuccess,
    filterByName,
} from "./phonebook-actions"

const filterReducer = createReducer('', {
    [ filterByName]: (_, {payload}) => payload
})

const itemsReducer = createReducer([], {
    [fetchEntriesSuccess]:(_, {payload}) => payload,
    [handleSubmitSuccess]: (state, {payload}) => [...state, { name: payload.name, number: payload.number, id: payload.id }],
    [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
