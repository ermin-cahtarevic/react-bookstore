import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => {
  const handleRemoveBook = book => removeBook(book);

  const handleFilterChange = filter => changeFilter(filter);

  const filtered = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <CategoryFilter changeFilter={handleFilterChange} />
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
            filtered.map(book => (
              <Book
                book={book}
                key={book.id}
                removeBook={handleRemoveBook}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ books: { books }, filter }) => ({
  books,
  filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
