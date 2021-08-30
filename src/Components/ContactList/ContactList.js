import { Component } from "react";
import { connect } from "react-redux";
import { deleteContact, fetchEntries } from "../../redux/phonebook/phonebook-operations";
import {getFilterName} from "../../redux/phonebook/phonebook-selectors";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import styles from "./ContactList.module.css"

class ContactList extends Component  {
    componentDidMount() {
        this.props.onFetchContacts()
    }
    render() {
        const {entries, onDelete} =this.props;

        return (
            <div className={styles["contact-wrapper"]}>
                <ListGroup className={styles["contact-list"]}>
                        {entries.map(({id, name, number}) => (
                            <ListGroup.Item action variant="secondary" key={id} 
                                className={styles["contact-li"]}>
                                    <span className={styles["contact-span"]}>{name}: {number}</span>
                            
                            <Button variant="outline-primary" className={styles["delete-btn"]}
                                    type="button"
                                    data-id={ id}
                                    onClick={onDelete}
                                >
                                     Delete    
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>  
            </div>
        )
     }
    }

// const getFilterName = (entries, filterValue) => {
//     return entries.filter(entry => entry.name.name.includes(filterValue));
// }

const mapStateToProps = (state) => ({
    entries: getFilterName(state)
});

const mapDispatchToProps = dispatch => ({
    onDelete: e => dispatch(deleteContact(e.target.dataset.id)),
    onFetchContacts: ()=>dispatch(fetchEntries())

})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
