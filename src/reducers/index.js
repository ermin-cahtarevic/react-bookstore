import books from './books';
import { combineReducers } from 'redux';

const reducer = initialState => {
  const booksReducer = books(initialState);
  return combineReducers({
    booksReducer,
  })
}

export default reducer