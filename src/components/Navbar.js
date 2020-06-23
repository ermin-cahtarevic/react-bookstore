import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/category-filter.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { useStore } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import Login from './authentication/Login';

const Navbar = ({ isAuth, changeFilter, history }) => {
  const store = useStore();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token && !isAuth) {
      store.dispatch({
        type: 'USER_LOADED',
      });
    }
  });

  const handleLogOut = () => {
    store.dispatch({
      type: 'LOGOUT_SUCCESS',
    });
    store.dispatch({
      type: 'CLEAR_BOOKS',
    });
    history.push('/');
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="header-left">
          <div className="logo">Bookstore CMS</div>
          {
            isAuth
              && (
              <div className="books-ctg">
                <div className="header-books">BOOKS</div>
                <CategoryFilter changeFilter={changeFilter} />
              </div>
              )
          }
        </div>
        {
            isAuth
              ? (
                <div className="user-icon dropdown">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: '#0290ff',
                    }}
                    className="dropbtn"
                  />
                  <div className="dropdown-content">
                    <div
                      role="button"
                      tabIndex={0}
                      className="log-out"
                      onClick={handleLogOut}
                      onKeyDown={handleLogOut}
                    >
                      Log out
                    </div>
                  </div>
                </div>
              )
              : <Login />
          }
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  changeFilter: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default withRouter(Navbar);
