// The Form component will have state which means there will be class components here

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    // we will use redux in this application and there are a couple of ways to do this
    // can either store everything in redux store
    // but we will not be doing this as when we are doing up forms, we do not require the need
    // to store the data that the user enters as we only need to submit this data
    // unless we need to have a very functional and smart form do we then connect to redux

    // We require state whereby it will be changed when user types data into the Form Fields
    // Then we will need to validate this data and if it is okay, we will send it to the submit function provided to this form
    state = {
        data: {
            email: '',
            password: ''
        }, // An object that stores all form data

        loading: false, // false by default

        errors: {} // empty by default
    };

    // Universal handler for if we have a text field
    onChange = e => 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value } 
        });

    // We want to validate data and pass it to submit function and handle error cases in case we have errors from the asynchrnous
    onSubmit = () => {
        // To validate
        const errors = this.validate(this.state.data);
        // If there are errors, we will display them and we will not do anything else. Proceeds if empty
        this.setState({ errors });
        // To check if errors object is empty
        // can use lodash is empty method
        if (Object.keys(errors).length === 0) { // Takes all the keys and errors objects
            this.props.submit(this.state.data); // As submit is not defined, use proptypes
            // Catch errors from asynchornous comes next
        }
    };

    validate = (data) => {
        const errors = {};
        // To check
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email"; 
        if (!data.password) errors.password = "Cannot be blank";
        return errors;
    };

    // onChange and value will be used to control the element below

    // {errors.email && <InlineError text={errors.email} />}
    // this line means that if there is something in the errors object, we will then do <InlineError /> statement
    render() {
        // deconstruct
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        placeholder='example@example.com' 
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />} 
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        placeholder='Please Enter Desired Password' 
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary>Log In</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;