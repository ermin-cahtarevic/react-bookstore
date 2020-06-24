import React from 'react';
import { Redirect, Route } from 'react-router';

/* eslint-disable react/jsx-props-no-spreading */

const PublicRoute = props => {
  const isAuth = localStorage.getItem('token');

  return isAuth
    ? (<Redirect to="/dashboard" />)
    : (<Route {...props} />);
};

export default PublicRoute;
