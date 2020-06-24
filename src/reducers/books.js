const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const NO_BOOKS = 'NO_BOOKS';
const CLEAR_BOOKS = 'CLEAR_BOOKS';

const booksReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const { id, title, category } = action.payload;
      return {
        books: [...state.books, { id, title, category }],
      };
    }
    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.payload),
      };
    case 'GET_BOOKS':
      return {
        books: [...action.payload],
      };
    case CLEAR_BOOKS:
      return {
        books: [],
      };
    case NO_BOOKS:
      return {
        books: 'No books found',
      };
    default: return state;
  }
};

export default booksReducer;
