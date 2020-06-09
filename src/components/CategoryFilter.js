import React from 'react';
import categories from '../helpers/categories';

const filters = ['All', ...categories()];

const CategoryFilter = () => {
  return (
    <div>
      <select>
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