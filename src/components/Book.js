import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = ({ book, removeBook }) => (
  <div className="book">
    <div>
      <div className="book-category">{book.category}</div>
      <div className="book-title">{book.title}</div>
      <div className="book-author">Famous Author</div>
    </div>
    <div className="book-remove">
      <button
        className="remove-btn"
        type="button"
        onClick={() => removeBook(book)}
      >
        Remove book
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
