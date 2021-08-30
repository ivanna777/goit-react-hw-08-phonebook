import axios from "axios";
import {
    fetchEntriesRequest,
    fetchEntriesSuccess,
    fetchEntriesError,
    handleSubmitRequest,
    handleSubmitSuccess,
    handleSubmitError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,

} from "./phonebook-actions"

export const fetchEntries = () => dispatch => {
    dispatch(fetchEntriesRequest());
    axios.get('/contacts')
        .then(({data}) => dispatch(fetchEntriesSuccess(data)))
        .catch(error => dispatch(fetchEntriesError(error.message)))
}

export const handleSubmit = entry => dispatch => {

    dispatch(handleSubmitRequest())

    axios
    .post('/contacts', entry)
    .then(({data}) => dispatch(handleSubmitSuccess(data)))
    .catch(error => dispatch(handleSubmitError(error)))
}

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest())

    axios
    .delete(`/contacts/${id}`)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch(error=>dispatch(deleteContactError(error)))
}
