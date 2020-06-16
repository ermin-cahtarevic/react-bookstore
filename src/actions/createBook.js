import { CREATE_BOOK } from './index';
import axios from 'axios';

const createBook = (book) => {
  return dispatch => {
    axios.post(
      'https://bookstore-rails-api.herokuapp.com/api/v1/books', 
      {
        title: book.title,
        category: book.category,
      }
    ).then(response => {
      dispatch(CREATE_BOOK(response.data.data));
    }).catch(err => {
      console.log('Book creation error', err);
    });
  }
}

export default createBook;