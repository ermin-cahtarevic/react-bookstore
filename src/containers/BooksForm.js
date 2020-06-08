import React from 'react';
import { createBook } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
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
    const id = Math.round(Math.random() * 1000).toString();
    const book = { title, category, id }
    const { createBook } = this.props;
    createBook(book);
    this.setState({ title: '', category: '' });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          required
        />
        <select
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
          required
        >
          <option disabled value="">Category</option>
          {
            categories.map(mappedCategory => (
              <option
                value={mappedCategory}
                key={mappedCategory}
              >
                {mappedCategory}
              </option>
            ))
          }
        </select>
  
        <input type="submit" />
      </form>
    );
  }  
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(BooksForm);
