import React from 'react';

const BooksForm = () => {
  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi"
  ];

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />

      <label htmlFor="category">Choose a category:</label>
      <select>
        {
          categories.map(category => (
            <option 
              value={category}
              key={Math.round(Math.random()*100)}
            >
            {category}
            </option>
          ))
        }
      </select>

      <input type="submit" />
    </form>
  );
}

export default BooksForm;