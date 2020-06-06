import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../styles/app.css';

const App = () => (
  <div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
