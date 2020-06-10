import React from 'react';
import PropTypes from 'prop-types';
import '../styles/category-filter.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import categories from '../helpers/categories';

const filters = ['All', ...categories()];

const CategoryFilter = ({ changeFilter }) => (
  <div className="header">
    <div className="navbar">
      <div className="header-left">
        <div className="logo">Bookstore CMS</div>
        <div className="header-books">BOOKS</div>
        <select className="select" onChange={e => changeFilter(e.target.value)}>
          {
            filters.map(filter => (
              <option key={filter} value={filter}>{filter}</option>
            ))
          }
        </select>
      </div>
      <div className="user-icon">
        <FontAwesomeIcon
          icon={faUser}
          style={{
            color: '#0290ff',
          }}
        />
      </div>
    </div>
  </div>
);

CategoryFilter.propTypes = ({
  changeFilter: PropTypes.func.isRequired,
});

export default CategoryFilter;
