import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

// App will serve as a Route Dispatcher
// ie, basically it renders things dependent on the route

// className ui container wraps and creates a margin for the components
const App = () => 
  <div className='ui container'> 
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>

export default App;
