import { connect } from "react-redux";
import {getIsAuthenticated} from '../redux/auth/auth-selectors';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({isAuthenticated}) => (
    <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/" exact>Главная</Nav.Link>
        </Nav.Item>
    {isAuthenticated && (
        <Nav.Item>
            <Nav.Link href="/contacts" exact>Контакты</Nav.Link>
        </Nav.Item>  
    )}   
    </Nav>
)

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation);