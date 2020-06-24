import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { CHANGE_FILTER } from '../actions/index';
import getBooks from '../actions/getBooks';
import removeBook from '../actions/removeBook';
import '../styles/book-list.css';
import Navbar from '../components/Navbar';

const BooksList = ({
  books,
  filter,
  removeBook,
  changeFilter,
  getBooks,
  auth,
}) => {
  useEffect(() => { getBooks(); }, [getBooks]);

  const handleRemoveBook = book => removeBook(book.id);

  const handleFilterChange = filter => changeFilter(filter);

  const filtered = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <Navbar isAuth={auth.isAuthenticated} changeFilter={handleFilterChange} />
      <div className="book-list">
        {
          filtered.length === 0 ? (
            <div className="no-books">No books found. Please add one below.</div>
          ) : (
            filtered.map(book => (
              <Book
                book={book}
                key={book.id.toString()}
                removeBook={handleRemoveBook}
              />
            ))
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ books: { books }, filter, auth }) => ({
  books,
  filter,
  auth,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(CHANGE_FILTER(filter)),
  getBooks: () => dispatch(getBooks()),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  getBooks: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
