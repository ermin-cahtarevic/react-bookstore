import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const Dashboard = () => (
  <div>
    <BooksList />
    <BooksForm />
  </div>
);

export default Dashboard;
