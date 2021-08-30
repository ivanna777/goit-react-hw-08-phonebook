import { Component } from "react";
import { connect } from "react-redux";
import {login} from '../redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class LoginView extends Component {
    state = {
        mail: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        //операція логин
        this.props.onLogin(this.state)
        this.setState({email:'', password:''})
    }

    render() {
        const {email, password} = this.state;
        return (
            <div>
                <h1>Авторизация пользователя</h1>
                <Form onSubmit={this.handleSubmit}>
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

                    <Button type="submit">Ввойти</Button>
                </Form>
                
            </div>
        )
    }
}

const mapDispatchToProps ={
    onLogin: login
}

export default connect(null, mapDispatchToProps)(LoginView)