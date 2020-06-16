const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = id => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

const CHANGE_FILTER = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

const GET_BOOKS = books => ({
  type: 'GET_BOOKS',
  payload: books,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, GET_BOOKS,
};
