import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>ID</th>
      </tr>
    </thead>
    <tbody>
      {
          books.map(book => (<Book book={book} key={book.id} />))
        }
    </tbody>
  </table>
);

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
