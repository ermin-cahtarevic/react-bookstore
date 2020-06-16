const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.payload),
      };
    case 'GET_BOOKS':
      return {
        books: [...action.payload],
      }
    default: return state;
  }
};

export default booksReducer;
