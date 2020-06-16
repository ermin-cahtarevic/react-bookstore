const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

const CHANGE_FILTER = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

const GET_BOOKS = books => ({
  type: 'GET_BOOKS',
  payload: books,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, GET_BOOKS };
