const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book.id,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const GET_BOOKS = books => ({
  type: 'GET_BOOKS',
  payload: books,
});

export { createBook, removeBook, changeFilter, GET_BOOKS };
