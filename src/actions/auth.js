import axios from 'axios';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const urlSignup = 'https://bookstore-rails-api.herokuapp.com/signup';
const urlLogin = 'https://bookstore-rails-api.herokuapp.com/auth/login';

export const registerUser = user => dispatch => {
  axios.post(
    urlSignup,
    {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    },
  ).then(res => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        token: res.data.auth_token,
      },
    });
  });
};

export const loginUser = user => dispatch => {
  axios.post(
    urlLogin,
    {
      email: user.email,
      password: user.password,
    },
  ).then(res => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: res.data.auth_token,
      },
    });
  });
};
