import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/AppBar';
import HomeView from './Views/HomeView';
import ContactsView from "./Views/ContactsView";
import LoginView from "./Views/LoginView";
import RegisterView from "./Views/RegisterView"
import {getCurrentUser} from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
  return (
    <>
   <AppBar />
   <Switch>
     <Route path="/" exact component={HomeView} />
     <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView} />
     <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
     <PrivateRoute path="/contacts" component={ContactsView} redirectTo="/login"/>
   </Switch>
   </>
  )
}
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);
