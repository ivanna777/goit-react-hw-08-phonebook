import { Component } from "react";
import ContactForm from "../Components/ContactForm";
import ContactList from "../Components/ContactList";
import Filter from "../Components/Filter";

class ContactsView extends Component {
render() {
    return (
         <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )
}
}

export default ContactsView