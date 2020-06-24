import axios from 'axios';
import { CREATE_BOOK } from './index';
/* eslint-disable no-debugger, no-console */

const token = localStorage.getItem('token');

const createBook = book => dispatch => {
  axios.post(
    'https://bookstore-rails-api.herokuapp.com/api/v1/books',
    {
      title: book.title,
      category: book.category,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(response => {
    dispatch(CREATE_BOOK(response.data.data));
  }).catch(err => {
    console.log('Book creation error', err);
  });
};

export default createBook;
