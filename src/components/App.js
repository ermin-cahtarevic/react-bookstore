import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;