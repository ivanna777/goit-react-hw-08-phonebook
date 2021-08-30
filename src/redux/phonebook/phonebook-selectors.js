import { createSelector } from "@reduxjs/toolkit";

const getItems = state => state.phonebook.items;
const getFilter =  state => state.phonebook.filter;

export const getFilterName = createSelector(
    [getItems, getFilter], 
    (items, filter)=> {
         return items.filter(entry => entry.name.includes(filter))
    })