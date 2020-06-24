import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import errorReducer from './error';
import authReducer from './auth';

const reducer = initialState => {
  const books = booksReducer(initialState);
  return combineReducers({
    books,
    filter: filterReducer,
    error: errorReducer,
    auth: authReducer,
  });
};

export default reducer;
