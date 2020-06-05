import { combineReducers } from 'redux';
import books from './books';

const reducer = initialState => {
  const booksReducer = books(initialState);
  return combineReducers({
    booksReducer,
  });
};

export default reducer;
