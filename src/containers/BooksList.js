import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import getBooks from '../actions/getBooks';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/book-list.css';

const BooksList = ({
  books,
  filter,
  removeBook,
  changeFilter,
  getBooks
}) => {
  useEffect(() => { getBooks() }, [getBooks]);

  const handleRemoveBook = book => removeBook(book);

  const handleFilterChange = filter => changeFilter(filter);

  const filtered = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <CategoryFilter changeFilter={handleFilterChange} />
      <div className="book-list">
        {
          filtered.map(book => (
            <Book
              book={book}
              key={book.id.toString()}
              removeBook={handleRemoveBook}
            />
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ books: { books }, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
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
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
