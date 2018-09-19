import api from '../api';
import { userLoggedIn } from './auth';

// Our thunk action for signup which dispatches userLoggedIn as we want to log into user after successful registration
export const signup = (data) => (dispatch) =>
    api.user.signup(data)
    .then(user => dispatch(userLoggedIn(user)));