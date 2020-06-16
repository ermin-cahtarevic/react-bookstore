import axios from 'axios';
import { GET_BOOKS } from './index';

const getBooks = () => dispatch => {
  axios.get('https://bookstore-rails-api.herokuapp.com/api/v1/books').then(response => {
    dispatch(GET_BOOKS(response.data.data));
  });
};

export default getBooks;
