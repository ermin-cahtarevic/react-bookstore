const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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
    default: return state;
  }
};

export default booksReducer;
