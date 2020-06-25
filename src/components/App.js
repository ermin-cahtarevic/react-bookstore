import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import '../styles/app.css';
import ProtectedRoute from './authentication/ProtectedRoute';
import PublicRoute from './authentication/PublicRoute';
import history from '../services/history';

const App = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
