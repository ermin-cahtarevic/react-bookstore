import { combineReducers } from 'redux';
import books from './books';
import filterReducer from './filter';

const reducer = initialState => {
  const booksReducer = books(initialState);
  return combineReducers({
    booksReducer,
    filterReducer,
  });
};

export default reducer;
