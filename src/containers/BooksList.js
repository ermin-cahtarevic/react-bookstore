import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { connect } from 'react-redux';

const BooksList = ({ books }) => {
  return (
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
}

const mapStateToProps = ({ booksReducer: { books } }) => ({
  books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }),
  ),
};

export default connect(mapStateToProps, null)(BooksList);