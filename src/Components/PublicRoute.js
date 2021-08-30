import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const PublicRoute = ({
    component: Component,
    isAuthentificated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthentificated && routeProps.restricted ? (
                <Redirect to={redirectTo} />
            ) : (
                <Component {...props} />
            )
        }
    />
);

const mapStateToProps = state => ({
    isAuthentificated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);