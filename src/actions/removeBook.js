import axios from 'axios';
import { REMOVE_BOOK } from './index';
/* eslint-disable no-debugger, no-console */

const removeBook = id => dispatch => {
  dispatch(REMOVE_BOOK(id));
  axios.delete(`https://bookstore-rails-api.herokuapp.com/api/v1/books/${id}`).then(response => {
    if (response.err) {
      console.log(response.err);
    }
  }).catch(err => {
    console.log(err);
  });
};

export default removeBook;
