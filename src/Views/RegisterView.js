import { Component } from "react";
import { connect } from "react-redux";
import {register} from '../redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onRegister(this.state)

        this.setState({name:'', email:'', password:''})
    }

    render() {
        const {name, email, password} = this.state;
        return (
            <div>
                <h1>Регистрация пользователя</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        <Form.Control 
                            type ="text"
                            name="name"
                            placeholder="Имя"
                            value={name}
                            onChange={this.handleChange}
                            />
                    </Form.Label>
                     <Form.Label>
                        <Form.Control
                            type ="email"
                            name="email"
                            placeholder="Почта"
                            value={email}
                            onChange={this.handleChange}
                            />
                    </Form.Label>
                     <Form.Label>
                        <Form.Control
                            type ="password"
                            name="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={this.handleChange}
                            />
                    </Form.Label>

                    <Button type="submit">Зарегистрироваться</Button>
                </Form>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    onRegister: register
}

export default connect(null, mapDispatchToProps)(RegisterView)