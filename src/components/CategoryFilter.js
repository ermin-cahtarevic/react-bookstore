import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helpers/categories';

const filters = ['All', ...categories()];

const CategoryFilter = ({ changeFilter }) => (
  <div>
    <select onChange={e => changeFilter(e.target.value)}>
      {
        filters.map(filter => (
          <option key={filter} value={filter}>{filter}</option>
        ))
      }
    </select>
  </div>
);

CategoryFilter.propTypes = ({
  changeFilter: PropTypes.func.isRequired,
});

export default CategoryFilter;
