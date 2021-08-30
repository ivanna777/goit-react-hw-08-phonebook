import { connect } from "react-redux";
import {getIsAuthenticated} from "../redux/auth/auth-selectors"
import Navbar from 'react-bootstrap/Navbar'
import Navigation from "./Navigation"
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";

const AppBar = ({isAuthenticated}) => (
    <Navbar>
        <Navigation />
        {isAuthenticated ? <UserMenu/> : <AuthNav/>}
    </Navbar> 
)

const mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar)