import React from 'react';
import { Redirect, Route } from 'react-router';

/* eslint-disable react/jsx-props-no-spreading */

const ProtectedRoute = props => {
  const isAuth = localStorage.getItem('token');

  return isAuth
    ? (<Route {...props} />)
    : (<Redirect to="/" />);
};

export default ProtectedRoute;
