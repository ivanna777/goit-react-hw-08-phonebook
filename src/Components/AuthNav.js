import Nav from 'react-bootstrap/Nav'
// import { NavLink } from "react-router-dom"

const AuthNav = () => (
    <div>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link 
                     href="/register"
                     exact
                     >
                         Регистрация
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link 
                    href="/login"
                    exact
                    >
                        Вход
                </Nav.Link>
            </Nav.Item>
        </Nav>
        
    </div>
)

export default AuthNav