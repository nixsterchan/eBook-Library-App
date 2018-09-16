// Here is where we define our thunk actions (functions that return another function)

import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

// Take credentials to return another function where we make the API request 
// All our requests will be stored inside one API object. Since this application is not huge, we do not need to
// split it down into separate objects to create a lot of files, hence just one file with one object

export const login = (credentials) => (dispatch) => 
    api.user.login(credentials) // This line is the API request that returns promise and
    .then(user => dispatch(userLoggedIn(user))); // We take that promise and data returned from server and we get response data user from it to pass to next action
                                                 // But in this case, we will do all that in api.js and just go straight to dispatch here

 
