import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Home Page</h1>
        { isAuthenticated ? (
            <button onClick={() => logout()}>Log Out</button>
        ) : (
            <div><Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link></div>
        )}
    </div>
);

function mapStateToProps(state) {
    // Takes state and return props available on HomePage
    // If token is undefined, it will be converted to false or if it is a string, convert to true
    return {
        isAuthenticated: !!state.user.token
    }
};

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
