import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'; // must include this to use semantic
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // High Order component to connect redux and react, we use this to wrap our application
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'; // wrapper for applyMiddleware
import { userLoggedIn } from './actions/auth';

// Create redux store ( 2 arguments, rootreducer which is the whole tree, or state object, and applyMiddleware)
const storage = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
); 

// Whenever we refresh page, we dispatch the action from storage
if (localStorage.ebooklibraryJWT) {
    const user = { token: localStorage.ebooklibraryJWT };
    storage.dispatch(userLoggedIn(user));
};

ReactDOM.render(
    <BrowserRouter>
        <Provider store={storage}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
