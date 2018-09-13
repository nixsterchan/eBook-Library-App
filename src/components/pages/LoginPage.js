import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';

// This page will render LoginForm and it will pass submit function into it
// LoginForm takes some function, gather data from the form and passes the data into the function
// The form itself does not know what will happen to the data, it merely passes along the data and thats it


class LoginPage extends Component {

    // Function here is used in LoginForm
    submit = (data) => {
        console.log(data);
        // What we will do is dispatching of thunk action, make an asynchronous request, get data back
        // Redirect 
    };

    render() {
        return (
            <div>
                <h1>Login Page</h1>
        
                <LoginForm submit={this.submit}/> 
            </div>

        );
    }
};

export default LoginPage;