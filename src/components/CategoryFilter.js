import React from 'react';
import categories from '../helpers/categories';

const filters = ['All', ...categories()];

const CategoryFilter = ({ changeFilter }) => (
  <div>
    <select onChange={(e) => changeFilter(e.target.value)}>
      {
        filters.map(filter => (
          <option key={filter} value={filter}>{filter}</option>
        ))
      }
    </select>
  </div>
);

export default CategoryFilter;
