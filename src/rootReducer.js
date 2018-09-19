// Helps us to combine different reducers, allowing us to have multiple reducers and let us combine them into one
import { combineReducers } from 'redux'; 
import user from './reducers/user';

// Reducers are functions that take state and return new state
// Takes the object
export default combineReducers({
    user
});