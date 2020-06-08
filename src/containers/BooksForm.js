import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" id="title" />
      </label>
      <label htmlFor="category">
        Choose a category:
        <select id="category">
          {
            categories.map(category => (
              <option
                value={category}
                key={Math.round(Math.random() * 100)}
              >
                {category}
              </option>
            ))
          }
        </select>
      </label>

      <input type="submit" />
    </form>
  );
};

export default BooksForm;
