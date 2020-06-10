import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/index';
import getId from './helpers/getId';

const initialState = {
  books: [
    {
      title: 'The Hunger Games',
      category: 'Action',
      id: getId(),
    },
    {
      title: 'Dune',
      category: 'Sci-Fi',
      id: getId(),
    },
    {
      title: 'Capital in the Twenty-First Century',
      category: 'Learning',
      id: getId(),
    },
  ],
};

const store = createStore(reducer(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
