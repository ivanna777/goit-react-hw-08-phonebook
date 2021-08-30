import { Component } from "react";
import { connect } from 'react-redux';
import { handleSubmit } from "../../redux/phonebook/phonebook-operations";
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
   onSubmitEntry = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.reset();
  }
    render() {
        return (
        <Form onSubmit={this.onSubmitEntry} className={styles["contact-form"]}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={styles["contact-label"]}>
              <Form.Control
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              placeholder="Name"
              onChange={this.onChange}
              className={styles["contact-input"]}/>
          </Form.Label>

          <Form.Label className={styles["contact-label"]}>
            <Form.Control
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              placeholder="Number"
                onChange={this.onChange}
                className={styles["contact-input"]}
            />
          </Form.Label>

        <Button variant="primary" type="submit" className={styles["add-contact-btn"]}>Add contact</Button>
        </Form.Group>
        </Form>)
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name,number) => dispatch(handleSubmit(name,number))
})

export default connect(null, mapDispatchToProps)(ContactForm);

