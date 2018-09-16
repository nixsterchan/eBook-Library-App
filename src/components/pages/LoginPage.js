import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

// This page will render LoginForm and it will pass submit function into it
// LoginForm takes some function, gather data from the form and passes the data into the function
// The form itself does not know what will happen to the data, it merely passes along the data and thats it


class LoginPage extends Component {

    // Function here is used in LoginForm
    // We have login thunk action where we pass data to it and it returns a promise, If everything is okay, we redirect to HomePage
    submit = (data) => this.props.login(data)
        .then(() => this.props.history.push("/"));
          // We redirect by using history, where history is passed to this component via react router (route component)
    // Login wil be available to use when we connect this component to redux

    render() {
        return (
            <div>
                <h1>Login Page</h1>
        
                <LoginForm submit={this.submit}/> 
            </div>

        );
    }
};

// We only define what our component needs in PropTypes, what it expects
// In this case it expects history object with push function
LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

// Normally first parameter is mapStateToProps which allows us to pass some data from redux state into this component, but
// it is not needed here and hence null
// Second parameter is map dispatch to props where we can wrap our functions in dispatch and that allows us to simply
// just call them. A shortcut we will use here is to provide object with the functions that we want to wrap in dispatch call
export default connect(null, { login })(LoginPage);