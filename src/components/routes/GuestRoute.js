// We will connect our route to redux store to check for authentication and we will redirect accordingly

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// In props, it takes everything that we pass to Route
const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    // We pass all of the props passed to the user route into the following route
    // Instead of component like we used before, we use render for the component which will take in props
    <Route 
        { ...rest} 
        render={props => 
            !isAuthenticated ? 
                ( <Component { ...props } /> ) : ( <Redirect to="/dashboard" /> )
        }
    >

    </Route>
);



function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
};

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(GuestRoute);