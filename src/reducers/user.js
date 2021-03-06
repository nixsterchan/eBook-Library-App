import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

// Reducer for user, which basically is a function that takes state and actions and returns new state

export default function user( state = {} , action = {} ) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user; // The state that we want
        case USER_LOGGED_OUT:
            return {};
        default: 
            return state;
    }
};