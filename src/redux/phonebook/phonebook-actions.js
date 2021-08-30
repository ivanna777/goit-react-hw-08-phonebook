import { createAction } from "@reduxjs/toolkit";

export const fetchEntriesRequest = createAction('pnonebook/fetchEntriesRequest');
export const fetchEntriesSuccess = createAction('pnonebook/fetchEntriesSuccess');
export const fetchEntriesError = createAction('pnonebook/fetchEntriesError');

export const handleSubmitRequest = createAction('pnonebook/handleSubmitRequest');
export const handleSubmitSuccess = createAction('phonebook/handleSubmitSuccess');
export const handleSubmitError = createAction('phonebook/handleSubmitError');

export const deleteContactRequest = createAction('pnonebook/deleteContactRequest');
export const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
export const deleteContactError = createAction('phonebook/deleteContactError');

export const filterByName = createAction('pnonebook/filterByName');
