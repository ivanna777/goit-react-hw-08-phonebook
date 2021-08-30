import { connect } from "react-redux";
import {getMail} from "../redux/auth/auth-selectors";
import {logout} from "../redux/auth/auth-operations";
import Button from 'react-bootstrap/Button'

const UserMenu = ({getMail, onLogout}) => (
    <div>
        <span>{getMail}</span>
        <Button type="button" onClick={onLogout}>Ввыйти</Button>
    </div>
)

const mapStateToProps = (state) => ({
    getMail: getMail(state)
})
const mapDispatchToProps = {
    onLogout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)