import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import SignupPage from './components/pages/SignupPage';
import PropTypes from 'prop-types';

// Dashboard should only be for authorized users, hence UserRoute is created
import UserRoute from './components/routes/UserRoute';
// Only Guest users should have access to login route
import GuestRoute from './components/routes/GuestRoute';

// App will serve as a Route Dispatcher
// ie, basically it renders things dependent on the route

// className ui container wraps and creates a margin for the components
const App = ({ location }) => 
  <div className='ui container'> 
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage} /> 
    <GuestRoute location={location} path="/signup" exact component={SignupPage} /> 
    
  </div>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
