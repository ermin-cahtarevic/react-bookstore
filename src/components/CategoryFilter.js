import React from 'react';
import categories from '../helpers/categories';

const filters = ['All', ...categories()];

const CategoryFilter = ({ changeFilter }) => {
  return (
    <div>
      <select onChange={changeFilter}>
        {
          filters.map(filter => (
            <option key={filter} value={filter}>{filter}</option>
          ))
        }
      </select>
    </div>
  );
};

export default CategoryFilter;