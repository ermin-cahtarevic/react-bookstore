import axios from 'axios';
import { GET_BOOKS } from './index';

const token = localStorage.getItem('token');

const getBooks = () => dispatch => {
  axios.get('http://localhost:3001/api/v1/books',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
    if (response.data.message === 'No books found') {
      dispatch({
        type: 'NO_BOOKS',
      });
    } else {
      dispatch(GET_BOOKS(response.data.data));
    }
  });
};

export default getBooks;
