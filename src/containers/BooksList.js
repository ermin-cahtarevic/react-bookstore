import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>ID</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (<Book book={book} key={book.id} removeBook={handleRemoveBook} />))
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
})

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
