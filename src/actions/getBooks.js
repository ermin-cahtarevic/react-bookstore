import { GET_BOOKS } from './index';
import axios from 'axios';

const getBooks = () => {
  return dispatch => {
    axios.get('http://localhost:3001/api/v1/books').then(response => {
      dispatch(GET_BOOKS(response.data.data))
    })
  }
}

export default getBooks;