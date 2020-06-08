import React from 'react';

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
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
      <form>
        <input 
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <select
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        >
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

export default BooksForm;
