import axios from 'axios';

const USER_LOADED = 'USER_LOADED';
const USER_LOADING = 'USER_LOADING';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

const url = 'https://bookstore-rails-api.herokuapp.com/auth/login'

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    }
  }

  if (token) {
    config.headers['Authorization'] = token;
  }

  axios.get(url, config)
}