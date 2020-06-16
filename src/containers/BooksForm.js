import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createBook from '../actions/createBook';
import getId from '../helpers/getId';
import categories from '../helpers/categories';
import '../styles/books-form.css';

const categoryList = categories();

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const id = getId();
    const book = { title, category, id };
    const { createBook } = this.props;
    createBook(book);
    this.setState({ title: '', category: 'Action' });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-wrap">
        <h2 className="form-label">Add new book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="title-input"
            type="text"
            name="title"
            placeholder="Book title"
            value={title}
            onChange={this.handleChange}
            required
          />
          <select
            className="category-select"
            name="category"
            value={category}
            onChange={this.handleChange}
            required
          >
            <option disabled value="">Category</option>
            {
              categoryList.map(mappedCategory => (
                <option
                  value={mappedCategory}
                  key={mappedCategory}
                >
                  {mappedCategory}
                </option>
              ))
            }
          </select>

          <input className="add-book-btn" type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
