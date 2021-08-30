import { Component } from "react";
import { connect } from "react-redux";
import { filterByName } from "../../redux/phonebook/phonebook-actions";
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import styles from "./Filter.module.css";

class Filter extends Component {
    
    render() {
        return (
            <Form className={styles["filter-wrapper"]}>
                <Form.Label className={styles["filter-label"]}>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Find contacts by name..."
                        onChange={this.props.filtredName}
                        className={styles["filter-input"]}
                    />
                </Form.Label>
        
            </Form>
        )
    }
}

Filter.propTypes = {
    filtredName: PropTypes.func,
}
const mapDispatchToProps = dispatch => ({
    filtredName: (e)=>dispatch(filterByName(e.target.value.toLowerCase()))
})

export default connect(null, mapDispatchToProps)(Filter);