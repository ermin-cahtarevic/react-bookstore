import axios from 'axios';
import { REMOVE_BOOK } from './index';

const removeBook = (id) => {
  return dispatch => {
    dispatch(REMOVE_BOOK(id));
    axios.delete(`http://localhost:3001/api/v1/books/${id}`).then((response) => {
      if (response.err) {
        console.log(response.err);
      }
    }).catch(err => {
      console.log(err);
    });
  }
}

export default removeBook;