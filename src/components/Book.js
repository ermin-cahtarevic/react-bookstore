import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.id}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
};

export default Book;