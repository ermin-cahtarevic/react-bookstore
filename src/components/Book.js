import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>{book.id}</td>
    <td>
      <button type="button" onClick={() => removeBook(book)}>Remove</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
